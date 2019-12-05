"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("polar-shared/src/Preconditions");
const HitMap_1 = require("polar-shared/src/util/HitMap");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const PagemarkMode_1 = require("polar-shared/src/metadata/PagemarkMode");
const Reducers_1 = require("polar-shared/src/util/Reducers");
const Tuples_1 = require("polar-shared/src/util/Tuples");
const Multimap_1 = require("polar-shared/src/util/Multimap");
const Numbers_1 = require("polar-shared/src/util/Numbers");
const PRE_EXISTING_DAY = '!preexisting';
class ReadingOverviews {
    static toDatePercs(records) {
        const mapping = new Multimap_1.ArrayListMultimap();
        for (const record of records) {
            const date = record.preExisting ? PRE_EXISTING_DAY : ISODateTimeStrings_1.ISODateTimeStrings.toISODate(record.created);
            const created = record.created;
            mapping.put(date, {
                created,
                perc: record.progressByMode[PagemarkMode_1.PagemarkMode.READ] || 0
            });
        }
        const dates = [...mapping.keys()].sort();
        const result = [];
        for (const date of dates) {
            const perc = mapping.get(date)
                .sort(((a, b) => a.created.localeCompare(b.created)))
                .reduce(Reducers_1.Reducers.LAST)
                .perc;
            result.push({ date, perc });
        }
        return result;
    }
    static toDatePercDeltas(readingEntries) {
        const tuples = Tuples_1.Tuples.createSiblings(readingEntries);
        const result = [];
        for (const tuple of tuples) {
            if (!tuple.prev) {
                result.push(tuple.curr);
            }
            else {
                const perc = Math.abs(tuple.curr.perc - tuple.prev.perc);
                result.push({ date: tuple.curr.date, perc });
            }
        }
        return result;
    }
    static toLogicalPages(pageMeta) {
        const dimensions = pageMeta.pageInfo.dimensions;
        if (dimensions && Preconditions_1.isPresent(dimensions.height)) {
            return dimensions.height / 1100;
        }
        return 1;
    }
    static toFixedFloat(value) {
        return Numbers_1.Numbers.toFixedFloat(value, 2);
    }
    static compute(pageMetas) {
        const hitMap = new HitMap_1.HitMap();
        for (const pageMeta of pageMetas) {
            const logicalPages = this.toLogicalPages(pageMeta);
            const datePercs = this.toDatePercs(Object.values(pageMeta.readingProgress));
            const datePercDeltas = this.toDatePercDeltas(datePercs);
            for (const datePercDelta of datePercDeltas) {
                const date = datePercDelta.date;
                const perc = datePercDelta.perc;
                const nrPages = this.toFixedFloat((perc / 100) * logicalPages);
                hitMap.registerHit(date, nrPages);
            }
        }
        const result = hitMap.toLiteralMap();
        delete result[PRE_EXISTING_DAY];
        return result;
    }
}
exports.ReadingOverviews = ReadingOverviews;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZGluZ092ZXJ2aWV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlYWRpbmdPdmVydmlld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrRUFBeUQ7QUFDekQseURBQW9EO0FBRXBELHFGQUFrSDtBQUNsSCx5RUFBb0U7QUFDcEUsNkRBQXdEO0FBQ3hELHlEQUFvRDtBQUVwRCw2REFBaUU7QUFDakUsMkRBQXNEO0FBRXRELE1BQU0sZ0JBQWdCLEdBQUcsY0FBYyxDQUFDO0FBRXhDLE1BQWEsZ0JBQWdCO0lBRWpCLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBdUM7UUFPOUQsTUFBTSxPQUFPLEdBQUcsSUFBSSw0QkFBaUIsRUFBOEMsQ0FBQztRQUVwRixLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUUxQixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsdUNBQWtCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBRS9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNkLE9BQU87Z0JBQ1AsSUFBSSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsMkJBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3RELENBQUMsQ0FBQztTQUVOO1FBRUQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXpDLE1BQU0sTUFBTSxHQUFlLEVBQUUsQ0FBQztRQUU5QixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUV0QixNQUFNLElBQUksR0FDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztpQkFDWixJQUFJLENBQUMsQ0FBQyxDQUFDLENB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Z1Byb2dyZXNzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1JlYWRpbmdQcm9ncmVzcyc7XG5pbXBvcnQge1BhZ2VNZXRhfSBmcm9tICcuL1BhZ2VNZXRhJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtIaXRNYXB9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9IaXRNYXAnO1xuaW1wb3J0IHtSZWFkaW5nT3ZlcnZpZXd9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvUmVhZGluZ092ZXJ2aWV3JztcbmltcG9ydCB7SVNPRGF0ZVN0cmluZywgSVNPRGF0ZVRpbWVTdHJpbmcsIElTT0RhdGVUaW1lU3RyaW5nc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtQYWdlbWFya01vZGV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvUGFnZW1hcmtNb2RlJztcbmltcG9ydCB7UmVkdWNlcnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9SZWR1Y2Vycyc7XG5pbXBvcnQge1R1cGxlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1R1cGxlcyc7XG5pbXBvcnQge0lQYWdlTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVBhZ2VNZXRhXCI7XG5pbXBvcnQge0FycmF5TGlzdE11bHRpbWFwfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL011bHRpbWFwXCI7XG5pbXBvcnQge051bWJlcnN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvTnVtYmVyc1wiO1xuXG5jb25zdCBQUkVfRVhJU1RJTkdfREFZID0gJyFwcmVleGlzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBSZWFkaW5nT3ZlcnZpZXdzIHtcblxuICAgIHByaXZhdGUgc3RhdGljIHRvRGF0ZVBlcmNzKHJlY29yZHM6IFJlYWRvbmx5QXJyYXk8UmVhZGluZ1Byb2dyZXNzPik6IFJlYWRvbmx5QXJyYXk8RGF0ZVBlcmM+IHtcblxuICAgICAgICBpbnRlcmZhY2UgRGF0ZVRvUmVhZFBlcmMge1xuICAgICAgICAgICAgcmVhZG9ubHkgY3JlYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmc7XG4gICAgICAgICAgICByZWFkb25seSBwZXJjOiBQZXJjO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFwcGluZyA9IG5ldyBBcnJheUxpc3RNdWx0aW1hcDxzdHJpbmcgLyogSVNPRGF0ZVN0cmluZyAqLywgRGF0ZVRvUmVhZFBlcmM+KCk7XG5cbiAgICAgICAgZm9yIChjb25zdCByZWNvcmQgb2YgcmVjb3Jkcykge1xuXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gcmVjb3JkLnByZUV4aXN0aW5nID8gUFJFX0VYSVNUSU5HX0RBWSA6IElTT0RhdGVUaW1lU3RyaW5ncy50b0lTT0RhdGUocmVjb3JkLmNyZWF0ZWQpO1xuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IHJlY29yZC5jcmVhdGVkO1xuXG4gICAgICAgICAgICBtYXBwaW5nLnB1dChkYXRlLCB7XG4gICAgICAgICAgICAgICAgY3JlYXRlZCxcbiAgICAgICAgICAgICAgICBwZXJjOiByZWNvcmQucHJvZ3Jlc3NCeU1vZGVbUGFnZW1hcmtNb2RlLlJFQURdIHx8IDBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRlcyA9IFsuLi5tYXBwaW5nLmtleXMoKV0uc29ydCgpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogRGF0ZVBlcmNbXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgZGF0ZSBvZiBkYXRlcykge1xuXG4gICAgICAgICAgICBjb25zdCBwZXJjID1cbiAgICAgICAgICAgICAgICBtYXBwaW5nLmdldChkYXRlKVxuICAgICAgICAgICAgICAgICAgICAuc29ydCgoKGEsIGIpID0+IGEuY3JlYXRlZC5sb2NhbGVDb21wYXJlKGIuY3JlYXRlZCkpKVxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKFJlZHVjZXJzLkxBU1QpXG4gICAgICAgICAgICAgICAgICAgIC5wZXJjO1xuXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7ZGF0ZSwgcGVyY30pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHRvRGF0ZVBlcmNEZWx0YXMocmVhZGluZ0VudHJpZXM6IFJlYWRvbmx5QXJyYXk8RGF0ZVBlcmNEZWx0YT4pIHtcblxuICAgICAgICBjb25zdCB0dXBsZXMgPSBUdXBsZXMuY3JlYXRlU2libGluZ3MocmVhZGluZ0VudHJpZXMpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogRGF0ZVBlcmNEZWx0YVtdID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCB0dXBsZSBvZiB0dXBsZXMpIHtcblxuICAgICAgICAgICAgaWYgKCEgdHVwbGUucHJldikge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHR1cGxlLmN1cnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJjID0gTWF0aC5hYnModHVwbGUuY3Vyci5wZXJjIC0gdHVwbGUucHJldi5wZXJjKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7ZGF0ZTogdHVwbGUuY3Vyci5kYXRlLCBwZXJjfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyB0b0xvZ2ljYWxQYWdlcyhwYWdlTWV0YTogSVBhZ2VNZXRhKSB7XG5cbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IHBhZ2VNZXRhLnBhZ2VJbmZvLmRpbWVuc2lvbnM7XG5cbiAgICAgICAgaWYgKGRpbWVuc2lvbnMgJiYgaXNQcmVzZW50KGRpbWVuc2lvbnMuaGVpZ2h0KSkge1xuICAgICAgICAgICAgLy8gdGhpcyBpbiBIVE1MIGRvY3VtZW50IGFuZCB3ZSBzaG91bGQgYXNzdW1lIDg1MHB4IHggMTEwMHB4XG4gICAgICAgICAgICAvLyBpcyBhIHBhZ2UuXG4gICAgICAgICAgICByZXR1cm4gZGltZW5zaW9ucy5oZWlnaHQgLyAxMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyB0b0ZpeGVkRmxvYXQodmFsdWU6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTnVtYmVycy50b0ZpeGVkRmxvYXQodmFsdWUsIDIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZShwYWdlTWV0YXM6IFJlYWRvbmx5QXJyYXk8SVBhZ2VNZXRhPik6IFJlYWRpbmdPdmVydmlldyB7XG5cbiAgICAgICAgY29uc3QgaGl0TWFwID0gbmV3IEhpdE1hcCgpO1xuXG4gICAgICAgIGZvciAoY29uc3QgcGFnZU1ldGEgb2YgcGFnZU1ldGFzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxvZ2ljYWxQYWdlcyA9IHRoaXMudG9Mb2dpY2FsUGFnZXMocGFnZU1ldGEpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRlUGVyY3NcbiAgICAgICAgICAgICAgICA9IHRoaXMudG9EYXRlUGVyY3MoT2JqZWN0LnZhbHVlcyhwYWdlTWV0YS5yZWFkaW5nUHJvZ3Jlc3MpKTtcblxuICAgICAgICAgICAgY29uc3QgZGF0ZVBlcmNEZWx0YXMgPSB0aGlzLnRvRGF0ZVBlcmNEZWx0YXMoZGF0ZVBlcmNzKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBkYXRlUGVyY0RlbHRhIG9mIGRhdGVQZXJjRGVsdGFzKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gZGF0ZVBlcmNEZWx0YS5kYXRlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlcmMgPSBkYXRlUGVyY0RlbHRhLnBlcmM7XG4gICAgICAgICAgICAgICAgY29uc3QgbnJQYWdlcyA9IHRoaXMudG9GaXhlZEZsb2F0KChwZXJjIC8gMTAwKSAqIGxvZ2ljYWxQYWdlcyk7XG4gICAgICAgICAgICAgICAgaGl0TWFwLnJlZ2lzdGVySGl0KGRhdGUsIG5yUGFnZXMpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGhpdE1hcC50b0xpdGVyYWxNYXAoKTtcbiAgICAgICAgZGVsZXRlIHJlc3VsdFtQUkVfRVhJU1RJTkdfREFZXTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBEYXRlUGVyYyB7XG4gICAgcmVhZG9ubHkgZGF0ZTogSVNPRGF0ZVN0cmluZztcbiAgICByZWFkb25seSBwZXJjOiBQZXJjO1xufVxuXG4vKipcbiAqIEp1c3QgbGlrZSByZWFkaW5nIGVudHJ5IGJ1dCB0aGUgcmVhZGluZyBlbnRyaWVzIGFyZSBkZWx0YSBlbmNvZGVkIHdpdGhcbiAqIHRoZSBmaXJzdCBiZWluZyB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqL1xuaW50ZXJmYWNlIERhdGVQZXJjRGVsdGEgZXh0ZW5kcyBEYXRlUGVyYyB7XG5cbn1cblxuLyoqXG4gKlxuICogUGVyY2VudGFnZSBmcm9tIDAgdG8gMTAwXG4gKi9cbnR5cGUgUGVyYyA9IG51bWJlcjtcblxuIl19