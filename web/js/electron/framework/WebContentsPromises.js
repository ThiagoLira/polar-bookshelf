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
class WebContentsPromises {
    static once(webContents) {
        return new Once(webContents);
    }
    static executeJavaScript(webContents, code, userGesture) {
        return webContents.executeJavaScript(code, userGesture);
    }
}
exports.WebContentsPromises = WebContentsPromises;
class Once {
    constructor(webContents) {
        this.webContents = webContents;
    }
    load() {
        return new Promise((resolve, reject) => {
            this.didFinishLoad()
                .then(() => resolve())
                .catch(err => reject(err));
            this.didFailLoad()
                .then((failLoad) => reject(failLoad))
                .catch(err => reject(err));
        });
    }
    didFinishLoad() {
        return new Promise(resolve => {
            this.webContents.once('did-finish-load', () => {
                resolve();
            });
        });
    }
    didFailLoad() {
        return new Promise(resolve => {
            this.webContents.once('did-fail-load', (event, errorCode, errorDescription, validatedURL, isMainFrame) => {
                const failLoad = new FailLoad(event, errorCode, errorDescription, validatedURL, isMainFrame);
                resolve(failLoad);
            });
        });
    }
    didAttachWebview() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.webContents.once('did-attach-webview', (event, webContents) => {
                    resolve(webContents);
                });
            });
        });
    }
}
class FailLoad {
    constructor(event, errorCode, errorDescription, validatedURL, isMainFrame) {
        this.event = event;
        this.errorCode = errorCode;
        this.errorDescription = errorDescription;
        this.validatedURL = validatedURL;
        this.isMainFrame = isMainFrame;
    }
}
exports.FailLoad = FailLoad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViQ29udGVudHNQcm9taXNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldlYkNvbnRlbnRzUHJvbWlzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxNQUFhLG1CQUFtQjtJQUVyQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQXdCO1FBRXZDLE9BQU8sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBSSxXQUF3QixFQUFFLElBQVksRUFBRSxXQUFxQjtRQUM1RixPQUFPLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUVKO0FBWEQsa0RBV0M7QUFFRCxNQUFNLElBQUk7SUFJTixZQUFZLFdBQXdCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFTSxJQUFJO1FBRVAsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUV6QyxJQUFJLENBQUMsYUFBYSxFQUFFO2lCQUNmLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDckIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFL0IsSUFBSSxDQUFDLFdBQVcsRUFBRTtpQkFDYixJQUFJLENBQUMsQ0FBQyxRQUFrQixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRW5DLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVNLGFBQWE7UUFFaEIsT0FBTyxJQUFJLE9BQU8sQ0FBTyxPQUFPLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7Z0JBQzFDLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTSxXQUFXO1FBRWQsT0FBTyxJQUFJLE9BQU8sQ0FBVyxPQUFPLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFZLEVBQ1osU0FBaUIsRUFDakIsZ0JBQXdCLEVBQ3hCLFlBQW9CLEVBQ3BCLFdBQW9CLEVBQUUsRUFBRTtnQkFLNUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQzdGLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV0QixDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVZLGdCQUFnQjs7WUFFekIsT0FBTyxJQUFJLE9BQU8sQ0FBYyxPQUFPLENBQUMsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxLQUFZLEVBQUUsV0FBd0IsRUFBRSxFQUFFO29CQUNuRixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7Q0FFSjtBQUVELE1BQWEsUUFBUTtJQVFqQixZQUFZLEtBQXFCLEVBQUUsU0FBaUIsRUFBRSxnQkFBd0IsRUFBRSxZQUFvQixFQUFFLFdBQW9CO1FBQ3RILElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0NBRUo7QUFoQkQsNEJBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtXZWJDb250ZW50cywgRXZlbnR9IGZyb20gJ2VsZWN0cm9uJztcblxuZXhwb3J0IGNsYXNzIFdlYkNvbnRlbnRzUHJvbWlzZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBvbmNlKHdlYkNvbnRlbnRzOiBXZWJDb250ZW50cyk6IE9uY2Uge1xuXG4gICAgICAgIHJldHVybiBuZXcgT25jZSh3ZWJDb250ZW50cyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBleGVjdXRlSmF2YVNjcmlwdDxUPih3ZWJDb250ZW50czogV2ViQ29udGVudHMsIGNvZGU6IHN0cmluZywgdXNlckdlc3R1cmU/OiBib29sZWFuKSB7XG4gICAgICAgIHJldHVybiB3ZWJDb250ZW50cy5leGVjdXRlSmF2YVNjcmlwdChjb2RlLCB1c2VyR2VzdHVyZSk7XG4gICAgfVxuXG59XG5cbmNsYXNzIE9uY2Uge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB3ZWJDb250ZW50czogV2ViQ29udGVudHM7XG5cbiAgICBjb25zdHJ1Y3Rvcih3ZWJDb250ZW50czogV2ViQ29udGVudHMpIHtcbiAgICAgICAgdGhpcy53ZWJDb250ZW50cyA9IHdlYkNvbnRlbnRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuZGlkRmluaXNoTG9hZCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpO1xuXG4gICAgICAgICAgICB0aGlzLmRpZEZhaWxMb2FkKClcbiAgICAgICAgICAgICAgICAudGhlbigoZmFpbExvYWQ6IEZhaWxMb2FkKSA9PiByZWplY3QoZmFpbExvYWQpKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGRpZEZpbmlzaExvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy53ZWJDb250ZW50cy5vbmNlKCdkaWQtZmluaXNoLWxvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGRpZEZhaWxMb2FkKCk6IFByb21pc2U8RmFpbExvYWQ+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RmFpbExvYWQ+KHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy53ZWJDb250ZW50cy5vbmNlKCdkaWQtZmFpbC1sb2FkJywgKGV2ZW50OiBFdmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNvZGU6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkVVJMOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYWluRnJhbWU6IGJvb2xlYW4pID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdvdWxkIGJlIG5pY2UgaWYgdGhlcmUgd2VyZSBhIHdheSB0byB0YWtlIG1ldGhvZCBhcmd1bWVudHNcbiAgICAgICAgICAgICAgICAvLyBhbmQgbWFrZSB0aGVtIGFuIG9iamVjdC5cblxuICAgICAgICAgICAgICAgIGNvbnN0IGZhaWxMb2FkID0gbmV3IEZhaWxMb2FkKGV2ZW50LCBlcnJvckNvZGUsIGVycm9yRGVzY3JpcHRpb24sIHZhbGlkYXRlZFVSTCwgaXNNYWluRnJhbWUpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFpbExvYWQpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkaWRBdHRhY2hXZWJ2aWV3KCk6IFByb21pc2U8V2ViQ29udGVudHM+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8V2ViQ29udGVudHM+KHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy53ZWJDb250ZW50cy5vbmNlKCdkaWQtYXR0YWNoLXdlYnZpZXcnLCAoZXZlbnQ6IEV2ZW50LCB3ZWJDb250ZW50czogV2ViQ29udGVudHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHdlYkNvbnRlbnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgRmFpbExvYWQge1xuXG4gICAgcHVibGljIGV2ZW50OiBFdmVudDtcbiAgICBwdWJsaWMgZXJyb3JDb2RlOiBudW1iZXI7XG4gICAgcHVibGljIGVycm9yRGVzY3JpcHRpb246IHN0cmluZztcbiAgICBwdWJsaWMgdmFsaWRhdGVkVVJMOiBzdHJpbmc7XG4gICAgcHVibGljIGlzTWFpbkZyYW1lOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZXZlbnQ6IEVsZWN0cm9uLkV2ZW50LCBlcnJvckNvZGU6IG51bWJlciwgZXJyb3JEZXNjcmlwdGlvbjogc3RyaW5nLCB2YWxpZGF0ZWRVUkw6IHN0cmluZywgaXNNYWluRnJhbWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcbiAgICAgICAgdGhpcy5lcnJvckRlc2NyaXB0aW9uID0gZXJyb3JEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy52YWxpZGF0ZWRVUkwgPSB2YWxpZGF0ZWRVUkw7XG4gICAgICAgIHRoaXMuaXNNYWluRnJhbWUgPSBpc01haW5GcmFtZTtcbiAgICB9XG5cbn1cbiJdfQ==