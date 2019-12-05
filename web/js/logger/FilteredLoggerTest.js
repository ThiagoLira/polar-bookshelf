"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatsLogger_1 = require("./StatsLogger");
const FilteredLogger_1 = require("./FilteredLogger");
const LogLevel_1 = require("./LogLevel");
const Assertions_1 = require("../test/Assertions");
describe('FilteredLogger', function () {
    it("Basic", function () {
        const statsLogger = new StatsLogger_1.StatsLogger();
        const filteredLogger = new FilteredLogger_1.FilteredLogger(statsLogger, LogLevel_1.LogLevel.INFO);
        filteredLogger.verbose("hello");
        filteredLogger.debug("hello");
        filteredLogger.info("hello");
        filteredLogger.warn("hello");
        filteredLogger.error("hello");
        filteredLogger.notice("hello");
        Assertions_1.assertJSON(statsLogger.stats, {
            "notice": 1,
            "debug": 0,
            "verbose": 0,
            "info": 1,
            "warn": 1,
            "error": 1
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsdGVyZWRMb2dnZXJUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlsdGVyZWRMb2dnZXJUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTBDO0FBQzFDLHFEQUFnRDtBQUNoRCx5Q0FBb0M7QUFDcEMsbURBQThDO0FBRTlDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUV2QixFQUFFLENBQUMsT0FBTyxFQUFFO1FBRVIsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFFdEMsTUFBTSxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUFDLFdBQVcsRUFBRSxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRFLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRS9CLHVCQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNyQixRQUFRLEVBQUUsQ0FBQztZQUNYLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLENBQUM7WUFDWixNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUM7U0FDYixDQUNMLENBQUM7SUFFTixDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdGF0c0xvZ2dlcn0gZnJvbSAnLi9TdGF0c0xvZ2dlcic7XG5pbXBvcnQge0ZpbHRlcmVkTG9nZ2VyfSBmcm9tICcuL0ZpbHRlcmVkTG9nZ2VyJztcbmltcG9ydCB7TG9nTGV2ZWx9IGZyb20gJy4vTG9nTGV2ZWwnO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuXG5kZXNjcmliZSgnRmlsdGVyZWRMb2dnZXInLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiQmFzaWNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3Qgc3RhdHNMb2dnZXIgPSBuZXcgU3RhdHNMb2dnZXIoKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXJlZExvZ2dlciA9IG5ldyBGaWx0ZXJlZExvZ2dlcihzdGF0c0xvZ2dlciwgTG9nTGV2ZWwuSU5GTyk7XG5cbiAgICAgICAgZmlsdGVyZWRMb2dnZXIudmVyYm9zZShcImhlbGxvXCIpO1xuICAgICAgICBmaWx0ZXJlZExvZ2dlci5kZWJ1ZyhcImhlbGxvXCIpO1xuICAgICAgICBmaWx0ZXJlZExvZ2dlci5pbmZvKFwiaGVsbG9cIik7XG4gICAgICAgIGZpbHRlcmVkTG9nZ2VyLndhcm4oXCJoZWxsb1wiKTtcbiAgICAgICAgZmlsdGVyZWRMb2dnZXIuZXJyb3IoXCJoZWxsb1wiKTtcbiAgICAgICAgZmlsdGVyZWRMb2dnZXIubm90aWNlKFwiaGVsbG9cIik7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihzdGF0c0xvZ2dlci5zdGF0cywge1xuICAgICAgICAgICAgICAgICBcIm5vdGljZVwiOiAxLFxuICAgICAgICAgICAgICAgICBcImRlYnVnXCI6IDAsXG4gICAgICAgICAgICAgICAgIFwidmVyYm9zZVwiOiAwLFxuICAgICAgICAgICAgICAgICBcImluZm9cIjogMSxcbiAgICAgICAgICAgICAgICAgXCJ3YXJuXCI6IDEsXG4gICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogMVxuICAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==