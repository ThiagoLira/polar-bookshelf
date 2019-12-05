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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoggerDelegate_1 = require("polar-shared/src/logger/LoggerDelegate");
const FilteredLogger_1 = require("./FilteredLogger");
const ConsoleLogger_1 = require("polar-shared/src/logger/ConsoleLogger");
const LevelAnnotatingLogger_1 = require("./annotating/LevelAnnotatingLogger");
const VersionAnnotatingLogger_1 = require("./annotating/VersionAnnotatingLogger");
const Directories_1 = require("../datastore/Directories");
const LogLevel_1 = require("./LogLevel");
const Files_1 = require("polar-shared/src/util/Files");
const LogLevels_1 = require("./LogLevels");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const MultiLogger_1 = require("./MultiLogger");
const SentryLogger_1 = require("./SentryLogger");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const ElectronContextType_1 = require("../electron/context/ElectronContextType");
const ElectronContextTypes_1 = require("../electron/context/ElectronContextTypes");
const ToasterLogger_1 = require("./ToasterLogger");
const PersistentErrorLogger_1 = require("./PersistentErrorLogger");
const process_1 = __importDefault(require("process"));
const MemoryLogger_1 = require("./MemoryLogger");
const AppRuntime_1 = require("../AppRuntime");
const GALogger_1 = require("./GALogger");
class Logging {
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            const level = this.configuredLevel();
            const target = yield this.createTarget(level);
            yield this.initWithTarget(target);
        });
    }
    static initForTesting() {
        const level = this.configuredLevel();
        const target = new ConsoleLogger_1.ConsoleLogger();
        const delegate = new FilteredLogger_1.FilteredLogger(new VersionAnnotatingLogger_1.VersionAnnotatingLogger(new LevelAnnotatingLogger_1.LevelAnnotatingLogger(target)), level);
        LoggerDelegate_1.LoggerDelegate.set(delegate);
    }
    static initWithTarget(target) {
        return __awaiter(this, void 0, void 0, function* () {
            const lc = yield this.loggingConfig();
            const delegate = new FilteredLogger_1.FilteredLogger(new VersionAnnotatingLogger_1.VersionAnnotatingLogger(new LevelAnnotatingLogger_1.LevelAnnotatingLogger(target)), lc.level);
            LoggerDelegate_1.LoggerDelegate.set(delegate);
            const logger = LoggerDelegate_1.LoggerDelegate.get();
            logger.info(`Using logger: ${logger.name}: target=${lc.target}, level=${LogLevel_1.LogLevel[lc.level]}`);
        });
    }
    static createTarget(level) {
        return __awaiter(this, void 0, void 0, function* () {
            const loggers = [];
            const electronContext = ElectronContextTypes_1.ElectronContextTypes.create();
            if (level === LogLevel_1.LogLevel.WARN && SentryLogger_1.SentryLogger.isEnabled() && AppRuntime_1.AppRuntime.isElectron()) {
                loggers.push(new SentryLogger_1.SentryLogger());
            }
            if (['electron-renderer'].includes(AppRuntime_1.AppRuntime.get())) {
                loggers.push(new ToasterLogger_1.ToasterLogger());
            }
            if (['electron-renderer', 'browser'].includes(AppRuntime_1.AppRuntime.get())) {
                loggers.push(new GALogger_1.GALogger());
            }
            if (electronContext === ElectronContextType_1.ElectronContextType.RENDERER) {
                loggers.push(new MemoryLogger_1.MemoryLogger());
            }
            if (level === LogLevel_1.LogLevel.WARN && AppRuntime_1.AppRuntime.isElectron()) {
                loggers.push(yield PersistentErrorLogger_1.PersistentErrorLogger.create());
            }
            loggers.push(yield this.createPrimaryTarget());
            return new MultiLogger_1.MultiLogger(...loggers);
        });
    }
    static createPrimaryTarget() {
        return __awaiter(this, void 0, void 0, function* () {
            const loggingConfig = yield this.loggingConfig();
            if (loggingConfig.target === LoggerTarget.CONSOLE) {
                return new ConsoleLogger_1.ConsoleLogger();
            }
            else {
                throw new Error("Invalid target: " + loggingConfig.target);
            }
        });
    }
    static loggingConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            if (AppRuntime_1.AppRuntime.isElectron()) {
                const directories = yield new Directories_1.Directories().init();
                const path = FilePaths_1.FilePaths.join(directories.configDir, 'logging.json');
                if (yield Files_1.Files.existsAsync(path)) {
                    const buffer = yield Files_1.Files.readFileAsync(path);
                    const json = buffer.toString('utf8');
                    let config = JSON.parse(json);
                    if (typeof config.level === 'string') {
                        config = {
                            level: LogLevels_1.LogLevels.fromName(config.level),
                            target: config.target
                        };
                    }
                    return config;
                }
            }
            return {
                target: LoggerTarget.CONSOLE,
                level: this.configuredLevel()
            };
        });
    }
    static configuredLevel() {
        const isRendererContext = typeof window !== 'undefined';
        const fromENV = () => {
            return Optional_1.Optional.of(process_1.default.env.POLAR_LOG_LEVEL);
        };
        const fromStorage = (storage) => {
            return Optional_1.Optional.of(storage.getItem("POLAR_LOG_LEVEL"));
        };
        const fromLocalStorage = () => {
            if (isRendererContext) {
                return fromStorage(window.localStorage);
            }
            return Optional_1.Optional.empty();
        };
        const fromSessionStorage = () => {
            if (isRendererContext) {
                return fromStorage(window.sessionStorage);
            }
            return Optional_1.Optional.empty();
        };
        const level = Optional_1.Optional.first(fromENV(), fromLocalStorage(), fromSessionStorage())
            .map(level => LogLevels_1.LogLevels.fromName(level))
            .getOrElse(LogLevel_1.LogLevel.WARN);
        return level;
    }
}
exports.Logging = Logging;
var LoggerTarget;
(function (LoggerTarget) {
    LoggerTarget["CONSOLE"] = "CONSOLE";
})(LoggerTarget || (LoggerTarget = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvZ2dpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyRUFBc0U7QUFDdEUscURBQWdEO0FBQ2hELHlFQUFvRTtBQUNwRSw4RUFBeUU7QUFDekUsa0ZBQTZFO0FBRTdFLDBEQUFxRDtBQUNyRCx5Q0FBb0M7QUFDcEMsdURBQWtEO0FBQ2xELDJDQUFzQztBQUN0QyxnRUFBMkQ7QUFDM0QsK0NBQTBDO0FBQzFDLGlEQUE0QztBQUM1QywrREFBMEQ7QUFDMUQsaUZBQTRFO0FBQzVFLG1GQUE4RTtBQUM5RSxtREFBOEM7QUFDOUMsbUVBQThEO0FBRTlELHNEQUE4QjtBQUM5QixpREFBNEM7QUFFNUMsOENBQXlDO0FBQ3pDLHlDQUFvQztBQU1wQyxNQUFhLE9BQU87SUFLVCxNQUFNLENBQU8sSUFBSTs7WUFFcEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRXJDLE1BQU0sTUFBTSxHQUFZLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV2RCxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEMsQ0FBQztLQUFBO0lBS00sTUFBTSxDQUFDLGNBQWM7UUFFeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXJDLE1BQU0sTUFBTSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBRW5DLE1BQU0sUUFBUSxHQUNWLElBQUksK0JBQWMsQ0FDZCxJQUFJLGlEQUF1QixDQUN2QixJQUFJLDZDQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdkQsK0JBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFakMsQ0FBQztJQUVNLE1BQU0sQ0FBTyxjQUFjLENBQUMsTUFBZTs7WUFFOUMsTUFBTSxF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T0FBTyxtQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTVCLENBQUMsQ0FBQztRQUVGLE1BQU0sa0JBQWtCLEdBQUcsR0FBcUIsRUFBRTtZQUU5QyxJQUFJLGlCQUFpQixFQUFFO2dCQUNuQixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDN0M7WUFFRCxPQUFPLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFNUIsQ0FBQyxDQUFDO1FBRUYsTUFBTSxLQUFLLEdBQUcsbUJBQVEsQ0FBQyxLQUFLLENBQVMsT0FBTyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO2FBQ3BGLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZDLFNBQVMsQ0FBQyxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlCLE9BQU8sS0FBSyxDQUFDO0lBRWpCLENBQUM7Q0FFSjtBQWhNRCwwQkFnTUM7QUFFRCxJQUFLLFlBR0o7QUFIRCxXQUFLLFlBQVk7SUFDYixtQ0FBbUIsQ0FBQTtBQUV2QixDQUFDLEVBSEksWUFBWSxLQUFaLFlBQVksUUFHaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlckRlbGVnYXRlfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXJEZWxlZ2F0ZSc7XG5pbXBvcnQge0ZpbHRlcmVkTG9nZ2VyfSBmcm9tICcuL0ZpbHRlcmVkTG9nZ2VyJztcbmltcG9ydCB7Q29uc29sZUxvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvQ29uc29sZUxvZ2dlcic7XG5pbXBvcnQge0xldmVsQW5ub3RhdGluZ0xvZ2dlcn0gZnJvbSAnLi9hbm5vdGF0aW5nL0xldmVsQW5ub3RhdGluZ0xvZ2dlcic7XG5pbXBvcnQge1ZlcnNpb25Bbm5vdGF0aW5nTG9nZ2VyfSBmcm9tICcuL2Fubm90YXRpbmcvVmVyc2lvbkFubm90YXRpbmdMb2dnZXInO1xuaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9JTG9nZ2VyJztcbmltcG9ydCB7RGlyZWN0b3JpZXN9IGZyb20gJy4uL2RhdGFzdG9yZS9EaXJlY3Rvcmllcyc7XG5pbXBvcnQge0xvZ0xldmVsfSBmcm9tICcuL0xvZ0xldmVsJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge0xvZ0xldmVsc30gZnJvbSAnLi9Mb2dMZXZlbHMnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7TXVsdGlMb2dnZXJ9IGZyb20gJy4vTXVsdGlMb2dnZXInO1xuaW1wb3J0IHtTZW50cnlMb2dnZXJ9IGZyb20gJy4vU2VudHJ5TG9nZ2VyJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RWxlY3Ryb25Db250ZXh0VHlwZX0gZnJvbSAnLi4vZWxlY3Ryb24vY29udGV4dC9FbGVjdHJvbkNvbnRleHRUeXBlJztcbmltcG9ydCB7RWxlY3Ryb25Db250ZXh0VHlwZXN9IGZyb20gJy4uL2VsZWN0cm9uL2NvbnRleHQvRWxlY3Ryb25Db250ZXh0VHlwZXMnO1xuaW1wb3J0IHtUb2FzdGVyTG9nZ2VyfSBmcm9tICcuL1RvYXN0ZXJMb2dnZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW50RXJyb3JMb2dnZXJ9IGZyb20gJy4vUGVyc2lzdGVudEVycm9yTG9nZ2VyJztcblxuaW1wb3J0IHByb2Nlc3MgZnJvbSAncHJvY2Vzcyc7XG5pbXBvcnQge01lbW9yeUxvZ2dlcn0gZnJvbSAnLi9NZW1vcnlMb2dnZXInO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi9BcHBSdW50aW1lJztcbmltcG9ydCB7R0FMb2dnZXJ9IGZyb20gJy4vR0FMb2dnZXInO1xuXG4vKipcbiAqIE1haW50YWlucyBvdXIgZ2VuZXJhbCBsb2dnaW5nIGluZnJhc3RydWN0dXJlLiAgRGlmZmVyZW50aWF0ZWQgZnJvbSBMb2dnZXJcbiAqIHdoaWNoIHBlcmZvcm1zIHRoZSBhY3R1YWwgbG9nZ2luZyBvZiBtZXNzYWdlLiBUaGlzIG1haW50YWlucyBMb2dnZXJzLlxuICovXG5leHBvcnQgY2xhc3MgTG9nZ2luZyB7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoZSBsb2dnZXIgdG8gd3JpdGUgdG8gYSBzcGVjaWZpYyBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBpbml0KCkge1xuXG4gICAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5jb25maWd1cmVkTGV2ZWwoKTtcblxuICAgICAgICBjb25zdCB0YXJnZXQ6IElMb2dnZXIgPSBhd2FpdCB0aGlzLmNyZWF0ZVRhcmdldChsZXZlbCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5pbml0V2l0aFRhcmdldCh0YXJnZXQpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBhIGxvZ2dlciBzdWl0YWJsZSBmb3IgdGVzdGluZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGluaXRGb3JUZXN0aW5nKCkge1xuXG4gICAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5jb25maWd1cmVkTGV2ZWwoKTtcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBuZXcgQ29uc29sZUxvZ2dlcigpO1xuXG4gICAgICAgIGNvbnN0IGRlbGVnYXRlID1cbiAgICAgICAgICAgIG5ldyBGaWx0ZXJlZExvZ2dlcihcbiAgICAgICAgICAgICAgICBuZXcgVmVyc2lvbkFubm90YXRpbmdMb2dnZXIoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBMZXZlbEFubm90YXRpbmdMb2dnZXIodGFyZ2V0KSksIGxldmVsKTtcblxuICAgICAgICBMb2dnZXJEZWxlZ2F0ZS5zZXQoZGVsZWdhdGUpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBpbml0V2l0aFRhcmdldCh0YXJnZXQ6IElMb2dnZXIpIHtcblxuICAgICAgICBjb25zdCBsYyA9IGF3YWl0IHRoaXMubG9nZ2luZ0NvbmZpZygpO1xuXG4gICAgICAgIGNvbnN0IGRlbGVnYXRlID1cbiAgICAgICAgICAgIG5ldyBGaWx0ZXJlZExvZ2dlcihcbiAgICAgICAgICAgICAgICBuZXcgVmVyc2lvbkFubm90YXRpbmdMb2dnZXIoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBMZXZlbEFubm90YXRpbmdMb2dnZXIodGFyZ2V0KSksIGxjLmxldmVsKTtcblxuICAgICAgICBMb2dnZXJEZWxlZ2F0ZS5zZXQoZGVsZWdhdGUpO1xuXG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IExvZ2dlckRlbGVnYXRlLmdldCgpO1xuXG4gICAgICAgIGxvZ2dlci5pbmZvKGBVc2luZyBsb2dnZXI6ICR7bG9nZ2VyLm5hbWV9OiB0YXJnZXQ9JHtsYy50YXJnZXR9LCBsZXZlbD0ke0xvZ0xldmVsW2xjLmxldmVsXX1gKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlVGFyZ2V0KGxldmVsOiBMb2dMZXZlbCk6IFByb21pc2U8SUxvZ2dlcj4ge1xuXG4gICAgICAgIGNvbnN0IGxvZ2dlcnM6IElMb2dnZXJbXSA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGVsZWN0cm9uQ29udGV4dCA9IEVsZWN0cm9uQ29udGV4dFR5cGVzLmNyZWF0ZSgpO1xuXG4gICAgICAgIGlmIChsZXZlbCA9PT0gTG9nTGV2ZWwuV0FSTiAmJiBTZW50cnlMb2dnZXIuaXNFbmFibGVkKCkgJiYgQXBwUnVudGltZS5pc0VsZWN0cm9uKCkpIHtcbiAgICAgICAgICAgIC8vIFNlbnRyeUxvZ2dlciBlbmFibGVkIGZvciBJTkZPIHdpbGwgbG9jayB1cyB1cC5cbiAgICAgICAgICAgIC8vICoqKiBmaXJzdCBsb2dnZXIgaXMgc2VudHJ5IGJ1dCBvbmx5IGlmIHdlIGFyZSBub3QgcnVubmluZyB3aXRoaW5cbiAgICAgICAgICAgIC8vIGEgU05BUCBjb250YWluZXIuXG4gICAgICAgICAgICBsb2dnZXJzLnB1c2gobmV3IFNlbnRyeUxvZ2dlcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICoqKiBuZXh0IHVwIGlzIHRoZSBUb2FzdGVyIExvZ2dlciB0byB2aXN1YWxseSBzaG93IGVycm9ycy5cblxuICAgICAgICBpZiAoWydlbGVjdHJvbi1yZW5kZXJlciddLmluY2x1ZGVzKEFwcFJ1bnRpbWUuZ2V0KCkpKSB7XG4gICAgICAgICAgICAvLyB1c2UgYSBUb2FzdGVyTG9nZ2VyIHdoZW4gcnVubmluZyBpbiB0aGUgcmVuZGVyZXIgY29udGV4dCBzbyB0aGF0XG4gICAgICAgICAgICAvLyB3ZSBjYW4gYnJpbmcgdXAgZXJyb3IgbWVzc2FnZXMgZm9yIHRoZSB1c2VyLlxuICAgICAgICAgICAgbG9nZ2Vycy5wdXNoKG5ldyBUb2FzdGVyTG9nZ2VyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFsnZWxlY3Ryb24tcmVuZGVyZXInLCAnYnJvd3NlciddLmluY2x1ZGVzKEFwcFJ1bnRpbWUuZ2V0KCkpKSB7XG4gICAgICAgICAgICAvLyB1c2UgYSBUb2FzdGVyTG9nZ2VyIHdoZW4gcnVubmluZyBpbiB0aGUgcmVuZGVyZXIgY29udGV4dCBzbyB0aGF0XG4gICAgICAgICAgICAvLyB3ZSBjYW4gYnJpbmcgdXAgZXJyb3IgbWVzc2FnZXMgZm9yIHRoZSB1c2VyLlxuICAgICAgICAgICAgbG9nZ2Vycy5wdXNoKG5ldyBHQUxvZ2dlcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVjdHJvbkNvbnRleHQgPT09IEVsZWN0cm9uQ29udGV4dFR5cGUuUkVOREVSRVIpIHtcbiAgICAgICAgICAgIC8vIHdoZW4gaW4gdGhlIHJlbmRlcmVyIHVzZSB0aGUgbWVtb3J5IGxvZ2dlciBzbyB0aGF0IHdlIGNhbiBzaG93XG4gICAgICAgICAgICAvLyBsb2dzIGluIHRoZSBsb2cgdmlld1xuICAgICAgICAgICAgbG9nZ2Vycy5wdXNoKG5ldyBNZW1vcnlMb2dnZXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAqKiogbm93IGluY2x1ZGUgdGhlIHBlcnNpc3RlbnQgZXJyb3IgbG9nIHNvIHRoYXQgd2UgY2FuIGdldCBlcnJvclxuICAgICAgICAvLyByZXBvcnRzIGZyb20gdXNlcnMuXG5cbiAgICAgICAgaWYgKGxldmVsID09PSBMb2dMZXZlbC5XQVJOICYmIEFwcFJ1bnRpbWUuaXNFbGVjdHJvbigpKSB7XG4gICAgICAgICAgICAvLyBQZXJzaXN0ZW50RXJyb3JMb2dnZXIgZW5hYmxlZCBmb3IgSU5GTyB3aWxsIGxvY2sgdXMgdXAuXG4gICAgICAgICAgICBsb2dnZXJzLnB1c2goYXdhaXQgUGVyc2lzdGVudEVycm9yTG9nZ2VyLmNyZWF0ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICoqKiBsYXN0IGlzIHRoZSBwcmltYXJ5IGxvZy4gRWl0aGVyIGRpc2sgb3IgdGhlIGNvbnNvbGUuXG5cbiAgICAgICAgbG9nZ2Vycy5wdXNoKGF3YWl0IHRoaXMuY3JlYXRlUHJpbWFyeVRhcmdldCgpKTtcblxuICAgICAgICByZXR1cm4gbmV3IE11bHRpTG9nZ2VyKC4uLmxvZ2dlcnMpO1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZVByaW1hcnlUYXJnZXQoKTogUHJvbWlzZTxJTG9nZ2VyPiB7XG5cbiAgICAgICAgY29uc3QgbG9nZ2luZ0NvbmZpZyA9IGF3YWl0IHRoaXMubG9nZ2luZ0NvbmZpZygpO1xuXG4gICAgICAgIGlmIChsb2dnaW5nQ29uZmlnLnRhcmdldCA9PT0gTG9nZ2VyVGFyZ2V0LkNPTlNPTEUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zb2xlTG9nZ2VyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRhcmdldDogXCIgKyBsb2dnaW5nQ29uZmlnLnRhcmdldCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGxvZ2dpbmdDb25maWcoKTogUHJvbWlzZTxMb2dnaW5nQ29uZmlnPiB7XG5cbiAgICAgICAgaWYgKEFwcFJ1bnRpbWUuaXNFbGVjdHJvbigpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdG9yaWVzID0gYXdhaXQgbmV3IERpcmVjdG9yaWVzKCkuaW5pdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLmpvaW4oZGlyZWN0b3JpZXMuY29uZmlnRGlyLCAnbG9nZ2luZy5qc29uJyk7XG5cbiAgICAgICAgICAgIGlmIChhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhwYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gYnVmZmVyLnRvU3RyaW5nKCd1dGY4Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpZyA9IEpTT04ucGFyc2UoanNvbikgYXMgTG9nZ2luZ0NvbmZpZztcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uZmlnLmxldmVsID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5lZWRlZCB0byBjb252ZXJ0IHRoZSBzeW1ib2wgYmFjayB0byB0aGUgZW51bS4gIE5vdCBzdXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdmVyeSBjbGVhbiB0aG91Z2ggYW5kIHdpc2ggdGhlcmUgd2FzIGEgYmV0dGVyIHdheVxuICAgICAgICAgICAgICAgICAgICAvLyB0byBkbyB0aGlzLlxuXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBMb2dMZXZlbHMuZnJvbU5hbWUoY29uZmlnLmxldmVsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogY29uZmlnLnRhcmdldFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFyZ2V0OiBMb2dnZXJUYXJnZXQuQ09OU09MRSxcbiAgICAgICAgICAgIGxldmVsOiB0aGlzLmNvbmZpZ3VyZWRMZXZlbCgpXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjb25maWd1cmVkTGV2ZWwoKTogTG9nTGV2ZWwge1xuXG4gICAgICAgIGNvbnN0IGlzUmVuZGVyZXJDb250ZXh0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAgICAgY29uc3QgZnJvbUVOViA9ICgpOiBPcHRpb25hbDxzdHJpbmc+ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5vZihwcm9jZXNzLmVudi5QT0xBUl9MT0dfTEVWRUwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGZyb21TdG9yYWdlID0gKHN0b3JhZ2U6IFN0b3JhZ2UpOiBPcHRpb25hbDxzdHJpbmc+ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5vZihzdG9yYWdlLmdldEl0ZW0oXCJQT0xBUl9MT0dfTEVWRUxcIikpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGZyb21Mb2NhbFN0b3JhZ2UgPSAoKTogT3B0aW9uYWw8c3RyaW5nPiA9PiB7XG5cbiAgICAgICAgICAgIGlmIChpc1JlbmRlcmVyQ29udGV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tU3RvcmFnZSh3aW5kb3cubG9jYWxTdG9yYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLmVtcHR5KCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBmcm9tU2Vzc2lvblN0b3JhZ2UgPSAoKTogT3B0aW9uYWw8c3RyaW5nPiA9PiB7XG5cbiAgICAgICAgICAgIGlmIChpc1JlbmRlcmVyQ29udGV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tU3RvcmFnZSh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxldmVsID0gT3B0aW9uYWwuZmlyc3Q8c3RyaW5nPihmcm9tRU5WKCksIGZyb21Mb2NhbFN0b3JhZ2UoKSwgZnJvbVNlc3Npb25TdG9yYWdlKCkpXG4gICAgICAgICAgICAubWFwKGxldmVsID0+IExvZ0xldmVscy5mcm9tTmFtZShsZXZlbCkpXG4gICAgICAgICAgICAuZ2V0T3JFbHNlKExvZ0xldmVsLldBUk4pO1xuXG4gICAgICAgIHJldHVybiBsZXZlbDtcblxuICAgIH1cblxufVxuXG5lbnVtIExvZ2dlclRhcmdldCB7XG4gICAgQ09OU09MRSA9ICdDT05TT0xFJyxcbiAgICAvLyBESVNLID0gJ0RJU0snXG59XG5cbi8qKlxuICogQmFzaWMgZGlzayBjb25maWcgZm9yIG91ciBsb2cgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9nZ2luZ0NvbmZpZyB7XG4gICAgcmVhZG9ubHkgdGFyZ2V0OiBMb2dnZXJUYXJnZXQ7XG4gICAgcmVhZG9ubHkgbGV2ZWw6IExvZ0xldmVsO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nTWVzc2FnZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIHVuaXF1ZSBudW1iZXIgZm9yIHRoaXMgTG9nTWVzc2FnZSwganVzdCBuZWVkcyB0byBiZSB1bmlxdWUgdG8gdGhlXG4gICAgICogcHJvY2VzcyBhbmQgd2Ugc2hvdWxkIGJlIGFibGUgdG8gdXNlIGEgc2ltcGxlIG5vbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlkeDogbnVtYmVyO1xuXG4gICAgcmVhZG9ubHkgdGltZXN0YW1wOiBJU09EYXRlVGltZVN0cmluZztcblxuICAgIHJlYWRvbmx5IGxldmVsOiBMb2dMZXZlbE5hbWU7XG4gICAgcmVhZG9ubHkgbXNnOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgYXJnczogUmVhZG9ubHlBcnJheTxhbnk+O1xufVxuXG5leHBvcnQgdHlwZSBMb2dMZXZlbE5hbWUgPSAnbm90aWNlJyB8ICdpbmZvJyB8ICd3YXJuJyB8ICdlcnJvcicgfCAndmVyYm9zZScgfCAnZGVidWcnO1xuIl19