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
const FirebaseDatastores_1 = require("./FirebaseDatastores");
const Backend_1 = require("polar-shared/src/datastore/Backend");
const Assertions_1 = require("../test/Assertions");
describe('FirebaseDatastores', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const backend = Backend_1.Backend.STASH;
            const fileRef = {
                name: "chubby.pdf",
                backend
            };
            const uid = "SSVzZnZrmZbCnavWVw6LmoVVCeA3";
            const storagePath = FirebaseDatastores_1.FirebaseDatastores.computeStoragePath(backend, fileRef, uid);
            Assertions_1.assertJSON(storagePath, {
                "path": "stash/1DkF2nhfKbnzmNaaLFo7LritFAGg5nunancvCGVe.pdf",
                "settings": {
                    "cacheControl": "public,max-age=604800",
                    "contentType": "application/pdf"
                }
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZWJhc2VEYXRhc3RvcmVzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpcmViYXNlRGF0YXN0b3Jlc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw2REFBd0Q7QUFDeEQsZ0VBQTJEO0FBQzNELG1EQUE4QztBQUU5QyxRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFFM0IsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFZUixNQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLEtBQUssQ0FBQztZQUU5QixNQUFNLE9BQU8sR0FBRztnQkFDWixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTzthQUNWLENBQUM7WUFFRixNQUFNLEdBQUcsR0FBRyw4QkFBOEIsQ0FBQztZQUUzQyxNQUFNLFdBQVcsR0FBRyx1Q0FBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRWpGLHVCQUFVLENBQUMsV0FBVyxFQUFFO2dCQUNwQixNQUFNLEVBQUUsb0RBQW9EO2dCQUM1RCxVQUFVLEVBQUU7b0JBQ1IsY0FBYyxFQUFFLHVCQUF1QjtvQkFDdkMsYUFBYSxFQUFFLGlCQUFpQjtpQkFDbkM7YUFDSixDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpcmViYXNlRGF0YXN0b3Jlc30gZnJvbSAnLi9GaXJlYmFzZURhdGFzdG9yZXMnO1xuaW1wb3J0IHtCYWNrZW5kfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcblxuZGVzY3JpYmUoJ0ZpcmViYXNlRGF0YXN0b3JlcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBcInBhdGhcIjogXCJzdGFzaC8xRGtGMm5oZktibnptTmFhTEZvN0xyaXRGQUdnNW51bmFuY3ZDR1ZlLnBkZlwiLFxuICAgICAgICAvLyAgICAgXCJiYWNrZW5kXCI6IFwic3Rhc2hcIixcIlxuICAgICAgICAvLyAgICAgXCJmaWxlUmVmXCI6IHtcbiAgICAgICAgLy8gICAgICAgICBcIm5hbWVcIjogXCJjaHViYnkucGRmXCIsXG4gICAgICAgIC8vICAgICAgICAgXCJiYWNrZW5kXCI6IFwic3Rhc2hcIlxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIFwidWlkXCI6XCJTU1Z6Wm5acm1aYkNuYXZXVnc2TG1vVlZDZUEzXCJcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGNvbnN0IGJhY2tlbmQgPSBCYWNrZW5kLlNUQVNIO1xuXG4gICAgICAgIGNvbnN0IGZpbGVSZWYgPSB7XG4gICAgICAgICAgICBuYW1lOiBcImNodWJieS5wZGZcIixcbiAgICAgICAgICAgIGJhY2tlbmRcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB1aWQgPSBcIlNTVnpablpybVpiQ25hdldWdzZMbW9WVkNlQTNcIjtcblxuICAgICAgICBjb25zdCBzdG9yYWdlUGF0aCA9IEZpcmViYXNlRGF0YXN0b3Jlcy5jb21wdXRlU3RvcmFnZVBhdGgoYmFja2VuZCwgZmlsZVJlZiwgdWlkKTtcblxuICAgICAgICBhc3NlcnRKU09OKHN0b3JhZ2VQYXRoLCB7XG4gICAgICAgICAgICBcInBhdGhcIjogXCJzdGFzaC8xRGtGMm5oZktibnptTmFhTEZvN0xyaXRGQUdnNW51bmFuY3ZDR1ZlLnBkZlwiLFxuICAgICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjYWNoZUNvbnRyb2xcIjogXCJwdWJsaWMsbWF4LWFnZT02MDQ4MDBcIixcbiAgICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IFwiYXBwbGljYXRpb24vcGRmXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=