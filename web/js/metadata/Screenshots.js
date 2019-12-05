"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Screenshot_1 = require("./Screenshot");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
class Screenshots {
    static create(src, opts, id) {
        if (id === undefined) {
            id = Hashcodes_1.Hashcodes.createRandomID();
        }
        return new Screenshot_1.Screenshot({
            id,
            created: ISODateTimeStrings_1.ISODateTimeStrings.create(),
            src,
            width: opts.width,
            height: opts.height,
            type: opts.type,
            rel: opts.rel
        });
    }
    static parseURI(value) {
        if (!value.startsWith('screenshot:')) {
            return undefined;
        }
        return {
            value,
            id: value.split(":")[1]
        };
    }
}
exports.Screenshots = Screenshots;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuc2hvdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTY3JlZW5zaG90cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUF3QztBQUN4QywrREFBMEQ7QUFFMUQscUZBQWdGO0FBRWhGLE1BQWEsV0FBVztJQUViLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBVyxFQUFFLElBQWUsRUFBRSxFQUFXO1FBRTFELElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUNsQixFQUFFLEdBQUcscUJBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNuQztRQUVELE9BQU8sSUFBSSx1QkFBVSxDQUFDO1lBQ2xCLEVBQUU7WUFDRixPQUFPLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxFQUFFO1lBQ3BDLEdBQUc7WUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztTQUNoQixDQUFDLENBQUM7SUFFUCxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFhO1FBRWhDLElBQUksQ0FBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO1FBRUQsT0FBTztZQUNILEtBQUs7WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUIsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQWpDRCxrQ0FpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjcmVlbnNob3R9IGZyb20gJy4vU2NyZWVuc2hvdCc7XG5pbXBvcnQge0hhc2hjb2Rlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0hhc2hjb2Rlcyc7XG5pbXBvcnQge0ltYWdlT3B0c30gZnJvbSAnLi9JbWFnZSc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuXG5leHBvcnQgY2xhc3MgU2NyZWVuc2hvdHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoc3JjOiBzdHJpbmcsIG9wdHM6IEltYWdlT3B0cywgaWQ/OiBzdHJpbmcpIHtcblxuICAgICAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWQgPSBIYXNoY29kZXMuY3JlYXRlUmFuZG9tSUQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgU2NyZWVuc2hvdCh7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiBvcHRzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBvcHRzLmhlaWdodCxcbiAgICAgICAgICAgIHR5cGU6IG9wdHMudHlwZSxcbiAgICAgICAgICAgIHJlbDogb3B0cy5yZWxcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlVVJJKHZhbHVlOiBzdHJpbmcpOiBTY3JlZW5zaG90VVJJIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBpZiAoISB2YWx1ZS5zdGFydHNXaXRoKCdzY3JlZW5zaG90OicpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgaWQ6IHZhbHVlLnNwbGl0KFwiOlwiKVsxXVxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NyZWVuc2hvdFVSSSB7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xufVxuIl19