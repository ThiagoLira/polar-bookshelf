"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextHighlightRecords_1 = require("./TextHighlightRecords");
const TextRect_1 = require("./TextRect");
const TextHighlight_1 = require("./TextHighlight");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const DocMetas_1 = require("./DocMetas");
const ITextHighlights_1 = require("polar-shared/src/metadata/ITextHighlights");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const Texts_1 = require("polar-shared/src/metadata/Texts");
const TextType_1 = require("polar-shared/src/metadata/TextType");
class TextHighlights {
    static update(id, docMeta, pageMeta, updates) {
        const existing = pageMeta.textHighlights[id];
        if (!existing) {
            throw new Error("No existing for id: " + id);
        }
        const updated = new TextHighlight_1.TextHighlight(Object.assign(Object.assign({}, existing), updates));
        DocMetas_1.DocMetas.withBatchedMutations(docMeta, () => {
            pageMeta.textHighlights[id] = updated;
        });
    }
    static resetRevisedText(docMeta, pageMeta, id) {
        this.setRevisedText(docMeta, pageMeta, id, undefined);
    }
    static setRevisedText(docMeta, pageMeta, id, html) {
        pageMeta = DocMetas_1.DocMetas.getPageMeta(docMeta, pageMeta.pageInfo.num);
        const textHighlight = pageMeta.textHighlights[id];
        if (textHighlight) {
            DocMetas_1.DocMetas.withBatchedMutations(docMeta, () => {
                delete pageMeta.textHighlights[id];
                id = Hashcodes_1.Hashcodes.createRandomID();
                const revisedText = html ? Texts_1.Texts.create(html, TextType_1.TextType.HTML) : undefined;
                const newTextHighlight = Object.assign(Object.assign({}, textHighlight), { id, lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.create(), revisedText });
                pageMeta.textHighlights[id] = newTextHighlight;
            });
        }
    }
    static createMockTextHighlight() {
        const rects = [{ top: 100, left: 100, right: 200, bottom: 200, width: 100, height: 100 }];
        const textSelections = [new TextRect_1.TextRect({ text: "hello world" })];
        const text = "hello world";
        return TextHighlightRecords_1.TextHighlightRecords.create(rects, textSelections, { TEXT: text }).value;
    }
    static attachImage(textHighlight, image) {
        textHighlight.images[Preconditions_1.notNull(image.rel)] = image;
    }
    static deleteTextHighlight(pageMeta, textHighlight) {
        if (textHighlight.images) {
            Object.values(textHighlight.images).forEach(image => {
            });
        }
        delete pageMeta.textHighlights[textHighlight.id];
    }
    static toHTML(textHighlight) {
        return ITextHighlights_1.ITextHighlights.toHTML(textHighlight);
    }
}
exports.TextHighlights = TextHighlights;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEhpZ2hsaWdodHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXh0SGlnaGxpZ2h0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUE0RDtBQUU1RCx5Q0FBb0M7QUFDcEMsbURBQThDO0FBRTlDLGtFQUF1RDtBQUN2RCx5Q0FBb0M7QUFJcEMsK0VBQTBFO0FBRTFFLCtEQUEwRDtBQUMxRCxxRkFBZ0Y7QUFDaEYsMkRBQXNEO0FBQ3RELGlFQUE0RDtBQUU1RCxNQUFhLGNBQWM7SUFFaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFVLEVBQ1YsT0FBaUIsRUFDakIsUUFBbUIsRUFDbkIsT0FBZ0M7UUFFakQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUNoRDtRQUVELE1BQU0sT0FBTyxHQUFHLElBQUksNkJBQWEsaUNBQUssUUFBUSxHQUFLLE9BQU8sRUFBRSxDQUFDO1FBRTdELG1CQUFRLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUd4QyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBaUIsRUFDakIsUUFBbUIsRUFDbkIsRUFBUztRQUVwQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQWlCLEVBQ2pCLFFBQW1CLEVBQ25CLEVBQVMsRUFDVCxJQUF5QjtRQUVsRCxRQUFRLEdBQUcsbUJBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEUsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVsRCxJQUFJLGFBQWEsRUFBRTtZQUVmLG1CQUFRLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFFeEMsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUVuQyxFQUFFLEdBQUcscUJBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFFaEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBRXpFLE1BQU0sZ0JBQWdCLG1DQUNmLGFBQWEsS0FDaEIsRUFBRSxFQUNGLFdBQVcsRUFBRSx1Q0FBa0IsQ0FBQyxNQUFNLEVBQUUsRUFDeEMsV0FBVyxHQUNkLENBQUM7Z0JBRUYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztZQUVuRCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBRUwsQ0FBQztJQU1NLE1BQU0sQ0FBQyx1QkFBdUI7UUFFakMsTUFBTSxLQUFLLEdBQVksQ0FBRSxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUNsRyxNQUFNLGNBQWMsR0FBRyxDQUFDLElBQUksbUJBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBRzNCLE9BQU8sMkNBQW9CLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFFbEYsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBNEIsRUFBRSxLQUFZO1FBQ2hFLGFBQWEsQ0FBQyxNQUFNLENBQUMsdUJBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDckQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFtQixFQUFFLGFBQTZCO1FBRWhGLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUV0QixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFRcEQsQ0FBQyxDQUFDLENBQUM7U0FFTjtRQUVELE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFckQsQ0FBQztJQU1NLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBNkI7UUFDOUMsT0FBTyxpQ0FBZSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBRUo7QUE5R0Qsd0NBOEdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXh0SGlnaGxpZ2h0UmVjb3Jkc30gZnJvbSAnLi9UZXh0SGlnaGxpZ2h0UmVjb3Jkcyc7XG5pbXBvcnQge0lSZWN0fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvcmVjdHMvSVJlY3QnO1xuaW1wb3J0IHtUZXh0UmVjdH0gZnJvbSAnLi9UZXh0UmVjdCc7XG5pbXBvcnQge1RleHRIaWdobGlnaHR9IGZyb20gJy4vVGV4dEhpZ2hsaWdodCc7XG5pbXBvcnQge0ltYWdlfSBmcm9tICcuL0ltYWdlJztcbmltcG9ydCB7bm90TnVsbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7RG9jTWV0YXN9IGZyb20gJy4vRG9jTWV0YXMnO1xuaW1wb3J0IHtJUGFnZU1ldGF9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lQYWdlTWV0YVwiO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcbmltcG9ydCB7SVRleHRIaWdobGlnaHR9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lUZXh0SGlnaGxpZ2h0XCI7XG5pbXBvcnQge0lUZXh0SGlnaGxpZ2h0c30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVRleHRIaWdobGlnaHRzXCI7XG5pbXBvcnQge0hUTUxTdHIsIElEU3RyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1N0cmluZ3NcIjtcbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0hhc2hjb2Rlc1wiO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ3N9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5nc1wiO1xuaW1wb3J0IHtUZXh0c30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvVGV4dHNcIjtcbmltcG9ydCB7VGV4dFR5cGV9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1RleHRUeXBlXCI7XG5cbmV4cG9ydCBjbGFzcyBUZXh0SGlnaGxpZ2h0cyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZShpZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY01ldGE6IElEb2NNZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VNZXRhOiBJUGFnZU1ldGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlczogUGFydGlhbDxJVGV4dEhpZ2hsaWdodD4pIHtcblxuICAgICAgICBjb25zdCBleGlzdGluZyA9IHBhZ2VNZXRhLnRleHRIaWdobGlnaHRzW2lkXSE7XG5cbiAgICAgICAgaWYgKCFleGlzdGluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gZXhpc3RpbmcgZm9yIGlkOiBcIiArIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBuZXcgVGV4dEhpZ2hsaWdodCh7Li4uZXhpc3RpbmcsIC4uLnVwZGF0ZXN9KTtcblxuICAgICAgICBEb2NNZXRhcy53aXRoQmF0Y2hlZE11dGF0aW9ucyhkb2NNZXRhLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBJIHRoaW5rIHRoaXMgaXMgd3JvbmcgYW5kIHdlIGhhdmUgdG8gdXNlIGEgbmV3IElELi4uXG4gICAgICAgICAgICAvLyBkZWxldGUgcGFnZU1ldGEudGV4dEhpZ2hsaWdodHNbaWRdO1xuICAgICAgICAgICAgcGFnZU1ldGEudGV4dEhpZ2hsaWdodHNbaWRdID0gdXBkYXRlZDtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlc2V0UmV2aXNlZFRleHQoZG9jTWV0YTogSURvY01ldGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VNZXRhOiBJUGFnZU1ldGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBJRFN0cikge1xuXG4gICAgICAgIHRoaXMuc2V0UmV2aXNlZFRleHQoZG9jTWV0YSwgcGFnZU1ldGEsIGlkLCB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0UmV2aXNlZFRleHQoZG9jTWV0YTogSURvY01ldGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTWV0YTogSVBhZ2VNZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IElEU3RyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogSFRNTFN0ciB8IHVuZGVmaW5lZCkge1xuXG4gICAgICAgIHBhZ2VNZXRhID0gRG9jTWV0YXMuZ2V0UGFnZU1ldGEoZG9jTWV0YSwgcGFnZU1ldGEucGFnZUluZm8ubnVtKTtcblxuICAgICAgICBjb25zdCB0ZXh0SGlnaGxpZ2h0ID0gcGFnZU1ldGEudGV4dEhpZ2hsaWdodHNbaWRdO1xuXG4gICAgICAgIGlmICh0ZXh0SGlnaGxpZ2h0KSB7XG5cbiAgICAgICAgICAgIERvY01ldGFzLndpdGhCYXRjaGVkTXV0YXRpb25zKGRvY01ldGEsICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBwYWdlTWV0YS50ZXh0SGlnaGxpZ2h0c1tpZF07XG5cbiAgICAgICAgICAgICAgICBpZCA9IEhhc2hjb2Rlcy5jcmVhdGVSYW5kb21JRCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmV2aXNlZFRleHQgPSBodG1sID8gVGV4dHMuY3JlYXRlKGh0bWwsIFRleHRUeXBlLkhUTUwpIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGV4dEhpZ2hsaWdodCA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGV4dEhpZ2hsaWdodCxcbiAgICAgICAgICAgICAgICAgICAgaWQsIC8vIGEgbmV3IElEIGlzIHJlcXVpcmVkIGhlcmUuLi5cbiAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgcmV2aXNlZFRleHRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcGFnZU1ldGEudGV4dEhpZ2hsaWdodHNbaWRdID0gbmV3VGV4dEhpZ2hsaWdodDtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG1vY2sgdGV4dCBoaWdobGlnaHQgZm9yIHRlc3RpbmcuXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZU1vY2tUZXh0SGlnaGxpZ2h0KCkge1xuXG4gICAgICAgIGNvbnN0IHJlY3RzOiBJUmVjdFtdID0gWyB7dG9wOiAxMDAsIGxlZnQ6IDEwMCwgcmlnaHQ6IDIwMCwgYm90dG9tOiAyMDAsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwfV07XG4gICAgICAgIGNvbnN0IHRleHRTZWxlY3Rpb25zID0gW25ldyBUZXh0UmVjdCh7dGV4dDogXCJoZWxsbyB3b3JsZFwifSldO1xuICAgICAgICBjb25zdCB0ZXh0ID0gXCJoZWxsbyB3b3JsZFwiO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIGJhc2ljIFRleHRIaWdobGlnaHQgb2JqZWN0Li5cbiAgICAgICAgcmV0dXJuIFRleHRIaWdobGlnaHRSZWNvcmRzLmNyZWF0ZShyZWN0cywgdGV4dFNlbGVjdGlvbnMsIHtURVhUOiB0ZXh0fSkudmFsdWU7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGF0dGFjaEltYWdlKHRleHRIaWdobGlnaHQ6IFRleHRIaWdobGlnaHQsIGltYWdlOiBJbWFnZSkge1xuICAgICAgICB0ZXh0SGlnaGxpZ2h0LmltYWdlc1tub3ROdWxsKGltYWdlLnJlbCldID0gaW1hZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZWxldGVUZXh0SGlnaGxpZ2h0KHBhZ2VNZXRhOiBJUGFnZU1ldGEsIHRleHRIaWdobGlnaHQ6IElUZXh0SGlnaGxpZ2h0KSB7XG5cbiAgICAgICAgaWYgKHRleHRIaWdobGlnaHQuaW1hZ2VzKSB7XG5cbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGV4dEhpZ2hsaWdodC5pbWFnZXMpLmZvckVhY2goaW1hZ2UgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgc2NyZWVuc2hvdFVSSSA9IFNjcmVlbnNob3RzLnBhcnNlVVJJKGltYWdlLnNyYyk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBpZiAoc2NyZWVuc2hvdFVSSSkge1xuICAgICAgICAgICAgICAgIC8vICAgICBkZWxldGUgcGFnZU1ldGEuc2NyZWVuc2hvdHNbc2NyZWVuc2hvdFVSSS5pZF07XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHBhZ2VNZXRhLnRleHRIaWdobGlnaHRzW3RleHRIaWdobGlnaHQuaWRdO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQERlcHJlY2F0ZWQgdXNlIElUZXh0SGlnaGxpZ2h0cy50b0hUTUxcbiAgICAgKiBAcGFyYW0gdGV4dEhpZ2hsaWdodFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdG9IVE1MKHRleHRIaWdobGlnaHQ6IElUZXh0SGlnaGxpZ2h0KTogSFRNTFN0ciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiBJVGV4dEhpZ2hsaWdodHMudG9IVE1MKHRleHRIaWdobGlnaHQpO1xuICAgIH1cblxufVxuIl19