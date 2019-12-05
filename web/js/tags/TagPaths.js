"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TagPaths {
    static createPathEntries(path) {
        const paths = path.split("/");
        let buff = '';
        const result = [];
        let parent;
        for (const current of paths) {
            if (buff === '/') {
                buff = buff + current;
            }
            else {
                buff = buff + '/' + current;
            }
            const toParent = () => {
                if (parent) {
                    return {
                        path: parent.path,
                        basename: parent.basename
                    };
                }
                return undefined;
            };
            const pathEntry = {
                path: buff,
                basename: current,
                parent: toParent()
            };
            result.push(pathEntry);
            parent = pathEntry;
        }
        return result;
    }
}
exports.TagPaths = TagPaths;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnUGF0aHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUYWdQYXRocy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQWEsUUFBUTtJQUVWLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFZO1FBRXhDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFOUIsSUFBSSxJQUFJLEdBQVcsRUFBRSxDQUFDO1FBRXRCLE1BQU0sTUFBTSxHQUFnQixFQUFFLENBQUM7UUFFL0IsSUFBSSxNQUE2QixDQUFDO1FBRWxDLEtBQUssTUFBTSxPQUFPLElBQUksS0FBSyxFQUFFO1lBSXpCLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDZCxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQzthQUN6QjtpQkFBTTtnQkFDSCxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUM7YUFDL0I7WUFFRCxNQUFNLFFBQVEsR0FBRyxHQUE2QixFQUFFO2dCQUU1QyxJQUFJLE1BQU0sRUFBRTtvQkFFUixPQUFPO3dCQUNILElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTt3QkFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO3FCQUM1QixDQUFDO2lCQUVMO2dCQUVELE9BQU8sU0FBUyxDQUFDO1lBRXJCLENBQUMsQ0FBQztZQUVGLE1BQU0sU0FBUyxHQUFjO2dCQUN6QixJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsT0FBTztnQkFDakIsTUFBTSxFQUFFLFFBQVEsRUFBRTthQUNyQixDQUFDO1lBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV2QixNQUFNLEdBQUcsU0FBUyxDQUFDO1NBRXRCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztDQUVKO0FBckRELDRCQXFEQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUYWdQYXRocyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVBhdGhFbnRyaWVzKHBhdGg6IHN0cmluZyk6IFJlYWRvbmx5QXJyYXk8UGF0aEVudHJ5PiB7XG5cbiAgICAgICAgY29uc3QgcGF0aHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcblxuICAgICAgICBsZXQgYnVmZjogc3RyaW5nID0gJyc7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0OiBQYXRoRW50cnlbXSA9IFtdO1xuXG4gICAgICAgIGxldCBwYXJlbnQ6IFBhdGhFbnRyeSB8IHVuZGVmaW5lZDtcblxuICAgICAgICBmb3IgKGNvbnN0IGN1cnJlbnQgb2YgcGF0aHMpIHtcblxuICAgICAgICAgICAgLy8gY29uc3QgcGFyZW50OiBzdHJpbmcgfCB1bmRlZmluZWQgID0gYnVmZiA9PT0gJycgPyB1bmRlZmluZWQgOiBidWZmO1xuXG4gICAgICAgICAgICBpZiAoYnVmZiA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgYnVmZiA9IGJ1ZmYgKyBjdXJyZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidWZmID0gYnVmZiArICcvJyArIGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRvUGFyZW50ID0gKCk6IFJhd1BhdGhFbnRyeSB8IHVuZGVmaW5lZCA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IHBhcmVudC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZW5hbWU6IHBhcmVudC5iYXNlbmFtZVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcGF0aEVudHJ5OiBQYXRoRW50cnkgPSB7XG4gICAgICAgICAgICAgICAgcGF0aDogYnVmZixcbiAgICAgICAgICAgICAgICBiYXNlbmFtZTogY3VycmVudCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHRvUGFyZW50KClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGhFbnRyeSk7XG5cbiAgICAgICAgICAgIHBhcmVudCA9IHBhdGhFbnRyeTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJhd1BhdGhFbnRyeSB7XG4gICAgcmVhZG9ubHkgcGF0aDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGJhc2VuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGF0aEVudHJ5IGV4dGVuZHMgUmF3UGF0aEVudHJ5IHtcbiAgICByZWFkb25seSBwYXJlbnQ6IFJhd1BhdGhFbnRyeSB8IHVuZGVmaW5lZDtcbn1cbiJdfQ==