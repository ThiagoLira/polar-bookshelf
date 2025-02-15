"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FirebaseTesting {
    static validateUsers() {
        const validateEnv = (name) => {
            if (!process.env[name]) {
                throw new Error(`${name} is not defined`);
            }
        };
        validateEnv('FIREBASE_USER');
        validateEnv('FIREBASE_PASS');
        validateEnv('FIREBASE_USER1');
        validateEnv('FIREBASE_PASS1');
        validateEnv('FIREBASE_USER2');
        validateEnv('FIREBASE_PASS2');
    }
}
exports.FirebaseTesting = FirebaseTesting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZWJhc2VUZXN0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlyZWJhc2VUZXN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBYSxlQUFlO0lBRWpCLE1BQU0sQ0FBQyxhQUFhO1FBRXZCLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFFakMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGlCQUFpQixDQUFDLENBQUM7YUFDN0M7UUFFTCxDQUFDLENBQUM7UUFFRixXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRWxDLENBQUM7Q0FFSjtBQXJCRCwwQ0FxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRmlyZWJhc2VUZXN0aW5nIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgdmFsaWRhdGVVc2VycygpIHtcblxuICAgICAgICBjb25zdCB2YWxpZGF0ZUVudiA9IChuYW1lOiBzdHJpbmcpID0+IHtcblxuICAgICAgICAgICAgaWYgKCEgcHJvY2Vzcy5lbnZbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bmFtZX0gaXMgbm90IGRlZmluZWRgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhbGlkYXRlRW52KCdGSVJFQkFTRV9VU0VSJyk7XG4gICAgICAgIHZhbGlkYXRlRW52KCdGSVJFQkFTRV9QQVNTJyk7XG4gICAgICAgIHZhbGlkYXRlRW52KCdGSVJFQkFTRV9VU0VSMScpO1xuICAgICAgICB2YWxpZGF0ZUVudignRklSRUJBU0VfUEFTUzEnKTtcbiAgICAgICAgdmFsaWRhdGVFbnYoJ0ZJUkVCQVNFX1VTRVIyJyk7XG4gICAgICAgIHZhbGlkYXRlRW52KCdGSVJFQkFTRV9QQVNTMicpO1xuXG4gICAgfVxuXG59XG4iXX0=