"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Attributes_1 = require("./Attributes");
const jsdom_1 = require("jsdom");
describe('Attributes', function () {
    describe('parse', function () {
        it("get", function () {
            const dom = new jsdom_1.JSDOM("<body><div data-foo='bar' data-cat-dog='dog' data-one-two-three-four='dog'></div></body>");
            console.log(dom.window.document.body.firstChild);
            const body = dom.window.document.body;
            const div = body.firstElementChild;
            const dataAttributeMap = Attributes_1.Attributes.dataToMap(div);
            chai_1.assert.deepEqual(dataAttributeMap, {
                foo: 'bar',
                catDog: 'dog',
                oneTwoThreeFour: 'dog'
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBdHRyaWJ1dGVzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUM1Qiw2Q0FBd0M7QUFDeEMsaUNBQTRCO0FBRTVCLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFFbkIsUUFBUSxDQUFDLE9BQU8sRUFBRTtRQUdkLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFFTixNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUssQ0FBQywwRkFBMEYsQ0FBQyxDQUFDO1lBRWxILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRWpELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QyxNQUFNLEdBQUcsR0FBaUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBRWpELE1BQU0sZ0JBQWdCLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkQsYUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDL0IsR0FBRyxFQUFFLEtBQUs7Z0JBQ1YsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsZUFBZSxFQUFFLEtBQUs7YUFDekIsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtBdHRyaWJ1dGVzfSBmcm9tICcuL0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHtKU0RPTX0gZnJvbSAnanNkb20nO1xuXG5kZXNjcmliZSgnQXR0cmlidXRlcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ3BhcnNlJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8gbXVzdCBiZSBkaXNhYmxlZCBmb3Igbm93IGFzIEpTRE9NIHVzZXMgMTAwJSBjcHUgZHVyaW5nIHRlc3RzLlxuICAgICAgICBpdChcImdldFwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgZG9tID0gbmV3IEpTRE9NKFwiPGJvZHk+PGRpdiBkYXRhLWZvbz0nYmFyJyBkYXRhLWNhdC1kb2c9J2RvZycgZGF0YS1vbmUtdHdvLXRocmVlLWZvdXI9J2RvZyc+PC9kaXY+PC9ib2R5PlwiKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZG9tLndpbmRvdy5kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gZG9tLndpbmRvdy5kb2N1bWVudC5ib2R5O1xuXG4gICAgICAgICAgICBjb25zdCBkaXYgPSA8SFRNTEVsZW1lbnQ+IGJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVNYXAgPSBBdHRyaWJ1dGVzLmRhdGFUb01hcChkaXYpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZGVlcEVxdWFsKGRhdGFBdHRyaWJ1dGVNYXAsIHtcbiAgICAgICAgICAgICAgICBmb286ICdiYXInLFxuICAgICAgICAgICAgICAgIGNhdERvZzogJ2RvZycsXG4gICAgICAgICAgICAgICAgb25lVHdvVGhyZWVGb3VyOiAnZG9nJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=