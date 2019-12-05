"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mutator_1 = require("./Mutator");
const chai_1 = require("chai");
describe('Mutator', function () {
    it("Test mutation", function () {
        let name = {
            first: 'Alice',
            last: 'Smith'
        };
        name = Mutator_1.Mutator.mutate(name, (current) => {
            current.first = 'Bob';
            return current;
        });
        chai_1.assert.equal(name.first, 'Bob');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXV0YXRvclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNdXRhdG9yVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFrQztBQUNsQywrQkFBNEI7QUFFNUIsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUVoQixFQUFFLENBQUMsZUFBZSxFQUFFO1FBRWhCLElBQUksSUFBSSxHQUFtQjtZQUN2QixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUM7UUFLRixJQUFJLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDcEMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFHdEIsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFNSCxhQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFcEMsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TXV0YXRvcn0gZnJvbSAnLi9NdXRhdG9yJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcblxuZGVzY3JpYmUoJ011dGF0b3InLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiVGVzdCBtdXRhdGlvblwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBsZXQgbmFtZTogUmVhZG9ubHk8TmFtZT4gPSB7XG4gICAgICAgICAgICBmaXJzdDogJ0FsaWNlJyxcbiAgICAgICAgICAgIGxhc3Q6ICdTbWl0aCdcbiAgICAgICAgfTtcblxuICAgICAgICAvLyB0aGlzIHdpbGwgZ2l2ZSB1cyBhIGNvbXBpbGF0aW9uIGVycm9yXG4gICAgICAgIC8vIG5hbWUuZmlyc3QgPSAnQm9iJztcblxuICAgICAgICBuYW1lID0gTXV0YXRvci5tdXRhdGUobmFtZSwgKGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnQuZmlyc3QgPSAnQm9iJztcbiAgICAgICAgICAgIC8vIEZJWE1FOiBpdCdzIHRvbyBlYXN5IHRvIHJldHVybiB0aGUgd3Jvbmcgb2JqZWN0IGhlcmUuIEkgaGF2ZSB0b1xuICAgICAgICAgICAgLy8gZmluZCBhIHdheSB0byByZXR1cm4gdGhlIG5vbi1tdXRhYmxlIHZlcnNpb24uLi5cbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzIHdpbGwgc3RpbGwgZ2l2ZSBhIGNvbXBpbGF0aW9uIGVycm9yLlxuICAgICAgICAvLyBuYW1lLmZpcnN0ID0gJ0JvYic7XG5cbiAgICAgICAgLy8geWV0IHRoaXMgd29ya3MuXG4gICAgICAgIGFzc2VydC5lcXVhbChuYW1lLmZpcnN0LCAnQm9iJyk7XG5cbiAgICB9KTtcblxufSk7XG5cbmludGVyZmFjZSBOYW1lIHtcbiAgICBmaXJzdDogc3RyaW5nO1xuICAgIGxhc3Q6IHN0cmluZztcbn1cbiJdfQ==