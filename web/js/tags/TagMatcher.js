"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tags_1 = require("polar-shared/src/tags/Tags");
const TagPaths_1 = require("./TagPaths");
const SetArrays_1 = require("polar-shared/src/util/SetArrays");
class TagMatcher {
    constructor(queryTagPairs, docTags) {
        this.queryTagPairs = queryTagPairs;
        this.docTags = docTags;
        this.docTagPairs = new TagPairs(this.docTags);
    }
    matches() {
        return this.matchesFolders() && this.matchesTags();
    }
    matchesFolders() {
        const queryTagIDs = this.queryTagPairs.folderTags.tagIDs;
        const docTagIDs = this.docTagPairs.folderTags.tagIDs;
        if (queryTagIDs.length === 0) {
            return true;
        }
        const index = {};
        for (const docTagID of docTagIDs) {
            const pathEntries = TagPaths_1.TagPaths.createPathEntries(docTagID);
            for (const pathEntry of pathEntries) {
                index[pathEntry.path] = true;
            }
        }
        for (const queryTagID of queryTagIDs) {
            if (index[queryTagID]) {
                return true;
            }
        }
        return false;
    }
    matchesTags() {
        const queryTagIDs = this.queryTagPairs.regularTags.tagIDs;
        const docTagIDs = this.docTagPairs.regularTags.tagIDs;
        if (queryTagIDs.length === 0) {
            return true;
        }
        if (docTagIDs.length === 0) {
            return false;
        }
        const intersection = SetArrays_1.SetArrays.intersection(queryTagIDs, docTagIDs);
        return intersection.length === queryTagIDs.length;
    }
}
exports.TagMatcher = TagMatcher;
class TagPairs {
    constructor(tags) {
        this.tags = tags;
        this.folderTags = new FolderTags(Tags_1.Tags.onlyFolderTags(this.tags));
        this.regularTags = new FolderTags(Tags_1.Tags.onlyRegular(this.tags));
    }
}
class TypedTags {
    constructor(tags) {
        this.tags = tags;
        this.tagIDs = Tags_1.Tags.toIDs(this.tags);
    }
}
class FolderTags extends TypedTags {
    constructor(tags) {
        super(tags);
    }
}
class RegularTags extends TypedTags {
}
class TagMatcherFactory {
    constructor(queryTags) {
        this.queryTags = queryTags;
        this.queryTagPairs = new TagPairs(this.queryTags);
    }
    create(docTags) {
        return new TagMatcher(this.queryTagPairs, docTags);
    }
    filter(list, toTags) {
        return list.filter(current => {
            const tags = toTags(current);
            const tagMatcher = this.create(tags);
            return tagMatcher.matches();
        });
    }
}
exports.TagMatcherFactory = TagMatcherFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnTWF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRhZ01hdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxREFBZ0Q7QUFDaEQseUNBQW9DO0FBQ3BDLCtEQUEwRDtBQUcxRCxNQUFhLFVBQVU7SUFJbkIsWUFBbUMsYUFBdUIsRUFDdkIsT0FBMkI7UUFEM0Isa0JBQWEsR0FBYixhQUFhLENBQVU7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFFMUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbEQsQ0FBQztJQUVNLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQW9CTSxjQUFjO1FBRWpCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN6RCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFFckQsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUUxQixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsTUFBTSxLQUFLLEdBQThCLEVBQUUsQ0FBQztRQUU1QyxLQUFLLE1BQU0sUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUM5QixNQUFNLFdBQVcsR0FBRyxtQkFBUSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXpELEtBQUssTUFBTSxTQUFTLElBQUksV0FBVyxFQUFFO2dCQUNqQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUNoQztTQUVKO1FBRUQsS0FBSyxNQUFNLFVBQVUsSUFBSSxXQUFXLEVBQUU7WUFDbEMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBRWpCLENBQUM7SUFDTSxXQUFXO1FBRWQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQzFELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUV0RCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBRTFCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBRXhCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBV0QsTUFBTSxZQUFZLEdBQ2QscUJBQVMsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sWUFBWSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBRXRELENBQUM7Q0FFSjtBQTlGRCxnQ0E4RkM7QUFFRCxNQUFNLFFBQVE7SUFLVixZQUE0QixJQUF3QjtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLFdBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxXQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FFSjtBQUVELE1BQU0sU0FBUztJQUlYLFlBQTRCLElBQXdCO1FBQXhCLFNBQUksR0FBSixJQUFJLENBQW9CO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUVKO0FBRUQsTUFBTSxVQUFXLFNBQVEsU0FBUztJQUU5QixZQUFZLElBQXdCO1FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0NBRUo7QUFFRCxNQUFNLFdBQVksU0FBUSxTQUFTO0NBRWxDO0FBTUQsTUFBYSxpQkFBaUI7SUFJMUIsWUFBbUMsU0FBNkI7UUFBN0IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUEyQjtRQUNyQyxPQUFPLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLE1BQU0sQ0FBSSxJQUFzQixFQUFFLE1BQXdDO1FBRTdFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxPQUFPLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVoQyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQXZCRCw4Q0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RhZywgVGFnSURTdHJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGFncy9UYWdzJztcbmltcG9ydCB7VGFnc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy90YWdzL1RhZ3MnO1xuaW1wb3J0IHtUYWdQYXRoc30gZnJvbSAnLi9UYWdQYXRocyc7XG5pbXBvcnQge1NldEFycmF5c30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TZXRBcnJheXNcIjtcblxuXG5leHBvcnQgY2xhc3MgVGFnTWF0Y2hlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRvY1RhZ1BhaXJzOiBUYWdQYWlycztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgcXVlcnlUYWdQYWlyczogVGFnUGFpcnMsXG4gICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBkb2NUYWdzOiBSZWFkb25seUFycmF5PFRhZz4pIHtcblxuICAgICAgICB0aGlzLmRvY1RhZ1BhaXJzID0gbmV3IFRhZ1BhaXJzKHRoaXMuZG9jVGFncyk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgbWF0Y2hlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hlc0ZvbGRlcnMoKSAmJiB0aGlzLm1hdGNoZXNUYWdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VlIGlmIGFueSBvZiB0aGUgZ2l2ZW4gZG9jVGFncyBpcyB3aXRoaW4gYSBmb2xkZXIgKGhhcyBhIHByZWZpeCkgb2YgdGhlXG4gICAgICogZ2l2ZW4gdGFncy5cbiAgICAgKlxuICAgICAqIEZvciBleGFtcGxlOlxuICAgICAqXG4gICAgICogdGFnczogL2xpbnV4XG4gICAgICogZG9jVGFnczogL2xpbnV4XG4gICAgICpcbiAgICAgKiBXb3VsZCBtYXRjaCBhcyBpdCdzIGFuIGV4YWN0IG1hdGNoLlxuICAgICAqXG4gICAgICogdGFnczogL2xpbnV4XG4gICAgICogZG9jVGFnczogL2xpbnV4L2RlYmlhblxuICAgICAqXG4gICAgICogV291bGQgbWF0Y2ggYXMgdGFncyBpcyBhIGRpcmVjdG9yeSBwcmVmaXguXG4gICAgICpcbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBtYXRjaGVzRm9sZGVycygpOiBib29sZWFuIHtcblxuICAgICAgICBjb25zdCBxdWVyeVRhZ0lEcyA9IHRoaXMucXVlcnlUYWdQYWlycy5mb2xkZXJUYWdzLnRhZ0lEcztcbiAgICAgICAgY29uc3QgZG9jVGFnSURzID0gdGhpcy5kb2NUYWdQYWlycy5mb2xkZXJUYWdzLnRhZ0lEcztcblxuICAgICAgICBpZiAocXVlcnlUYWdJRHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyB3ZSBoYXZlIG5vIHF1ZXJ5IHNvIHdlIHNob3VsZCBtYXRjaFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleDoge1twYXRoOiBzdHJpbmddOiBib29sZWFufSA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgZG9jVGFnSUQgb2YgZG9jVGFnSURzKSB7XG4gICAgICAgICAgICBjb25zdCBwYXRoRW50cmllcyA9IFRhZ1BhdGhzLmNyZWF0ZVBhdGhFbnRyaWVzKGRvY1RhZ0lEKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXRoRW50cnkgb2YgcGF0aEVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBpbmRleFtwYXRoRW50cnkucGF0aF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHF1ZXJ5VGFnSUQgb2YgcXVlcnlUYWdJRHMpIHtcbiAgICAgICAgICAgIGlmIChpbmRleFtxdWVyeVRhZ0lEXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgfVxuICAgIHB1YmxpYyBtYXRjaGVzVGFncygpOiBib29sZWFuIHtcblxuICAgICAgICBjb25zdCBxdWVyeVRhZ0lEcyA9IHRoaXMucXVlcnlUYWdQYWlycy5yZWd1bGFyVGFncy50YWdJRHM7XG4gICAgICAgIGNvbnN0IGRvY1RhZ0lEcyA9IHRoaXMuZG9jVGFnUGFpcnMucmVndWxhclRhZ3MudGFnSURzO1xuXG4gICAgICAgIGlmIChxdWVyeVRhZ0lEcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgbm8gcXVlcnkgc28gd2Ugc2hvdWxkIG1hdGNoXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2NUYWdJRHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyB0aGUgZG9jdW1lbnQgd2UncmUgc2VhcmNoaW5nIG92ZXIgaGFzIG5vIHRhZ3MuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiB0aGlzIHdvdWxkIGJlICdvcicgYnV0IHdlIGRvbid0IHlldCBoYXZlICdBTkQnXG4gICAgICAgIC8vIGNvbnN0IGRvY1RhZ1NldCA9IG5ldyBTZXQoVGFncy50b0lEcyhkb2NUYWdzKSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgLy8gICAgIGlmIChkb2NUYWdTZXQuaGFzKHRhZy5pZCkpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9XG4gICAgICAgICAgICBTZXRBcnJheXMuaW50ZXJzZWN0aW9uKHF1ZXJ5VGFnSURzLCBkb2NUYWdJRHMpO1xuXG4gICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb24ubGVuZ3RoID09PSBxdWVyeVRhZ0lEcy5sZW5ndGg7XG5cbiAgICB9XG5cbn1cblxuY2xhc3MgVGFnUGFpcnMge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGZvbGRlclRhZ3M6IEZvbGRlclRhZ3M7XG4gICAgcHVibGljIHJlYWRvbmx5IHJlZ3VsYXJUYWdzOiBSZWd1bGFyVGFncztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSB0YWdzOiBSZWFkb25seUFycmF5PFRhZz4pIHtcbiAgICAgICAgdGhpcy5mb2xkZXJUYWdzID0gbmV3IEZvbGRlclRhZ3MoVGFncy5vbmx5Rm9sZGVyVGFncyh0aGlzLnRhZ3MpKTtcbiAgICAgICAgdGhpcy5yZWd1bGFyVGFncyA9IG5ldyBGb2xkZXJUYWdzKFRhZ3Mub25seVJlZ3VsYXIodGhpcy50YWdzKSk7XG4gICAgfVxuXG59XG5cbmNsYXNzIFR5cGVkVGFncyB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFnSURzOiBSZWFkb25seUFycmF5PFRhZ0lEU3RyPjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSB0YWdzOiBSZWFkb25seUFycmF5PFRhZz4pIHtcbiAgICAgICAgdGhpcy50YWdJRHMgPSBUYWdzLnRvSURzKHRoaXMudGFncyk7XG4gICAgfVxuXG59XG5cbmNsYXNzIEZvbGRlclRhZ3MgZXh0ZW5kcyBUeXBlZFRhZ3Mge1xuXG4gICAgY29uc3RydWN0b3IodGFnczogUmVhZG9ubHlBcnJheTxUYWc+KSB7XG4gICAgICAgIHN1cGVyKHRhZ3MpO1xuICAgIH1cblxufVxuXG5jbGFzcyBSZWd1bGFyVGFncyBleHRlbmRzIFR5cGVkVGFncyB7XG5cbn1cblxuLyoqXG4gKiBVc2VkIHNvIHdlJ3JlIG5vdCBjb25zdGFudGx5IG1pZ3JhdGluZyB0YWdzIHRvIElEcyBhbmQgd2Uga2VlcCBhbiBpbmRleFxuICogb2YgdGhlIGRvY3VtZW50IHdoaWxlIHdlIHdvcmsgd2l0aCBpdCB0byBhdm9pZCB3YXN0ZWZ1bCBvcGVyYXRpb25zLlxuICovXG5leHBvcnQgY2xhc3MgVGFnTWF0Y2hlckZhY3Rvcnkge1xuXG4gICAgcHJpdmF0ZSBxdWVyeVRhZ1BhaXJzOiBUYWdQYWlycztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgcXVlcnlUYWdzOiBSZWFkb25seUFycmF5PFRhZz4pIHtcbiAgICAgICAgdGhpcy5xdWVyeVRhZ1BhaXJzID0gbmV3IFRhZ1BhaXJzKHRoaXMucXVlcnlUYWdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKGRvY1RhZ3M6IFJlYWRvbmx5QXJyYXk8VGFnPikge1xuICAgICAgICByZXR1cm4gbmV3IFRhZ01hdGNoZXIodGhpcy5xdWVyeVRhZ1BhaXJzLCBkb2NUYWdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmlsdGVyPFQ+KGxpc3Q6IFJlYWRvbmx5QXJyYXk8VD4sIHRvVGFnczogKHZhbHVlOiBUKSA9PiBSZWFkb25seUFycmF5PFRhZz4pIHtcblxuICAgICAgICByZXR1cm4gbGlzdC5maWx0ZXIoY3VycmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YWdzID0gdG9UYWdzKGN1cnJlbnQpO1xuICAgICAgICAgICAgY29uc3QgdGFnTWF0Y2hlciA9IHRoaXMuY3JlYXRlKHRhZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHRhZ01hdGNoZXIubWF0Y2hlcygpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iXX0=