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
function doTest() {
    return __awaiter(this, void 0, void 0, function* () {
        const cache = yield caches.open('my-cache');
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLFNBQWUsTUFBTTs7UUFFakIsTUFBTSxLQUFLLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBbUJoRCxDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmFzeW5jIGZ1bmN0aW9uIGRvVGVzdCgpIHtcblxuICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4oJ215LWNhY2hlJyk7XG5cbiAgICAvLyBjb25zdCBzdHJlYW0gPSBuZXcgUmVhZGFibGVTdHJlYW0oe1xuICAgIC8vXG4gICAgLy8gICAgIHN0YXJ0KGNvbnRyb2xsZXIpIHtcbiAgICAvL1xuICAgIC8vICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKFwiaGVsbG8gd29ybGRcIik7XG4gICAgLy8gICAgICAgICBjb250cm9sbGVyLmNsb3NlKCk7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vIH0pO1xuXG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2Uoc3RyZWFtLCB7XG4gICAgLy8gICAgIGhlYWRlcnM6IHsnY29udGVudC10eXBlJzogJ3RleHQvaHRtbCd9XG4gICAgLy8gfSk7XG5cbiAgICAvLyBjb25zdCB1cmwgPSAnLi90ZXN0LnR4dCc7XG4gICAgLy8gYXdhaXQgY2FjaGUucHV0KHVybCwgcmVzcG9uc2UpO1xuXG59XG5cbiJdfQ==