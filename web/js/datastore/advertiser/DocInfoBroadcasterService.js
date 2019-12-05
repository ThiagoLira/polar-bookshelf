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
const Broadcaster_1 = require("../../ipc/Broadcaster");
class DocInfoBroadcasterService {
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            new Broadcaster_1.Broadcaster('doc-info-advertisement:broadcast', 'doc-info-advertisement');
        });
    }
}
exports.DocInfoBroadcasterService = DocInfoBroadcasterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jSW5mb0Jyb2FkY2FzdGVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY0luZm9Ccm9hZGNhc3RlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFLbEQsTUFBYSx5QkFBeUI7SUFFckIsS0FBSzs7WUFFZCxJQUFJLHlCQUFXLENBQUMsa0NBQWtDLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUNsRixDQUFDO0tBQUE7Q0FFSjtBQVBELDhEQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm9hZGNhc3Rlcn0gZnJvbSAnLi4vLi4vaXBjL0Jyb2FkY2FzdGVyJztcblxuLyoqXG4gKiBTZW5kcyB7RG9jSW5mb0FkdmVydGlzZW1lbnR9cyBvdXQgd2hlbiB3ZSBuZWVkIHRvIGFkdmVydGlzZSBhIG5ldyBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBEb2NJbmZvQnJvYWRjYXN0ZXJTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpIHtcbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgICAgICBuZXcgQnJvYWRjYXN0ZXIoJ2RvYy1pbmZvLWFkdmVydGlzZW1lbnQ6YnJvYWRjYXN0JywgJ2RvYy1pbmZvLWFkdmVydGlzZW1lbnQnKTtcbiAgICB9XG5cbn1cbiJdfQ==