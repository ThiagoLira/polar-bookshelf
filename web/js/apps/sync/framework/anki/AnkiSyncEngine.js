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
Object.defineProperty(exports, "__esModule", { value: true });
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const AnkiSyncJob_1 = require("./AnkiSyncJob");
const DocInfos_1 = require("../../../../metadata/DocInfos");
const Tags_1 = require("polar-shared/src/tags/Tags");
const SetArrays_1 = require("polar-shared/src/util/SetArrays");
const FlashcardDescriptors_1 = require("./FlashcardDescriptors");
const AnkiConnectFetch_1 = require("./AnkiConnectFetch");
const Decks_1 = require("./Decks");
const ModelNamesClient_1 = require("./clients/ModelNamesClient");
const ModelNames_1 = require("./ModelNames");
class AnkiSyncEngine {
    constructor() {
        this.descriptor = new AnkiSyncEngineDescriptor();
    }
    sync(docMetaSupplierCollection, progress, deckNameStrategy = 'default') {
        return __awaiter(this, void 0, void 0, function* () {
            yield AnkiConnectFetch_1.AnkiConnectFetch.initialize();
            yield this.verifyRequiredModels();
            const noteDescriptors = yield this.toNoteDescriptors(deckNameStrategy, docMetaSupplierCollection);
            const deckNames = SetArrays_1.SetArrays.toSet(noteDescriptors.map(noteDescriptor => noteDescriptor.deckName));
            const deckDescriptors = Array.from(deckNames)
                .map(deckName => {
                return { name: deckName };
            });
            return new AnkiSyncJob_1.PendingAnkiSyncJob(progress, deckDescriptors, noteDescriptors);
        });
    }
    verifyRequiredModels() {
        return __awaiter(this, void 0, void 0, function* () {
            const modelNotesClient = new ModelNamesClient_1.ModelNamesClient();
            const modelNames = yield modelNotesClient.execute();
            ModelNames_1.ModelNames.verifyRequired(modelNames);
        });
    }
    toNoteDescriptors(deckNameStrategy, docMetaSupplierCollection) {
        return __awaiter(this, void 0, void 0, function* () {
            const flashcardDescriptors = yield FlashcardDescriptors_1.FlashcardDescriptors.toFlashcardDescriptors(docMetaSupplierCollection);
            return flashcardDescriptors.map(flashcardDescriptor => {
                const deckName = this.computeDeckName(deckNameStrategy, flashcardDescriptor.docMeta.docInfo);
                const fields = {};
                Dictionaries_1.Dictionaries.forDict(flashcardDescriptor.flashcard.fields, (key, value) => {
                    fields[key] = Optional_1.Optional.of(value.HTML || value.TEXT || value.MARKDOWN).getOrElse('');
                });
                const docInfoTags = Optional_1.Optional.of(flashcardDescriptor.docMeta.docInfo.tags);
                const tags = docInfoTags.map(current => Object.values(current))
                    .getOrElse([])
                    .map(tag => tag.label);
                const modelName = FlashcardDescriptors_1.FlashcardDescriptors.toModelName(flashcardDescriptor);
                return {
                    guid: flashcardDescriptor.flashcard.guid,
                    deckName,
                    modelName,
                    fields,
                    tags
                };
            });
        });
    }
    computeDeckName(deckNameStrategy, docInfo) {
        let deckName;
        const tags = docInfo.tags;
        if (tags) {
            deckName = Object.values(tags)
                .filter(tag => tag.label.startsWith("deck:"))
                .map(tag => Tags_1.Tags.parseTypedTag(tag.label))
                .filter(typedTag => typedTag.isPresent())
                .map(typedTag => typedTag.get())
                .map(typedTag => Decks_1.Decks.toSubDeck(typedTag.value))
                .pop();
        }
        if (!deckName) {
            if (deckNameStrategy === 'default') {
                return "Default";
            }
            deckName = DocInfos_1.DocInfos.bestTitle(docInfo);
        }
        return deckName;
    }
}
exports.AnkiSyncEngine = AnkiSyncEngine;
class AnkiSyncEngineDescriptor {
    constructor() {
        this.id = "a0138889-ff14-41e8-9466-42d960fe80d9";
        this.name = "anki";
        this.description = "Sync Engine for Anki";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5raVN5bmNFbmdpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbmtpU3luY0VuZ2luZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLHFFQUFnRTtBQUloRSxnRUFBMkQ7QUFDM0QsK0NBQWlEO0FBQ2pELDREQUF1RDtBQUN2RCxxREFBZ0Q7QUFHaEQsK0RBQTBEO0FBRTFELGlFQUE0RDtBQUM1RCx5REFBb0Q7QUFDcEQsbUNBQThCO0FBQzlCLGlFQUE0RDtBQUM1RCw2Q0FBd0M7QUFPeEMsTUFBYSxjQUFjO0lBQTNCO1FBRW9CLGVBQVUsR0FBeUIsSUFBSSx3QkFBd0IsRUFBRSxDQUFDO0lBcUd0RixDQUFDO0lBbkdnQixJQUFJLENBQUMseUJBQW9ELEVBQ3BELFFBQThCLEVBQzlCLG1CQUFxQyxTQUFTOztZQUc1RCxNQUFNLG1DQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBRXBDLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFFbEMsTUFBTSxlQUFlLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUseUJBQXlCLENBQUMsQ0FBQztZQUVsRyxNQUFNLFNBQVMsR0FBRyxxQkFBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFbEcsTUFBTSxlQUFlLEdBQXFCLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2lCQUMxRCxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ1osT0FBTyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUVQLE9BQU8sSUFBSSxnQ0FBa0IsQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRTlFLENBQUM7S0FBQTtJQUVhLG9CQUFvQjs7WUFDOUIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7WUFDaEQsTUFBTSxVQUFVLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwRCx1QkFBVSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFFZSxpQkFBaUIsQ0FBQyxnQkFBa0MsRUFDbEMseUJBQW9EOztZQUVsRixNQUFPLG9CQUFvQixHQUFHLE1BQU0sMkNBQW9CLENBQUMsc0JBQXNCLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUUzRyxPQUFPLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO2dCQUVsRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFN0YsTUFBTSxNQUFNLEdBQTZCLEVBQUUsQ0FBQztnQkFHNUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDdEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLG1CQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RixDQUFDLENBQUMsQ0FBQztnQkFFSCxNQUFNLFdBQVcsR0FBRyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUUxRSxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDbkQsU0FBUyxDQUFDLEVBQUUsQ0FBQztxQkFDYixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBSWxDLE1BQU0sU0FBUyxHQUFHLDJDQUFvQixDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUV4RSxPQUFPO29CQUNILElBQUksRUFBRSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsSUFBSTtvQkFDeEMsUUFBUTtvQkFDUixTQUFTO29CQUNULE1BQU07b0JBQ04sSUFBSTtpQkFDUCxDQUFDO1lBRU4sQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFFUyxlQUFlLENBQUMsZ0JBQWtDLEVBQUUsT0FBaUI7UUFFM0UsSUFBSSxRQUE0QixDQUFDO1FBRWpDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFMUIsSUFBSSxJQUFJLEVBQUU7WUFJTixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7aUJBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM1QyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUN4QyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQy9CLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNoRCxHQUFHLEVBQUUsQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFFLFFBQVEsRUFBRTtZQUVaLElBQUksZ0JBQWdCLEtBQUssU0FBUyxFQUFFO2dCQUNoQyxPQUFPLFNBQVMsQ0FBQzthQUNwQjtZQUVELFFBQVEsR0FBRyxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUUxQztRQUVELE9BQU8sUUFBUSxDQUFDO0lBRXBCLENBQUM7Q0FFSjtBQXZHRCx3Q0F1R0M7QUFHRCxNQUFNLHdCQUF3QjtJQUE5QjtRQUVvQixPQUFFLEdBQVcsc0NBQXNDLENBQUM7UUFFcEQsU0FBSSxHQUFXLE1BQU0sQ0FBQztRQUV0QixnQkFBVyxHQUFXLHNCQUFzQixDQUFDO0lBRWpFLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3luY0VuZ2luZX0gZnJvbSAnLi4vU3luY0VuZ2luZSc7XG5pbXBvcnQge1N5bmNFbmdpbmVEZXNjcmlwdG9yfSBmcm9tICcuLi9TeW5jRW5naW5lRGVzY3JpcHRvcic7XG5pbXBvcnQge0RvY01ldGFTZXR9IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0RvY01ldGFTZXQnO1xuaW1wb3J0IHtTeW5jUHJvZ3Jlc3NMaXN0ZW5lcn0gZnJvbSAnLi4vU3luY1Byb2dyZXNzTGlzdGVuZXInO1xuaW1wb3J0IHtQZW5kaW5nU3luY0pvYn0gZnJvbSAnLi4vU3luY0pvYic7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtGbGFzaGNhcmR9IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0ZsYXNoY2FyZCc7XG5pbXBvcnQge1BhZ2VJbmZvfSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9QYWdlSW5mbyc7XG5pbXBvcnQge0RpY3Rpb25hcmllc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0RpY3Rpb25hcmllcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7RGVja0Rlc2NyaXB0b3J9IGZyb20gJy4vRGVja0Rlc2NyaXB0b3InO1xuaW1wb3J0IHtOb3RlRGVzY3JpcHRvcn0gZnJvbSAnLi9Ob3RlRGVzY3JpcHRvcic7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtQZW5kaW5nQW5raVN5bmNKb2J9IGZyb20gJy4vQW5raVN5bmNKb2InO1xuaW1wb3J0IHtEb2NJbmZvc30gZnJvbSAnLi4vLi4vLi4vLi4vbWV0YWRhdGEvRG9jSW5mb3MnO1xuaW1wb3J0IHtUYWdzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3RhZ3MvVGFncyc7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtEb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uJztcbmltcG9ydCB7U2V0QXJyYXlzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvU2V0QXJyYXlzJztcbmltcG9ydCB7Rmxhc2hjYXJkRGVzY3JpcHRvcn0gZnJvbSAnLi9GbGFzaGNhcmREZXNjcmlwdG9yJztcbmltcG9ydCB7Rmxhc2hjYXJkRGVzY3JpcHRvcnN9IGZyb20gJy4vRmxhc2hjYXJkRGVzY3JpcHRvcnMnO1xuaW1wb3J0IHtBbmtpQ29ubmVjdEZldGNofSBmcm9tICcuL0Fua2lDb25uZWN0RmV0Y2gnO1xuaW1wb3J0IHtEZWNrc30gZnJvbSAnLi9EZWNrcyc7XG5pbXBvcnQge01vZGVsTmFtZXNDbGllbnR9IGZyb20gXCIuL2NsaWVudHMvTW9kZWxOYW1lc0NsaWVudFwiO1xuaW1wb3J0IHtNb2RlbE5hbWVzfSBmcm9tIFwiLi9Nb2RlbE5hbWVzXCI7XG5pbXBvcnQge0lEb2NJbmZvfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jSW5mb1wiO1xuXG4vKipcbiAqIFN5bmMgZW5naW5lIGZvciBBbmtpLiAgVGFrZXMgY2FyZHMgcmVnaXN0ZXJlZCBpbiBhIERvY01ldGEgYW5kIHRoZW4gdHJhbnNmZXJzXG4gKiB0aGVtIG92ZXIgdG8gQW5raS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFua2lTeW5jRW5naW5lIGltcGxlbWVudHMgU3luY0VuZ2luZSB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZGVzY3JpcHRvcjogU3luY0VuZ2luZURlc2NyaXB0b3IgPSBuZXcgQW5raVN5bmNFbmdpbmVEZXNjcmlwdG9yKCk7XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luYyhkb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uOiBEb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiBTeW5jUHJvZ3Jlc3NMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgICBkZWNrTmFtZVN0cmF0ZWd5OiBEZWNrTmFtZVN0cmF0ZWd5ID0gJ2RlZmF1bHQnKTogUHJvbWlzZTxQZW5kaW5nU3luY0pvYj4ge1xuXG4gICAgICAgIC8vIGRldGVybWluZSBob3cgdG8gY29ubmVjdCB0byBBbmtpXG4gICAgICAgIGF3YWl0IEFua2lDb25uZWN0RmV0Y2guaW5pdGlhbGl6ZSgpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMudmVyaWZ5UmVxdWlyZWRNb2RlbHMoKTtcblxuICAgICAgICBjb25zdCBub3RlRGVzY3JpcHRvcnMgPSBhd2FpdCB0aGlzLnRvTm90ZURlc2NyaXB0b3JzKGRlY2tOYW1lU3RyYXRlZ3ksIGRvY01ldGFTdXBwbGllckNvbGxlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IGRlY2tOYW1lcyA9IFNldEFycmF5cy50b1NldChub3RlRGVzY3JpcHRvcnMubWFwKG5vdGVEZXNjcmlwdG9yID0+IG5vdGVEZXNjcmlwdG9yLmRlY2tOYW1lKSk7XG5cbiAgICAgICAgY29uc3QgZGVja0Rlc2NyaXB0b3JzOiBEZWNrRGVzY3JpcHRvcltdID0gQXJyYXkuZnJvbShkZWNrTmFtZXMpXG4gICAgICAgICAgICAubWFwKGRlY2tOYW1lID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge25hbWU6IGRlY2tOYW1lfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgUGVuZGluZ0Fua2lTeW5jSm9iKHByb2dyZXNzLCBkZWNrRGVzY3JpcHRvcnMsIG5vdGVEZXNjcmlwdG9ycyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHZlcmlmeVJlcXVpcmVkTW9kZWxzKCkge1xuICAgICAgICBjb25zdCBtb2RlbE5vdGVzQ2xpZW50ID0gbmV3IE1vZGVsTmFtZXNDbGllbnQoKTtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lcyA9IGF3YWl0IG1vZGVsTm90ZXNDbGllbnQuZXhlY3V0ZSgpO1xuICAgICAgICBNb2RlbE5hbWVzLnZlcmlmeVJlcXVpcmVkKG1vZGVsTmFtZXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyB0b05vdGVEZXNjcmlwdG9ycyhkZWNrTmFtZVN0cmF0ZWd5OiBEZWNrTmFtZVN0cmF0ZWd5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uOiBEb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uKTogUHJvbWlzZTxOb3RlRGVzY3JpcHRvcltdPiB7XG5cbiAgICAgICAgY29uc3QgIGZsYXNoY2FyZERlc2NyaXB0b3JzID0gYXdhaXQgRmxhc2hjYXJkRGVzY3JpcHRvcnMudG9GbGFzaGNhcmREZXNjcmlwdG9ycyhkb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gZmxhc2hjYXJkRGVzY3JpcHRvcnMubWFwKGZsYXNoY2FyZERlc2NyaXB0b3IgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBkZWNrTmFtZSA9IHRoaXMuY29tcHV0ZURlY2tOYW1lKGRlY2tOYW1lU3RyYXRlZ3ksIGZsYXNoY2FyZERlc2NyaXB0b3IuZG9jTWV0YS5kb2NJbmZvKTtcblxuICAgICAgICAgICAgY29uc3QgZmllbGRzOiB7W25hbWU6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICAgICAgICAgICAgLy8gbmVlZCB0byBjcmVhdGUgdGhlIGZpZWxkcyAnZnJvbnQnIGFuZCAnYmFjaydcbiAgICAgICAgICAgIERpY3Rpb25hcmllcy5mb3JEaWN0KGZsYXNoY2FyZERlc2NyaXB0b3IuZmxhc2hjYXJkLmZpZWxkcywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBmaWVsZHNba2V5XSA9IE9wdGlvbmFsLm9mKHZhbHVlLkhUTUwgfHwgdmFsdWUuVEVYVCB8fCB2YWx1ZS5NQVJLRE9XTikuZ2V0T3JFbHNlKCcnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkb2NJbmZvVGFncyA9IE9wdGlvbmFsLm9mKGZsYXNoY2FyZERlc2NyaXB0b3IuZG9jTWV0YS5kb2NJbmZvLnRhZ3MpO1xuXG4gICAgICAgICAgICBjb25zdCB0YWdzID0gZG9jSW5mb1RhZ3MubWFwKGN1cnJlbnQgPT4gT2JqZWN0LnZhbHVlcyhjdXJyZW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgLmdldE9yRWxzZShbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh0YWcgPT4gdGFnLmxhYmVsKTtcblxuICAgICAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50IG1vcmUgbW9kZWwgdHlwZXMuLi4gbm90IGp1c3QgYmFzaWMuXG5cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IEZsYXNoY2FyZERlc2NyaXB0b3JzLnRvTW9kZWxOYW1lKGZsYXNoY2FyZERlc2NyaXB0b3IpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGd1aWQ6IGZsYXNoY2FyZERlc2NyaXB0b3IuZmxhc2hjYXJkLmd1aWQsXG4gICAgICAgICAgICAgICAgZGVja05hbWUsXG4gICAgICAgICAgICAgICAgbW9kZWxOYW1lLFxuICAgICAgICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAgICAgICB0YWdzXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbXB1dGVEZWNrTmFtZShkZWNrTmFtZVN0cmF0ZWd5OiBEZWNrTmFtZVN0cmF0ZWd5LCBkb2NJbmZvOiBJRG9jSW5mbyk6IHN0cmluZyB7XG5cbiAgICAgICAgbGV0IGRlY2tOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgY29uc3QgdGFncyA9IGRvY0luZm8udGFncztcblxuICAgICAgICBpZiAodGFncykge1xuXG4gICAgICAgICAgICAvLyBUT0RPOiB0ZXN0IHRoaXMuLlxuXG4gICAgICAgICAgICBkZWNrTmFtZSA9IE9iamVjdC52YWx1ZXModGFncylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHRhZyA9PiB0YWcubGFiZWwuc3RhcnRzV2l0aChcImRlY2s6XCIpKVxuICAgICAgICAgICAgICAgIC5tYXAodGFnID0+IFRhZ3MucGFyc2VUeXBlZFRhZyh0YWcubGFiZWwpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodHlwZWRUYWcgPT4gdHlwZWRUYWcuaXNQcmVzZW50KCkpXG4gICAgICAgICAgICAgICAgLm1hcCh0eXBlZFRhZyA9PiB0eXBlZFRhZy5nZXQoKSlcbiAgICAgICAgICAgICAgICAubWFwKHR5cGVkVGFnID0+IERlY2tzLnRvU3ViRGVjayh0eXBlZFRhZy52YWx1ZSkpXG4gICAgICAgICAgICAgICAgLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEgZGVja05hbWUpIHtcblxuICAgICAgICAgICAgaWYgKGRlY2tOYW1lU3RyYXRlZ3kgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIkRlZmF1bHRcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVja05hbWUgPSBEb2NJbmZvcy5iZXN0VGl0bGUoZG9jSW5mbyk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWNrTmFtZTtcblxuICAgIH1cblxufVxuXG5cbmNsYXNzIEFua2lTeW5jRW5naW5lRGVzY3JpcHRvciBpbXBsZW1lbnRzIFN5bmNFbmdpbmVEZXNjcmlwdG9yIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nID0gXCJhMDEzODg4OS1mZjE0LTQxZTgtOTQ2Ni00MmQ5NjBmZTgwZDlcIjtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcgPSBcImFua2lcIjtcblxuICAgIHB1YmxpYyByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nID0gXCJTeW5jIEVuZ2luZSBmb3IgQW5raVwiO1xuXG59XG5cbi8qKlxuICogVGhlIHN0cmF0ZWd5IGZvciBjb21wdXRpbmcgdGhlIGRlY2sgbmFtZSBmb3IgdGhlIGZsYXNoY2FyZHMuXG4gKlxuICogZGVmYXVsdDogVXNlIHRoZSBEZWZhdWx0IGRlY2suXG4gKlxuICogcGVyLWRvY3VtZW50OiBDcmVhdGUgYSBkZWNrIHBlciBkb2N1bWVudC5cbiAqL1xuZXhwb3J0IHR5cGUgRGVja05hbWVTdHJhdGVneSA9ICdkZWZhdWx0JyB8ICdwZXItZG9jdW1lbnQnO1xuIl19