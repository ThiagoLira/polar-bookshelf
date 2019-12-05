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
const Files_1 = require("polar-shared/src/util/Files");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class FileWriter {
    constructor(path) {
        this.path = path;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.stream = Files_1.Files.createWriteStream(this.path);
        });
    }
    write(data) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertPresent(this.stream, "no stream");
            this.stream.write(data);
        });
    }
    close(err) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.stream) {
                this.stream.close();
            }
        });
    }
}
exports.FileWriter = FileWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVdyaXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbGVXcml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1REFBa0Q7QUFDbEQsa0VBQTZEO0FBRzdELE1BQWEsVUFBVTtJQU1uQixZQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVZLElBQUk7O1lBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtJQUVZLEtBQUssQ0FBQyxJQUFZOztZQUUzQiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdCLENBQUM7S0FBQTtJQUVZLEtBQUssQ0FBQyxHQUFXOztZQUUxQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QjtRQUVMLENBQUM7S0FBQTtDQUVKO0FBN0JELGdDQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7V3JpdGVTdHJlYW19IGZyb20gXCJmc1wiO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVzJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7V3JpdGVyfSBmcm9tICcuLi9FeHBvcnRlcnMnO1xuXG5leHBvcnQgY2xhc3MgRmlsZVdyaXRlciBpbXBsZW1lbnRzIFdyaXRlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhdGg6IHN0cmluZztcblxuICAgIHByaXZhdGUgc3RyZWFtPzogV3JpdGVTdHJlYW07XG5cbiAgICBjb25zdHJ1Y3RvcihwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBGaWxlcy5jcmVhdGVXcml0ZVN0cmVhbSh0aGlzLnBhdGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShkYXRhOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQodGhpcy5zdHJlYW0sIFwibm8gc3RyZWFtXCIpO1xuICAgICAgICB0aGlzLnN0cmVhbSEud3JpdGUoZGF0YSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY2xvc2UoZXJyPzogRXJyb3IpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBpZiAodGhpcy5zdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtLmNsb3NlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5cbiJdfQ==