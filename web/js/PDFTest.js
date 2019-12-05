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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Files_1 = require("polar-shared/src/util/Files");
const url_1 = __importDefault(require("url"));
const pdfjs_dist_1 = __importDefault(require("pdfjs-dist"));
xdescribe('PDF', function () {
    xit("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = yield Files_1.Files.readFileAsync("/home/burton/Downloads/1010.3003v1.pdf");
            const uint8 = toArray(buffer);
            const filePath = "/home/burton/incremental-reading/.stash/The Toyota Way _ 14 Management Principles from the World's Greatest Manufac.pdf";
            if (!(yield Files_1.Files.existsAsync(filePath))) {
                throw new Error("File does not exist at path: " + filePath);
            }
            const fileURL = url_1.default.format({
                protocol: 'file',
                slashes: true,
                pathname: filePath,
            });
            const pdfLoadingTask = pdfjs_dist_1.default.getDocument(fileURL);
            const doc = yield pdfLoadingTask.promise;
            const metadata = yield doc.getMetadata();
            if (metadata.metadata && metadata.metadata.get('dc:title')) {
                console.log("FIXME !!!");
            }
            console.log("metadata: ", metadata);
            console.log("numPages: " + doc.numPages);
            console.log("fingerprint: " + doc.fingerprint);
        });
    });
});
function toArray(buf) {
    if (!buf)
        return undefined;
    if (buf.constructor.name === 'Uint8Array') {
        return buf;
    }
    if (typeof buf === 'string')
        buf = Buffer.from(buf);
    var a = new Uint8Array(buf.length);
    for (var i = 0; i < buf.length; i++)
        a[i] = buf[i];
    return a;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBERlRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFFbEQsOENBQXNCO0FBRXRCLDREQUErQjtBQUUvQixTQUFTLENBQUMsS0FBSyxFQUFFO0lBRWIsR0FBRyxDQUFDLE9BQU8sRUFBRTs7WUFFVCxNQUFNLE1BQU0sR0FBRyxNQUFNLGFBQUssQ0FBQyxhQUFhLENBQUMsd0NBQXdDLENBQUMsQ0FBQTtZQUNsRixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFLOUIsTUFBTSxRQUFRLEdBQUcseUhBQXlILENBQUM7WUFFM0ksSUFBSSxDQUFFLENBQUEsTUFBTSxhQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBLEVBQUU7Z0JBQ3JDLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDL0Q7WUFFRCxNQUFNLE9BQU8sR0FBRyxhQUFHLENBQUMsTUFBTSxDQUFDO2dCQUN2QixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsUUFBUSxFQUFFLFFBQVE7YUFDckIsQ0FBQyxDQUFDO1lBTUgsTUFBTSxjQUFjLEdBQUcsb0JBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxjQUFjLENBQUMsT0FBTyxDQUFDO1lBRXpDLE1BQU0sUUFBUSxHQUFHLE1BQU0sR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRXpDLElBQUcsUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFJdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM1QjtZQUlELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBR3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFJbkQsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDO0FBR0gsU0FBUyxPQUFPLENBQUMsR0FBVztJQUN4QixJQUFJLENBQUMsR0FBRztRQUFFLE9BQU8sU0FBUyxDQUFDO0lBQzNCLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUF5QztRQUM5RSxPQUFPLEdBQUcsQ0FBQztLQUNkO0lBQ0QsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtRQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmlsZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlcyc7XG5cbmltcG9ydCB1cmwgZnJvbSAndXJsJztcblxuaW1wb3J0IFBERkpTIGZyb20gJ3BkZmpzLWRpc3QnO1xuXG54ZGVzY3JpYmUoJ1BERicsIGZ1bmN0aW9uKCkge1xuXG4gICAgeGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhcIi9ob21lL2J1cnRvbi9Eb3dubG9hZHMvMTAxMC4zMDAzdjEucGRmXCIpXG4gICAgICAgIGNvbnN0IHVpbnQ4ID0gdG9BcnJheShidWZmZXIpO1xuXG4gICAgICAgIC8vIGNvbnN0IHVybCA9IFwiZmlsZTovLy9ob21lL2J1cnRvbi9Eb3dubG9hZHMvMTAxMC4zMDAzdjEucGRmXCI7XG4gICAgICAgIC8vIGNvbnN0IHVybCA9IFwiZmlsZTovLy9ob21lL2J1cnRvbi9pbmNyZW1lbnRhbC1yZWFkaW5nL0ElMjBDcnlwdG8lMjBJbmN1YmF0b3IlMjBvciUyMEFjY2VsZXJhdG9yJTIwQ2FuJTIwTWFrZSUyMEElMjBTYWZlJTIwSUNPJTIwXyUyMENyeXB0byUyMEJyaWVmaW5nLnBkZlwiO1xuXG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gXCIvaG9tZS9idXJ0b24vaW5jcmVtZW50YWwtcmVhZGluZy8uc3Rhc2gvVGhlIFRveW90YSBXYXkgXyAxNCBNYW5hZ2VtZW50IFByaW5jaXBsZXMgZnJvbSB0aGUgV29ybGQncyBHcmVhdGVzdCBNYW51ZmFjLnBkZlwiO1xuXG4gICAgICAgIGlmICghIGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmlsZSBkb2VzIG5vdCBleGlzdCBhdCBwYXRoOiBcIiArIGZpbGVQYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbGVVUkwgPSB1cmwuZm9ybWF0KHtcbiAgICAgICAgICAgIHByb3RvY29sOiAnZmlsZScsXG4gICAgICAgICAgICBzbGFzaGVzOiB0cnVlLFxuICAgICAgICAgICAgcGF0aG5hbWU6IGZpbGVQYXRoLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zdCBmaWxlVVJMID0gXCJmaWxlOi8vL2hvbWUvYnVydG9uL2luY3JlbWVudGFsLXJlYWRpbmcvYml0Y29pbi9NYXN0ZXJpbmclMjBCaXRjb2luLnBkZlwiO1xuXG4gICAgICAgIC8vIGNvbnN0IGRvYyA9IGF3YWl0IHBkZmpzLmdldERvY3VtZW50KHVpbnQ4ISlcblxuICAgICAgICBjb25zdCBwZGZMb2FkaW5nVGFzayA9IFBERkpTLmdldERvY3VtZW50KGZpbGVVUkwpO1xuICAgICAgICBjb25zdCBkb2MgPSBhd2FpdCBwZGZMb2FkaW5nVGFzay5wcm9taXNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgZG9jLmdldE1ldGFkYXRhKCk7XG5cbiAgICAgICAgaWYobWV0YWRhdGEubWV0YWRhdGEgJiYgbWV0YWRhdGEubWV0YWRhdGEuZ2V0KCdkYzp0aXRsZScpKSB7XG5cbiAgICAgICAgICAgIC8vIEZJWE1FOiB3ZSBoYXZlIGRjOmxhbmd1YWdlICwgZGM6ZGF0ZSwgZGM6cHVibGlzaGVyIGRjOmNyZWF0b3IgZGM6ZGVzY3JpcHRpb25cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVhNRSAhISFcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtZXRhZGF0YS5tZXRhZGF0YS5wYXJzZSgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWV0YWRhdGE6IFwiLCBtZXRhZGF0YSk7XG5cbiAgICAgICAgLy8gZG9jLlxuICAgICAgICBjb25zb2xlLmxvZyhcIm51bVBhZ2VzOiBcIiArIGRvYy5udW1QYWdlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmluZ2VycHJpbnQ6IFwiICsgZG9jLmZpbmdlcnByaW50KTtcblxuICAgICAgICAvL2Fzc2VydC5vayhQREZKUy5nZXREb2N1bWVudCk7XG5cbiAgICB9KTtcblxufSk7XG5cblxuZnVuY3Rpb24gdG9BcnJheShidWY6IEJ1ZmZlcikge1xuICAgIGlmICghYnVmKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmIChidWYuY29uc3RydWN0b3IubmFtZSA9PT0gJ1VpbnQ4QXJyYXknIC8qIHx8IGJ1Zi5jb25zdHJ1Y3RvciA9PT0gVWludDhBcnJheSovKSB7XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYnVmID09PSAnc3RyaW5nJykgYnVmID0gQnVmZmVyLmZyb20oYnVmKTtcbiAgICB2YXIgYSA9IG5ldyBVaW50OEFycmF5KGJ1Zi5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnVmLmxlbmd0aDsgaSsrKSBhW2ldID0gYnVmW2ldO1xuICAgIHJldHVybiBhO1xufTtcbiJdfQ==