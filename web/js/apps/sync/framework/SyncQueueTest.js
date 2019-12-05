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
const SyncQueue_1 = require("./SyncQueue");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
describe('SyncQueueTest', function () {
    const abortable = {
        aborted: false
    };
    const syncProgressListener = syncProgress => {
        console.log(syncProgress);
    };
    const syncQueue = new SyncQueue_1.SyncQueue(abortable, syncProgressListener);
    it("basic test", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
                results.push(0);
                return Optional_1.Optional.empty();
            }));
            yield syncQueue.execute();
            chai_1.assert.deepEqual(results, [0]);
        });
    });
    it("with one level of generators", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
                results.push(0);
                syncQueue.add(() => __awaiter(this, void 0, void 0, function* () {
                    results.push(1);
                    return Optional_1.Optional.empty();
                }));
                return Optional_1.Optional.empty();
            }));
            yield syncQueue.execute();
            chai_1.assert.deepEqual(results, [0, 1]);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY1F1ZXVlVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN5bmNRdWV1ZVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIsMkNBQXNDO0FBR3RDLGdFQUEyRDtBQUczRCxRQUFRLENBQUMsZUFBZSxFQUFFO0lBRXRCLE1BQU0sU0FBUyxHQUFjO1FBQ3pCLE9BQU8sRUFBRSxLQUFLO0tBQ2pCLENBQUM7SUFFRixNQUFNLG9CQUFvQixHQUF5QixZQUFZLENBQUMsRUFBRTtRQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQztJQUVGLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUVqRSxFQUFFLENBQUMsWUFBWSxFQUFFOztZQUViLE1BQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztZQUU3QixTQUFTLENBQUMsR0FBRyxDQUFDLEdBQVEsRUFBRTtnQkFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsT0FBTyxtQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFFSCxNQUFNLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUUxQixhQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkMsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQyw4QkFBOEIsRUFBRTs7WUFFL0IsTUFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO1lBRTdCLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO2dCQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVoQixTQUFTLENBQUMsR0FBRyxDQUFDLEdBQVMsRUFBRTtvQkFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsT0FBTyxtQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFDO2dCQUVILE9BQU8sbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUU1QixDQUFDLENBQUEsQ0FBQyxDQUFDO1lBRUgsTUFBTSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFMUIsYUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBR1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1N5bmNRdWV1ZX0gZnJvbSAnLi9TeW5jUXVldWUnO1xuaW1wb3J0IHtBYm9ydGFibGV9IGZyb20gJy4vQWJvcnRhYmxlJztcbmltcG9ydCB7U3luY1Byb2dyZXNzTGlzdGVuZXJ9IGZyb20gJy4vU3luY1Byb2dyZXNzTGlzdGVuZXInO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcblxuXG5kZXNjcmliZSgnU3luY1F1ZXVlVGVzdCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgYWJvcnRhYmxlOiBBYm9ydGFibGUgPSB7XG4gICAgICAgIGFib3J0ZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0IHN5bmNQcm9ncmVzc0xpc3RlbmVyOiBTeW5jUHJvZ3Jlc3NMaXN0ZW5lciA9IHN5bmNQcm9ncmVzcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN5bmNQcm9ncmVzcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN5bmNRdWV1ZSA9IG5ldyBTeW5jUXVldWUoYWJvcnRhYmxlLCBzeW5jUHJvZ3Jlc3NMaXN0ZW5lcik7XG5cbiAgICBpdChcImJhc2ljIHRlc3RcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IG51bWJlcltdID0gW107XG5cbiAgICAgICAgc3luY1F1ZXVlLmFkZChhc3luYygpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCgwKTtcbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBzeW5jUXVldWUuZXhlY3V0ZSgpO1xuXG4gICAgICAgIGFzc2VydC5kZWVwRXF1YWwocmVzdWx0cywgWzBdKTtcblxuICAgIH0pO1xuXG5cbiAgICBpdChcIndpdGggb25lIGxldmVsIG9mIGdlbmVyYXRvcnNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IG51bWJlcltdID0gW107XG5cbiAgICAgICAgc3luY1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goMCk7XG5cbiAgICAgICAgICAgIHN5bmNRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCgxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBzeW5jUXVldWUuZXhlY3V0ZSgpO1xuXG4gICAgICAgIGFzc2VydC5kZWVwRXF1YWwocmVzdWx0cywgWzAsIDFdKTtcblxuICAgIH0pO1xuXG5cbn0pO1xuIl19