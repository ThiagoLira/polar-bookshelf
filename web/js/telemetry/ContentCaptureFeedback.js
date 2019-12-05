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
const Firestore_1 = require("../firebase/Firestore");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
class ContentCaptureFeedbacks {
    static write(contentCaptureFeedback) {
        return __awaiter(this, void 0, void 0, function* () {
            const firestore = yield Firestore_1.Firestore.getInstance();
            const id = Hashcodes_1.Hashcodes.createRandomID();
            const ref = firestore.collection("content_capture_feedback").doc(id);
            yield ref.set(contentCaptureFeedback);
        });
    }
}
exports.ContentCaptureFeedbacks = ContentCaptureFeedbacks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudENhcHR1cmVGZWVkYmFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnRlbnRDYXB0dXJlRmVlZGJhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxxREFBZ0Q7QUFDaEQsK0RBQTBEO0FBRzFELE1BQWEsdUJBQXVCO0lBRXpCLE1BQU0sQ0FBTyxLQUFLLENBQUMsc0JBQThDOztZQUVwRSxNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFaEQsTUFBTSxFQUFFLEdBQUcscUJBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUV0QyxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXJFLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTFDLENBQUM7S0FBQTtDQUVKO0FBZEQsMERBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge0ZpcmVzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2UvRmlyZXN0b3JlJztcbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvSGFzaGNvZGVzJztcbmltcG9ydCB7TWFjaGluZUlEfSBmcm9tICcuLi91dGlsL01hY2hpbmVJRHMnO1xuXG5leHBvcnQgY2xhc3MgQ29udGVudENhcHR1cmVGZWVkYmFja3Mge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyB3cml0ZShjb250ZW50Q2FwdHVyZUZlZWRiYWNrOiBDb250ZW50Q2FwdHVyZUZlZWRiYWNrKSB7XG5cbiAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gYXdhaXQgRmlyZXN0b3JlLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgY29uc3QgaWQgPSBIYXNoY29kZXMuY3JlYXRlUmFuZG9tSUQoKTtcblxuICAgICAgICBjb25zdCByZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcImNvbnRlbnRfY2FwdHVyZV9mZWVkYmFja1wiKS5kb2MoaWQpO1xuXG4gICAgICAgIGF3YWl0IHJlZi5zZXQoY29udGVudENhcHR1cmVGZWVkYmFjayk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIENvbnRlbnRDYXB0dXJlRmVlZGJhY2sge1xuXG4gICAgLyoqXG4gICAgICogVGhlIFVSTCB0aGF0IHRoZXkncmUgcHJvdmlkaW5nIGZlZWRiYWNrIGZvci5cbiAgICAgKi9cbiAgICByZWFkb25seSB1cmw6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHJhdGluZzogUmF0aW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlaXIgYWN0dWFsIHRleHQgdGhhdCB0aGV5IHByb3ZpZGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRleHQ6IHN0cmluZyB8IG51bGw7XG5cbiAgICByZWFkb25seSBjcmVhdGVkOiBJU09EYXRlVGltZVN0cmluZztcblxuICAgIHJlYWRvbmx5IG1hY2hpbmU6IE1hY2hpbmVJRDtcblxufVxuXG50eXBlIFJhdGluZyA9IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMDtcblxuIl19