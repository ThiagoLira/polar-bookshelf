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
function exec() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exec()
    .then(() => log.info("done"))
    .catch(err => log.error("Failed: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEZWJ1Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQU90RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsU0FBZSxJQUFJOztJQXNCbkIsQ0FBQztDQUFBO0FBRUQsSUFBSSxFQUFFO0tBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDNUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtBbmtpU3luY0VuZ2luZX0gZnJvbSAnLi9BbmtpU3luY0VuZ2luZSc7XG5pbXBvcnQge01vY2tEb2NNZXRhc30gZnJvbSAnLi4vLi4vLi4vLi4vbWV0YWRhdGEvRG9jTWV0YXMnO1xuaW1wb3J0IHtNb2NrRmxhc2hjYXJkc30gZnJvbSAnLi4vLi4vLi4vLi4vbWV0YWRhdGEvRmxhc2hjYXJkcyc7XG5pbXBvcnQge0RvY01ldGFTZXR9IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0RvY01ldGFTZXQnO1xuaW1wb3J0IHtTeW5jUHJvZ3Jlc3NMaXN0ZW5lcn0gZnJvbSAnLi4vU3luY1Byb2dyZXNzTGlzdGVuZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWMoKSB7XG5cbiAgICAvLyBjcmVhdGUgYSBmYWtlIERvY01ldGEgd2l0aCBmbGFzaGNhcmRzIGFuZCBzeW5jIGl0IHRvIEFua2kgYW5kIHNlZSBpZiBpdFxuICAgIC8vIHdvcmtzXG4gICAgLy9cbiAgICAvLyBsZXQgZG9jTWV0YSA9IE1vY2tEb2NNZXRhcy5jcmVhdGVNb2NrRG9jTWV0YSgpO1xuICAgIC8vIGRvY01ldGEuZG9jSW5mby50aXRsZSA9ICdNb2NrIGRvY3VtZW50JztcbiAgICAvL1xuICAgIC8vIGRvY01ldGEgPSBNb2NrRmxhc2hjYXJkcy5hdHRhY2hGbGFzaGNhcmRzKGRvY01ldGEpO1xuICAgIC8vXG4gICAgLy8gbGV0IGFua2lTeW5jRW5naW5lID0gbmV3IEFua2lTeW5jRW5naW5lKCk7XG4gICAgLy9cbiAgICAvLyBsZXQgZG9jTWV0YVNldCA9IG5ldyBEb2NNZXRhU2V0KGRvY01ldGEpO1xuICAgIC8vXG4gICAgLy8gbGV0IHN5bmNQcm9ncmVzc0xpc3RlbmVyOiBTeW5jUHJvZ3Jlc3NMaXN0ZW5lciA9IHN5bmNQcm9ncmVzcyA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHN5bmNQcm9ncmVzcyk7XG4gICAgLy8gfTtcbiAgICAvL1xuICAgIC8vIGxldCBwZW5kaW5nU3luY0pvYiA9IGFua2lTeW5jRW5naW5lLnN5bmMoZG9jTWV0YVNldCwgc3luY1Byb2dyZXNzTGlzdGVuZXIpO1xuICAgIC8vXG4gICAgLy8gYXdhaXQgcGVuZGluZ1N5bmNKb2Iuc3RhcnQoKTtcblxufVxuXG5leGVjKClcbiAgICAudGhlbigoKSA9PiBsb2cuaW5mbyhcImRvbmVcIikpXG4gICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJGYWlsZWQ6IFwiLCBlcnIpKTtcbiJdfQ==