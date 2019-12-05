"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const FlashcardType_1 = require("polar-shared/src/metadata/FlashcardType");
const ClozeParser_1 = require("polar-spaced-repetition/src/spaced_repetition/scheduler/util/ClozeParser");
const Texts_1 = require("polar-shared/src/metadata/Texts");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class FlashcardTaskActions {
    static create(flashcard, docAnnotation) {
        if (flashcard.type === FlashcardType_1.FlashcardType.BASIC_FRONT_BACK) {
            return this.createBasicFrontBackFlashcard(flashcard, docAnnotation);
        }
        else if (flashcard.type === FlashcardType_1.FlashcardType.CLOZE) {
            return this.createClozeFlashcard(flashcard, docAnnotation);
        }
        else {
            throw new Error("Type not yet supported: " + flashcard.type);
        }
    }
    static createBasicFrontBackFlashcard(flashcard, docAnnotation) {
        const front = Texts_1.Texts.toString(flashcard.fields.front);
        const back = Texts_1.Texts.toString(flashcard.fields.back);
        const result = {
            front: React.createElement("div", { dangerouslySetInnerHTML: { __html: front || "" } }),
            back: React.createElement("div", { dangerouslySetInnerHTML: { __html: back || "" } }),
            docAnnotation
        };
        return [result];
    }
    static createClozeFlashcard(flashcard, docAnnotation) {
        const cloze = Texts_1.Texts.toString(flashcard.fields.cloze || flashcard.fields.text);
        Preconditions_1.Preconditions.assertPresent(cloze, 'cloze');
        const regions = ClozeParser_1.ClozeParser.toRegions(cloze);
        const identifiers = regions.filter(current => current.type === 'cloze')
            .map(current => current.id);
        if (identifiers.length === 0) {
            console.warn(`No cloze texts parsed from '${cloze}': `, regions);
            return [];
        }
        const clozeAsText = ClozeParser_1.ClozeParser.regionsToText(regions);
        const regionToElement = (region, id) => {
            if (region.type === 'cloze' && region.id === id) {
                return `<span class="text-danger font-weight-bold">[...]</span>`;
            }
            else {
                return region.text;
            }
        };
        const toFlashcard = (id) => {
            const front = regions.map(region => regionToElement(region, id)).join('');
            return {
                front: React.createElement("div", { dangerouslySetInnerHTML: { __html: front } }),
                back: React.createElement("div", { dangerouslySetInnerHTML: { __html: clozeAsText } }),
                docAnnotation
            };
        };
        return identifiers.map(toFlashcard);
    }
}
exports.FlashcardTaskActions = FlashcardTaskActions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkVGFza0FjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGbGFzaGNhcmRUYXNrQWN0aW9ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRy9CLDJFQUFzRTtBQUN0RSwwR0FJa0Y7QUFDbEYsMkRBQXNEO0FBQ3RELGtFQUE2RDtBQUc3RCxNQUFhLG9CQUFvQjtJQUV0QixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQXFCLEVBQ3JCLGFBQTZCO1FBRTlDLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyw2QkFBYSxDQUFDLGdCQUFnQixFQUFFO1lBQ25ELE9BQU8sSUFBSSxDQUFDLDZCQUE2QixDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUN2RTthQUFNLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyw2QkFBYSxDQUFDLEtBQUssRUFBRTtZQUMvQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hFO0lBRUwsQ0FBQztJQUVPLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxTQUFxQixFQUNyQixhQUE2QjtRQUV0RSxNQUFNLEtBQUssR0FBRyxhQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsTUFBTSxJQUFJLEdBQUcsYUFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5ELE1BQU0sTUFBTSxHQUF3QjtZQUNoQyxLQUFLLEVBQUUsNkJBQUssdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLEVBQUUsRUFBQyxHQUFHO1lBQzdELElBQUksRUFBRSw2QkFBSyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLElBQUksRUFBRSxFQUFDLEdBQUc7WUFDM0QsYUFBYTtTQUNoQixDQUFDO1FBRUYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBCLENBQUM7SUFFTyxNQUFNLENBQUMsb0JBQW9CLENBQUMsU0FBcUIsRUFDckIsYUFBNkI7UUFFN0QsTUFBTSxLQUFLLEdBQUcsYUFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlFLDZCQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1QyxNQUFNLE9BQU8sR0FBRyx5QkFBVyxDQUFDLFNBQVMsQ0FBQyxLQUFNLENBQUMsQ0FBQztRQUc5QyxNQUFNLFdBQVcsR0FDYixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7YUFDM0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUUsT0FBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV4RCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEtBQUssS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxNQUFNLFdBQVcsR0FBRyx5QkFBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2RCxNQUFNLGVBQWUsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFVLEVBQUUsRUFBRTtZQUVuRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFLLE1BQXNCLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDOUQsT0FBTyx5REFBeUQsQ0FBQzthQUNwRTtpQkFBTTtnQkFDSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDdEI7UUFFTCxDQUFDLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFFO1lBRS9CLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTFFLE9BQU87Z0JBQ0gsS0FBSyxFQUFFLDZCQUFLLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxHQUFHO2dCQUN2RCxJQUFJLEVBQUUsNkJBQUssdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFDLEdBQUc7Z0JBQzVELGFBQWE7YUFDaEIsQ0FBQztRQUVOLENBQUMsQ0FBQztRQUVGLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV4QyxDQUFDO0NBRUo7QUE1RUQsb0RBNEVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGbGFzaGNhcmRUYXNrQWN0aW9ufSBmcm9tIFwiLi9GbGFzaGNhcmRUYXNrQWN0aW9uXCI7XG5pbXBvcnQge0lGbGFzaGNhcmR9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lGbGFzaGNhcmRcIjtcbmltcG9ydCB7Rmxhc2hjYXJkVHlwZX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvRmxhc2hjYXJkVHlwZVwiO1xuaW1wb3J0IHtcbiAgICBDbG96ZVBhcnNlcixcbiAgICBDbG96ZVJlZ2lvbixcbiAgICBSZWdpb25cbn0gZnJvbSBcInBvbGFyLXNwYWNlZC1yZXBldGl0aW9uL3NyYy9zcGFjZWRfcmVwZXRpdGlvbi9zY2hlZHVsZXIvdXRpbC9DbG96ZVBhcnNlclwiO1xuaW1wb3J0IHtUZXh0c30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvVGV4dHNcIjtcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7SURvY0Fubm90YXRpb259IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvYW5ub3RhdGlvbl9zaWRlYmFyL0RvY0Fubm90YXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEZsYXNoY2FyZFRhc2tBY3Rpb25zIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGZsYXNoY2FyZDogSUZsYXNoY2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2NBbm5vdGF0aW9uOiBJRG9jQW5ub3RhdGlvbik6IFJlYWRvbmx5QXJyYXk8Rmxhc2hjYXJkVGFza0FjdGlvbj4ge1xuXG4gICAgICAgIGlmIChmbGFzaGNhcmQudHlwZSA9PT0gRmxhc2hjYXJkVHlwZS5CQVNJQ19GUk9OVF9CQUNLKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVCYXNpY0Zyb250QmFja0ZsYXNoY2FyZChmbGFzaGNhcmQsIGRvY0Fubm90YXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKGZsYXNoY2FyZC50eXBlID09PSBGbGFzaGNhcmRUeXBlLkNMT1pFKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVDbG96ZUZsYXNoY2FyZChmbGFzaGNhcmQsIGRvY0Fubm90YXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVHlwZSBub3QgeWV0IHN1cHBvcnRlZDogXCIgKyBmbGFzaGNhcmQudHlwZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZUJhc2ljRnJvbnRCYWNrRmxhc2hjYXJkKGZsYXNoY2FyZDogSUZsYXNoY2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NBbm5vdGF0aW9uOiBJRG9jQW5ub3RhdGlvbik6IFJlYWRvbmx5QXJyYXk8Rmxhc2hjYXJkVGFza0FjdGlvbj4ge1xuXG4gICAgICAgIGNvbnN0IGZyb250ID0gVGV4dHMudG9TdHJpbmcoZmxhc2hjYXJkLmZpZWxkcy5mcm9udCk7XG4gICAgICAgIGNvbnN0IGJhY2sgPSBUZXh0cy50b1N0cmluZyhmbGFzaGNhcmQuZmllbGRzLmJhY2spO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogRmxhc2hjYXJkVGFza0FjdGlvbiA9IHtcbiAgICAgICAgICAgIGZyb250OiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBmcm9udCB8fCBcIlwifX0vPixcbiAgICAgICAgICAgIGJhY2s6IDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGJhY2sgfHwgXCJcIn19Lz4sXG4gICAgICAgICAgICBkb2NBbm5vdGF0aW9uXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIFtyZXN1bHRdO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlQ2xvemVGbGFzaGNhcmQoZmxhc2hjYXJkOiBJRmxhc2hjYXJkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY0Fubm90YXRpb246IElEb2NBbm5vdGF0aW9uKTogUmVhZG9ubHlBcnJheTxGbGFzaGNhcmRUYXNrQWN0aW9uPiB7XG5cbiAgICAgICAgY29uc3QgY2xvemUgPSBUZXh0cy50b1N0cmluZyhmbGFzaGNhcmQuZmllbGRzLmNsb3plIHx8IGZsYXNoY2FyZC5maWVsZHMudGV4dCk7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChjbG96ZSwgJ2Nsb3plJyk7XG4gICAgICAgIGNvbnN0IHJlZ2lvbnMgPSBDbG96ZVBhcnNlci50b1JlZ2lvbnMoY2xvemUhKTtcblxuICAgICAgICAvLyB0aGUgaWRlbnRpZmllcnMgZm9yIGFsbCB0aGUgY2xvemUgZGVsZXRpb25zIHRvIGV4cGFuZFxuICAgICAgICBjb25zdCBpZGVudGlmaWVycyA9XG4gICAgICAgICAgICByZWdpb25zLmZpbHRlcihjdXJyZW50ID0+IGN1cnJlbnQudHlwZSA9PT0gJ2Nsb3plJylcbiAgICAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gKGN1cnJlbnQgYXMgQ2xvemVSZWdpb24pLmlkKTtcblxuICAgICAgICBpZiAoaWRlbnRpZmllcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYE5vIGNsb3plIHRleHRzIHBhcnNlZCBmcm9tICcke2Nsb3plfSc6IGAsIHJlZ2lvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xvemVBc1RleHQgPSBDbG96ZVBhcnNlci5yZWdpb25zVG9UZXh0KHJlZ2lvbnMpO1xuXG4gICAgICAgIGNvbnN0IHJlZ2lvblRvRWxlbWVudCA9IChyZWdpb246IFJlZ2lvbiwgaWQ6IG51bWJlcikgPT4ge1xuXG4gICAgICAgICAgICBpZiAocmVnaW9uLnR5cGUgPT09ICdjbG96ZScgJiYgKHJlZ2lvbiBhcyBDbG96ZVJlZ2lvbikuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyIGZvbnQtd2VpZ2h0LWJvbGRcIj5bLi4uXTwvc3Bhbj5gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVnaW9uLnRleHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0b0ZsYXNoY2FyZCA9IChpZDogbnVtYmVyKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZyb250ID0gcmVnaW9ucy5tYXAocmVnaW9uID0+IHJlZ2lvblRvRWxlbWVudChyZWdpb24sIGlkKSkuam9pbignJyk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZnJvbnQ6IDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGZyb250fX0vPixcbiAgICAgICAgICAgICAgICBiYWNrOiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjbG96ZUFzVGV4dH19Lz4sXG4gICAgICAgICAgICAgICAgZG9jQW5ub3RhdGlvblxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBpZGVudGlmaWVycy5tYXAodG9GbGFzaGNhcmQpO1xuXG4gICAgfVxuXG59XG4iXX0=