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
const DocRepoTableColumns_1 = require("../doc_repo/DocRepoTableColumns");
const Logger_1 = require("polar-shared/src/logger/Logger");
const SynchronizingDocLoader_1 = require("../util/SynchronizingDocLoader");
const Either_1 = require("../../../../web/js/util/Either");
const BackendFileRefs_1 = require("../../../../web/js/datastore/BackendFileRefs");
const ResponsiveImg_1 = require("../../../../web/js/annotation_sidebar/ResponsiveImg");
const DocPropTable_1 = require("./meta_view/DocPropTable");
const log = Logger_1.Logger.create();
const Styles = {
    annotationText: {
        paddingTop: '5px'
    },
};
const AnnotationImage = (props) => {
    return React.createElement(ResponsiveImg_1.ResponsiveImg, { id: props.id, img: props.img, defaultText: " " });
};
class RepoAnnotationMetaView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.synchronizingDocLoader = new SynchronizingDocLoader_1.SynchronizingDocLoader(this.props.persistenceLayerManager);
        this.state = {
            data: [],
            columns: new DocRepoTableColumns_1.DocRepoTableColumns()
        };
    }
    render() {
        if (this.props.repoAnnotation) {
            const repoAnnotation = this.props.repoAnnotation;
            return (React.createElement("div", null,
                React.createElement("div", { style: { display: 'flex' } },
                    React.createElement("div", { style: { flexGrow: 1, verticalAlign: 'top' } },
                        React.createElement(DocPropTable_1.DocPropTable, { repoAnnotation: repoAnnotation, onDocumentLoadRequested: docInfo => this.onDocumentLoadRequested(docInfo) })),
                    React.createElement("div", null)),
                React.createElement("div", { style: Styles.annotationText }, repoAnnotation.text),
                React.createElement(AnnotationImage, { id: repoAnnotation.id, img: repoAnnotation.img })));
        }
        else {
            return (React.createElement("div", { className: "text-muted text-center" }, "No annotation selected."));
        }
    }
    onDocumentLoadRequested(docInfo) {
        const backendFileRef = BackendFileRefs_1.BackendFileRefs.toBackendFileRef(Either_1.Either.ofRight(docInfo));
        this.synchronizingDocLoader.load(docInfo.fingerprint, backendFileRef)
            .catch(err => log.error("Unable to load doc: ", err));
    }
}
exports.RepoAnnotationMetaView = RepoAnnotationMetaView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb0Fubm90YXRpb25NZXRhVmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlcG9Bbm5vdGF0aW9uTWV0YVZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQix5RUFBb0U7QUFJcEUsMkRBQXNEO0FBQ3RELDJFQUFzRTtBQUN0RSwyREFBc0Q7QUFDdEQsa0ZBQTZFO0FBRTdFLHVGQUFrRjtBQUNsRiwyREFBc0Q7QUFJdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sTUFBTSxHQUFjO0lBRXRCLGNBQWMsRUFBRTtRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ3BCO0NBRUosQ0FBQztBQU9GLE1BQU0sZUFBZSxHQUFHLENBQUMsS0FBMkIsRUFBRSxFQUFFO0lBQ3BELE9BQU8sb0JBQUMsNkJBQWEsSUFBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUMsR0FBRyxHQUFFLENBQUM7QUFDMUUsQ0FBQyxDQUFDO0FBRUYsTUFBYyxzQkFBdUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFJeEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLCtDQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUU3RixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLEVBQUU7WUFDUixPQUFPLEVBQUUsSUFBSSx5Q0FBbUIsRUFBRTtTQUNyQyxDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBRTNCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBRWpELE9BQU8sQ0FFSDtnQkFFSSw2QkFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDO29CQUV6Qiw2QkFBSyxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUM7d0JBRTNDLG9CQUFDLDJCQUFZLElBQUMsY0FBYyxFQUFFLGNBQWMsRUFDOUIsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FFeEY7b0JBRU4sZ0NBR00sQ0FFSjtnQkFJTiw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLGNBQWMsSUFDNUIsY0FBYyxDQUFDLElBQUksQ0FDbEI7Z0JBRU4sb0JBQUMsZUFBZSxJQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxjQUFjLENBQUMsR0FBRyxHQUFHLENBS2hFLENBRVQsQ0FBQztTQUVMO2FBQU07WUFFSCxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLHdCQUF3Qiw4QkFFakMsQ0FFVCxDQUFDO1NBRUw7SUFFTCxDQUFDO0lBRU8sdUJBQXVCLENBQUMsT0FBaUI7UUFFN0MsTUFBTSxjQUFjLEdBQUcsaUNBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFakYsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLGNBQWUsQ0FBQzthQUNqRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFOUQsQ0FBQztDQUVKO0FBaEZELHdEQWdGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RG9jUmVwb1RhYmxlQ29sdW1uc30gZnJvbSAnLi4vZG9jX3JlcG8vRG9jUmVwb1RhYmxlQ29sdW1ucyc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm8nO1xuaW1wb3J0IHtJU3R5bGVNYXB9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9yZWFjdC9JU3R5bGVNYXAnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1N5bmNocm9uaXppbmdEb2NMb2FkZXJ9IGZyb20gJy4uL3V0aWwvU3luY2hyb25pemluZ0RvY0xvYWRlcic7XG5pbXBvcnQge0VpdGhlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3V0aWwvRWl0aGVyJztcbmltcG9ydCB7QmFja2VuZEZpbGVSZWZzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL0JhY2tlbmRGaWxlUmVmcyc7XG5pbXBvcnQge0ltZ30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JbWcnO1xuaW1wb3J0IHtSZXNwb25zaXZlSW1nfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvYW5ub3RhdGlvbl9zaWRlYmFyL1Jlc3BvbnNpdmVJbWcnO1xuaW1wb3J0IHtEb2NQcm9wVGFibGV9IGZyb20gXCIuL21ldGFfdmlldy9Eb2NQcm9wVGFibGVcIjtcbmltcG9ydCB7SURvY0Fubm90YXRpb259IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvYW5ub3RhdGlvbl9zaWRlYmFyL0RvY0Fubm90YXRpb25cIjtcbmltcG9ydCB7QW5ub3RhdGlvbkNvbnRyb2xCYXJ9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvYW5ub3RhdGlvbl9zaWRlYmFyL0Fubm90YXRpb25Db250cm9sQmFyXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgU3R5bGVzOiBJU3R5bGVNYXAgPSB7XG5cbiAgICBhbm5vdGF0aW9uVGV4dDoge1xuICAgICAgICBwYWRkaW5nVG9wOiAnNXB4J1xuICAgIH0sXG5cbn07XG5cbmludGVyZmFjZSBBbm5vdGF0aW9uSW1hZ2VQcm9wcyB7XG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgICByZWFkb25seSBpbWc/OiBJbWc7XG59XG5cbmNvbnN0IEFubm90YXRpb25JbWFnZSA9IChwcm9wczogQW5ub3RhdGlvbkltYWdlUHJvcHMpID0+IHtcbiAgICByZXR1cm4gPFJlc3BvbnNpdmVJbWcgaWQ9e3Byb3BzLmlkfSBpbWc9e3Byb3BzLmltZ30gZGVmYXVsdFRleHQ9XCIgXCIvPjtcbn07XG5cbmV4cG9ydCBjbGFzcyAgUmVwb0Fubm90YXRpb25NZXRhVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzeW5jaHJvbml6aW5nRG9jTG9hZGVyOiBTeW5jaHJvbml6aW5nRG9jTG9hZGVyO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN5bmNocm9uaXppbmdEb2NMb2FkZXIgPSBuZXcgU3luY2hyb25pemluZ0RvY0xvYWRlcih0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBjb2x1bW5zOiBuZXcgRG9jUmVwb1RhYmxlQ29sdW1ucygpXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJlcG9Bbm5vdGF0aW9uKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlcG9Bbm5vdGF0aW9uID0gdGhpcy5wcm9wcy5yZXBvQW5ub3RhdGlvbjtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleEdyb3c6IDEsIHZlcnRpY2FsQWxpZ246ICd0b3AnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9jUHJvcFRhYmxlIHJlcG9Bbm5vdGF0aW9uPXtyZXBvQW5ub3RhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRG9jdW1lbnRMb2FkUmVxdWVzdGVkPXtkb2NJbmZvID0+IHRoaXMub25Eb2N1bWVudExvYWRSZXF1ZXN0ZWQoZG9jSW5mbyl9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPERvY1RodW1ibmFpbCB0aHVtYm5haWxzPXtyZXBvQW5ub3RhdGlvbi5kb2NJbmZvLnRodW1ibmFpbHN9Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI9eygpID0+IHRoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIuZ2V0KCl9Lz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuYW5ub3RhdGlvblRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlcG9Bbm5vdGF0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxBbm5vdGF0aW9uSW1hZ2UgaWQ9e3JlcG9Bbm5vdGF0aW9uLmlkfSBpbWc9e3JlcG9Bbm5vdGF0aW9uLmltZ30vPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKkZJWE1FOiBJIG5lZWQgdG8gZmlndXJlIG91dCBob3cgdG8gZ2V0IHRoZSAnZG9jJyBub3cqL31cbiAgICAgICAgICAgICAgICAgICAgey8qPEFubm90YXRpb25Db250cm9sQmFyIGRvYz17fSBhbm5vdGF0aW9uPXt9Lz4qL31cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgTm8gYW5ub3RhdGlvbiBzZWxlY3RlZC5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9jdW1lbnRMb2FkUmVxdWVzdGVkKGRvY0luZm86IElEb2NJbmZvKSB7XG5cbiAgICAgICAgY29uc3QgYmFja2VuZEZpbGVSZWYgPSBCYWNrZW5kRmlsZVJlZnMudG9CYWNrZW5kRmlsZVJlZihFaXRoZXIub2ZSaWdodChkb2NJbmZvKSk7XG5cbiAgICAgICAgdGhpcy5zeW5jaHJvbml6aW5nRG9jTG9hZGVyLmxvYWQoZG9jSW5mby5maW5nZXJwcmludCwgYmFja2VuZEZpbGVSZWYhKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gbG9hZCBkb2M6IFwiLCBlcnIpKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG4gICAgcmVhZG9ubHkgcmVwb0Fubm90YXRpb24/OiBJRG9jQW5ub3RhdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cbiJdfQ==