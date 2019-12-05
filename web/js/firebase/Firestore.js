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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = __importStar(require("./lib/firebase"));
const RendererAnalytics_1 = require("../ga/RendererAnalytics");
const Providers_1 = require("polar-shared/src/util/Providers");
const Firebase_1 = require("./Firebase");
const tracer = RendererAnalytics_1.RendererAnalytics.createTracer('firestore');
const opts = { enablePersistence: true };
class Firestore {
    static getInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            Firebase_1.Firebase.init();
            return yield this.firestoreProvider();
        });
    }
    static createInstance(opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield tracer.traceAsync('createInstance', () => __awaiter(this, void 0, void 0, function* () {
                const result = firebase.firestore();
                const settings = {};
                result.settings(settings);
                if (opts.enablePersistence) {
                    yield tracer.traceAsync('enablePersistence', () => __awaiter(this, void 0, void 0, function* () {
                        try {
                            yield result.enablePersistence({ synchronizeTabs: true });
                        }
                        catch (e) {
                            console.warn("Unable to use persistence. Data will not be cached locally: ", e);
                        }
                    }));
                }
                return result;
            }));
        });
    }
}
exports.Firestore = Firestore;
Firestore.firestoreProvider = Providers_1.AsyncProviders.memoize(() => __awaiter(void 0, void 0, void 0, function* () { return yield Firestore.createInstance(opts); }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlyZXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUEyQztBQUMzQywrREFBMEQ7QUFDMUQsK0RBQStEO0FBQy9ELHlDQUFvQztBQUVwQyxNQUFNLE1BQU0sR0FBRyxxQ0FBaUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFM0QsTUFBTSxJQUFJLEdBQXFCLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFDLENBQUM7QUFFekQsTUFBYSxTQUFTO0lBSVgsTUFBTSxDQUFPLFdBQVc7O1lBQzNCLG1CQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFaEIsT0FBTyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVPLE1BQU0sQ0FBTyxjQUFjLENBQUMsT0FBeUIsRUFBRTs7WUFFM0QsT0FBTyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsR0FBUyxFQUFFO2dCQUV4RCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRXBDLE1BQU0sUUFBUSxHQUFHLEVBRWhCLENBQUM7Z0JBRUYsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFMUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBSXhCLE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFTLEVBQUU7d0JBQ3BELElBQUk7NEJBQ0EsTUFBTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzt5QkFDM0Q7d0JBQUMsT0FBTSxDQUFDLEVBQUU7NEJBRVAsT0FBTyxDQUFDLElBQUksQ0FBQyw4REFBOEQsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDbkY7b0JBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztpQkFDTjtnQkFFRCxPQUFPLE1BQU0sQ0FBQztZQUVsQixDQUFDLENBQUEsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBOztBQXhDTCw4QkEwQ0M7QUF4Q2tCLDJCQUFpQixHQUFHLDBCQUFjLENBQUMsT0FBTyxDQUFDLEdBQVMsRUFBRSxrREFBQyxPQUFBLE1BQU0sU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQSxHQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4vbGliL2ZpcmViYXNlJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcbmltcG9ydCB7QXN5bmNQcm92aWRlcnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi9GaXJlYmFzZSc7XG5cbmNvbnN0IHRyYWNlciA9IFJlbmRlcmVyQW5hbHl0aWNzLmNyZWF0ZVRyYWNlcignZmlyZXN0b3JlJyk7XG5cbmNvbnN0IG9wdHM6IEZpcmVzdG9yZU9wdGlvbnMgPSB7ZW5hYmxlUGVyc2lzdGVuY2U6IHRydWV9O1xuXG5leHBvcnQgY2xhc3MgRmlyZXN0b3JlIHtcblxuICAgIHByaXZhdGUgc3RhdGljIGZpcmVzdG9yZVByb3ZpZGVyID0gQXN5bmNQcm92aWRlcnMubWVtb2l6ZShhc3luYyAoKSA9PiBhd2FpdCBGaXJlc3RvcmUuY3JlYXRlSW5zdGFuY2Uob3B0cykpO1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRJbnN0YW5jZSgpOiBQcm9taXNlPGZpcmViYXNlLmZpcmVzdG9yZS5GaXJlc3RvcmU+IHtcbiAgICAgICAgRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZpcmVzdG9yZVByb3ZpZGVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgY3JlYXRlSW5zdGFuY2Uob3B0czogRmlyZXN0b3JlT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxmaXJlYmFzZS5maXJlc3RvcmUuRmlyZXN0b3JlPiB7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRyYWNlci50cmFjZUFzeW5jKCdjcmVhdGVJbnN0YW5jZScsIGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgIC8vIHRpbWVzdGFtcHNJblNuYXBzaG90czogdHJ1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVzdWx0LnNldHRpbmdzKHNldHRpbmdzKTtcblxuICAgICAgICAgICAgaWYgKG9wdHMuZW5hYmxlUGVyc2lzdGVuY2UpIHtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgc2VlbXMgc3VwZXIgc2xvdyBhbmQgbm90IHN1cmUgd2h5LiAgVGhlIHRhYiBzeW5jXG4gICAgICAgICAgICAgICAgLy8gc2VlbXMgdG8gbm90IGltcGFjdCBwZXJmb3JtYW5jZSBhdCBhbGwuXG4gICAgICAgICAgICAgICAgYXdhaXQgdHJhY2VyLnRyYWNlQXN5bmMoJ2VuYWJsZVBlcnNpc3RlbmNlJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVzdWx0LmVuYWJsZVBlcnNpc3RlbmNlKHtzeW5jaHJvbml6ZVRhYnM6IHRydWV9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSd2ZSBwcm9iYWJseSBleGNlZWRlZCB0aGUgbG9jYWwgcXVvdGEgc28gd2UgY2FuJ3QgcnVuIHdpdGggY2FjaGluZyBmb3Igbm93LlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVW5hYmxlIHRvIHVzZSBwZXJzaXN0ZW5jZS4gRGF0YSB3aWxsIG5vdCBiZSBjYWNoZWQgbG9jYWxseTogXCIsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaXJlc3RvcmVPcHRpb25zIHtcbiAgICByZWFkb25seSBlbmFibGVQZXJzaXN0ZW5jZT86IGJvb2xlYW47XG59XG5cbiJdfQ==