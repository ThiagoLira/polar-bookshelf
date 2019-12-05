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
const Preconditions_1 = require("polar-shared/src/Preconditions");
class IFrames {
    static waitForContentDocument(iframe, options = { initialURL: 'about:blank' }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                const timer = () => {
                    if (iframe.contentDocument) {
                        const currentURL = this.getURL(iframe);
                        if (currentURL !== options.initialURL) {
                            resolve(iframe.contentDocument);
                            return;
                        }
                    }
                    setTimeout(timer, 100);
                };
                timer();
            });
        });
    }
    static markLoadedManually(iframe, url) {
        iframe.setAttribute('data-loaded-src', url);
    }
    static getURL(iframe) {
        if (!iframe) {
            return undefined;
        }
        const loadedSrc = iframe.getAttribute('data-loaded-src');
        if (loadedSrc) {
            return loadedSrc;
        }
        if (iframe.contentDocument && iframe.contentDocument.location) {
            return iframe.contentDocument.location.href;
        }
        return undefined;
    }
    static computeTopLevelClientRect(clientRect, win) {
        while (Preconditions_1.isPresent(win.frameElement)) {
            const iframeClientRect = win.frameElement.getBoundingClientRect();
            const left = clientRect.left + iframeClientRect.left;
            const top = clientRect.top + iframeClientRect.top;
            const width = clientRect.width;
            const height = clientRect.height;
            const bottom = top + height;
            const right = left + width;
            clientRect = { left, top, width, height, bottom, right };
            win = win.parent;
        }
        return clientRect;
    }
}
exports.IFrames = IFrames;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUZyYW1lcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIklGcmFtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxrRUFBeUQ7QUFHekQsTUFBYSxPQUFPO0lBRVQsTUFBTSxDQUFPLHNCQUFzQixDQUFDLE1BQXlCLEVBQ3pCLFVBQXlDLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBQzs7WUFFNUcsT0FBTyxJQUFJLE9BQU8sQ0FBZSxPQUFPLENBQUMsRUFBRTtnQkFFdkMsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO29CQUVmLElBQUksTUFBTSxDQUFDLGVBQWUsRUFBRTt3QkFFeEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFFdkMsSUFBSSxVQUFVLEtBQUssT0FBTyxDQUFDLFVBQVUsRUFBRTs0QkFDbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQzs0QkFDaEMsT0FBTzt5QkFDVjtxQkFFSjtvQkFFRCxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUUzQixDQUFDLENBQUM7Z0JBRUYsS0FBSyxFQUFFLENBQUM7WUFFWixDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQUtNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUF5QixFQUFFLEdBQVc7UUFFbkUsTUFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVoRCxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUF5QjtRQUUxQyxJQUFJLENBQUUsTUFBTSxFQUFFO1lBQ1YsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFekQsSUFBSSxTQUFTLEVBQUU7WUFDWCxPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELElBQUksTUFBTSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUMsZUFBZ0IsQ0FBQyxRQUFRLEVBQUU7WUFDNUQsT0FBTyxNQUFNLENBQUMsZUFBZ0IsQ0FBQyxRQUFTLENBQUMsSUFBSSxDQUFDO1NBQ2pEO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFFckIsQ0FBQztJQVNNLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxVQUFzQixFQUFFLEdBQVc7UUFFdkUsT0FBTyx5QkFBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUVoQyxNQUFNLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUVsRSxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUNyRCxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztZQUNsRCxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQy9CLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDakMsTUFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUM1QixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBRTNCLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFFekQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FFcEI7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUV0QixDQUFDO0NBRUo7QUF6RkQsMEJBeUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge1VSTFN0cn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TdHJpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBJRnJhbWVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgd2FpdEZvckNvbnRlbnREb2N1bWVudChpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBXYWl0Rm9yQ29udGVudERvY3VtZW50T3B0aW9ucyA9IHsgaW5pdGlhbFVSTDogJ2Fib3V0OmJsYW5rJ30pOiBQcm9taXNlPEhUTUxEb2N1bWVudD4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxIVE1MRG9jdW1lbnQ+KHJlc29sdmUgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0aW1lciA9ICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChpZnJhbWUuY29udGVudERvY3VtZW50KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVSTCA9IHRoaXMuZ2V0VVJMKGlmcmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRVUkwgIT09IG9wdGlvbnMuaW5pdGlhbFVSTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpZnJhbWUuY29udGVudERvY3VtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aW1lciwgMTAwKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGltZXIoKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIGZyYW1lIGFzIGxvYWRlZCBtYW51YWxseSBieSBzcGVjaWZ5aW5nIGEgZGF0YSBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBtYXJrTG9hZGVkTWFudWFsbHkoaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCwgdXJsOiBVUkxTdHIpIHtcblxuICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRlZC1zcmMnLCB1cmwpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRVUkwoaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cbiAgICAgICAgaWYgKCEgaWZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9hZGVkU3JjID0gaWZyYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1sb2FkZWQtc3JjJyk7XG5cbiAgICAgICAgaWYgKGxvYWRlZFNyYykge1xuICAgICAgICAgICAgcmV0dXJuIGxvYWRlZFNyYztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudERvY3VtZW50ICYmIGlmcmFtZS5jb250ZW50RG9jdW1lbnQhLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gaWZyYW1lLmNvbnRlbnREb2N1bWVudCEubG9jYXRpb24hLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgcmVjdCBpbiB0aGUgZ2l2ZW4gd2luZG93IGZyb20gdGhlIHBlcnNwZWN0aXZlIG9mIHRoZSB0b3AgbGV2ZWxcbiAgICAgKiB3aW5kb3cuICBXZSB1c2UgdGhlIGZyYW1lRWxlbWVudCBhbmQgd2FsayBiYWNrd2FyZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2xpZW50UmVjdFxuICAgICAqIEBwYXJhbSB3aW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVUb3BMZXZlbENsaWVudFJlY3QoY2xpZW50UmVjdDogQ2xpZW50UmVjdCwgd2luOiBXaW5kb3cpOiBDbGllbnRSZWN0IHtcblxuICAgICAgICB3aGlsZSAoaXNQcmVzZW50KHdpbi5mcmFtZUVsZW1lbnQpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGlmcmFtZUNsaWVudFJlY3QgPSB3aW4uZnJhbWVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gY2xpZW50UmVjdC5sZWZ0ICsgaWZyYW1lQ2xpZW50UmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgdG9wID0gY2xpZW50UmVjdC50b3AgKyBpZnJhbWVDbGllbnRSZWN0LnRvcDtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgYm90dG9tID0gdG9wICsgaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG5cbiAgICAgICAgICAgIGNsaWVudFJlY3QgPSB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgYm90dG9tLCByaWdodCB9O1xuXG4gICAgICAgICAgICB3aW4gPSB3aW4ucGFyZW50O1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xpZW50UmVjdDtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgV2FpdEZvckNvbnRlbnREb2N1bWVudE9wdGlvbnMge1xuICAgIHJlYWRvbmx5IGluaXRpYWxVUkw6IHN0cmluZztcbn1cbiJdfQ==