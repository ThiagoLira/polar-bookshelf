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
const Firebase_1 = require("../firebase/Firebase");
const Firestore_1 = require("../firebase/Firestore");
const Dialogs_1 = require("../ui/dialogs/Dialogs");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocumentReferences_1 = require("../firebase/firestore/DocumentReferences");
const log = Logger_1.Logger.create();
const COLLECTION_NAME = "account";
class Accounts {
    static ref() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Firebase_1.Firebase.currentUser();
            if (!user) {
                return undefined;
            }
            const firestore = yield Firestore_1.Firestore.getInstance();
            const id = user.uid;
            return firestore
                .collection(COLLECTION_NAME)
                .doc(id);
        });
    }
    static get() {
        return __awaiter(this, void 0, void 0, function* () {
            const ref = yield this.ref();
            if (!ref) {
                return undefined;
            }
            const snapshot = yield DocumentReferences_1.DocumentReferences.get(ref, { source: 'server-then-cache' });
            if (!snapshot.exists) {
                return undefined;
            }
            return snapshot.data();
        });
    }
    static onSnapshot(handler) {
        return __awaiter(this, void 0, void 0, function* () {
            const ref = yield this.ref();
            if (!ref) {
                handler(undefined);
                return;
            }
            return ref.onSnapshot(snapshot => {
                if (!snapshot.exists) {
                    return;
                }
                const account = snapshot.data();
                handler(account);
            }, ERR_HANDLER);
        });
    }
    static listenForPlanUpgrades() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Firebase_1.Firebase.currentUser();
            if (!user) {
                return;
            }
            const firestore = yield Firestore_1.Firestore.getInstance();
            const id = user.uid;
            const ref = firestore
                .collection(COLLECTION_NAME)
                .doc(id);
            const onConfirm = () => {
                const url = new URL(document.location.href);
                url.hash = "#";
                const newLocation = url.toString();
                if (document.location.href === newLocation) {
                    document.location.reload();
                }
                else {
                    document.location.href = newLocation;
                }
            };
            let account;
            ref.onSnapshot(doc => {
                const newAccount = doc.data();
                try {
                    if (account && account.plan !== newAccount.plan) {
                        Dialogs_1.Dialogs.confirm({
                            title: "Your plan has changed and we need to reload.",
                            subtitle: "This will just take a moment we promise.",
                            type: 'warning',
                            onConfirm,
                            noCancel: true
                        });
                    }
                }
                finally {
                    account = newAccount;
                }
            }, ERR_HANDLER);
        });
    }
}
exports.Accounts = Accounts;
const ERR_HANDLER = (err) => log.error("Could not create snapshot for account: ", err);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBY2NvdW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQsbURBQThDO0FBRTlDLDJEQUFzRDtBQUN0RCxpRkFBNEU7QUFFNUUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQztBQU1sQyxNQUFhLFFBQVE7SUFFVixNQUFNLENBQU8sR0FBRzs7WUFFbkIsTUFBTSxJQUFJLEdBQUcsTUFBTSxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRTFDLElBQUksQ0FBRSxJQUFJLEVBQUU7Z0JBR1IsT0FBTyxTQUFTLENBQUM7YUFDcEI7WUFFRCxNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFaEQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUVwQixPQUFPLFNBQVM7aUJBQ1gsVUFBVSxDQUFDLGVBQWUsQ0FBQztpQkFDM0IsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxHQUFHOztZQUVuQixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUU3QixJQUFJLENBQUUsR0FBRyxFQUFFO2dCQUNQLE9BQU8sU0FBUyxDQUFDO2FBQ3BCO1lBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSx1Q0FBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsTUFBTSxFQUFFLG1CQUFtQixFQUFDLENBQUMsQ0FBQztZQUVsRixJQUFJLENBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsT0FBTyxTQUFTLENBQUM7YUFDcEI7WUFFRCxPQUFpQixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckMsQ0FBQztLQUFBO0lBS00sTUFBTSxDQUFPLFVBQVUsQ0FBQyxPQUErQzs7WUFFMUUsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFN0IsSUFBSSxDQUFFLEdBQUcsRUFBRTtnQkFDUCxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25CLE9BQU87YUFDVjtZQUVELE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFFN0IsSUFBSSxDQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUU7b0JBQ25CLE9BQU87aUJBQ1Y7Z0JBRUQsTUFBTSxPQUFPLEdBQWEsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMxQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFckIsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXBCLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxxQkFBcUI7O1lBRXJDLE1BQU0sSUFBSSxHQUFHLE1BQU0sbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUUxQyxJQUFJLENBQUUsSUFBSSxFQUFFO2dCQUNSLE9BQU87YUFDVjtZQUVELE1BQU0sU0FBUyxHQUFHLE1BQU0scUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVoRCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBRXBCLE1BQU0sR0FBRyxHQUFHLFNBQVM7aUJBQ2hCLFVBQVUsQ0FBQyxlQUFlLENBQUM7aUJBQzNCLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUViLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtnQkFFbkIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBRWYsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUVuQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtvQkFDeEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDOUI7cUJBQU07b0JBQ0gsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2lCQUN4QztZQUVMLENBQUMsQ0FBQztZQUVGLElBQUksT0FBNEIsQ0FBQztZQUlqQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUVqQixNQUFNLFVBQVUsR0FBYSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRXhDLElBQUk7b0JBRUEsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsSUFBSSxFQUFFO3dCQUU3QyxpQkFBTyxDQUFDLE9BQU8sQ0FBQzs0QkFDWixLQUFLLEVBQUUsOENBQThDOzRCQUNyRCxRQUFRLEVBQUUsMENBQTBDOzRCQUNwRCxJQUFJLEVBQUUsU0FBUzs0QkFDZixTQUFTOzRCQUNULFFBQVEsRUFBRSxJQUFJO3lCQUNqQixDQUFDLENBQUM7cUJBRU47aUJBRUo7d0JBQVM7b0JBQ04sT0FBTyxHQUFHLFVBQVUsQ0FBQztpQkFDeEI7WUFFTCxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFcEIsQ0FBQztLQUFBO0NBRUo7QUE5SEQsNEJBOEhDO0FBRUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMseUNBQXlDLEVBQUUsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpcmViYXNlfSBmcm9tICcuLi9maXJlYmFzZS9GaXJlYmFzZSc7XG5pbXBvcnQge0ZpcmVzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2UvRmlyZXN0b3JlJztcbmltcG9ydCB7RGlhbG9nc30gZnJvbSAnLi4vdWkvZGlhbG9ncy9EaWFsb2dzJztcbmltcG9ydCB7QWNjb3VudH0gZnJvbSAnLi9BY2NvdW50JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge0RvY3VtZW50UmVmZXJlbmNlc30gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmVzdG9yZS9Eb2N1bWVudFJlZmVyZW5jZXNcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBDT0xMRUNUSU9OX05BTUUgPSBcImFjY291bnRcIjtcblxuLyoqXG4gKiBIYW5kbGVzIGxpc3RlbmluZyBmb3IgYWNjb3VudCBjaGFuZ2VzIGZvciB0aGUgdXNlciBhbmQgdGVsbGluZyB0aGVtXG4gKiBvZiBjaGFuZ2VzIHRvIHRoZWlyIHBsYW4gb3ZlciB0aW1lLlxuICovXG5leHBvcnQgY2xhc3MgQWNjb3VudHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyByZWYoKSB7XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IEZpcmViYXNlLmN1cnJlbnRVc2VyKCk7XG5cbiAgICAgICAgaWYgKCEgdXNlcikge1xuICAgICAgICAgICAgLy8gdGhlIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiBzbyB3ZSBkbyBub3QgaGF2ZSBhbiBhY2NvdW50IHRoYXQgdGhleVxuICAgICAgICAgICAgLy8gY2FuIHVzZS5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaXJlc3RvcmUgPSBhd2FpdCBGaXJlc3RvcmUuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICBjb25zdCBpZCA9IHVzZXIudWlkO1xuXG4gICAgICAgIHJldHVybiBmaXJlc3RvcmVcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKENPTExFQ1RJT05fTkFNRSlcbiAgICAgICAgICAgIC5kb2MoaWQpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXQoKTogUHJvbWlzZTxBY2NvdW50IHwgdW5kZWZpbmVkPiB7XG5cbiAgICAgICAgY29uc3QgcmVmID0gYXdhaXQgdGhpcy5yZWYoKTtcblxuICAgICAgICBpZiAoISByZWYpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IERvY3VtZW50UmVmZXJlbmNlcy5nZXQocmVmLCB7c291cmNlOiAnc2VydmVyLXRoZW4tY2FjaGUnfSk7XG5cbiAgICAgICAgaWYgKCEgc25hcHNob3QuZXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxBY2NvdW50PiBzbmFwc2hvdC5kYXRhKCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmb3Igd2hlbiB3ZSBoYXZlIG5ldyBkYXRhIGZvciB0aGUgYWNjb3VudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIG9uU25hcHNob3QoaGFuZGxlcjogKGFjY291bnQ6IEFjY291bnQgfCB1bmRlZmluZWQpID0+IHZvaWQpIHtcblxuICAgICAgICBjb25zdCByZWYgPSBhd2FpdCB0aGlzLnJlZigpO1xuXG4gICAgICAgIGlmICghIHJlZikge1xuICAgICAgICAgICAgaGFuZGxlcih1bmRlZmluZWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZi5vblNuYXBzaG90KHNuYXBzaG90ID0+IHtcblxuICAgICAgICAgICAgaWYgKCEgc25hcHNob3QuZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50ID0gPEFjY291bnQ+IHNuYXBzaG90LmRhdGEoKTtcbiAgICAgICAgICAgIGhhbmRsZXIoYWNjb3VudCk7XG5cbiAgICAgICAgfSwgRVJSX0hBTkRMRVIpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsaXN0ZW5Gb3JQbGFuVXBncmFkZXMoKSB7XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IEZpcmViYXNlLmN1cnJlbnRVc2VyKCk7XG5cbiAgICAgICAgaWYgKCEgdXNlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gYXdhaXQgRmlyZXN0b3JlLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgY29uc3QgaWQgPSB1c2VyLnVpZDtcblxuICAgICAgICBjb25zdCByZWYgPSBmaXJlc3RvcmVcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKENPTExFQ1RJT05fTkFNRSlcbiAgICAgICAgICAgIC5kb2MoaWQpO1xuXG4gICAgICAgIGNvbnN0IG9uQ29uZmlybSA9ICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIHVybC5oYXNoID0gXCIjXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gdXJsLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ocmVmID09PSBuZXdMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gbmV3TG9jYXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYWNjb3VudDogQWNjb3VudCB8IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBUT0RPOiBtb3ZlIHRoaXMgdG8gdGhlIGNvbGxlY3Rpb25zIGNsYXNzIGZvciBkZWFsaW5nIHdpdGggc25hcHNob3RzLlxuXG4gICAgICAgIHJlZi5vblNuYXBzaG90KGRvYyA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0FjY291bnQgPSA8QWNjb3VudD4gZG9jLmRhdGEoKTtcblxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIGlmIChhY2NvdW50ICYmIGFjY291bnQucGxhbiAhPT0gbmV3QWNjb3VudC5wbGFuKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgRGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIllvdXIgcGxhbiBoYXMgY2hhbmdlZCBhbmQgd2UgbmVlZCB0byByZWxvYWQuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZTogXCJUaGlzIHdpbGwganVzdCB0YWtlIGEgbW9tZW50IHdlIHByb21pc2UuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICBub0NhbmNlbDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBhY2NvdW50ID0gbmV3QWNjb3VudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCBFUlJfSEFORExFUik7XG5cbiAgICB9XG5cbn1cblxuY29uc3QgRVJSX0hBTkRMRVIgPSAoZXJyOiBFcnJvcikgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBzbmFwc2hvdCBmb3IgYWNjb3VudDogXCIsIGVycik7XG4iXX0=