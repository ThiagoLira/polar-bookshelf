"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocRepoTableColumns {
    constructor() {
        this.title = {
            id: "title",
            label: "Title",
            selected: true,
            title: "The main title the document."
        };
        this.lastUpdated = {
            id: "lastUpdated",
            label: "Updated",
            selected: true,
            title: "The last time the documented was updated (tagged, annotated, etc)."
        };
        this.added = {
            id: "added",
            label: "Added",
            selected: true
        };
        this.progress = {
            id: "progress",
            label: "Progress",
            selected: true
        };
        this.tags = {
            id: "tags",
            label: "Tags",
            selected: true,
        };
        this.nrAnnotations = {
            id: "nrAnnotations",
            label: "Annotations",
            selected: false,
            title: "The number of annotations in the document (comments, highlights, etc)."
        };
        this.flagged = {
            id: "flagged",
            label: "Flagged",
            selected: true
        };
        this.archived = {
            id: "archived",
            label: "Archived",
            selected: true
        };
        this.site = {
            id: "site",
            label: "Site",
            selected: false
        };
    }
}
exports.DocRepoTableColumns = DocRepoTableColumns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jUmVwb1RhYmxlQ29sdW1ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY1JlcG9UYWJsZUNvbHVtbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFhLG1CQUFtQjtJQUFoQztRQUVvQixVQUFLLEdBQW1CO1lBQ3BDLEVBQUUsRUFBRSxPQUFPO1lBQ1gsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSw4QkFBOEI7U0FDeEMsQ0FBQztRQUVjLGdCQUFXLEdBQW9CO1lBQzNDLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLG9FQUFvRTtTQUU5RSxDQUFDO1FBRWMsVUFBSyxHQUFvQjtZQUNyQyxFQUFFLEVBQUUsT0FBTztZQUNYLEtBQUssRUFBRSxPQUFPO1lBQ2QsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUVjLGFBQVEsR0FBb0I7WUFDeEMsRUFBRSxFQUFFLFVBQVU7WUFDZCxLQUFLLEVBQUUsVUFBVTtZQUNqQixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDO1FBRWMsU0FBSSxHQUFvQjtZQUNwQyxFQUFFLEVBQUUsTUFBTTtZQUNWLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUVjLGtCQUFhLEdBQW9CO1lBQzdDLEVBQUUsRUFBRSxlQUFlO1lBQ25CLEtBQUssRUFBRSxhQUFhO1lBQ3BCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLHdFQUF3RTtTQUNsRixDQUFDO1FBRWMsWUFBTyxHQUFvQjtZQUN2QyxFQUFFLEVBQUUsU0FBUztZQUNiLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7UUFFYyxhQUFRLEdBQW9CO1lBQ3hDLEVBQUUsRUFBRSxVQUFVO1lBQ2QsS0FBSyxFQUFFLFVBQVU7WUFDakIsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUVjLFNBQUksR0FBb0I7WUFDcEMsRUFBRSxFQUFFLE1BQU07WUFDVixLQUFLLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUM7SUFFTixDQUFDO0NBQUE7QUE1REQsa0RBNERDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaXN0T3B0aW9uVHlwZX0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3VpL2xpc3Rfc2VsZWN0b3IvTGlzdFNlbGVjdG9yJztcbmltcG9ydCB7S2V5VmFsdWVNYXBwaW5nfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9LZXlWYWx1ZU1hcHBpbmcnO1xuXG5leHBvcnQgY2xhc3MgRG9jUmVwb1RhYmxlQ29sdW1ucyBpbXBsZW1lbnRzIEtleVZhbHVlTWFwcGluZzxEb2NSZXBvVGFibGVDb2x1bW5zLCBMaXN0T3B0aW9uVHlwZT4ge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHRpdGxlOiBMaXN0T3B0aW9uVHlwZSA9IHtcbiAgICAgICAgaWQ6IFwidGl0bGVcIixcbiAgICAgICAgbGFiZWw6IFwiVGl0bGVcIixcbiAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgIHRpdGxlOiBcIlRoZSBtYWluIHRpdGxlIHRoZSBkb2N1bWVudC5cIlxuICAgIH07XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbGFzdFVwZGF0ZWQ6IExpc3RPcHRpb25UeXBlID0gIHtcbiAgICAgICAgaWQ6IFwibGFzdFVwZGF0ZWRcIixcbiAgICAgICAgbGFiZWw6IFwiVXBkYXRlZFwiLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IFwiVGhlIGxhc3QgdGltZSB0aGUgZG9jdW1lbnRlZCB3YXMgdXBkYXRlZCAodGFnZ2VkLCBhbm5vdGF0ZWQsIGV0YykuXCJcblxuICAgIH07XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgYWRkZWQ6IExpc3RPcHRpb25UeXBlID0gIHtcbiAgICAgICAgaWQ6IFwiYWRkZWRcIixcbiAgICAgICAgbGFiZWw6IFwiQWRkZWRcIixcbiAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICB9O1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHByb2dyZXNzOiBMaXN0T3B0aW9uVHlwZSA9ICB7XG4gICAgICAgIGlkOiBcInByb2dyZXNzXCIsXG4gICAgICAgIGxhYmVsOiBcIlByb2dyZXNzXCIsXG4gICAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgfTtcblxuICAgIHB1YmxpYyByZWFkb25seSB0YWdzOiBMaXN0T3B0aW9uVHlwZSA9ICB7XG4gICAgICAgIGlkOiBcInRhZ3NcIixcbiAgICAgICAgbGFiZWw6IFwiVGFnc1wiLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICB9O1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG5yQW5ub3RhdGlvbnM6IExpc3RPcHRpb25UeXBlID0gIHtcbiAgICAgICAgaWQ6IFwibnJBbm5vdGF0aW9uc1wiLFxuICAgICAgICBsYWJlbDogXCJBbm5vdGF0aW9uc1wiLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgIHRpdGxlOiBcIlRoZSBudW1iZXIgb2YgYW5ub3RhdGlvbnMgaW4gdGhlIGRvY3VtZW50IChjb21tZW50cywgaGlnaGxpZ2h0cywgZXRjKS5cIlxuICAgIH07XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZmxhZ2dlZDogTGlzdE9wdGlvblR5cGUgPSAge1xuICAgICAgICBpZDogXCJmbGFnZ2VkXCIsXG4gICAgICAgIGxhYmVsOiBcIkZsYWdnZWRcIixcbiAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICB9O1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGFyY2hpdmVkOiBMaXN0T3B0aW9uVHlwZSA9ICB7XG4gICAgICAgIGlkOiBcImFyY2hpdmVkXCIsXG4gICAgICAgIGxhYmVsOiBcIkFyY2hpdmVkXCIsXG4gICAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgfTtcblxuICAgIHB1YmxpYyByZWFkb25seSBzaXRlOiBMaXN0T3B0aW9uVHlwZSA9ICB7XG4gICAgICAgIGlkOiBcInNpdGVcIixcbiAgICAgICAgbGFiZWw6IFwiU2l0ZVwiLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICB9O1xuXG59XG4iXX0=