"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function range(len) {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
}
const newPerson = () => {
    const statusChance = Math.random();
    return {
        title: 'Mastering Bitcoin',
        progress: Math.floor(Math.random() * 100),
    };
};
function makeData(len = 5553) {
    return range(len).map(d => {
        return Object.assign(Object.assign({}, newPerson()), { children: range(10).map(newPerson) });
    });
}
exports.makeData = makeData;
exports.Logo = () => react_1.default.createElement("div", { style: { margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' } });
exports.Tips = () => react_1.default.createElement("div", { style: { textAlign: "center" } },
    react_1.default.createElement("em", null, "Tip: Hold shift when sorting to multi-sort!"));
exports.Footer = () => react_1.default.createElement("footer", { style: { textAlign: "center" } },
    react_1.default.createElement("div", { className: "buttons" },
        react_1.default.createElement("div", { className: "button" },
            react_1.default.createElement("a", { href: "https://discord.gg/GT8MhA6" },
                react_1.default.createElement("img", { src: "https://img.shields.io/discord/477560964334747668.svg?logo=discord" }))),
        react_1.default.createElement("div", { className: "button" },
            react_1.default.createElement("a", { href: "https://github.com/burtonator/polar-bookshelf/releases" },
                react_1.default.createElement("img", { src: "https://img.shields.io/github/downloads/burtonator/polar-bookshelf/total.svg" }))),
        react_1.default.createElement("div", { className: "button" },
            react_1.default.createElement("a", { href: "https://github.com/burtonator/polar-bookshelf" },
                react_1.default.createElement("img", { src: "https://img.shields.io/github/stars/burtonator/polar-bookshelf.svg?style=social&label=Star" }))),
        react_1.default.createElement("div", { className: "button" },
            react_1.default.createElement("a", { href: "https://twitter.com/getpolarized?ref_src=twsrc%5Etfw" },
                react_1.default.createElement("img", { src: "https://img.shields.io/twitter/follow/getpolarized.svg?style=social&label=Follow" })))));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVdGlscy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFFMUIsU0FBUyxLQUFLLENBQUMsR0FBVztJQUN0QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDZjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtJQUNuQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkMsT0FBTztRQUNILEtBQUssRUFBRSxtQkFBbUI7UUFDMUIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztLQUM1QyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUYsU0FBZ0IsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJO0lBQy9CLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUN0Qix1Q0FDTyxTQUFTLEVBQUUsS0FDZCxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFDcEM7SUFDTixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCw0QkFPQztBQUVZLFFBQUEsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUNyQix1Q0FBSyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUMsR0FDbkgsQ0FBQztBQUVNLFFBQUEsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUNyQix1Q0FBSyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFO0lBQ25DLHdGQUFvRCxDQUM5QyxDQUFDO0FBRUUsUUFBQSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQ3ZCLDBDQUFRLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUU7SUFHdEMsdUNBQUssU0FBUyxFQUFDLFNBQVM7UUFFcEIsdUNBQUssU0FBUyxFQUFDLFFBQVE7WUFDbkIscUNBQUcsSUFBSSxFQUFDLDRCQUE0QjtnQkFDaEMsdUNBQUssR0FBRyxFQUFDLG9FQUFvRSxHQUFFLENBQy9FLENBQ0Y7UUFFTix1Q0FBSyxTQUFTLEVBQUMsUUFBUTtZQUNuQixxQ0FBRyxJQUFJLEVBQUMsd0RBQXdEO2dCQUM1RCx1Q0FBSyxHQUFHLEVBQUMsOEVBQThFLEdBQUUsQ0FDekYsQ0FDRjtRQUVOLHVDQUFLLFNBQVMsRUFBQyxRQUFRO1lBQ25CLHFDQUFHLElBQUksRUFBQywrQ0FBK0M7Z0JBQ25ELHVDQUFLLEdBQUcsRUFBQyw0RkFBNEYsR0FBRSxDQUN2RyxDQUNGO1FBRU4sdUNBQUssU0FBUyxFQUFDLFFBQVE7WUFDbkIscUNBQUcsSUFBSSxFQUFDLHNEQUFzRDtnQkFDMUQsdUNBQUssR0FBRyxFQUFDLGtGQUFrRixHQUFFLENBQzdGLENBQ0YsQ0FFSixDQVFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIHJhbmdlKGxlbjogbnVtYmVyKSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cblxuY29uc3QgbmV3UGVyc29uID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXR1c0NoYW5jZSA9IE1hdGgucmFuZG9tKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICdNYXN0ZXJpbmcgQml0Y29pbicsXG4gICAgICAgIHByb2dyZXNzOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApLFxuICAgIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURhdGEobGVuID0gNTU1Myk6IGFueSB7XG4gICAgcmV0dXJuIHJhbmdlKGxlbikubWFwKGQgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ubmV3UGVyc29uKCksXG4gICAgICAgICAgICBjaGlsZHJlbjogcmFuZ2UoMTApLm1hcChuZXdQZXJzb24pXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBMb2dvID0gKCkgPT5cbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzFyZW0gYXV0bycsIGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319PlxuPC9kaXY+O1xuXG5leHBvcnQgY29uc3QgVGlwcyA9ICgpID0+XG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgPGVtPlRpcDogSG9sZCBzaGlmdCB3aGVuIHNvcnRpbmcgdG8gbXVsdGktc29ydCE8L2VtPlxuICAgIDwvZGl2PjtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+XG4gICAgPGZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgey8qTGlrZSBQb2xhcj8gIFNob3cgeW91ciBsb3ZlIGJ5IGdpdmluZyB1cyBhIEdpdGh1YiBzdGFyISovfVxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Rpc2NvcmQuZ2cvR1Q4TWhBNlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9kaXNjb3JkLzQ3NzU2MDk2NDMzNDc0NzY2OC5zdmc/bG9nbz1kaXNjb3JkXCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idXJ0b25hdG9yL3BvbGFyLWJvb2tzaGVsZi9yZWxlYXNlc1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9naXRodWIvZG93bmxvYWRzL2J1cnRvbmF0b3IvcG9sYXItYm9va3NoZWxmL3RvdGFsLnN2Z1wiLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVydG9uYXRvci9wb2xhci1ib29rc2hlbGZcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vZ2l0aHViL3N0YXJzL2J1cnRvbmF0b3IvcG9sYXItYm9va3NoZWxmLnN2Zz9zdHlsZT1zb2NpYWwmbGFiZWw9U3RhclwiLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2dldHBvbGFyaXplZD9yZWZfc3JjPXR3c3JjJTVFdGZ3XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5zaGllbGRzLmlvL3R3aXR0ZXIvZm9sbG93L2dldHBvbGFyaXplZC5zdmc/c3R5bGU9c29jaWFsJmxhYmVsPUZvbGxvd1wiLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC0xXCI+Ki99XG4gICAgICAgIHsvKjxhIGhyZWY9XCJodHRwczovL29wZW5jb2xsZWN0aXZlLmNvbS9wb2xhci1ib29rc2hlbGYvZG9uYXRlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Ki99XG4gICAgICAgICAgICB7Lyo8aW1nIHNyYz1cImh0dHBzOi8vb3BlbmNvbGxlY3RpdmUuY29tL3BvbGFyLWJvb2tzaGVsZi9kb25hdGUvYnV0dG9uQDJ4LnBuZz9jb2xvcj1ibHVlXCIgd2lkdGg9XCIyNTBcIiAvPiovfVxuICAgICAgICB7Lyo8L2E+Ki99XG4gICAgey8qPC9kaXY+Ki99XG5cbiAgICA8L2Zvb3Rlcj47XG4iXX0=