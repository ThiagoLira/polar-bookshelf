"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tags_1 = require("polar-shared/src/tags/Tags");
class GroupNames {
    static assertValid(name) {
        function assertDoesNotContain(ch) {
            if (name.indexOf(ch) !== -1) {
                throw new Error("name must not contain: " + ch);
            }
        }
        assertDoesNotContain(':');
        assertDoesNotContain('#');
        assertDoesNotContain('/');
        Tags_1.Tags.assertValid(name);
    }
}
exports.GroupNames = GroupNames;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBOYW1lcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdyb3VwTmFtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBZ0Q7QUFFaEQsTUFBYSxVQUFVO0lBRVosTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFZO1FBRWxDLFNBQVMsb0JBQW9CLENBQUMsRUFBVTtZQUVwQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUc7Z0JBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDbkQ7UUFFTCxDQUFDO1FBRUQsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUIsV0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUzQixDQUFDO0NBRUo7QUFwQkQsZ0NBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUYWdzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy90YWdzL1RhZ3NcIjtcblxuZXhwb3J0IGNsYXNzIEdyb3VwTmFtZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3NlcnRWYWxpZChuYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICBmdW5jdGlvbiBhc3NlcnREb2VzTm90Q29udGFpbihjaDogc3RyaW5nKSB7XG5cbiAgICAgICAgICAgIGlmIChuYW1lLmluZGV4T2YoY2gpICE9PSAtMSApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJuYW1lIG11c3Qgbm90IGNvbnRhaW46IFwiICsgY2gpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBhc3NlcnREb2VzTm90Q29udGFpbignOicpO1xuICAgICAgICBhc3NlcnREb2VzTm90Q29udGFpbignIycpO1xuICAgICAgICBhc3NlcnREb2VzTm90Q29udGFpbignLycpO1xuXG4gICAgICAgIFRhZ3MuYXNzZXJ0VmFsaWQobmFtZSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==