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
const FixedNav_1 = require("../../FixedNav");
const RepoHeader_1 = require("../../repo_header/RepoHeader");
const CreateGroupForm_1 = require("./CreateGroupForm");
const Tags_1 = require("polar-shared/src/tags/Tags");
class CreateGroupScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.createTagsProvider = this.createTagsProvider.bind(this);
        this.state = {};
    }
    render() {
        const tagsProvider = this.createTagsProvider();
        const relatedTags = this.props.repoDocMetaManager.relatedTags;
        return (React.createElement(FixedNav_1.FixedNav, { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager })),
            React.createElement(FixedNav_1.FixedNavBody, { className: "container-fluid" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-12 w-100 pt-2" },
                        React.createElement(CreateGroupForm_1.CreateGroupForm, { relatedTags: relatedTags, tagsProvider: tagsProvider }))))));
    }
    createTagsProvider() {
        return () => {
            const tags = this.props.repoDocMetaManager.repoDocInfoIndex.toTagDescriptors();
            return Tags_1.Tags.onlyRegular(tags);
        };
    }
}
exports.CreateGroupScreen = CreateGroupScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlR3JvdXBTY3JlZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDcmVhdGVHcm91cFNjcmVlbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDZDQUFzRDtBQUN0RCw2REFBd0Q7QUFFeEQsdURBQWtEO0FBRWxELHFEQUFnRDtBQUdoRCxNQUFhLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVsRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQy9DLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQW1CLENBQUMsV0FBVyxDQUFDO1FBRS9ELE9BQU8sQ0FFSCxvQkFBQyxtQkFBUSxJQUFDLEVBQUUsRUFBQyxnQkFBZ0I7WUFFekI7Z0JBRUksb0JBQUMsdUJBQVUsSUFBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixHQUFHLENBRXJFO1lBRVQsb0JBQUMsdUJBQVksSUFBQyxTQUFTLEVBQUMsaUJBQWlCO2dCQUVyQyw2QkFBSyxTQUFTLEVBQUMsS0FBSztvQkFFaEIsNkJBQUssU0FBUyxFQUFDLHNCQUFzQjt3QkFFakMsb0JBQUMsaUNBQWUsSUFBQyxXQUFXLEVBQUUsV0FBVyxFQUN4QixZQUFZLEVBQUUsWUFBWSxHQUFHLENBRzVDLENBQ0osQ0FFSyxDQUVSLENBRWQsQ0FBQztJQUNOLENBQUM7SUFFTyxrQkFBa0I7UUFFdEIsT0FBTyxHQUFHLEVBQUU7WUFFUixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFtQixDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDaEYsT0FBTyxXQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxDLENBQUMsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQTFERCw4Q0EwREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0ZpeGVkTmF2LCBGaXhlZE5hdkJvZHl9IGZyb20gJy4uLy4uL0ZpeGVkTmF2JztcbmltcG9ydCB7UmVwb0hlYWRlcn0gZnJvbSAnLi4vLi4vcmVwb19oZWFkZXIvUmVwb0hlYWRlcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcbmltcG9ydCB7Q3JlYXRlR3JvdXBGb3JtfSBmcm9tIFwiLi9DcmVhdGVHcm91cEZvcm1cIjtcbmltcG9ydCB7UmVwb0RvY01ldGFNYW5hZ2VyfSBmcm9tIFwiLi4vLi4vUmVwb0RvY01ldGFNYW5hZ2VyXCI7XG5pbXBvcnQge1RhZ3N9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3RhZ3MvVGFnc1wiO1xuaW1wb3J0IHtBdXRoSGFuZGxlcnN9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvYXBwcy9yZXBvc2l0b3J5L2F1dGhfaGFuZGxlci9BdXRoSGFuZGxlclwiO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlR3JvdXBTY3JlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVUYWdzUHJvdmlkZXIgPSB0aGlzLmNyZWF0ZVRhZ3NQcm92aWRlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHRhZ3NQcm92aWRlciA9IHRoaXMuY3JlYXRlVGFnc1Byb3ZpZGVyKCk7XG4gICAgICAgIGNvbnN0IHJlbGF0ZWRUYWdzID0gdGhpcy5wcm9wcy5yZXBvRG9jTWV0YU1hbmFnZXIhLnJlbGF0ZWRUYWdzO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxGaXhlZE5hdiBpZD1cImRvYy1yZXBvc2l0b3J5XCI+XG5cbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxSZXBvSGVhZGVyIHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyPXt0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfS8+XG5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxGaXhlZE5hdkJvZHkgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgdy0xMDAgcHQtMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUdyb3VwRm9ybSByZWxhdGVkVGFncz17cmVsYXRlZFRhZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzUHJvdmlkZXI9e3RhZ3NQcm92aWRlcn0vPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvRml4ZWROYXZCb2R5PlxuXG4gICAgICAgICAgICA8L0ZpeGVkTmF2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVUYWdzUHJvdmlkZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFncyA9IHRoaXMucHJvcHMucmVwb0RvY01ldGFNYW5hZ2VyIS5yZXBvRG9jSW5mb0luZGV4LnRvVGFnRGVzY3JpcHRvcnMoKTtcbiAgICAgICAgICAgIHJldHVybiBUYWdzLm9ubHlSZWd1bGFyKHRhZ3MpO1xuXG4gICAgICAgIH07XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcbiAgICByZWFkb25seSByZXBvRG9jTWV0YU1hbmFnZXI6IFJlcG9Eb2NNZXRhTWFuYWdlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=