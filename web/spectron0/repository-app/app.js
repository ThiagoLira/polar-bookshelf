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
const chai_1 = require("chai");
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const RepositoryApp_1 = require("../../js/apps/repository/RepositoryApp");
const dom_testing_library_1 = require("dom-testing-library");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(void 0, void 0, void 0, function* () {
    yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.test-repository-app');
    yield new RepositoryApp_1.RepositoryApp().start();
    console.log("Running within SpectronRenderer now.");
    yield dom_testing_library_1.wait(() => {
        console.log("Looking for elements...");
        chai_1.assert.ok(document.getElementById('doc-table'));
        return document.querySelectorAll("#doc-table .rt-tr-group").length >= 0;
    });
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLHFFQUFnRTtBQUNoRSwwRUFBcUU7QUFFckUsNkRBQXlDO0FBQ3pDLDZEQUF3RDtBQUV4RCxtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBTyxLQUFLLEVBQUUsRUFBRTtJQUVqQyxNQUFNLDJCQUFZLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUU3RCxNQUFNLElBQUksNkJBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRWxDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUVwRCxNQUFNLDBCQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBR3ZDLGFBQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sUUFBUSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtSZXBvc2l0b3J5QXBwfSBmcm9tICcuLi8uLi9qcy9hcHBzL3JlcG9zaXRvcnkvUmVwb3NpdG9yeUFwcCc7XG5cbmltcG9ydCB7d2FpdH0gZnJvbSAnZG9tLXRlc3RpbmctbGlicmFyeSc7XG5pbXBvcnQge1BvbGFyRGF0YURpcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9Qb2xhckRhdGFEaXInO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoc3RhdGUpID0+IHtcblxuICAgIGF3YWl0IFBvbGFyRGF0YURpci51c2VGcmVzaERpcmVjdG9yeSgnLnRlc3QtcmVwb3NpdG9yeS1hcHAnKTtcblxuICAgIGF3YWl0IG5ldyBSZXBvc2l0b3J5QXBwKCkuc3RhcnQoKTtcblxuICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoaW4gU3BlY3Ryb25SZW5kZXJlciBub3cuXCIpO1xuXG4gICAgYXdhaXQgd2FpdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9va2luZyBmb3IgZWxlbWVudHMuLi5cIik7XG5cbiAgICAgICAgLy8gbm93IHdhaXQgZm9yIHRoZSBwYWdlIHRvIGJlIHJlbmRlcmVkIHdpdGggZG9jdW1lbnRzXG4gICAgICAgIGFzc2VydC5vayhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9jLXRhYmxlJykpO1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkb2MtdGFibGUgLnJ0LXRyLWdyb3VwXCIpLmxlbmd0aCA+PSAwO1xuICAgIH0pO1xuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSk7XG5cbiJdfQ==