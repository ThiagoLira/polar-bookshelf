"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const KEY = "machine-identifier";
class MachineIDs {
    static get() {
        const result = localStorage.getItem(KEY);
        if (result) {
            return result;
        }
        else {
            const id = Hashcodes_1.Hashcodes.createRandomID(20);
            localStorage.setItem(KEY, id);
            return id;
        }
    }
}
exports.MachineIDs = MachineIDs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFjaGluZUlEcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1hY2hpbmVJRHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBMEQ7QUFFMUQsTUFBTSxHQUFHLEdBQUcsb0JBQW9CLENBQUM7QUFNakMsTUFBYSxVQUFVO0lBRVosTUFBTSxDQUFDLEdBQUc7UUFFYixNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLElBQUksTUFBTSxFQUFFO1lBQ1IsT0FBTyxNQUFNLENBQUM7U0FDakI7YUFBTTtZQUNILE1BQU0sRUFBRSxHQUFHLHFCQUFTLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDO1NBQ2I7SUFFTCxDQUFDO0NBRUo7QUFoQkQsZ0NBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIYXNoY29kZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9IYXNoY29kZXMnO1xuXG5jb25zdCBLRVkgPSBcIm1hY2hpbmUtaWRlbnRpZmllclwiO1xuXG4vKipcbiAqIEtlZXBzIGEgdW5pcXVlIElEIGZvciB0aGlzICdtYWNoaW5lJy4gIE5vIFBJSSBpcyBrZXB0IGluIHRoZSBJRC4gIEl0J3MganVzdFxuICogYW4gb3BhcXVlIHN0cmluZy5cbiAqL1xuZXhwb3J0IGNsYXNzIE1hY2hpbmVJRHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXQoKTogTWFjaGluZUlEIHtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVkpO1xuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IEhhc2hjb2Rlcy5jcmVhdGVSYW5kb21JRCgyMCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVksIGlkKTtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCB0eXBlIE1hY2hpbmVJRCA9IHN0cmluZztcbiJdfQ==