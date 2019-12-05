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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const electron_1 = require("electron");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        method: "GET",
        url: 'https://www.cnn.com',
    };
    const netRequest = electron_1.net.request(options)
        .on('response', (response) => __awaiter(void 0, void 0, void 0, function* () {
        response.on('data', chunk => {
            console.log("GOT CHUNK:", chunk);
        });
        response.on('end', () => {
            console.log("GOT END");
        });
    }))
        .on('abort', () => {
        log.error(`Request aborted: ${options.url}`);
    })
        .on('error', (error) => {
        log.error(`Request error: ${options.url}`, error);
    });
    netRequest.end();
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCx1Q0FBNkI7QUFDN0IsMkRBQXNEO0FBRXRELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1Qiw2QkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBR3JDLE1BQU0sT0FBTyxHQUFHO1FBQ1osTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUscUJBQXFCO0tBQzdCLENBQUM7SUFFRixNQUFNLFVBQVUsR0FBRyxjQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUNsQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQU8sUUFBUSxFQUFFLEVBQUU7UUFFL0IsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQSxDQUFDO1NBQ0QsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDZCxHQUFHLENBQUMsS0FBSyxDQUFDLG9CQUFvQixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUM7U0FDRCxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDbkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0lBTVAsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBS2pCLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtuZXR9IGZyb20gXCJlbGVjdHJvblwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuU3BlY3Ryb25NYWluMi5jcmVhdGUoKS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmNubi5jb20nLFxuICAgIH07XG5cbiAgICBjb25zdCBuZXRSZXF1ZXN0ID0gbmV0LnJlcXVlc3Qob3B0aW9ucylcbiAgICAgICAgLm9uKCdyZXNwb25zZScsIGFzeW5jIChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgICAgICByZXNwb25zZS5vbignZGF0YScsIGNodW5rID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdPVCBDSFVOSzpcIiwgY2h1bmspO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlc3BvbnNlLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHT1QgRU5EXCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdhYm9ydCcsICgpID0+IHtcbiAgICAgICAgICAgIGxvZy5lcnJvcihgUmVxdWVzdCBhYm9ydGVkOiAke29wdGlvbnMudXJsfWApO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBsb2cuZXJyb3IoYFJlcXVlc3QgZXJyb3I6ICR7b3B0aW9ucy51cmx9YCwgZXJyb3IpO1xuICAgICAgICB9KTtcblxuXG4gICAgLy8gVE9ETzogd2UgaGF2ZSB0byBjYWxsIG5ldFJlcXVlc3Qud3JpdGUgb24gYWxsIHRoZSByZXF1ZXN0LnVwbG9hZERhdGEuXG4gICAgLy8gbm90IHVyZ2VudCBiZWNhdXNlIHRoaXMgaXNuJ3QgcmVhbGx5IGEgdXNlIGNhc2Ugd2UgbXVzdCBzdXBwb3J0LlxuXG4gICAgbmV0UmVxdWVzdC5lbmQoKTtcblxuXG5cblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbn0pO1xuIl19