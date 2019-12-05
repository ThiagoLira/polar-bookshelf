"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("polar-shared/src/Preconditions");
const utils_1 = require("../../../utils");
const RectElement_1 = require("./RectElement");
const TextHighlightRow_1 = require("./TextHighlightRow");
const IntermediateRow_1 = require("./IntermediateRow");
const Rects_1 = require("../../../Rects");
const DocFormatFactory_1 = require("../../../docformat/DocFormatFactory");
const Elements_1 = require("../../../util/Elements");
const Functions_1 = require("polar-shared/src/util/Functions");
const Objects_1 = require("polar-shared/src/util/Objects");
class TextHighlightRows {
    static createFromSelector(selector) {
        let docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
        let targetDocument = docFormat.targetDocument();
        let elements = Array.from(targetDocument.querySelectorAll(selector));
        if (!elements) {
            throw new Error("No elements");
        }
        let rectElements = elements.map(current => this.computeOffset(current));
        return TextHighlightRows.computeContiguousRects(rectElements);
    }
    static createFromRects(selector) {
    }
    static computeOffset(element) {
        let docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
        Elements_1.Elements.requireClass(element, "text-highlight-span");
        let textHighlightSpanOffset = Elements_1.Elements.offset(element);
        if (docFormat.name === "html") {
            textHighlightSpanOffset = element.getBoundingClientRect();
        }
        let textLayerDivElement = element.parentElement;
        let textLayerDivOffset = utils_1.elementOffset(textLayerDivElement);
        let rect = textLayerDivOffset;
        if (docFormat.name === "html") {
            rect = {
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                bottom: 0,
                right: 0
            };
        }
        let scaleX = utils_1.Styles.parseTransformScaleX(textLayerDivElement.style.transform);
        if (!scaleX) {
            scaleX = 1.0;
        }
        rect.left = rect.left + (textHighlightSpanOffset.left * scaleX);
        rect.top = rect.top + textHighlightSpanOffset.top;
        rect.height = textHighlightSpanOffset.height;
        rect.width = textHighlightSpanOffset.width * scaleX;
        rect.width = Math.min(rect.width, textLayerDivOffset.width);
        rect.bottom = rect.top + rect.height;
        rect.right = rect.left + rect.width;
        rect = Rects_1.Rects.validate(rect);
        let currentScale = docFormat.currentScale();
        Preconditions_1.Preconditions.assertPresent(currentScale, "currentScale");
        Preconditions_1.Preconditions.assertNumber(currentScale, "currentScale");
        rect = Rects_1.Rects.scale(rect, 1.0 / currentScale);
        return new RectElement_1.RectElement(rect, element);
    }
    static computeRows(rectElements) {
        let tuples = Functions_1.createSiblingTuples(rectElements);
        let result = [];
        let row = [];
        tuples.forEach(function (tuple) {
            if (!tuple.curr.rect) {
                throw new Error("Not a RectElement");
            }
            row.push(tuple.curr);
            if (tuple.next == null || (tuple.next && tuple.curr.rect.top !== tuple.next.rect.top)) {
                result.push(row);
                row = [];
            }
        });
        if (row.length !== 0)
            result.push(row);
        return result;
    }
    static computeRectForRow(row) {
        if (row.length == null || row.length === 0)
            throw new Error("Invalid row data");
        let result = Rects_1.Rects.validate(Objects_1.Objects.duplicate(row[0].rect));
        row.forEach(function (rectElement) {
            if (rectElement.rect.left < result.left) {
                result.left = rectElement.rect.left;
            }
            if (rectElement.rect.top < result.top) {
                result.top = rectElement.rect.top;
            }
            if (rectElement.rect.bottom > result.bottom) {
                result.bottom = rectElement.rect.bottom;
            }
            if (rectElement.rect.right > result.right) {
                result.right = rectElement.rect.right;
            }
            result.width = result.right - result.left;
            result.height = result.bottom - result.top;
        });
        return Rects_1.Rects.validate(result);
    }
    static computeIntermediateRows(rectElements) {
        let rows = TextHighlightRows.computeRows(rectElements);
        let result = [];
        rows.forEach(function (rectElementsWithinRow) {
            let rect = TextHighlightRows.computeRectForRow(rectElementsWithinRow);
            let intermediateRow = new IntermediateRow_1.IntermediateRow(rect, rectElementsWithinRow);
            result.push(intermediateRow);
        });
        return result;
    }
    static computeContiguousRects(rectElements) {
        let intermediateRows = TextHighlightRows.computeIntermediateRows(rectElements);
        let intermediateRowPager = Functions_1.createSiblingTuples(intermediateRows);
        let result = [];
        intermediateRowPager.forEach(function (page) {
            if (!page.curr.rect || !page.curr.rectElements) {
                throw new Error("Not a IntermediateRow");
            }
            let adjustedRect = {
                left: page.curr.rect.left,
                top: page.curr.rect.top,
                right: page.curr.rect.right,
                bottom: page.curr.rect.bottom,
                width: 0,
                height: 0
            };
            if (page.next && page.next.rect.top !== page.curr.rect.top) {
                adjustedRect.bottom = Math.max(page.next.rect.top, adjustedRect.bottom);
            }
            adjustedRect.width = adjustedRect.right - adjustedRect.left;
            adjustedRect.height = adjustedRect.bottom - adjustedRect.top;
            adjustedRect = Rects_1.Rects.validate(adjustedRect);
            let textHighlightRow = new TextHighlightRow_1.TextHighlightRow(adjustedRect, page.curr.rectElements);
            result.push(textHighlightRow);
        });
        return result;
    }
}
exports.TextHighlightRows = TextHighlightRows;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEhpZ2hsaWdodFJvd3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXh0SGlnaGxpZ2h0Um93cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtFQUE2RDtBQUU3RCwwQ0FBcUQ7QUFDckQsK0NBQTBDO0FBQzFDLHlEQUFvRDtBQUNwRCx1REFBa0Q7QUFDbEQsMENBQXFDO0FBQ3JDLDBFQUFxRTtBQUNyRSxxREFBZ0Q7QUFDaEQsK0RBQW9FO0FBR3BFLDJEQUFzRDtBQW1CdEQsTUFBYSxpQkFBaUI7SUFLMUIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFFBQWdCO1FBRXRDLElBQUksU0FBUyxHQUFHLG1DQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRS9DLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUVoRCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRXRFLElBQUcsQ0FBRSxRQUFRLEVBQUU7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQWUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUl0RixPQUFPLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRWxFLENBQUM7SUFRRCxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQWdCO0lBV3ZDLENBQUM7SUFTRCxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQW9CO1FBRXJDLElBQUksU0FBUyxHQUFHLG1DQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRy9DLG1CQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBRXRELElBQUksdUJBQXVCLEdBQVksbUJBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEUsSUFBRyxTQUFTLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQWMxQix1QkFBdUIsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM3RDtRQUVELElBQUksbUJBQW1CLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUVoRCxJQUFJLGtCQUFrQixHQUFHLHFCQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM1RCxJQUFJLElBQUksR0FBaUIsa0JBQWtCLENBQUM7UUFFNUMsSUFBRyxTQUFTLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQU0xQixJQUFJLEdBQUc7Z0JBQ0gsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLENBQUM7Z0JBQ04sS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsS0FBSyxFQUFFLENBQUM7YUFDWCxDQUFDO1NBRUw7UUFTRCxJQUFJLE1BQU0sR0FBRyxjQUFNLENBQUMsb0JBQW9CLENBQUMsbUJBQW9CLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9FLElBQUcsQ0FBRSxNQUFNLEVBQUU7WUFFVCxNQUFNLEdBQUcsR0FBRyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsdUJBQXVCLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyx1QkFBdUIsQ0FBQyxHQUFHLENBQUM7UUFFbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxNQUFNLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBdUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBRXBELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXBDLElBQUksR0FBRyxhQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBTTVCLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUU1Qyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDMUQsNkJBQWEsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXpELElBQUksR0FBRyxhQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFFN0MsT0FBTyxJQUFJLHlCQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFDLENBQUM7SUFRRCxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQWlCO1FBRWhDLElBQUksTUFBTSxHQUFHLCtCQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRS9DLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUdoQixJQUFJLEdBQUcsR0FBVSxFQUFFLENBQUM7UUFFcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQVU7WUFFL0IsSUFBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDeEM7WUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVyQixJQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xGLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEdBQUcsR0FBRyxFQUFFLENBQUM7YUFDWjtRQUVMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQixPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0lBSUQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQVE7UUFFN0IsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBR3hDLElBQUksTUFBTSxHQUFHLGFBQUssQ0FBQyxRQUFRLENBQUMsaUJBQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFNUQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFdBQWdCO1lBRWxDLElBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDcEMsTUFBTSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN2QztZQUVELElBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRTtnQkFDbEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNyQztZQUVELElBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDeEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUMzQztZQUVELElBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDdEMsTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUN6QztZQUVELE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBRS9DLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxhQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWxDLENBQUM7SUFFRCxNQUFNLENBQUMsdUJBQXVCLENBQUMsWUFBaUI7UUFFNUMsSUFBSSxJQUFJLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3RELElBQUksTUFBTSxHQUFVLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUscUJBQXFCO1lBQ3hDLElBQUksSUFBSSxHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDdEUsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0lBRUQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLFlBQW1CO1FBRTdDLElBQUksZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFL0UsSUFBSSxvQkFBb0IsR0FBRywrQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWpFLElBQUksTUFBTSxHQUFVLEVBQUUsQ0FBQztRQUV2QixvQkFBb0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFTO1lBRTVDLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7YUFDNUM7WUFFRCxJQUFJLFlBQVksR0FBRztnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDekIsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUMzQixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFDN0IsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLENBQUM7YUFDWixDQUFDO1lBTUYsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3ZELFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzNFO1lBRUQsWUFBWSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDNUQsWUFBWSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUM7WUFFN0QsWUFBWSxHQUFHLGFBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFNUMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRWxGLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVsQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7Q0FFSjtBQW5SRCw4Q0FtUkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnNcIjtcblxuaW1wb3J0IHtlbGVtZW50T2Zmc2V0LCBTdHlsZXN9IGZyb20gXCIuLi8uLi8uLi91dGlsc1wiO1xuaW1wb3J0IHtSZWN0RWxlbWVudH0gZnJvbSBcIi4vUmVjdEVsZW1lbnRcIjtcbmltcG9ydCB7VGV4dEhpZ2hsaWdodFJvd30gZnJvbSBcIi4vVGV4dEhpZ2hsaWdodFJvd1wiO1xuaW1wb3J0IHtJbnRlcm1lZGlhdGVSb3d9IGZyb20gXCIuL0ludGVybWVkaWF0ZVJvd1wiO1xuaW1wb3J0IHtSZWN0c30gZnJvbSBcIi4uLy4uLy4uL1JlY3RzXCI7XG5pbXBvcnQge0RvY0Zvcm1hdEZhY3Rvcnl9IGZyb20gXCIuLi8uLi8uLi9kb2Nmb3JtYXQvRG9jRm9ybWF0RmFjdG9yeVwiO1xuaW1wb3J0IHtFbGVtZW50c30gZnJvbSBcIi4uLy4uLy4uL3V0aWwvRWxlbWVudHNcIjtcbmltcG9ydCB7Y3JlYXRlU2libGluZ1R1cGxlc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnNcIjtcbmltcG9ydCB7TXV0YWJsZUlSZWN0fSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL3JlY3RzL0lSZWN0XCI7XG5pbXBvcnQge0lMVFJlY3R9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvcmVjdHMvSUxUUmVjdFwiO1xuaW1wb3J0IHtPYmplY3RzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL09iamVjdHNcIjtcblxuLyoqXG4gKiBUT0RPOlxuICpcbiAqIEkgZGVzaWduZWQgdGhpcyBpbmNvcnJlY3RseSBhbmQgc2hvdWxkIHJlZmFjdG9yIGl0IGludG8gYSBwcm9ibGVtIG9mIGdlb21ldHJ5LlxuICpcbiAqIFdoYXQgSSBuZWVkIHRvIGRvIGlzIGZvcm0gdGhpcyBpbnRvIGEgcG9seWdvbiB3aXRoIHBvaW50cyBkZWNvcmF0aW5nIHRoZSBwb2x5Z29uLlxuICpcbiAqIFRoZW4gSSBuZWVkIHRvIHRha2UgdGhlIG91dGxpZXIgcG9pbnRzLCB3aGljaCBjb250YWluIGFsbCB0aGUgcG9pbnRzIGluc2lkZVxuICogdGhlIHBsYW5lLCB0aGVuIGJyZWFrIGl0IGRvd24gaW50byByb3dzIGJ5IGxvb2tpbmcgZG93biB0aGUgcG9seWdvbiB2ZXJ0aWNhbGx5XG4gKiBhbmQgYmlzZWN0aW5nIGl0IHVudGlsIGl0IGZvcm1zIGEgY29sbGVjdGlvbiBvZiByZWN0YW5nbGVzLlxuICpcbiAqIFRoZSBjb2RlIGZvciB0aGlzIHdvdWxkIGJlIGEgTE9UIGNsZWFuZXIgYW5kIEkgdGhpbmsgbGVzcyBlcnJvciBwcm9uZS5cbiAqXG4gKiBUaGlzIHdhc24ndCBpbW1lZGlhdGVseSBldmlkZW50IGJlY2F1c2UgSSB3YXMgdGhpbmtpbmcgYWJvdXQgdGhlIHByb2JsZW1cbiAqIGFzIGEgc3RyZWFtIG9mIHRleHQsIG5vdCBvZiBnZW9tZXRyaWMgcG9pbnRzLlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRIaWdobGlnaHRSb3dzIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGhpZ2hsaWdodCBmcm9tIGEgQ1NTIHNlbGVjdG9yLlxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVGcm9tU2VsZWN0b3Ioc2VsZWN0b3I6IHN0cmluZykge1xuXG4gICAgICAgIGxldCBkb2NGb3JtYXQgPSBEb2NGb3JtYXRGYWN0b3J5LmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgbGV0IHRhcmdldERvY3VtZW50ID0gZG9jRm9ybWF0LnRhcmdldERvY3VtZW50KCk7XG5cbiAgICAgICAgbGV0IGVsZW1lbnRzID0gQXJyYXkuZnJvbSh0YXJnZXREb2N1bWVudCEucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXG4gICAgICAgIGlmKCEgZWxlbWVudHMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGVsZW1lbnRzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlY3RFbGVtZW50cyA9IGVsZW1lbnRzLm1hcChjdXJyZW50ID0+IHRoaXMuY29tcHV0ZU9mZnNldCg8SFRNTEVsZW1lbnQ+IGN1cnJlbnQpKTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiV29ya2luZyB3aXRoIHJhdyByZWN0RWxlbWVudHM6IFwiLCByZWN0RWxlbWVudHMpO1xuXG4gICAgICAgIHJldHVybiBUZXh0SGlnaGxpZ2h0Um93cy5jb21wdXRlQ29udGlndW91c1JlY3RzKHJlY3RFbGVtZW50cyk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdGhlIHJvd3MgZnJvbSB0aGUgZ2l2ZW4gcmVjdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzZWxlY3RvclxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVGcm9tUmVjdHMoc2VsZWN0b3I6IHN0cmluZykge1xuXG4gICAgICAgIC8vIEZJWE1FOiB0aGlzIGlzbid0IHdvcmtpbmcgeWV0Li4uXG4gICAgICAgIC8vXG5cbiAgICAgICAgLy8gbGV0IHJlY3RFbGVtZW50cyA9IGVsZW1lbnRzLm1hcChjdXJyZW50ID0+IHRoaXMuY29tcHV0ZU9mZnNldChjdXJyZW50KSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2coXCJXb3JraW5nIHdpdGggcmF3IHJlY3RFbGVtZW50czogXCIsIHJlY3RFbGVtZW50cyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHJldHVybiBUZXh0SGlnaGxpZ2h0Um93cy5jb21wdXRlQ29udGlndW91c1JlY3RzKHJlY3RFbGVtZW50cyk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiB0aGUgc3BhbiBvZiBvdXIgaGlnaGxpZ2h0LCBjb21wdXRlIHRoZSBvZmZzZXQgbG9va2luZyBhdCB0aGUgQ1NTXG4gICAgICogc3R5bGVzIG9mIHRoZSBlbGVtZW50IHdlJ3JlIHRyeWluZyB0byBtYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB3aGljaCB3ZSdyZSBjb21wdXRpbmcgb3Zlci5cbiAgICAgKiBAcmV0dXJuIEEgUmVjdEVsZW1lbnQgZm9yIHRoZSByZWN0IChyZXN1bHQpIGFuZCB0aGUgZWxlbWVudFxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wdXRlT2Zmc2V0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG5cbiAgICAgICAgbGV0IGRvY0Zvcm1hdCA9IERvY0Zvcm1hdEZhY3RvcnkuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICAvLyBtYWtlIHN1cmUgd2UncmUgd29ya2luZyBvbiB0aGUgcmlnaHQgZWxlbWVudCBvciBvdXIgbWF0aCB3b24ndCBiZSByaWdodC5cbiAgICAgICAgRWxlbWVudHMucmVxdWlyZUNsYXNzKGVsZW1lbnQsIFwidGV4dC1oaWdobGlnaHQtc3BhblwiKTtcblxuICAgICAgICBsZXQgdGV4dEhpZ2hsaWdodFNwYW5PZmZzZXQ6IElMVFJlY3QgPSBFbGVtZW50cy5vZmZzZXQoZWxlbWVudCk7XG5cbiAgICAgICAgaWYoZG9jRm9ybWF0Lm5hbWUgPT09IFwiaHRtbFwiKSB7XG5cbiAgICAgICAgICAgIC8vIEZJWE1FOiBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZG9lc24ndCB0YWtlIGludG8gY29uc2lkZXJhdGlvblxuICAgICAgICAgICAgLy8gdHJhbnNmb3JtcyBhbmQgd2hlbiBzY2FsZWQgd2UncmUgZ2V0dGluZyB0aGUgd3JvbmcgcG9zaXRpb25zLi5cblxuICAgICAgICAgICAgLy8gRklYTUU6IGFsc28gLCB0aGlzIG9ubHkgd29ya3MgZm9yIHRoZSBodG1sIHZlcnNpb24gYmVjYXVzZSB0aGVcbiAgICAgICAgICAgIC8vIGlmcmFtZSBkb2Vzbid0IHNjcm9sbC4gIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpcyByZWxhdGl2ZSB0byB0aGVcbiAgICAgICAgICAgIC8vIHZpZXdwb3J0LlxuXG4gICAgICAgICAgICAvLyBUT0RPOiBzaXQgZG93biBhbmQgUkVBTExZIHVuZGVyc3RhbmQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGFuZFxuICAgICAgICAgICAgLy8gZ2V0Q2xpZW50UmVjdHMgYXMgd2VsbCBhcyBvZmZzZXRMZWZ0LG9mZnNldFRvcCAoYW5kIGZyaWVuZHMpLlxuICAgICAgICAgICAgLy8gSSB0aGluaywgaW4gcmV0cm9zcGVjdCwgdGhhdCBJJ20gY29tcHV0aW5nIGFsbCBvZiB0aGVzZSB3cm9uZy5cbiAgICAgICAgICAgIC8vIEkgdGhpbmsgSSBuZWVkIHRvIHVzZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhbmQgbm90IG9mZnNldFxuICAgICAgICAgICAgLy8gYnV0IHRoZSBQREYgdmlld2VyIHVzZXMgdHJhbnNmb3JtcyB3aGljaCBpcyBjb25mdXNpbmcuXG4gICAgICAgICAgICB0ZXh0SGlnaGxpZ2h0U3Bhbk9mZnNldCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGV4dExheWVyRGl2RWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgICAgICBsZXQgdGV4dExheWVyRGl2T2Zmc2V0ID0gZWxlbWVudE9mZnNldCh0ZXh0TGF5ZXJEaXZFbGVtZW50KTtcbiAgICAgICAgbGV0IHJlY3Q6IE11dGFibGVJUmVjdCA9IHRleHRMYXllckRpdk9mZnNldDtcblxuICAgICAgICBpZihkb2NGb3JtYXQubmFtZSA9PT0gXCJodG1sXCIpIHtcblxuICAgICAgICAgICAgLy8gRklYTUUgdGhpcyBzaG91bGQgZ28gaW50byBhIGRvY0Zvcm1hdC5jb21wdXRlQW5ub3RhdGlvbk9yaWdpbihlbGVtZW50KVxuICAgICAgICAgICAgLy8gd2hpY2ggZm9yIGlmcmFtZXMgc2hvdWxkIGp1c3QgYmUgdGhlIGRvY3VtZW50IG9mZnNldCBidXQgZm9yXG4gICAgICAgICAgICAvLyBQREZzIHNob3VsZCBiZSB0aGUgb2Zmc2V0IG9mIHRoZSB0ZXh0RWxlbWVudC5cblxuICAgICAgICAgICAgcmVjdCA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIEZJWE1FOiB3ZSBzaG91bGQgYWxzbyBwYXJzZSBzY2FsZVkgYW5kIHNjYWxlIGhlcmUuIE5vcm1hbGx5IHNjYWxlWVxuICAgICAgICAvLyB3b3VsZCBiZSB6ZXJvIHdoaWNoIHdvdWxkIHdvcmsgd2l0aCB0aGUgUERGIHZpZXdlci5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gRklYTUU6IGFuZCBjb3VsZG4ndCBhbm90aGVyIHdheSB0byBkZWFsIHdpdGggdGhpcyBiZSB0byBwbGFjZSB0aGVzZVxuICAgICAgICAvLyBpbnRvIGVpdGhlciB0aGUgdGV4dExheWVyRGl2RWxlbWVudCBvciBteSBvd24gYW5ub3RhdGlvbnNEaXZFbGVtZW50XG4gICAgICAgIC8vIHdoaWNoIGhhcyB0aGUgc2FtZSB0cmFuc2Zvcm0/XG4gICAgICAgIGxldCBzY2FsZVggPSBTdHlsZXMucGFyc2VUcmFuc2Zvcm1TY2FsZVgodGV4dExheWVyRGl2RWxlbWVudCEuc3R5bGUudHJhbnNmb3JtKTtcbiAgICAgICAgaWYoISBzY2FsZVgpIHtcbiAgICAgICAgICAgIC8vIEZJWE1FOiByZXR1cm4gMS4wIGZyb20gcGFyc2VUcmFuc2Zvcm1TY2FsZVhcbiAgICAgICAgICAgIHNjYWxlWCA9IDEuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY3QubGVmdCA9IHJlY3QubGVmdCArICh0ZXh0SGlnaGxpZ2h0U3Bhbk9mZnNldC5sZWZ0ICogc2NhbGVYKTtcbiAgICAgICAgcmVjdC50b3AgPSByZWN0LnRvcCArIHRleHRIaWdobGlnaHRTcGFuT2Zmc2V0LnRvcDtcblxuICAgICAgICByZWN0LmhlaWdodCA9IHRleHRIaWdobGlnaHRTcGFuT2Zmc2V0LmhlaWdodDtcbiAgICAgICAgcmVjdC53aWR0aCA9IHRleHRIaWdobGlnaHRTcGFuT2Zmc2V0LndpZHRoICogc2NhbGVYO1xuXG4gICAgICAgIHJlY3Qud2lkdGggPSBNYXRoLm1pbihyZWN0LndpZHRoLCB0ZXh0TGF5ZXJEaXZPZmZzZXQud2lkdGgpO1xuXG4gICAgICAgIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyByZWN0LmhlaWdodDtcbiAgICAgICAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGg7XG5cbiAgICAgICAgcmVjdCA9IFJlY3RzLnZhbGlkYXRlKHJlY3QpO1xuXG4gICAgICAgIC8vIHRoZSByZXN1bHQgbmVlZHMgdG8gZmFjdG9yIGluIHRoZSBjdXJyZW50IHNjYWxlIHZzIHRoZSByZWZlcmVuY2VcbiAgICAgICAgLy8gc2NhbGUgb2YgMS4wLiAgV2UgYWx3YXlzIHN0b3JlIC8gcmVmZXJlbmNlIHRoZSBoaWdobGlnaHRzIGluIGEgc2NhbGVcbiAgICAgICAgLy8gb2YgMS4wIGFuZCB0aGVuIGFkanVzdCB0aGVtIGJhc2VkIG9uIHRoZSBjdXJyZW50IHZpZXcuXG5cbiAgICAgICAgbGV0IGN1cnJlbnRTY2FsZSA9IGRvY0Zvcm1hdC5jdXJyZW50U2NhbGUoKTtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQoY3VycmVudFNjYWxlLCBcImN1cnJlbnRTY2FsZVwiKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROdW1iZXIoY3VycmVudFNjYWxlLCBcImN1cnJlbnRTY2FsZVwiKTtcblxuICAgICAgICByZWN0ID0gUmVjdHMuc2NhbGUocmVjdCwgMS4wIC8gY3VycmVudFNjYWxlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFJlY3RFbGVtZW50KHJlY3QsIGVsZW1lbnQpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR28gdGhyb3VnaCBBTEwgdGhlIHJlY3RzIGFuZCBidWlsZCBvdXQgcm93cyBvZiBlbGVtZW50cyB0aGF0IGFyZVxuICAgICAqIGhvcml6b250YWxseSBhbGwgb24gdGhlIHNhbWUgcGxhbmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVjdEVsZW1lbnRzXG4gICAgICovXG4gICAgc3RhdGljIGNvbXB1dGVSb3dzKHJlY3RFbGVtZW50czogYW55KSB7XG5cbiAgICAgICAgbGV0IHR1cGxlcyA9IGNyZWF0ZVNpYmxpbmdUdXBsZXMocmVjdEVsZW1lbnRzKTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgICAgLy8gdGhlIGN1cnJlbnQgcm93XG4gICAgICAgIGxldCByb3c6IGFueVtdID0gW107XG5cbiAgICAgICAgdHVwbGVzLmZvckVhY2goZnVuY3Rpb24gKHR1cGxlOiBhbnkpIHtcblxuICAgICAgICAgICAgaWYoIXR1cGxlLmN1cnIucmVjdCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIFJlY3RFbGVtZW50XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3cucHVzaCh0dXBsZS5jdXJyKTtcblxuICAgICAgICAgICAgaWYodHVwbGUubmV4dCA9PSBudWxsIHx8ICh0dXBsZS5uZXh0ICYmIHR1cGxlLmN1cnIucmVjdC50b3AgIT09IHR1cGxlLm5leHQucmVjdC50b3ApKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocm93KTtcbiAgICAgICAgICAgICAgICByb3cgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocm93Lmxlbmd0aCAhPT0gMClcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJvdyk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIC8vIGdpdmVuIGEgcm93IG9mIHJlY3RzLCBjb21wdXRlIGEgcmVjdCB0aGF0IGNvdmVycyB0aGUgZW50aXJlIHJvdyBtYXhpbWl6aW5nXG4gICAgLy8gdGhlIGhlaWdodCBhbmQgd2lkdGguXG4gICAgc3RhdGljIGNvbXB1dGVSZWN0Rm9yUm93KHJvdzogYW55KSB7XG5cbiAgICAgICAgaWYgKHJvdy5sZW5ndGggPT0gbnVsbCB8fCByb3cubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByb3cgZGF0YVwiKTtcblxuICAgICAgICAvLyBkdXBsaWNhdGUgdGhlIGZpcnN0IGVudHJ5Li4uIHdlIHdpbGwga2VlcCBtYXhpbWl6aW5nIHRoZSBib3VuZHMuXG4gICAgICAgIGxldCByZXN1bHQgPSBSZWN0cy52YWxpZGF0ZShPYmplY3RzLmR1cGxpY2F0ZShyb3dbMF0ucmVjdCkpO1xuXG4gICAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChyZWN0RWxlbWVudDogYW55KSB7XG5cbiAgICAgICAgICAgIGlmKHJlY3RFbGVtZW50LnJlY3QubGVmdCA8IHJlc3VsdC5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmxlZnQgPSByZWN0RWxlbWVudC5yZWN0LmxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHJlY3RFbGVtZW50LnJlY3QudG9wIDwgcmVzdWx0LnRvcCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC50b3AgPSByZWN0RWxlbWVudC5yZWN0LnRvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocmVjdEVsZW1lbnQucmVjdC5ib3R0b20gPiByZXN1bHQuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmJvdHRvbSA9IHJlY3RFbGVtZW50LnJlY3QuYm90dG9tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihyZWN0RWxlbWVudC5yZWN0LnJpZ2h0ID4gcmVzdWx0LnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnJpZ2h0ID0gcmVjdEVsZW1lbnQucmVjdC5yaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0LndpZHRoID0gcmVzdWx0LnJpZ2h0IC0gcmVzdWx0LmxlZnQ7XG4gICAgICAgICAgICByZXN1bHQuaGVpZ2h0ID0gcmVzdWx0LmJvdHRvbSAtIHJlc3VsdC50b3A7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFJlY3RzLnZhbGlkYXRlKHJlc3VsdCk7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgY29tcHV0ZUludGVybWVkaWF0ZVJvd3MocmVjdEVsZW1lbnRzOiBhbnkpIHtcblxuICAgICAgICBsZXQgcm93cyA9IFRleHRIaWdobGlnaHRSb3dzLmNvbXB1dGVSb3dzKHJlY3RFbGVtZW50cylcbiAgICAgICAgbGV0IHJlc3VsdDogYW55W10gPSBbXTtcblxuICAgICAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHJlY3RFbGVtZW50c1dpdGhpblJvdykge1xuICAgICAgICAgICAgbGV0IHJlY3QgPSBUZXh0SGlnaGxpZ2h0Um93cy5jb21wdXRlUmVjdEZvclJvdyhyZWN0RWxlbWVudHNXaXRoaW5Sb3cpO1xuICAgICAgICAgICAgbGV0IGludGVybWVkaWF0ZVJvdyA9IG5ldyBJbnRlcm1lZGlhdGVSb3cocmVjdCwgcmVjdEVsZW1lbnRzV2l0aGluUm93KTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGludGVybWVkaWF0ZVJvdyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgY29tcHV0ZUNvbnRpZ3VvdXNSZWN0cyhyZWN0RWxlbWVudHM6IGFueVtdKSB7XG5cbiAgICAgICAgbGV0IGludGVybWVkaWF0ZVJvd3MgPSBUZXh0SGlnaGxpZ2h0Um93cy5jb21wdXRlSW50ZXJtZWRpYXRlUm93cyhyZWN0RWxlbWVudHMpO1xuXG4gICAgICAgIGxldCBpbnRlcm1lZGlhdGVSb3dQYWdlciA9IGNyZWF0ZVNpYmxpbmdUdXBsZXMoaW50ZXJtZWRpYXRlUm93cyk7XG5cbiAgICAgICAgbGV0IHJlc3VsdDogYW55W10gPSBbXTtcblxuICAgICAgICBpbnRlcm1lZGlhdGVSb3dQYWdlci5mb3JFYWNoKGZ1bmN0aW9uIChwYWdlOiBhbnkpIHtcblxuICAgICAgICAgICAgaWYoIXBhZ2UuY3Vyci5yZWN0IHx8ICFwYWdlLmN1cnIucmVjdEVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgSW50ZXJtZWRpYXRlUm93XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgYWRqdXN0ZWRSZWN0ID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IHBhZ2UuY3Vyci5yZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgdG9wOiBwYWdlLmN1cnIucmVjdC50b3AsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHBhZ2UuY3Vyci5yZWN0LnJpZ2h0LFxuICAgICAgICAgICAgICAgIGJvdHRvbTogcGFnZS5jdXJyLnJlY3QuYm90dG9tLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gYWRqdXN0IHRoZSBib3R0b20gb2YgdGhpcyBkaXYgYnV0IE9OTFkgaWYgdGhlIG5leHQgZGl2IGlzIG5vdCBvblxuICAgICAgICAgICAgLy8gdGhlIHNhbWUgcm93cy4gIEkgbWlnaHQgbmVlZCB0byBoYXZlIHNvbWUgY29kZSB0byBmaXJzdCBidWlsZFxuICAgICAgICAgICAgLy8gdGhpcyBpbnRvIFJPV1MuXG5cbiAgICAgICAgICAgIGlmKHBhZ2UubmV4dCAmJiBwYWdlLm5leHQucmVjdC50b3AgIT09IHBhZ2UuY3Vyci5yZWN0LnRvcCkge1xuICAgICAgICAgICAgICAgIGFkanVzdGVkUmVjdC5ib3R0b20gPSBNYXRoLm1heChwYWdlLm5leHQucmVjdC50b3AsIGFkanVzdGVkUmVjdC5ib3R0b20pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZGp1c3RlZFJlY3Qud2lkdGggPSBhZGp1c3RlZFJlY3QucmlnaHQgLSBhZGp1c3RlZFJlY3QubGVmdDtcbiAgICAgICAgICAgIGFkanVzdGVkUmVjdC5oZWlnaHQgPSBhZGp1c3RlZFJlY3QuYm90dG9tIC0gYWRqdXN0ZWRSZWN0LnRvcDtcblxuICAgICAgICAgICAgYWRqdXN0ZWRSZWN0ID0gUmVjdHMudmFsaWRhdGUoYWRqdXN0ZWRSZWN0KTtcblxuICAgICAgICAgICAgbGV0IHRleHRIaWdobGlnaHRSb3cgPSBuZXcgVGV4dEhpZ2hsaWdodFJvdyhhZGp1c3RlZFJlY3QsIHBhZ2UuY3Vyci5yZWN0RWxlbWVudHMpO1xuXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0ZXh0SGlnaGxpZ2h0Um93KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG4iXX0=