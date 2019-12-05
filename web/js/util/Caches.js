"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Caches {
    static toResponse(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const cache = yield caches.open('my-cache');
            const stream = new ReadableStream({
                start(controller) {
                    controller.enqueue("hello world");
                    controller.close();
                }
            });
            const response = new Response(stream, {
                headers: { 'content-type': 'text/html' }
            });
        });
    }
}
exports.Caches = Caches;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2FjaGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsTUFBYSxNQUFNO0lBSVIsTUFBTSxDQUFPLFVBQVUsQ0FBQyxHQUFXOztZQUV0QyxNQUFNLEtBQUssR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFNUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUM7Z0JBRTlCLEtBQUssQ0FBQyxVQUFVO29CQUVaLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2xDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQzthQUVKLENBQUMsQ0FBQztZQUVILE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDbEMsT0FBTyxFQUFFLEVBQUMsY0FBYyxFQUFFLFdBQVcsRUFBQzthQUN6QyxDQUFDLENBQUM7UUFJUCxDQUFDO0tBQUE7Q0FFSjtBQTFCRCx3QkEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBDYWNoZXMge1xuXG4gICAgLy8gc29tZSBiZXRhL3ByZWxpbWluYXJ5IGNvZGUgdG8gY3JlYXRlIGEgcmVzcG9uc2UgZnJvbSBhIGZha2UgVVJMIHdoaWNoIHdlXG4gICAgLy8gY291bGQgdXNlIHRvIHRpZSB0b2dldGhlciBmYWtlIHN0cmVhbXMuLlxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgdG9SZXNwb25zZSh1cmw6IHN0cmluZykge1xuXG4gICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4oJ215LWNhY2hlJyk7XG5cbiAgICAgICAgY29uc3Qgc3RyZWFtID0gbmV3IFJlYWRhYmxlU3RyZWFtKHtcblxuICAgICAgICAgICAgc3RhcnQoY29udHJvbGxlcikge1xuXG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKFwiaGVsbG8gd29ybGRcIik7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKHN0cmVhbSwge1xuICAgICAgICAgICAgaGVhZGVyczogeydjb250ZW50LXR5cGUnOiAndGV4dC9odG1sJ31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYXdhaXQgY2FjaGUucHV0KHVybCwgcmVzcG9uc2UpO1xuXG4gICAgfVxuXG59XG4iXX0=