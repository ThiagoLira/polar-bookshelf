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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocAnnotations_1 = require("./DocAnnotations");
const DocAnnotationIndex_1 = require("./DocAnnotationIndex");
const DocAnnotationComponent_1 = require("./annotations/DocAnnotationComponent");
const ExportButton_1 = require("../ui/export/ExportButton");
const Exporters_1 = require("../metadata/exporter/Exporters");
const SplitBar_1 = require("../../../apps/repository/js/SplitBar");
const Functions_1 = require("polar-shared/src/util/Functions");
const GroupSharingButton_1 = require("../ui/group_sharing/GroupSharingButton");
const Firebase_1 = require("../firebase/Firebase");
const DocMetaListeners_1 = require("../datastore/sharing/db/DocMetaListeners");
const DocMetas_1 = require("../metadata/DocMetas");
const UserProfiles_1 = require("../datastore/sharing/db/UserProfiles");
const DocAnnotationIndexManager_1 = require("./DocAnnotationIndexManager");
const DocFileResolvers_1 = require("../datastore/DocFileResolvers");
const SplitBarLeft_1 = require("../../../apps/repository/js/SplitBarLeft");
const FeatureToggle_1 = require("../ui/FeatureToggle");
const log = Logger_1.Logger.create();
const NoAnnotations = () => {
    return (React.createElement("div", { className: "p-2" },
        React.createElement("h4", { className: "text-center text-muted text-xxl" }, "No Annotations"),
        React.createElement("p", { className: "text-muted", style: { fontSize: '16px' } },
            "No annotations have yet been created. To create new annotations create a new ",
            React.createElement("span", { style: { backgroundColor: "rgba(255,255,0,0.3)" } }, "highlight"),
            " by selecting text in the document."),
        React.createElement("p", { className: "text-muted", style: { fontSize: '16px' } }, "The highlight will then be shown here and you can then easily attach comments and flashcards to it directly.")));
};
function createItems(render) {
    const result = [];
    const { annotations } = render;
    annotations.map(annotation => {
        result.push(React.createElement(DocAnnotationComponent_1.DocAnnotationComponent, { key: annotation.id, annotation: annotation, persistenceLayerProvider: render.persistenceLayerProvider, doc: render.doc }));
    });
    return result;
}
const AnnotationsBlock = (render) => {
    if (render.annotations.length > 0) {
        return createItems(render);
    }
    else {
        return React.createElement(NoAnnotations, null);
    }
};
const Annotations = (render) => {
    return React.createElement("div", { className: "annotations" },
        React.createElement(AnnotationsBlock, Object.assign({}, render)));
};
class AnnotationSidebar extends React.Component {
    constructor(props, context) {
        super(props, context);
        const { persistenceLayerProvider } = this.props;
        this.docAnnotationIndex = new DocAnnotationIndex_1.DocAnnotationIndex();
        this.docAnnotationIndexManager
            = new DocAnnotationIndexManager_1.DocAnnotationIndexManager(DocFileResolvers_1.DocFileResolvers.createForPersistenceLayer(persistenceLayerProvider), this.docAnnotationIndex, annotations => {
                this.setState({ annotations });
            });
        this.onExport = this.onExport.bind(this);
        this.state = {
            annotations: []
        };
    }
    componentDidMount() {
        this.init()
            .catch(err => log.error("Failed init: ", err));
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.buildInitialAnnotations();
            yield this.registerListenerForPrimaryDocMeta();
            yield this.registerListenersForSecondaryDocMetas();
        });
    }
    buildInitialAnnotations() {
        return __awaiter(this, void 0, void 0, function* () {
            const docFileResolver = DocFileResolvers_1.DocFileResolvers.createForPersistenceLayer(this.props.persistenceLayerProvider);
            const docAnnotations = yield DocAnnotations_1.DocAnnotations.getAnnotationsForPage(docFileResolver, this.docAnnotationIndex, this.props.doc.docMeta);
            this.docAnnotationIndex.put(...docAnnotations);
            this.reload();
        });
    }
    registerListenerForPrimaryDocMeta() {
        return __awaiter(this, void 0, void 0, function* () {
            const { docMeta } = this.props.doc;
            const userProfile = yield UserProfiles_1.UserProfiles.currentUserProfile();
            if (userProfile) {
                DocMetas_1.DocMetas.withSkippedMutations(docMeta, () => {
                    DocMetaListeners_1.DocMetaRecords.applyAuthorsFromUserProfile(docMeta, userProfile);
                });
            }
            this.docAnnotationIndexManager.registerListenerForDocMeta(docMeta, { noSync: false });
        });
    }
    registerListenersForSecondaryDocMetas() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Firebase_1.Firebase.currentUser();
            if (!user) {
                return;
            }
            const fingerprint = this.props.doc.docMeta.docInfo.fingerprint;
            const docMetaHandler = (docMeta) => {
                this.docAnnotationIndexManager.registerListenerForDocMeta(docMeta, { noSync: false });
            };
            const errHandler = (err) => {
                log.error("Failed to handle docMeta group group: ", err);
            };
            yield DocMetaListeners_1.DocMetaListeners.register(fingerprint, docMetaHandler, errHandler);
        });
    }
    reload() {
        const annotations = this.docAnnotationIndex.getDocAnnotationsSorted();
        this.setState({
            annotations
        });
    }
    onExport(path, format) {
        Exporters_1.Exporters.doExport(path, this.props.persistenceLayerProvider(), format, this.props.doc.docMeta)
            .catch(err => log.error(err));
    }
    render() {
        const persistenceLayer = this.props.persistenceLayerProvider();
        const capabilities = persistenceLayer.capabilities();
        const AnnotationHeader = () => {
            return (React.createElement("div", { className: "p-1 pb-2 mb-3 border-bottom pl-1 pr-1 text-md" },
                React.createElement(SplitBar_1.SplitBar, null,
                    React.createElement(SplitBarLeft_1.SplitBarLeft, null,
                        React.createElement("div", { style: {
                                fontWeight: 'bold',
                                fontSize: '14px'
                            } }, "Annotations")),
                    React.createElement(SplitBar_1.SplitBarRight, null,
                        React.createElement(ExportButton_1.ExportButton, { onExport: (path, format) => this.onExport(path, format) }),
                        React.createElement(FeatureToggle_1.FeatureToggle, { name: 'groups' },
                            React.createElement(GroupSharingButton_1.GroupSharingButton, { doc: this.props.doc, datastoreCapabilities: capabilities, onDone: Functions_1.NULL_FUNCTION }))))));
        };
        return (React.createElement("div", { id: "annotation-manager", className: "annotation-sidebar" },
            React.createElement(AnnotationHeader, null),
            React.createElement(Annotations, Object.assign({}, this.state, this.props))));
    }
}
exports.AnnotationSidebar = AnnotationSidebar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblNpZGViYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uU2lkZWJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJEQUFzRDtBQUN0RCxxREFBZ0Q7QUFFaEQsNkRBQXdEO0FBQ3hELGlGQUE0RTtBQUM1RSw0REFBdUQ7QUFDdkQsOERBQXVFO0FBQ3ZFLG1FQUE2RTtBQUU3RSwrREFBOEQ7QUFFOUQsK0VBQTBFO0FBRTFFLG1EQUE4QztBQUM5QywrRUFBMEY7QUFDMUYsbURBQThDO0FBQzlDLHVFQUFrRTtBQUNsRSwyRUFBc0U7QUFDdEUsb0VBQStEO0FBQy9ELDJFQUFzRTtBQUV0RSx1REFBa0Q7QUFFbEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sYUFBYSxHQUFHLEdBQUcsRUFBRTtJQUN2QixPQUFPLENBQ0gsNkJBQUssU0FBUyxFQUFDLEtBQUs7UUFFaEIsNEJBQUksU0FBUyxFQUFDLGlDQUFpQyxxQkFFMUM7UUFFTCwyQkFBRyxTQUFTLEVBQUMsWUFBWSxFQUN0QixLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDOztZQUlwQiw4QkFBTSxLQUFLLEVBQUUsRUFBQyxlQUFlLEVBQUUscUJBQXFCLEVBQUMsZ0JBQWtCO2tEQUUzRTtRQUVKLDJCQUFHLFNBQVMsRUFBQyxZQUFZLEVBQ3RCLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsbUhBS3hCLENBRUYsQ0FDVCxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUYsU0FBUyxXQUFXLENBQUMsTUFBZTtJQU9oQyxNQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7SUFFdkIsTUFBTSxFQUFDLFdBQVcsRUFBQyxHQUFHLE1BQU0sQ0FBQztJQUU3QixXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ3pCLE1B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T0FBTyxDQUVILDZCQUFLLEVBQUUsRUFBQyxvQkFBb0IsRUFBQyxTQUFTLEVBQUMsb0JBQW9CO1lBRXZELG9CQUFDLGdCQUFnQixPQUFFO1lBRW5CLG9CQUFDLFdBQVcsb0JBQUssSUFBSSxDQUFDLEtBQUssRUFBTSxJQUFJLENBQUMsS0FBSyxFQUFHLENBRTVDLENBRVQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQS9LRCw4Q0ErS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RG9jQW5ub3RhdGlvbnN9IGZyb20gJy4vRG9jQW5ub3RhdGlvbnMnO1xuaW1wb3J0IHtEb2NBbm5vdGF0aW9ufSBmcm9tICcuL0RvY0Fubm90YXRpb24nO1xuaW1wb3J0IHtEb2NBbm5vdGF0aW9uSW5kZXh9IGZyb20gJy4vRG9jQW5ub3RhdGlvbkluZGV4JztcbmltcG9ydCB7RG9jQW5ub3RhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9Eb2NBbm5vdGF0aW9uQ29tcG9uZW50JztcbmltcG9ydCB7RXhwb3J0QnV0dG9ufSBmcm9tICcuLi91aS9leHBvcnQvRXhwb3J0QnV0dG9uJztcbmltcG9ydCB7RXhwb3J0ZXJzLCBFeHBvcnRGb3JtYXR9IGZyb20gJy4uL21ldGFkYXRhL2V4cG9ydGVyL0V4cG9ydGVycyc7XG5pbXBvcnQge1NwbGl0QmFyLCBTcGxpdEJhclJpZ2h0fSBmcm9tICcuLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvU3BsaXRCYXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXJ9IGZyb20gJy4uL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge0RvY30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jJztcbmltcG9ydCB7R3JvdXBTaGFyaW5nQnV0dG9ufSBmcm9tICcuLi91aS9ncm91cF9zaGFyaW5nL0dyb3VwU2hhcmluZ0J1dHRvbic7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gXCIuLi9tZXRhZGF0YS9Eb2NNZXRhXCI7XG5pbXBvcnQge0ZpcmViYXNlfSBmcm9tIFwiLi4vZmlyZWJhc2UvRmlyZWJhc2VcIjtcbmltcG9ydCB7RG9jTWV0YUxpc3RlbmVycywgRG9jTWV0YVJlY29yZHN9IGZyb20gXCIuLi9kYXRhc3RvcmUvc2hhcmluZy9kYi9Eb2NNZXRhTGlzdGVuZXJzXCI7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tIFwiLi4vbWV0YWRhdGEvRG9jTWV0YXNcIjtcbmltcG9ydCB7VXNlclByb2ZpbGVzfSBmcm9tIFwiLi4vZGF0YXN0b3JlL3NoYXJpbmcvZGIvVXNlclByb2ZpbGVzXCI7XG5pbXBvcnQge0RvY0Fubm90YXRpb25JbmRleE1hbmFnZXJ9IGZyb20gXCIuL0RvY0Fubm90YXRpb25JbmRleE1hbmFnZXJcIjtcbmltcG9ydCB7RG9jRmlsZVJlc29sdmVyc30gZnJvbSBcIi4uL2RhdGFzdG9yZS9Eb2NGaWxlUmVzb2x2ZXJzXCI7XG5pbXBvcnQge1NwbGl0QmFyTGVmdH0gZnJvbSAnLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL1NwbGl0QmFyTGVmdCc7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuaW1wb3J0IHtGZWF0dXJlVG9nZ2xlfSBmcm9tIFwiLi4vdWkvRmVhdHVyZVRvZ2dsZVwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IE5vQW5ub3RhdGlvbnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cblxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbXV0ZWQgdGV4dC14eGxcIj5cbiAgICAgICAgICAgICAgICBObyBBbm5vdGF0aW9uc1xuICAgICAgICAgICAgPC9oND5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiXG4gICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiAnMTZweCd9fT5cblxuICAgICAgICAgICAgICAgIE5vIGFubm90YXRpb25zIGhhdmUgeWV0IGJlZW4gY3JlYXRlZC4gVG8gY3JlYXRlIG5ld1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25zIGNyZWF0ZSBhXG4gICAgICAgICAgICAgICAgbmV3IDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDI1NSwwLDAuMylcIn19PmhpZ2hsaWdodDwvc3Bhbj4gYnlcbiAgICAgICAgICAgICAgICBzZWxlY3RpbmcgdGV4dCBpbiB0aGUgZG9jdW1lbnQuXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIlxuICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogJzE2cHgnfX0+XG5cbiAgICAgICAgICAgICAgICBUaGUgaGlnaGxpZ2h0IHdpbGwgdGhlbiBiZSBzaG93biBoZXJlIGFuZCB5b3UgY2FuXG4gICAgICAgICAgICAgICAgdGhlbiBlYXNpbHkgYXR0YWNoIGNvbW1lbnRzIGFuZCBmbGFzaGNhcmRzIHRvIGl0XG4gICAgICAgICAgICAgICAgZGlyZWN0bHkuXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1zKHJlbmRlcjogSVJlbmRlcikge1xuXG4gICAgLy8gaHR0cHM6Ly9ibG9nLmNsb3VkYm9vc3QuaW8vZm9yLWxvb3BzLWluLXJlYWN0LXJlbmRlci1uby15b3UtZGlkbnQtNmM5ZjRhYTczNzc4XG5cbiAgICAvLyBUT0RPOiBJJ20gbm90IHN1cmUgd2hhdCB0eXBlIG9mIGNsYXNzIGEgPGRpdj4gb3IgUmVhY3QgZWxlbWVudCB1c2VzXG4gICAgLy8gc28gdXNpbmcgJ2FueScgZm9yIG5vdy5cblxuICAgIGNvbnN0IHJlc3VsdDogYW55ID0gW107XG5cbiAgICBjb25zdCB7YW5ub3RhdGlvbnN9ID0gcmVuZGVyO1xuXG4gICAgYW5ub3RhdGlvbnMubWFwKGFubm90YXRpb24gPT4ge1xuICAgICAgICByZXN1bHQucHVzaCAoPERvY0Fubm90YXRpb25Db21wb25lbnQga2V5PXthbm5vdGF0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbj17YW5ub3RhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcj17cmVuZGVyLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYz17cmVuZGVyLmRvY30vPik7XG4gICAgfSk7XG5cblxuICAgIHJldHVybiByZXN1bHQ7XG5cbn1cblxuY29uc3QgQW5ub3RhdGlvbnNCbG9jayA9IChyZW5kZXI6IElSZW5kZXIpID0+IHtcblxuICAgIGlmIChyZW5kZXIuYW5ub3RhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlSXRlbXMocmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPE5vQW5ub3RhdGlvbnMvPjtcbiAgICB9XG5cbn07XG5cbmNvbnN0IEFubm90YXRpb25zID0gKHJlbmRlcjogSVJlbmRlcikgPT4ge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYW5ub3RhdGlvbnNcIj5cbiAgICAgICAgPEFubm90YXRpb25zQmxvY2sgey4uLnJlbmRlcn0vPlxuICAgIDwvZGl2PjtcblxufTtcblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25TaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIGRvY0Fubm90YXRpb25JbmRleDogRG9jQW5ub3RhdGlvbkluZGV4O1xuICAgIHByaXZhdGUgZG9jQW5ub3RhdGlvbkluZGV4TWFuYWdlcjogRG9jQW5ub3RhdGlvbkluZGV4TWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3Qge3BlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHRoaXMuZG9jQW5ub3RhdGlvbkluZGV4ID0gbmV3IERvY0Fubm90YXRpb25JbmRleCgpO1xuXG4gICAgICAgIHRoaXMuZG9jQW5ub3RhdGlvbkluZGV4TWFuYWdlclxuICAgICAgICAgICAgPSBuZXcgRG9jQW5ub3RhdGlvbkluZGV4TWFuYWdlcihEb2NGaWxlUmVzb2x2ZXJzLmNyZWF0ZUZvclBlcnNpc3RlbmNlTGF5ZXIocGVyc2lzdGVuY2VMYXllclByb3ZpZGVyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb2NBbm5vdGF0aW9uSW5kZXgsIGFubm90YXRpb25zID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Fubm90YXRpb25zfSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub25FeHBvcnQgPSB0aGlzLm9uRXhwb3J0LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFubm90YXRpb25zOiBbXVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkZhaWxlZCBpbml0OiBcIiwgZXJyKSk7XG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaW5pdCgpIHtcblxuICAgICAgICBhd2FpdCB0aGlzLmJ1aWxkSW5pdGlhbEFubm90YXRpb25zKCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5yZWdpc3Rlckxpc3RlbmVyRm9yUHJpbWFyeURvY01ldGEoKTtcblxuICAgICAgICBhd2FpdCB0aGlzLnJlZ2lzdGVyTGlzdGVuZXJzRm9yU2Vjb25kYXJ5RG9jTWV0YXMoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgYnVpbGRJbml0aWFsQW5ub3RhdGlvbnMoKSB7XG5cbiAgICAgICAgY29uc3QgZG9jRmlsZVJlc29sdmVyID0gRG9jRmlsZVJlc29sdmVycy5jcmVhdGVGb3JQZXJzaXN0ZW5jZUxheWVyKHRoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllclByb3ZpZGVyKTtcbiAgICAgICAgY29uc3QgZG9jQW5ub3RhdGlvbnMgPSBhd2FpdCBEb2NBbm5vdGF0aW9ucy5nZXRBbm5vdGF0aW9uc0ZvclBhZ2UoZG9jRmlsZVJlc29sdmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvY0Fubm90YXRpb25JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kb2MuZG9jTWV0YSk7XG5cbiAgICAgICAgdGhpcy5kb2NBbm5vdGF0aW9uSW5kZXgucHV0KC4uLmRvY0Fubm90YXRpb25zKTtcblxuICAgICAgICB0aGlzLnJlbG9hZCgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyByZWdpc3Rlckxpc3RlbmVyRm9yUHJpbWFyeURvY01ldGEoKSB7XG5cbiAgICAgICAgY29uc3Qge2RvY01ldGF9ID0gdGhpcy5wcm9wcy5kb2M7XG5cbiAgICAgICAgY29uc3QgdXNlclByb2ZpbGUgPSBhd2FpdCBVc2VyUHJvZmlsZXMuY3VycmVudFVzZXJQcm9maWxlKCk7XG5cbiAgICAgICAgaWYgKHVzZXJQcm9maWxlKSB7XG5cbiAgICAgICAgICAgIERvY01ldGFzLndpdGhTa2lwcGVkTXV0YXRpb25zKGRvY01ldGEsICgpID0+IHtcbiAgICAgICAgICAgICAgICBEb2NNZXRhUmVjb3Jkcy5hcHBseUF1dGhvcnNGcm9tVXNlclByb2ZpbGUoZG9jTWV0YSwgdXNlclByb2ZpbGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG9jQW5ub3RhdGlvbkluZGV4TWFuYWdlci5yZWdpc3Rlckxpc3RlbmVyRm9yRG9jTWV0YShkb2NNZXRhLCB7bm9TeW5jOiBmYWxzZX0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgbGlzdGVuZXJzIGZvciBncm91cCBkb2NzIHdoZW4gdXNpbmcgRmlyZWJhc2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyByZWdpc3Rlckxpc3RlbmVyc0ZvclNlY29uZGFyeURvY01ldGFzKCkge1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBGaXJlYmFzZS5jdXJyZW50VXNlcigpO1xuXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnQgPSB0aGlzLnByb3BzLmRvYy5kb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnQ7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YUhhbmRsZXIgPSAoZG9jTWV0YTogSURvY01ldGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9jQW5ub3RhdGlvbkluZGV4TWFuYWdlci5yZWdpc3Rlckxpc3RlbmVyRm9yRG9jTWV0YShkb2NNZXRhLCB7bm9TeW5jOiBmYWxzZX0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGVyckhhbmRsZXIgPSAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgbG9nLmVycm9yKFwiRmFpbGVkIHRvIGhhbmRsZSBkb2NNZXRhIGdyb3VwIGdyb3VwOiBcIiwgZXJyKTtcbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCBEb2NNZXRhTGlzdGVuZXJzLnJlZ2lzdGVyKGZpbmdlcnByaW50LCBkb2NNZXRhSGFuZGxlciwgZXJySGFuZGxlcik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbG9hZCgpIHtcblxuICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IHRoaXMuZG9jQW5ub3RhdGlvbkluZGV4LmdldERvY0Fubm90YXRpb25zU29ydGVkKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbm5vdGF0aW9uc1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25FeHBvcnQocGF0aDogc3RyaW5nLCBmb3JtYXQ6IEV4cG9ydEZvcm1hdCkge1xuXG4gICAgICAgIEV4cG9ydGVycy5kb0V4cG9ydChwYXRoLCB0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcigpLCBmb3JtYXQsIHRoaXMucHJvcHMuZG9jLmRvY01ldGEpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihlcnIpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IHRoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllclByb3ZpZGVyKCk7XG4gICAgICAgIGNvbnN0IGNhcGFiaWxpdGllcyA9IHBlcnNpc3RlbmNlTGF5ZXIuY2FwYWJpbGl0aWVzKCk7XG5cbiAgICAgICAgY29uc3QgQW5ub3RhdGlvbkhlYWRlciA9ICgpID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xIHBiLTIgbWItMyBib3JkZXItYm90dG9tIHBsLTEgcHItMSB0ZXh0LW1kXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNwbGl0QmFyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BsaXRCYXJMZWZ0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbm5vdGF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGxpdEJhckxlZnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGxpdEJhclJpZ2h0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4cG9ydEJ1dHRvbiBvbkV4cG9ydD17KHBhdGgsIGZvcm1hdCkgPT4gdGhpcy5vbkV4cG9ydChwYXRoLCBmb3JtYXQpfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZVRvZ2dsZSBuYW1lPSdncm91cHMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXBTaGFyaW5nQnV0dG9uIGRvYz17dGhpcy5wcm9wcy5kb2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXN0b3JlQ2FwYWJpbGl0aWVzPXtjYXBhYmlsaXRpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb25lPXtOVUxMX0ZVTkNUSU9OfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GZWF0dXJlVG9nZ2xlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwbGl0QmFyUmlnaHQ+XG5cblxuICAgICAgICAgICAgICAgICAgICA8L1NwbGl0QmFyPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYW5ub3RhdGlvbi1tYW5hZ2VyXCIgY2xhc3NOYW1lPVwiYW5ub3RhdGlvbi1zaWRlYmFyXCI+XG5cbiAgICAgICAgICAgICAgICA8QW5ub3RhdGlvbkhlYWRlci8+XG5cbiAgICAgICAgICAgICAgICA8QW5ub3RhdGlvbnMgey4uLnRoaXMuc3RhdGV9IHsuLi50aGlzLnByb3BzfS8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGRvYzogRG9jO1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogUGVyc2lzdGVuY2VMYXllclByb3ZpZGVyO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBhbm5vdGF0aW9uczogUmVhZG9ubHlBcnJheTxEb2NBbm5vdGF0aW9uPjtcbn1cblxuaW50ZXJmYWNlIElSZW5kZXIgZXh0ZW5kcyBJUHJvcHMsIElTdGF0ZSB7XG5cbn1cbiJdfQ==