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
const URLs_1 = require("polar-shared/src/util/URLs");
const PHZReader_1 = require("polar-content-capture/src/phz/PHZReader");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Reducers_1 = require("polar-shared/src/util/Reducers");
const Blobs_1 = require("polar-shared/src/util/Blobs");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const Latch_1 = require("polar-shared/src/util/Latch");
const DOM_1 = require("polar-shared/src/util/DOM");
const log = Logger_1.Logger.create();
class DirectPHZLoader {
    constructor(resource, phzReader, resources, metadata) {
        this.resource = resource;
        this.phzReader = phzReader;
        this.resources = resources;
        this.metadata = metadata;
        this.linkPromises = [];
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.metadata) {
                    const url = this.metadata.url;
                    yield this.loadDocument(url, this.resources);
                    return Optional_1.Optional.of(this.metadata);
                }
                else {
                    log.warn("Document has no metadata: " + this.resource);
                    return Optional_1.Optional.empty();
                }
            }
            finally {
                yield this.phzReader.close();
            }
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.phzReader.close();
        });
    }
    getResourceEntry(url) {
        const result = this.getResourceEntry0(url);
        if (result) {
            return result;
        }
        return this.getResourceEntry0(URLs_1.URLs.absolute(url, this.metadata.url));
    }
    getResourceEntry0(url) {
        const resources = Object.values(this.resources.entries);
        return resources
            .filter(current => current && current.resource.url === url)
            .reduce(Reducers_1.Reducers.FIRST, undefined);
    }
    loadDocument(url, resources) {
        return __awaiter(this, void 0, void 0, function* () {
            const primaryResourceEntry = this.getResourceEntry(url);
            if (primaryResourceEntry) {
                const iframe = document.getElementById('content');
                yield this.loadResource(primaryResourceEntry, iframe);
                yield Promise.all(this.linkPromises);
            }
            else {
                log.warn("No primary resource found for: " + url);
            }
        });
    }
    static create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const toPHZReader = () => __awaiter(this, void 0, void 0, function* () {
                const phzReader = new PHZReader_1.PHZReader();
                if (URLs_1.URLs.isURL(resource)) {
                    const response = yield fetch(resource);
                    const blob = yield response.blob();
                    yield phzReader.init(blob);
                }
                else {
                    yield phzReader.init(resource);
                }
                return phzReader;
            });
            const phzReader = yield toPHZReader();
            const metadata = yield phzReader.getMetadata();
            const resources = yield phzReader.getResources();
            return new DirectPHZLoader(resource, phzReader, resources, metadata);
        });
    }
    loadResource(resourceEntry, iframe) {
        return __awaiter(this, void 0, void 0, function* () {
            const blob = yield this.phzReader.getResourceAsBlob(resourceEntry);
            const str = yield Blobs_1.Blobs.toText(blob);
            const doc = new DOMParser().parseFromString(str, 'text/html');
            const newLinkStylesheetPromises = this.createLinkStylesheetPromises(doc);
            this.linkPromises.push(...newLinkStylesheetPromises);
            const iframes = this.neutralizeIFrames(doc);
            DOM_1.DOM.removeChildNodes(iframe.contentDocument.documentElement);
            DOM_1.DOM.appendChildNodes(doc.documentElement, iframe.contentDocument.documentElement);
            yield this.loadIFrames(iframes);
        });
    }
    createLinkStylesheetPromises(doc) {
        const promises = [];
        doc.querySelectorAll("link[rel=stylesheet]").forEach((link) => {
            const latch = new Latch_1.Latch();
            promises.push(latch.get());
            link.addEventListener("load", () => {
                latch.resolve(true);
            });
            link.addEventListener("error", () => {
                latch.resolve(true);
            });
        });
        return promises;
    }
    loadIFrames(iframeRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const iframeRef of iframeRefs) {
                const resourceEntry = this.getResourceEntry(iframeRef.src);
                if (resourceEntry) {
                    yield this.loadResource(resourceEntry, iframeRef.iframe);
                }
                else {
                    log.warn("No resource entry for URL: " + iframeRef.src);
                }
            }
        });
    }
    neutralizeIFrames(doc) {
        const result = [];
        const iframes = Array.from(doc.querySelectorAll("iframe"));
        for (const iframe of iframes) {
            const src = iframe.getAttribute("src");
            if (src) {
                iframe.setAttribute("data-loader-src", src);
                iframe.removeAttribute("src");
                result.push({ iframe, src });
            }
            else {
            }
        }
        return result;
    }
}
exports.DirectPHZLoader = DirectPHZLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlyZWN0UEhaTG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGlyZWN0UEhaTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EscURBQWdEO0FBQ2hELHVFQUFrRTtBQUNsRSwyREFBc0Q7QUFHdEQsNkRBQXdEO0FBQ3hELHVEQUFrRDtBQUVsRCxnRUFBMkQ7QUFFM0QsdURBQWtEO0FBQ2xELG1EQUE4QztBQUU5QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFNNUIsTUFBYSxlQUFlO0lBSXhCLFlBQW9CLFFBQTBCLEVBQzFCLFNBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLFFBQXlCO1FBSHpCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUw1QixpQkFBWSxHQUFrQixFQUFFLENBQUM7SUFPbEQsQ0FBQztJQUVZLElBQUk7O1lBRWIsSUFBSTtnQkFFQSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBRWYsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7b0JBRTlCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUU3QyxPQUFPLG1CQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFFckM7cUJBQU07b0JBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3ZELE9BQU8sbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDM0I7YUFFSjtvQkFBUztnQkFDTixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEM7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JztcbmltcG9ydCB7UEhaUmVhZGVyfSBmcm9tICdwb2xhci1jb250ZW50LWNhcHR1cmUvc3JjL3Boei9QSFpSZWFkZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0NhcHR1cmVkfSBmcm9tICdwb2xhci1jb250ZW50LWNhcHR1cmUvc3JjL2NhcHR1cmUvQ2FwdHVyZWQnO1xuaW1wb3J0IHtSZXNvdXJjZXN9IGZyb20gJ3BvbGFyLWNvbnRlbnQtY2FwdHVyZS9zcmMvcGh6L1Jlc291cmNlcyc7XG5pbXBvcnQge1JlZHVjZXJzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUmVkdWNlcnMnO1xuaW1wb3J0IHtCbG9ic30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0Jsb2JzJztcbmltcG9ydCB7UmVzb3VyY2VFbnRyeX0gZnJvbSAncG9sYXItY29udGVudC1jYXB0dXJlL3NyYy9waHovUmVzb3VyY2VFbnRyeSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtQYXRoU3RyLCBVUkxTdHJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvU3RyaW5nc1wiO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9MYXRjaFwiO1xuaW1wb3J0IHtET019IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvRE9NXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBMb2FkcyBQSFpzIGRpcmVjdGx5IGJ5IG9wZW5pbmcgdGhlbSwgZGVjb21wcmVzc2luZyB0aGVtLCBhbmQgcGFyc2luZyB0aGUgSFRNTFxuICogYW5kIHRoZW4gcmVwbGFjaW5nIHRoZSBpZnJhbWVzIGRpcmVjdGx5LlxuICovXG5leHBvcnQgY2xhc3MgRGlyZWN0UEhaTG9hZGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGlua1Byb21pc2VzOiBMaW5rUHJvbWlzZVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc291cmNlOiBQYXRoU3RyIHwgVVJMU3RyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGh6UmVhZGVyOiBQSFpSZWFkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZXNvdXJjZXM6IFJlc291cmNlcyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG1ldGFkYXRhOiBDYXB0dXJlZCB8IG51bGwpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsb2FkKCk6IFByb21pc2U8T3B0aW9uYWw8Q2FwdHVyZWQ+PiB7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHRoaXMubWV0YWRhdGEudXJsO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkRG9jdW1lbnQodXJsLCB0aGlzLnJlc291cmNlcyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwub2YodGhpcy5tZXRhZGF0YSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm4oXCJEb2N1bWVudCBoYXMgbm8gbWV0YWRhdGE6IFwiICsgdGhpcy5yZXNvdXJjZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLmVtcHR5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGh6UmVhZGVyLmNsb3NlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5waHpSZWFkZXIuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJlc291cmNlRW50cnkodXJsOiBzdHJpbmcpOiBSZXNvdXJjZUVudHJ5IHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldFJlc291cmNlRW50cnkwKHVybCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlRW50cnkwKFVSTHMuYWJzb2x1dGUodXJsLCB0aGlzLm1ldGFkYXRhIS51cmwpKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmVzb3VyY2VFbnRyeTAodXJsOiBzdHJpbmcpOiBSZXNvdXJjZUVudHJ5IHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBjb25zdCByZXNvdXJjZXM6IEFycmF5PFJlc291cmNlRW50cnkgfCB1bmRlZmluZWQ+XG4gICAgICAgICAgICA9IE9iamVjdC52YWx1ZXModGhpcy5yZXNvdXJjZXMuZW50cmllcyk7XG5cbiAgICAgICAgcmV0dXJuIHJlc291cmNlc1xuICAgICAgICAgICAgLmZpbHRlcihjdXJyZW50ID0+IGN1cnJlbnQgJiYgY3VycmVudC5yZXNvdXJjZS51cmwgPT09IHVybClcbiAgICAgICAgICAgIC5yZWR1Y2UoUmVkdWNlcnMuRklSU1QsIHVuZGVmaW5lZCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvYWREb2N1bWVudCh1cmw6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZXM6IFJlc291cmNlcykge1xuXG4gICAgICAgIGNvbnN0IHByaW1hcnlSZXNvdXJjZUVudHJ5ID0gdGhpcy5nZXRSZXNvdXJjZUVudHJ5KHVybCk7XG5cbiAgICAgICAgaWYgKHByaW1hcnlSZXNvdXJjZUVudHJ5KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGlmcmFtZSA9IDxIVE1MSUZyYW1lRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFJlc291cmNlKHByaW1hcnlSZXNvdXJjZUVudHJ5LCBpZnJhbWUpO1xuXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLmxpbmtQcm9taXNlcyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gcHJpbWFyeSByZXNvdXJjZSBmb3VuZCBmb3I6IFwiICsgdXJsKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlKHJlc291cmNlOiBQYXRoU3RyIHwgVVJMU3RyKSB7XG5cbiAgICAgICAgY29uc3QgdG9QSFpSZWFkZXIgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBoelJlYWRlciA9IG5ldyBQSFpSZWFkZXIoKTtcblxuICAgICAgICAgICAgaWYgKFVSTHMuaXNVUkwocmVzb3VyY2UpKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlc291cmNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGh6UmVhZGVyLmluaXQoYmxvYik7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhIHBhdGggc3RyaW5nLlxuICAgICAgICAgICAgICAgIGF3YWl0IHBoelJlYWRlci5pbml0KHJlc291cmNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBoelJlYWRlcjtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHBoelJlYWRlciA9IGF3YWl0IHRvUEhaUmVhZGVyKCk7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgcGh6UmVhZGVyLmdldE1ldGFkYXRhKCk7XG4gICAgICAgIGNvbnN0IHJlc291cmNlcyA9IGF3YWl0IHBoelJlYWRlci5nZXRSZXNvdXJjZXMoKTtcblxuICAgICAgICByZXR1cm4gbmV3IERpcmVjdFBIWkxvYWRlcihyZXNvdXJjZSwgcGh6UmVhZGVyLCByZXNvdXJjZXMsIG1ldGFkYXRhKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9hZFJlc291cmNlKHJlc291cmNlRW50cnk6IFJlc291cmNlRW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCkge1xuXG4gICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCB0aGlzLnBoelJlYWRlci5nZXRSZXNvdXJjZUFzQmxvYihyZXNvdXJjZUVudHJ5KTtcblxuICAgICAgICAvLyBub3cgdGhhdCB3ZSBoYXZlIHRoZSBibG9iLCB3aGljaCBzaG91bGQgYmUgSFRNTCAsIHBhcnNlIGl0IGludG9cbiAgICAgICAgLy8gaXRzIG93biBkb2N1bWVudCBvYmplY3QuXG5cbiAgICAgICAgY29uc3Qgc3RyID0gYXdhaXQgQmxvYnMudG9UZXh0KGJsb2IpO1xuXG4gICAgICAgIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJyk7XG5cbiAgICAgICAgLy8gVE9ETzogVGhpcyBtaWdodCBiZSB0aGUgYnVnIHJlZ2FyZGluZyB0aGUgcGFnZSBub3QgcmVzaXppbmcgYmVjYXVzZVxuICAgICAgICAvLyB3ZSdyZSBsb2FkaW5nIGFuIEVYVEVSTkFMIHJlc291cmNlcyBub3QgYSBsb2NhbCBzbyBJIGRvbid0IHRoaW5rXG4gICAgICAgIC8vIHdlJ3JlIGdldHRpbmcgYW4gZXZlbnQgdGhhdCBpdCB3YXMgbG9hZGVkLlxuXG4gICAgICAgIGNvbnN0IG5ld0xpbmtTdHlsZXNoZWV0UHJvbWlzZXMgPSB0aGlzLmNyZWF0ZUxpbmtTdHlsZXNoZWV0UHJvbWlzZXMoZG9jKTtcblxuICAgICAgICB0aGlzLmxpbmtQcm9taXNlcy5wdXNoKC4uLm5ld0xpbmtTdHlsZXNoZWV0UHJvbWlzZXMpO1xuXG4gICAgICAgIGNvbnN0IGlmcmFtZXMgPSB0aGlzLm5ldXRyYWxpemVJRnJhbWVzKGRvYyk7XG5cbiAgICAgICAgRE9NLnJlbW92ZUNoaWxkTm9kZXMoaWZyYW1lLmNvbnRlbnREb2N1bWVudCEuZG9jdW1lbnRFbGVtZW50ISk7XG5cbiAgICAgICAgRE9NLmFwcGVuZENoaWxkTm9kZXMoZG9jLmRvY3VtZW50RWxlbWVudCEsIGlmcmFtZS5jb250ZW50RG9jdW1lbnQhLmRvY3VtZW50RWxlbWVudCEpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZElGcmFtZXMoaWZyYW1lcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUxpbmtTdHlsZXNoZWV0UHJvbWlzZXMoZG9jOiBEb2N1bWVudCk6IFJlYWRvbmx5QXJyYXk8TGlua1Byb21pc2U+IHtcblxuICAgICAgICBjb25zdCBwcm9taXNlczogTGlua1Byb21pc2VbXSA9IFtdO1xuXG4gICAgICAgIGRvYy5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9c3R5bGVzaGVldF1cIikuZm9yRWFjaCgobGluaykgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBsYXRjaCA9IG5ldyBMYXRjaDxib29sZWFuPigpO1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChsYXRjaC5nZXQoKSk7XG5cbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxhdGNoLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHdlJ3JlIGp1c3Qgd2FpdGluZyBmb3IgdGhlbSB0byBiZSBjb21wbGV0ZWQgbm90IHRoZWlyIGFjdHVhbFxuICAgICAgICAgICAgICAgIC8vIHN0YXR1cy5cbiAgICAgICAgICAgICAgICBsYXRjaC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2VzO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkSUZyYW1lcyhpZnJhbWVSZWZzOiBJRnJhbWVSZWZbXSkge1xuXG4gICAgICAgIGZvciAoY29uc3QgaWZyYW1lUmVmIG9mIGlmcmFtZVJlZnMpIHtcblxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VFbnRyeSA9IHRoaXMuZ2V0UmVzb3VyY2VFbnRyeShpZnJhbWVSZWYuc3JjKTtcblxuICAgICAgICAgICAgaWYgKHJlc291cmNlRW50cnkpIHtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFJlc291cmNlKHJlc291cmNlRW50cnksIGlmcmFtZVJlZi5pZnJhbWUpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gcmVzb3VyY2UgZW50cnkgZm9yIFVSTDogXCIgKyBpZnJhbWVSZWYuc3JjKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHbyB0aHJvdWdoIGFsbCB0aGUgaWZyYW1lcyBpbiB0aGlzIGRvYyBhbmQgZml4IHRoZW0gc28gdGhhdCB0aGV5IGRvbid0XG4gICAgICogbG9hZCBhcyB3ZSBhcmUgZ29pbmcgdG8gbG9hZCB0aGVtIG1hbnVhbGx5LlxuICAgICAqL1xuICAgIHByaXZhdGUgbmV1dHJhbGl6ZUlGcmFtZXMoZG9jOiBEb2N1bWVudCkge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogSUZyYW1lUmVmW10gPSBbXTtcblxuICAgICAgICBjb25zdCBpZnJhbWVzID0gQXJyYXkuZnJvbShkb2MucXVlcnlTZWxlY3RvckFsbChcImlmcmFtZVwiKSk7XG4gICAgICAgIGZvciAoY29uc3QgaWZyYW1lIG9mIGlmcmFtZXMpIHtcblxuICAgICAgICAgICAgY29uc3Qgc3JjID0gaWZyYW1lLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcblxuICAgICAgICAgICAgaWYgKHNyYykge1xuXG4gICAgICAgICAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImRhdGEtbG9hZGVyLXNyY1wiLCBzcmMpO1xuICAgICAgICAgICAgICAgIGlmcmFtZS5yZW1vdmVBdHRyaWJ1dGUoXCJzcmNcIik7XG5cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7aWZyYW1lLCBzcmN9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlmcmFtZSBpc24ndCBpbnRlcmVzdGluZyB0byB1cyBhcyBpdCBkb2VzIG5vdCBoYXZlXG4gICAgICAgICAgICAgICAgLy8gYSBzcmMgYXR0cmlidXRlIHRoYXQgd2Ugc2hvdWxkIGJlIHVzaW5nLlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb21pc2UgPSBQcm9taXNlPGJvb2xlYW4+O1xuXG5pbnRlcmZhY2UgSUZyYW1lUmVmIHtcbiAgICByZWFkb25seSBzcmM6IHN0cmluZztcbiAgICByZWFkb25seSBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50O1xufVxuXG4iXX0=