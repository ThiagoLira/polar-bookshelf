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
const Functions_1 = require("polar-shared/src/util/Functions");
class BackgroundListeners {
    static create(listenable) {
        let started = false;
        let value;
        let snapshotUnsubscriber = Functions_1.NULL_FUNCTION;
        return {
            start: () => __awaiter(this, void 0, void 0, function* () {
                if (started) {
                    return;
                }
                value = yield listenable.get();
                snapshotUnsubscriber = yield listenable.onSnapshot(currentValue => {
                    value = currentValue;
                });
                started = true;
            }),
            get: () => {
                if (!started) {
                    throw new Error("Not started");
                }
                return value;
            },
            stop: () => {
                if (!started) {
                    return;
                }
                snapshotUnsubscriber();
            }
        };
    }
}
exports.BackgroundListeners = BackgroundListeners;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFja2dyb3VuZExpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmFja2dyb3VuZExpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsK0RBQThEO0FBRTlELE1BQWEsbUJBQW1CO0lBRXJCLE1BQU0sQ0FBQyxNQUFNLENBQUksVUFBbUM7UUFFdkQsSUFBSSxPQUFPLEdBQVksS0FBSyxDQUFDO1FBRTdCLElBQUksS0FBZSxDQUFDO1FBRXBCLElBQUksb0JBQW9CLEdBQWUseUJBQWEsQ0FBQztRQUVyRCxPQUFPO1lBRUgsS0FBSyxFQUFFLEdBQVMsRUFBRTtnQkFFZCxJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPO2lCQUNWO2dCQUVELEtBQUssR0FBRyxNQUFNLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFFL0Isb0JBQW9CLEdBQUcsTUFBTSxVQUFVLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUM5RCxLQUFLLEdBQUcsWUFBWSxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQztnQkFFSCxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRW5CLENBQUMsQ0FBQTtZQUVELEdBQUcsRUFBRSxHQUFHLEVBQUU7Z0JBRU4sSUFBSSxDQUFFLE9BQU8sRUFBRTtvQkFDWCxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUNsQztnQkFFRCxPQUFPLEtBQU0sQ0FBQztZQUVsQixDQUFDO1lBRUQsSUFBSSxFQUFFLEdBQUcsRUFBRTtnQkFFUCxJQUFJLENBQUUsT0FBTyxFQUFFO29CQUNYLE9BQU87aUJBQ1Y7Z0JBRUQsb0JBQW9CLEVBQUUsQ0FBQztZQUMzQixDQUFDO1NBRUosQ0FBQztJQUVOLENBQUM7Q0FFSjtBQW5ERCxrREFtREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NuYXBzaG90VW5zdWJzY3JpYmVyfSBmcm9tIFwiLi4vZmlyZWJhc2UvRmlyZWJhc2VcIjtcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRMaXN0ZW5lcnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGU8Vj4obGlzdGVuYWJsZTogQmFja2dyb3VuZExpc3RlbmFibGU8Vj4pOiBCYWNrZ3JvdW5kTGlzdGVuZXI8Vj4ge1xuXG4gICAgICAgIGxldCBzdGFydGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHZhbHVlOiBWIHwgbnVsbDtcblxuICAgICAgICBsZXQgc25hcHNob3RVbnN1YnNjcmliZXI6ICgpID0+IHZvaWQgPSBOVUxMX0ZVTkNUSU9OO1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIHN0YXJ0OiBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBhd2FpdCBsaXN0ZW5hYmxlLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgc25hcHNob3RVbnN1YnNjcmliZXIgPSBhd2FpdCBsaXN0ZW5hYmxlLm9uU25hcHNob3QoY3VycmVudFZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0OiAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoISBzdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBzdGFydGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSE7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHN0b3A6ICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICghIHN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNuYXBzaG90VW5zdWJzY3JpYmVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhY2tncm91bmRMaXN0ZW5lcjxWPiB7XG5cbiAgICBzdGFydCgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgZ2V0KCk6IFY7XG5cbiAgICBzdG9wKCk6IHZvaWQ7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYWNrZ3JvdW5kTGlzdGVuYWJsZTxWPiB7XG5cbiAgICBnZXQoKTogUHJvbWlzZTxWPjtcblxuICAgIG9uU25hcHNob3QoaGFuZGxlcjogKHZhbHVlOiBWKSA9PiB2b2lkKTogUHJvbWlzZTxTbmFwc2hvdFVuc3Vic2NyaWJlcj47XG5cbn1cblxuXG4iXX0=