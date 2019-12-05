"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddNoteClient_1 = require("./clients/AddNoteClient");
const FindNotesClient_1 = require("./clients/FindNotesClient");
const Logger_1 = require("polar-shared/src/logger/Logger");
const StoreMediaFileClient_1 = require("./clients/StoreMediaFileClient");
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const MediaContents_1 = require("./MediaContents");
const AnkiFields_1 = require("./AnkiFields");
const CanAddNotesClient_1 = require("./clients/CanAddNotesClient");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const util = __importStar(require("util"));
const log = Logger_1.Logger.create();
class NotesSync {
    constructor(syncQueue) {
        this.addNoteClient = new AddNoteClient_1.AddNoteClient();
        this.canAddNotesClient = new CanAddNotesClient_1.CanAddNotesClient();
        this.findNotesClient = new FindNotesClient_1.FindNotesClient();
        this.storeMediaFileClient = new StoreMediaFileClient_1.StoreMediaFileClient();
        this.results = {
            created: []
        };
        this.syncQueue = syncQueue;
    }
    enqueue(noteDescriptors) {
        this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
            return yield this.findNotes(noteDescriptors);
        }));
        return this.results;
    }
    findNotes(noteDescriptors) {
        return __awaiter(this, void 0, void 0, function* () {
            const normalizedNotes = noteDescriptors.map(current => this.normalize(current));
            normalizedNotes.forEach(normalizedNote => {
                this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
                    return yield this.findNote(normalizedNote);
                }));
            });
            const message = `Performing sync on ${noteDescriptors.length} notes.`;
            return Optional_1.Optional.of({ message });
        });
    }
    findNote(normalizedNote) {
        return __awaiter(this, void 0, void 0, function* () {
            const polarGUID = NotesSync.createPolarID(normalizedNote.noteDescriptor.guid);
            const existingIDs = yield this.findNotesClient.execute(`tag:${polarGUID.format()}`);
            if (existingIDs.length === 0) {
                normalizedNote.noteDescriptor.tags.push("_polar-flashcard");
                if (!normalizedNote.noteDescriptor.tags.includes(polarGUID.format())) {
                    normalizedNote.noteDescriptor.tags.push(polarGUID.format());
                }
                this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () { return yield this.canAddNote(normalizedNote); }));
                const message = `Note not found.  Checking if we can add.`;
                log.debug(message, normalizedNote);
                return Optional_1.Optional.of({ message });
            }
            else {
                const message = 'Note already found. Skipping.';
                log.debug(message, normalizedNote);
                return Optional_1.Optional.of({ message });
            }
        });
    }
    canAddNote(normalizedNote) {
        return __awaiter(this, void 0, void 0, function* () {
            const canAddNotes = yield this.canAddNotesClient.execute([normalizedNote.noteDescriptor]);
            let message;
            this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () { return yield this.addNote(normalizedNote); }));
            if (canAddNotes.length > 0 && canAddNotes[0]) {
                message = 'Note can be added';
            }
            else {
                message = 'Note already exists';
            }
            log.debug(message, normalizedNote);
            return Optional_1.Optional.of({ message });
        });
    }
    storeMediaFile(mediaFile) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storeMediaFileClient.execute(mediaFile.filename, mediaFile.data);
            return Optional_1.Optional.of({ message: `Sync'd media file: ${mediaFile.filename}` });
        });
    }
    addNote(normalizedNote) {
        return __awaiter(this, void 0, void 0, function* () {
            let message = `Added note and ${normalizedNote.mediaFiles.length} media files.`;
            try {
                normalizedNote.mediaFiles.forEach(current => {
                    this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () { return this.storeMediaFile(current); }));
                });
                yield this.addNoteClient.execute(normalizedNote.noteDescriptor);
                this.results.created.push(normalizedNote.noteDescriptor);
            }
            catch (err) {
                message = "Failed to create note: " + this.pp(normalizedNote.noteDescriptor);
                log.warn(message, err);
                return Optional_1.Optional.of({ message, failed: true });
            }
            return Optional_1.Optional.of({ message });
        });
    }
    pp(noteDescriptor) {
        return util.inspect(noteDescriptor, false, undefined, false);
    }
    normalize(noteDescriptor) {
        const mediaFiles = [];
        let fields = {};
        Dictionaries_1.Dictionaries.forDict(noteDescriptor.fields, (key, value) => {
            const mediaContent = MediaContents_1.MediaContents.parse(value);
            fields[key] = mediaContent.content;
            mediaFiles.push(...mediaContent.mediaFiles);
        });
        fields = AnkiFields_1.AnkiFields.normalize(fields);
        const normalizedNoteDescriptor = {
            guid: noteDescriptor.guid,
            deckName: noteDescriptor.deckName,
            modelName: noteDescriptor.modelName,
            fields,
            tags: noteDescriptor.tags
        };
        return {
            noteDescriptor: normalizedNoteDescriptor,
            mediaFiles
        };
    }
    static createPolarID(guid) {
        return new Tag('polar_guid', guid);
    }
}
exports.NotesSync = NotesSync;
class Tag {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    format() {
        return `${this.name}:${this.value}`;
    }
}
exports.Tag = Tag;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZXNTeW5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTm90ZXNTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJEQUFzRTtBQUN0RSwrREFBNEU7QUFFNUUsMkRBQXNEO0FBQ3RELHlFQUFzRztBQUN0RyxxRUFBZ0U7QUFDaEUsbURBQThDO0FBQzlDLDZDQUF3QztBQUN4QyxtRUFBa0Y7QUFFbEYsZ0VBQTJEO0FBQzNELDJDQUE2QjtBQUU3QixNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFLNUIsTUFBYSxTQUFTO0lBb0JsQixZQUFZLFNBQW9CO1FBbEJ6QixrQkFBYSxHQUFtQixJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUVwRCxzQkFBaUIsR0FBdUIsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1FBRWhFLG9CQUFlLEdBQXFCLElBQUksaUNBQWUsRUFBRSxDQUFDO1FBRTFELHlCQUFvQixHQUEwQixJQUFJLDJDQUFvQixFQUFFLENBQUM7UUFJeEUsWUFBTyxHQUFzQjtZQUNqQyxPQUFPLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFPRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBT00sT0FBTyxDQUFDLGVBQWlDO1FBRTVDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQVMsRUFBRTtZQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBRXhCLENBQUM7SUFFYSxTQUFTLENBQUMsZUFBaUM7O1lBRXJELE1BQU0sZUFBZSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFaEYsZUFB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R0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVNLE1BQU07UUFDVCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztDQUVKO0FBZEQsa0JBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05vdGVEZXNjcmlwdG9yfSBmcm9tICcuL05vdGVEZXNjcmlwdG9yJztcbmltcG9ydCB7QWRkTm90ZUNsaWVudCwgSUFkZE5vdGVDbGllbnR9IGZyb20gJy4vY2xpZW50cy9BZGROb3RlQ2xpZW50JztcbmltcG9ydCB7RmluZE5vdGVzQ2xpZW50LCBJRmluZE5vdGVzQ2xpZW50fSBmcm9tICcuL2NsaWVudHMvRmluZE5vdGVzQ2xpZW50JztcbmltcG9ydCB7U3luY1F1ZXVlfSBmcm9tICcuLi9TeW5jUXVldWUnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0lTdG9yZU1lZGlhRmlsZUNsaWVudCwgTWVkaWFGaWxlLCBTdG9yZU1lZGlhRmlsZUNsaWVudH0gZnJvbSAnLi9jbGllbnRzL1N0b3JlTWVkaWFGaWxlQ2xpZW50JztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRGljdGlvbmFyaWVzJztcbmltcG9ydCB7TWVkaWFDb250ZW50c30gZnJvbSAnLi9NZWRpYUNvbnRlbnRzJztcbmltcG9ydCB7QW5raUZpZWxkc30gZnJvbSAnLi9BbmtpRmllbGRzJztcbmltcG9ydCB7Q2FuQWRkTm90ZXNDbGllbnQsIElDYW5BZGROb3Rlc0NsaWVudH0gZnJvbSAnLi9jbGllbnRzL0NhbkFkZE5vdGVzQ2xpZW50JztcbmltcG9ydCB7U3luY1Rhc2tSZXN1bHR9IGZyb20gJy4uL1N5bmNUYXNrJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gXCJ1dGlsXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBzeW5jIG9mIG5vdGVzIG9uY2Ugd2UgYXJlIGNlcnRhaW4gdGhlIGRlY2tzIGFyZSBjcmVhdGVkLlxuICovXG5leHBvcnQgY2xhc3MgTm90ZXNTeW5jIHtcblxuICAgIHB1YmxpYyBhZGROb3RlQ2xpZW50OiBJQWRkTm90ZUNsaWVudCA9IG5ldyBBZGROb3RlQ2xpZW50KCk7XG5cbiAgICBwdWJsaWMgY2FuQWRkTm90ZXNDbGllbnQ6IElDYW5BZGROb3Rlc0NsaWVudCA9IG5ldyBDYW5BZGROb3Rlc0NsaWVudCgpO1xuXG4gICAgcHVibGljIGZpbmROb3Rlc0NsaWVudDogSUZpbmROb3Rlc0NsaWVudCA9IG5ldyBGaW5kTm90ZXNDbGllbnQoKTtcblxuICAgIHB1YmxpYyBzdG9yZU1lZGlhRmlsZUNsaWVudDogSVN0b3JlTWVkaWFGaWxlQ2xpZW50ID0gbmV3IFN0b3JlTWVkaWFGaWxlQ2xpZW50KCk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHN5bmNRdWV1ZTogU3luY1F1ZXVlO1xuXG4gICAgcHJpdmF0ZSByZXN1bHRzOiBOb3Rlc1N5bmNocm9uaXplZCA9IHtcbiAgICAgICAgY3JlYXRlZDogW11cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc3luY1F1ZXVlIFRoZSBxdWV1ZSB0byB1c2UgZm9yIGFzeW5jIG9wZXJhdGlvbnMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc3luY1F1ZXVlOiBTeW5jUXVldWUpIHtcbiAgICAgICAgdGhpcy5zeW5jUXVldWUgPSBzeW5jUXVldWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybSB0aGUgYWN0dWFsIHN5bmMgb2YgdGhlIG5vdGVzIHRvIEFua2kuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbm90ZURlc2NyaXB0b3JzIFRoZSBub3RlcyB3ZSBuZWVkIHRvIHN5bmMuXG4gICAgICovXG4gICAgcHVibGljIGVucXVldWUobm90ZURlc2NyaXB0b3JzOiBOb3RlRGVzY3JpcHRvcltdKTogTm90ZXNTeW5jaHJvbml6ZWQge1xuXG4gICAgICAgIHRoaXMuc3luY1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5maW5kTm90ZXMobm90ZURlc2NyaXB0b3JzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0cztcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZmluZE5vdGVzKG5vdGVEZXNjcmlwdG9yczogTm90ZURlc2NyaXB0b3JbXSk6IFByb21pc2U8T3B0aW9uYWw8U3luY1Rhc2tSZXN1bHQ+PiB7XG5cbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZE5vdGVzID0gbm90ZURlc2NyaXB0b3JzLm1hcChjdXJyZW50ID0+IHRoaXMubm9ybWFsaXplKGN1cnJlbnQpKTtcblxuICAgICAgICBub3JtYWxpemVkTm90ZXMuZm9yRWFjaChub3JtYWxpemVkTm90ZSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuc3luY1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmluZE5vdGUobm9ybWFsaXplZE5vdGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBQZXJmb3JtaW5nIHN5bmMgb24gJHtub3RlRGVzY3JpcHRvcnMubGVuZ3RofSBub3Rlcy5gO1xuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7bWVzc2FnZX0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBmaW5kTm90ZShub3JtYWxpemVkTm90ZTogTm9ybWFsaXplZE5vdGUpOiBQcm9taXNlPE9wdGlvbmFsPFN5bmNUYXNrUmVzdWx0Pj4ge1xuXG4gICAgICAgIGNvbnN0IHBvbGFyR1VJRCA9IE5vdGVzU3luYy5jcmVhdGVQb2xhcklEKG5vcm1hbGl6ZWROb3RlLm5vdGVEZXNjcmlwdG9yLmd1aWQpO1xuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSURzID0gYXdhaXQgdGhpcy5maW5kTm90ZXNDbGllbnQuZXhlY3V0ZShgdGFnOiR7cG9sYXJHVUlELmZvcm1hdCgpfWApO1xuXG4gICAgICAgIGlmIChleGlzdGluZ0lEcy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICAgICAgLy8gYWRkIGEgc3BlY2lhbCB0YWcgc28gdGhhdCB1c2VycyBjYW4gYmFjayBvdXQgcG9sYXIgZmxhc2hjYXJkc1xuICAgICAgICAgICAgLy8gYW5kIGRlbGV0ZSB0aGVtIGlmIG5lY2Vzc2FyeS5cbiAgICAgICAgICAgIG5vcm1hbGl6ZWROb3RlLm5vdGVEZXNjcmlwdG9yLnRhZ3MucHVzaChcIl9wb2xhci1mbGFzaGNhcmRcIik7XG5cbiAgICAgICAgICAgIGlmICghIG5vcm1hbGl6ZWROb3RlLm5vdGVEZXNjcmlwdG9yLnRhZ3MuaW5jbHVkZXMocG9sYXJHVUlELmZvcm1hdCgpKSkge1xuICAgICAgICAgICAgICAgIC8vICBtYWtlIHN1cmUgdGhlIG5vdGVEZXNjcmlwdG9yIGhhcyB0aGUgcHJvcGVyIHRhZy5cbiAgICAgICAgICAgICAgICBub3JtYWxpemVkTm90ZS5ub3RlRGVzY3JpcHRvci50YWdzLnB1c2gocG9sYXJHVUlELmZvcm1hdCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zeW5jUXVldWUuYWRkKGFzeW5jICgpID0+IGF3YWl0IHRoaXMuY2FuQWRkTm90ZShub3JtYWxpemVkTm90ZSkpO1xuXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYE5vdGUgbm90IGZvdW5kLiAgQ2hlY2tpbmcgaWYgd2UgY2FuIGFkZC5gO1xuXG4gICAgICAgICAgICBsb2cuZGVidWcobWVzc2FnZSwgbm9ybWFsaXplZE5vdGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yoe21lc3NhZ2V9KTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vdGUgYWxyZWFkeSBmb3VuZC4gU2tpcHBpbmcuJztcblxuICAgICAgICAgICAgbG9nLmRlYnVnKG1lc3NhZ2UsIG5vcm1hbGl6ZWROb3RlKTtcblxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHttZXNzYWdlfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgY2FuQWRkTm90ZShub3JtYWxpemVkTm90ZTogTm9ybWFsaXplZE5vdGUpOiBQcm9taXNlPE9wdGlvbmFsPFN5bmNUYXNrUmVzdWx0Pj4ge1xuXG4gICAgICAgIGNvbnN0IGNhbkFkZE5vdGVzID0gYXdhaXQgdGhpcy5jYW5BZGROb3Rlc0NsaWVudC5leGVjdXRlKFtub3JtYWxpemVkTm90ZS5ub3RlRGVzY3JpcHRvcl0pO1xuXG4gICAgICAgIGxldCBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgICAgICAgdGhpcy5zeW5jUXVldWUuYWRkKGFzeW5jICgpID0+IGF3YWl0IHRoaXMuYWRkTm90ZShub3JtYWxpemVkTm90ZSkpO1xuXG4gICAgICAgIGlmIChjYW5BZGROb3Rlcy5sZW5ndGggPiAwICYmIGNhbkFkZE5vdGVzWzBdKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gJ05vdGUgY2FuIGJlIGFkZGVkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAnTm90ZSBhbHJlYWR5IGV4aXN0cyc7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cuZGVidWcobWVzc2FnZSwgbm9ybWFsaXplZE5vdGUpO1xuICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yoe21lc3NhZ2V9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc3RvcmVNZWRpYUZpbGUobWVkaWFGaWxlOiBNZWRpYUZpbGUpOiBQcm9taXNlPE9wdGlvbmFsPFN5bmNUYXNrUmVzdWx0Pj4gIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yZU1lZGlhRmlsZUNsaWVudC5leGVjdXRlKG1lZGlhRmlsZS5maWxlbmFtZSwgbWVkaWFGaWxlLmRhdGEpO1xuICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yoe21lc3NhZ2U6IGBTeW5jJ2QgbWVkaWEgZmlsZTogJHttZWRpYUZpbGUuZmlsZW5hbWV9YH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgYWRkTm90ZShub3JtYWxpemVkTm90ZTogTm9ybWFsaXplZE5vdGUpOiBQcm9taXNlPE9wdGlvbmFsPFN5bmNUYXNrUmVzdWx0Pj4ge1xuXG4gICAgICAgIGxldCBtZXNzYWdlID0gYEFkZGVkIG5vdGUgYW5kICR7bm9ybWFsaXplZE5vdGUubWVkaWFGaWxlcy5sZW5ndGh9IG1lZGlhIGZpbGVzLmA7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgbm9ybWFsaXplZE5vdGUubWVkaWFGaWxlcy5mb3JFYWNoKGN1cnJlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3luY1F1ZXVlLmFkZChhc3luYyAoKSA9PiB0aGlzLnN0b3JlTWVkaWFGaWxlKGN1cnJlbnQpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFkZE5vdGVDbGllbnQuZXhlY3V0ZShub3JtYWxpemVkTm90ZS5ub3RlRGVzY3JpcHRvcik7XG5cbiAgICAgICAgICAgIHRoaXMucmVzdWx0cy5jcmVhdGVkLnB1c2gobm9ybWFsaXplZE5vdGUubm90ZURlc2NyaXB0b3IpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiRmFpbGVkIHRvIGNyZWF0ZSBub3RlOiBcIiArIHRoaXMucHAobm9ybWFsaXplZE5vdGUubm90ZURlc2NyaXB0b3IpO1xuICAgICAgICAgICAgbG9nLndhcm4obWVzc2FnZSwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7bWVzc2FnZSwgZmFpbGVkOiB0cnVlfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yoe21lc3NhZ2V9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgcHAobm90ZURlc2NyaXB0b3I6IE5vdGVEZXNjcmlwdG9yKSB7XG4gICAgICAgIHJldHVybiB1dGlsLmluc3BlY3Qobm90ZURlc2NyaXB0b3IsIGZhbHNlLCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5vcm1hbGl6ZShub3RlRGVzY3JpcHRvcjogTm90ZURlc2NyaXB0b3IpOiBOb3JtYWxpemVkTm90ZSB7XG5cbiAgICAgICAgY29uc3QgbWVkaWFGaWxlczogTWVkaWFGaWxlW10gPSBbXTtcbiAgICAgICAgbGV0IGZpZWxkczoge1tuYW1lOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbiAgICAgICAgRGljdGlvbmFyaWVzLmZvckRpY3Qobm90ZURlc2NyaXB0b3IuZmllbGRzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVkaWFDb250ZW50ID0gTWVkaWFDb250ZW50cy5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICBmaWVsZHNba2V5XSA9IG1lZGlhQ29udGVudC5jb250ZW50O1xuICAgICAgICAgICAgbWVkaWFGaWxlcy5wdXNoKC4uLm1lZGlhQ29udGVudC5tZWRpYUZpbGVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZmllbGRzID0gQW5raUZpZWxkcy5ub3JtYWxpemUoZmllbGRzKTtcblxuICAgICAgICBjb25zdCBub3JtYWxpemVkTm90ZURlc2NyaXB0b3I6IE5vdGVEZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgZ3VpZDogbm90ZURlc2NyaXB0b3IuZ3VpZCxcbiAgICAgICAgICAgIGRlY2tOYW1lOiBub3RlRGVzY3JpcHRvci5kZWNrTmFtZSxcbiAgICAgICAgICAgIG1vZGVsTmFtZTogbm90ZURlc2NyaXB0b3IubW9kZWxOYW1lLFxuICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgdGFnczogbm90ZURlc2NyaXB0b3IudGFnc1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub3RlRGVzY3JpcHRvcjogbm9ybWFsaXplZE5vdGVEZXNjcmlwdG9yLFxuICAgICAgICAgICAgbWVkaWFGaWxlc1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVQb2xhcklEKGd1aWQ6IHN0cmluZyk6IFRhZyB7XG4gICAgICAgIHJldHVybiBuZXcgVGFnKCdwb2xhcl9ndWlkJywgZ3VpZCk7XG4gICAgfVxuXG59XG5cbi8qKlxuICogQSBOb3RlRGVzY3JpcHRvciBjb250YWluZXIgd2hpY2ggaW5jbHVkZXMgdGhlIG5vcm1hbGl6ZSBkZXNjcmlwdG9yIGFuZCBhbHNvXG4gKiB0aGUgbWVkaWEuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTm9ybWFsaXplZE5vdGUge1xuXG4gICAgcmVhZG9ubHkgbm90ZURlc2NyaXB0b3I6IE5vdGVEZXNjcmlwdG9yO1xuXG4gICAgcmVhZG9ubHkgbWVkaWFGaWxlczogTWVkaWFGaWxlW107XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFnIHtcblxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG5cbn1cblxuZXhwb3J0IGNsYXNzIFRhZyBpbXBsZW1lbnRzIElUYWcge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGZvcm1hdCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfToke3RoaXMudmFsdWV9YDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3Rlc1N5bmNocm9uaXplZCB7XG5cbiAgICByZWFkb25seSBjcmVhdGVkOiBOb3RlRGVzY3JpcHRvcltdO1xuXG59XG4iXX0=