"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Strings_1 = require("polar-shared/src/util/Strings");
class ArgsParser {
    static _toKey(key) {
        key = key.replace(/^--/, "");
        key = key.replace(/-([a-zA-Z])/g, (match) => {
            return match.replace("-", "").toUpperCase();
        });
        return key;
    }
    static parse(argv) {
        let result = {};
        argv.forEach((arg) => {
            if (/^--[a-zA-Z0-9_-]+=[a-zA-Z0-9_-]+/.test(arg)) {
                let _split = arg.split("=");
                let key = ArgsParser._toKey(_split[0]);
                let value = Strings_1.Strings.toPrimitive(_split[1]);
                result[key] = value;
            }
        });
        return result;
    }
}
exports.ArgsParser = ArgsParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJnc1BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFyZ3NQYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSwyREFBc0Q7QUFFdEQsTUFBYSxVQUFVO0lBT25CLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBVztRQUVyQixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDeEMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDO0lBRWYsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBVztRQUVwQixJQUFJLE1BQU0sR0FBMEIsRUFBRSxDQUFDO1FBRXZDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUVqQixJQUFJLGtDQUFrQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRztnQkFDL0MsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDdkI7UUFFTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7Q0FFSjtBQXJDRCxnQ0FxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNpbXBsZSB1dGlsIHRoYXQgdGFrZXMgY29tbWFuZCBsaW5lIGFyZ3VtZW50cyBsaWtlIC0tZm9vPWJhciBhbmQgcGFyc2VzIHRoZW1cbiAqIGludG8gYSBtYXAuXG4gKi9cbmltcG9ydCB7U3RyaW5nc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TdHJpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBBcmdzUGFyc2VyIHtcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYW4gYXJndW1lbnQgbmFtZSAtLWVuYWJsZS1mb28gaW4gYSAtLWVuYWJsZS1mb289YmFyIGFyZyB0byBlbmFibGVGb29cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc3RhdGljIF90b0tleShrZXk6IHN0cmluZykge1xuXG4gICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9eLS0vLCBcIlwiKTtcbiAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoLy0oW2EtekEtWl0pL2csIChtYXRjaCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoLnJlcGxhY2UoXCItXCIsIFwiXCIpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBrZXk7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcGFyc2UoYXJndjogYW55W10pIHtcblxuICAgICAgICBsZXQgcmVzdWx0OiB7W25hbWU6IHN0cmluZ106IGFueX0gPSB7fTtcblxuICAgICAgICBhcmd2LmZvckVhY2goKGFyZykgPT4ge1xuXG4gICAgICAgICAgICBpZiggL14tLVthLXpBLVowLTlfLV0rPVthLXpBLVowLTlfLV0rLy50ZXN0KGFyZykgKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9zcGxpdCA9IGFyZy5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IEFyZ3NQYXJzZXIuX3RvS2V5KF9zcGxpdFswXSk7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gU3RyaW5ncy50b1ByaW1pdGl2ZShfc3BsaXRbMV0pO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxufVxuIl19