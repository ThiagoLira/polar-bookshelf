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
const chai_1 = require("chai");
const Spectron_1 = require("../../js/test/Spectron");
const Assertions_1 = require("../../js/test/Assertions");
const TIMEOUT = 10000;
describe('Text Node Splitting', function () {
    this.timeout(TIMEOUT);
    Spectron_1.Spectron.setup(__dirname);
    xit('splitNode', function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(yield this.app.client.getWindowCount(), 1);
            let splitNodes = yield this.app.client.execute(() => {
                const { TextNodeRows } = require("../../js/highlights/text/selection/TextNodeRows");
                let p = document.querySelector("p");
                return TextNodeRows.splitElement(p);
            });
            chai_1.assert.equal(splitNodes.value, 1435);
        });
    });
    xit('computeTextRegions', function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(yield this.app.client.getWindowCount(), 1);
            let textRegions = yield this.app.client.execute(() => {
                const { TextNodeRows, NodeArray } = require("../../js/highlights/text/selection/TextNodeRows");
                let p = document.querySelector("p");
                TextNodeRows.splitElement(p);
                let nodeArray = NodeArray.createFromElement(p);
                if (nodeArray.constructor !== NodeArray) {
                    throw new Error("Got back the wrong object!");
                }
                let textRegions = TextNodeRows.computeTextRegions(nodeArray);
                return textRegions.map((current) => current.toJSON());
            });
            let expected = [
                {
                    "nrNodes": 284,
                    "text": "\n    1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    2.Sed pretium, dolor sed euismod tempor, diam urna\n    3.scelerisque tortor, vel semper ligula urna vel enim. Aenean\n    4.nec facilisis libero. Sed efficitur ac ligula in varius.\n    5.Pellentesque iaculis, enim ac "
                },
                {
                    "nrNodes": 12,
                    "text": "6. dignissim"
                },
                {
                    "nrNodes": 90,
                    "text": " aliquet, turpis\n    7.purus mattis felis, eget consequat eros velit et erat. 8.Curabitur "
                },
                {
                    "nrNodes": 10,
                    "text": "9. feugiat"
                },
                {
                    "nrNodes": 184,
                    "text": " 10.suscipit leo, vel\n\n\n    ultrices tortor sodales ut. Maecenas a magna eget nunc commodo rutrum ac et\n    augue. Quisque augue sem, ultricies ac ornare non, porta a eros. Morbi\n\n    "
                },
                {
                    "nrNodes": 5,
                    "text": "hello"
                },
                {
                    "nrNodes": 850,
                    "text": "\n\n    posuere, tellus nec cursus rhoncus, nibh leo ultricies urna, eget mollis mi\n    nisl nec purus. Mauris malesuada justo vitae finibus elementum. Donec\n    vestibulum erat ac sem consectetur eleifend. Nullam at nibh sed neque\n    accumsan tincidunt nec a enim. Aliquam pharetra orci tortor, eget gravida\n    felis dictum ac. Maecenas convallis nunc ultrices massa bibendum, et\n    dignissim elit tempus. Ut in luctus dolor, et maximus nisi. Etiam non\n    euismod sem.\n\n    Vestibulum pulvinar bibendum turpis at sodales. Vestibulum consectetur nulla\n    elementum eros rhoncus, non interdum diam tristique. Praesent interdum quam\n    in lacus finibus semper. Phasellus id feugiat tortor. Integer sed molestie\n    urna, a sodales libero. Morbi egestas egestas tortor sed sagittis. Aenean et\n    tellus non quam pellentesque ultrices vel non odio.\n"
                }
            ];
            Assertions_1.assertJSON(textRegions.value, expected);
        });
    });
    xit('computeTextBlocks', function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(yield this.app.client.getWindowCount(), 1);
            let textBlocks = yield this.app.client.execute(() => {
                const { TextNodeRows, NodeArray } = require("../../js/highlights/text/selection/TextNodeRows");
                let p = document.querySelector("p");
                TextNodeRows.splitElement(p);
                let nodeArray = NodeArray.createFromElement(p);
                let textRegions = TextNodeRows.computeTextRegions(nodeArray);
                let textBlocks = TextNodeRows.computeTextBlocks(textRegions);
                return textBlocks.map((current) => current.toJSON());
            });
            let expected = [
                {
                    "nrNodes": 68,
                    "text": "\n    1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    "
                },
                {
                    "nrNodes": 55,
                    "text": "2.Sed pretium, dolor sed euismod tempor, diam urna\n    "
                },
                {
                    "nrNodes": 66,
                    "text": "3.scelerisque tortor, vel semper ligula urna vel enim. Aenean\n    "
                },
                {
                    "nrNodes": 63,
                    "text": "4.nec facilisis libero. Sed efficitur ac ligula in varius.\n    "
                },
                {
                    "nrNodes": 32,
                    "text": "5.Pellentesque iaculis, enim ac "
                },
                {
                    "nrNodes": 12,
                    "text": "6. dignissim"
                },
                {
                    "nrNodes": 21,
                    "text": " aliquet, turpis\n    "
                },
                {
                    "nrNodes": 57,
                    "text": "7.purus mattis felis, eget consequat eros velit et erat. "
                },
                {
                    "nrNodes": 12,
                    "text": "8.Curabitur "
                },
                {
                    "nrNodes": 10,
                    "text": "9. feugiat"
                },
                {
                    "nrNodes": 44,
                    "text": " 10.suscipit leo, vel\n\n\n    ultrices tortor "
                },
                {
                    "nrNodes": 54,
                    "text": "sodales ut. Maecenas a magna eget nunc commodo rutrum "
                },
                {
                    "nrNodes": 61,
                    "text": "ac et\n    augue. Quisque augue sem, ultricies ac ornare non, "
                },
                {
                    "nrNodes": 25,
                    "text": "porta a eros. Morbi\n\n    "
                },
                {
                    "nrNodes": 5,
                    "text": "hello"
                },
                {
                    "nrNodes": 33,
                    "text": "\n\n    posuere, tellus nec cursus "
                },
                {
                    "nrNodes": 62,
                    "text": "rhoncus, nibh leo ultricies urna, eget mollis mi\n    nisl nec "
                },
                {
                    "nrNodes": 55,
                    "text": "purus. Mauris malesuada justo vitae finibus elementum. "
                },
                {
                    "nrNodes": 62,
                    "text": "Donec\n    vestibulum erat ac sem consectetur eleifend. Nullam "
                },
                {
                    "nrNodes": 61,
                    "text": "at nibh sed neque\n    accumsan tincidunt nec a enim. Aliquam "
                },
                {
                    "nrNodes": 65,
                    "text": "pharetra orci tortor, eget gravida\n    felis dictum ac. Maecenas "
                },
                {
                    "nrNodes": 62,
                    "text": "convallis nunc ultrices massa bibendum, et\n    dignissim elit "
                },
                {
                    "nrNodes": 59,
                    "text": "tempus. Ut in luctus dolor, et maximus nisi. Etiam non\n    "
                },
                {
                    "nrNodes": 57,
                    "text": "euismod sem.\n\n    Vestibulum pulvinar bibendum turpis at "
                },
                {
                    "nrNodes": 57,
                    "text": "sodales. Vestibulum consectetur nulla\n    elementum eros "
                },
                {
                    "nrNodes": 56,
                    "text": "rhoncus, non interdum diam tristique. Praesent interdum "
                },
                {
                    "nrNodes": 63,
                    "text": "quam\n    in lacus finibus semper. Phasellus id feugiat tortor. "
                },
                {
                    "nrNodes": 63,
                    "text": "Integer sed molestie\n    urna, a sodales libero. Morbi egestas "
                },
                {
                    "nrNodes": 59,
                    "text": "egestas tortor sed sagittis. Aenean et\n    tellus non quam "
                },
                {
                    "nrNodes": 36,
                    "text": "pellentesque ultrices vel non odio.\n"
                }
            ];
            Assertions_1.assertJSON(textBlocks.value, expected);
        });
    });
    xit('mergeTextBlocks', function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(yield this.app.client.getWindowCount(), 1);
            let textBlocks = yield this.app.client.execute(() => {
                const { TextNodeRows, NodeArray } = require("../../js/highlights/text/selection/TextNodeRows");
                let p = document.querySelector("p");
                TextNodeRows.splitElement(p);
                let nodeArray = NodeArray.createFromElement(p);
                let textRegions = TextNodeRows.computeTextRegions(nodeArray);
                let textBlocks = TextNodeRows.computeTextBlocks(textRegions);
                let mergedTextBlocks = TextNodeRows.mergeTextBlocks(textBlocks);
                return mergedTextBlocks.map((current) => current.toExternal());
            });
            let expected = [
                {
                    "rect": {
                        "bottom": 100,
                        "height": 19,
                        "left": 8,
                        "right": 478.3125,
                        "toJSON": {},
                        "top": 81,
                        "width": 470.3125,
                        "x": 8,
                        "y": 81
                    },
                    "text": "\n    1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    "
                },
                {
                    "rect": {
                        "bottom": 119,
                        "height": 19,
                        "left": 8,
                        "right": 437.140625,
                        "toJSON": {},
                        "top": 100,
                        "width": 429.140625,
                        "x": 8,
                        "y": 100
                    },
                    "text": "2.Sed pretium, dolor sed euismod tempor, diam urna\n    "
                },
                {
                    "rect": {
                        "bottom": 138,
                        "height": 19,
                        "left": 8,
                        "right": 503.40625,
                        "toJSON": {},
                        "top": 119,
                        "width": 495.40625,
                        "x": 8,
                        "y": 119
                    },
                    "text": "3.scelerisque tortor, vel semper ligula urna vel enim. Aenean\n    "
                },
                {
                    "rect": {
                        "bottom": 157,
                        "height": 19,
                        "left": 8,
                        "right": 435.421875,
                        "toJSON": {},
                        "top": 138,
                        "width": 427.421875,
                        "x": 8,
                        "y": 138
                    },
                    "text": "4.nec facilisis libero. Sed efficitur ac ligula in varius.\n    "
                },
                {
                    "rect": {
                        "bottom": 176,
                        "height": 19,
                        "left": 8,
                        "right": 263.265625,
                        "toJSON": {},
                        "top": 157,
                        "width": 255.265625,
                        "x": 8,
                        "y": 157
                    },
                    "text": "5.Pellentesque iaculis, enim ac "
                },
                {
                    "rect": {
                        "bottom": 176,
                        "height": 19,
                        "left": 263.265625,
                        "right": 361.34375,
                        "toJSON": {},
                        "top": 157,
                        "width": 98.078125,
                        "x": 263.265625,
                        "y": 157
                    },
                    "text": "6. dignissim"
                },
                {
                    "rect": {
                        "bottom": 176,
                        "height": 19,
                        "left": 361.34375,
                        "right": 480.765625,
                        "toJSON": {},
                        "top": 157,
                        "width": 119.421875,
                        "x": 361.34375,
                        "y": 157
                    },
                    "text": " aliquet, turpis\n    "
                },
                {
                    "rect": {
                        "bottom": 195,
                        "height": 19,
                        "left": 8,
                        "right": 443.390625,
                        "toJSON": {},
                        "top": 176,
                        "width": 435.390625,
                        "x": 8,
                        "y": 176
                    },
                    "text": "7.purus mattis felis, eget consequat eros velit et erat. "
                },
                {
                    "rect": {
                        "bottom": 214,
                        "height": 19,
                        "left": 8,
                        "right": 107.828125,
                        "toJSON": {},
                        "top": 195,
                        "width": 99.828125,
                        "x": 8,
                        "y": 195
                    },
                    "text": "8.Curabitur "
                },
                {
                    "rect": {
                        "bottom": 214,
                        "height": 19,
                        "left": 107.828125,
                        "right": 193.8125,
                        "toJSON": {},
                        "top": 195,
                        "width": 85.984375,
                        "x": 107.828125,
                        "y": 195
                    },
                    "text": "9. feugiat"
                },
                {
                    "rect": {
                        "bottom": 214,
                        "height": 19,
                        "left": 193.8125,
                        "right": 468.890625,
                        "toJSON": {},
                        "top": 195,
                        "width": 275.078125,
                        "x": 193.8125,
                        "y": 195
                    },
                    "text": " 10.suscipit leo, vel\n\n\n    ultrices tortor "
                },
                {
                    "rect": {
                        "bottom": 233,
                        "height": 19,
                        "left": 8,
                        "right": 488.578125,
                        "toJSON": {},
                        "top": 214,
                        "width": 480.578125,
                        "x": 8,
                        "y": 214
                    },
                    "text": "sodales ut. Maecenas a magna eget nunc commodo rutrum "
                },
                {
                    "rect": {
                        "bottom": 252,
                        "height": 19,
                        "left": 8,
                        "right": 472.109375,
                        "toJSON": {},
                        "top": 233,
                        "width": 464.109375,
                        "x": 8,
                        "y": 233
                    },
                    "text": "ac et\n    augue. Quisque augue sem, ultricies ac ornare non, "
                },
                {
                    "rect": {
                        "bottom": 271,
                        "height": 19,
                        "left": 8,
                        "right": 170.4375,
                        "toJSON": {},
                        "top": 252,
                        "width": 162.4375,
                        "x": 8,
                        "y": 252
                    },
                    "text": "porta a eros. Morbi\n\n    "
                },
                {
                    "rect": {
                        "bottom": 271,
                        "height": 19,
                        "left": 170.4375,
                        "right": 215.078125,
                        "toJSON": {},
                        "top": 252,
                        "width": 44.640625,
                        "x": 170.4375,
                        "y": 252
                    },
                    "text": "hello"
                },
                {
                    "rect": {
                        "bottom": 271,
                        "height": 19,
                        "left": 215.078125,
                        "right": 432.5,
                        "toJSON": {},
                        "top": 252,
                        "width": 217.421875,
                        "x": 215.078125,
                        "y": 252
                    },
                    "text": "\n\n    posuere, tellus nec cursus "
                },
                {
                    "rect": {
                        "bottom": 290,
                        "height": 19,
                        "left": 8,
                        "right": 455.40625,
                        "toJSON": {},
                        "top": 271,
                        "width": 447.40625,
                        "x": 8,
                        "y": 271
                    },
                    "text": "rhoncus, nibh leo ultricies urna, eget mollis mi\n    nisl nec "
                },
                {
                    "rect": {
                        "bottom": 309,
                        "height": 19,
                        "left": 8,
                        "right": 464.625,
                        "toJSON": {},
                        "top": 290,
                        "width": 456.625,
                        "x": 8,
                        "y": 290
                    },
                    "text": "purus. Mauris malesuada justo vitae finibus elementum. "
                },
                {
                    "rect": {
                        "bottom": 328,
                        "height": 19,
                        "left": 8,
                        "right": 493.90625,
                        "toJSON": {},
                        "top": 309,
                        "width": 485.90625,
                        "x": 8,
                        "y": 309
                    },
                    "text": "Donec\n    vestibulum erat ac sem consectetur eleifend. Nullam "
                },
                {
                    "rect": {
                        "bottom": 347,
                        "height": 19,
                        "left": 8,
                        "right": 488.078125,
                        "toJSON": {},
                        "top": 328,
                        "width": 480.078125,
                        "x": 8,
                        "y": 328
                    },
                    "text": "at nibh sed neque\n    accumsan tincidunt nec a enim. Aliquam "
                },
                {
                    "rect": {
                        "bottom": 366,
                        "height": 19,
                        "left": 8,
                        "right": 494.109375,
                        "toJSON": {},
                        "top": 347,
                        "width": 486.109375,
                        "x": 8,
                        "y": 347
                    },
                    "text": "pharetra orci tortor, eget gravida\n    felis dictum ac. Maecenas "
                },
                {
                    "rect": {
                        "bottom": 385,
                        "height": 19,
                        "left": 8,
                        "right": 472.390625,
                        "toJSON": {},
                        "top": 366,
                        "width": 464.390625,
                        "x": 8,
                        "y": 366
                    },
                    "text": "convallis nunc ultrices massa bibendum, et\n    dignissim elit "
                },
                {
                    "rect": {
                        "bottom": 404,
                        "height": 19,
                        "left": 8,
                        "right": 449.40625,
                        "toJSON": {},
                        "top": 385,
                        "width": 441.40625,
                        "x": 8,
                        "y": 385
                    },
                    "text": "tempus. Ut in luctus dolor, et maximus nisi. Etiam non\n    "
                },
                {
                    "rect": {
                        "bottom": 423,
                        "height": 19,
                        "left": 8,
                        "right": 447.375,
                        "toJSON": {},
                        "top": 404,
                        "width": 439.375,
                        "x": 8,
                        "y": 404
                    },
                    "text": "euismod sem.\n\n    Vestibulum pulvinar bibendum turpis at "
                },
                {
                    "rect": {
                        "bottom": 442,
                        "height": 19,
                        "left": 8,
                        "right": 451.453125,
                        "toJSON": {},
                        "top": 423,
                        "width": 443.453125,
                        "x": 8,
                        "y": 423
                    },
                    "text": "sodales. Vestibulum consectetur nulla\n    elementum eros "
                },
                {
                    "rect": {
                        "bottom": 461,
                        "height": 19,
                        "left": 8,
                        "right": 474.546875,
                        "toJSON": {},
                        "top": 442,
                        "width": 466.546875,
                        "x": 8,
                        "y": 442
                    },
                    "text": "rhoncus, non interdum diam tristique. Praesent interdum "
                },
                {
                    "rect": {
                        "bottom": 480,
                        "height": 19,
                        "left": 8,
                        "right": 470.0625,
                        "toJSON": {},
                        "top": 461,
                        "width": 462.0625,
                        "x": 8,
                        "y": 461
                    },
                    "text": "quam\n    in lacus finibus semper. Phasellus id feugiat tortor. "
                },
                {
                    "rect": {
                        "bottom": 499,
                        "height": 19,
                        "left": 8,
                        "right": 480.5625,
                        "toJSON": {},
                        "top": 480,
                        "width": 472.5625,
                        "x": 8,
                        "y": 480
                    },
                    "text": "Integer sed molestie\n    urna, a sodales libero. Morbi egestas "
                },
                {
                    "rect": {
                        "bottom": 518,
                        "height": 19,
                        "left": 8,
                        "right": 446.65625,
                        "toJSON": {},
                        "top": 499,
                        "width": 438.65625,
                        "x": 8,
                        "y": 499
                    },
                    "text": "egestas tortor sed sagittis. Aenean et\n    tellus non quam "
                },
                {
                    "rect": {
                        "bottom": 537,
                        "height": 19,
                        "left": 8,
                        "right": 286.734375,
                        "toJSON": {},
                        "top": 518,
                        "width": 278.734375,
                        "x": 8,
                        "y": 518
                    },
                    "text": "pellentesque ultrices vel non odio.\n"
                }
            ];
            Assertions_1.assertJSON(textBlocks.value, expected);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIscURBQWdEO0FBQ2hELHlEQUFvRDtBQUVwRCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUE7QUFFckIsUUFBUSxDQUFDLHFCQUFxQixFQUFFO0lBRTVCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdEIsbUJBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFMUIsR0FBRyxDQUFDLFdBQVcsRUFBRTs7WUFFYixhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFHeEQsSUFBSSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO2dCQUVoRCxNQUFNLEVBQUMsWUFBWSxFQUFDLEdBQUcsT0FBTyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7Z0JBRWxGLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXBDLE9BQU8sWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4QyxDQUFDLENBQUMsQ0FBQztZQUVILGFBQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV6QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLG9CQUFvQixFQUFFOztZQUV0QixhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFHeEQsSUFBSSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMs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QVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTNDLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7U3BlY3Ryb259IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb24nO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi9qcy90ZXN0L0Fzc2VydGlvbnMnO1xuXG5jb25zdCBUSU1FT1VUID0gMTAwMDBcblxuZGVzY3JpYmUoJ1RleHQgTm9kZSBTcGxpdHRpbmcnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICB0aGlzLnRpbWVvdXQoVElNRU9VVCk7XG5cbiAgICBTcGVjdHJvbi5zZXR1cChfX2Rpcm5hbWUpO1xuXG4gICAgeGl0KCdzcGxpdE5vZGUnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKGF3YWl0IHRoaXMuYXBwLmNsaWVudC5nZXRXaW5kb3dDb3VudCgpLCAxKTtcblxuICAgICAgICAvLyBmaXJzdCBjaGVjayB0aGF0IHdlIGNhbiBzcGxpdCB0aGUgYmFzaWMgbm9kZXMgcHJvcGVybHkuXG4gICAgICAgIGxldCBzcGxpdE5vZGVzID0gYXdhaXQgdGhpcy5hcHAuY2xpZW50LmV4ZWN1dGUoKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB7VGV4dE5vZGVSb3dzfSA9IHJlcXVpcmUoXCIuLi8uLi9qcy9oaWdobGlnaHRzL3RleHQvc2VsZWN0aW9uL1RleHROb2RlUm93c1wiKTtcblxuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicFwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIFRleHROb2RlUm93cy5zcGxpdEVsZW1lbnQocCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHNwbGl0Tm9kZXMudmFsdWUsIDE0MzUpO1xuXG4gICAgfSk7XG5cbiAgICB4aXQoJ2NvbXB1dGVUZXh0UmVnaW9ucycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgdGhpcy5hcHAuY2xpZW50LmdldFdpbmRvd0NvdW50KCksIDEpO1xuXG4gICAgICAgIC8vIGZpcnN0IGNoZWNrIHRoYXQgd2UgY2FuIHNwbGl0IHRoZSBiYXNpYyBub2RlcyBwcm9wZXJseS5cbiAgICAgICAgbGV0IHRleHRSZWdpb25zID0gYXdhaXQgdGhpcy5hcHAuY2xpZW50LmV4ZWN1dGUoKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB7VGV4dE5vZGVSb3dzLCBOb2RlQXJyYXl9ID0gcmVxdWlyZShcIi4uLy4uL2pzL2hpZ2hsaWdodHMvdGV4dC9zZWxlY3Rpb24vVGV4dE5vZGVSb3dzXCIpO1xuXG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuXG4gICAgICAgICAgICBUZXh0Tm9kZVJvd3Muc3BsaXRFbGVtZW50KHApO1xuICAgICAgICAgICAgbGV0IG5vZGVBcnJheSA9IE5vZGVBcnJheS5jcmVhdGVGcm9tRWxlbWVudChwKTtcblxuICAgICAgICAgICAgaWYobm9kZUFycmF5LmNvbnN0cnVjdG9yICE9PSBOb2RlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHb3QgYmFjayB0aGUgd3Jvbmcgb2JqZWN0IVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRleHRSZWdpb25zID0gVGV4dE5vZGVSb3dzLmNvbXB1dGVUZXh0UmVnaW9ucyhub2RlQXJyYXkpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGV4dFJlZ2lvbnMubWFwKChjdXJyZW50OiBhbnkpID0+IGN1cnJlbnQudG9KU09OKCkpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBleHBlY3RlZCA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogMjg0LFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlxcbiAgICAxLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXFxuICAgIDIuU2VkIHByZXRpdW0sIGRvbG9yIHNlZCBldWlzbW9kIHRlbXBvciwgZGlhbSB1cm5hXFxuICAgIDMuc2NlbGVyaXNxdWUgdG9ydG9yLCB2ZWwgc2VtcGVyIGxpZ3VsYSB1cm5hIHZlbCBlbmltLiBBZW5lYW5cXG4gICAgNC5uZWMgZmFjaWxpc2lzIGxpYmVyby4gU2VkIGVmZmljaXR1ciBhYyBsaWd1bGEgaW4gdmFyaXVzLlxcbiAgICA1LlBlbGxlbnRlc3F1ZSBpYWN1bGlzLCBlbmltIGFjIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiAxMixcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCI2LiBkaWduaXNzaW1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogOTAsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiIGFsaXF1ZXQsIHR1cnBpc1xcbiAgICA3LnB1cnVzIG1hdHRpcyBmZWxpcywgZWdldCBjb25zZXF1YXQgZXJvcyB2ZWxpdCBldCBlcmF0LiA4LkN1cmFiaXR1ciBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogMTAsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiOS4gZmV1Z2lhdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiAxODQsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiIDEwLnN1c2NpcGl0IGxlbywgdmVsXFxuXFxuXFxuICAgIHVsdHJpY2VzIHRvcnRvciBzb2RhbGVzIHV0LiBNYWVjZW5hcyBhIG1hZ25hIGVnZXQgbnVuYyBjb21tb2RvIHJ1dHJ1bSBhYyBldFxcbiAgICBhdWd1ZS4gUXVpc3F1ZSBhdWd1ZSBzZW0sIHVsdHJpY2llcyBhYyBvcm5hcmUgbm9uLCBwb3J0YSBhIGVyb3MuIE1vcmJpXFxuXFxuICAgIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA1LFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImhlbGxvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDg1MCxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcXG5cXG4gICAgcG9zdWVyZSwgdGVsbHVzIG5lYyBjdXJzdXMgcmhvbmN1cywgbmliaCBsZW8gdWx0cmljaWVzIHVybmEsIGVnZXQgbW9sbGlzIG1pXFxuICAgIG5pc2wgbmVjIHB1cnVzLiBNYXVyaXMgbWFsZXN1YWRhIGp1c3RvIHZpdGFlIGZpbmlidXMgZWxlbWVudHVtLiBEb25lY1xcbiAgICB2ZXN0aWJ1bHVtIGVyYXQgYWMgc2VtIGNvbnNlY3RldHVyIGVsZWlmZW5kLiBOdWxsYW0gYXQgbmliaCBzZWQgbmVxdWVcXG4gICAgYWNjdW1zYW4gdGluY2lkdW50IG5lYyBhIGVuaW0uIEFsaXF1YW0gcGhhcmV0cmEgb3JjaSB0b3J0b3IsIGVnZXQgZ3JhdmlkYVxcbiAgICBmZWxpcyBkaWN0dW0gYWMuIE1hZWNlbmFzIGNvbnZhbGxpcyBudW5jIHVsdHJpY2VzIG1hc3NhIGJpYmVuZHVtLCBldFxcbiAgICBkaWduaXNzaW0gZWxpdCB0ZW1wdXMuIFV0IGluIGx1Y3R1cyBkb2xvciwgZXQgbWF4aW11cyBuaXNpLiBFdGlhbSBub25cXG4gICAgZXVpc21vZCBzZW0uXFxuXFxuICAgIFZlc3RpYnVsdW0gcHVsdmluYXIgYmliZW5kdW0gdHVycGlzIGF0IHNvZGFsZXMuIFZlc3RpYnVsdW0gY29uc2VjdGV0dXIgbnVsbGFcXG4gICAgZWxlbWVudHVtIGVyb3MgcmhvbmN1cywgbm9uIGludGVyZHVtIGRpYW0gdHJpc3RpcXVlLiBQcmFlc2VudCBpbnRlcmR1bSBxdWFtXFxuICAgIGluIGxhY3VzIGZpbmlidXMgc2VtcGVyLiBQaGFzZWxsdXMgaWQgZmV1Z2lhdCB0b3J0b3IuIEludGVnZXIgc2VkIG1vbGVzdGllXFxuICAgIHVybmEsIGEgc29kYWxlcyBsaWJlcm8uIE1vcmJpIGVnZXN0YXMgZWdlc3RhcyB0b3J0b3Igc2VkIHNhZ2l0dGlzLiBBZW5lYW4gZXRcXG4gICAgdGVsbHVzIG5vbiBxdWFtIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcyB2ZWwgbm9uIG9kaW8uXFxuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBhc3NlcnRKU09OKHRleHRSZWdpb25zLnZhbHVlLCBleHBlY3RlZCk7XG5cbiAgICB9KTtcblxuICAgIHhpdCgnY29tcHV0ZVRleHRCbG9ja3MnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKGF3YWl0IHRoaXMuYXBwLmNsaWVudC5nZXRXaW5kb3dDb3VudCgpLCAxKTtcblxuICAgICAgICAvLyBmaXJzdCBjaGVjayB0aGF0IHdlIGNhbiBzcGxpdCB0aGUgYmFzaWMgbm9kZXMgcHJvcGVybHkuXG4gICAgICAgIGxldCB0ZXh0QmxvY2tzID0gYXdhaXQgdGhpcy5hcHAuY2xpZW50LmV4ZWN1dGUoKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB7VGV4dE5vZGVSb3dzLCBOb2RlQXJyYXl9ID0gcmVxdWlyZShcIi4uLy4uL2pzL2hpZ2hsaWdodHMvdGV4dC9zZWxlY3Rpb24vVGV4dE5vZGVSb3dzXCIpO1xuXG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuXG4gICAgICAgICAgICBUZXh0Tm9kZVJvd3Muc3BsaXRFbGVtZW50KHApO1xuXG4gICAgICAgICAgICBsZXQgbm9kZUFycmF5ID0gTm9kZUFycmF5LmNyZWF0ZUZyb21FbGVtZW50KHApO1xuICAgICAgICAgICAgbGV0IHRleHRSZWdpb25zID0gVGV4dE5vZGVSb3dzLmNvbXB1dGVUZXh0UmVnaW9ucyhub2RlQXJyYXkpO1xuICAgICAgICAgICAgbGV0IHRleHRCbG9ja3MgPSBUZXh0Tm9kZVJvd3MuY29tcHV0ZVRleHRCbG9ja3ModGV4dFJlZ2lvbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGV4dEJsb2Nrcy5tYXAoKGN1cnJlbnQ6IGFueSkgPT4gY3VycmVudC50b0pTT04oKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGV4cGVjdGVkID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA2OCxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcXG4gICAgMS5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxcbiAgICBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNTUsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiMi5TZWQgcHJldGl1bSwgZG9sb3Igc2VkIGV1aXNtb2QgdGVtcG9yLCBkaWFtIHVybmFcXG4gICAgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDY2LFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjMuc2NlbGVyaXNxdWUgdG9ydG9yLCB2ZWwgc2VtcGVyIGxpZ3VsYSB1cm5hIHZlbCBlbmltLiBBZW5lYW5cXG4gICAgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDYzLFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjQubmVjIGZhY2lsaXNpcyBsaWJlcm8uIFNlZCBlZmZpY2l0dXIgYWMgbGlndWxhIGluIHZhcml1cy5cXG4gICAgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDMyLFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjUuUGVsbGVudGVzcXVlIGlhY3VsaXMsIGVuaW0gYWMgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDEyLFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjYuIGRpZ25pc3NpbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiAyMSxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIgYWxpcXVldCwgdHVycGlzXFxuICAgIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA1NyxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCI3LnB1cnVzIG1hdHRpcyBmZWxpcywgZWdldCBjb25zZXF1YXQgZXJvcyB2ZWxpdCBldCBlcmF0LiBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogMTIsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiOC5DdXJhYml0dXIgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDEwLFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjkuIGZldWdpYXRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNDQsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiIDEwLnN1c2NpcGl0IGxlbywgdmVsXFxuXFxuXFxuICAgIHVsdHJpY2VzIHRvcnRvciBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNTQsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwic29kYWxlcyB1dC4gTWFlY2VuYXMgYSBtYWduYSBlZ2V0IG51bmMgY29tbW9kbyBydXRydW0gXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDYxLFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImFjIGV0XFxuICAgIGF1Z3VlLiBRdWlzcXVlIGF1Z3VlIHNlbSwgdWx0cmljaWVzIGFjIG9ybmFyZSBub24sIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiAyNSxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJwb3J0YSBhIGVyb3MuIE1vcmJpXFxuXFxuICAgIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA1LFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImhlbGxvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDMzLFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlxcblxcbiAgICBwb3N1ZXJlLCB0ZWxsdXMgbmVjIGN1cnN1cyBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNjIsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwicmhvbmN1cywgbmliaCBsZW8gdWx0cmljaWVzIHVybmEsIGVnZXQgbW9sbGlzIG1pXFxuICAgIG5pc2wgbmVjIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA1NSxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJwdXJ1cy4gTWF1cmlzIG1hbGVzdWFkYSBqdXN0byB2aXRhZSBmaW5pYnVzIGVsZW1lbnR1bS4gXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDYyLFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkRvbmVjXFxuICAgIHZlc3RpYnVsdW0gZXJhdCBhYyBzZW0gY29uc2VjdGV0dXIgZWxlaWZlbmQuIE51bGxhbSBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNjEsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiYXQgbmliaCBzZWQgbmVxdWVcXG4gICAgYWNjdW1zYW4gdGluY2lkdW50IG5lYyBhIGVuaW0uIEFsaXF1YW0gXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDY1LFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInBoYXJldHJhIG9yY2kgdG9ydG9yLCBlZ2V0IGdyYXZpZGFcXG4gICAgZmVsaXMgZGljdHVtIGFjLiBNYWVjZW5hcyBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNjIsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiY29udmFsbGlzIG51bmMgdWx0cmljZXMgbWFzc2EgYmliZW5kdW0sIGV0XFxuICAgIGRpZ25pc3NpbSBlbGl0IFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiA1OSxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJ0ZW1wdXMuIFV0IGluIGx1Y3R1cyBkb2xvciwgZXQgbWF4aW11cyBuaXNpLiBFdGlhbSBub25cXG4gICAgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuck5vZGVzXCI6IDU3LFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImV1aXNtb2Qgc2VtLlxcblxcbiAgICBWZXN0aWJ1bHVtIHB1bHZpbmFyIGJpYmVuZHVtIHR1cnBpcyBhdCBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNTcsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwic29kYWxlcy4gVmVzdGlidWx1bSBjb25zZWN0ZXR1ciBudWxsYVxcbiAgICBlbGVtZW50dW0gZXJvcyBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNTYsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwicmhvbmN1cywgbm9uIGludGVyZHVtIGRpYW0gdHJpc3RpcXVlLiBQcmFlc2VudCBpbnRlcmR1bSBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNjMsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwicXVhbVxcbiAgICBpbiBsYWN1cyBmaW5pYnVzIHNlbXBlci4gUGhhc2VsbHVzIGlkIGZldWdpYXQgdG9ydG9yLiBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNjMsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiSW50ZWdlciBzZWQgbW9sZXN0aWVcXG4gICAgdXJuYSwgYSBzb2RhbGVzIGxpYmVyby4gTW9yYmkgZWdlc3RhcyBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5yTm9kZXNcIjogNTksXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiZWdlc3RhcyB0b3J0b3Igc2VkIHNhZ2l0dGlzLiBBZW5lYW4gZXRcXG4gICAgdGVsbHVzIG5vbiBxdWFtIFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibnJOb2Rlc1wiOiAzNixcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJwZWxsZW50ZXNxdWUgdWx0cmljZXMgdmVsIG5vbiBvZGlvLlxcblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgYXNzZXJ0SlNPTih0ZXh0QmxvY2tzLnZhbHVlLCBleHBlY3RlZCk7XG5cbiAgICB9KTtcblxuICAgIHhpdCgnbWVyZ2VUZXh0QmxvY2tzJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCB0aGlzLmFwcC5jbGllbnQuZ2V0V2luZG93Q291bnQoKSwgMSk7XG5cbiAgICAgICAgLy8gZmlyc3QgY2hlY2sgdGhhdCB3ZSBjYW4gc3BsaXQgdGhlIGJhc2ljIG5vZGVzIHByb3Blcmx5LlxuICAgICAgICBsZXQgdGV4dEJsb2NrcyA9IGF3YWl0IHRoaXMuYXBwLmNsaWVudC5leGVjdXRlKCgpID0+IHtcblxuICAgICAgICAgICAgY29uc3Qge1RleHROb2RlUm93cywgTm9kZUFycmF5fSA9IHJlcXVpcmUoXCIuLi8uLi9qcy9oaWdobGlnaHRzL3RleHQvc2VsZWN0aW9uL1RleHROb2RlUm93c1wiKTtcblxuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicFwiKTtcblxuICAgICAgICAgICAgVGV4dE5vZGVSb3dzLnNwbGl0RWxlbWVudChwKTtcbiAgICAgICAgICAgIGxldCBub2RlQXJyYXkgPSBOb2RlQXJyYXkuY3JlYXRlRnJvbUVsZW1lbnQocCk7XG4gICAgICAgICAgICBsZXQgdGV4dFJlZ2lvbnMgPSBUZXh0Tm9kZVJvd3MuY29tcHV0ZVRleHRSZWdpb25zKG5vZGVBcnJheSk7XG4gICAgICAgICAgICBsZXQgdGV4dEJsb2NrcyA9IFRleHROb2RlUm93cy5jb21wdXRlVGV4dEJsb2Nrcyh0ZXh0UmVnaW9ucyk7XG4gICAgICAgICAgICBsZXQgbWVyZ2VkVGV4dEJsb2NrcyA9IFRleHROb2RlUm93cy5tZXJnZVRleHRCbG9ja3ModGV4dEJsb2Nrcyk7XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkVGV4dEJsb2Nrcy5tYXAoKGN1cnJlbnQ6IGFueSkgPT4gY3VycmVudC50b0V4dGVybmFsKCkpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBleHBlY3RlZCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0NzguMzEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogODEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ3MC4zMTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogODFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXFxuICAgIDEuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cXG4gICAgXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDExOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQzNy4xNDA2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDI5LjE0MDYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDEwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCIyLlNlZCBwcmV0aXVtLCBkb2xvciBzZWQgZXVpc21vZCB0ZW1wb3IsIGRpYW0gdXJuYVxcbiAgICBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMTM4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogNTAzLjQwNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAxMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ5NS40MDYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDExOVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCIzLnNjZWxlcmlzcXVlIHRvcnRvciwgdmVsIHNlbXBlciBsaWd1bGEgdXJuYSB2ZWwgZW5pbS4gQWVuZWFuXFxuICAgIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAxNTcsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0MzUuNDIxODc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQyNy40MjE4NzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAxMzhcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiNC5uZWMgZmFjaWxpc2lzIGxpYmVyby4gU2VkIGVmZmljaXR1ciBhYyBsaWd1bGEgaW4gdmFyaXVzLlxcbiAgICBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMTc2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMjYzLjI2NTYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMTU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAyNTUuMjY1NjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogMTU3XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjUuUGVsbGVudGVzcXVlIGlhY3VsaXMsIGVuaW0gYWMgXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDE3NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDI2My4yNjU2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDM2MS4zNDM3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMTU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA5OC4wNzgxMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogMjYzLjI2NTYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAxNTdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiNi4gZGlnbmlzc2ltXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDE3NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDM2MS4zNDM3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogNDgwLjc2NTYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMTU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMTkuNDIxODc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDM2MS4zNDM3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAxNTdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiIGFsaXF1ZXQsIHR1cnBpc1xcbiAgICBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMTk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogNDQzLjM5MDYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMTc2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0MzUuMzkwNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogMTc2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjcucHVydXMgbWF0dGlzIGZlbGlzLCBlZ2V0IGNvbnNlcXVhdCBlcm9zIHZlbGl0IGV0IGVyYXQuIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAyMTQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAxMDcuODI4MTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAxOTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDk5LjgyODEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDE5NVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCI4LkN1cmFiaXR1ciBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMjE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMTA3LjgyODEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMTkzLjgxMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDE5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogODUuOTg0Mzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDEwNy44MjgxMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogMTk1XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjkuIGZldWdpYXRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMjE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMTkzLjgxMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQ2OC44OTA2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDE5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMjc1LjA3ODEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiAxOTMuODEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAxOTVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiIDEwLnN1c2NpcGl0IGxlbywgdmVsXFxuXFxuXFxuICAgIHVsdHJpY2VzIHRvcnRvciBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMjMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogNDg4LjU3ODEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMjE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0ODAuNTc4MTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogMjE0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInNvZGFsZXMgdXQuIE1hZWNlbmFzIGEgbWFnbmEgZWdldCBudW5jIGNvbW1vZG8gcnV0cnVtIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAyNTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0NzIuMTA5Mzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAyMzMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ2NC4xMDkzNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAyMzNcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiYWMgZXRcXG4gICAgYXVndWUuIFF1aXNxdWUgYXVndWUgc2VtLCB1bHRyaWNpZXMgYWMgb3JuYXJlIG5vbiwgXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDI3MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDE3MC40Mzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAyNTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDE2Mi40Mzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogMjUyXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInBvcnRhIGEgZXJvcy4gTW9yYmlcXG5cXG4gICAgXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDI3MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDE3MC40Mzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAyMTUuMDc4MTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAyNTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ0LjY0MDYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiAxNzAuNDM3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAyNTJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaGVsbG9cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMjcxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMjE1LjA3ODEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogNDMyLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDI1MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMjE3LjQyMTg3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiAyMTUuMDc4MTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDI1MlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcXG5cXG4gICAgcG9zdWVyZSwgdGVsbHVzIG5lYyBjdXJzdXMgXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDI5MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQ1NS40MDYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMjcxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0NDcuNDA2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAyNzFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwicmhvbmN1cywgbmliaCBsZW8gdWx0cmljaWVzIHVybmEsIGVnZXQgbW9sbGlzIG1pXFxuICAgIG5pc2wgbmVjIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAzMDksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0NjQuNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAyOTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ1Ni42MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAyOTBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwicHVydXMuIE1hdXJpcyBtYWxlc3VhZGEganVzdG8gdml0YWUgZmluaWJ1cyBlbGVtZW50dW0uIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAzMjgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0OTMuOTA2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDMwOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDg1LjkwNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogMzA5XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkRvbmVjXFxuICAgIHZlc3RpYnVsdW0gZXJhdCBhYyBzZW0gY29uc2VjdGV0dXIgZWxlaWZlbmQuIE51bGxhbSBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMzQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogNDg4LjA3ODEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMzI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0ODAuMDc4MTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogMzI4XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImF0IG5pYmggc2VkIG5lcXVlXFxuICAgIGFjY3Vtc2FuIHRpbmNpZHVudCBuZWMgYSBlbmltLiBBbGlxdWFtIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAzNjYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0OTQuMTA5Mzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAzNDcsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ4Ni4xMDkzNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAzNDdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwicGhhcmV0cmEgb3JjaSB0b3J0b3IsIGVnZXQgZ3JhdmlkYVxcbiAgICBmZWxpcyBkaWN0dW0gYWMuIE1hZWNlbmFzIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAzODUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0NzIuMzkwNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0pTT05cIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAzNjYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQ2NC4zOTA2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiAzNjZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiY29udmFsbGlzIG51bmMgdWx0cmljZXMgbWFzc2EgYmliZW5kdW0sIGV0XFxuICAgIGRpZ25pc3NpbSBlbGl0IFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA0MDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0NDkuNDA2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDM4NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDQxLjQwNjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogMzg1XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInRlbXB1cy4gVXQgaW4gbHVjdHVzIGRvbG9yLCBldCBtYXhpbXVzIG5pc2kuIEV0aWFtIG5vblxcbiAgICBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogNDIzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogNDQ3LjM3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNDA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0MzkuMzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogNDA0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImV1aXNtb2Qgc2VtLlxcblxcbiAgICBWZXN0aWJ1bHVtIHB1bHZpbmFyIGJpYmVuZHVtIHR1cnBpcyBhdCBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogNDQyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogNDUxLjQ1MzEyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNDIzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0NDMuNDUzMTI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogNDIzXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInNvZGFsZXMuIFZlc3RpYnVsdW0gY29uc2VjdGV0dXIgbnVsbGFcXG4gICAgZWxlbWVudHVtIGVyb3MgXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDQ2MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDQ3NC41NDY4NzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDQ0MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDY2LjU0Njg3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDQ0MlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJyaG9uY3VzLCBub24gaW50ZXJkdW0gZGlhbSB0cmlzdGlxdWUuIFByYWVzZW50IGludGVyZHVtIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA0ODAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0NzAuMDYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNDYxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0NjIuMDYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDQ2MVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJxdWFtXFxuICAgIGluIGxhY3VzIGZpbmlidXMgc2VtcGVyLiBQaGFzZWxsdXMgaWQgZmV1Z2lhdCB0b3J0b3IuIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA0OTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0ODAuNTYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNDgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0NzIuNTYyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDQ4MFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJJbnRlZ2VyIHNlZCBtb2xlc3RpZVxcbiAgICB1cm5hLCBhIHNvZGFsZXMgbGliZXJvLiBNb3JiaSBlZ2VzdGFzIFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA1MTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0NDYuNjU2MjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvSlNPTlwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDQ5OSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDM4LjY1NjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogNDk5XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImVnZXN0YXMgdG9ydG9yIHNlZCBzYWdpdHRpcy4gQWVuZWFuIGV0XFxuICAgIHRlbGx1cyBub24gcXVhbSBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogNTM3LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMjg2LjczNDM3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9KU09OXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNTE4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAyNzguNzM0Mzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInlcIjogNTE4XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInBlbGxlbnRlc3F1ZSB1bHRyaWNlcyB2ZWwgbm9uIG9kaW8uXFxuXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIDtcblxuICAgICAgICBhc3NlcnRKU09OKHRleHRCbG9ja3MudmFsdWUsIGV4cGVjdGVkKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==