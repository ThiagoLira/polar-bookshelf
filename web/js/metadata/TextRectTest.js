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
const TextRect_1 = require("./TextRect");
const Assertions_1 = require("../test/Assertions");
describe('TextRect', function () {
    describe('Object as constructor', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let textRect = new TextRect_1.TextRect({
                    rect: {
                        left: 438.66666666666663,
                        top: 782.6666666666666,
                        width: 302.7884333333333,
                        height: 11.333333333333332,
                        right: 741.4550999999999,
                        bottom: 794
                    },
                    text: "hello world"
                });
                let expected = {
                    "text": "hello world",
                    "rect": {
                        "left": 438.66666666666663,
                        "top": 782.6666666666666,
                        "width": 302.7884333333333,
                        "height": 11.333333333333332,
                        "right": 741.4550999999999,
                        "bottom": 794
                    }
                };
                Assertions_1.assertJSON(textRect, expected);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFJlY3RUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGV4dFJlY3RUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLG1EQUE4QztBQUU5QyxRQUFRLENBQUMsVUFBVSxFQUFFO0lBRWpCLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTtRQUU5QixFQUFFLENBQUMsT0FBTyxFQUFFOztnQkFFUixJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUU7b0JBQ3pCLElBQUksRUFBRTt3QkFDRixJQUFJLEVBQUUsa0JBQWtCO3dCQUN4QixHQUFHLEVBQUUsaUJBQWlCO3dCQUN0QixLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixNQUFNLEVBQUUsa0JBQWtCO3dCQUMxQixLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixNQUFNLEVBQUUsR0FBRztxQkFDZDtvQkFDRCxJQUFJLEVBQUUsYUFBYTtpQkFDdEIsQ0FBQyxDQUFDO2dCQUVILElBQUksUUFBUSxHQUFHO29CQUNYLE1BQU0sRUFBRSxhQUFhO29CQUNyQixNQUFNLEVBQUU7d0JBQ0osTUFBTSxFQUFFLGtCQUFrQjt3QkFDMUIsS0FBSyxFQUFFLGlCQUFpQjt3QkFDeEIsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLEdBQUc7cUJBQ2hCO2lCQUNKLENBQUM7Z0JBRUYsdUJBQVUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFbkMsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RleHRSZWN0fSBmcm9tIFwiLi9UZXh0UmVjdFwiO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tIFwiLi4vdGVzdC9Bc3NlcnRpb25zXCI7XG5cbmRlc2NyaWJlKCdUZXh0UmVjdCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ09iamVjdCBhcyBjb25zdHJ1Y3RvcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBsZXQgdGV4dFJlY3QgPSBuZXcgVGV4dFJlY3QoIHtcbiAgICAgICAgICAgICAgICByZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQzOC42NjY2NjY2NjY2NjY2MyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA3ODIuNjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMi43ODg0MzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExLjMzMzMzMzMzMzMzMzMzMixcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDc0MS40NTUwOTk5OTk5OTk5LFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDc5NFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGV4dDogXCJoZWxsbyB3b3JsZFwiXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImhlbGxvIHdvcmxkXCIsXG4gICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDQzOC42NjY2NjY2NjY2NjY2MyxcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNzgyLjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMzAyLjc4ODQzMzMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDExLjMzMzMzMzMzMzMzMzMzMixcbiAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA3NDEuNDU1MDk5OTk5OTk5OSxcbiAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogNzk0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTih0ZXh0UmVjdCwgZXhwZWN0ZWQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19