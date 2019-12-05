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
const DocFormatFactory_1 = require("../docformat/DocFormatFactory");
const ContextMenuController_1 = require("../contextmenu/ContextMenuController");
const KeyEvents_1 = require("../KeyEvents");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocTitleController_1 = require("./DocTitleController");
const PagemarkController_1 = require("../pagemarks/controller/PagemarkController");
const Controller_1 = require("./Controller");
const TextHighlightController_1 = require("../highlights/text/controller/TextHighlightController");
const AreaHighlightController_1 = require("../highlights/area/controller/AreaHighlightController");
const PagemarkCoverageEventListener_1 = require("../pagemarks/controller/PagemarkCoverageEventListener");
const DocDetails_1 = require("../metadata/DocDetails");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const ClipboardCleanser_1 = require("../ui/ClipboardCleanser");
const ViewerScreenshots_1 = require("../viewer/ViewerScreenshots");
const log = Logger_1.Logger.create();
class WebController extends Controller_1.Controller {
    constructor(model, viewer) {
        super(Preconditions_1.Preconditions.assertNotNull(model, "model"));
        this.viewer = Preconditions_1.Preconditions.assertNotNull(viewer, "viewer");
        this.docFormat = Preconditions_1.notNull(DocFormatFactory_1.DocFormatFactory.getInstance());
        this.docFormat.init();
        new PagemarkController_1.PagemarkController(model).start();
        new DocTitleController_1.DocTitleController(this.model).start();
        ClipboardCleanser_1.ClipboardCleanser.register();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.listenForDocumentLoad();
            yield this.listenForKeyBindings();
            if (this.docFormat.name === 'pdf') {
                this.detectDocumentLoaded('start');
            }
        });
    }
    dispatchDocumentLoaded(fingerprint, nrPages, currentlySelectedPageNum) {
        const _super = Object.create(null, {
            onDocumentLoaded: { get: () => super.onDocumentLoaded }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const docDetail = this.viewer.docDetail();
            yield _super.onDocumentLoaded.call(this, fingerprint, nrPages, currentlySelectedPageNum, docDetail);
            log.info("Merging docDetail: ", docDetail);
            DocDetails_1.DocDetails.merge(this.model.docMeta.docInfo, docDetail);
            this.setupWindowWidth();
            this.setupDocumentTitle();
            this.setupContextMenu();
            this.handleThumbnails();
        });
    }
    setupWindowWidth() {
        const viewerClientWidth = Optional_1.Optional.of(document.querySelector("#viewerContainer"))
            .map(current => current.clientWidth)
            .getOrElse(0);
        const viewerScrollWidth = Optional_1.Optional.of(document.querySelector("#viewerContainer"))
            .map(current => current.scrollWidth)
            .getOrElse(0);
        const needsResize = viewerScrollWidth > viewerClientWidth;
        if (needsResize) {
            const sidebarScrollWidth = Optional_1.Optional.of(document.querySelector("#sidebarContainer"))
                .map(current => current.scrollWidth)
                .getOrElse(0);
            const bufferWidth = 50;
            const newWidth = sidebarScrollWidth + viewerScrollWidth + bufferWidth;
            if (newWidth > window.outerWidth) {
                window.resizeTo(newWidth, window.outerHeight);
            }
        }
    }
    handleThumbnails() {
        ViewerScreenshots_1.ViewerScreenshots.doScreenshot(this.model);
    }
    setupDocumentTitle() {
        const title = Optional_1.Optional.of(this.model.docMeta.docInfo.title).getOrElse("Untitled");
        document.title = `${title}`;
    }
    setupContextMenu() {
        const contextMenuController = new ContextMenuController_1.ContextMenuController(this.model);
        contextMenuController.start();
    }
    listenForDocumentLoad() {
        const container = Preconditions_1.notNull(document.getElementById('viewerContainer'));
        for (const eventName of ['pagesinit', 'updateviewarea']) {
            container.addEventListener(eventName, (event) => this.detectDocumentLoaded(eventName));
        }
    }
    detectDocumentLoaded(eventName) {
        const currentDocFingerprint = this.docFormat.currentDocFingerprint();
        if (currentDocFingerprint !== undefined && currentDocFingerprint !== this.docFingerprint) {
            log.info("controller: New document loaded: " + eventName);
            const newDocumentFingerprint = currentDocFingerprint;
            const currentDocState = this.docFormat.currentState();
            this.onNewDocumentFingerprint(newDocumentFingerprint, currentDocState.nrPages, currentDocState.currentPageNumber);
        }
    }
    onNewDocumentFingerprint(newDocumentFingerprint, nrPages, currentPageNumber) {
        log.info(`Detected new document fingerprint (fingerprint=${newDocumentFingerprint}, nrPages=${nrPages}, currentPageNumber=${currentPageNumber})`);
        this.docFingerprint = newDocumentFingerprint;
        this.dispatchDocumentLoaded(newDocumentFingerprint, nrPages, currentPageNumber)
            .catch(err => log.error("Could not handle onDocumentLoaded: ", err));
    }
    keyBindingPagemarkEntirePage(event) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Marking entire page as read.");
            const pageElement = this.docFormat.getCurrentPageElement();
            if (pageElement) {
                const pageNum = this.docFormat.getPageNumFromPageElement(pageElement);
                this.erasePagemarks(pageNum);
                yield this.createPagemark(pageNum);
            }
            else {
                log.warn("No current pageElement to create pagemark.");
            }
        });
    }
    keyBindingErasePagemark() {
        log.info("Erasing pagemark.");
        const pageElement = this.docFormat.getCurrentPageElement();
        if (Preconditions_1.isPresent(pageElement)) {
            const pageNum = this.docFormat.getPageNumFromPageElement(pageElement);
            this.erasePagemark(pageNum);
        }
    }
    keyBindingListener(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (KeyEvents_1.KeyEvents.isKeyMetaActive(event)) {
                if (event.key) {
                    switch (event.code) {
                        case "KeyE":
                            this.keyBindingErasePagemark();
                            break;
                        case "KeyN":
                            yield this.keyBindingPagemarkEntirePage(event);
                            break;
                        default:
                            break;
                    }
                }
            }
            else {
            }
        });
    }
    listenForKeyBindings() {
        return __awaiter(this, void 0, void 0, function* () {
            document.addEventListener("keydown", this.keyBindingListener.bind(this));
            log.info("Key bindings registered");
            new TextHighlightController_1.TextHighlightController(this.model).start();
            new PagemarkCoverageEventListener_1.PagemarkCoverageEventListener(this, this.model).start();
            new AreaHighlightController_1.AreaHighlightController(this.model).start();
        });
    }
}
exports.WebController = WebController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldlYkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxrRUFBaUY7QUFDakYsb0VBQStEO0FBQy9ELGdGQUEyRTtBQUMzRSw0Q0FBdUM7QUFDdkMsMkRBQXNEO0FBRXRELDZEQUF3RDtBQUN4RCxtRkFBOEU7QUFDOUUsNkNBQXdDO0FBQ3hDLG1HQUE4RjtBQUU5RixtR0FBOEY7QUFDOUYseUdBQW9HO0FBQ3BHLHVEQUFrRDtBQUNsRCxnRUFBMkQ7QUFDM0QsK0RBQTBEO0FBQzFELG1FQUE4RDtBQUU5RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxhQUFjLFNBQVEsdUJBQVU7SUFhekMsWUFBWSxLQUFZLEVBQUUsTUFBYztRQUVwQyxLQUFLLENBQUMsNkJBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLFNBQVMsR0FBRyx1QkFBTyxDQUFDLG1DQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV0QixJQUFJLHVDQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLElBQUksdUNBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNDLHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFWSxLQUFLOztZQUVkLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzdCLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENB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d0JBRVYsS0FBSyxNQUFNOzRCQUNQLE1BQU0sSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUMvQyxNQUFNO3dCQUVWOzRCQUNJLE1BQU07cUJBRWI7aUJBRUo7YUFFSjtpQkFBTTthQUVOO1FBRUwsQ0FBQztLQUFBO0lBRVksb0JBQW9COztZQUU3QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUV6RSxHQUFHLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFFcEMsSUFBSSxpREFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFaEQsSUFBSSw2REFBNkIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBTTVELElBQUksaURBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXBELENBQUM7S0FBQTtDQUVKO0FBblBELHNDQW1QQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kZWx9IGZyb20gJy4uL21vZGVsL01vZGVsJztcbmltcG9ydCB7aXNQcmVzZW50LCBub3ROdWxsLCBQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtEb2NGb3JtYXRGYWN0b3J5fSBmcm9tICcuLi9kb2Nmb3JtYXQvRG9jRm9ybWF0RmFjdG9yeSc7XG5pbXBvcnQge0NvbnRleHRNZW51Q29udHJvbGxlcn0gZnJvbSAnLi4vY29udGV4dG1lbnUvQ29udGV4dE1lbnVDb250cm9sbGVyJztcbmltcG9ydCB7S2V5RXZlbnRzfSBmcm9tICcuLi9LZXlFdmVudHMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1ZpZXdlcn0gZnJvbSAnLi4vdmlld2VyL1ZpZXdlcic7XG5pbXBvcnQge0RvY1RpdGxlQ29udHJvbGxlcn0gZnJvbSAnLi9Eb2NUaXRsZUNvbnRyb2xsZXInO1xuaW1wb3J0IHtQYWdlbWFya0NvbnRyb2xsZXJ9IGZyb20gJy4uL3BhZ2VtYXJrcy9jb250cm9sbGVyL1BhZ2VtYXJrQ29udHJvbGxlcic7XG5pbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJy4vQ29udHJvbGxlcic7XG5pbXBvcnQge1RleHRIaWdobGlnaHRDb250cm9sbGVyfSBmcm9tICcuLi9oaWdobGlnaHRzL3RleHQvY29udHJvbGxlci9UZXh0SGlnaGxpZ2h0Q29udHJvbGxlcic7XG5pbXBvcnQge0RvY0Zvcm1hdH0gZnJvbSAnLi4vZG9jZm9ybWF0L0RvY0Zvcm1hdCc7XG5pbXBvcnQge0FyZWFIaWdobGlnaHRDb250cm9sbGVyfSBmcm9tICcuLi9oaWdobGlnaHRzL2FyZWEvY29udHJvbGxlci9BcmVhSGlnaGxpZ2h0Q29udHJvbGxlcic7XG5pbXBvcnQge1BhZ2VtYXJrQ292ZXJhZ2VFdmVudExpc3RlbmVyfSBmcm9tICcuLi9wYWdlbWFya3MvY29udHJvbGxlci9QYWdlbWFya0NvdmVyYWdlRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQge0RvY0RldGFpbHN9IGZyb20gJy4uL21ldGFkYXRhL0RvY0RldGFpbHMnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7Q2xpcGJvYXJkQ2xlYW5zZXJ9IGZyb20gJy4uL3VpL0NsaXBib2FyZENsZWFuc2VyJztcbmltcG9ydCB7Vmlld2VyU2NyZWVuc2hvdHN9IGZyb20gJy4uL3ZpZXdlci9WaWV3ZXJTY3JlZW5zaG90cyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFdlYkNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcblxuICAgIHByb3RlY3RlZCB2aWV3ZXI6IFZpZXdlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkb2N1bWVudCBmaW5nZXJwcmludCB0aGF0IHdlIGhhdmUgbG9hZGVkIHRvIGRldGVjdCB3aGVuIHRoZVxuICAgICAqIGRvY3VtZW50cyBoYXZlIGNoYW5nZWQuICBOb3RlIHRoYXQgdGhpcyBpc24ndCBhIHNlY3VyZSBmaW5nZXJwcmludFxuICAgICAqIHNvIHdlIG1pZ2h0IHdhbnQgdG8gY2hhbmdlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBkb2NGaW5nZXJwcmludD86IHN0cmluZztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jRm9ybWF0OiBEb2NGb3JtYXQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWwsIHZpZXdlcjogVmlld2VyKSB7XG5cbiAgICAgICAgc3VwZXIoUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKG1vZGVsLCBcIm1vZGVsXCIpKTtcblxuICAgICAgICB0aGlzLnZpZXdlciA9IFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbCh2aWV3ZXIsIFwidmlld2VyXCIpO1xuXG4gICAgICAgIHRoaXMuZG9jRm9ybWF0ID0gbm90TnVsbChEb2NGb3JtYXRGYWN0b3J5LmdldEluc3RhbmNlKCkpO1xuICAgICAgICB0aGlzLmRvY0Zvcm1hdC5pbml0KCk7XG5cbiAgICAgICAgbmV3IFBhZ2VtYXJrQ29udHJvbGxlcihtb2RlbCkuc3RhcnQoKTtcbiAgICAgICAgbmV3IERvY1RpdGxlQ29udHJvbGxlcih0aGlzLm1vZGVsKS5zdGFydCgpO1xuICAgICAgICBDbGlwYm9hcmRDbGVhbnNlci5yZWdpc3RlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpIHtcblxuICAgICAgICB0aGlzLmxpc3RlbkZvckRvY3VtZW50TG9hZCgpO1xuICAgICAgICBhd2FpdCB0aGlzLmxpc3RlbkZvcktleUJpbmRpbmdzKCk7XG5cbiAgICAgICAgLy8gbmV3IE1vdXNlVHJhY2VyKGRvY3VtZW50KS5zdGFydCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRvY0Zvcm1hdC5uYW1lID09PSAncGRmJykge1xuICAgICAgICAgICAgdGhpcy5kZXRlY3REb2N1bWVudExvYWRlZCgnc3RhcnQnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRpc3BhdGNoRG9jdW1lbnRMb2FkZWQoZmluZ2VycHJpbnQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuclBhZ2VzOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5U2VsZWN0ZWRQYWdlTnVtOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBkb2NEZXRhaWwgPSB0aGlzLnZpZXdlci5kb2NEZXRhaWwoKTtcblxuICAgICAgICBhd2FpdCBzdXBlci5vbkRvY3VtZW50TG9hZGVkKGZpbmdlcnByaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5yUGFnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5U2VsZWN0ZWRQYWdlTnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY0RldGFpbCk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJNZXJnaW5nIGRvY0RldGFpbDogXCIsIGRvY0RldGFpbCk7XG5cbiAgICAgICAgLy8gVE9ETzogbW92ZSB0aGlzIGludG8gdGhlIGltcG9ydGVyIHRvIGNyZWF0ZSB0aGUgRG9jTWV0YSBvbmNlIHRoZVxuICAgICAgICAvLyBQSFogaXMgY3JlYXRlZCB3aGljaCBhbHNvIG1lYW5zIHRoaXMgY2FuIGJlIHRlc3RlZCBlYXNpbHkuXG4gICAgICAgIERvY0RldGFpbHMubWVyZ2UodGhpcy5tb2RlbC5kb2NNZXRhLmRvY0luZm8sIGRvY0RldGFpbCk7XG5cbiAgICAgICAgdGhpcy5zZXR1cFdpbmRvd1dpZHRoKCk7XG5cbiAgICAgICAgdGhpcy5zZXR1cERvY3VtZW50VGl0bGUoKTtcblxuICAgICAgICB0aGlzLnNldHVwQ29udGV4dE1lbnUoKTtcblxuICAgICAgICB0aGlzLmhhbmRsZVRodW1ibmFpbHMoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzZXR1cFdpbmRvd1dpZHRoKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZXdlckNsaWVudFdpZHRoID0gT3B0aW9uYWwub2YoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWV3ZXJDb250YWluZXJcIikpXG4gICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gY3VycmVudC5jbGllbnRXaWR0aClcbiAgICAgICAgICAgIC5nZXRPckVsc2UoMCk7XG5cblxuICAgICAgICBjb25zdCB2aWV3ZXJTY3JvbGxXaWR0aCA9IE9wdGlvbmFsLm9mKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlld2VyQ29udGFpbmVyXCIpKVxuICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IGN1cnJlbnQuc2Nyb2xsV2lkdGgpXG4gICAgICAgICAgICAuZ2V0T3JFbHNlKDApO1xuXG4gICAgICAgIGNvbnN0IG5lZWRzUmVzaXplID0gdmlld2VyU2Nyb2xsV2lkdGggPiB2aWV3ZXJDbGllbnRXaWR0aDtcblxuICAgICAgICBpZiAobmVlZHNSZXNpemUpIHtcblxuICAgICAgICAgICAgY29uc3Qgc2lkZWJhclNjcm9sbFdpZHRoID0gT3B0aW9uYWwub2YoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyQ29udGFpbmVyXCIpKVxuICAgICAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBjdXJyZW50LnNjcm9sbFdpZHRoKVxuICAgICAgICAgICAgICAgIC5nZXRPckVsc2UoMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlcldpZHRoID0gNTA7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1dpZHRoID0gc2lkZWJhclNjcm9sbFdpZHRoICsgdmlld2VyU2Nyb2xsV2lkdGggKyBidWZmZXJXaWR0aDtcblxuICAgICAgICAgICAgaWYgKG5ld1dpZHRoID4gd2luZG93Lm91dGVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVzaXplVG8obmV3V2lkdGgsIHdpbmRvdy5vdXRlckhlaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVUaHVtYm5haWxzKCkge1xuICAgICAgICBWaWV3ZXJTY3JlZW5zaG90cy5kb1NjcmVlbnNob3QodGhpcy5tb2RlbCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldHVwRG9jdW1lbnRUaXRsZSgpIHtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IE9wdGlvbmFsLm9mKHRoaXMubW9kZWwuZG9jTWV0YS5kb2NJbmZvLnRpdGxlKS5nZXRPckVsc2UoXCJVbnRpdGxlZFwiKTtcblxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IGAke3RpdGxlfWA7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0dXBDb250ZXh0TWVudSgpIHtcblxuICAgICAgICBjb25zdCBjb250ZXh0TWVudUNvbnRyb2xsZXIgPSBuZXcgQ29udGV4dE1lbnVDb250cm9sbGVyKHRoaXMubW9kZWwpO1xuICAgICAgICBjb250ZXh0TWVudUNvbnRyb2xsZXIuc3RhcnQoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBsaXN0ZW5Gb3JEb2N1bWVudExvYWQoKSB7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbm90TnVsbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyQ29udGFpbmVyJykpO1xuXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIFsncGFnZXNpbml0JywgJ3VwZGF0ZXZpZXdhcmVhJ10pIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKGV2ZW50KSA9PiB0aGlzLmRldGVjdERvY3VtZW50TG9hZGVkKGV2ZW50TmFtZSkpO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBydW4gbWFudWFsbHkgdGhlIGZpcnN0IHRpbWUgaW4gY2FzZSB3ZSBnZXQgbHVja3kgb2Ygd2UncmUgcnVubmluZyBIVE1MXG4gICAgICAgIC8vIHRoaXMuZGV0ZWN0RG9jdW1lbnRMb2FkZWRFdmVudExpc3RlbmVyKCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGRldGVjdERvY3VtZW50TG9hZGVkKGV2ZW50TmFtZTogc3RyaW5nKSB7XG5cbiAgICAgICAgLy8gVE9ETzogdGVjaG5pY2FsbHkgd2UncmUgZGV0ZWN0aW5nIGEgbmV3IGRvY3VtZW50IExPQURJTkcgbm90IExPQURFRC4uLlxuICAgICAgICAvLyBmaXggdGhpcyBzbyB0aGF0IEkgZ2V0IGEgZGlzdGluY3Qgb25Eb2N1bWVudExvYWRlZCBldmVudCB0b28uLi5cblxuICAgICAgICBjb25zdCBjdXJyZW50RG9jRmluZ2VycHJpbnQgPSB0aGlzLmRvY0Zvcm1hdC5jdXJyZW50RG9jRmluZ2VycHJpbnQoKTtcblxuICAgICAgICBpZiAoY3VycmVudERvY0ZpbmdlcnByaW50ICE9PSB1bmRlZmluZWQgJiYgY3VycmVudERvY0ZpbmdlcnByaW50ICE9PSB0aGlzLmRvY0ZpbmdlcnByaW50KSB7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiY29udHJvbGxlcjogTmV3IGRvY3VtZW50IGxvYWRlZDogXCIgKyBldmVudE5hbWUpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdEb2N1bWVudEZpbmdlcnByaW50ID0gY3VycmVudERvY0ZpbmdlcnByaW50O1xuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RG9jU3RhdGUgPSB0aGlzLmRvY0Zvcm1hdC5jdXJyZW50U3RhdGUoKTtcblxuICAgICAgICAgICAgdGhpcy5vbk5ld0RvY3VtZW50RmluZ2VycHJpbnQobmV3RG9jdW1lbnRGaW5nZXJwcmludCwgY3VycmVudERvY1N0YXRlLm5yUGFnZXMsIGN1cnJlbnREb2NTdGF0ZS5jdXJyZW50UGFnZU51bWJlcik7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIG9uTmV3RG9jdW1lbnRGaW5nZXJwcmludChuZXdEb2N1bWVudEZpbmdlcnByaW50OiBzdHJpbmcsIG5yUGFnZXM6IG51bWJlciwgY3VycmVudFBhZ2VOdW1iZXI6IG51bWJlcikge1xuXG4gICAgICAgIGxvZy5pbmZvKGBEZXRlY3RlZCBuZXcgZG9jdW1lbnQgZmluZ2VycHJpbnQgKGZpbmdlcnByaW50PSR7bmV3RG9jdW1lbnRGaW5nZXJwcmludH0sIG5yUGFnZXM9JHtuclBhZ2VzfSwgY3VycmVudFBhZ2VOdW1iZXI9JHtjdXJyZW50UGFnZU51bWJlcn0pYCk7XG5cbiAgICAgICAgdGhpcy5kb2NGaW5nZXJwcmludCA9IG5ld0RvY3VtZW50RmluZ2VycHJpbnQ7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaERvY3VtZW50TG9hZGVkKG5ld0RvY3VtZW50RmluZ2VycHJpbnQsIG5yUGFnZXMsIGN1cnJlbnRQYWdlTnVtYmVyKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgaGFuZGxlIG9uRG9jdW1lbnRMb2FkZWQ6IFwiLCBlcnIpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBrZXlCaW5kaW5nUGFnZW1hcmtFbnRpcmVQYWdlKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJNYXJraW5nIGVudGlyZSBwYWdlIGFzIHJlYWQuXCIpO1xuXG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gdGhpcy5kb2NGb3JtYXQuZ2V0Q3VycmVudFBhZ2VFbGVtZW50KCk7XG5cbiAgICAgICAgaWYgKHBhZ2VFbGVtZW50KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhZ2VOdW0gPSB0aGlzLmRvY0Zvcm1hdC5nZXRQYWdlTnVtRnJvbVBhZ2VFbGVtZW50KHBhZ2VFbGVtZW50KTtcblxuICAgICAgICAgICAgdGhpcy5lcmFzZVBhZ2VtYXJrcyhwYWdlTnVtKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlUGFnZW1hcmsocGFnZU51bSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gY3VycmVudCBwYWdlRWxlbWVudCB0byBjcmVhdGUgcGFnZW1hcmsuXCIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMga2V5QmluZGluZ0VyYXNlUGFnZW1hcmsoKSB7XG4gICAgICAgIGxvZy5pbmZvKFwiRXJhc2luZyBwYWdlbWFyay5cIik7XG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gPEhUTUxFbGVtZW50PiB0aGlzLmRvY0Zvcm1hdC5nZXRDdXJyZW50UGFnZUVsZW1lbnQoKTtcblxuICAgICAgICBpZiAoaXNQcmVzZW50KHBhZ2VFbGVtZW50KSkge1xuICAgICAgICAgICAgY29uc3QgcGFnZU51bSA9IHRoaXMuZG9jRm9ybWF0LmdldFBhZ2VOdW1Gcm9tUGFnZUVsZW1lbnQocGFnZUVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5lcmFzZVBhZ2VtYXJrKHBhZ2VOdW0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMga2V5QmluZGluZ0xpc3RlbmVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG5cbiAgICAgICAgaWYgKEtleUV2ZW50cy5pc0tleU1ldGFBY3RpdmUoZXZlbnQpKSB7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5rZXkpIHtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdlIHNob3VsZCBub3QgdXNlICdjb2RlJyBidXQgc2hvdWxkIHVzZSAna2V5Jy4uLiBUaGVcbiAgICAgICAgICAgICAgICAvLyBwcm9ibGVtIGlzIHRoYXQgb24gT1MgWCB0aGUga2V5IGNvZGUgcmV0dXJuZWQgJ0RlYWQnIGJ1dCB3YXNcbiAgICAgICAgICAgICAgICAvLyB3b3JraW5nIGJlZm9yZS4gIE5vdCBzdXJlIHdoeSBpdCBzdGFydGVkIGJyZWFraW5nLlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJLZXlFXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUJpbmRpbmdFcmFzZVBhZ2VtYXJrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiS2V5TlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5rZXlCaW5kaW5nUGFnZW1hcmtFbnRpcmVQYWdlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub29wXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsaXN0ZW5Gb3JLZXlCaW5kaW5ncygpIHtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleUJpbmRpbmdMaXN0ZW5lci5iaW5kKHRoaXMpKTtcblxuICAgICAgICBsb2cuaW5mbyhcIktleSBiaW5kaW5ncyByZWdpc3RlcmVkXCIpO1xuXG4gICAgICAgIG5ldyBUZXh0SGlnaGxpZ2h0Q29udHJvbGxlcih0aGlzLm1vZGVsKS5zdGFydCgpO1xuXG4gICAgICAgIG5ldyBQYWdlbWFya0NvdmVyYWdlRXZlbnRMaXN0ZW5lcih0aGlzLCB0aGlzLm1vZGVsKS5zdGFydCgpO1xuXG4gICAgICAgIC8vIG5ldyBGbGFzaGNhcmRzQ29udHJvbGxlcih0aGlzLm1vZGVsKS5zdGFydCgpO1xuXG4gICAgICAgIC8vIGF3YWl0IG5ldyBBbm5vdGF0aW9uc0NvbnRyb2xsZXIoKS5zdGFydCgpO1xuXG4gICAgICAgIG5ldyBBcmVhSGlnaGxpZ2h0Q29udHJvbGxlcih0aGlzLm1vZGVsKS5zdGFydCgpO1xuXG4gICAgfVxuXG59XG4iXX0=