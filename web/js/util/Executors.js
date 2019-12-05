"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeDurations_1 = require("polar-shared/src/util/TimeDurations");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Functions_1 = require("polar-shared/src/util/Functions");
class Executors {
    static runPeriodically(opts, handler) {
        let iter = 0;
        const maxIterations = Preconditions_1.defaultValue(opts.maxIterations, Number.MAX_VALUE);
        const onCompletion = Preconditions_1.defaultValue(opts.onCompletion, Functions_1.NULL_FUNCTION);
        const scheduleNextUpdate = (interval) => {
            const intervalMS = TimeDurations_1.TimeDurations.toMillis(interval);
            setTimeout(() => {
                doExecute();
            }, intervalMS);
        };
        const doExecute = () => {
            try {
                handler();
            }
            finally {
                ++iter;
                if (iter < maxIterations) {
                    scheduleNextUpdate(opts.interval);
                }
                else {
                    onCompletion();
                }
            }
        };
        if (opts.initialDelay !== undefined) {
            scheduleNextUpdate(opts.initialDelay);
        }
        else {
            doExecute();
        }
    }
}
exports.Executors = Executors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhlY3V0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRXhlY3V0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdUVBQWtFO0FBQ2xFLGtFQUE0RDtBQUM1RCwrREFBOEQ7QUFFOUQsTUFBYSxTQUFTO0lBS1gsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFrQixFQUFFLE9BQW1CO1FBRWpFLElBQUksSUFBSSxHQUFXLENBQUMsQ0FBQztRQUVyQixNQUFNLGFBQWEsR0FBRyw0QkFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXpFLE1BQU0sWUFBWSxHQUFHLDRCQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSx5QkFBYSxDQUFDLENBQUM7UUFFcEUsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLFFBQWtCLEVBQUUsRUFBRTtZQUU5QyxNQUFNLFVBQVUsR0FBRyw2QkFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVwRCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUVaLFNBQVMsRUFBRSxDQUFDO1lBRWhCLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVuQixDQUFDLENBQUM7UUFFRixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFFbkIsSUFBSTtnQkFFQSxPQUFPLEVBQUUsQ0FBQzthQUViO29CQUFTO2dCQUNOLEVBQUUsSUFBSSxDQUFDO2dCQUVQLElBQUksSUFBSSxHQUFHLGFBQWEsRUFBRTtvQkFDdEIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNyQztxQkFBTTtvQkFDSCxZQUFZLEVBQUUsQ0FBQztpQkFDbEI7YUFFSjtRQUVMLENBQUMsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDakMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDSCxTQUFTLEVBQUUsQ0FBQztTQUNmO0lBRUwsQ0FBQztDQUVKO0FBcERELDhCQW9EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RHVyYXRpb259IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9UaW1lRHVyYXRpb25zJztcbmltcG9ydCB7VGltZUR1cmF0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1RpbWVEdXJhdGlvbnMnO1xuaW1wb3J0IHtkZWZhdWx0VmFsdWV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgRXhlY3V0b3JzIHtcblxuICAgIC8qKlxuICAgICAqIFJ1biB0aGUgZ2l2ZW4gZnVuY3Rpb24gcGVyaW9kaWNhbGx5XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBydW5QZXJpb2RpY2FsbHkob3B0czogUGVyaW9kaWNPcHRzLCBoYW5kbGVyOiAoKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgbGV0IGl0ZXI6IG51bWJlciA9IDA7XG5cbiAgICAgICAgY29uc3QgbWF4SXRlcmF0aW9ucyA9IGRlZmF1bHRWYWx1ZShvcHRzLm1heEl0ZXJhdGlvbnMsIE51bWJlci5NQVhfVkFMVUUpO1xuXG4gICAgICAgIGNvbnN0IG9uQ29tcGxldGlvbiA9IGRlZmF1bHRWYWx1ZShvcHRzLm9uQ29tcGxldGlvbiwgTlVMTF9GVU5DVElPTik7XG5cbiAgICAgICAgY29uc3Qgc2NoZWR1bGVOZXh0VXBkYXRlID0gKGludGVydmFsOiBEdXJhdGlvbikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbE1TID0gVGltZUR1cmF0aW9ucy50b01pbGxpcyhpbnRlcnZhbCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgZG9FeGVjdXRlKCk7XG5cbiAgICAgICAgICAgIH0sIGludGVydmFsTVMpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZG9FeGVjdXRlID0gKCkgPT4ge1xuXG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgaGFuZGxlcigpO1xuXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICsraXRlcjtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVyIDwgbWF4SXRlcmF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZU5leHRVcGRhdGUob3B0cy5pbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0cy5pbml0aWFsRGVsYXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2NoZWR1bGVOZXh0VXBkYXRlKG9wdHMuaW5pdGlhbERlbGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvRXhlY3V0ZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIFBlcmlvZGljT3B0cyB7XG5cbiAgICByZWFkb25seSBpbnRlcnZhbDogRHVyYXRpb247XG5cbiAgICByZWFkb25seSBpbml0aWFsRGVsYXk/OiBEdXJhdGlvbjtcblxuICAgIHJlYWRvbmx5IG1heEl0ZXJhdGlvbnM/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBvbiBjb21wbGV0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9uQ29tcGxldGlvbj86ICgpID0+IHZvaWQ7XG5cbn1cbiJdfQ==