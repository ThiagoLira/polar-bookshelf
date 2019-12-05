"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Filenames_1 = require("./Filenames");
describe('Filenames', function () {
    describe('sanitize', function () {
        it("basic", function () {
            chai_1.assert.equal(Filenames_1.Filenames.sanitize("Hello!(@#&^!~)world99"), "Hello_________world99");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZW5hbWVzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbGVuYW1lc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBNEI7QUFDNUIsMkNBQXNDO0FBRXRDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFFbEIsUUFBUSxDQUFDLFVBQVUsRUFBRTtRQUVqQixFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ1IsYUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDdkYsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtGaWxlbmFtZXN9IGZyb20gJy4vRmlsZW5hbWVzJztcblxuZGVzY3JpYmUoJ0ZpbGVuYW1lcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ3Nhbml0aXplJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoRmlsZW5hbWVzLnNhbml0aXplKFwiSGVsbG8hKEAjJl4hfil3b3JsZDk5XCIpLCBcIkhlbGxvX19fX19fX19fd29ybGQ5OVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=