"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Strings_1 = require("polar-shared/src/util/Strings");
class FilenameFormatter {
    static formatDate(date) {
        return this.formatYMD(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    }
    static formatYMD(year, month, day) {
        let sYear = `${year}`;
        let sMonth = Strings_1.Strings.lpad('' + month, '0', 2);
        let sDay = Strings_1.Strings.lpad('' + day, '0', 2);
        return `${sYear}-${sMonth}-${sDay}`;
    }
}
exports.FilenameFormatter = FilenameFormatter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZW5hbWVGb3JtYXR0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxlbmFtZUZvcm1hdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUFzRDtBQUV0RCxNQUFhLGlCQUFpQjtJQUVuQixNQUFNLENBQUMsVUFBVSxDQUFDLElBQVU7UUFJL0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFFeEYsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBWSxFQUFFLEtBQWEsRUFBRSxHQUFXO1FBRTVELElBQUksS0FBSyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUMsT0FBTyxHQUFHLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFLENBQUM7SUFDeEMsQ0FBQztDQUVKO0FBbkJELDhDQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RyaW5nc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TdHJpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWxlbmFtZUZvcm1hdHRlciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSkge1xuXG4gICAgICAgIC8vIG5vdGUgdGhhdCBnZXRVVENEYXRlKCkgcmV0dXJucyB0aGUgVVRDIGRheSBvZiB0aGUgbW9udGguICBWZXJ5XG4gICAgICAgIC8vIGNvbmZ1c2luZyBBUEkgbmFtaW5nLlxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRZTUQoZGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkYXRlLmdldFVUQ01vbnRoKCksIGRhdGUuZ2V0VVRDRGF0ZSgpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0WU1EKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIpIHtcblxuICAgICAgICBsZXQgc1llYXIgPSBgJHt5ZWFyfWA7XG4gICAgICAgIGxldCBzTW9udGggPSBTdHJpbmdzLmxwYWQoJycgKyBtb250aCwgJzAnLCAyKTtcbiAgICAgICAgbGV0IHNEYXkgPSBTdHJpbmdzLmxwYWQoJycgKyBkYXksICcwJywgMik7XG5cbiAgICAgICAgcmV0dXJuIGAke3NZZWFyfS0ke3NNb250aH0tJHtzRGF5fWA7XG4gICAgfVxuXG59XG4iXX0=