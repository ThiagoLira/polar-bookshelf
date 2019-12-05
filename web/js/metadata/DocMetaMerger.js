"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
class DocMetaMerger {
    static merge(primary, ...secondaries) {
        const result = Dictionaries_1.Dictionaries.deepCopy(primary);
        for (const secondary of secondaries) {
            deepCopyInto(result.attachments, secondary.attachments);
            for (const key of Dictionaries_1.Dictionaries.numberKeys(primary.pageMetas)) {
                const src = primary.pageMetas[key];
                const dest = result.pageMetas[key];
                deepCopyPageMeta(src, dest);
            }
        }
        return result;
    }
}
exports.DocMetaMerger = DocMetaMerger;
function deepCopyPageMeta(src, dest) {
    deepCopyInto(src.textHighlights, dest.textHighlights);
    deepCopyInto(src.areaHighlights, dest.areaHighlights);
    deepCopyInto(src.notes, dest.notes);
    deepCopyInto(src.comments, dest.comments);
    deepCopyInto(src.questions, dest.questions);
    deepCopyInto(src.flashcards, dest.flashcards);
}
function deepCopyInto(src, target) {
    if (!src) {
        return;
    }
    for (const key of Object.keys(src)) {
        target[key] = src[key];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jTWV0YU1lcmdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY01ldGFNZXJnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxRUFBZ0U7QUFLaEUsTUFBYSxhQUFhO0lBRWYsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFpQixFQUFFLEdBQUcsV0FBb0M7UUFLMUUsTUFBTSxNQUFNLEdBQWMsMkJBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekQsS0FBSyxNQUFNLFNBQVMsSUFBSSxXQUFXLEVBQUU7WUFFakMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXhELEtBQUssTUFBTSxHQUFHLElBQUksMkJBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUUxRCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFFL0I7U0FFSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7Q0FFSjtBQTNCRCxzQ0EyQkM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLEdBQWMsRUFBRSxJQUFlO0lBR3JELFlBQVksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0RCxZQUFZLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEQsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxZQUFZLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRWxELENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxHQUFjLEVBQUUsTUFBaUI7SUFFbkQsSUFBSSxDQUFFLEdBQUcsRUFBRTtRQUNQLE9BQU87S0FDVjtJQUVELEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzFCO0FBRUwsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi9Eb2NNZXRhJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRGljdGlvbmFyaWVzJztcbmltcG9ydCB7UGFnZU1ldGF9IGZyb20gJy4vUGFnZU1ldGEnO1xuaW1wb3J0IHtJUGFnZU1ldGF9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lQYWdlTWV0YVwiO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcblxuZXhwb3J0IGNsYXNzIERvY01ldGFNZXJnZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyBtZXJnZShwcmltYXJ5OiBJRG9jTWV0YSwgLi4uc2Vjb25kYXJpZXM6IFJlYWRvbmx5QXJyYXk8SURvY01ldGE+KSB7XG5cbiAgICAgICAgLy8gdGhlIHByaW1hcnkgY29udGFpbnMgdGhlIG1haW4gZG9jdW1lbnQgY2hhbmdlcy5cblxuICAgICAgICAvLyB0aGUgc2Vjb25kYXJ5IGRvY01ldGFzIGNvbnRhaW4gd2hhdCB3ZSBuZWVkIHRvIG1lcmdlL2NvcHkgb3Zlci5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gPElEb2NNZXRhPiBEaWN0aW9uYXJpZXMuZGVlcENvcHkocHJpbWFyeSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBzZWNvbmRhcnkgb2Ygc2Vjb25kYXJpZXMpIHtcblxuICAgICAgICAgICAgZGVlcENvcHlJbnRvKHJlc3VsdC5hdHRhY2htZW50cywgc2Vjb25kYXJ5LmF0dGFjaG1lbnRzKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgRGljdGlvbmFyaWVzLm51bWJlcktleXMocHJpbWFyeS5wYWdlTWV0YXMpKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBwcmltYXJ5LnBhZ2VNZXRhc1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3QgPSByZXN1bHQucGFnZU1ldGFzW2tleV07XG4gICAgICAgICAgICAgICAgZGVlcENvcHlQYWdlTWV0YShzcmMsIGRlc3QpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gZGVlcENvcHlQYWdlTWV0YShzcmM6IElQYWdlTWV0YSwgZGVzdDogSVBhZ2VNZXRhKSB7XG4gICAgLy8gcGFnZW1hcmtzIGFuZCByZWFkaW5nIHByb2dyZXNzIHNob3VsZCBub3QgYmUgY29waWVkIG92ZXIuXG5cbiAgICBkZWVwQ29weUludG8oc3JjLnRleHRIaWdobGlnaHRzLCBkZXN0LnRleHRIaWdobGlnaHRzKTtcbiAgICBkZWVwQ29weUludG8oc3JjLmFyZWFIaWdobGlnaHRzLCBkZXN0LmFyZWFIaWdobGlnaHRzKTtcbiAgICBkZWVwQ29weUludG8oc3JjLm5vdGVzLCBkZXN0Lm5vdGVzKTtcbiAgICBkZWVwQ29weUludG8oc3JjLmNvbW1lbnRzLCBkZXN0LmNvbW1lbnRzKTtcbiAgICBkZWVwQ29weUludG8oc3JjLnF1ZXN0aW9ucywgZGVzdC5xdWVzdGlvbnMpO1xuICAgIGRlZXBDb3B5SW50byhzcmMuZmxhc2hjYXJkcywgZGVzdC5mbGFzaGNhcmRzKTtcblxufVxuXG5mdW5jdGlvbiBkZWVwQ29weUludG8oc3JjOiBPYmplY3RNYXAsIHRhcmdldDogT2JqZWN0TWFwKSB7XG5cbiAgICBpZiAoISBzcmMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNyYykpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIE9iamVjdE1hcCB7XG4gICAgW2tleTogc3RyaW5nXTogb2JqZWN0O1xufVxuXG4iXX0=