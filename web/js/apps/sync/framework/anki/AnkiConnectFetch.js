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
const Fetch_1 = require("polar-shared/src/util/Fetch");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class AnkiConnectFetch {
    static initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            const detectPort = () => __awaiter(this, void 0, void 0, function* () {
                for (const port of this.PORTS) {
                    try {
                        const body = {
                            action: "version",
                            version: 6,
                            params: {}
                        };
                        const init = { method: 'POST', body: JSON.stringify(body) };
                        yield AnkiConnectFetch.fetch(init, port);
                        return port;
                    }
                    catch (e) {
                        console.debug("Unable to connect on port: " + port);
                    }
                }
                const msg = `Unable to connect to anki with ports ${this.PORTS} (make sure Polar Connect is installed)`;
                log.error(msg);
                throw new Error(msg);
            });
            const configurePort = () => __awaiter(this, void 0, void 0, function* () {
                this.port = yield detectPort();
                log.notice("Using Anki sync port: " + this.port);
            });
            yield configurePort();
        });
    }
    static fetch(init, port = this.port) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                init = Object.assign(Object.assign({}, init), { cache: 'no-cache', headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    } });
                const response = yield Fetch_1.Fetches.fetch('http://127.0.0.1:' + port, init);
                const result = yield response.json();
                if (result.error) {
                    throw new Error(result.error);
                }
                return result.result;
            }
            catch (e) {
                log.warn("Anki connect fetch failed (install Polar Connect or Anki Connect): ", e);
                throw e;
            }
        });
    }
}
exports.AnkiConnectFetch = AnkiConnectFetch;
AnkiConnectFetch.PORTS = [8766, 8765];
AnkiConnectFetch.port = 8766;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5raUNvbm5lY3RGZXRjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFua2lDb25uZWN0RmV0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1REFBaUU7QUFFakUsMkRBQXNEO0FBRXRELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUs1QixNQUFhLGdCQUFnQjtJQU1sQixNQUFNLENBQU8sVUFBVTs7WUFJMUIsTUFBTSxVQUFVLEdBQUcsR0FBMEIsRUFBRTtnQkFFM0MsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUUzQixJQUFJO3dCQUVBLE1BQU0sSUFBSSxHQUFHOzRCQUNULE1BQU0sRUFBRSxTQUFTOzRCQUNqQixPQUFPLEVBQUUsQ0FBQzs0QkFDVixNQUFNLEVBQUUsRUFBRTt5QkFDYixDQUFDO3dCQUVGLE1BQU0sSUFBSSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO3dCQUU1RCxNQUFNLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBRXpDLE9BQU8sSUFBSSxDQUFDO3FCQUVmO29CQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLENBQUM7cUJBQ3ZEO2lCQUVKO2dCQUVELE1BQU0sR0FBRyxHQUFHLHdDQUF3QyxJQUFJLENBQUMsS0FBSyx5Q0FBeUMsQ0FBQztnQkFDeEcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXpCLENBQUMsQ0FBQSxDQUFDO1lBRUYsTUFBTSxhQUFhLEdBQUcsR0FBUyxFQUFFO2dCQUU3QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sVUFBVSxFQUFFLENBQUM7Z0JBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRELENBQUMsQ0FBQSxDQUFDO1lBRUYsTUFBTSxhQUFhLEVBQUUsQ0FBQztRQUUxQixDQUFDO0tBQUE7SUFJTSxNQUFNLENBQU8sS0FBSyxDQUFJLElBQWlCLEVBQUUsT0FBZSxJQUFJLENBQUMsSUFBSTs7WUFFcEUsSUFBSTtnQkFFQSxJQUFJLG1DQUNHLElBQUksS0FDUCxLQUFLLEVBQUUsVUFBVSxFQUNqQixPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsY0FBYyxFQUFFLGtCQUFrQjtxQkFDckMsR0FDSixDQUFDO2dCQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZFLE1BQU0sTUFBTSxHQUF3QixNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFMUQsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO29CQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqQztnQkFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDeEI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixHQUFHLENBQUMsSUFBSSxDQUFDLHFFQUFxRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixNQUFNLENBQUMsQ0FBQzthQUNYO1FBRUwsQ0FBQztLQUFBOztBQS9FTCw0Q0FpRkM7QUEvRWlCLHNCQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFcEIscUJBQUksR0FBVyxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZldGNoZXMsIFJlcXVlc3RJbml0fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmV0Y2gnO1xuaW1wb3J0IHtBbmtpQ29ubmVjdFJlc3BvbnNlfSBmcm9tICcuL0Fua2lDb25uZWN0UmVzcG9uc2UnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBGZXRjaCBpbXBsZW1lbnRhdGlvbiB0aGF0IGFsd2F5cyB1c2VzIHRoZSBwcm9wZXIgQW5raSBsb2NhbCBVUkwuXG4gKi9cbmV4cG9ydCBjbGFzcyBBbmtpQ29ubmVjdEZldGNoIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgUE9SVFMgPSBbODc2NiwgODc2NV07XG5cbiAgICBwcml2YXRlIHN0YXRpYyBwb3J0OiBudW1iZXIgPSA4NzY2O1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBpbml0aWFsaXplPFQ+KCk6IFByb21pc2U8YW55PiB7XG5cbiAgICAgICAgLy8gdHJ5IHRvIGRldGVybWluZSB3aGljaCBwb3J0IHRvIHVzZSBiYXNlZCBvbiBwb2xhciBjb25uZWN0IHZzIGFua2kgY29ubmVjdFxuXG4gICAgICAgIGNvbnN0IGRldGVjdFBvcnQgPSBhc3luYyAoKTogUHJvbWlzZTxudW1iZXI+ID0+IHtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBwb3J0IG9mIHRoaXMuUE9SVFMpIHtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ2ZXJzaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uOiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7fVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluaXQgPSB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IEFua2lDb25uZWN0RmV0Y2guZmV0Y2goaW5pdCwgcG9ydCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvcnQ7XG5cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJVbmFibGUgdG8gY29ubmVjdCBvbiBwb3J0OiBcIiArIHBvcnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgVW5hYmxlIHRvIGNvbm5lY3QgdG8gYW5raSB3aXRoIHBvcnRzICR7dGhpcy5QT1JUU30gKG1ha2Ugc3VyZSBQb2xhciBDb25uZWN0IGlzIGluc3RhbGxlZClgO1xuICAgICAgICAgICAgbG9nLmVycm9yKG1zZyk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZ3VyZVBvcnQgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMucG9ydCA9IGF3YWl0IGRldGVjdFBvcnQoKTtcbiAgICAgICAgICAgIGxvZy5ub3RpY2UoXCJVc2luZyBBbmtpIHN5bmMgcG9ydDogXCIgICsgdGhpcy5wb3J0KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IGNvbmZpZ3VyZVBvcnQoKTtcblxuICAgIH1cblxuICAgIC8vIFRPRE86IHNpbmNlIHRoZSByZXNwb25zZSBpcyB3cmFwcGVkIGluIGEgY2xvc3VyZSwgd2UgY2FuIGhhbmRsZSBlcnJvcnNcbiAgICAvLyBwcm9wZXJseSBoZXJlLlxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZmV0Y2g8VD4oaW5pdDogUmVxdWVzdEluaXQsIHBvcnQ6IG51bWJlciA9IHRoaXMucG9ydCk6IFByb21pc2U8YW55PiB7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgaW5pdCA9IHtcbiAgICAgICAgICAgICAgICAuLi5pbml0LFxuICAgICAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgRmV0Y2hlcy5mZXRjaCgnaHR0cDovLzEyNy4wLjAuMTonICsgcG9ydCwgaW5pdCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IEFua2lDb25uZWN0UmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiQW5raSBjb25uZWN0IGZldGNoIGZhaWxlZCAoaW5zdGFsbCBQb2xhciBDb25uZWN0IG9yIEFua2kgQ29ubmVjdCk6IFwiLCBlKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19