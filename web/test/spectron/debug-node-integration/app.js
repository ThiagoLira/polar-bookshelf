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
const SpectronRenderer_1 = require("../../../js/test/SpectronRenderer");
const Files_1 = require("polar-shared/src/util/Files");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    if (typeof require === 'function') {
        if (yield Files_1.Files.existsAsync("/home/burton/.polar")) {
            console.log("dir exists!");
        }
    }
    else {
        console.warn("No node integration");
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0VBQW1FO0FBQ25FLHVEQUFrRDtBQUVsRCxtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUVwRCxJQUFHLE9BQU8sT0FBTyxLQUFLLFVBQVUsRUFBRTtRQUM5QixJQUFHLE1BQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUI7S0FDSjtTQUFNO1FBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0tBQ3ZDO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25SZW5kZXJlcn0gZnJvbSAnLi4vLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlcyc7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgd2l0aGluIFNwZWN0cm9uUmVuZGVyZXIgbm93LlwiKTtcblxuICAgIGlmKHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKFwiL2hvbWUvYnVydG9uLy5wb2xhclwiKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXIgZXhpc3RzIVwiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIk5vIG5vZGUgaW50ZWdyYXRpb25cIik7XG4gICAgfVxufSk7XG4iXX0=