"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Optional_1 = require("polar-shared/src/util/ts/Optional");
class DocThumbnail extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { thumbnails } = this.props;
        const thumbnail = Optional_1.Optional.of((thumbnails || {})['default']).getOrUndefined();
        if (thumbnail) {
            const persistenceLayer = this.props.persistenceLayerProvider();
            const thumbnailFile = persistenceLayer.getFile(thumbnail.src.backend, thumbnail.src);
            const maxWidth = this.props.maxWidth || '125px';
            const maxHeight = this.props.maxHeight || '125px';
            return React.createElement("img", { className: "border border-dark img-fluid ml-auto mr-auto", src: thumbnailFile.url, style: { maxWidth, maxHeight } });
        }
        else {
            return React.createElement("div", null);
        }
    }
}
exports.DocThumbnail = DocThumbnail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jVGh1bWJuYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jVGh1bWJuYWlsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFFL0IsZ0VBQTJEO0FBSTNELE1BQWEsWUFBYSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU3RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEVBQUMsVUFBVSxFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVoQyxNQUFNLFNBQVMsR0FBRyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTlFLElBQUksU0FBUyxFQUFFO1lBRVgsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDL0QsTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVyRixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUM7WUFDaEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDO1lBRWxELE9BQU8sNkJBQUssU0FBUyxFQUFDLDhDQUE4QyxFQUMzRCxHQUFHLEVBQUUsYUFBYSxDQUFDLEdBQUcsRUFDdEIsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxHQUFHLENBQ3ZDO1NBRUo7YUFBTTtZQUNILE9BQU8sZ0NBQU0sQ0FBQztTQUNqQjtJQUVMLENBQUM7Q0FHSjtBQWpDRCxvQ0FpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0lEb2NJbmZvfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jSW5mb1wiO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbFwiO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJcIjtcbmltcG9ydCB7SVRodW1ibmFpbH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVRodW1ibmFpbFwiO1xuXG5leHBvcnQgY2xhc3MgRG9jVGh1bWJuYWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7dGh1bWJuYWlsc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IE9wdGlvbmFsLm9mKCh0aHVtYm5haWxzIHx8IHt9KVsnZGVmYXVsdCddKS5nZXRPclVuZGVmaW5lZCgpO1xuXG4gICAgICAgIGlmICh0aHVtYm5haWwpIHtcblxuICAgICAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IHRoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllclByb3ZpZGVyKCk7XG4gICAgICAgICAgICBjb25zdCB0aHVtYm5haWxGaWxlID0gcGVyc2lzdGVuY2VMYXllci5nZXRGaWxlKHRodW1ibmFpbC5zcmMuYmFja2VuZCwgdGh1bWJuYWlsLnNyYyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1heFdpZHRoID0gdGhpcy5wcm9wcy5tYXhXaWR0aCB8fCAnMTI1cHgnO1xuICAgICAgICAgICAgY29uc3QgbWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5tYXhIZWlnaHQgfHwgJzEyNXB4JztcblxuICAgICAgICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1kYXJrIGltZy1mbHVpZCBtbC1hdXRvIG1yLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aHVtYm5haWxGaWxlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGgsIG1heEhlaWdodH19Lz5cbiAgICAgICAgICAgIDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHRodW1ibmFpbHM/OiB7IFtpZDogc3RyaW5nXTogSVRodW1ibmFpbCB9O1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogUGVyc2lzdGVuY2VMYXllclByb3ZpZGVyO1xuICAgIHJlYWRvbmx5IG1heFdpZHRoPzogbnVtYmVyO1xuICAgIHJlYWRvbmx5IG1heEhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cbiJdfQ==