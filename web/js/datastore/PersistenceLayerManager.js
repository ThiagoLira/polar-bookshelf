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
const SimpleReactor_1 = require("../reactor/SimpleReactor");
const RemotePersistenceLayerFactory_1 = require("./factories/RemotePersistenceLayerFactory");
const CloudPersistenceLayerFactory_1 = require("./factories/CloudPersistenceLayerFactory");
const Logger_1 = require("polar-shared/src/logger/Logger");
const RendererAnalytics_1 = require("../ga/RendererAnalytics");
const WebPersistenceLayerFactory_1 = require("./factories/WebPersistenceLayerFactory");
const AppRuntime_1 = require("../AppRuntime");
const Latch_1 = require("polar-shared/src/util/Latch");
const log = Logger_1.Logger.create();
const RESET_KEY = 'polar-persistence-layer-reset';
class PersistenceLayerManager {
    constructor(opts) {
        this.opts = opts;
        this.persistenceLayerManagerEventDispatcher = new SimpleReactor_1.SimpleReactor();
        this.initialized = new Latch_1.Latch();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let type = PersistenceLayerTypes.get();
            if (this.requiresReset()) {
                log.info("Going go reset and deactivate current datastore: " + type);
                const deactivatePersistenceLayer = this.createPersistenceLayer(type);
                yield deactivatePersistenceLayer.deactivate();
                this.clearReset();
                type = 'local';
                PersistenceLayerTypes.set(type);
            }
            yield this.change(type);
            this.initialized.resolve(true);
            this.listenForPersistenceLayerChange();
        });
    }
    get() {
        return this.persistenceLayer;
    }
    getAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialized.get();
            return this.get();
        });
    }
    currentType() {
        return this.current;
    }
    change(type) {
        return __awaiter(this, void 0, void 0, function* () {
            if (AppRuntime_1.AppRuntime.isBrowser() && this.persistenceLayer) {
                log.warn("Only 'web' persistence layers supported in browsers");
                return false;
            }
            if (this.current === type) {
                return false;
            }
            PersistenceLayerTypes.set(type);
            if (this.persistenceLayer) {
                log.info("Stopping persistence layer...");
                this.dispatchEvent({ persistenceLayer: this.persistenceLayer, state: 'stopping' });
                yield this.persistenceLayer.createBackup();
                yield this.persistenceLayer.stop();
                log.info("Stopped persistence layer...");
                this.dispatchEvent({ persistenceLayer: this.persistenceLayer, state: 'stopped' });
            }
            this.current = type;
            this.persistenceLayer = this.createPersistenceLayer(type);
            this.dispatchEvent({ persistenceLayer: this.persistenceLayer, state: 'changed' });
            log.info("Changed to persistence layer: " + type);
            yield this.persistenceLayer.init(err => {
            }, this.opts);
            this.dispatchEvent({ persistenceLayer: this.persistenceLayer, state: 'initialized' });
            log.info("Initialized persistence layer: " + type);
            RendererAnalytics_1.RendererAnalytics.event({ category: 'persistence-layer', action: 'changed-to-' + type });
            return true;
        });
    }
    reset() {
        log.info("Datastore reset");
        window.localStorage.setItem(RESET_KEY, 'true');
    }
    requiresReset() {
        return window.localStorage.getItem(RESET_KEY) === 'true';
    }
    clearReset() {
        return window.localStorage.removeItem(RESET_KEY);
    }
    createPersistenceLayer(type) {
        if (AppRuntime_1.AppRuntime.isBrowser()) {
            if (type !== 'web') {
                log.warn(`Only web type supported in browsers (requested type: ${type})`);
                type = 'web';
            }
        }
        if (type === 'web') {
            return WebPersistenceLayerFactory_1.WebPersistenceLayerFactory.create();
        }
        if (type === 'local') {
            return RemotePersistenceLayerFactory_1.RemotePersistenceLayerFactory.create();
        }
        if (type === 'cloud') {
            return CloudPersistenceLayerFactory_1.CloudPersistenceLayerFactory.create();
        }
        throw new Error("Unknown type: " + type);
    }
    addEventListener(listener, fireWithExisting) {
        if (fireWithExisting && this.get()) {
            listener({ persistenceLayer: this.get(), state: fireWithExisting });
        }
        return this.persistenceLayerManagerEventDispatcher.addEventListener(listener);
    }
    dispatchEvent(event) {
        this.persistenceLayerManagerEventDispatcher.dispatchEvent(event);
    }
    listenForPersistenceLayerChange() {
        const whenChanged = (callback) => {
            let type = PersistenceLayerTypes.get();
            window.addEventListener('storage', () => {
                const newType = PersistenceLayerTypes.get();
                if (newType !== type) {
                    try {
                        callback(newType);
                    }
                    finally {
                        type = newType;
                    }
                }
            });
        };
        whenChanged((type) => {
            this.change(type)
                .catch(err => log.error("Unable to change to type: " + type));
        });
    }
}
exports.PersistenceLayerManager = PersistenceLayerManager;
class PersistenceLayerTypes {
    static get() {
        if (AppRuntime_1.AppRuntime.isBrowser()) {
            return 'web';
        }
        const currentType = window.localStorage.getItem(this.KEY);
        if (!currentType) {
            return 'local';
        }
        if (currentType === 'local' || currentType === 'cloud') {
            return currentType;
        }
        throw new Error("Unknown type: " + currentType);
    }
    static set(type) {
        window.localStorage.setItem(this.KEY, type);
    }
}
exports.PersistenceLayerTypes = PersistenceLayerTypes;
PersistenceLayerTypes.KEY = 'polar-persistence-layer';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc2lzdGVuY2VMYXllck1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQZXJzaXN0ZW5jZUxheWVyTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDREQUF5RTtBQUN6RSw2RkFBd0Y7QUFDeEYsMkZBQXNGO0FBR3RGLDJEQUFzRDtBQUN0RCwrREFBMEQ7QUFDMUQsdUZBQWtGO0FBQ2xGLDhDQUF5QztBQUV6Qyx1REFBa0Q7QUFFbEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sU0FBUyxHQUFHLCtCQUErQixDQUFDO0FBRWxELE1BQWEsdUJBQXVCO0lBYWhDLFlBQTZCLElBQXdCO1FBQXhCLFNBQUksR0FBSixJQUFJLENBQW9CO1FBWHBDLDJDQUFzQyxHQUFtRCxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQVN0SCxnQkFBVyxHQUFHLElBQUksYUFBSyxFQUFXLENBQUM7SUFJM0MsQ0FBQztJQUVZLEtBQUs7O1lBRWQsSUFBSSxJQUFJLEdBQUcscUJBQXFCLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFdkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7Z0JBRXRCLEdBQUcsQ0FBQyxJQUFJLENBQUMsbURBQW1ELEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBRXJFLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVyRSxNQUFNLDBCQUEwQixDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUU5QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBR2xCLElBQUksR0FBRyxPQUFPLENBQUM7Z0JBQ2YscUJBQXFCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBRW5DO1lBRUQsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMs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Q0FBQyxDQUFDO0lBRXBELENBQUM7SUFFTSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQTBCO1FBQ3hDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7QUE3Qkwsc0RBK0JDO0FBN0IyQix5QkFBRyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRXZlbnREaXNwYXRjaGVyLCBTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtSZW1vdGVQZXJzaXN0ZW5jZUxheWVyRmFjdG9yeX0gZnJvbSAnLi9mYWN0b3JpZXMvUmVtb3RlUGVyc2lzdGVuY2VMYXllckZhY3RvcnknO1xuaW1wb3J0IHtDbG91ZFBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5fSBmcm9tIFwiLi9mYWN0b3JpZXMvQ2xvdWRQZXJzaXN0ZW5jZUxheWVyRmFjdG9yeVwiO1xuaW1wb3J0IHtJUHJvdmlkZXJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvUHJvdmlkZXJzXCI7XG5pbXBvcnQge0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuL0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5pbXBvcnQge1dlYlBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5fSBmcm9tICcuL2ZhY3Rvcmllcy9XZWJQZXJzaXN0ZW5jZUxheWVyRmFjdG9yeSc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uL0FwcFJ1bnRpbWUnO1xuaW1wb3J0IHtEYXRhc3RvcmVJbml0T3B0c30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9MYXRjaFwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IFJFU0VUX0tFWSA9ICdwb2xhci1wZXJzaXN0ZW5jZS1sYXllci1yZXNldCc7XG5cbmV4cG9ydCBjbGFzcyBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlciBpbXBsZW1lbnRzIElQcm92aWRlcjxMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcj4ge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlckV2ZW50RGlzcGF0Y2hlcjogSUV2ZW50RGlzcGF0Y2hlcjxQZXJzaXN0ZW5jZUxheWVyTWFuYWdlckV2ZW50PiA9IG5ldyBTaW1wbGVSZWFjdG9yKCk7XG5cbiAgICBwcml2YXRlIHBlcnNpc3RlbmNlTGF5ZXI/OiBMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBlcnNpc3RlbmNlIHR5cGUgaW4gcGxhY2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjdXJyZW50PzogUGVyc2lzdGVuY2VMYXllclR5cGU7XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVkID0gbmV3IExhdGNoPGJvb2xlYW4+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG9wdHM/OiBEYXRhc3RvcmVJbml0T3B0cykge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGxldCB0eXBlID0gUGVyc2lzdGVuY2VMYXllclR5cGVzLmdldCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVzUmVzZXQoKSkge1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkdvaW5nIGdvIHJlc2V0IGFuZCBkZWFjdGl2YXRlIGN1cnJlbnQgZGF0YXN0b3JlOiBcIiArIHR5cGUpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWFjdGl2YXRlUGVyc2lzdGVuY2VMYXllciA9IHRoaXMuY3JlYXRlUGVyc2lzdGVuY2VMYXllcih0eXBlKTtcblxuICAgICAgICAgICAgYXdhaXQgZGVhY3RpdmF0ZVBlcnNpc3RlbmNlTGF5ZXIuZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmNsZWFyUmVzZXQoKTtcblxuICAgICAgICAgICAgLy8gbm93IGdvIHdpdGggbG9jYWxcbiAgICAgICAgICAgIHR5cGUgPSAnbG9jYWwnO1xuICAgICAgICAgICAgUGVyc2lzdGVuY2VMYXllclR5cGVzLnNldCh0eXBlKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5jaGFuZ2UodHlwZSk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQucmVzb2x2ZSh0cnVlKTtcblxuICAgICAgICAvLyBub3cgd2UgaGF2ZSB0byBsaXN0ZW4gYW5kIGF1dG8tY2hhbmdlIGlmIHdlJ3ZlIHN3aXRjaGVkIGluIGFub3RoZXJcbiAgICAgICAgdGhpcy5saXN0ZW5Gb3JQZXJzaXN0ZW5jZUxheWVyQ2hhbmdlKCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KCk6IExpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyc2lzdGVuY2VMYXllciE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGJ1dCB3YWl0cyBmb3IgdGhlIGZpcnN0IHBlcnNpc3RlbmNlIGxheWVyIHRvIGJlIGluaXRpYWxpemVkIGFuZCBhZnRlclxuICAgICAqIHRoYXQgcmV0dXJucyBqdXN0IHRoZSBjdXJyZW50IG9uZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0QXN5bmMoKTogUHJvbWlzZTxMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcj4ge1xuICAgICAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVkLmdldCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBjdXJyZW50VHlwZSgpOiBQZXJzaXN0ZW5jZUxheWVyVHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBwZXJzaXN0ZW5jZSBsYXllciB3aGVuIG5lZWRlZC4gUmV0dXJuIHRydWUgd2hlbiBjaGFuZ2VkIG9yXG4gICAgICogZmFsc2UgaWYgd2UncmUgYWxyZWFkeSB1c2luZyB0aGlzIHR5cGUuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgY2hhbmdlKHR5cGU6IFBlcnNpc3RlbmNlTGF5ZXJUeXBlKSB7XG5cbiAgICAgICAgaWYgKEFwcFJ1bnRpbWUuaXNCcm93c2VyKCkgJiYgdGhpcy5wZXJzaXN0ZW5jZUxheWVyKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIGEgd29ya2Fyb3VuZCBmb3IgdGhlIGJyb3dzZXIuICBXZSBzaG91bGQgaWRlYWxseVxuICAgICAgICAgICAgLy8gc3VwcG9ydCBzb21lIHR5cGUgb2YgY2xhc3Mgb2YgZGF0YXN0b3JlcyBhbmQgKGxvY2FsIGFuZCBjbG91ZClcbiAgICAgICAgICAgIC8vIGFuZCB0aGVpciBhY3R1YWwgaW1wbGVtZW50YXRpb24gKHJlbW90ZSwgZmlyZWJhc2UsIGNsb3VkLWF3YXJlKS5cbiAgICAgICAgICAgIC8vIFRoZW4gdG9nZ2xlIG9uIHRoZSBhY3R1YWwgaW1wbGVtZW50YXRpb24gYW5kIG9ubHkgY2hhbmdlIGl0IHdoZW5cbiAgICAgICAgICAgIC8vIHRoZSBpbXBsIGNoYW5nZXMuXG4gICAgICAgICAgICBsb2cud2FybihcIk9ubHkgJ3dlYicgcGVyc2lzdGVuY2UgbGF5ZXJzIHN1cHBvcnRlZCBpbiBicm93c2Vyc1wiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFBlcnNpc3RlbmNlTGF5ZXJUeXBlcy5zZXQodHlwZSk7XG5cbiAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVuY2VMYXllcikge1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIlN0b3BwaW5nIHBlcnNpc3RlbmNlIGxheWVyLi4uXCIpO1xuXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoe3BlcnNpc3RlbmNlTGF5ZXI6IHRoaXMucGVyc2lzdGVuY2VMYXllciwgc3RhdGU6ICdzdG9wcGluZyd9KTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgYmFja3VwIGZpcnN0LiAgVGhpcyBvbmx5IGFwcGxpZXMgdG8gdGhlIERpc2tEYXRhc3RvcmVcbiAgICAgICAgICAgIC8vIGJ1dCB0aGlzIHdheSB3ZSBoYXZlIGEgYmFja3VwIGJlZm9yZSB3ZSBnbyBvbmxpbmUgdG8gdGhlIGNsb3VkXG4gICAgICAgICAgICAvLyBkYXRhc3RvcmUgc28gaWYgaXQgc2NyZXdzIHVwIGZpbGVzIHdlJ3JlIG9rLlxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wZXJzaXN0ZW5jZUxheWVyLmNyZWF0ZUJhY2t1cCgpO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIuc3RvcCgpO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIlN0b3BwZWQgcGVyc2lzdGVuY2UgbGF5ZXIuLi5cIik7XG5cbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7cGVyc2lzdGVuY2VMYXllcjogdGhpcy5wZXJzaXN0ZW5jZUxheWVyLCBzdGF0ZTogJ3N0b3BwZWQnfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHR5cGU7XG5cbiAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZUxheWVyID0gdGhpcy5jcmVhdGVQZXJzaXN0ZW5jZUxheWVyKHR5cGUpO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7cGVyc2lzdGVuY2VMYXllcjogdGhpcy5wZXJzaXN0ZW5jZUxheWVyLCBzdGF0ZTogJ2NoYW5nZWQnfSk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJDaGFuZ2VkIHRvIHBlcnNpc3RlbmNlIGxheWVyOiBcIiArIHR5cGUpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMucGVyc2lzdGVuY2VMYXllci5pbml0KGVyciA9PiB7XG4gICAgICAgICAgICAvLyBub29wXG4gICAgICAgIH0sIHRoaXMub3B0cyk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHtwZXJzaXN0ZW5jZUxheWVyOiB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIsIHN0YXRlOiAnaW5pdGlhbGl6ZWQnfSk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJJbml0aWFsaXplZCBwZXJzaXN0ZW5jZSBsYXllcjogXCIgKyB0eXBlKTtcblxuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdwZXJzaXN0ZW5jZS1sYXllcicsIGFjdGlvbjogJ2NoYW5nZWQtdG8tJyArIHR5cGV9KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgbG9nLmluZm8oXCJEYXRhc3RvcmUgcmVzZXRcIik7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShSRVNFVF9LRVksICd0cnVlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlcXVpcmVzUmVzZXQoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUkVTRVRfS0VZKSA9PT0gJ3RydWUnO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclJlc2V0KCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFJFU0VUX0tFWSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVQZXJzaXN0ZW5jZUxheWVyKHR5cGU6IFBlcnNpc3RlbmNlTGF5ZXJUeXBlKTogTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXIge1xuXG4gICAgICAgIGlmIChBcHBSdW50aW1lLmlzQnJvd3NlcigpKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlICE9PSAnd2ViJykge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuKGBPbmx5IHdlYiB0eXBlIHN1cHBvcnRlZCBpbiBicm93c2VycyAocmVxdWVzdGVkIHR5cGU6ICR7dHlwZX0pYCk7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICd3ZWInO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3dlYicpIHtcbiAgICAgICAgICAgIHJldHVybiBXZWJQZXJzaXN0ZW5jZUxheWVyRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbG9jYWwnKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVtb3RlUGVyc2lzdGVuY2VMYXllckZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2Nsb3VkJykge1xuICAgICAgICAgICAgcmV0dXJuIENsb3VkUGVyc2lzdGVuY2VMYXllckZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHR5cGU6IFwiICsgdHlwZSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXJFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmVXaXRoRXhpc3Rpbmc/OiAnY2hhbmdlZCcgfCAnaW5pdGlhbGl6ZWQnKSB7XG5cbiAgICAgICAgaWYgKGZpcmVXaXRoRXhpc3RpbmcgJiYgdGhpcy5nZXQoKSkge1xuICAgICAgICAgICAgbGlzdGVuZXIoe3BlcnNpc3RlbmNlTGF5ZXI6IHRoaXMuZ2V0KCksIHN0YXRlOiBmaXJlV2l0aEV4aXN0aW5nfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlckV2ZW50RGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlckV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkZvclBlcnNpc3RlbmNlTGF5ZXJDaGFuZ2UoKSB7XG5cbiAgICAgICAgY29uc3Qgd2hlbkNoYW5nZWQgPSAoY2FsbGJhY2s6ICh0eXBlOiBQZXJzaXN0ZW5jZUxheWVyVHlwZSkgPT4gdm9pZCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgdHlwZSA9IFBlcnNpc3RlbmNlTGF5ZXJUeXBlcy5nZXQoKTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUeXBlID0gUGVyc2lzdGVuY2VMYXllclR5cGVzLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5ld1R5cGUgIT09IHR5cGUpIHtcblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXdUeXBlKTtcblxuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IG5ld1R5cGU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB3aGVuQ2hhbmdlZCgodHlwZSkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmNoYW5nZSh0eXBlKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGNoYW5nZSB0byB0eXBlOiBcIiArIHR5cGUpKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBQZXJzaXN0ZW5jZUxheWVyVHlwZSA9ICdsb2NhbCcgfCAnY2xvdWQnIHwgJ3dlYic7XG5cbi8qKlxuICogVGhlIHN0YXRlIG9mIHRoZSBwZXJzaXN0ZW5jZSBsYXllci5cbiAqXG4gKiBUaGUgcHJvY2VlZGluZyBnbyBpbiB0aGUgZm9sbG93aW5nIG9yZGVyIGFuZCBjYW4gbm90IGdvIGJhY2s6XG4gKlxuICogLSBjaGFuZ2VkICAgICAgICAgLSBjaGFuZ2UgdG8gYSBuZXcgcGVyc2lzdGVuY2UgbGF5ZXIgd2hpY2ggaGFzIGJlZW4gY3JlYXRlZFxuICogICAgICAgICAgICAgICAgICAgICBidXQgbm90IHlldCBpbml0aWFsaXplZC5cbiAqIC0gaW5pdGlhbGl6ZWQgICAgIC0gaW5pdCBoYXMgYmVlbiBjYWxsZWQuXG4gKiAtIHN0b3BwaW5nICAgICAgICAtIGFib3V0IHRvIGNhbGwgc3RvcCgpXG4gKiAtIHN0b3BwZWQgICAgICAgICAtIHN0b3BwZWRcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIFBlcnNpc3RlbmNlTGF5ZXJTdGF0ZSA9ICdjaGFuZ2VkJyB8ICdpbml0aWFsaXplZCcgfCAnc3RvcHBpbmcnIHwgJ3N0b3BwZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyRXZlbnQge1xuXG4gICAgcmVhZG9ubHkgc3RhdGU6IFBlcnNpc3RlbmNlTGF5ZXJTdGF0ZTtcblxuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXI6IExpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyO1xuXG59XG5cbmV4cG9ydCB0eXBlIFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyRXZlbnRMaXN0ZW5lciA9IChldmVudDogUGVyc2lzdGVuY2VMYXllck1hbmFnZXJFdmVudCkgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIFBlcnNpc3RlbmNlTGF5ZXJUeXBlcyB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBLRVkgPSAncG9sYXItcGVyc2lzdGVuY2UtbGF5ZXInO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXQoKTogUGVyc2lzdGVuY2VMYXllclR5cGUge1xuXG4gICAgICAgIGlmIChBcHBSdW50aW1lLmlzQnJvd3NlcigpKSB7XG5cbiAgICAgICAgICAgIC8vIHdlIGFyZSBBTFdBWVMgdXNpbmcgZmlyZWJhc2Ugd2hlbiBpbiB0aGUgYnJvd3NlciBhbmQgdGhlcmUgaXMgbm9cbiAgICAgICAgICAgIC8vIG90aGVyIG9wdGlvbi5cbiAgICAgICAgICAgIHJldHVybiAnd2ViJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUeXBlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuS0VZKTtcblxuICAgICAgICBpZiAoISBjdXJyZW50VHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuICdsb2NhbCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFR5cGUgPT09ICdsb2NhbCcgfHwgY3VycmVudFR5cGUgPT09ICdjbG91ZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50VHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdHlwZTogXCIgKyBjdXJyZW50VHlwZSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldCh0eXBlOiBQZXJzaXN0ZW5jZUxheWVyVHlwZSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5LRVksIHR5cGUpO1xuICAgIH1cblxufVxuXG4iXX0=