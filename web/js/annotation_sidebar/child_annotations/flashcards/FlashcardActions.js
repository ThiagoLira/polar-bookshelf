"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FlashcardType_1 = require("polar-shared/src/metadata/FlashcardType");
const Functions_1 = require("polar-shared/src/util/Functions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Refs_1 = require("polar-shared/src/metadata/Refs");
const Flashcards_1 = require("../../../metadata/Flashcards");
const DocMetas_1 = require("../../../metadata/DocMetas");
const log = Logger_1.Logger.create();
class FlashcardActions {
    static create(annotation, type, fields) {
        Functions_1.Functions.withTimeout(() => {
            const flashcard = this.newInstance(annotation, type, fields);
            if (flashcard) {
                annotation.pageMeta.flashcards[flashcard.id] = Flashcards_1.Flashcards.createMutable(flashcard);
            }
        }).catch(err => log.error(err));
    }
    static update(docMeta, annotation, type, fields, existingFlashcard) {
        const flashcard = this.newInstance(annotation, type, fields);
        if (flashcard) {
            DocMetas_1.DocMetas.withBatchedMutations(docMeta, () => {
                if (existingFlashcard) {
                    delete annotation.pageMeta.flashcards[existingFlashcard.id];
                }
                annotation.pageMeta.flashcards[flashcard.id] = Object.assign({}, flashcard);
            });
        }
    }
    static newInstance(annotation, type, fields) {
        const ref = Refs_1.Refs.createFromAnnotationType(annotation.id, annotation.annotationType);
        if (type === FlashcardType_1.FlashcardType.BASIC_FRONT_BACK) {
            const frontAndBackFields = fields;
            const { front, back } = frontAndBackFields;
            return Flashcards_1.Flashcards.createFrontBack(front, back, ref);
        }
        if (type === FlashcardType_1.FlashcardType.CLOZE) {
            const clozeFields = fields;
            const { text } = clozeFields;
            return Flashcards_1.Flashcards.createCloze(text, ref);
        }
        return undefined;
    }
}
exports.FlashcardActions = FlashcardActions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkQWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZsYXNoY2FyZEFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyRUFBc0U7QUFHdEUsK0RBQTBEO0FBQzFELDJEQUFzRDtBQUV0RCx5REFBb0Q7QUFDcEQsNkRBQXdEO0FBQ3hELHlEQUFvRDtBQUdwRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxnQkFBZ0I7SUFFbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUEwQixFQUMxQixJQUFtQixFQUNuQixNQUF3QztRQUV6RCxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFFdkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRTdELElBQUksU0FBUyxFQUFFO2dCQUNYLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyx1QkFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN0RjtRQUVMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFpQixFQUNqQixVQUF5QixFQUN6QixJQUFtQixFQUNuQixNQUF3QyxFQUN4QyxpQkFBNkI7UUFFOUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTdELElBQUksU0FBUyxFQUFFO1lBRVgsbUJBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUV4QyxJQUFJLGlCQUFpQixFQUFFO29CQUNuQixPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUMvRDtnQkFFRCxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsa0JBQWdCLFNBQVMsQ0FBQyxDQUFDO1lBRTlFLENBQUMsQ0FBQyxDQUFDO1NBRU47SUFFTCxDQUFDO0lBS08sTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUEwQixFQUMxQixJQUFtQixFQUNuQixNQUF3QztRQUUvRCxNQUFNLEdBQUcsR0FBRyxXQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFcEYsSUFBSSxJQUFJLEtBQUssNkJBQWEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUV6QyxNQUFNLGtCQUFrQixHQUFHLE1BQTRCLENBQUM7WUFDeEQsTUFBTSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsR0FBRyxrQkFBa0IsQ0FBQztZQUV6QyxPQUFPLHVCQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FFdkQ7UUFFRCxJQUFJLElBQUksS0FBSyw2QkFBYSxDQUFDLEtBQUssRUFBRTtZQUU5QixNQUFNLFdBQVcsR0FBRyxNQUFxQixDQUFDO1lBQzFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxXQUFXLENBQUM7WUFFM0IsT0FBTyx1QkFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FFNUM7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUVyQixDQUFDO0NBRUo7QUF6RUQsNENBeUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGbGFzaGNhcmRUeXBlfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0ZsYXNoY2FyZFR5cGUnO1xuaW1wb3J0IHtDbG96ZUZpZWxkcywgRnJvbnRBbmRCYWNrRmllbGRzfSBmcm9tICcuL2ZsYXNoY2FyZF9pbnB1dC9GbGFzaGNhcmRJbnB1dHMnO1xuaW1wb3J0IHtEb2NBbm5vdGF0aW9uLCBJRG9jQW5ub3RhdGlvbn0gZnJvbSAnLi4vLi4vRG9jQW5ub3RhdGlvbic7XG5pbXBvcnQge0Z1bmN0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7Rmxhc2hjYXJkfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9GbGFzaGNhcmQnO1xuaW1wb3J0IHtSZWZzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1JlZnMnO1xuaW1wb3J0IHtGbGFzaGNhcmRzfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9GbGFzaGNhcmRzJztcbmltcG9ydCB7RG9jTWV0YXN9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7SURvY01ldGF9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NNZXRhXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEZsYXNoY2FyZEFjdGlvbnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoYW5ub3RhdGlvbjogSURvY0Fubm90YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRmxhc2hjYXJkVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IEZyb250QW5kQmFja0ZpZWxkcyB8IENsb3plRmllbGRzKSB7XG5cbiAgICAgICAgRnVuY3Rpb25zLndpdGhUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZmxhc2hjYXJkID0gdGhpcy5uZXdJbnN0YW5jZShhbm5vdGF0aW9uLCB0eXBlLCBmaWVsZHMpO1xuXG4gICAgICAgICAgICBpZiAoZmxhc2hjYXJkKSB7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbi5wYWdlTWV0YS5mbGFzaGNhcmRzW2ZsYXNoY2FyZC5pZF0gPSBGbGFzaGNhcmRzLmNyZWF0ZU11dGFibGUoZmxhc2hjYXJkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gbG9nLmVycm9yKGVycikpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGUoZG9jTWV0YTogSURvY01ldGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbjogRG9jQW5ub3RhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBGbGFzaGNhcmRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogRnJvbnRBbmRCYWNrRmllbGRzIHwgQ2xvemVGaWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdGbGFzaGNhcmQ/OiBGbGFzaGNhcmQpIHtcblxuICAgICAgICBjb25zdCBmbGFzaGNhcmQgPSB0aGlzLm5ld0luc3RhbmNlKGFubm90YXRpb24sIHR5cGUsIGZpZWxkcyk7XG5cbiAgICAgICAgaWYgKGZsYXNoY2FyZCkge1xuXG4gICAgICAgICAgICBEb2NNZXRhcy53aXRoQmF0Y2hlZE11dGF0aW9ucyhkb2NNZXRhLCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdGbGFzaGNhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFubm90YXRpb24ucGFnZU1ldGEuZmxhc2hjYXJkc1tleGlzdGluZ0ZsYXNoY2FyZC5pZF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbi5wYWdlTWV0YS5mbGFzaGNhcmRzW2ZsYXNoY2FyZC5pZF0gPSA8Rmxhc2hjYXJkPiB7Li4uZmxhc2hjYXJkfTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIGZyb20gdGhlIGdpdmVuIGZpZWxkcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBuZXdJbnN0YW5jZShhbm5vdGF0aW9uOiBJRG9jQW5ub3RhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBGbGFzaGNhcmRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogRnJvbnRBbmRCYWNrRmllbGRzIHwgQ2xvemVGaWVsZHMpOiBGbGFzaGNhcmQgfCB1bmRlZmluZWQge1xuXG4gICAgICAgIGNvbnN0IHJlZiA9IFJlZnMuY3JlYXRlRnJvbUFubm90YXRpb25UeXBlKGFubm90YXRpb24uaWQsIGFubm90YXRpb24uYW5ub3RhdGlvblR5cGUpO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBGbGFzaGNhcmRUeXBlLkJBU0lDX0ZST05UX0JBQ0spIHtcblxuICAgICAgICAgICAgY29uc3QgZnJvbnRBbmRCYWNrRmllbGRzID0gZmllbGRzIGFzIEZyb250QW5kQmFja0ZpZWxkcztcbiAgICAgICAgICAgIGNvbnN0IHtmcm9udCwgYmFja30gPSBmcm9udEFuZEJhY2tGaWVsZHM7XG5cbiAgICAgICAgICAgIHJldHVybiBGbGFzaGNhcmRzLmNyZWF0ZUZyb250QmFjayhmcm9udCwgYmFjaywgcmVmKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IEZsYXNoY2FyZFR5cGUuQ0xPWkUpIHtcblxuICAgICAgICAgICAgY29uc3QgY2xvemVGaWVsZHMgPSBmaWVsZHMgYXMgQ2xvemVGaWVsZHM7XG4gICAgICAgICAgICBjb25zdCB7dGV4dH0gPSBjbG96ZUZpZWxkcztcblxuICAgICAgICAgICAgcmV0dXJuIEZsYXNoY2FyZHMuY3JlYXRlQ2xvemUodGV4dCwgcmVmKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIH1cblxufVxuIl19