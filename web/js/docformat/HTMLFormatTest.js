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
const jsdom_1 = require("jsdom");
const HTMLFormat_1 = require("./HTMLFormat");
describe('HTMLFormat', function () {
    describe('currentDocFingerprint', function () {
        it("get", function () {
            const dom = new jsdom_1.JSDOM(HTML);
            global.document = dom.window.document;
            const htmlFormat = new HTMLFormat_1.HTMLFormat();
            chai_1.assert.equal(htmlFormat.currentDocFingerprint(), "0x0001");
        });
        it("set", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dom = new jsdom_1.JSDOM(HTML);
                global.document = dom.window.document;
                const htmlFormat = new HTMLFormat_1.HTMLFormat();
                htmlFormat.setCurrentDocFingerprint("0x9999");
                chai_1.assert.equal(htmlFormat.currentDocFingerprint(), "0x9999");
            });
        });
    });
});
const HTML = `
<html>
    <head>
        <meta name="polar-fingerprint" content="0x0001">                
    </head>
</html>
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTEZvcm1hdFRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIVE1MRm9ybWF0VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUEyQjtBQUMzQixpQ0FBNEI7QUFDNUIsNkNBQXdDO0FBSXhDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFFbkIsUUFBUSxDQUFDLHVCQUF1QixFQUFFO1FBRTlCLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFFTixNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU1QixNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBRXRDLE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1lBRXBDLGFBQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFL0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsS0FBSyxFQUFFOztnQkFDTixNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFNUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFFdEMsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7Z0JBRXBDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFFN0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUUvRCxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sSUFBSSxHQUFHOzs7Ozs7Q0FNWixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknXG5pbXBvcnQge0pTRE9NfSBmcm9tICdqc2RvbSc7XG5pbXBvcnQge0hUTUxGb3JtYXR9IGZyb20gXCIuL0hUTUxGb3JtYXRcIjtcblxuZGVjbGFyZSB2YXIgZ2xvYmFsOiBhbnk7XG5cbmRlc2NyaWJlKCdIVE1MRm9ybWF0JywgZnVuY3Rpb24oKSB7XG5cbiAgICBkZXNjcmliZSgnY3VycmVudERvY0ZpbmdlcnByaW50JywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJnZXRcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBjb25zdCBkb20gPSBuZXcgSlNET00oSFRNTCk7XG5cbiAgICAgICAgICAgIGdsb2JhbC5kb2N1bWVudCA9IGRvbS53aW5kb3cuZG9jdW1lbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWxGb3JtYXQgPSBuZXcgSFRNTEZvcm1hdCgpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoaHRtbEZvcm1hdC5jdXJyZW50RG9jRmluZ2VycHJpbnQoKSwgXCIweDAwMDFcIik7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJzZXRcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgZG9tID0gbmV3IEpTRE9NKEhUTUwpO1xuXG4gICAgICAgICAgICBnbG9iYWwuZG9jdW1lbnQgPSBkb20ud2luZG93LmRvY3VtZW50O1xuXG4gICAgICAgICAgICBjb25zdCBodG1sRm9ybWF0ID0gbmV3IEhUTUxGb3JtYXQoKTtcblxuICAgICAgICAgICAgaHRtbEZvcm1hdC5zZXRDdXJyZW50RG9jRmluZ2VycHJpbnQoXCIweDk5OTlcIilcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGh0bWxGb3JtYXQuY3VycmVudERvY0ZpbmdlcnByaW50KCksIFwiMHg5OTk5XCIpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuXG5jb25zdCBIVE1MID0gYFxuPGh0bWw+XG4gICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJwb2xhci1maW5nZXJwcmludFwiIGNvbnRlbnQ9XCIweDAwMDFcIj4gICAgICAgICAgICAgICAgXG4gICAgPC9oZWFkPlxuPC9odG1sPlxuYFxuIl19