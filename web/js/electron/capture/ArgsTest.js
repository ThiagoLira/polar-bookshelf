"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assertions_1 = require("../../test/Assertions");
const Args_1 = require("./Args");
describe('Args', function () {
    describe('parse', function () {
        it("no args", function () {
            Assertions_1.assertJSON(Args_1.Args.parse([]), {
                "quit": true,
                "browser": "DEFAULT",
                "profile": "WEBVIEW",
                "amp": true
            });
        });
        it("change browser", function () {
            Assertions_1.assertJSON(Args_1.Args.parse(["--browser=TEST_BROWSER"]), {
                "browser": "TEST_BROWSER",
                "quit": true,
                "profile": "WEBVIEW",
                "amp": true
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJnc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcmdzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNEQUFpRDtBQUNqRCxpQ0FBNEI7QUFFNUIsUUFBUSxDQUFDLE1BQU0sRUFBRTtJQUViLFFBQVEsQ0FBQyxPQUFPLEVBQUU7UUFFZCxFQUFFLENBQUMsU0FBUyxFQUFFO1lBRVYsdUJBQVUsQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNuQixNQUFNLEVBQUUsSUFBSTtnQkFDWixTQUFTLEVBQUUsU0FBUztnQkFDcEIsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLEtBQUssRUFBRSxJQUFJO2FBQ2QsQ0FDSixDQUFDO1FBRU4sQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7WUFDakIsdUJBQVUsQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxTQUFTLEVBQUUsY0FBYztnQkFDekIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLEtBQUssRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtBcmdzfSBmcm9tICcuL0FyZ3MnO1xuXG5kZXNjcmliZSgnQXJncycsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ3BhcnNlJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJubyBhcmdzXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihBcmdzLnBhcnNlKFtdKSwge1xuICAgICAgICAgICAgICAgICAgICBcInF1aXRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJicm93c2VyXCI6IFwiREVGQVVMVFwiLFxuICAgICAgICAgICAgICAgICAgICBcInByb2ZpbGVcIjogXCJXRUJWSUVXXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYW1wXCI6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiY2hhbmdlIGJyb3dzZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXJ0SlNPTihBcmdzLnBhcnNlKFtcIi0tYnJvd3Nlcj1URVNUX0JST1dTRVJcIl0pLCB7XG4gICAgICAgICAgICAgICAgXCJicm93c2VyXCI6IFwiVEVTVF9CUk9XU0VSXCIsXG4gICAgICAgICAgICAgICAgXCJxdWl0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJwcm9maWxlXCI6IFwiV0VCVklFV1wiLFxuICAgICAgICAgICAgICAgIFwiYW1wXCI6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==