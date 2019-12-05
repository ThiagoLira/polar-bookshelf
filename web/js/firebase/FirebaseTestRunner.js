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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = __importStar(require("./lib/firebase"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const Firebase_1 = require("./Firebase");
const Functions_1 = require("polar-shared/src/util/Functions");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Preconditions_2 = require("polar-shared/src/Preconditions");
const log = Logger_1.Logger.create();
const FIREBASE_USER = process.env.FIREBASE_USER;
const FIREBASE_PASS = process.env.FIREBASE_PASS;
Preconditions_2.Preconditions.assertPresent(FIREBASE_USER, 'FIREBASE_USER');
Preconditions_2.Preconditions.assertPresent(FIREBASE_PASS, 'FIREBASE_PASS');
class FirebaseTestRunner {
    constructor(state) {
        this.currentUser = null;
        this.testingFunction = Functions_1.ASYNC_NULL_FUNCTION;
        this.state = state;
    }
    run(testingFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            this.testingFunction = testingFunction;
            window.addEventListener('load', () => __awaiter(this, void 0, void 0, function* () {
                this.init()
                    .catch(err => log.error("Caught error on init", err));
            }));
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = Firebase_1.Firebase.init();
            if (firebase.auth().currentUser === null) {
                yield app.auth().signInWithEmailAndPassword(FIREBASE_USER, FIREBASE_PASS);
                console.log("Authenticated with Firebase successfully.");
            }
            firebase.auth()
                .onAuthStateChanged((user) => this.onAuth(user), (err) => this.onAuthError(err));
        });
    }
    onAuth(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentUser = user;
            if (user) {
                log.notice("Working with user: " + user.email);
                const accountDetailsElement = document.getElementById("account-details");
                if (Preconditions_1.isPresent(accountDetailsElement)) {
                    accountDetailsElement.innerText = JSON.stringify(firebase.auth().currentUser, null, "  ");
                }
                yield this.testingFunction();
                mocha.run((nrFailures) => {
                    this.state.testResultWriter.write(nrFailures === 0)
                        .catch(err => console.error("Unable to write results: ", err));
                });
            }
            else {
                log.error("No user");
                yield this.state.testResultWriter.write(false);
            }
        });
    }
    onAuthError(firebaseError) {
        log.error("Firebase error: ", firebaseError);
        this.state.testResultWriter.write(false)
            .catch(err => log.error("Could not send result: ", err));
    }
}
exports.FirebaseTestRunner = FirebaseTestRunner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZWJhc2VUZXN0UnVubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlyZWJhc2VUZXN0UnVubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlEQUEyQztBQUMzQywyREFBc0Q7QUFDdEQseUNBQW9DO0FBQ3BDLCtEQUFvRTtBQUNwRSxrRUFBeUQ7QUFDekQsa0VBQTZEO0FBRTdELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWMsQ0FBQztBQUNqRCxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWMsQ0FBQztBQUVqRCw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDNUQsNkJBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBUTVELE1BQWEsa0JBQWtCO0lBUzNCLFlBQVksS0FBNEI7UUFMaEMsZ0JBQVcsR0FBeUIsSUFBSSxDQUFDO1FBR3pDLG9CQUFlLEdBQXdCLCtCQUFtQixDQUFDO1FBRy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFWSxHQUFHLENBQUMsZUFBb0M7O1lBRWpELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1lBRXZDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBUyxFQUFFO2dCQUV2QyxJQUFJLENBQUMsSUFBSSxFQUFFO3FCQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUU5RCxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBRVksSUFBSTs7WUFFYixNQUFNLEdBQUcsR0FBRyxtQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRTVCLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7Z0JBS3RDLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLDBCQUEwQixDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFFMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO2FBQzVEO1lBRUQsUUFBUSxDQUFDLElBQUksRUFBRTtpQkFDVixrQkFBa0IsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFDM0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU1RCxDQUFDO0tBQUE7SUFFWSxNQUFNLENBQUMsSUFBMEI7O1lBRTFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSyxDQUFDO1lBRXpCLElBQUksSUFBSSxFQUFFO2dCQUVOLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUUvQyxNQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFFekUsSUFBSSx5QkFBUyxDQUFDLHFCQUFxQixDQUFDLEVBQUU7b0JBQ2xDLHFCQUFzQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUM5RjtnQkFFRCxNQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFFN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQWtCLEVBQUUsRUFBRTtvQkFFN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQzt5QkFDOUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUV2RSxDQUFDLENBQUMsQ0FBQzthQUVOO2lCQUFNO2dCQUVILEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBS3JCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFFbEQ7UUFFTCxDQUFDO0tBQUE7SUFFTSxXQUFXLENBQUMsYUFBa0M7UUFFakQsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FFSjtBQTFGRCxnREEwRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJTdGF0ZX0gZnJvbSAnLi4vdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4vbGliL2ZpcmViYXNlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi9GaXJlYmFzZSc7XG5pbXBvcnQge0FTWU5DX05VTExfRlVOQ1RJT059IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgRklSRUJBU0VfVVNFUiA9IHByb2Nlc3MuZW52LkZJUkVCQVNFX1VTRVIhO1xuY29uc3QgRklSRUJBU0VfUEFTUyA9IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BBU1MhO1xuXG5QcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQoRklSRUJBU0VfVVNFUiwgJ0ZJUkVCQVNFX1VTRVInKTtcblByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChGSVJFQkFTRV9QQVNTLCAnRklSRUJBU0VfUEFTUycpO1xuXG4vKipcbiAqIEEgc2ltcGxlIHRlc3QgcnVubmVyIGhhcm5lc3MgdGhhdCBjb25uZWN0IHRvIGZpcmViYXNlIHZpYSBkaXJlY3QgYXV0aCBhbmRcbiAqIHJ1bnMgdGVzdHMgYWdhaW5zdCBmaXJlYmFzZSBkaXJlY3RseS5cbiAqXG4gKiBARWxlY3Ryb25SZW5kZXJlckNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIEZpcmViYXNlVGVzdFJ1bm5lciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0YXRlOiBTcGVjdHJvblJlbmRlcmVyU3RhdGU7XG5cbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyOiBmaXJlYmFzZS5Vc2VyIHwgbnVsbCA9IG51bGw7XG5cbiAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50XG4gICAgcHJpdmF0ZSB0ZXN0aW5nRnVuY3Rpb246ICgpID0+IFByb21pc2U8dm9pZD4gPSBBU1lOQ19OVUxMX0ZVTkNUSU9OO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFNwZWN0cm9uUmVuZGVyZXJTdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHJ1bih0ZXN0aW5nRnVuY3Rpb246ICgpID0+IFByb21pc2U8dm9pZD4pIHtcblxuICAgICAgICB0aGlzLnRlc3RpbmdGdW5jdGlvbiA9IHRlc3RpbmdGdW5jdGlvbjtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkNhdWdodCBlcnJvciBvbiBpbml0XCIsIGVycikpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXQoKSB7XG5cbiAgICAgICAgY29uc3QgYXBwID0gRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgICAgIGlmIChmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIgPT09IG51bGwpIHtcblxuICAgICAgICAgICAgLy8gYnJpbmcgdXAgdGhlIFVJIHNvIHRoYXQgd2UgY2FuIGxvZ2luLlxuICAgICAgICAgICAgLy8gRmlyZWJhc2VVSUF1dGgubG9naW4oKTtcblxuICAgICAgICAgICAgYXdhaXQgYXBwLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChGSVJFQkFTRV9VU0VSLCBGSVJFQkFTRV9QQVNTKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoZW50aWNhdGVkIHdpdGggRmlyZWJhc2Ugc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKVxuICAgICAgICAgICAgLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4gdGhpcy5vbkF1dGgodXNlciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnIpID0+IHRoaXMub25BdXRoRXJyb3IoZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb25BdXRoKHVzZXI6IGZpcmViYXNlLlVzZXIgfCBudWxsKSB7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXIhO1xuXG4gICAgICAgIGlmICh1c2VyKSB7XG5cbiAgICAgICAgICAgIGxvZy5ub3RpY2UoXCJXb3JraW5nIHdpdGggdXNlcjogXCIgKyB1c2VyLmVtYWlsKTtcblxuICAgICAgICAgICAgY29uc3QgYWNjb3VudERldGFpbHNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NvdW50LWRldGFpbHNcIik7XG5cbiAgICAgICAgICAgIGlmIChpc1ByZXNlbnQoYWNjb3VudERldGFpbHNFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGFjY291bnREZXRhaWxzRWxlbWVudCEuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkoZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLCBudWxsLCBcIiAgXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnRlc3RpbmdGdW5jdGlvbigpO1xuXG4gICAgICAgICAgICBtb2NoYS5ydW4oKG5yRmFpbHVyZXM6IG51bWJlcikgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKG5yRmFpbHVyZXMgPT09IDApXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byB3cml0ZSByZXN1bHRzOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGxvZy5lcnJvcihcIk5vIHVzZXJcIik7XG5cbiAgICAgICAgICAgIC8vIGluIGF1dG9tYXRlZCB0ZXN0aW5nIHdlIGhhdmUgdG8gZmFpbCBoZXJlIGJlY2F1c2Ugbm8gY29va2llcyBhcmVcbiAgICAgICAgICAgIC8vIHByZXNlbnQgdG8gcnVuIHRoaXMgdGVzdCBhbmQgc29tZW9uZSBuZWVkcyB0byBydW4gdGhlIHRlc3RcbiAgICAgICAgICAgIC8vIG1hbnVhbGx5IHRvIGxvZ2luIHRvIHN0b3JlIGRhdGFcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZShmYWxzZSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIG9uQXV0aEVycm9yKGZpcmViYXNlRXJyb3I6IGZpcmViYXNlLmF1dGguRXJyb3IpIHtcblxuICAgICAgICBsb2cuZXJyb3IoXCJGaXJlYmFzZSBlcnJvcjogXCIsIGZpcmViYXNlRXJyb3IpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZShmYWxzZSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IHNlbmQgcmVzdWx0OiBcIiwgZXJyKSk7XG4gICAgfVxuXG59XG4iXX0=