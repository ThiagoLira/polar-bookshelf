"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Broadcasters_1 = require("../../ipc/Broadcasters");
const AppRuntime_1 = require("../../AppRuntime");
const Messenger_1 = require("../../electron/messenger/Messenger");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class ProgressMessages {
    static broadcast(progressMessage) {
        if (AppRuntime_1.AppRuntime.get() === 'electron-main') {
            Broadcasters_1.Broadcasters.send(this.CHANNEL, progressMessage);
        }
        else {
            const message = {
                type: this.CHANNEL,
                value: progressMessage
            };
            Messenger_1.Messenger.postMessage({ message })
                .catch(err => log.error("Could not send message: ", err));
        }
    }
}
exports.ProgressMessages = ProgressMessages;
ProgressMessages.CHANNEL = '/progress-message';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NNZXNzYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByb2dyZXNzTWVzc2FnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBb0Q7QUFFcEQsaURBQTRDO0FBQzVDLGtFQUE2RDtBQUU3RCwyREFBc0Q7QUFFdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsZ0JBQWdCO0lBSWxCLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZ0M7UUFFcEQsSUFBSSx1QkFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLGVBQWUsRUFBRTtZQUV0QywyQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBRXBEO2FBQU07WUFFSCxNQUFNLE9BQU8sR0FBa0M7Z0JBQzNDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDbEIsS0FBSyxFQUFFLGVBQWU7YUFDekIsQ0FBQztZQUVGLHFCQUFTLENBQUMsV0FBVyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUM7aUJBQzNCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUVqRTtJQUVMLENBQUM7O0FBdEJMLDRDQXdCQztBQXRCaUIsd0JBQU8sR0FBVyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvYWRjYXN0ZXJzfSBmcm9tICcuLi8uLi9pcGMvQnJvYWRjYXN0ZXJzJztcbmltcG9ydCB7UHJvZ3Jlc3NNZXNzYWdlfSBmcm9tICcuL1Byb2dyZXNzTWVzc2FnZSc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uLy4uL0FwcFJ1bnRpbWUnO1xuaW1wb3J0IHtNZXNzZW5nZXJ9IGZyb20gJy4uLy4uL2VsZWN0cm9uL21lc3Nlbmdlci9NZXNzZW5nZXInO1xuaW1wb3J0IHtUeXBlZE1lc3NhZ2V9IGZyb20gJy4uLy4uL3V0aWwvVHlwZWRNZXNzYWdlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc01lc3NhZ2VzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgQ0hBTk5FTDogc3RyaW5nID0gJy9wcm9ncmVzcy1tZXNzYWdlJztcblxuICAgIHB1YmxpYyBzdGF0aWMgYnJvYWRjYXN0KHByb2dyZXNzTWVzc2FnZTogUHJvZ3Jlc3NNZXNzYWdlKSB7XG5cbiAgICAgICAgaWYgKEFwcFJ1bnRpbWUuZ2V0KCkgPT09ICdlbGVjdHJvbi1tYWluJykge1xuXG4gICAgICAgICAgICBCcm9hZGNhc3RlcnMuc2VuZCh0aGlzLkNIQU5ORUwsIHByb2dyZXNzTWVzc2FnZSk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZTogVHlwZWRNZXNzYWdlPFByb2dyZXNzTWVzc2FnZT4gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5DSEFOTkVMLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9ncmVzc01lc3NhZ2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIE1lc3Nlbmdlci5wb3N0TWVzc2FnZSh7bWVzc2FnZX0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3Qgc2VuZCBtZXNzYWdlOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=