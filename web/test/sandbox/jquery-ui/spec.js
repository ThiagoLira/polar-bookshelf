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
const WebDriverTestResultReader_1 = require("../../../js/test/results/reader/WebDriverTestResultReader");
const Spectron_1 = require("../../../js/test/Spectron");
const assert = require('assert');
const { Functions } = require("polar-shared/src/util/Functions");
describe('jquery-ui', function () {
    Spectron_1.Spectron.setup(__dirname);
    this.timeout(50000);
    it('shows an basic initial window', function () {
        return __awaiter(this, void 0, void 0, function* () {
            assert.equal(yield this.app.client.getWindowCount(), 1);
            let testResultReader = new WebDriverTestResultReader_1.WebDriverTestResultReader(this.app);
            assert.equal(yield testResultReader.read(), true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5R0FBb0c7QUFDcEcsd0RBQW1EO0FBR25ELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLEVBQUMsU0FBUyxFQUFDLEdBQUcsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFFL0QsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUVsQixtQkFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBCLEVBQUUsQ0FBQywrQkFBK0IsRUFBRTs7WUFFaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXhELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxxREFBeUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXRELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7V2ViRHJpdmVyVGVzdFJlc3VsdFJlYWRlcn0gZnJvbSAnLi4vLi4vLi4vanMvdGVzdC9yZXN1bHRzL3JlYWRlci9XZWJEcml2ZXJUZXN0UmVzdWx0UmVhZGVyJztcbmltcG9ydCB7U3BlY3Ryb259IGZyb20gJy4uLy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb24nO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi8uLi9qcy90ZXN0L0Fzc2VydGlvbnMnO1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcbmNvbnN0IHtGdW5jdGlvbnN9ID0gcmVxdWlyZShcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnNcIik7XG5cbmRlc2NyaWJlKCdqcXVlcnktdWknLCBmdW5jdGlvbigpIHtcblxuICAgIFNwZWN0cm9uLnNldHVwKF9fZGlybmFtZSk7XG4gICAgdGhpcy50aW1lb3V0KDUwMDAwKTtcblxuICAgIGl0KCdzaG93cyBhbiBiYXNpYyBpbml0aWFsIHdpbmRvdycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCB0aGlzLmFwcC5jbGllbnQuZ2V0V2luZG93Q291bnQoKSwgMSk7XG5cbiAgICAgICAgbGV0IHRlc3RSZXN1bHRSZWFkZXIgPSBuZXcgV2ViRHJpdmVyVGVzdFJlc3VsdFJlYWRlcih0aGlzLmFwcCk7XG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCB0ZXN0UmVzdWx0UmVhZGVyLnJlYWQoKSwgdHJ1ZSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=