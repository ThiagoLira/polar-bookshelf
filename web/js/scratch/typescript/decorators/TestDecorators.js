"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
describe('TestDecorators', function () {
    it("basic decorators", function () {
        function Path(value) {
            return function (target, propertyKey, descriptor) {
                console.log("FIXME propertyKey", propertyKey);
                let paramtypes = Reflect.getMetadata("design:paramtypes", target, propertyKey);
                console.log("FIXME1:", Reflect.getMetadata("design:type", target, propertyKey));
                console.log("Within my annotation: ", paramtypes);
                target.path = value;
                console.log("FIXME: target", target);
                console.log("FIXME: descriptor", descriptor);
            };
        }
        class Address {
            constructor(city, state, zip) {
                this.city = city;
                this.state = state;
                this.zip = zip;
            }
        }
        class AddressHandler {
            handle(address) {
            }
        }
        __decorate([
            Path("/api/address"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Address]),
            __metadata("design:returntype", void 0)
        ], AddressHandler.prototype, "handle", null);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdERlY29yYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXN0RGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDRCQUEwQjtBQUUxQixRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFFdkIsRUFBRSxDQUFDLGtCQUFrQixFQUFFO1FBRW5CLFNBQVMsSUFBSSxDQUFDLEtBQWE7WUFDdkIsT0FBTyxVQUFVLE1BQVcsRUFBRSxXQUFtQixFQUFFLFVBQThCO2dCQUU3RSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxDQUFBO2dCQUU3QyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFFL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBRWhGLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBSWxELE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUtwQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUVqRCxDQUFDLENBQUM7UUFDTixDQUFDO1FBRUQsTUFBTSxPQUFPO1lBTVQsWUFBWSxJQUFZLEVBQUUsS0FBYSxFQUFFLEdBQVc7Z0JBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDbkIsQ0FBQztTQUVKO1FBTUQsTUFBTSxjQUFjO1lBS2hCLE1BQU0sQ0FBQyxPQUFnQjtZQUV2QixDQUFDO1NBRUo7UUFKRztZQURDLElBQUksQ0FBQyxjQUFjLENBQUM7OzZDQUNMLE9BQU87O29EQUV0QjtJQU1ULENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5cbmRlc2NyaWJlKCdUZXN0RGVjb3JhdG9ycycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJiYXNpYyBkZWNvcmF0b3JzXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBmdW5jdGlvbiBQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVhNRSBwcm9wZXJ0eUtleVwiLCBwcm9wZXJ0eUtleSlcblxuICAgICAgICAgICAgICAgIGxldCBwYXJhbXR5cGVzID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVhNRTE6XCIsIFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCB0YXJnZXQsIHByb3BlcnR5S2V5KSk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldpdGhpbiBteSBhbm5vdGF0aW9uOiBcIiwgcGFyYW10eXBlcyk7XG4gICAgICAgICAgICAgICAgLy8gRklYTUU6IHdoZXJlIGRvIEkgc3RvcmUgdGhpcyB2YWx1ZS4uLlxuXG4gICAgICAgICAgICAgICAgLy9kZXNjcmlwdG9yLmVudW1lcmFibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0YXJnZXQucGF0aCA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gRklYTUU6IGhvdyBkbyBJIGdldCBtZXRob2QgcGFyYW1zLiB3aXQgdGhvc2UgSSBjYW4gZG8gZnVsbFxuICAgICAgICAgICAgICAgIC8vIEFQSSBoYW5kbGluZ1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVhNRTogdGFyZ2V0XCIsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVhNRTogZGVzY3JpcHRvclwiLCBkZXNjcmlwdG9yKTtcblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsYXNzIEFkZHJlc3Mge1xuXG4gICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY2l0eTogc3RyaW5nO1xuICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IHN0YXRlOiBzdHJpbmc7XG4gICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgemlwOiBudW1iZXI7XG5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKGNpdHk6IHN0cmluZywgc3RhdGU6IHN0cmluZywgemlwOiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnppcCA9IHppcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaW50ZXJmYWNlIEhhbmRsZXI8VD4ge1xuICAgICAgICAgICAgaGFuZGxlKHZhbHVlOiBUKTogdm9pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsYXNzIEFkZHJlc3NIYW5kbGVyIGltcGxlbWVudHMgSGFuZGxlcjxBZGRyZXNzPiB7XG5cbiAgICAgICAgICAgIC8vICBBIG1ldGhvZCBkZWNvcmF0b3IgY2Fubm90IGJlIHVzZWQgaW4gYSBkZWNsYXJhdGlvbiBmaWxlLCBvbiBhblxuICAgICAgICAgICAgLy8gb3ZlcmxvYWQsIG9yIGluIGFueSBvdGhlciBhbWJpZW50IGNvbnRleHQgKHN1Y2ggYXMgaW4gYSBkZWNsYXJlIGNsYXNzKS5cbiAgICAgICAgICAgIEBQYXRoKFwiL2FwaS9hZGRyZXNzXCIpXG4gICAgICAgICAgICBoYW5kbGUoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cblxuICAgIH0pO1xuXG59KTtcblxuIl19