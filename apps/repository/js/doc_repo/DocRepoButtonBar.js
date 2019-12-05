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
const Logger_1 = require("polar-shared/src/logger/Logger");
const AddContentButton_1 = require("../ui/AddContentButton");
const AddContentActions_1 = require("../ui/AddContentActions");
const TagButton_1 = require("./TagButton");
const MultiDeleteButton_1 = require("./multi_buttons/MultiDeleteButton");
const log = Logger_1.Logger.create();
class DocRepoButtonBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { style: { display: 'flex' } },
            React.createElement("div", { className: "mr-1", style: {
                    whiteSpace: 'nowrap',
                    marginTop: 'auto',
                    marginBottom: 'auto'
                } },
                React.createElement(AddContentButton_1.AddContentButton, { importFromDisk: () => AddContentActions_1.AddContentActions.cmdImportFromDisk(), captureWebPage: () => AddContentActions_1.AddContentActions.cmdCaptureWebPage() })),
            React.createElement("div", { className: "mr-1", style: { whiteSpace: 'nowrap', marginTop: 'auto', marginBottom: 'auto' } },
                React.createElement("div", { style: { display: 'flex' } },
                    React.createElement("div", null,
                        React.createElement(TagButton_1.TagButton, { id: "tag-multiple-documents", disabled: !this.props.hasSelected, tagsProvider: this.props.tagsProvider, onSelectedTags: this.props.onMultiTagged })),
                    React.createElement("div", { className: "ml-1" },
                        React.createElement(MultiDeleteButton_1.MultiDeleteButton, { disabled: !this.props.hasSelected, onClick: () => this.props.onMultiDeleted() }))))));
    }
}
exports.DocRepoButtonBar = DocRepoButtonBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jUmVwb0J1dHRvbkJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY1JlcG9CdXR0b25CYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyREFBc0Q7QUFDdEQsNkRBQXdEO0FBQ3hELCtEQUEwRDtBQUMxRCwyQ0FBc0M7QUFDdEMseUVBQW9FO0FBR3BFLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGdCQUFpQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVqRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUdULE9BQU8sQ0FFSCw2QkFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDO1lBRXpCLDZCQUFLLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLEtBQUssRUFBRTtvQkFDSCxVQUFVLEVBQUUsUUFBUTtvQkFDcEIsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLFlBQVksRUFBRSxNQUFNO2lCQUN2QjtnQkFFRixvQkFBQyxtQ0FBZ0IsSUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMscUNBQWlCLENBQUMsaUJBQWlCLEVBQUUsRUFDM0QsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLHFDQUFpQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FFOUU7WUFFTiw2QkFBSyxTQUFTLEVBQUMsTUFBTSxFQUNoQixLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQztnQkFFdkUsNkJBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQztvQkFFekI7d0JBRUksb0JBQUMscUJBQVMsSUFBQyxFQUFFLEVBQUMsd0JBQXdCLEVBQzNCLFFBQVEsRUFBRSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUNsQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQ3JDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxDQUVwRDtvQkFFTiw2QkFBSyxTQUFTLEVBQUMsTUFBTTt3QkFDakIsb0JBQUMscUNBQWlCLElBQUMsUUFBUSxFQUFFLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQzlELENBRUosQ0FFSixDQUVKLENBR1QsQ0FBQztJQUVOLENBQUM7Q0FJSjtBQTdERCw0Q0E2REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7QWRkQ29udGVudEJ1dHRvbn0gZnJvbSAnLi4vdWkvQWRkQ29udGVudEJ1dHRvbic7XG5pbXBvcnQge0FkZENvbnRlbnRBY3Rpb25zfSBmcm9tICcuLi91aS9BZGRDb250ZW50QWN0aW9ucyc7XG5pbXBvcnQge1RhZ0J1dHRvbn0gZnJvbSAnLi9UYWdCdXR0b24nO1xuaW1wb3J0IHtNdWx0aURlbGV0ZUJ1dHRvbn0gZnJvbSAnLi9tdWx0aV9idXR0b25zL011bHRpRGVsZXRlQnV0dG9uJztcbmltcG9ydCB7VGFnfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3RhZ3MvVGFncyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIERvY1JlcG9CdXR0b25CYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTFcIlxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJ1xuICAgICAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPEFkZENvbnRlbnRCdXR0b24gaW1wb3J0RnJvbURpc2s9eygpID0+IEFkZENvbnRlbnRBY3Rpb25zLmNtZEltcG9ydEZyb21EaXNrKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVXZWJQYWdlPXsoKSA9PiBBZGRDb250ZW50QWN0aW9ucy5jbWRDYXB0dXJlV2ViUGFnZSgpfS8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMVwiXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3doaXRlU3BhY2U6ICdub3dyYXAnLCBtYXJnaW5Ub3A6ICdhdXRvJywgbWFyZ2luQm90dG9tOiAnYXV0byd9fT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnQnV0dG9uIGlkPVwidGFnLW11bHRpcGxlLWRvY3VtZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ISB0aGlzLnByb3BzLmhhc1NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnc1Byb3ZpZGVyPXt0aGlzLnByb3BzLnRhZ3NQcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWRUYWdzPXt0aGlzLnByb3BzLm9uTXVsdGlUYWdnZWR9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aURlbGV0ZUJ1dHRvbiBkaXNhYmxlZD17ISB0aGlzLnByb3BzLmhhc1NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uTXVsdGlEZWxldGVkKCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuXG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGhhc1NlbGVjdGVkOiBib29sZWFuO1xuICAgIHJlYWRvbmx5IHRhZ3NQcm92aWRlcjogKCkgPT4gUmVhZG9ubHlBcnJheTxUYWc+O1xuICAgIHJlYWRvbmx5IG9uTXVsdGlUYWdnZWQ6ICh0YWdzOiBSZWFkb25seUFycmF5PFRhZz4pID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgb25NdWx0aURlbGV0ZWQ6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=