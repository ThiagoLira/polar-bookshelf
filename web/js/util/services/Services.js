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
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class Services {
    static start(...services) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = [];
            services.forEach(service => {
                log.info("Starting service: " + service.constructor.name);
                promises.push(service.start());
            });
            yield Promise.all(promises);
        });
    }
    static stop(serviceReferences) {
        Object.entries(serviceReferences).forEach(serviceReference => {
            let name = serviceReference[0];
            let service = serviceReference[1];
            let message = `Stopping service ${name}...`;
            log.info(message);
            service.stop();
            log.info(message + "done");
        });
    }
}
exports.Services = Services;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxRQUFRO0lBRVYsTUFBTSxDQUFPLEtBQUssQ0FBQyxHQUFHLFFBQTRCOztZQUVyRCxNQUFNLFFBQVEsR0FBbUIsRUFBRSxDQUFDO1lBRXBDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUQsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUUvQixDQUFDO0tBQUE7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFxRDtRQUU3RCxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFFekQsSUFBSSxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEMsSUFBSSxPQUFPLEdBQUcsb0JBQW9CLElBQUksS0FBSyxDQUFDO1lBRTVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRWYsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFL0IsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUFsQ0QsNEJBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdGFydGFibGVTZXJ2aWNlLCBTdG9wcGFibGVTZXJ2aWNlfSBmcm9tICcuL1NlcnZpY2UnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc3RhcnQoLi4uc2VydmljZXM6IFN0YXJ0YWJsZVNlcnZpY2VbXSkge1xuXG4gICAgICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdO1xuXG4gICAgICAgIHNlcnZpY2VzLmZvckVhY2goc2VydmljZSA9PiB7XG4gICAgICAgICAgICBsb2cuaW5mbyhcIlN0YXJ0aW5nIHNlcnZpY2U6IFwiICsgc2VydmljZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goc2VydmljZS5zdGFydCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cbiAgICB9XG5cbiAgICBzdGF0aWMgc3RvcChzZXJ2aWNlUmVmZXJlbmNlczoge1tuYW1lOiBzdHJpbmddOiBTdG9wcGFibGVTZXJ2aWNlfSk6IHZvaWQge1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHNlcnZpY2VSZWZlcmVuY2VzKS5mb3JFYWNoKHNlcnZpY2VSZWZlcmVuY2UgPT4ge1xuXG4gICAgICAgICAgICBsZXQgbmFtZSA9IHNlcnZpY2VSZWZlcmVuY2VbMF07XG4gICAgICAgICAgICBsZXQgc2VydmljZSA9IHNlcnZpY2VSZWZlcmVuY2VbMV07XG5cbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gYFN0b3BwaW5nIHNlcnZpY2UgJHtuYW1lfS4uLmA7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICBzZXJ2aWNlLnN0b3AoKTtcblxuICAgICAgICAgICAgbG9nLmluZm8obWVzc2FnZSArIFwiZG9uZVwiKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19