"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
class Images {
    static createID() {
        return Hashcodes_1.Hashcodes.createRandomID(20);
    }
    static toExt(type) {
        switch (type) {
            case 'image/gif':
                return "gif";
            case 'image/png':
                return "png";
            case 'image/jpeg':
                return "png";
            case 'image/webp':
                return "webp";
            case 'image/svg+xml':
                return "svg";
        }
    }
    static toImg(docFileResolver, image) {
        if (!image) {
            return undefined;
        }
        const docFileMeta = docFileResolver(image.src.backend, image.src);
        const img = {
            width: image.width,
            height: image.height,
            src: docFileMeta.url
        };
        return img;
    }
}
exports.Images = Images;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW1hZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQTBEO0FBSzFELE1BQWEsTUFBTTtJQUVSLE1BQU0sQ0FBQyxRQUFRO1FBQ2xCLE9BQU8scUJBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBZTtRQUUvQixRQUFRLElBQUksRUFBRTtZQUVWLEtBQUssV0FBVztnQkFDWixPQUFPLEtBQUssQ0FBQztZQUNqQixLQUFLLFdBQVc7Z0JBQ1osT0FBTyxLQUFLLENBQUM7WUFDakIsS0FBSyxZQUFZO2dCQUNiLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLEtBQUssWUFBWTtnQkFDYixPQUFPLE1BQU0sQ0FBQztZQUNsQixLQUFLLGVBQWU7Z0JBQ2hCLE9BQU8sS0FBSyxDQUFDO1NBRXBCO0lBRUwsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZ0MsRUFBRSxLQUFjO1FBRWhFLElBQUksQ0FBRSxLQUFLLEVBQUU7WUFDVCxPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELE1BQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEUsTUFBTSxHQUFHLEdBQVE7WUFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQU07WUFDbkIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFPO1lBQ3JCLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRztTQUN2QixDQUFDO1FBRUYsT0FBTyxHQUFHLENBQUM7SUFFZixDQUFDO0NBRUo7QUEzQ0Qsd0JBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIYXNoY29kZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9IYXNoY29kZXMnO1xuaW1wb3J0IHtJbWd9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSW1nJztcbmltcG9ydCB7RG9jRmlsZVJlc29sdmVyfSBmcm9tIFwiLi4vZGF0YXN0b3JlL0RvY0ZpbGVSZXNvbHZlcnNcIjtcbmltcG9ydCB7SUltYWdlLCBJbWFnZVR5cGV9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lJbWFnZVwiO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlSUQoKSB7XG4gICAgICAgIHJldHVybiBIYXNoY29kZXMuY3JlYXRlUmFuZG9tSUQoMjApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdG9FeHQodHlwZTogSW1hZ2VUeXBlKTogc3RyaW5nIHtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnaW1hZ2UvZ2lmJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJnaWZcIjtcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlL3BuZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicG5nXCI7XG4gICAgICAgICAgICBjYXNlICdpbWFnZS9qcGVnJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJwbmdcIjtcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlL3dlYnAnOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIndlYnBcIjtcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlL3N2Zyt4bWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBcInN2Z1wiO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdG9JbWcoZG9jRmlsZVJlc29sdmVyOiBEb2NGaWxlUmVzb2x2ZXIsIGltYWdlPzogSUltYWdlKTogSW1nIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBpZiAoISBpbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRvY0ZpbGVNZXRhID0gZG9jRmlsZVJlc29sdmVyKGltYWdlLnNyYy5iYWNrZW5kLCBpbWFnZS5zcmMpO1xuXG4gICAgICAgIGNvbnN0IGltZzogSW1nID0ge1xuICAgICAgICAgICAgd2lkdGg6IGltYWdlLndpZHRoISxcbiAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0ISxcbiAgICAgICAgICAgIHNyYzogZG9jRmlsZU1ldGEudXJsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGltZztcblxuICAgIH1cblxufVxuIl19