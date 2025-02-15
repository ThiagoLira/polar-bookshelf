"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tokens_1 = require("./Tokens");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Strings_1 = require("polar-shared/src/util/Strings");
class Attributes {
    static dataToMap(element) {
        return Attributes.dataToPrimitiveMap(element);
    }
    static dataToPrimitiveMap(element) {
        let result = {};
        Preconditions_1.Preconditions.assertNotNull(element, "element");
        Array.from(element.attributes).forEach((attr) => {
            if (attr.name.startsWith("data-")) {
                let key = attr.name;
                key = key.replace("data-", "");
                key = Tokens_1.Tokens.hyphenToCamelCase(key);
                result[key] = Strings_1.Strings.toPrimitive(attr.value);
            }
        });
        return result;
    }
    static dataToStringMap(element) {
        let result = {};
        Preconditions_1.Preconditions.assertNotNull(element, "element");
        Array.from(element.attributes).forEach((attr) => {
            if (attr.name.startsWith("data-")) {
                let key = attr.name;
                key = key.replace("data-", "");
                key = Tokens_1.Tokens.hyphenToCamelCase(key);
                result[key] = attr.value;
            }
        });
        return result;
    }
}
exports.Attributes = Attributes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBZ0M7QUFDaEMsa0VBQTZEO0FBQzdELDJEQUFzRDtBQUV0RCxNQUFhLFVBQVU7SUFNbkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFvQjtRQUNqQyxPQUFPLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBTUQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE9BQW9CO1FBRTFDLElBQUksTUFBTSxHQUErQyxFQUFFLENBQUM7UUFFNUQsNkJBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRWhELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBRTVDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzlCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDL0IsR0FBRyxHQUFHLGVBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqRDtRQUVMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQU1ELE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBb0I7UUFFdkMsSUFBSSxNQUFNLEdBQTRCLEVBQUUsQ0FBQztRQUV6Qyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFFNUMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDcEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixHQUFHLEdBQUcsZUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUM1QjtRQUVMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztDQUVKO0FBNURELGdDQTREQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VG9rZW5zfSBmcm9tICcuL1Rva2Vucyc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge1N0cmluZ3N9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvU3RyaW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlcyB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgc3RhdGljIGRhdGFUb01hcChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gQXR0cmlidXRlcy5kYXRhVG9QcmltaXRpdmVNYXAoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBkYXRhIGF0dHJpYnV0ZXMgb24gYW4gZWxlbWVudCBhcyBhIG1hcC5cbiAgICAgKlxuICAgICAqL1xuICAgIHN0YXRpYyBkYXRhVG9QcmltaXRpdmVNYXAoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblxuICAgICAgICBsZXQgcmVzdWx0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbn0gPSB7fTtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwoZWxlbWVudCwgXCJlbGVtZW50XCIpO1xuXG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5hdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyKSA9PiB7XG5cbiAgICAgICAgICAgIGlmKGF0dHIubmFtZS5zdGFydHNXaXRoKFwiZGF0YS1cIikpIHtcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gYXR0ci5uYW1lO1xuICAgICAgICAgICAgICAgIGtleSA9IGtleS5yZXBsYWNlKFwiZGF0YS1cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAga2V5ID0gVG9rZW5zLmh5cGhlblRvQ2FtZWxDYXNlKGtleSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBTdHJpbmdzLnRvUHJpbWl0aXZlKGF0dHIudmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGRhdGEgYXR0cmlidXRlcyBvbiBhbiBlbGVtZW50IGFzIGEgbWFwLlxuICAgICAqXG4gICAgICovXG4gICAgc3RhdGljIGRhdGFUb1N0cmluZ01hcChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXG4gICAgICAgIGxldCByZXN1bHQ6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKGVsZW1lbnQsIFwiZWxlbWVudFwiKTtcblxuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cikgPT4ge1xuXG4gICAgICAgICAgICBpZihhdHRyLm5hbWUuc3RhcnRzV2l0aChcImRhdGEtXCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGF0dHIubmFtZTtcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkucmVwbGFjZShcImRhdGEtXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIGtleSA9IFRva2Vucy5oeXBoZW5Ub0NhbWVsQ2FzZShrZXkpO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gYXR0ci52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG4iXX0=