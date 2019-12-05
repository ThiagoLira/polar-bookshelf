"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class InjectorService {
    static create() {
        console.log("Injector created and listening for code to require");
        window.addEventListener("message", (event) => {
            if (event.data.type === 'injector-require') {
                console.log("Injecting code via require: " + event.data.src);
                require(event.data.src);
            }
        });
    }
}
exports.InjectorService = InjectorService;
class Injector {
    static inject(browserWindow, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
                type: 'injector-require',
                src: path
            };
            const script = `window.postMessage(${JSON.stringify(message)}, '*')`;
            yield browserWindow.webContents.executeJavaScript(script);
        });
    }
}
exports.Injector = Injector;
function create() {
    InjectorService.create();
}
exports.create = create;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE1BQWEsZUFBZTtJQUVqQixNQUFNLENBQUMsTUFBTTtRQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7UUFFbEUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQW1CLEVBQUUsRUFBRTtZQUV2RCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGtCQUFrQixFQUFFO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUFqQkQsMENBaUJDO0FBRUQsTUFBYSxRQUFRO0lBRVYsTUFBTSxDQUFPLE1BQU0sQ0FBQyxhQUE0QixFQUFFLElBQVk7O1lBRWpFLE1BQU0sT0FBTyxHQUFHO2dCQUNaLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEdBQUcsRUFBRSxJQUFJO2FBQ1osQ0FBQztZQUVGLE1BQU0sTUFBTSxHQUFHLHNCQUFzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFFckUsTUFBTSxhQUFhLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlELENBQUM7S0FBQTtDQUVKO0FBZkQsNEJBZUM7QUFFRCxTQUFnQixNQUFNO0lBQ2xCLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBRkQsd0JBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJXaW5kb3d9IGZyb20gXCJlbGVjdHJvblwiO1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcblxuLyoqXG4gKiBDYWxsZWQgZnJvbSB0aGUgcmVuZGVyZXIgc28gdGhhdCBtZXNzYWdlcyBjYW4gYmUgaW5qZWN0ZWQgaW50byBhIEJyb3dzZXJXaW5kb3dcbiAqIGZyb20gdGhlIG1haW4gcHJvY2Vzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEluamVjdG9yU2VydmljZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkluamVjdG9yIGNyZWF0ZWQgYW5kIGxpc3RlbmluZyBmb3IgY29kZSB0byByZXF1aXJlXCIpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnaW5qZWN0b3ItcmVxdWlyZScpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluamVjdGluZyBjb2RlIHZpYSByZXF1aXJlOiBcIiArIGV2ZW50LmRhdGEuc3JjKTtcbiAgICAgICAgICAgICAgICByZXF1aXJlKGV2ZW50LmRhdGEuc3JjKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgSW5qZWN0b3Ige1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBpbmplY3QoYnJvd3NlcldpbmRvdzogQnJvd3NlcldpbmRvdywgcGF0aDogc3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmplY3Rvci1yZXF1aXJlJyxcbiAgICAgICAgICAgIHNyYzogcGF0aFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGB3aW5kb3cucG9zdE1lc3NhZ2UoJHtKU09OLnN0cmluZ2lmeShtZXNzYWdlKX0sICcqJylgO1xuXG4gICAgICAgIGF3YWl0IGJyb3dzZXJXaW5kb3cud2ViQ29udGVudHMuZXhlY3V0ZUphdmFTY3JpcHQoc2NyaXB0KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIEluamVjdG9yU2VydmljZS5jcmVhdGUoKTtcbn1cbiJdfQ==