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
const Executors_1 = require("./Executors");
const Latch_1 = require("polar-shared/src/util/Latch");
describe('Executors', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let iter = 0;
            const latch = new Latch_1.Latch();
            const completion = new Latch_1.Latch();
            const onCompletion = () => {
                completion.resolve(true);
            };
            Executors_1.Executors.runPeriodically({ interval: '100ms', maxIterations: 5, onCompletion }, () => {
                ++iter;
                if (iter === 5) {
                    latch.resolve(true);
                }
            });
            yield latch.get();
            yield completion.get();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhlY3V0b3JzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkV4ZWN1dG9yc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDdEMsdURBQWtEO0FBRWxELFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFFbEIsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFFUixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFFYixNQUFNLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1lBRTFCLE1BQU0sVUFBVSxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7WUFFL0IsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO2dCQUN0QixVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQztZQUVGLHFCQUFTLENBQUMsZUFBZSxDQUFFLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBQyxFQUFFLEdBQUcsRUFBRTtnQkFDakYsRUFBRSxJQUFJLENBQUM7Z0JBRVAsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO29CQUNaLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3ZCO1lBRUwsQ0FBQyxDQUFFLENBQUM7WUFFSixNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsQixNQUFNLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUUzQixDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V4ZWN1dG9yc30gZnJvbSAnLi9FeGVjdXRvcnMnO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9MYXRjaFwiO1xuXG5kZXNjcmliZSgnRXhlY3V0b3JzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGxldCBpdGVyID0gMDtcblxuICAgICAgICBjb25zdCBsYXRjaCA9IG5ldyBMYXRjaCgpO1xuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRpb24gPSBuZXcgTGF0Y2goKTtcblxuICAgICAgICBjb25zdCBvbkNvbXBsZXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb21wbGV0aW9uLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgRXhlY3V0b3JzLnJ1blBlcmlvZGljYWxseSgge2ludGVydmFsOiAnMTAwbXMnLCBtYXhJdGVyYXRpb25zOiA1LCBvbkNvbXBsZXRpb259LCAoKSA9PiB7XG4gICAgICAgICAgICArK2l0ZXI7XG5cbiAgICAgICAgICAgIGlmIChpdGVyID09PSA1KSB7XG4gICAgICAgICAgICAgICAgbGF0Y2gucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9ICk7XG5cbiAgICAgICAgYXdhaXQgbGF0Y2guZ2V0KCk7XG4gICAgICAgIGF3YWl0IGNvbXBsZXRpb24uZ2V0KCk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=