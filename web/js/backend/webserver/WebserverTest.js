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
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Files_1 = require("polar-shared/src/util/Files");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const Assertions_1 = require("../../test/Assertions");
const Http_1 = require("../../util/Http");
const chai_1 = require("chai");
const WebserverConfig_1 = require("polar-shared-webserver/src/webserver/WebserverConfig");
const FileRegistry_1 = require("polar-shared-webserver/src/webserver/FileRegistry");
const Webserver_1 = require("polar-shared-webserver/src/webserver/Webserver");
const ResourceRegistry_1 = require("polar-shared-webserver/src/webserver/ResourceRegistry");
describe('Webserver', function () {
    describe('create', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const webserverConfig = new WebserverConfig_1.WebserverConfig("..", 8085);
                const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
                const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry);
                yield webserver.start();
                webserver.stop();
            });
        });
        it("serving files", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const webserverConfig = new WebserverConfig_1.WebserverConfig("..", 8095);
                const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
                const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry);
                yield webserver.start();
                const path = FilePaths_1.FilePaths.tmpfile('file-registry.html');
                yield Files_1.Files.writeFileAsync(path, 'hello world');
                const fileMeta = fileRegistry.register("0x000", path);
                chai_1.assert.ok(fileMeta.url !== undefined);
                const buffer = yield Files_1.Files.readFileAsync(path);
                const hashcode = Hashcodes_1.Hashcodes.create(buffer.toString('utf-8'));
                const expected = {
                    "key": "0x000",
                    "filename": path,
                    "url": "http://127.0.0.1:8095/files/0x000"
                };
                Assertions_1.assertJSON(fileMeta, expected);
                const response = yield Http_1.Http.execute(fileMeta.url);
                console.log("FIXME:" + response.data.toString('utf8'));
                chai_1.assert.equal(hashcode, Hashcodes_1.Hashcodes.create(response.data.toString('utf8')));
                webserver.stop();
            });
        });
        it("serving resources", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const webserverConfig = new WebserverConfig_1.WebserverConfig("..", 8095);
                const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
                const resourceRegistry = new ResourceRegistry_1.ResourceRegistry();
                const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry, resourceRegistry);
                yield webserver.start();
                const path = FilePaths_1.FilePaths.tmpfile('helloworld.html');
                yield Files_1.Files.writeFileAsync(path, 'hello world');
                resourceRegistry.register("/helloworld.html", path);
                const buffer = yield Files_1.Files.readFileAsync(path);
                const response = yield Http_1.Http.execute('http://localhost:8095/helloworld.html');
                chai_1.assert.equal(response.response.headers['content-type'], 'text/html; charset=UTF-8');
                chai_1.assert.equal('hello world', response.data.toString('utf8'));
                webserver.stop();
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2Vic2VydmVyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldlYnNlcnZlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCxzREFBaUQ7QUFDakQsMENBQXFDO0FBQ3JDLCtCQUE0QjtBQUM1QiwwRkFBcUY7QUFDckYsb0ZBQStFO0FBQy9FLDhFQUF5RTtBQUN6RSw0RkFBdUY7QUFFdkYsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUVsQixRQUFRLENBQUMsUUFBUSxFQUFFO1FBdUJmLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O2dCQUVSLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELE1BQU0sWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFFdkQsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDL0QsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3hCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVyQixDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRTs7Z0JBRWhCLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELE1BQU0sWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFFL0QsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRXhCLE1BQU0sSUFBSSxHQUFHLHFCQUFTLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3JELE1BQU0sYUFBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBRWhELE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUV0RCxhQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUM7Z0JBRXRDLE1BQU0sTUFBTSxHQUFHLE1BQU0sYUFBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFL0MsTUFBTSxRQUFRLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUU1RCxNQUFNLFFBQVEsR0FBRztvQkFDYixLQUFLLEVBQUUsT0FBTztvQkFDZCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsS0FBSyxFQUFFLG1DQUFtQztpQkFDN0MsQ0FBQztnQkFFRix1QkFBVSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFL0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxXQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFFdkQsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV6RSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFckIsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTs7Z0JBRXBCLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELE1BQU0sWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7Z0JBQ2hELE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxlQUFlLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBRWpGLE1BQU0sU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUV4QixNQUFNLElBQUksR0FBRyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNsRCxNQUFNLGFBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUVoRCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRXBELE1BQU0sTUFBTSxHQUFHLE1BQU0sYUFBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFL0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxXQUFJLENBQUMsT0FBTyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7Z0JBRTdFLGFBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztnQkFDcEYsYUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFFNUQsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXJCLENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUtQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzXCI7XG5pbXBvcnQge0ZpbGVzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVzXCI7XG5pbXBvcnQge0hhc2hjb2Rlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0hhc2hjb2Rlcyc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0h0dHB9IGZyb20gJy4uLy4uL3V0aWwvSHR0cCc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1dlYnNlcnZlckNvbmZpZ30gZnJvbSBcInBvbGFyLXNoYXJlZC13ZWJzZXJ2ZXIvc3JjL3dlYnNlcnZlci9XZWJzZXJ2ZXJDb25maWdcIjtcbmltcG9ydCB7RmlsZVJlZ2lzdHJ5fSBmcm9tIFwicG9sYXItc2hhcmVkLXdlYnNlcnZlci9zcmMvd2Vic2VydmVyL0ZpbGVSZWdpc3RyeVwiO1xuaW1wb3J0IHtXZWJzZXJ2ZXJ9IGZyb20gXCJwb2xhci1zaGFyZWQtd2Vic2VydmVyL3NyYy93ZWJzZXJ2ZXIvV2Vic2VydmVyXCI7XG5pbXBvcnQge1Jlc291cmNlUmVnaXN0cnl9IGZyb20gXCJwb2xhci1zaGFyZWQtd2Vic2VydmVyL3NyYy93ZWJzZXJ2ZXIvUmVzb3VyY2VSZWdpc3RyeVwiO1xuXG5kZXNjcmliZSgnV2Vic2VydmVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBkZXNjcmliZSgnY3JlYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGl0KFwiYmFzaWMgU1NMXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgY29uc3Qgd2Vic2VydmVyQ29uZmlnID0gV2Vic2VydmVyQ29uZmlnLmNyZWF0ZShcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGRpcjogXCIuLlwiLFxuICAgICAgICAvLyAgICAgICAgICAgICBwb3J0OiA4MDg1LFxuICAgICAgICAvLyAgICAgICAgICAgICBob3N0OiBcIjEyNy4wLjAuMVwiLFxuICAgICAgICAvLyAgICAgICAgICAgICB1c2VTU0w6IHRydWUsXG4gICAgICAgIC8vICAgICAgICAgICAgIHNzbDoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2VydDogV2Vic2VydmVyQ2VydHMuQ0VSVCxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGtleTogV2Vic2VydmVyQ2VydHMuS0VZLFxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICBjb25zdCBmaWxlUmVnaXN0cnkgPSBuZXcgRmlsZVJlZ2lzdHJ5KHdlYnNlcnZlckNvbmZpZyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBjb25zdCB3ZWJzZXJ2ZXIgPSBuZXcgV2Vic2VydmVyKHdlYnNlcnZlckNvbmZpZywgZmlsZVJlZ2lzdHJ5KTtcbiAgICAgICAgLy8gICAgIHdlYnNlcnZlci5zdGFydCgpO1xuICAgICAgICAvLyAgICAgd2Vic2VydmVyLnN0b3AoKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3Qgd2Vic2VydmVyQ29uZmlnID0gbmV3IFdlYnNlcnZlckNvbmZpZyhcIi4uXCIsIDgwODUpO1xuICAgICAgICAgICAgY29uc3QgZmlsZVJlZ2lzdHJ5ID0gbmV3IEZpbGVSZWdpc3RyeSh3ZWJzZXJ2ZXJDb25maWcpO1xuXG4gICAgICAgICAgICBjb25zdCB3ZWJzZXJ2ZXIgPSBuZXcgV2Vic2VydmVyKHdlYnNlcnZlckNvbmZpZywgZmlsZVJlZ2lzdHJ5KTtcbiAgICAgICAgICAgIGF3YWl0IHdlYnNlcnZlci5zdGFydCgpO1xuICAgICAgICAgICAgd2Vic2VydmVyLnN0b3AoKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcInNlcnZpbmcgZmlsZXNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHdlYnNlcnZlckNvbmZpZyA9IG5ldyBXZWJzZXJ2ZXJDb25maWcoXCIuLlwiLCA4MDk1KTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVSZWdpc3RyeSA9IG5ldyBGaWxlUmVnaXN0cnkod2Vic2VydmVyQ29uZmlnKTtcbiAgICAgICAgICAgIGNvbnN0IHdlYnNlcnZlciA9IG5ldyBXZWJzZXJ2ZXIod2Vic2VydmVyQ29uZmlnLCBmaWxlUmVnaXN0cnkpO1xuXG4gICAgICAgICAgICBhd2FpdCB3ZWJzZXJ2ZXIuc3RhcnQoKTtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy50bXBmaWxlKCdmaWxlLXJlZ2lzdHJ5Lmh0bWwnKTtcbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLndyaXRlRmlsZUFzeW5jKHBhdGgsICdoZWxsbyB3b3JsZCcpO1xuXG4gICAgICAgICAgICBjb25zdCBmaWxlTWV0YSA9IGZpbGVSZWdpc3RyeS5yZWdpc3RlcihcIjB4MDAwXCIsIHBhdGgpO1xuXG4gICAgICAgICAgICBhc3NlcnQub2soZmlsZU1ldGEudXJsICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBGaWxlcy5yZWFkRmlsZUFzeW5jKHBhdGgpO1xuXG4gICAgICAgICAgICBjb25zdCBoYXNoY29kZSA9IEhhc2hjb2Rlcy5jcmVhdGUoYnVmZmVyLnRvU3RyaW5nKCd1dGYtOCcpKTtcblxuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICAgICAgXCJrZXlcIjogXCIweDAwMFwiLFxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogcGF0aCxcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly8xMjcuMC4wLjE6ODA5NS9maWxlcy8weDAwMFwiXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKGZpbGVNZXRhLCBleHBlY3RlZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgSHR0cC5leGVjdXRlKGZpbGVNZXRhLnVybCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklYTUU6XCIgKyByZXNwb25zZS5kYXRhLnRvU3RyaW5nKCd1dGY4JykpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoaGFzaGNvZGUsIEhhc2hjb2Rlcy5jcmVhdGUocmVzcG9uc2UuZGF0YS50b1N0cmluZygndXRmOCcpKSk7XG5cbiAgICAgICAgICAgIHdlYnNlcnZlci5zdG9wKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJzZXJ2aW5nIHJlc291cmNlc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3Qgd2Vic2VydmVyQ29uZmlnID0gbmV3IFdlYnNlcnZlckNvbmZpZyhcIi4uXCIsIDgwOTUpO1xuICAgICAgICAgICAgY29uc3QgZmlsZVJlZ2lzdHJ5ID0gbmV3IEZpbGVSZWdpc3RyeSh3ZWJzZXJ2ZXJDb25maWcpO1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VSZWdpc3RyeSA9IG5ldyBSZXNvdXJjZVJlZ2lzdHJ5KCk7XG4gICAgICAgICAgICBjb25zdCB3ZWJzZXJ2ZXIgPSBuZXcgV2Vic2VydmVyKHdlYnNlcnZlckNvbmZpZywgZmlsZVJlZ2lzdHJ5LCByZXNvdXJjZVJlZ2lzdHJ5KTtcblxuICAgICAgICAgICAgYXdhaXQgd2Vic2VydmVyLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMudG1wZmlsZSgnaGVsbG93b3JsZC5odG1sJyk7XG4gICAgICAgICAgICBhd2FpdCBGaWxlcy53cml0ZUZpbGVBc3luYyhwYXRoLCAnaGVsbG8gd29ybGQnKTtcblxuICAgICAgICAgICAgcmVzb3VyY2VSZWdpc3RyeS5yZWdpc3RlcihcIi9oZWxsb3dvcmxkLmh0bWxcIiwgcGF0aCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IEZpbGVzLnJlYWRGaWxlQXN5bmMocGF0aCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgSHR0cC5leGVjdXRlKCdodHRwOi8vbG9jYWxob3N0OjgwOTUvaGVsbG93b3JsZC5odG1sJyk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzWydjb250ZW50LXR5cGUnXSwgJ3RleHQvaHRtbDsgY2hhcnNldD1VVEYtOCcpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKCdoZWxsbyB3b3JsZCcsIHJlc3BvbnNlLmRhdGEudG9TdHJpbmcoJ3V0ZjgnKSk7XG5cbiAgICAgICAgICAgIHdlYnNlcnZlci5zdG9wKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuXG5cblxufSk7XG5cbiJdfQ==