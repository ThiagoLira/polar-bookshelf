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
const SetArrays_1 = require("polar-shared/src/util/SetArrays");
const CreateDeckClient_1 = require("./clients/CreateDeckClient");
const DeckNamesAndIdsClient_1 = require("./clients/DeckNamesAndIdsClient");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const log = Logger_1.Logger.create();
class DecksSync {
    constructor(syncQueue) {
        this.createDeckClient = new CreateDeckClient_1.CreateDeckClient();
        this.deckNamesAndIdsClient = new DeckNamesAndIdsClient_1.DeckNamesAndIdsClient();
        this.missingDecks = [];
        this.missingDeckDescriptors = [];
        this.syncQueue = syncQueue;
    }
    enqueue(deckDescriptors) {
        this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
            return yield this.findExistingDecks(deckDescriptors);
        }));
        this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
            return yield this.createMissingDecks();
        }));
        return this.missingDeckDescriptors;
    }
    findExistingDecks(deckDescriptors) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Fetching existing decks for deckDescriptors: ", deckDescriptors);
            const deckNamesAndIds = yield this.deckNamesAndIdsClient.execute();
            const currentDecks = Object.keys(deckNamesAndIds);
            const expectedDecks = deckDescriptors.map(current => current.name);
            this.missingDecks.push(...SetArrays_1.SetArrays.difference(expectedDecks, currentDecks));
            const message = `Found ${this.missingDecks.length} missing decks from a total of ${currentDecks.length}`;
            log.info(message);
            this.missingDeckDescriptors.push(...this.missingDecks.map(name => ({ name })));
            return Optional_1.Optional.of({ message });
        });
    }
    createMissingDecks() {
        return __awaiter(this, void 0, void 0, function* () {
            this.missingDecks.forEach(missingDeck => {
                this.syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
                    return yield this.createMissingDeck(missingDeck);
                }));
            });
            const message = `Creating ${this.missingDecks.length} decks.`;
            return Optional_1.Optional.of({ message });
        });
    }
    createMissingDeck(missingDeck) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = `Creating missing deck: ${missingDeck}`;
            log.info(message);
            yield this.createDeckClient.execute(missingDeck);
            return Optional_1.Optional.of({ message });
        });
    }
}
exports.DecksSync = DecksSync;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVja3NTeW5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVja3NTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBS0EsK0RBQTBEO0FBQzFELGlFQUErRTtBQUMvRSwyRUFBOEY7QUFHOUYsMkRBQXNEO0FBRXRELGdFQUEyRDtBQUkzRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFLNUIsTUFBYSxTQUFTO0lBaUJsQixZQUFZLFNBQW9CO1FBZnpCLHFCQUFnQixHQUFzQixJQUFJLG1DQUFnQixFQUFFLENBQUM7UUFFN0QsMEJBQXFCLEdBQTJCLElBQUksNkNBQXFCLEVBQUUsQ0FBQztRQUVsRSxpQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUU1QiwyQkFBc0IsR0FBcUIsRUFBRSxDQUFDO1FBVTNELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFRTSxPQUFPLENBQUMsZUFBaUM7UUFFNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO1lBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQVMsRUFBRTtZQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDM0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBRXZDLENBQUM7SUFFYSxpQkFBaUIsQ0FBQyxlQUFpQzs7WUFFN0QsR0FBRyxDQUFDLElBQUksQ0FBQywrQ0FBK0MsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUUzRSxNQUFNLGVBQWUsR0FBRyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUtuRSxNQUFNLFlBQVksR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVELE1BQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUU5RSxNQUFNLE9BQU8sR0FBRyxTQUFTLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxrQ0FBa0MsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQztZQUUvRixPQUFPLG1CQUFRLENBQUMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUVsQyxDQUFDO0tBQUE7SUFFYSxrQkFBa0I7O1lBRTVCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7b0JBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3JELENBQUMsQ0FBQSxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sT0FBTyxHQUFHLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLFNBQVMsQ0FBQztZQUU5RCxPQUFPLG1CQUFRLENBQUMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUVsQyxDQUFDO0tBQUE7SUFFYSxpQkFBaUIsQ0FBQyxXQUFtQjs7WUFDL0MsTUFBTSxPQUFPLEdBQUcsMEJBQTBCLFdBQVcsRUFBRSxDQUFDO1lBQ3hELEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEIsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pELE9BQU8sbUJBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7S0FBQTtDQUVKO0FBckZELDhCQXFGQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29kZSB0aGF0IHN5bmNocm9uaXplcyBkZWNrcyBieSBjcmVhdGluZyBuZXcgZGVja3Mgd2hlbiB0aGUgcmVxdWlyZWQgZGVja3NcbiAqIGFyZSBtaXNzaW5nLlxuICovXG5pbXBvcnQge0RlY2tEZXNjcmlwdG9yfSBmcm9tICcuL0RlY2tEZXNjcmlwdG9yJztcbmltcG9ydCB7U2V0QXJyYXlzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvU2V0QXJyYXlzJztcbmltcG9ydCB7Q3JlYXRlRGVja0NsaWVudCwgSUNyZWF0ZURlY2tDbGllbnR9IGZyb20gJy4vY2xpZW50cy9DcmVhdGVEZWNrQ2xpZW50JztcbmltcG9ydCB7RGVja05hbWVzQW5kSWRzQ2xpZW50LCBJRGVja05hbWVzQW5kSWRzQ2xpZW50fSBmcm9tICcuL2NsaWVudHMvRGVja05hbWVzQW5kSWRzQ2xpZW50JztcbmltcG9ydCB7U3luY1Byb2dyZXNzTGlzdGVuZXJ9IGZyb20gJy4uL1N5bmNQcm9ncmVzc0xpc3RlbmVyJztcbmltcG9ydCB7QWJvcnRhYmxlfSBmcm9tICcuLi9BYm9ydGFibGUnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1N5bmNRdWV1ZX0gZnJvbSAnLi4vU3luY1F1ZXVlJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge1N5bmNUYXNrUmVzdWx0fSBmcm9tICcuLi9TeW5jVGFzayc7XG5pbXBvcnQge05vcm1hbGl6ZWROb3RlfSBmcm9tICcuL05vdGVzU3luYyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBTeW5jIGRlY2tzIHRvIEFua2kuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNrc1N5bmMge1xuXG4gICAgcHVibGljIGNyZWF0ZURlY2tDbGllbnQ6IElDcmVhdGVEZWNrQ2xpZW50ID0gbmV3IENyZWF0ZURlY2tDbGllbnQoKTtcblxuICAgIHB1YmxpYyBkZWNrTmFtZXNBbmRJZHNDbGllbnQ6IElEZWNrTmFtZXNBbmRJZHNDbGllbnQgPSBuZXcgRGVja05hbWVzQW5kSWRzQ2xpZW50KCk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG1pc3NpbmdEZWNrczogc3RyaW5nW10gPSBbXTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWlzc2luZ0RlY2tEZXNjcmlwdG9yczogRGVja0Rlc2NyaXB0b3JbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzeW5jUXVldWU6IFN5bmNRdWV1ZTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHN5bmNRdWV1ZSBUaGUgcXVldWUgdG8gdXNlIGZvciBhc3luYyBvcGVyYXRpb25zLlxuICAgICAqXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc3luY1F1ZXVlOiBTeW5jUXVldWUpIHtcbiAgICAgICAgdGhpcy5zeW5jUXVldWUgPSBzeW5jUXVldWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZSBzdXJlIGFsbCBkZWNrcyBhcmUgcHJvcGVybHkgc2V0dXAgaW4gQW5raS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZWNrRGVzY3JpcHRvcnMgVGhlIGRlY2tzIHdlIG5lZWQgY3JlYXRlZC5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBlbnF1ZXVlKGRlY2tEZXNjcmlwdG9yczogRGVja0Rlc2NyaXB0b3JbXSkge1xuXG4gICAgICAgIHRoaXMuc3luY1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5maW5kRXhpc3RpbmdEZWNrcyhkZWNrRGVzY3JpcHRvcnMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN5bmNRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuY3JlYXRlTWlzc2luZ0RlY2tzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1pc3NpbmdEZWNrRGVzY3JpcHRvcnM7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGZpbmRFeGlzdGluZ0RlY2tzKGRlY2tEZXNjcmlwdG9yczogRGVja0Rlc2NyaXB0b3JbXSk6IFByb21pc2U8T3B0aW9uYWw8U3luY1Rhc2tSZXN1bHQ+PiB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJGZXRjaGluZyBleGlzdGluZyBkZWNrcyBmb3IgZGVja0Rlc2NyaXB0b3JzOiBcIiwgZGVja0Rlc2NyaXB0b3JzKTtcblxuICAgICAgICBjb25zdCBkZWNrTmFtZXNBbmRJZHMgPSBhd2FpdCB0aGlzLmRlY2tOYW1lc0FuZElkc0NsaWVudC5leGVjdXRlKCk7XG5cbiAgICAgICAgLy8gbm93IEkganVzdCBuZWVkIHRvIGNvbXB1dGUgdGhlIHNldCBkaWZmZXJlbmNlIGRlY2tEZXNjcmlwdG9ycyAvIGRlY2tOYW1lc0FuZElkc1xuICAgICAgICAvLyBmb3IgYWxsIGRlY2tzIHRoYXQgYXJlIG5vdCBpbiBkZWNrTmFtZXNBbmRJZHNcblxuICAgICAgICBjb25zdCBjdXJyZW50RGVja3M6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoZGVja05hbWVzQW5kSWRzKTtcbiAgICAgICAgY29uc3QgZXhwZWN0ZWREZWNrcyA9IGRlY2tEZXNjcmlwdG9ycy5tYXAoY3VycmVudCA9PiBjdXJyZW50Lm5hbWUpO1xuXG4gICAgICAgIHRoaXMubWlzc2luZ0RlY2tzLnB1c2goLi4uIFNldEFycmF5cy5kaWZmZXJlbmNlKGV4cGVjdGVkRGVja3MsIGN1cnJlbnREZWNrcykpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgRm91bmQgJHt0aGlzLm1pc3NpbmdEZWNrcy5sZW5ndGh9IG1pc3NpbmcgZGVja3MgZnJvbSBhIHRvdGFsIG9mICR7Y3VycmVudERlY2tzLmxlbmd0aH1gO1xuICAgICAgICBsb2cuaW5mbyhtZXNzYWdlKTtcblxuICAgICAgICB0aGlzLm1pc3NpbmdEZWNrRGVzY3JpcHRvcnMucHVzaCguLi4gdGhpcy5taXNzaW5nRGVja3MubWFwKG5hbWUgPT4gPERlY2tEZXNjcmlwdG9yPiB7IG5hbWUgfSkpO1xuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7bWVzc2FnZX0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBjcmVhdGVNaXNzaW5nRGVja3MoKTogUHJvbWlzZTxPcHRpb25hbDxTeW5jVGFza1Jlc3VsdD4+IHtcblxuICAgICAgICB0aGlzLm1pc3NpbmdEZWNrcy5mb3JFYWNoKG1pc3NpbmdEZWNrID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3luY1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuY3JlYXRlTWlzc2luZ0RlY2sobWlzc2luZ0RlY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgQ3JlYXRpbmcgJHt0aGlzLm1pc3NpbmdEZWNrcy5sZW5ndGh9IGRlY2tzLmA7XG5cbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHttZXNzYWdlfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGNyZWF0ZU1pc3NpbmdEZWNrKG1pc3NpbmdEZWNrOiBzdHJpbmcpOiBQcm9taXNlPE9wdGlvbmFsPFN5bmNUYXNrUmVzdWx0Pj4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYENyZWF0aW5nIG1pc3NpbmcgZGVjazogJHttaXNzaW5nRGVja31gO1xuICAgICAgICBsb2cuaW5mbyhtZXNzYWdlKTtcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVEZWNrQ2xpZW50LmV4ZWN1dGUobWlzc2luZ0RlY2spO1xuICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yoe21lc3NhZ2V9KTtcbiAgICB9XG5cbn1cbiJdfQ==