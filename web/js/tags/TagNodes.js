"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("polar-shared/src/Preconditions");
const TagPaths_1 = require("./TagPaths");
const Tags_1 = require("polar-shared/src/tags/Tags");
const Sets_1 = require("polar-shared/src/util/Sets");
class TagNodes {
    static createTagsRoot(tags) {
        const children = [...tags].sort((a, b) => b.count - a.count)
            .filter(tagDescriptor => !tagDescriptor.label.startsWith('/'))
            .map(tagDescriptor => {
            return {
                id: tagDescriptor.id,
                name: tagDescriptor.label,
                path: tagDescriptor.id,
                children: [],
                count: tagDescriptor.count,
                value: tagDescriptor,
            };
        });
        const tagMembership = this.computeTagMembership(tags);
        const name = 'Tags';
        const root = Object.assign(Object.assign({ id: '/#tags', name, path: '/', children }, tagMembership), { title: name, value: Object.assign({ id: '/', label: name }, tagMembership) });
        return root;
    }
    static computeTagMembership(tags) {
        const set = new Set();
        const filtered = tags.filter(current => current.label !== '/');
        for (const tag of filtered) {
            for (const member of tag.members) {
                set.add(member);
            }
        }
        const count = set.size;
        const members = Sets_1.Sets.toArray(set);
        return { count, members };
    }
    static createFoldersRoot(opts) {
        const { tags } = opts;
        const tagIndex = {};
        for (const tag of tags) {
            if (!tag.label.startsWith("/")) {
                continue;
            }
            tagIndex[tag.label] = tag;
        }
        const tagNodeIndex = new TagNodeIndex();
        const tagMembership = this.computeTagMembership(tags);
        const root = tagNodeIndex.register('/', '/', Object.assign({ id: '/', label: '/' }, tagMembership));
        const sortedTagIndexKeys = Object.keys(tagIndex).sort();
        for (const tagLabel of sortedTagIndexKeys) {
            let pathEntries = TagPaths_1.TagPaths.createPathEntries(tagLabel);
            for (const pathEntry of pathEntries) {
                if (pathEntry.parent) {
                    const parent = tagNodeIndex.get(pathEntry.parent.path);
                    if (!tagNodeIndex.contains(pathEntry.path)) {
                        const computeVirtualTagFromPathEntry = () => {
                            if (tagIndex[pathEntry.path]) {
                                return tagIndex[pathEntry.path];
                            }
                            const virtualTag = Tags_1.Tags.create(pathEntry.path);
                            return Object.assign(Object.assign({}, virtualTag), { members: [], count: 0 });
                        };
                        const virtualTag = computeVirtualTagFromPathEntry();
                        const newNode = tagNodeIndex.register(pathEntry.path, pathEntry.basename, virtualTag);
                        parent.children.push(newNode);
                    }
                }
            }
        }
        return root;
    }
}
exports.TagNodes = TagNodes;
class TagNodeIndex {
    constructor() {
        this.index = {};
    }
    register(path, name, value) {
        if (!this.index[path]) {
            this.index[path] = {
                id: value.id,
                name,
                path,
                children: [],
                count: value.count,
                value
            };
        }
        return this.index[path];
    }
    contains(path) {
        return Preconditions_1.isPresent(this.index[path]);
    }
    get(path) {
        return this.index[path];
    }
}
exports.TagNodeIndex = TagNodeIndex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnTm9kZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUYWdOb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtFQUF5RDtBQUV6RCx5Q0FBb0M7QUFDcEMscURBQWdEO0FBSWhELHFEQUFnRDtBQUVoRCxNQUFhLFFBQVE7SUFFVixNQUFNLENBQUMsY0FBYyxDQUFDLElBQWtDO1FBRTNELE1BQU0sUUFBUSxHQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBRSxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM5RCxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDckIsT0FBTztnQkFDSCxFQUFFLEVBQUUsYUFBYSxDQUFDLEVBQUU7Z0JBQ3BCLElBQUksRUFBRSxhQUFhLENBQUMsS0FBSztnQkFDekIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxFQUFFO2dCQUN0QixRQUFRLEVBQUUsRUFBRTtnQkFDWixLQUFLLEVBQUUsYUFBYSxDQUFDLEtBQUs7Z0JBQzFCLEtBQUssRUFBRSxhQUFhO2FBQ3ZCLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVQLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0RCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUM7UUFJcEIsTUFBTSxJQUFJLGlDQUNOLEVBQUUsRUFBRSxRQUFRLEVBQ1osSUFBSSxFQUNKLElBQUksRUFBRSxHQUFHLEVBQ1QsUUFBUSxJQUNMLGFBQWEsS0FDaEIsS0FBSyxFQUFFLElBQUksRUFDWCxLQUFLLGtCQUNELEVBQUUsRUFBRSxHQUFHLEVBQ1AsS0FBSyxFQUFF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dEYsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ2pDO2lCQUVKO2FBRUo7U0FFSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7Q0FFSjtBQXRJRCw0QkFzSUM7QUFjRCxNQUFhLFlBQVk7SUFBekI7UUFFWSxVQUFLLEdBQW9ELEVBQUUsQ0FBQztJQStCeEUsQ0FBQztJQTdCVSxRQUFRLENBQUMsSUFBWSxFQUNaLElBQVksRUFDWixLQUFvQjtRQUVoQyxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUVwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUNmLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDWixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osUUFBUSxFQUFFLEVBQUU7Z0JBQ1osS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUNsQixLQUFLO2FBQ1IsQ0FBQztTQUVMO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTVCLENBQUM7SUFFTSxRQUFRLENBQUMsSUFBWTtRQUN4QixPQUFPLHlCQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxHQUFHLENBQUMsSUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUVKO0FBakNELG9DQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtSZWR1Y2Vyc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9SZWR1Y2Vyc1wiO1xuaW1wb3J0IHtUYWdQYXRoc30gZnJvbSBcIi4vVGFnUGF0aHNcIjtcbmltcG9ydCB7VGFnc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdGFncy9UYWdzXCI7XG5pbXBvcnQge011dGFibGVUYWdOb2RlLCBUYWdEZXNjcmlwdG9yLCBUYWdOb2RlfSBmcm9tIFwiLi9UYWdOb2RlXCI7XG5pbXBvcnQge1RSb290fSBmcm9tIFwiLi4vdWkvdHJlZS9UcmVlVmlld1wiO1xuaW1wb3J0IHtJRFN0cn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TdHJpbmdzXCI7XG5pbXBvcnQge1NldHN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvU2V0c1wiO1xuXG5leHBvcnQgY2xhc3MgVGFnTm9kZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVUYWdzUm9vdCh0YWdzOiBSZWFkb25seUFycmF5PFRhZ0Rlc2NyaXB0b3I+KTogVGFnTm9kZTxUYWdEZXNjcmlwdG9yPiB7XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW46IFJlYWRvbmx5QXJyYXk8VGFnTm9kZTxUYWdEZXNjcmlwdG9yPj4gPVxuICAgICAgICAgICAgWy4uLnRhZ3NdLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodGFnRGVzY3JpcHRvciA9PiAhIHRhZ0Rlc2NyaXB0b3IubGFiZWwuc3RhcnRzV2l0aCgnLycpKVxuICAgICAgICAgICAgICAgIC5tYXAodGFnRGVzY3JpcHRvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRhZ0Rlc2NyaXB0b3IuaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRhZ0Rlc2NyaXB0b3IubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IHRhZ0Rlc2NyaXB0b3IuaWQsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRhZ0Rlc2NyaXB0b3IuY291bnQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YWdEZXNjcmlwdG9yLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRhZ01lbWJlcnNoaXAgPSB0aGlzLmNvbXB1dGVUYWdNZW1iZXJzaGlwKHRhZ3MpO1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSAnVGFncyc7XG5cbiAgICAgICAgLy8gVE9ETzogaGF2ZSB0byBjYWxsIHRoaXMgaWQgd2l0aCAjdGFncyB0byBhdm9pZCBkb3VibGUgc2VsZWN0aW9uXG5cbiAgICAgICAgY29uc3Qgcm9vdDogVFJvb3Q8VGFnRGVzY3JpcHRvcj4gPSB7XG4gICAgICAgICAgICBpZDogJy8jdGFncycsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICAuLi50YWdNZW1iZXJzaGlwLFxuICAgICAgICAgICAgdGl0bGU6IG5hbWUsXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIGlkOiAnLycsXG4gICAgICAgICAgICAgICAgbGFiZWw6IG5hbWUsXG4gICAgICAgICAgICAgICAgLi4udGFnTWVtYmVyc2hpcFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByb290O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY29tcHV0ZVRhZ01lbWJlcnNoaXAodGFnczogUmVhZG9ubHlBcnJheTxUYWdEZXNjcmlwdG9yPik6IFRhZ01lbWJlcnNoaXAge1xuXG4gICAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQ8SURTdHI+KCk7XG5cbiAgICAgICAgLy8gRklYTUUgdGhpcyBpcyB3cm9uZyBiZWNhdXNlIHdlJ3JlIG5vdCBkZS1kdXBsaWNhdGluZyB0aGUgY291bnQgb2YgZG9jcyB1bmRlciB0aGUgY291bnQuICBJZiBhIGRvYyBpcyB0YWdnZWRcbiAgICAgICAgLy8gdHdpY2UgaXQgd2lsbCBpbmNyZW1lbnQgdGhlIGNvdW50IG9mIHR3byB0YWdzLlxuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGFncy5maWx0ZXIoY3VycmVudCA9PiBjdXJyZW50LmxhYmVsICE9PSAnLycpO1xuXG4gICAgICAgIGZvciAoY29uc3QgdGFnIG9mIGZpbHRlcmVkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1lbWJlciBvZiB0YWcubWVtYmVycykge1xuICAgICAgICAgICAgICAgIHNldC5hZGQobWVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvdW50ID0gc2V0LnNpemU7XG4gICAgICAgIGNvbnN0IG1lbWJlcnMgPSBTZXRzLnRvQXJyYXkoc2V0KTtcblxuICAgICAgICByZXR1cm4ge2NvdW50LCBtZW1iZXJzfTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGhpZXJhcmNoaWNhbCBzdHJ1Y3R1cmUgb2YgdGFncyBmcm9tIHRoZSB0YWcgZGVzY3JpcHRvcnMuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVGb2xkZXJzUm9vdChvcHRzOiBDcmVhdGVPcHRzKTogVGFnTm9kZTxUYWdEZXNjcmlwdG9yPiB7XG5cbiAgICAgICAgY29uc3Qge3RhZ3N9ID0gb3B0cztcblxuICAgICAgICBjb25zdCB0YWdJbmRleDogeyBbbGFiZWw6IHN0cmluZ106IFRhZ0Rlc2NyaXB0b3IgfSA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcblxuICAgICAgICAgICAgaWYgKCF0YWcubGFiZWwuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFnSW5kZXhbdGFnLmxhYmVsXSA9IHRhZztcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFnTm9kZUluZGV4ID0gbmV3IFRhZ05vZGVJbmRleCgpO1xuXG4gICAgICAgIC8vIHRoZSBnbG9iYWwgY291bnQgZm9yIGFsbCBub2Rlc1xuICAgICAgICBjb25zdCB0YWdNZW1iZXJzaGlwID0gdGhpcy5jb21wdXRlVGFnTWVtYmVyc2hpcCh0YWdzKTtcblxuICAgICAgICAvLyBhbHdheXMgcmVnaXN0ZXIgYSByb290IHNvIHdlIGhhdmUgYXQgbGVhc3Qgb25lIHBhdGhcbiAgICAgICAgY29uc3Qgcm9vdCA9IHRhZ05vZGVJbmRleC5yZWdpc3RlcignLycsICcvJywge2lkOiAnLycsIGxhYmVsOiAnLycsIC4uLnRhZ01lbWJlcnNoaXB9KTtcblxuICAgICAgICBjb25zdCBzb3J0ZWRUYWdJbmRleEtleXMgPSBPYmplY3Qua2V5cyh0YWdJbmRleCkuc29ydCgpO1xuXG4gICAgICAgIGZvciAoY29uc3QgdGFnTGFiZWwgb2Ygc29ydGVkVGFnSW5kZXhLZXlzKSB7XG5cbiAgICAgICAgICAgIGxldCBwYXRoRW50cmllcyA9IFRhZ1BhdGhzLmNyZWF0ZVBhdGhFbnRyaWVzKHRhZ0xhYmVsKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXRoRW50cnkgb2YgcGF0aEVudHJpZXMpIHtcblxuICAgICAgICAgICAgICAgIGlmIChwYXRoRW50cnkucGFyZW50KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGFnTm9kZUluZGV4LmdldChwYXRoRW50cnkucGFyZW50LnBhdGgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFnTm9kZUluZGV4LmNvbnRhaW5zKHBhdGhFbnRyeS5wYXRoKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlVmlydHVhbFRhZ0Zyb21QYXRoRW50cnkgPSAoKTogVGFnRGVzY3JpcHRvciA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnSW5kZXhbcGF0aEVudHJ5LnBhdGhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvbmUgYXMgd2UgYWxyZWFkeSBoYXZlIGEgdGFnIGZvciB0aGlzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFnSW5kZXhbcGF0aEVudHJ5LnBhdGhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpcnR1YWxUYWcgPSBUYWdzLmNyZWF0ZShwYXRoRW50cnkucGF0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gey4uLnZpcnR1YWxUYWcsIG1lbWJlcnM6IFtdLCBjb3VudDogMH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpcnR1YWxUYWcgPSBjb21wdXRlVmlydHVhbFRhZ0Zyb21QYXRoRW50cnkoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IHRhZ05vZGVJbmRleC5yZWdpc3RlcihwYXRoRW50cnkucGF0aCwgcGF0aEVudHJ5LmJhc2VuYW1lLCB2aXJ0dWFsVGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKG5ld05vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWdNZW1iZXJzaGlwIHtcbiAgICByZWFkb25seSBjb3VudDogbnVtYmVyO1xuICAgIHJlYWRvbmx5IG1lbWJlcnM6IFJlYWRvbmx5QXJyYXk8SURTdHI+O1xufVxuXG5leHBvcnQgdHlwZSBUYWdUeXBlID0gJ2ZvbGRlcicgfCAncmVndWxhcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlT3B0cyB7XG4gICAgcmVhZG9ubHkgdGFnczogUmVhZG9ubHlBcnJheTxUYWdEZXNjcmlwdG9yPjtcbiAgICByZWFkb25seSB0eXBlOiBUYWdUeXBlO1xufVxuXG5leHBvcnQgY2xhc3MgVGFnTm9kZUluZGV4IHtcblxuICAgIHByaXZhdGUgaW5kZXg6IHtbcGF0aDogc3RyaW5nXTogTXV0YWJsZVRhZ05vZGU8VGFnRGVzY3JpcHRvcj59ID0ge307XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXIocGF0aDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBUYWdEZXNjcmlwdG9yKTogTXV0YWJsZVRhZ05vZGU8VGFnRGVzY3JpcHRvcj4ge1xuXG4gICAgICAgIGlmICghIHRoaXMuaW5kZXhbcGF0aF0pIHtcblxuICAgICAgICAgICAgdGhpcy5pbmRleFtwYXRoXSA9IHtcbiAgICAgICAgICAgICAgICBpZDogdmFsdWUuaWQsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgICAgICBjb3VudDogdmFsdWUuY291bnQsXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4W3BhdGhdO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRhaW5zKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gaXNQcmVzZW50KHRoaXMuaW5kZXhbcGF0aF0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQocGF0aDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4W3BhdGhdO1xuICAgIH1cblxufVxuIl19