"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArgsParser_1 = require("../../util/ArgsParser");
const Objects_1 = require("polar-shared/src/util/Objects");
class Args {
    static parse(argv) {
        let result = ArgsParser_1.ArgsParser.parse(argv);
        result = Objects_1.Objects.defaults(result, {
            quit: true,
            browser: "DEFAULT",
            profile: "WEBVIEW",
            amp: true
        });
        return result;
    }
}
exports.Args = Args;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFyZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzREFBaUQ7QUFDakQsMkRBQXNEO0FBR3RELE1BQWEsSUFBSTtJQUtOLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBVztRQUUzQixJQUFJLE1BQU0sR0FBRyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzlCLElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsR0FBRyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0NBRUo7QUFwQkQsb0JBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcmdzUGFyc2VyfSBmcm9tICcuLi8uLi91dGlsL0FyZ3NQYXJzZXInO1xuaW1wb3J0IHtPYmplY3RzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL09iamVjdHNcIjtcblxuXG5leHBvcnQgY2xhc3MgQXJncyB7XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSB0aGUgY29tbWFuZCBsaW5lLCBwcm92aWRpbmcgcmVhc29uYWJsZSBhcmd1bWVudHMuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZShhcmd2OiBhbnlbXSkge1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBBcmdzUGFyc2VyLnBhcnNlKGFyZ3YpO1xuXG4gICAgICAgIHJlc3VsdCA9IE9iamVjdHMuZGVmYXVsdHMocmVzdWx0LCB7XG4gICAgICAgICAgICBxdWl0OiB0cnVlLFxuICAgICAgICAgICAgYnJvd3NlcjogXCJERUZBVUxUXCIsXG4gICAgICAgICAgICBwcm9maWxlOiBcIldFQlZJRVdcIixcbiAgICAgICAgICAgIGFtcDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG4iXX0=