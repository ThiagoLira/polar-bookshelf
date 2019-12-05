"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class DocDetails {
    static merge(docInfo, docDetail) {
        if (docDetail !== undefined) {
            log.debug("Merging docDetail: ", docDetail);
            const targetDocDetails = docInfo;
            const typedKeys = ['title', 'subtitle', 'description', 'url', 'filename'];
            const sourceDocDetails = docDetail;
            typedKeys.forEach(typedKey => {
                if (!Preconditions_1.isPresent(targetDocDetails[typedKey]) && Preconditions_1.isPresent(sourceDocDetails[typedKey])) {
                    const newValue = sourceDocDetails[typedKey];
                    log.debug(`Setting ${typedKey} to ${newValue}`);
                    targetDocDetails[typedKey] = newValue;
                }
            });
            return targetDocDetails;
        }
        else {
            log.warn("No docDetail to merge");
        }
        return undefined;
    }
}
exports.DocDetails = DocDetails;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jRGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY0RldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxrRUFBeUQ7QUFDekQsMkRBQXNEO0FBSXRELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFVBQVU7SUFFWixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQWlCLEVBQUUsU0FBcUI7UUFJeEQsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBRXpCLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFNUMsTUFBTSxnQkFBZ0IsR0FBd0IsT0FBTyxDQUFDO1lBRXRELE1BQU0sU0FBUyxHQUNULENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRTlELE1BQU0sZ0JBQWdCLEdBQXdCLFNBQVMsQ0FBQztZQUV4RCxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUV6QixJQUFJLENBQUUseUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLHlCQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtvQkFDbEYsTUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzVDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxRQUFRLE9BQU8sUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDekMsZ0JBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO2lCQUNqRDtZQUVMLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxnQkFBZ0IsQ0FBQztTQUUzQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFFckIsQ0FBQztDQUNKO0FBcENELGdDQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9jRGV0YWlsLCBVcGRhdGFibGVEb2NEZXRhaWxzfSBmcm9tICcuL0RvY0RldGFpbCc7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtEb2NJbmZvfSBmcm9tICcuL0RvY0luZm8nO1xuaW1wb3J0IHtJRG9jSW5mb30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm9cIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgRG9jRGV0YWlscyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIG1lcmdlKGRvY0luZm86IElEb2NJbmZvLCBkb2NEZXRhaWw/OiBEb2NEZXRhaWwpOiBVcGRhdGFibGVEb2NEZXRhaWxzIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICAvLyB3ZSBiYXNpY2FsbHkgbm93IG5lZWQgdG8gJ2dpZnQnIGFkZGl0aW9uYWwgZmllbGRzIHRvIHRoZSBkb2MgbW9kZWxcbiAgICAgICAgLy8gaGVyZSBpbmNsdWRpbmcgdGl0bGUsIGZpbGVuYW1lLCBldGMuXG4gICAgICAgIGlmIChkb2NEZXRhaWwgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICBsb2cuZGVidWcoXCJNZXJnaW5nIGRvY0RldGFpbDogXCIsIGRvY0RldGFpbCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldERvY0RldGFpbHM6IFVwZGF0YWJsZURvY0RldGFpbHMgPSBkb2NJbmZvO1xuXG4gICAgICAgICAgICBjb25zdCB0eXBlZEtleXM6IEFycmF5PGtleW9mIFVwZGF0YWJsZURvY0RldGFpbHM+XG4gICAgICAgICAgICAgICAgPSBbJ3RpdGxlJywgJ3N1YnRpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ3VybCcsICdmaWxlbmFtZSddO1xuXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VEb2NEZXRhaWxzOiBVcGRhdGFibGVEb2NEZXRhaWxzID0gZG9jRGV0YWlsO1xuXG4gICAgICAgICAgICB0eXBlZEtleXMuZm9yRWFjaCh0eXBlZEtleSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoISBpc1ByZXNlbnQodGFyZ2V0RG9jRGV0YWlsc1t0eXBlZEtleV0pICYmIGlzUHJlc2VudChzb3VyY2VEb2NEZXRhaWxzW3R5cGVkS2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBzb3VyY2VEb2NEZXRhaWxzW3R5cGVkS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKGBTZXR0aW5nICR7dHlwZWRLZXl9IHRvICR7bmV3VmFsdWV9YCk7XG4gICAgICAgICAgICAgICAgICAgICg8YW55PiB0YXJnZXREb2NEZXRhaWxzKVt0eXBlZEtleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0RG9jRGV0YWlscztcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9nLndhcm4oXCJObyBkb2NEZXRhaWwgdG8gbWVyZ2VcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgfVxufVxuIl19