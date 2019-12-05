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
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const _ = __importStar(require("lodash"));
const FlashcardType_1 = require("polar-shared/src/metadata/FlashcardType");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class FlashcardDescriptors {
    static toFlashcardDescriptors(docMetaSupplierCollection) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = [];
            for (const docMetaSupplier of docMetaSupplierCollection) {
                try {
                    const docMeta = yield docMetaSupplier();
                    Object.values(docMeta.pageMetas).forEach(pageMeta => {
                        const flashcards = [];
                        flashcards.push(...Dictionaries_1.Dictionaries.values(pageMeta.flashcards));
                        flashcards.push(..._.chain(pageMeta.textHighlights)
                            .map(current => Dictionaries_1.Dictionaries.values(current.flashcards))
                            .flatten()
                            .value());
                        flashcards.push(..._.chain(pageMeta.areaHighlights)
                            .map(current => Dictionaries_1.Dictionaries.values(current.flashcards))
                            .flatten()
                            .value());
                        const flashcardDescriptors = _.chain(flashcards)
                            .map(current => ({
                            docMeta,
                            pageInfo: pageMeta.pageInfo,
                            flashcard: current
                        }))
                            .value();
                        result.push(...flashcardDescriptors);
                    });
                }
                catch (e) {
                    log.error("Unable to handle docMeta: ", e);
                }
            }
            return result;
        });
    }
    static toModelName(flashcardDescriptor) {
        if (flashcardDescriptor.flashcard.type === FlashcardType_1.FlashcardType.CLOZE) {
            return "Cloze";
        }
        return "Basic";
    }
}
exports.FlashcardDescriptors = FlashcardDescriptors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkRGVzY3JpcHRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGbGFzaGNhcmREZXNjcmlwdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxxRUFBZ0U7QUFDaEUsMENBQTRCO0FBQzVCLDJFQUFzRTtBQUN0RSwyREFBc0Q7QUFHdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsb0JBQW9CO0lBRXRCLE1BQU0sQ0FBTyxzQkFBc0IsQ0FBQyx5QkFBb0Q7O1lBRTNGLE1BQU0sTUFBTSxHQUEwQixFQUFFLENBQUM7WUFFekMsS0FBSyxNQUFNLGVBQWUsSUFBSSx5QkFBeUIsRUFBRTtnQkFFckQsSUFBSTtvQkFFQSxNQUFNLE9BQU8sR0FBRyxNQUFNLGVBQWUsRUFBRSxDQUFDO29CQUV4QyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBSWhELE1BQU0sVUFBVSxHQUFpQixFQUFFLENBQUM7d0JBRXBDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBSSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFFOUQsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQzs2QkFDL0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzZCQUN2RCxPQUFPLEVBQUU7NkJBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQzt3QkFFZCxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDOzZCQUMvQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7NkJBQ3ZELE9BQU8sRUFBRTs2QkFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO3dCQUVkLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7NkJBQzNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQXNCOzRCQUNsQyxPQUFPOzRCQUNQLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTs0QkFDM0IsU0FBUyxFQUFFLE9BQU87eUJBQ3JCLENBQUEsQ0FBQzs2QkFDRCxLQUFLLEVBQUUsQ0FBQzt3QkFFYixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsb0JBQW9CLENBQUMsQ0FBQztvQkFFekMsQ0FBQyxDQUFDLENBQUM7aUJBRU47Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1IsR0FBRyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDOUM7YUFFSjtZQUVELE9BQU8sTUFBTSxDQUFDO1FBRWxCLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsbUJBQXdDO1FBRTlELElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyw2QkFBYSxDQUFDLEtBQUssRUFBRTtZQUM1RCxPQUFPLE9BQU8sQ0FBQztTQUNsQjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBRW5CLENBQUM7Q0FFSjtBQTlERCxvREE4REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvY01ldGFTdXBwbGllckNvbGxlY3Rpb259IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0RvY01ldGFTdXBwbGllckNvbGxlY3Rpb24nO1xuaW1wb3J0IHtGbGFzaGNhcmREZXNjcmlwdG9yfSBmcm9tICcuL0ZsYXNoY2FyZERlc2NyaXB0b3InO1xuaW1wb3J0IHtGbGFzaGNhcmR9IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0ZsYXNoY2FyZCc7XG5pbXBvcnQge0RpY3Rpb25hcmllc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0RpY3Rpb25hcmllcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge0ZsYXNoY2FyZFR5cGV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvRmxhc2hjYXJkVHlwZSc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7SUZsYXNoY2FyZH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSUZsYXNoY2FyZFwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBGbGFzaGNhcmREZXNjcmlwdG9ycyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHRvRmxhc2hjYXJkRGVzY3JpcHRvcnMoZG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbjogRG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbik6IFByb21pc2U8Rmxhc2hjYXJkRGVzY3JpcHRvcltdPiB7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0OiBGbGFzaGNhcmREZXNjcmlwdG9yW10gPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGRvY01ldGFTdXBwbGllciBvZiBkb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uKSB7XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gYXdhaXQgZG9jTWV0YVN1cHBsaWVyKCk7XG5cbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGRvY01ldGEucGFnZU1ldGFzKS5mb3JFYWNoKHBhZ2VNZXRhID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb2xsZWN0IGFsbCBmbGFzaGNhcmRzIGZvciB0aGUgY3VycmVudCBwYWdlLlxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZsYXNoY2FyZHM6IElGbGFzaGNhcmRbXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZsYXNoY2FyZHMucHVzaCguLi4gRGljdGlvbmFyaWVzLnZhbHVlcyhwYWdlTWV0YS5mbGFzaGNhcmRzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZmxhc2hjYXJkcy5wdXNoKC4uLiBfLmNoYWluKHBhZ2VNZXRhLnRleHRIaWdobGlnaHRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IERpY3Rpb25hcmllcy52YWx1ZXMoY3VycmVudC5mbGFzaGNhcmRzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mbGF0dGVuKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSgpKTtcblxuICAgICAgICAgICAgICAgICAgICBmbGFzaGNhcmRzLnB1c2goLi4uIF8uY2hhaW4ocGFnZU1ldGEuYXJlYUhpZ2hsaWdodHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gRGljdGlvbmFyaWVzLnZhbHVlcyhjdXJyZW50LmZsYXNoY2FyZHMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZsYXR0ZW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZsYXNoY2FyZERlc2NyaXB0b3JzID0gXy5jaGFpbihmbGFzaGNhcmRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IDxGbGFzaGNhcmREZXNjcmlwdG9yPiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jTWV0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mbzogcGFnZU1ldGEucGFnZUluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhc2hjYXJkOiBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goLi4uZmxhc2hjYXJkRGVzY3JpcHRvcnMpO1xuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJVbmFibGUgdG8gaGFuZGxlIGRvY01ldGE6IFwiLCBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdG9Nb2RlbE5hbWUoZmxhc2hjYXJkRGVzY3JpcHRvcjogRmxhc2hjYXJkRGVzY3JpcHRvcikge1xuXG4gICAgICAgIGlmIChmbGFzaGNhcmREZXNjcmlwdG9yLmZsYXNoY2FyZC50eXBlID09PSBGbGFzaGNhcmRUeXBlLkNMT1pFKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJDbG96ZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiQmFzaWNcIjtcblxuICAgIH1cblxufVxuIl19