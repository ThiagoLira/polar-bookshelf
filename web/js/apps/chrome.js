"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Launcher_1 = require("./Launcher");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
new Launcher_1.Launcher().launch()
    .then(() => log.info("App now loaded."))
    .catch(err => log.error(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hyb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hyb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQW9DO0FBQ3BDLDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsSUFBSSxtQkFBUSxFQUFFLENBQUMsTUFBTSxFQUFFO0tBQ2xCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDdkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMYXVuY2hlcn0gZnJvbSAnLi9MYXVuY2hlcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5uZXcgTGF1bmNoZXIoKS5sYXVuY2goKVxuICAgIC50aGVuKCgpID0+IGxvZy5pbmZvKFwiQXBwIG5vdyBsb2FkZWQuXCIpKVxuICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKGVycikpO1xuXG5cbiJdfQ==