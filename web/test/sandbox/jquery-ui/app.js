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
const chai_1 = require("chai");
const RendererTestResultWriter_1 = require("../../../js/test/results/writer/RendererTestResultWriter");
const Dialog_1 = require("../../../js/ui/dialog/Dialog");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    chai_1.assert.notEqual($("h1"), null);
    let testResultWriter = new RendererTestResultWriter_1.RendererTestResultWriter();
    new Dialog_1.Dialog("#myDialog").show();
    chai_1.assert.notEqual($(".ui-dialog"), null);
    testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0VBQW1FO0FBQ25FLCtCQUE0QjtBQUM1Qix1R0FBa0c7QUFDbEcseURBQW9EO0FBRXBELG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBRXBELGFBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRS9CLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtREFBd0IsRUFBRSxDQUFDO0lBRXRELElBQUksZUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRy9CLGFBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXZDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVqQyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtSZW5kZXJlclRlc3RSZXN1bHRXcml0ZXJ9IGZyb20gJy4uLy4uLy4uL2pzL3Rlc3QvcmVzdWx0cy93cml0ZXIvUmVuZGVyZXJUZXN0UmVzdWx0V3JpdGVyJztcbmltcG9ydCB7RGlhbG9nfSBmcm9tICcuLi8uLi8uLi9qcy91aS9kaWFsb2cvRGlhbG9nJztcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoaW4gU3BlY3Ryb25SZW5kZXJlciBub3cuXCIpO1xuXG4gICAgYXNzZXJ0Lm5vdEVxdWFsKCQoXCJoMVwiKSwgbnVsbCk7XG5cbiAgICBsZXQgdGVzdFJlc3VsdFdyaXRlciA9IG5ldyBSZW5kZXJlclRlc3RSZXN1bHRXcml0ZXIoKTtcblxuICAgIG5ldyBEaWFsb2coXCIjbXlEaWFsb2dcIikuc2hvdygpO1xuXG4gICAgLy8gbm93IG1ha2Ugc3VyZSB0aGUgRE9NIGlzIHVwZGF0ZWRcbiAgICBhc3NlcnQubm90RXF1YWwoJChcIi51aS1kaWFsb2dcIiksIG51bGwpO1xuXG4gICAgdGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSk7XG4iXX0=