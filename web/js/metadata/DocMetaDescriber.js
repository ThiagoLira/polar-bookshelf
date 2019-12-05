"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Functions_1 = require("polar-shared/src/util/Functions");
class DocMetaDescriber {
    static describe(docMeta) {
        let nrPagemarks = 0;
        let nrTextHighlights = 0;
        Functions_1.forDict(docMeta.pageMetas, (key, pageMeta) => {
            Functions_1.forDict(pageMeta.pagemarks, (id, pagemark) => {
                ++nrPagemarks;
            });
            Functions_1.forDict(pageMeta.textHighlights, (id, textHighlight) => {
                ++nrTextHighlights;
            });
        });
        return `Doc stats - pages: ${docMeta.docInfo.nrPages}, text highlights: ${nrTextHighlights}, pagemarks: ${nrPagemarks}`;
    }
}
exports.DocMetaDescriber = DocMetaDescriber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jTWV0YURlc2NyaWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY01ldGFEZXNjcmliZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrREFBd0Q7QUFHeEQsTUFBYSxnQkFBZ0I7SUFFbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFpQjtRQUVwQyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFFekIsbUJBQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBRXpDLG1CQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRTtnQkFDekMsRUFBRSxXQUFXLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxtQkFBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUU7Z0JBQ25ELEVBQUUsZ0JBQWdCLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sc0JBQXNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxzQkFBc0IsZ0JBQWdCLGdCQUFnQixXQUFXLEVBQUUsQ0FBQztJQUU1SCxDQUFDO0NBRUo7QUF2QkQsNENBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuL0RvY01ldGEnO1xuaW1wb3J0IHtmb3JEaWN0fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7SURvY01ldGF9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NNZXRhXCI7XG5cbmV4cG9ydCBjbGFzcyBEb2NNZXRhRGVzY3JpYmVyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZGVzY3JpYmUoZG9jTWV0YTogSURvY01ldGEpIHtcblxuICAgICAgICBsZXQgbnJQYWdlbWFya3MgPSAwO1xuICAgICAgICBsZXQgbnJUZXh0SGlnaGxpZ2h0cyA9IDA7XG5cbiAgICAgICAgZm9yRGljdChkb2NNZXRhLnBhZ2VNZXRhcywgKGtleSwgcGFnZU1ldGEpID0+IHtcblxuICAgICAgICAgICAgZm9yRGljdChwYWdlTWV0YS5wYWdlbWFya3MsIChpZCwgcGFnZW1hcmspID0+IHtcbiAgICAgICAgICAgICAgICArK25yUGFnZW1hcmtzO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvckRpY3QocGFnZU1ldGEudGV4dEhpZ2hsaWdodHMsIChpZCwgdGV4dEhpZ2hsaWdodCkgPT4ge1xuICAgICAgICAgICAgICAgICsrbnJUZXh0SGlnaGxpZ2h0cztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBgRG9jIHN0YXRzIC0gcGFnZXM6ICR7ZG9jTWV0YS5kb2NJbmZvLm5yUGFnZXN9LCB0ZXh0IGhpZ2hsaWdodHM6ICR7bnJUZXh0SGlnaGxpZ2h0c30sIHBhZ2VtYXJrczogJHtuclBhZ2VtYXJrc31gO1xuXG4gICAgfVxuXG59XG4iXX0=