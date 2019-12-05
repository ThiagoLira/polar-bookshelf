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
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
const PROJECTS = {
    "polar-test2": {
        apiKey: "AIzaSyByrYfWcYQAFaBRroM-M96lWCyX0cp3SKg",
        authDomain: "polar-test2.firebaseapp.com",
        databaseURL: "https://polar-test2.firebaseio.com",
        projectId: "polar-test2",
        storageBucket: "polar-test2.appspot.com",
        messagingSenderId: "1051837764975",
        appId: "1:1051837764975:web:8f9f8fd4a3a9b76b"
    },
    "prod": {
        apiKey: "AIzaSyDokaZQO8TkmwtU4WKGnxKNyVumD79JYW0",
        authDomain: "polar-32b0f.firebaseapp.com",
        databaseURL: "https://polar-32b0f.firebaseio.com",
        projectId: "polar-32b0f",
        storageBucket: "polar-32b0f.appspot.com",
        messagingSenderId: "919499255851",
    }
};
class Firebase {
    static init() {
        if (this.app) {
            return this.app;
        }
        const project = process.env.POLAR_TEST_PROJECT || 'prod';
        log.info("Connecting to firebase with project: " + project);
        Preconditions_1.Preconditions.assertPresent(project, "project");
        const config = PROJECTS[project];
        Preconditions_1.Preconditions.assertPresent(config, "config");
        return this.app = firebase.initializeApp(config);
    }
    static currentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            Firebase.init();
            return new Promise((resolve, reject) => {
                const unsubscribe = firebase.auth()
                    .onAuthStateChanged((user) => {
                    unsubscribe();
                    resolve(user);
                }, (err) => {
                    unsubscribe();
                    reject(err);
                });
            });
        });
    }
    static currentUserID() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.currentUser();
            if (user) {
                return user.uid;
            }
            return undefined;
        });
    }
}
exports.Firebase = Firebase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaXJlYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5REFBMkM7QUFDM0Msa0VBQTZEO0FBQzdELDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxRQUFRLEdBQTZCO0lBRXZDLGFBQWEsRUFBRTtRQUNYLE1BQU0sRUFBRSx5Q0FBeUM7UUFDakQsVUFBVSxFQUFFLDZCQUE2QjtRQUN6QyxXQUFXLEVBQUUsb0NBQW9DO1FBQ2pELFNBQVMsRUFBRSxhQUFhO1FBQ3hCLGFBQWEsRUFBRSx5QkFBeUI7UUFDeEMsaUJBQWlCLEVBQUUsZUFBZTtRQUNsQyxLQUFLLEVBQUUsc0NBQXNDO0tBQ2hEO0lBQ0QsTUFBTSxFQUFFO1FBQ0osTUFBTSxFQUFFLHlDQUF5QztRQUNqRCxVQUFVLEVBQUUsNkJBQTZCO1FBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7UUFDakQsU0FBUyxFQUFFLGFBQWE7UUFDeEIsYUFBYSxFQUFFLHlCQUF5QjtRQUN4QyxpQkFBaUIsRUFBRSxjQUFjO0tBRXBDO0NBRUosQ0FBQztBQUVGLE1BQWEsUUFBUTtJQU9WLE1BQU0sQ0FBQyxJQUFJO1FBRWQsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ25CO1FBRUQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsSUFBSSxNQUFNLENBQUM7UUFFekQsR0FBRyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUU1RCw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFaEQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpDLDZCQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU5QyxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyRCxDQUFDO0lBRU0sTUFBTSxDQUFPLFdBQVc7O1lBRTNCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVoQixPQUFPLElBQUksT0FBTyxDQUF1QixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFFekQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRTtxQkFDOUIsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDTCxXQUFXLEVBQUUsQ0FBQztvQkFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsRUFDRCxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNKLFdBQVcsRUFBRSxDQUFDO29CQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLENBQUM7WUFFL0IsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sYUFBYTs7WUFFN0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFdEMsSUFBSyxJQUFJLEVBQUU7Z0JBQ1AsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ25CO1lBRUQsT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQztLQUFBO0NBRUo7QUExREQsNEJBMERDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICcuL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBQUk9KRUNUUzoge1twcm9qZWN0OiBzdHJpbmddOiBhbnl9ID0ge1xuXG4gICAgXCJwb2xhci10ZXN0MlwiOiB7XG4gICAgICAgIGFwaUtleTogXCJBSXphU3lCeXJZZldjWVFBRmFCUnJvTS1NOTZsV0N5WDBjcDNTS2dcIixcbiAgICAgICAgYXV0aERvbWFpbjogXCJwb2xhci10ZXN0Mi5maXJlYmFzZWFwcC5jb21cIixcbiAgICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9wb2xhci10ZXN0Mi5maXJlYmFzZWlvLmNvbVwiLFxuICAgICAgICBwcm9qZWN0SWQ6IFwicG9sYXItdGVzdDJcIixcbiAgICAgICAgc3RvcmFnZUJ1Y2tldDogXCJwb2xhci10ZXN0Mi5hcHBzcG90LmNvbVwiLFxuICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDUxODM3NzY0OTc1XCIsXG4gICAgICAgIGFwcElkOiBcIjE6MTA1MTgzNzc2NDk3NTp3ZWI6OGY5ZjhmZDRhM2E5Yjc2YlwiXG4gICAgfSxcbiAgICBcInByb2RcIjoge1xuICAgICAgICBhcGlLZXk6IFwiQUl6YVN5RG9rYVpRTzhUa213dFU0V0tHbnhLTnlWdW1ENzlKWVcwXCIsXG4gICAgICAgIGF1dGhEb21haW46IFwicG9sYXItMzJiMGYuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcG9sYXItMzJiMGYuZmlyZWJhc2Vpby5jb21cIixcbiAgICAgICAgcHJvamVjdElkOiBcInBvbGFyLTMyYjBmXCIsXG4gICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwicG9sYXItMzJiMGYuYXBwc3BvdC5jb21cIixcbiAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTE5NDk5MjU1ODUxXCIsXG4gICAgICAgIC8vIHRpbWVzdGFtcHNJblNuYXBzaG90czogdHJ1ZVxuICAgIH1cblxufTtcblxuZXhwb3J0IGNsYXNzIEZpcmViYXNlIHtcblxuICAgIHByaXZhdGUgc3RhdGljIGFwcD86IGZpcmViYXNlLmFwcC5BcHA7XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIGluaXQgb2YgRmlyZWJhc2Ugd2l0aCBvdXIgYXV0aCBjcmVkZW50aWFscy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKTogZmlyZWJhc2UuYXBwLkFwcCB7XG5cbiAgICAgICAgaWYgKHRoaXMuYXBwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvY2Vzcy5lbnYuUE9MQVJfVEVTVF9QUk9KRUNUIHx8ICdwcm9kJztcblxuICAgICAgICBsb2cuaW5mbyhcIkNvbm5lY3RpbmcgdG8gZmlyZWJhc2Ugd2l0aCBwcm9qZWN0OiBcIiArIHByb2plY3QpO1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChwcm9qZWN0LCBcInByb2plY3RcIik7XG5cbiAgICAgICAgY29uc3QgY29uZmlnID0gUFJPSkVDVFNbcHJvamVjdF07XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KGNvbmZpZywgXCJjb25maWdcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjdXJyZW50VXNlcigpOiBQcm9taXNlPGZpcmViYXNlLlVzZXIgfCBudWxsPiB7XG5cbiAgICAgICAgRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxmaXJlYmFzZS5Vc2VyIHwgbnVsbD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IGZpcmViYXNlLmF1dGgoKVxuICAgICAgICAgICAgICAgIC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3VycmVudFVzZXJJRCgpOiBQcm9taXNlPFVzZXJJRFN0ciB8IHVuZGVmaW5lZD4ge1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmN1cnJlbnRVc2VyKCk7XG5cbiAgICAgICAgaWYgICh1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlci51aWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBVc2VySURTdHIgPSBzdHJpbmc7XG5cbmV4cG9ydCB0eXBlIFVzZXJJRCA9IFVzZXJJRFN0cjtcblxuLyoqXG4gKiBGdW5jdGlvbiB3aG8ncyBzb2xlIHB1cnBvc2UgaXMgdW5zdWJzY3JpYmluZyB0byBzbmFwc2hvdHMuXG4gKi9cbmV4cG9ydCB0eXBlIFNuYXBzaG90VW5zdWJzY3JpYmVyID0gKCkgPT4gdm9pZDtcbiJdfQ==