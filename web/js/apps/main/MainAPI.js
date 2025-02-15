"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("polar-shared/src/logger/Logger");
const Version_1 = require("polar-shared/src/util/Version");
const FileImportClient_1 = require("../repository/FileImportClient");
const FileImportRequests_1 = require("../repository/FileImportRequests");
const log = Logger_1.Logger.create();
const ALLOWED_ORIGIN = ['chrome-extension://nplbojledjdlbankapinifindadkdpnj',
    'chrome-extension://jkfdkjomocoaljglgddnmhcbolldcafd']
    .join(', ');
class MainAPI {
    constructor(mainAppController, webRequestHandler) {
        this.mainAppController = mainAppController;
        this.webRequestHandler = webRequestHandler;
    }
    start() {
        this.startCaptureTriggerHandler();
        this.startPingHandler();
    }
    startCaptureTriggerHandler() {
        const path = "/rest/v1/capture/trigger";
        this.webRequestHandler.options(path, (req, res) => {
            log.info("Handling OPTIONS request: ", req.headers);
            res.header('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
            res.status(200).send({});
        });
        this.webRequestHandler.post(path, (req, res) => {
            log.info("Handling POST request for capture trigger: ", req.body);
            const captureOpts = req.body;
            if (captureOpts.contentType === 'application/pdf') {
                FileImportClient_1.FileImportClient.send(FileImportRequests_1.FileImportRequests.fromURLs([captureOpts.link]));
            }
            else {
                this.mainAppController.cmdCaptureWebPageWithBrowser(captureOpts)
                    .catch(err => log.error("Unable to capture page: ", err));
            }
            res.status(200).send({});
        });
    }
    startPingHandler() {
        const path = "/rest/v1/ping";
        this.webRequestHandler.post(path, (req, res) => {
            res.header('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
            const timestamp = Date.now();
            const version = Version_1.Version.get();
            const data = {
                timestamp,
                version
            };
            res.status(200).send(data);
        });
    }
}
exports.MainAPI = MainAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkFQSS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1haW5BUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyREFBc0Q7QUFFdEQsMkRBQXNEO0FBQ3RELHFFQUFnRTtBQUNoRSx5RUFBb0U7QUFHcEUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sY0FBYyxHQUFHLENBQUMscURBQXFEO0lBQ3JELHFEQUFxRCxDQUFFO0tBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVuQyxNQUFhLE9BQU87SUFNaEIsWUFBWSxpQkFBb0MsRUFBRSxpQkFBb0M7UUFDbEYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQyxDQUFDO0lBRU0sS0FBSztRQUNSLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTywwQkFBMEI7UUFFOUIsTUFBTSxJQUFJLEdBQUcsMEJBQTBCLENBQUM7UUFFeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFFOUMsR0FBRyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFLcEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUMxRCxHQUFHLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQzNELEdBQUcsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFFNUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUUzQyxHQUFHLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVsRSxNQUFNLFdBQVcsR0FBMEIsR0FBRyxDQUFDLElBQUksQ0FBQztZQUVwRCxJQUFJLFdBQVcsQ0FBQyxXQUFXLEtBQUssaUJBQWlCLEVBQUU7Z0JBRS9DLG1DQUFnQixDQUFDLElBQUksQ0FBQyx1Q0FBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBRTNFO2lCQUFNO2dCQUVILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUM7cUJBQzNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUVqRTtZQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQU9PLGdCQUFnQjtRQUVwQixNQUFNLElBQUksR0FBRyxlQUFlLENBQUM7UUFFN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFFM0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUUxRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0IsTUFBTSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUU5QixNQUFNLElBQUksR0FBRztnQkFDVCxTQUFTO2dCQUNULE9BQU87YUFDVixDQUFDO1lBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0IsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBR0o7QUF0RkQsMEJBc0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYXB0dXJlT3B0c30gZnJvbSAnLi4vLi4vY2FwdHVyZS9DYXB0dXJlT3B0cyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7TWFpbkFwcENvbnRyb2xsZXJ9IGZyb20gJy4vTWFpbkFwcENvbnRyb2xsZXInO1xuaW1wb3J0IHtWZXJzaW9ufSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvVmVyc2lvbic7XG5pbXBvcnQge0ZpbGVJbXBvcnRDbGllbnR9IGZyb20gJy4uL3JlcG9zaXRvcnkvRmlsZUltcG9ydENsaWVudCc7XG5pbXBvcnQge0ZpbGVJbXBvcnRSZXF1ZXN0c30gZnJvbSAnLi4vcmVwb3NpdG9yeS9GaWxlSW1wb3J0UmVxdWVzdHMnO1xuaW1wb3J0IHtXZWJSZXF1ZXN0SGFuZGxlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC13ZWJzZXJ2ZXIvc3JjL3dlYnNlcnZlci9XZWJzZXJ2ZXJcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBBTExPV0VEX09SSUdJTiA9IFsnY2hyb21lLWV4dGVuc2lvbjovL25wbGJvamxlZGpkbGJhbmthcGluaWZpbmRhZGtkcG5qJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdjaHJvbWUtZXh0ZW5zaW9uOi8vamtmZGtqb21vY29hbGpnbGdkZG5taGNib2xsZGNhZmQnIF1cbiAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyk7XG5cbmV4cG9ydCBjbGFzcyBNYWluQVBJIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWFpbkFwcENvbnRyb2xsZXI6IE1haW5BcHBDb250cm9sbGVyO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB3ZWJSZXF1ZXN0SGFuZGxlcjogV2ViUmVxdWVzdEhhbmRsZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihtYWluQXBwQ29udHJvbGxlcjogTWFpbkFwcENvbnRyb2xsZXIsIHdlYlJlcXVlc3RIYW5kbGVyOiBXZWJSZXF1ZXN0SGFuZGxlcikge1xuICAgICAgICB0aGlzLm1haW5BcHBDb250cm9sbGVyID0gbWFpbkFwcENvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMud2ViUmVxdWVzdEhhbmRsZXIgPSB3ZWJSZXF1ZXN0SGFuZGxlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhcnRDYXB0dXJlVHJpZ2dlckhhbmRsZXIoKTtcbiAgICAgICAgdGhpcy5zdGFydFBpbmdIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydENhcHR1cmVUcmlnZ2VySGFuZGxlcigpIHtcblxuICAgICAgICBjb25zdCBwYXRoID0gXCIvcmVzdC92MS9jYXB0dXJlL3RyaWdnZXJcIjtcblxuICAgICAgICB0aGlzLndlYlJlcXVlc3RIYW5kbGVyLm9wdGlvbnMocGF0aCwgKHJlcSwgcmVzKSA9PiB7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiSGFuZGxpbmcgT1BUSU9OUyByZXF1ZXN0OiBcIiwgcmVxLmhlYWRlcnMpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGNocm9tZSBleHRlbnNpb24gVVJMIHdpbGwgY2hhbmdlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZVxuICAgICAgICAgICAgLy8gcHVzaCBpdCB0byB0aGUgYXBwIHN0b3JlIEkgdGhpbmsuXG5cbiAgICAgICAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsIEFMTE9XRURfT1JJR0lOKTtcbiAgICAgICAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnQ29udGVudC1UeXBlJyk7XG4gICAgICAgICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ1BPU1QsIE9QVElPTlMnKTtcblxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe30pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMud2ViUmVxdWVzdEhhbmRsZXIucG9zdChwYXRoLCAocmVxLCByZXMpID0+IHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJIYW5kbGluZyBQT1NUIHJlcXVlc3QgZm9yIGNhcHR1cmUgdHJpZ2dlcjogXCIsIHJlcS5ib2R5KTtcblxuICAgICAgICAgICAgY29uc3QgY2FwdHVyZU9wdHMgPSA8UGFydGlhbDxDYXB0dXJlT3B0cz4+IHJlcS5ib2R5O1xuXG4gICAgICAgICAgICBpZiAoY2FwdHVyZU9wdHMuY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi9wZGYnKSB7XG5cbiAgICAgICAgICAgICAgICBGaWxlSW1wb3J0Q2xpZW50LnNlbmQoRmlsZUltcG9ydFJlcXVlc3RzLmZyb21VUkxzKFtjYXB0dXJlT3B0cy5saW5rIV0pKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkFwcENvbnRyb2xsZXIuY21kQ2FwdHVyZVdlYlBhZ2VXaXRoQnJvd3NlcihjYXB0dXJlT3B0cylcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gY2FwdHVyZSBwYWdlOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe30pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlZCBzbyB0aGF0IHRoZSBjaHJvbWUgZXh0ZW5zaW9uIGNhbiBwaW5nIHRoZSBkZXNrdG9wIGFwcCB0byBzZWUgaWZcbiAgICAgKiBpdCdzIGFjdGl2ZSB0byBlbmFibGUvZGlzYWJsZSB0aGUgc2hhcmluZyBvcHRpb25zLiAgV2Ugd29uJ3Qgc2hvdyB0aGVcbiAgICAgKiBzaGFyZSBidXR0b24gaWYgdGhlIGRlc2t0b3AgYXBwIGlzbid0IGFjdGl2ZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXJ0UGluZ0hhbmRsZXIoKSB7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IFwiL3Jlc3QvdjEvcGluZ1wiO1xuXG4gICAgICAgIHRoaXMud2ViUmVxdWVzdEhhbmRsZXIucG9zdChwYXRoLCAocmVxLCByZXMpID0+IHtcblxuICAgICAgICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgQUxMT1dFRF9PUklHSU4pO1xuXG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgdmVyc2lvbiA9IFZlcnNpb24uZ2V0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIHZlcnNpb25cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbn1cbiJdfQ==