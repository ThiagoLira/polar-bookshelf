"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DocAnnotation_1 = require("./DocAnnotation");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const Refs_1 = require("polar-shared/src/metadata/Refs");
const Multimap_1 = require("polar-shared/src/util/Multimap");
class DocAnnotationIndex {
    constructor(docAnnotationMap = {}) {
        this.lookup = {};
        this.children = new Multimap_1.ArrayListMultimap();
        this.parents = {};
        this.lookup = docAnnotationMap;
    }
    get(id) {
        return Optional_1.Optional.of(this.lookup[id]).getOrUndefined();
    }
    put(...docAnnotations) {
        for (const docAnnotation of docAnnotations) {
            const entry = new DocAnnotation_1.DefaultDocAnnotation(this, docAnnotation);
            if (docAnnotation.ref) {
                const parsedRef = Refs_1.Refs.parse(docAnnotation.ref);
                this._addChild(parsedRef.value, entry);
            }
            else {
                this.lookup[docAnnotation.id] = entry;
            }
        }
    }
    delete(id) {
        const parent = this._getParent(id);
        if (parent) {
            this._removeChild(parent.id, id);
        }
        delete this.lookup[id];
        this.children.delete(id);
    }
    getDocAnnotations() {
        return Object.values(this.lookup);
    }
    getDocAnnotationsSorted() {
        const computeScore = (item) => {
            return (item.pageNum * 100000) + (item.position.y * 100) + item.position.x;
        };
        return Object.values(this.lookup)
            .sort((a, b) => {
            const diff = computeScore(a) - computeScore(b);
            if (diff === 0) {
                return a.id.localeCompare(b.id);
            }
            return diff;
        });
    }
    _getParent(id) {
        const pid = this.parents[id];
        if (pid) {
            return this.lookup[pid];
        }
        return undefined;
    }
    _getChildren(id) {
        return this.children.get(id);
    }
    _setChildren(id, children) {
        this.children.putAll(id, children);
    }
    _addChild(id, docAnnotation) {
        this.children.put(id, docAnnotation);
        this.parents[docAnnotation.id] = id;
    }
    _removeChild(id, child) {
        this.children.delete(id, undefined, (value) => value.id === child);
        delete this.parents[child];
    }
}
exports.DocAnnotationIndex = DocAnnotationIndex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jQW5ub3RhdGlvbkluZGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jQW5ub3RhdGlvbkluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBTXlCO0FBQ3pCLGdFQUEyRDtBQUMzRCx5REFBb0Q7QUFDcEQsNkRBQWlFO0FBRWpFLE1BQWEsa0JBQWtCO0lBUTNCLFlBQVksbUJBQXFDLEVBQUU7UUFObEMsV0FBTSxHQUFxQixFQUFFLENBQUM7UUFFOUIsYUFBUSxHQUFHLElBQUksNEJBQWlCLEVBQXlCLENBQUM7UUFFMUQsWUFBTyxHQUFjLEVBQUUsQ0FBQztRQUdyQyxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO0lBQ25DLENBQUM7SUFFTSxHQUFHLENBQUMsRUFBWTtRQUNuQixPQUFPLG1CQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRU0sR0FBRyxDQUFDLEdBQUcsY0FBNkM7UUFFdkQsS0FBSyxNQUFNLGFBQWEsSUFBSSxjQUFjLEVBQUU7WUFFeEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxvQ0FBb0IsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFNUQsSUFBSSxhQUFhLENBQUMsR0FBRyxFQUFFO2dCQUNuQixNQUFNLFNBQVMsR0FBRyxXQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzFDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUN6QztTQUVKO0lBRUwsQ0FBQztJQUVNLE1BQU0sQ0FBQyxFQUFZO1FBRXRCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFbkMsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDcEM7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFN0IsQ0FBQztJQUVNLGlCQUFpQjtRQUNwQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSx1QkFBdUI7UUFFMUIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFtQixFQUFFLEVBQUU7WUFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMvRSxDQUFDLENBQUM7UUFJRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUM1QixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFWCxNQUFNLElBQUksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRS9DLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDWixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNuQztZQUVELE9BQU8sSUFBSSxDQUFDO1FBRWhCLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVNLFVBQVUsQ0FBQyxFQUFZO1FBRTFCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0IsSUFBSSxHQUFHLEVBQUU7WUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUVyQixDQUFDO0lBRU0sWUFBWSxDQUFDLEVBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sWUFBWSxDQUFDLEVBQVksRUFBRSxRQUFzQztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLFNBQVMsQ0FBQyxFQUFZLEVBQUUsYUFBNEI7UUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUV4QyxDQUFDO0lBRU0sWUFBWSxDQUFDLEVBQVksRUFBRSxLQUFlO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQ2xGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBRUo7QUF4R0QsZ0RBd0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEZWZhdWx0RG9jQW5ub3RhdGlvbixcbiAgICBEb2NBbm5vdGF0aW9uLFxuICAgIERvY0Fubm90YXRpb25NYXAsXG4gICAgSURvY0Fubm90YXRpb24sXG4gICAgU29ydGVkRG9jQW5ub3RhdGlvbnNcbn0gZnJvbSAnLi9Eb2NBbm5vdGF0aW9uJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWxcIjtcbmltcG9ydCB7UmVmc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvUmVmc1wiO1xuaW1wb3J0IHtBcnJheUxpc3RNdWx0aW1hcH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9NdWx0aW1hcFwiO1xuXG5leHBvcnQgY2xhc3MgRG9jQW5ub3RhdGlvbkluZGV4IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9va3VwOiBEb2NBbm5vdGF0aW9uTWFwID0ge307XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNoaWxkcmVuID0gbmV3IEFycmF5TGlzdE11bHRpbWFwPHN0cmluZywgRG9jQW5ub3RhdGlvbj4oKTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50czogUGFyZW50TWFwID0ge307XG5cbiAgICBjb25zdHJ1Y3Rvcihkb2NBbm5vdGF0aW9uTWFwOiBEb2NBbm5vdGF0aW9uTWFwID0ge30pIHtcbiAgICAgICAgdGhpcy5sb29rdXAgPSBkb2NBbm5vdGF0aW9uTWFwO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoaWQ6IElEU3RyaW5nKTogRG9jQW5ub3RhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiBPcHRpb25hbC5vZih0aGlzLmxvb2t1cFtpZF0pLmdldE9yVW5kZWZpbmVkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHB1dCguLi5kb2NBbm5vdGF0aW9uczogUmVhZG9ubHlBcnJheTxJRG9jQW5ub3RhdGlvbj4pIHtcblxuICAgICAgICBmb3IgKGNvbnN0IGRvY0Fubm90YXRpb24gb2YgZG9jQW5ub3RhdGlvbnMpIHtcblxuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBuZXcgRGVmYXVsdERvY0Fubm90YXRpb24odGhpcywgZG9jQW5ub3RhdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChkb2NBbm5vdGF0aW9uLnJlZikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJlZiA9IFJlZnMucGFyc2UoZG9jQW5ub3RhdGlvbi5yZWYpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZENoaWxkKHBhcnNlZFJlZi52YWx1ZSwgZW50cnkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvb2t1cFtkb2NBbm5vdGF0aW9uLmlkXSA9IGVudHJ5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUoaWQ6IElEU3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZ2V0UGFyZW50KGlkKTtcblxuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZChwYXJlbnQuaWQsIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxvb2t1cFtpZF07XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlKGlkKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBnZXREb2NBbm5vdGF0aW9ucygpOiBSZWFkb25seUFycmF5PERlZmF1bHREb2NBbm5vdGF0aW9uPiB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMubG9va3VwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RG9jQW5ub3RhdGlvbnNTb3J0ZWQoKTogUmVhZG9ubHlBcnJheTxEZWZhdWx0RG9jQW5ub3RhdGlvbj4ge1xuXG4gICAgICAgIGNvbnN0IGNvbXB1dGVTY29yZSA9IChpdGVtOiBEb2NBbm5vdGF0aW9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGl0ZW0ucGFnZU51bSAqIDEwMDAwMCkgKyAoaXRlbS5wb3NpdGlvbi55ICogMTAwKSArIGl0ZW0ucG9zaXRpb24ueDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBUT0RPOiBJIHdvdWxkIHByZWZlciB0aGF0IHRoaXMgd2FzIGEgYmluYXJ5IHRyZWUgd2hpY2ggd2FzIG1haW50YWluZWQgc29ydGVkXG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5sb29rdXApXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IGNvbXB1dGVTY29yZShhKSAtIGNvbXB1dGVTY29yZShiKTtcblxuICAgICAgICAgICAgICAgIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkLmxvY2FsZUNvbXBhcmUoYi5pZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpZmY7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIF9nZXRQYXJlbnQoaWQ6IElEU3RyaW5nKTogRG9jQW5ub3RhdGlvbiB8IHVuZGVmaW5lZCB7XG5cbiAgICAgICAgY29uc3QgcGlkID0gdGhpcy5wYXJlbnRzW2lkXTtcblxuICAgICAgICBpZiAocGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb29rdXBbcGlkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgX2dldENoaWxkcmVuKGlkOiBJRFN0cmluZyk6IFJlYWRvbmx5QXJyYXk8RG9jQW5ub3RhdGlvbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5nZXQoaWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBfc2V0Q2hpbGRyZW4oaWQ6IElEU3RyaW5nLCBjaGlsZHJlbjogUmVhZG9ubHlBcnJheTxEb2NBbm5vdGF0aW9uPik6IHZvaWQge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1dEFsbChpZCwgY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBfYWRkQ2hpbGQoaWQ6IElEU3RyaW5nLCBkb2NBbm5vdGF0aW9uOiBEb2NBbm5vdGF0aW9uKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHV0KGlkLCBkb2NBbm5vdGF0aW9uKTtcbiAgICAgICAgdGhpcy5wYXJlbnRzW2RvY0Fubm90YXRpb24uaWRdID0gaWQ7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgX3JlbW92ZUNoaWxkKGlkOiBJRFN0cmluZywgY2hpbGQ6IElEU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlKGlkLCB1bmRlZmluZWQsICh2YWx1ZTogRG9jQW5ub3RhdGlvbikgPT4gdmFsdWUuaWQgPT09IGNoaWxkKTtcbiAgICAgICAgZGVsZXRlIHRoaXMucGFyZW50c1tjaGlsZF07XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyZW50TWFwIHtcbiAgICBbaWQ6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgSURTdHJpbmcgPSBzdHJpbmc7XG4iXX0=