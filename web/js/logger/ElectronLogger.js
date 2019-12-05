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
const ElectronContextTypes_1 = require("../electron/context/ElectronContextTypes");
const ElectronContextType_1 = require("../electron/context/ElectronContextType");
const Directories_1 = require("../datastore/Directories");
const delegate = require('electron-log');
class ElectronLogger {
    constructor() {
        this.name = 'electron-logger';
    }
    notice(msg, ...args) {
        delegate.log(msg, ...args);
    }
    info(msg, ...args) {
        delegate.log(msg, ...args);
    }
    warn(msg, ...args) {
        delegate.warn(msg, ...args);
    }
    error(msg, ...args) {
        delegate.error(msg, ...args);
    }
    verbose(msg, ...args) {
        delegate.verbose(msg, ...args);
    }
    debug(msg, ...args) {
        delegate.debug(msg, ...args);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
class ElectronLoggers {
    static create() {
        const directories = new Directories_1.Directories();
        if (ElectronContextTypes_1.ElectronContextTypes.create() === ElectronContextType_1.ElectronContextType.MAIN) {
            delegate.transports.console.level = "info";
            delegate.transports.console.format = "[{y}-{m}-{d} {h}:{i}:{s}.{ms} {z}] [{level}] {text}";
            delegate.transports.file.writeFile = `${directories.logsDir}/polar.log`;
            delegate.transports.file.format = "[{y}-{m}-{d} {h}:{i}:{s}.{ms} {z}] [{level}] {text}";
            delegate.transports.file.level = "info";
            delegate.transports.file.appName = "polar";
            console.log("Configured main electron logger writing to: " + directories.logsDir);
        }
        else {
            console.log("Skipping ElectronLogger initialization (running in renderer)");
        }
        return new ElectronLogger();
    }
}
exports.ElectronLoggers = ElectronLoggers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlY3Ryb25Mb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbGVjdHJvbkxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUtBLG1GQUE4RTtBQUM5RSxpRkFBNEU7QUFDNUUsMERBQXFEO0FBRXJELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUV6QyxNQUFNLGNBQWM7SUFBcEI7UUFFb0IsU0FBSSxHQUFXLGlCQUFpQixDQUFDO0lBOEJyRCxDQUFDO0lBNUJVLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3JDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLE9BQU8sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3RDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVZLElBQUk7O1FBRWpCLENBQUM7S0FBQTtDQUVKO0FBRUQsTUFBYSxlQUFlO0lBRWpCLE1BQU0sQ0FBQyxNQUFNO1FBRWhCLE1BQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBRXRDLElBQUksMkNBQW9CLENBQUMsTUFBTSxFQUFFLEtBQUsseUNBQW1CLENBQUMsSUFBSSxFQUFFO1lBRzVELFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDM0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLHFEQUFxRCxDQUFDO1lBSzNGLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxPQUFPLFlBQVksQ0FBQztZQUN4RSxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcscURBQXFELENBQUM7WUFFeEYsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUN4QyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBRXJGO2FBQU07WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7U0FDL0U7UUFFRCxPQUFPLElBQUksY0FBYyxFQUFFLENBQUM7SUFFaEMsQ0FBQztDQUVKO0FBL0JELDBDQStCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2ltcGxlIGxvZ2dlciB0aGF0IGp1c3Qgd3JpdGVzIHRvIHRoZSBjb25zb2xlLlxuICovXG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0lMb2dnZXInO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVzJztcbmltcG9ydCB7RWxlY3Ryb25Db250ZXh0VHlwZXN9IGZyb20gJy4uL2VsZWN0cm9uL2NvbnRleHQvRWxlY3Ryb25Db250ZXh0VHlwZXMnO1xuaW1wb3J0IHtFbGVjdHJvbkNvbnRleHRUeXBlfSBmcm9tICcuLi9lbGVjdHJvbi9jb250ZXh0L0VsZWN0cm9uQ29udGV4dFR5cGUnO1xuaW1wb3J0IHtEaXJlY3Rvcmllc30gZnJvbSAnLi4vZGF0YXN0b3JlL0RpcmVjdG9yaWVzJztcblxuY29uc3QgZGVsZWdhdGUgPSByZXF1aXJlKCdlbGVjdHJvbi1sb2cnKTtcblxuY2xhc3MgRWxlY3Ryb25Mb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcgPSAnZWxlY3Ryb24tbG9nZ2VyJztcblxuICAgIHB1YmxpYyBub3RpY2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGRlbGVnYXRlLmxvZyhtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBkZWxlZ2F0ZS5sb2cobXNnLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd2Fybihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgZGVsZWdhdGUud2Fybihtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgZGVsZWdhdGUuZXJyb3IobXNnLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmVyYm9zZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgZGVsZWdhdGUudmVyYm9zZShtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWJ1Zyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgZGVsZWdhdGUuZGVidWcobXNnLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgRWxlY3Ryb25Mb2dnZXJzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCkge1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdG9yaWVzID0gbmV3IERpcmVjdG9yaWVzKCk7XG5cbiAgICAgICAgaWYgKEVsZWN0cm9uQ29udGV4dFR5cGVzLmNyZWF0ZSgpID09PSBFbGVjdHJvbkNvbnRleHRUeXBlLk1BSU4pIHtcblxuICAgICAgICAgICAgLy8gKioqIGNvbmZpZ3VyZSBjb25zb2xlXG4gICAgICAgICAgICBkZWxlZ2F0ZS50cmFuc3BvcnRzLmNvbnNvbGUubGV2ZWwgPSBcImluZm9cIjtcbiAgICAgICAgICAgIGRlbGVnYXRlLnRyYW5zcG9ydHMuY29uc29sZS5mb3JtYXQgPSBcIlt7eX0te219LXtkfSB7aH06e2l9OntzfS57bXN9IHt6fV0gW3tsZXZlbH1dIHt0ZXh0fVwiO1xuXG4gICAgICAgICAgICAvLyAqKiogY29uZmlndXJlIGZpbGVcblxuICAgICAgICAgICAgLy8gc2V0IHRoZSBkaXJlY3RvcnkgbmFtZSBwcm9wZXJseVxuICAgICAgICAgICAgZGVsZWdhdGUudHJhbnNwb3J0cy5maWxlLndyaXRlRmlsZSA9IGAke2RpcmVjdG9yaWVzLmxvZ3NEaXJ9L3BvbGFyLmxvZ2A7XG4gICAgICAgICAgICBkZWxlZ2F0ZS50cmFuc3BvcnRzLmZpbGUuZm9ybWF0ID0gXCJbe3l9LXttfS17ZH0ge2h9OntpfTp7c30ue21zfSB7en1dIFt7bGV2ZWx9XSB7dGV4dH1cIjtcblxuICAgICAgICAgICAgZGVsZWdhdGUudHJhbnNwb3J0cy5maWxlLmxldmVsID0gXCJpbmZvXCI7XG4gICAgICAgICAgICBkZWxlZ2F0ZS50cmFuc3BvcnRzLmZpbGUuYXBwTmFtZSA9IFwicG9sYXJcIjtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25maWd1cmVkIG1haW4gZWxlY3Ryb24gbG9nZ2VyIHdyaXRpbmcgdG86IFwiICsgZGlyZWN0b3JpZXMubG9nc0Rpcik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2tpcHBpbmcgRWxlY3Ryb25Mb2dnZXIgaW5pdGlhbGl6YXRpb24gKHJ1bm5pbmcgaW4gcmVuZGVyZXIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBFbGVjdHJvbkxvZ2dlcigpO1xuXG4gICAgfVxuXG59XG4iXX0=