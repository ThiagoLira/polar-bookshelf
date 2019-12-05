"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SpectronWebappMain_1 = require("../../js/test/SpectronWebappMain");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const FirebaseTesting_1 = require("../../js/firebase/FirebaseTesting");
FirebaseTesting_1.FirebaseTesting.validateUsers();
const webRoot = FilePaths_1.FilePaths.join(__dirname, "..", "..", "..");
const appRoot = __dirname;
SpectronWebappMain_1.SpectronWebappMain.run({ webRoot, appRoot, path: "/web/spectron1/firebase-groups/content.html" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlFQUFvRTtBQUNwRSwrREFBMEQ7QUFDMUQsdUVBQWtFO0FBRWxFLGlDQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7QUFFaEMsTUFBTSxPQUFPLEdBQUcscUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUQsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDO0FBRTFCLHVDQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLDZDQUE2QyxFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25XZWJhcHBNYWlufSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uV2ViYXBwTWFpbic7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0ZpcmViYXNlVGVzdGluZ30gZnJvbSBcIi4uLy4uL2pzL2ZpcmViYXNlL0ZpcmViYXNlVGVzdGluZ1wiO1xuXG5GaXJlYmFzZVRlc3RpbmcudmFsaWRhdGVVc2VycygpO1xuXG5jb25zdCB3ZWJSb290ID0gRmlsZVBhdGhzLmpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiLi5cIiwgXCIuLlwiKTtcbmNvbnN0IGFwcFJvb3QgPSBfX2Rpcm5hbWU7XG5cblNwZWN0cm9uV2ViYXBwTWFpbi5ydW4oe3dlYlJvb3QsIGFwcFJvb3QsIHBhdGg6IFwiL3dlYi9zcGVjdHJvbjEvZmlyZWJhc2UtZ3JvdXBzL2NvbnRlbnQuaHRtbFwifSk7XG4iXX0=