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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_table_1 = __importDefault(require("react-table"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const Tags_1 = require("polar-shared/src/tags/Tags");
const DateTimeTableCell_1 = require("../DateTimeTableCell");
const RendererAnalytics_1 = require("../../../../web/js/ga/RendererAnalytics");
const ReleasingReactComponent_1 = __importDefault(require("../framework/ReleasingReactComponent"));
const Functions_1 = require("polar-shared/src/util/Functions");
const Input_1 = __importDefault(require("reactstrap/lib/Input"));
const Toaster_1 = require("../../../../web/js/ui/toaster/Toaster");
const Either_1 = require("../../../../web/js/util/Either");
const BackendFileRefs_1 = require("../../../../web/js/datastore/BackendFileRefs");
const Platforms_1 = require("polar-shared/src/util/Platforms");
const Numbers_1 = require("polar-shared/src/util/Numbers");
const react_context_menu_wrapper_1 = require("@burtonator/react-context-menu-wrapper");
const DocDropdownItems_1 = require("../DocDropdownItems");
const TitleCell_1 = require("./cells/TitleCell");
const CheckCell_1 = require("./cells/CheckCell");
const DocButtonsCell_1 = require("./cells/DocButtonsCell");
const log = Logger_1.Logger.create();
const CONTEXT_MENU_ID = 'doc-table-context-menu';
class DocRepoTable extends ReleasingReactComponent_1.default {
    constructor(props, context) {
        super(props, context);
        this.contextMenuProps = {
            getSelected: this.props.getSelected,
            onDelete: this.props.onDocDeleteRequested,
            onSetTitle: this.props.onDocSetTitle,
            onDocumentLoadRequested: (repoDocInfo) => {
                this.onDocumentLoadRequested(repoDocInfo);
            },
            onRemoveFromFolder: this.props.onRemoveFromFolder
        };
        this.createColumnCheckbox = this.createColumnCheckbox.bind(this);
        this.createColumnTitle = this.createColumnTitle.bind(this);
        this.createColumnUpdated = this.createColumnUpdated.bind(this);
        this.createColumnAdded = this.createColumnAdded.bind(this);
        this.createColumnSite = this.createColumnSite.bind(this);
        this.createColumnTags = this.createColumnTags.bind(this);
        this.createColumnProgress = this.createColumnProgress.bind(this);
        this.createColumnAnnotations = this.createColumnAnnotations.bind(this);
        this.createColumnButtons = this.createColumnButtons.bind(this);
        this.createColumns = this.createColumns.bind(this);
        this.createColumnsForTablet = this.createColumnsForTablet.bind(this);
        this.createColumnsForDesktop = this.createColumnsForDesktop.bind(this);
        this.createTDProps = this.createTDProps.bind(this);
        this.createTDPropsForMobile = this.createTDPropsForMobile.bind(this);
        this.createTDPropsForDesktop = this.createTDPropsForDesktop.bind(this);
        this.createContextMenuHandlers = this.createContextMenuHandlers.bind(this);
        this.doHandleToggleField = this.doHandleToggleField.bind(this);
    }
    createColumnCheckbox() {
        return {
            id: 'doc-checkbox',
            Header: (col) => {
                const checked = this.props.selected.length === col.data.length && col.data.length > 0;
                return (React.createElement("div", null,
                    React.createElement(Input_1.default, { checked: checked, style: {
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            margin: 'auto',
                            position: 'relative',
                            top: '2px',
                            width: '16px',
                            height: '16px',
                        }, className: "m-auto", onChange: Functions_1.NULL_FUNCTION, onClick: () => {
                            const computeSelected = () => {
                                if (this.props.selected.length !== col.data.length) {
                                    return Numbers_1.Numbers.range(0, col.data.length - 1);
                                }
                                else {
                                    return [];
                                }
                            };
                            const selected = computeSelected();
                            this.props.onSelected(selected);
                        }, type: "checkbox" })));
            },
            accessor: '',
            maxWidth: 25,
            defaultSortDesc: true,
            resizable: false,
            sortable: false,
            className: 'doc-checkbox',
            Cell: (row) => {
                const viewIndex = row.viewIndex;
                return React.createElement(CheckCell_1.CheckCell, { viewIndex: viewIndex, selected: this.props.selected, selectRow: this.props.selectRow });
            }
        };
    }
    createColumnTitle() {
        return {
            Header: 'Title',
            accessor: 'title',
            className: 'doc-table-col-title',
            Cell: (row) => {
                const id = 'doc-repo-row-title' + row.index;
                return (React.createElement(TitleCell_1.TitleCell, { id: id, title: row.value }));
            }
        };
    }
    createColumnUpdated() {
        return {
            Header: 'Updated',
            headerClassName: "d-none-mobile",
            accessor: 'lastUpdated',
            show: this.props.columns.lastUpdated.selected,
            maxWidth: 85,
            defaultSortDesc: true,
            className: 'doc-table-col-updated d-none-mobile',
            Cell: (row) => {
                return (React.createElement(DateTimeTableCell_1.DateTimeTableCell, { className: "doc-col-last-updated", datetime: row.value }));
            }
        };
    }
    createColumnAdded() {
        return {
            Header: 'Added',
            accessor: 'added',
            headerClassName: "d-none-mobile",
            show: this.props.columns.added.selected,
            maxWidth: 85,
            defaultSortDesc: true,
            className: 'doc-table-col-added d-none-mobile',
            Cell: (row) => {
                return (React.createElement(DateTimeTableCell_1.DateTimeTableCell, { className: "doc-col-added", datetime: row.value }));
            }
        };
    }
    createColumnSite() {
        return {
            Header: 'Site',
            accessor: 'site',
            headerClassName: "d-none-mobile",
            show: (this.props.columns.site || {}).selected || false,
            maxWidth: 200,
            sortable: false,
            className: "d-none-mobile",
            sortMethod: (a, b) => {
                const toSTR = (doc) => {
                    if (!doc) {
                        return "";
                    }
                    if (doc.site) {
                        return doc.site;
                    }
                    return "";
                };
                const aSTR = toSTR(a);
                const bSTR = toSTR(b);
                return aSTR.localeCompare(bSTR);
            },
        };
    }
    createColumnTags() {
        return {
            id: 'tags',
            Header: 'Tags',
            headerClassName: "d-none-mobile",
            width: 250,
            accessor: '',
            show: this.props.columns.tags.selected,
            className: 'doc-table-col-tags d-none-mobile',
            sortMethod: (a, b) => {
                const toSTR = (obj) => {
                    if (!obj) {
                        return "";
                    }
                    if (typeof obj === 'string') {
                        return obj;
                    }
                    return JSON.stringify(obj);
                };
                const cmp = toSTR(a.tags).localeCompare(toSTR(b.tags));
                if (cmp !== 0) {
                    return cmp;
                }
                return toSTR(a.added).localeCompare(toSTR(b.added));
            },
            Cell: (row) => {
                const tags = row.original.tags;
                const formatted = Tags_1.Tags.onlyRegular(Object.values(tags))
                    .map(tag => tag.label)
                    .sort()
                    .join(", ");
                return (React.createElement("div", null, formatted));
            }
        };
    }
    createColumnProgress() {
        return {
            id: 'progress',
            Header: 'Progress',
            headerClassName: "d-none-mobile",
            accessor: 'progress',
            show: this.props.columns.progress.selected,
            maxWidth: 100,
            defaultSortDesc: true,
            resizable: false,
            className: 'doc-table-col-progress d-none-mobile',
            Cell: (row) => {
                return (React.createElement("progress", { className: "mt-auto mb-auto", max: "100", value: row.value, style: {
                        width: '100%'
                    } }));
            }
        };
    }
    createColumnAnnotations() {
        return {
            id: 'nrAnnotations',
            Header: 'Annotations',
            headerClassName: "d-none-mobile",
            accessor: 'nrAnnotations',
            maxWidth: 110,
            show: this.props.columns.nrAnnotations.selected,
            defaultSortDesc: true,
            resizable: false,
            className: "d-none-mobile",
        };
    }
    createColumnButtons() {
        return {
            id: 'doc-buttons',
            Header: '',
            headerClassName: "d-none-mobile",
            accessor: '',
            maxWidth: 100,
            defaultSortDesc: true,
            resizable: false,
            sortable: false,
            className: 'doc-dropdown d-none-mobile',
            Cell: (row) => {
                const repoDocInfo = row.original;
                const viewIndex = row.viewIndex;
                return React.createElement(DocButtonsCell_1.DocButtonsCell, Object.assign({ viewIndex: viewIndex, flagged: repoDocInfo.flagged, archived: repoDocInfo.archived, doHandleToggleField: this.doHandleToggleField, onDocumentLoadRequested: this.onDocumentLoadRequested }, this.props));
            }
        };
    }
    createColumns(contextMenuHandlers) {
        if (Platforms_1.Platforms.isMobile()) {
            return this.createColumnsForTablet();
        }
        else {
            return this.createColumnsForDesktop();
        }
    }
    createColumnsForTablet() {
        return [
            this.createColumnCheckbox(),
            this.createColumnTitle(),
            this.createColumnProgress(),
        ];
    }
    createColumnsForDesktop() {
        return [
            this.createColumnCheckbox(),
            this.createColumnTitle(),
            this.createColumnUpdated(),
            this.createColumnAdded(),
            this.createColumnSite(),
            this.createColumnTags(),
            this.createColumnAnnotations(),
            this.createColumnProgress(),
            this.createColumnButtons()
        ];
    }
    createTDProps(rowInfo, column, contextMenuHandlers) {
        if (Platforms_1.Platforms.isMobile()) {
            return this.createTDPropsForMobile(rowInfo, column);
        }
        else {
            return this.createTDPropsForDesktop(rowInfo, column, contextMenuHandlers);
        }
    }
    createTDPropsForMobile(rowInfo, column) {
        const DEFAULT_BEHAVIOR_COLUMNS = [
            'doc-checkbox'
        ];
        if (column && column.id && DEFAULT_BEHAVIOR_COLUMNS.includes(column.id)) {
            return {
                onClick: ((e, handleOriginal) => {
                    if (handleOriginal) {
                        handleOriginal();
                    }
                })
            };
        }
        else {
            return {
                onClick: (event) => {
                    if (rowInfo) {
                        const repoDocInfo = rowInfo.original;
                        this.onDocumentLoadRequested(repoDocInfo);
                    }
                },
            };
        }
    }
    createTDPropsForDesktop(rowInfo, column, contextMenuHandlers) {
        const DEFAULT_BEHAVIOR_COLUMNS = [
            'tag-input',
            'flagged',
            'archived',
            'doc-dropdown',
            'doc-buttons',
            'doc-checkbox'
        ];
        if (column && column.id && DEFAULT_BEHAVIOR_COLUMNS.includes(column.id)) {
            return {
                onClick: ((e, handleOriginal) => {
                    if (handleOriginal) {
                        handleOriginal();
                    }
                })
            };
        }
        else {
            const handleSelect = (event, type) => {
                if (rowInfo) {
                    this.props.selectRow(rowInfo.viewIndex, event, type);
                }
            };
            return {
                onDoubleClick: () => {
                    const selected = this.props.getSelected();
                    if (selected.length === 1) {
                        this.onDocumentLoadRequested(selected[0]);
                    }
                },
                onContextMenu: (event) => {
                    handleSelect(event, 'context');
                    contextMenuHandlers.onContextMenu(event);
                },
                onClick: (event, handleOriginal) => {
                    handleSelect(event, 'click');
                },
                onTouchEnd: (event) => {
                    contextMenuHandlers.onTouchEnd(event);
                },
                onTouchStart: (event) => {
                    contextMenuHandlers.onTouchStart(event);
                }
            };
        }
    }
    createContextMenuHandlers() {
        const contextMenuHandlers = react_context_menu_wrapper_1.prepareContextMenuHandlers({ id: CONTEXT_MENU_ID });
        return contextMenuHandlers;
    }
    render() {
        const { data } = this.props;
        const contextMenuHandlers = this.createContextMenuHandlers();
        return (React.createElement("div", { id: "doc-table", className: "ml-1", style: { height: '100%', overflow: 'auto' } },
            React.createElement(react_context_menu_wrapper_1.ContextMenuWrapper, { id: CONTEXT_MENU_ID },
                React.createElement("div", { className: "border shadow rounded pt-2 pb-2", style: { backgroundColor: 'var(--white)' } },
                    React.createElement(DocDropdownItems_1.DocDropdownItems, Object.assign({ toggle: false, filters: this.props.filters }, this.contextMenuProps)))),
            React.createElement(react_table_1.default, { data: [...data], ref: (reactTable) => this.props.onReactTable(reactTable), columns: this.createColumns(contextMenuHandlers), defaultPageSize: 50, noDataText: "No documents available.", className: "-striped -highlight", style: { height: '100%' }, showPageSizeOptions: false, defaultSorted: [
                    {
                        id: "progress",
                        desc: true
                    }
                ], getTheadProps: () => {
                    return {
                        style: {
                            paddingRight: '1em'
                        }
                    };
                }, getTrProps: (state, rowInfo) => {
                    return {
                        draggable: true,
                        onDragStart: (event) => (this.props.onDragStart || Functions_1.NULL_FUNCTION)(event),
                        onDragEnd: (event) => (this.props.onDragEnd || Functions_1.NULL_FUNCTION)(event),
                        'data-doc-fingerprint': ((rowInfo || {}).original || {}).fingerprint || '',
                        tabIndex: rowInfo ? rowInfo.viewIndex + 1 : undefined,
                        style: {
                            background: rowInfo && this.props.selected.includes(rowInfo.viewIndex) ? 'var(--selected-background-color)' : 'var(--primary-background-color)',
                            color: rowInfo && this.props.selected.includes(rowInfo.viewIndex) ? 'var(--selected-text-color)' : 'var(--primary-text-color)',
                        },
                        onKeyDown: (event) => {
                            this.onKeyDown(event);
                        },
                    };
                }, getTdProps: (state, rowInfo, column) => {
                    if (!rowInfo || !column) {
                        return {};
                    }
                    return this.createTDProps(rowInfo, column, contextMenuHandlers);
                } })));
    }
    onKeyDown(event) {
        if (event.key === "Delete") {
            this.props.onMultiDeleted();
        }
    }
    onDocumentLoadRequested(repoDocInfo) {
        const fingerprint = repoDocInfo.fingerprint;
        const docInfo = repoDocInfo.docInfo;
        const backendFileRef = BackendFileRefs_1.BackendFileRefs.toBackendFileRef(Either_1.Either.ofRight(docInfo));
        this.props.synchronizingDocLoader.load(fingerprint, backendFileRef)
            .catch(err => log.error("Unable to load doc: ", err));
    }
    doHandleToggleField(repoDocInfo, field) {
        this.handleToggleField(repoDocInfo, field)
            .catch(err => {
            log.error(`Could not handle toggle on field: ${field}: `, err);
        });
    }
    handleToggleField(repoDocInfo, field) {
        return __awaiter(this, void 0, void 0, function* () {
            let mutated = false;
            if (field === 'archived') {
                RendererAnalytics_1.RendererAnalytics.event({ category: 'user', action: 'archived-doc' });
                repoDocInfo.archived = !repoDocInfo.archived;
                repoDocInfo.docInfo.archived = repoDocInfo.archived;
                mutated = true;
                if (repoDocInfo.archived) {
                    Toaster_1.Toaster.success(`Document has been archived.`);
                }
            }
            if (field === 'flagged') {
                RendererAnalytics_1.RendererAnalytics.event({ category: 'user', action: 'flagged-doc' });
                repoDocInfo.flagged = !repoDocInfo.flagged;
                repoDocInfo.docInfo.flagged = repoDocInfo.flagged;
                mutated = true;
            }
            if (mutated) {
                yield this.props.writeDocInfo(repoDocInfo.docInfo)
                    .catch(err => log.error("Failed to write DocInfo", err));
                this.props.refresh();
            }
        });
    }
}
exports.DocRepoTable = DocRepoTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jUmVwb1RhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jUmVwb1RhYmxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsOERBQXFGO0FBQ3JGLDJEQUFzRDtBQUl0RCxxREFBcUQ7QUFDckQsNERBQXVEO0FBQ3ZELCtFQUEwRTtBQUkxRSxtR0FBMkU7QUFDM0UsK0RBQThEO0FBSTlELGlFQUF5QztBQUV6QyxtRUFBOEQ7QUFDOUQsMkRBQXNEO0FBQ3RELGtGQUE2RTtBQUk3RSwrREFBMEQ7QUFDMUQsMkRBQXNEO0FBQ3RELHVGQUlnRDtBQUNoRCwwREFBaUY7QUFHakYsaURBQTRDO0FBQzVDLGlEQUE0QztBQUM1QywyREFBc0Q7QUFFdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSTVCLE1BQU0sZUFBZSxHQUFHLHdCQUF3QixDQUFDO0FBRWpELE1BQWEsWUFBYSxTQUFRLGlDQUF1QztJQUlyRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3BCLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7WUFDbkMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CO1lBQ3pDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7WUFDcEMsdUJBQXVCLEVBQUUsQ0FBQyxXQUF3QixFQUFFLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QyxDQUFDO1lBQ0Qsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7U0FDcEQsQ0FBQztRQUVGLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMs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QUFXLENBQUMsT0FBTyxDQUFDO2dCQUVsRCxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ2xCO1lBRUQsSUFBSSxPQUFPLEVBQUU7Z0JBRVQsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO3FCQUM3QyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBRTdELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDeEI7UUFFTCxDQUFDO0tBQUE7Q0FFSjtBQWxyQkQsb0NBa3JCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdFRhYmxlLCB7Q29sdW1uLCBDb2x1bW5SZW5kZXJQcm9wcywgSW5zdGFuY2UsIFJvd0luZm99IGZyb20gXCJyZWFjdC10YWJsZVwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1JlcG9Eb2NJbmZvfSBmcm9tICcuLi9SZXBvRG9jSW5mbyc7XG5pbXBvcnQge1RhZ0lucHV0fSBmcm9tICcuLi9UYWdJbnB1dCc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtUYWcsIFRhZ3N9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGFncy9UYWdzJztcbmltcG9ydCB7RGF0ZVRpbWVUYWJsZUNlbGx9IGZyb20gJy4uL0RhdGVUaW1lVGFibGVDZWxsJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5pbXBvcnQge0RvY0Ryb3Bkb3dufSBmcm9tICcuLi9Eb2NEcm9wZG93bic7XG5pbXBvcnQge0RvY1JlcG9UYWJsZUNvbHVtbnN9IGZyb20gJy4vRG9jUmVwb1RhYmxlQ29sdW1ucyc7XG5pbXBvcnQge1N5bmNocm9uaXppbmdEb2NMb2FkZXJ9IGZyb20gJy4uL3V0aWwvU3luY2hyb25pemluZ0RvY0xvYWRlcic7XG5pbXBvcnQgUmVsZWFzaW5nUmVhY3RDb21wb25lbnQgZnJvbSAnLi4vZnJhbWV3b3JrL1JlbGVhc2luZ1JlYWN0Q29tcG9uZW50JztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge0RvY0J1dHRvbn0gZnJvbSAnLi4vdWkvRG9jQnV0dG9uJztcbmltcG9ydCB7RmxhZ0RvY0J1dHRvbn0gZnJvbSAnLi4vdWkvRmxhZ0RvY0J1dHRvbic7XG5pbXBvcnQge0FyY2hpdmVEb2NCdXR0b259IGZyb20gJy4uL3VpL0FyY2hpdmVEb2NCdXR0b24nO1xuaW1wb3J0IElucHV0IGZyb20gJ3JlYWN0c3RyYXAvbGliL0lucHV0JztcbmltcG9ydCB7RG9jQ29udGV4dE1lbnVQcm9wc30gZnJvbSAnLi4vRG9jQ29udGV4dE1lbnUnO1xuaW1wb3J0IHtUb2FzdGVyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdWkvdG9hc3Rlci9Ub2FzdGVyJztcbmltcG9ydCB7RWl0aGVyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9FaXRoZXInO1xuaW1wb3J0IHtCYWNrZW5kRmlsZVJlZnN9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvQmFja2VuZEZpbGVSZWZzJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm8nO1xuaW1wb3J0IHtSZWxhdGVkVGFnc30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3RhZ3MvcmVsYXRlZC9SZWxhdGVkVGFncyc7XG5pbXBvcnQge0FjY291bnRVcGdyYWRlQmFyfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL3VpL2FjY291bnRfdXBncmFkZS9BY2NvdW50VXBncmFkZUJhclwiO1xuaW1wb3J0IHtQbGF0Zm9ybXN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvUGxhdGZvcm1zXCI7XG5pbXBvcnQge051bWJlcnN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvTnVtYmVyc1wiO1xuaW1wb3J0IHtcbiAgICBDb250ZXh0TWVudUhhbmRsZXJzLFxuICAgIENvbnRleHRNZW51V3JhcHBlcixcbiAgICBwcmVwYXJlQ29udGV4dE1lbnVIYW5kbGVyc1xufSBmcm9tICdAYnVydG9uYXRvci9yZWFjdC1jb250ZXh0LW1lbnUtd3JhcHBlcic7XG5pbXBvcnQge0RvY0Ryb3Bkb3duSXRlbXMsIE9uUmVtb3ZlRnJvbUZvbGRlckNhbGxiYWNrfSBmcm9tIFwiLi4vRG9jRHJvcGRvd25JdGVtc1wiO1xuaW1wb3J0IHtGaWx0ZXJzfSBmcm9tIFwiLi9Eb2NSZXBvRmlsdGVyc1wiO1xuaW1wb3J0IHtTZWxlY3RSb3dUeXBlfSBmcm9tIFwiLi9Eb2NSZXBvU2NyZWVuXCI7XG5pbXBvcnQge1RpdGxlQ2VsbH0gZnJvbSBcIi4vY2VsbHMvVGl0bGVDZWxsXCI7XG5pbXBvcnQge0NoZWNrQ2VsbH0gZnJvbSBcIi4vY2VsbHMvQ2hlY2tDZWxsXCI7XG5pbXBvcnQge0RvY0J1dHRvbnNDZWxsfSBmcm9tIFwiLi9jZWxscy9Eb2NCdXR0b25zQ2VsbFwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8vIFRPRE86IGdvIGJhY2sgdG8gRXh0ZW5kZWRSZWFjdFRhYmxlXG5cbmNvbnN0IENPTlRFWFRfTUVOVV9JRCA9ICdkb2MtdGFibGUtY29udGV4dC1tZW51JztcblxuZXhwb3J0IGNsYXNzIERvY1JlcG9UYWJsZSBleHRlbmRzIFJlbGVhc2luZ1JlYWN0Q29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIGNvbnRleHRNZW51UHJvcHM6IERvY0NvbnRleHRNZW51UHJvcHM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dE1lbnVQcm9wcyA9IHtcbiAgICAgICAgICAgIGdldFNlbGVjdGVkOiB0aGlzLnByb3BzLmdldFNlbGVjdGVkLFxuICAgICAgICAgICAgb25EZWxldGU6IHRoaXMucHJvcHMub25Eb2NEZWxldGVSZXF1ZXN0ZWQsXG4gICAgICAgICAgICBvblNldFRpdGxlOiB0aGlzLnByb3BzLm9uRG9jU2V0VGl0bGUsXG4gICAgICAgICAgICBvbkRvY3VtZW50TG9hZFJlcXVlc3RlZDogKHJlcG9Eb2NJbmZvOiBSZXBvRG9jSW5mbykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25Eb2N1bWVudExvYWRSZXF1ZXN0ZWQocmVwb0RvY0luZm8pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUmVtb3ZlRnJvbUZvbGRlcjogdGhpcy5wcm9wcy5vblJlbW92ZUZyb21Gb2xkZXJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbkNoZWNrYm94ID0gdGhpcy5jcmVhdGVDb2x1bW5DaGVja2JveC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtblRpdGxlID0gdGhpcy5jcmVhdGVDb2x1bW5UaXRsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtblVwZGF0ZWQgPSB0aGlzLmNyZWF0ZUNvbHVtblVwZGF0ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5BZGRlZCA9IHRoaXMuY3JlYXRlQ29sdW1uQWRkZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5TaXRlID0gdGhpcy5jcmVhdGVDb2x1bW5TaXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29sdW1uVGFncyA9IHRoaXMuY3JlYXRlQ29sdW1uVGFncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtblByb2dyZXNzID0gdGhpcy5jcmVhdGVDb2x1bW5Qcm9ncmVzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbkFubm90YXRpb25zID0gdGhpcy5jcmVhdGVDb2x1bW5Bbm5vdGF0aW9ucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbkJ1dHRvbnMgPSB0aGlzLmNyZWF0ZUNvbHVtbkJ1dHRvbnMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbnMgPSB0aGlzLmNyZWF0ZUNvbHVtbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zRm9yVGFibGV0ID0gdGhpcy5jcmVhdGVDb2x1bW5zRm9yVGFibGV0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29sdW1uc0ZvckRlc2t0b3AgPSB0aGlzLmNyZWF0ZUNvbHVtbnNGb3JEZXNrdG9wLmJpbmQodGhpcyk7XG5cblxuICAgICAgICB0aGlzLmNyZWF0ZVREUHJvcHMgPSB0aGlzLmNyZWF0ZVREUHJvcHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVURFByb3BzRm9yTW9iaWxlID0gdGhpcy5jcmVhdGVURFByb3BzRm9yTW9iaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlVERQcm9wc0ZvckRlc2t0b3AgPSB0aGlzLmNyZWF0ZVREUHJvcHNGb3JEZXNrdG9wLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVDb250ZXh0TWVudUhhbmRsZXJzID0gdGhpcy5jcmVhdGVDb250ZXh0TWVudUhhbmRsZXJzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5kb0hhbmRsZVRvZ2dsZUZpZWxkID0gdGhpcy5kb0hhbmRsZVRvZ2dsZUZpZWxkLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUNvbHVtbkNoZWNrYm94KCkge1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIGlkOiAnZG9jLWNoZWNrYm94JyxcbiAgICAgICAgICAgIEhlYWRlcjogKGNvbDogQ29sdW1uUmVuZGVyUHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBtb3ZlIHRvIGEgUHVyZUNvbXBvbmVudCB0b1xuICAgICAgICAgICAgICAgIC8vIGltcHJvdmUgcGVyZm9ybWFuY2VcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkLmxlbmd0aCA9PT0gY29sLmRhdGEubGVuZ3RoICYmIGNvbC5kYXRhLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJzJweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e05VTExfRlVOQ1RJT059XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9vcC4uLiBub3cgZG8gd2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgQUxMIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0ZW1zIGluIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlIG5vd1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZVNlbGVjdGVkID0gKCk6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWQubGVuZ3RoICE9PSBjb2wuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcnMucmFuZ2UoMCwgY29sLmRhdGEubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub25lIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGNvbXB1dGVTZWxlY3RlZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdGVkKHNlbGVjdGVkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiLz5cblxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWNjZXNzb3I6ICcnLFxuICAgICAgICAgICAgbWF4V2lkdGg6IDI1LFxuICAgICAgICAgICAgZGVmYXVsdFNvcnREZXNjOiB0cnVlLFxuICAgICAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RvYy1jaGVja2JveCcsXG4gICAgICAgICAgICBDZWxsOiAocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBtb3ZlIHRvIGEgUHVyZUNvbXBvbmVudCB0b1xuICAgICAgICAgICAgICAgIC8vIGltcHJvdmUgcGVyZm9ybWFuY2VcblxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdJbmRleCA9IHJvdy52aWV3SW5kZXggYXMgbnVtYmVyO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDaGVja0NlbGwgdmlld0luZGV4PXt2aWV3SW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0Um93PXt0aGlzLnByb3BzLnNlbGVjdFJvd30vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ29sdW1uVGl0bGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ1RpdGxlJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAndGl0bGUnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jLXRhYmxlLWNvbC10aXRsZScsXG4gICAgICAgICAgICBDZWxsOiAocm93OiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gJ2RvYy1yZXBvLXJvdy10aXRsZScgKyByb3cuaW5kZXg7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVDZWxsIGlkPXtpZH0gdGl0bGU9e3Jvdy52YWx1ZX0vPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ29sdW1uVXBkYXRlZCgpIHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgSGVhZGVyOiAnVXBkYXRlZCcsXG4gICAgICAgICAgICAvLyBhY2Nlc3NvcjogKHJvdzogYW55KSA9PiByb3cuYWRkZWQsXG4gICAgICAgICAgICBoZWFkZXJDbGFzc05hbWU6IFwiZC1ub25lLW1vYmlsZVwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6ICdsYXN0VXBkYXRlZCcsXG4gICAgICAgICAgICBzaG93OiB0aGlzLnByb3BzLmNvbHVtbnMubGFzdFVwZGF0ZWQuc2VsZWN0ZWQsXG4gICAgICAgICAgICBtYXhXaWR0aDogODUsXG4gICAgICAgICAgICBkZWZhdWx0U29ydERlc2M6IHRydWUsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdkb2MtdGFibGUtY29sLXVwZGF0ZWQgZC1ub25lLW1vYmlsZScsXG4gICAgICAgICAgICBDZWxsOiAocm93OiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICAgICAgPERhdGVUaW1lVGFibGVDZWxsIGNsYXNzTmFtZT1cImRvYy1jb2wtbGFzdC11cGRhdGVkXCIgZGF0ZXRpbWU9e3Jvdy52YWx1ZX0vPlxuXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDb2x1bW5BZGRlZCgpIHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgSGVhZGVyOiAnQWRkZWQnLFxuICAgICAgICAgICAgYWNjZXNzb3I6ICdhZGRlZCcsXG4gICAgICAgICAgICBoZWFkZXJDbGFzc05hbWU6IFwiZC1ub25lLW1vYmlsZVwiLFxuICAgICAgICAgICAgc2hvdzogdGhpcy5wcm9wcy5jb2x1bW5zLmFkZGVkLnNlbGVjdGVkLFxuICAgICAgICAgICAgbWF4V2lkdGg6IDg1LFxuICAgICAgICAgICAgZGVmYXVsdFNvcnREZXNjOiB0cnVlLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jLXRhYmxlLWNvbC1hZGRlZCBkLW5vbmUtbW9iaWxlJyxcbiAgICAgICAgICAgIENlbGw6IChyb3c6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPERhdGVUaW1lVGFibGVDZWxsIGNsYXNzTmFtZT1cImRvYy1jb2wtYWRkZWRcIiBkYXRldGltZT17cm93LnZhbHVlfS8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ29sdW1uU2l0ZSgpIHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgSGVhZGVyOiAnU2l0ZScsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3NpdGUnLFxuICAgICAgICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBcImQtbm9uZS1tb2JpbGVcIixcbiAgICAgICAgICAgIHNob3c6ICh0aGlzLnByb3BzLmNvbHVtbnMuc2l0ZSB8fCB7fSkuc2VsZWN0ZWQgfHwgZmFsc2UsXG4gICAgICAgICAgICAvLyBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIG1heFdpZHRoOiAyMDAsXG4gICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZC1ub25lLW1vYmlsZVwiLFxuICAgICAgICAgICAgc29ydE1ldGhvZDogKGE6IFJlcG9Eb2NJbmZvLCBiOiBSZXBvRG9jSW5mbykgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9TVFIgPSAoZG9jPzogUmVwb0RvY0luZm8pOiBzdHJpbmcgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghIGRvYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jLnNpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2Muc2l0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFTVFIgPSB0b1NUUihhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiU1RSID0gdG9TVFIoYik7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiAoYVNUUiA9PT0gYlNUUikge1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBpZiAoYVNUUiA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBpZiAoYlNUUiA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYVNUUi5sb2NhbGVDb21wYXJlKGJTVFIpO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDb2x1bW5UYWdzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6ICd0YWdzJyxcbiAgICAgICAgICAgIEhlYWRlcjogJ1RhZ3MnLFxuICAgICAgICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBcImQtbm9uZS1tb2JpbGVcIixcbiAgICAgICAgICAgIHdpZHRoOiAyNTAsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJycsXG4gICAgICAgICAgICBzaG93OiB0aGlzLnByb3BzLmNvbHVtbnMudGFncy5zZWxlY3RlZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RvYy10YWJsZS1jb2wtdGFncyBkLW5vbmUtbW9iaWxlJyxcbiAgICAgICAgICAgIHNvcnRNZXRob2Q6IChhOiBSZXBvRG9jSW5mbywgYjogUmVwb0RvY0luZm8pID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvU1RSID0gKG9iajogYW55KTogc3RyaW5nID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoISBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY21wID0gdG9TVFIoYS50YWdzKS5sb2NhbGVDb21wYXJlKHRvU1RSKGIudGFncykpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNtcCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY21wO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGZvciB0aWVzIHVzZSB0aGUgZGF0ZSBhZGRlZC4uLlxuICAgICAgICAgICAgICAgIHJldHVybiB0b1NUUihhLmFkZGVkKS5sb2NhbGVDb21wYXJlKHRvU1RSKGIuYWRkZWQpKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIENlbGw6IChyb3c6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IG1vdmUgdG8gYSBQdXJlQ29tcG9uZW50IHRvXG4gICAgICAgICAgICAgICAgLy8gaW1wcm92ZSBwZXJmb3JtYW5jZVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFnczoge1tpZDogc3RyaW5nXTogVGFnfSA9IHJvdy5vcmlnaW5hbC50YWdzO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gVGFncy5vbmx5UmVndWxhcihPYmplY3QudmFsdWVzKHRhZ3MpKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHRhZyA9PiB0YWcubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgIC5zb3J0KClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWF0dGVkfTwvZGl2PlxuXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ29sdW1uUHJvZ3Jlc3MoKSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiAncHJvZ3Jlc3MnLFxuICAgICAgICAgICAgSGVhZGVyOiAnUHJvZ3Jlc3MnLFxuICAgICAgICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBcImQtbm9uZS1tb2JpbGVcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiAncHJvZ3Jlc3MnLFxuICAgICAgICAgICAgc2hvdzogdGhpcy5wcm9wcy5jb2x1bW5zLnByb2dyZXNzLnNlbGVjdGVkLFxuICAgICAgICAgICAgbWF4V2lkdGg6IDEwMCxcbiAgICAgICAgICAgIGRlZmF1bHRTb3J0RGVzYzogdHJ1ZSxcbiAgICAgICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdkb2MtdGFibGUtY29sLXByb2dyZXNzIGQtbm9uZS1tb2JpbGUnLFxuICAgICAgICAgICAgQ2VsbDogKHJvdzogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8cHJvZ3Jlc3MgY2xhc3NOYW1lPVwibXQtYXV0byBtYi1hdXRvXCIgbWF4PVwiMTAwXCIgdmFsdWU9eyByb3cudmFsdWUgfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUNvbHVtbkFubm90YXRpb25zKCkge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogJ25yQW5ub3RhdGlvbnMnLFxuICAgICAgICAgICAgSGVhZGVyOiAnQW5ub3RhdGlvbnMnLFxuICAgICAgICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBcImQtbm9uZS1tb2JpbGVcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnbnJBbm5vdGF0aW9ucycsXG4gICAgICAgICAgICBtYXhXaWR0aDogMTEwLFxuICAgICAgICAgICAgc2hvdzogdGhpcy5wcm9wcy5jb2x1bW5zLm5yQW5ub3RhdGlvbnMuc2VsZWN0ZWQsXG4gICAgICAgICAgICBkZWZhdWx0U29ydERlc2M6IHRydWUsXG4gICAgICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImQtbm9uZS1tb2JpbGVcIixcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ29sdW1uQnV0dG9ucygpIHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6ICdkb2MtYnV0dG9ucycsXG4gICAgICAgICAgICBIZWFkZXI6ICcnLFxuICAgICAgICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBcImQtbm9uZS1tb2JpbGVcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnJyxcbiAgICAgICAgICAgIG1heFdpZHRoOiAxMDAsXG4gICAgICAgICAgICBkZWZhdWx0U29ydERlc2M6IHRydWUsXG4gICAgICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jLWRyb3Bkb3duIGQtbm9uZS1tb2JpbGUnLFxuICAgICAgICAgICAgQ2VsbDogKHJvdzogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXBvRG9jSW5mbzogUmVwb0RvY0luZm8gPSByb3cub3JpZ2luYWw7XG4gICAgICAgICAgICAgICAgY29uc3Qgdmlld0luZGV4ID0gcm93LnZpZXdJbmRleDtcblxuICAgICAgICAgICAgICAgIHJldHVybiA8RG9jQnV0dG9uc0NlbGwgdmlld0luZGV4PXt2aWV3SW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnZ2VkPXtyZXBvRG9jSW5mby5mbGFnZ2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJjaGl2ZWQ9e3JlcG9Eb2NJbmZvLmFyY2hpdmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9IYW5kbGVUb2dnbGVGaWVsZD17dGhpcy5kb0hhbmRsZVRvZ2dsZUZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb2N1bWVudExvYWRSZXF1ZXN0ZWQ9e3RoaXMub25Eb2N1bWVudExvYWRSZXF1ZXN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30vPlxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUNvbHVtbnMoY29udGV4dE1lbnVIYW5kbGVyczogQ29udGV4dE1lbnVIYW5kbGVycykge1xuXG4gICAgICAgIGlmIChQbGF0Zm9ybXMuaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29sdW1uc0ZvclRhYmxldCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29sdW1uc0ZvckRlc2t0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDb2x1bW5zRm9yVGFibGV0KCkge1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbkNoZWNrYm94KCksXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtblRpdGxlKCksXG4gICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZUNvbHVtblVwZGF0ZWQoKSxcbiAgICAgICAgICAgIC8vIHRoaXMuY3JlYXRlQ29sdW1uQWRkZWQoKSxcbiAgICAgICAgICAgIC8vIHRoaXMuY3JlYXRlQ29sdW1uU2l0ZSgpLFxuICAgICAgICAgICAgLy8gdGhpcy5jcmVhdGVDb2x1bW5UYWdzKCksXG4gICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZUNvbHVtbkFubm90YXRpb25zKCksXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtblByb2dyZXNzKCksXG4gICAgICAgICAgICAvLyB0aGlzLmNyZWF0ZUNvbHVtbkJ1dHRvbnMoKVxuICAgICAgICBdO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDb2x1bW5zRm9yRGVza3RvcCgpIHtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5DaGVja2JveCgpLFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5UaXRsZSgpLFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5VcGRhdGVkKCksXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbkFkZGVkKCksXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtblNpdGUoKSxcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29sdW1uVGFncygpLFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5Bbm5vdGF0aW9ucygpLFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5Qcm9ncmVzcygpLFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5CdXR0b25zKClcbiAgICAgICAgXTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlVERQcm9wcyhyb3dJbmZvOiBSb3dJbmZvLCBjb2x1bW46IENvbHVtbiwgY29udGV4dE1lbnVIYW5kbGVyczogQ29udGV4dE1lbnVIYW5kbGVycykge1xuXG4gICAgICAgIGlmIChQbGF0Zm9ybXMuaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlVERQcm9wc0Zvck1vYmlsZShyb3dJbmZvLCBjb2x1bW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlVERQcm9wc0ZvckRlc2t0b3Aocm93SW5mbywgY29sdW1uLCBjb250ZXh0TWVudUhhbmRsZXJzKTtcbiAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVREUHJvcHNGb3JNb2JpbGUocm93SW5mbz86IFJvd0luZm8sIGNvbHVtbj86IENvbHVtbikge1xuXG4gICAgICAgIGNvbnN0IERFRkFVTFRfQkVIQVZJT1JfQ09MVU1OUyA9IFtcbiAgICAgICAgICAgICdkb2MtY2hlY2tib3gnXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKGNvbHVtbiAmJiBjb2x1bW4uaWQgJiYgREVGQVVMVF9CRUhBVklPUl9DT0xVTU5TLmluY2x1ZGVzKGNvbHVtbi5pZCkpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgoZTogYW55LCBoYW5kbGVPcmlnaW5hbD86ICgpID0+IHZvaWQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlT3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5lZWRlZCBmb3IgcmVhY3QgdGFibGUgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9uIHByb3Blcmx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT3JpZ2luYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICAgICAgb25DbGljazogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvd0luZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcG9Eb2NJbmZvOiBSZXBvRG9jSW5mbyA9IHJvd0luZm8ub3JpZ2luYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRG9jdW1lbnRMb2FkUmVxdWVzdGVkKHJlcG9Eb2NJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVREUHJvcHNGb3JEZXNrdG9wKHJvd0luZm86IFJvd0luZm8sIGNvbHVtbjogQ29sdW1uLCBjb250ZXh0TWVudUhhbmRsZXJzOiBDb250ZXh0TWVudUhhbmRsZXJzKSB7XG5cbiAgICAgICAgY29uc3QgREVGQVVMVF9CRUhBVklPUl9DT0xVTU5TID0gW1xuICAgICAgICAgICAgJ3RhZy1pbnB1dCcsXG4gICAgICAgICAgICAnZmxhZ2dlZCcsXG4gICAgICAgICAgICAnYXJjaGl2ZWQnLFxuICAgICAgICAgICAgJ2RvYy1kcm9wZG93bicsXG4gICAgICAgICAgICAnZG9jLWJ1dHRvbnMnLFxuICAgICAgICAgICAgJ2RvYy1jaGVja2JveCdcbiAgICAgICAgXTtcblxuICAgICAgICBpZiAoY29sdW1uICYmIGNvbHVtbi5pZCAmJiBERUZBVUxUX0JFSEFWSU9SX0NPTFVNTlMuaW5jbHVkZXMoY29sdW1uLmlkKSkge1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICAgICAgb25DbGljazogKChlOiBhbnksIGhhbmRsZU9yaWdpbmFsPzogKCkgPT4gdm9pZCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVPcmlnaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmVlZGVkIGZvciByZWFjdCB0YWJsZSB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnVuY3Rpb24gcHJvcGVybHkuXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVPcmlnaW5hbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChldmVudDogTW91c2VFdmVudCwgdHlwZTogU2VsZWN0Um93VHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyb3dJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0Um93KHJvd0luZm8udmlld0luZGV4IGFzIG51bWJlciwgZXZlbnQsIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5wcm9wcy5nZXRTZWxlY3RlZCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGFsbG93IGRvdWJsZSBjbGljayBpZiBvbmUgaXRlbSBpcyByZXF1ZXN0ZWQuICBEb3VibGUgY2xpY2tpbmcgb24gPiAxIG1ha2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBubyBzZW5zZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Eb2N1bWVudExvYWRSZXF1ZXN0ZWQoc2VsZWN0ZWRbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIG9uQ29udGV4dE1lbnU6IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3QoZXZlbnQsICdjb250ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRNZW51SGFuZGxlcnMub25Db250ZXh0TWVudShldmVudCk7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IChldmVudDogTW91c2VFdmVudCwgaGFuZGxlT3JpZ2luYWw/OiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVNlbGVjdChldmVudCwgJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ6IChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0TWVudUhhbmRsZXJzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ6IChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0TWVudUhhbmRsZXJzLm9uVG91Y2hTdGFydChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ29udGV4dE1lbnVIYW5kbGVycygpIHtcbiAgICAgICAgY29uc3QgY29udGV4dE1lbnVIYW5kbGVycyA9IHByZXBhcmVDb250ZXh0TWVudUhhbmRsZXJzKHtpZDogQ09OVEVYVF9NRU5VX0lEfSk7XG4gICAgICAgIHJldHVybiBjb250ZXh0TWVudUhhbmRsZXJzO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGNvbnRleHRNZW51SGFuZGxlcnMgPSB0aGlzLmNyZWF0ZUNvbnRleHRNZW51SGFuZGxlcnMoKTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZG9jLXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMVwiXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnYXV0byd9fT5cblxuICAgICAgICAgICAgICAgIHsvKlRPRE86IHJlbW92aW5nIG5vdyBiZWNhdXNlIGl0IGJyZWFrcyBzY3JvbGxiYXJzIGZvciBuZXcgdXNlcnMuKi99XG4gICAgICAgICAgICAgICAgey8qPEFjY291bnRVcGdyYWRlQmFyLz4qL31cblxuICAgICAgICAgICAgICAgIDxDb250ZXh0TWVudVdyYXBwZXIgaWQ9e0NPTlRFWFRfTUVOVV9JRH0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgc2hhZG93IHJvdW5kZWQgcHQtMiBwYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3ZhcigtLXdoaXRlKSd9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPERvY0Ryb3Bkb3duSXRlbXMgdG9nZ2xlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnM9e3RoaXMucHJvcHMuZmlsdGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLmNvbnRleHRNZW51UHJvcHN9Lz5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvQ29udGV4dE1lbnVXcmFwcGVyPlxuXG4gICAgICAgICAgICAgICAgPFJlYWN0VGFibGVcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Wy4uLmRhdGFdfVxuICAgICAgICAgICAgICAgICAgICByZWY9eyhyZWFjdFRhYmxlOiBJbnN0YW5jZSkgPT4gdGhpcy5wcm9wcy5vblJlYWN0VGFibGUocmVhY3RUYWJsZSl9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e3RoaXMuY3JlYXRlQ29sdW1ucyhjb250ZXh0TWVudUhhbmRsZXJzKX1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFBhZ2VTaXplPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgbm9EYXRhVGV4dD1cIk5vIGRvY3VtZW50cyBhdmFpbGFibGUuXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiLXN0cmlwZWQgLWhpZ2hsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fVxuICAgICAgICAgICAgICAgICAgICBzaG93UGFnZVNpemVPcHRpb25zPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFNvcnRlZD17W1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInByb2dyZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBnZXRUaGVhZFByb3BzPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5lZWRlZCB0byBhdm9pZCB0aGUgY29sdW1ucyBiZWluZyBwbGFjZWQgd3JvbmcgZHVlIHRvIHRoZSBzY3JvbGxiYXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFlbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc29ydGVkPXtbe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWQ6ICdhZGRlZCcsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkZXNjOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIC8vIH1dfVxuICAgICAgICAgICAgICAgICAgICBnZXRUclByb3BzPXsoc3RhdGU6IGFueSwgcm93SW5mbzogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ6IChldmVudDogRHJhZ0V2ZW50KSA9PiAodGhpcy5wcm9wcy5vbkRyYWdTdGFydCB8fCBOVUxMX0ZVTkNUSU9OKShldmVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnRW5kOiAoZXZlbnQ6IERyYWdFdmVudCkgPT4gKHRoaXMucHJvcHMub25EcmFnRW5kIHx8IE5VTExfRlVOQ1RJT04pKGV2ZW50KSxcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jbHVkZSB0aGUgZG9jIGZpbmdlcnByaW50IGluIHRoZSB0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgdGhlIHRvdXIgY2FuIHVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWRvYy1maW5nZXJwcmludCc6ICgocm93SW5mbyB8fCB7fSkub3JpZ2luYWwgfHwge30pLmZpbmdlcnByaW50IHx8ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IHJvd0luZm8gPyAocm93SW5mby52aWV3SW5kZXggYXMgbnVtYmVyKSArIDEgOiB1bmRlZmluZWQsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBkYXJrLW1vZGUuICBVc2UgQ1NTIHZhcmlhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hbWVzIGZvciBjb2xvcnNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByb3dJbmZvICYmIHRoaXMucHJvcHMuc2VsZWN0ZWQuaW5jbHVkZXMocm93SW5mby52aWV3SW5kZXgpID8gJ3ZhcigtLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3IpJyA6ICd2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJvd0luZm8gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZC5pbmNsdWRlcyhyb3dJbmZvLnZpZXdJbmRleCkgPyAndmFyKC0tc2VsZWN0ZWQtdGV4dC1jb2xvciknIDogJ3ZhcigtLXByaW1hcnktdGV4dC1jb2xvciknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd246IChldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGdldFRkUHJvcHM9eyhzdGF0ZTogYW55LCByb3dJbmZvPzogUm93SW5mbywgY29sdW1uPzogQ29sdW1uKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcm93SW5mbyB8fCAhIGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlVERQcm9wcyhyb3dJbmZvLCBjb2x1bW4sIGNvbnRleHRNZW51SGFuZGxlcnMpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTEVsZW1lbnQ+KSB7XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJEZWxldGVcIikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk11bHRpRGVsZXRlZCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9jdW1lbnRMb2FkUmVxdWVzdGVkKHJlcG9Eb2NJbmZvOiBSZXBvRG9jSW5mbykge1xuXG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gcmVwb0RvY0luZm8uZmluZ2VycHJpbnQ7XG5cbiAgICAgICAgY29uc3QgZG9jSW5mbyA9IHJlcG9Eb2NJbmZvLmRvY0luZm87XG4gICAgICAgIGNvbnN0IGJhY2tlbmRGaWxlUmVmID0gQmFja2VuZEZpbGVSZWZzLnRvQmFja2VuZEZpbGVSZWYoRWl0aGVyLm9mUmlnaHQoZG9jSW5mbykpO1xuXG4gICAgICAgIHRoaXMucHJvcHMuc3luY2hyb25pemluZ0RvY0xvYWRlci5sb2FkKGZpbmdlcnByaW50LCBiYWNrZW5kRmlsZVJlZiEpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byBsb2FkIGRvYzogXCIsIGVycikpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb0hhbmRsZVRvZ2dsZUZpZWxkKHJlcG9Eb2NJbmZvOiBSZXBvRG9jSW5mbywgZmllbGQ6IHN0cmluZykge1xuXG4gICAgICAgIHRoaXMuaGFuZGxlVG9nZ2xlRmllbGQocmVwb0RvY0luZm8sIGZpZWxkKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDb3VsZCBub3QgaGFuZGxlIHRvZ2dsZSBvbiBmaWVsZDogJHtmaWVsZH06IGAsIGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVUb2dnbGVGaWVsZChyZXBvRG9jSW5mbzogUmVwb0RvY0luZm8sIGZpZWxkOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBUT0RPOiBtb3ZlIHRvIHN5bmNEb2NJbmZvQXJjaGl2ZWQgaW4gRG9jUmVwb3NpdG9yeVxuXG4gICAgICAgIGxldCBtdXRhdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGZpZWxkID09PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICd1c2VyJywgYWN0aW9uOiAnYXJjaGl2ZWQtZG9jJ30pO1xuICAgICAgICAgICAgcmVwb0RvY0luZm8uYXJjaGl2ZWQgPSAhcmVwb0RvY0luZm8uYXJjaGl2ZWQ7XG4gICAgICAgICAgICByZXBvRG9jSW5mby5kb2NJbmZvLmFyY2hpdmVkID0gcmVwb0RvY0luZm8uYXJjaGl2ZWQ7XG4gICAgICAgICAgICBtdXRhdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gdXNlZCBzbyB0aGUgdXNlciBjYW4gdGVsbCBzb21ldGhpbmcgYWN0dWFsbHkgaGFwcGVuZWQgYmVjYXVzZSBpZlxuICAgICAgICAgICAgLy8gdGhlIHJvdyBqdXN0IHZhbmlzaGVzIGl0J3MgaGFyZCB0byB0ZWxsIHRoYXQgc29tZXRoaW5nIGFjdHVhbGx5XG4gICAgICAgICAgICAvLyBjaGFuZ2VkLlxuICAgICAgICAgICAgaWYgKHJlcG9Eb2NJbmZvLmFyY2hpdmVkKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Rlci5zdWNjZXNzKGBEb2N1bWVudCBoYXMgYmVlbiBhcmNoaXZlZC5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpZWxkID09PSAnZmxhZ2dlZCcpIHtcblxuICAgICAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAndXNlcicsIGFjdGlvbjogJ2ZsYWdnZWQtZG9jJ30pO1xuICAgICAgICAgICAgcmVwb0RvY0luZm8uZmxhZ2dlZCA9ICFyZXBvRG9jSW5mby5mbGFnZ2VkO1xuICAgICAgICAgICAgcmVwb0RvY0luZm8uZG9jSW5mby5mbGFnZ2VkID0gcmVwb0RvY0luZm8uZmxhZ2dlZDtcblxuICAgICAgICAgICAgbXV0YXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobXV0YXRlZCkge1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnByb3BzLndyaXRlRG9jSW5mbyhyZXBvRG9jSW5mby5kb2NJbmZvKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiRmFpbGVkIHRvIHdyaXRlIERvY0luZm9cIiwgZXJyKSk7XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVmcmVzaCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgY29sdW1uczogRG9jUmVwb1RhYmxlQ29sdW1ucztcbiAgICByZWFkb25seSBzZWxlY3RlZDogUmVhZG9ubHlBcnJheTxudW1iZXI+O1xuICAgIHJlYWRvbmx5IGRhdGE6IFJlYWRvbmx5QXJyYXk8UmVwb0RvY0luZm8+O1xuICAgIHJlYWRvbmx5IHJlbGF0ZWRUYWdzOiBSZWxhdGVkVGFncztcbiAgICByZWFkb25seSBzeW5jaHJvbml6aW5nRG9jTG9hZGVyOiBTeW5jaHJvbml6aW5nRG9jTG9hZGVyO1xuICAgIHJlYWRvbmx5IHRhZ3NQcm92aWRlcjogKCkgPT4gUmVhZG9ubHlBcnJheTxUYWc+O1xuICAgIHJlYWRvbmx5IHdyaXRlRG9jSW5mb1RhZ3M6IChyZXBvRG9jSW5mbzogUmVwb0RvY0luZm8sIHRhZ3M6IFJlYWRvbmx5QXJyYXk8VGFnPikgPT4gdm9pZDtcbiAgICByZWFkb25seSBkZWxldGVEb2NJbmZvOiAocmVwb0RvY0luZm86IFJlcG9Eb2NJbmZvKSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IHdyaXRlRG9jSW5mb1RpdGxlOiAocmVwb0RvY0luZm86IFJlcG9Eb2NJbmZvLCB0aXRsZTogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIHJlYWRvbmx5IHdyaXRlRG9jSW5mbzogKGRvY0luZm86IElEb2NJbmZvKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIHJlYWRvbmx5IG9uTXVsdGlEZWxldGVkOiAoKSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IG9uRG9jRGVsZXRlZDogKHJlcG9Eb2NJbmZvczogUmVwb0RvY0luZm9bXSkgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbkRvY0RlbGV0ZVJlcXVlc3RlZDogKHJlcG9Eb2NJbmZvczogUmVhZG9ubHlBcnJheTxSZXBvRG9jSW5mbz4pID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgb25Eb2NUYWdnZWQ6IChyZXBvRG9jSW5mbzogUmVwb0RvY0luZm8sIHRhZ3M6IFJlYWRvbmx5QXJyYXk8VGFnPikgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbkRvY1NldFRpdGxlOiAocmVwb0RvY0luZm86IFJlcG9Eb2NJbmZvLCB0aXRsZTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IHNlbGVjdFJvdzogKHNlbGVjdGVkSWR4OiBudW1iZXIsIGV2ZW50OiBNb3VzZUV2ZW50LCB0eXBlOiBTZWxlY3RSb3dUeXBlKSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IG9uU2VsZWN0ZWQ6IChzZWxlY3RlZDogUmVhZG9ubHlBcnJheTxudW1iZXI+KSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IG9uUmVhY3RUYWJsZTogKHJlYWN0VGFibGU6IEluc3RhbmNlKSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IHJlZnJlc2g6ICgpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgb25EcmFnU3RhcnQ/OiAoZXZlbnQ6IERyYWdFdmVudCkgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbkRyYWdFbmQ/OiAoZXZlbnQ6IERyYWdFdmVudCkgPT4gdm9pZDtcbiAgICByZWFkb25seSBnZXRTZWxlY3RlZDogKCkgPT4gUmVhZG9ubHlBcnJheTxSZXBvRG9jSW5mbz47XG4gICAgcmVhZG9ubHkgZmlsdGVyczogRmlsdGVycztcbiAgICByZWFkb25seSBvblJlbW92ZUZyb21Gb2xkZXI6IE9uUmVtb3ZlRnJvbUZvbGRlckNhbGxiYWNrO1xuICAgIHJlYWRvbmx5IGdldFJvdzogKHZpZXdJbmRleDogbnVtYmVyKSA9PiBSZXBvRG9jSW5mbztcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cblxuIl19