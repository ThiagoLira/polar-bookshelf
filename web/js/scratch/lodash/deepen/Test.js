"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const Assertions_1 = require("../../../test/Assertions");
describe('Test', function () {
    let customers = [
        {
            addresses: [
                {
                    city: "San Francisco"
                },
                {
                    city: "Sacramento",
                }
            ]
        },
        {
            addresses: [
                {
                    city: "Baltimore"
                },
                {
                    city: "Oakland",
                }
            ]
        }
    ];
    it("unchained", function () {
        let result = _.map(_.flatten(_.map(customers, customer => customer.addresses)), address => address.city);
        let expected = [
            "San Francisco",
            "Sacramento",
            "Baltimore",
            "Oakland"
        ];
        Assertions_1.assertJSON(result, expected);
    });
    it("chained", function () {
        let result = _.chain(customers)
            .map(customer => customer.addresses)
            .flatten()
            .map(address => address.city)
            .value();
        let expected = [
            "San Francisco",
            "Sacramento",
            "Baltimore",
            "Oakland"
        ];
        Assertions_1.assertJSON(result, expected);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMENBQTRCO0FBQzVCLHlEQUFvRDtBQUVwRCxRQUFRLENBQUMsTUFBTSxFQUFFO0lBY2IsSUFBSSxTQUFTLEdBQWU7UUFDeEI7WUFDSSxTQUFTLEVBQUU7Z0JBQ1A7b0JBQ0ksSUFBSSxFQUFFLGVBQWU7aUJBQ3hCO2dCQUNEO29CQUNJLElBQUksRUFBRSxZQUFZO2lCQUNyQjthQUVKO1NBQ0o7UUFDRDtZQUNJLFNBQVMsRUFBRTtnQkFDUDtvQkFDSSxJQUFJLEVBQUUsV0FBVztpQkFDcEI7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLFNBQVM7aUJBQ2xCO2FBRUo7U0FDSjtLQUNKLENBQUM7SUFFRixFQUFFLENBQUMsV0FBVyxFQUFFO1FBRVosSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekcsSUFBSSxRQUFRLEdBQUc7WUFDWCxlQUFlO1lBQ2YsWUFBWTtZQUNaLFdBQVc7WUFDWCxTQUFTO1NBQ1osQ0FBQztRQUNGLHVCQUFVLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRWpDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFNBQVMsRUFBRTtRQUVWLElBQUksTUFBTSxHQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO2FBQ3pCLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7YUFDbkMsT0FBTyxFQUFFO2FBQ1QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUM1QixLQUFLLEVBQUUsQ0FBQTtRQUVaLElBQUksUUFBUSxHQUFHO1lBQ1gsZUFBZTtZQUNmLFlBQVk7WUFDWixXQUFXO1lBQ1gsU0FBUztTQUNaLENBQUM7UUFFRix1QkFBVSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUVqQyxDQUFDLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi8uLi90ZXN0L0Fzc2VydGlvbnMnO1xuXG5kZXNjcmliZSgnVGVzdCcsIGZ1bmN0aW9uKCkge1xuXG5cbiAgICBpbnRlcmZhY2UgQWRkcmVzcyB7XG5cbiAgICAgICAgcmVhZG9ubHkgY2l0eTogc3RyaW5nO1xuXG5cbiAgICB9XG5cbiAgICBpbnRlcmZhY2UgQ3VzdG9tZXIge1xuICAgICAgICByZWFkb25seSBhZGRyZXNzZXM6IEFkZHJlc3NbXVxuICAgIH1cblxuICAgIGxldCBjdXN0b21lcnM6IEN1c3RvbWVyW10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFkZHJlc3NlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogXCJTYW4gRnJhbmNpc2NvXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogXCJTYWNyYW1lbnRvXCIsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFkZHJlc3NlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogXCJCYWx0aW1vcmVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiBcIk9ha2xhbmRcIixcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBpdChcInVuY2hhaW5lZFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IF8ubWFwKF8uZmxhdHRlbihfLm1hcChjdXN0b21lcnMsIGN1c3RvbWVyID0+IGN1c3RvbWVyLmFkZHJlc3NlcykpLCBhZGRyZXNzID0+IGFkZHJlc3MuY2l0eSk7XG5cbiAgICAgICAgbGV0IGV4cGVjdGVkID0gW1xuICAgICAgICAgICAgXCJTYW4gRnJhbmNpc2NvXCIsXG4gICAgICAgICAgICBcIlNhY3JhbWVudG9cIixcbiAgICAgICAgICAgIFwiQmFsdGltb3JlXCIsXG4gICAgICAgICAgICBcIk9ha2xhbmRcIlxuICAgICAgICBdO1xuICAgICAgICBhc3NlcnRKU09OKHJlc3VsdCwgZXhwZWN0ZWQpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcImNoYWluZWRcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCByZXN1bHQgPV8uY2hhaW4oY3VzdG9tZXJzKVxuICAgICAgICAgICAgLm1hcChjdXN0b21lciA9PiBjdXN0b21lci5hZGRyZXNzZXMpXG4gICAgICAgICAgICAuZmxhdHRlbigpXG4gICAgICAgICAgICAubWFwKGFkZHJlc3MgPT4gYWRkcmVzcy5jaXR5KVxuICAgICAgICAgICAgLnZhbHVlKClcblxuICAgICAgICBsZXQgZXhwZWN0ZWQgPSBbXG4gICAgICAgICAgICBcIlNhbiBGcmFuY2lzY29cIixcbiAgICAgICAgICAgIFwiU2FjcmFtZW50b1wiLFxuICAgICAgICAgICAgXCJCYWx0aW1vcmVcIixcbiAgICAgICAgICAgIFwiT2FrbGFuZFwiXG4gICAgICAgIF07XG5cbiAgICAgICAgYXNzZXJ0SlNPTihyZXN1bHQsIGV4cGVjdGVkKTtcblxuICAgIH0pO1xuXG5cbn0pO1xuXG4iXX0=