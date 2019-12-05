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
const CommentDropdown_1 = require("../CommentDropdown");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocAuthor_1 = require("../../DocAuthor");
const DocAnnotationMoment_1 = require("../../DocAnnotationMoment");
const NullCollapse_1 = require("../../../ui/null_collapse/NullCollapse");
const log = Logger_1.Logger.create();
const Styles = {
    barBody: {
        display: 'flex'
    },
    barChild: {
        marginTop: 'auto',
        marginBottom: 'auto',
    }
};
class ViewComment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onDelete = this.onDelete.bind(this);
        this.state = {};
    }
    render() {
        const { comment } = this.props;
        const key = 'comment-' + comment.id;
        return (React.createElement("div", { className: "m-1 mb-2" },
            React.createElement("div", { key: key, className: "comment muted-color-root" },
                React.createElement("div", { className: "pb-1 pt-1" },
                    React.createElement("span", { dangerouslySetInnerHTML: { __html: comment.html } })),
                React.createElement("div", { style: Styles.barBody, className: "flexbar comment-bar border-bottom pt-0 pb-0 mb-1" },
                    React.createElement(DocAuthor_1.DocAuthor, { author: comment.author }),
                    React.createElement("div", { style: Styles.barChild, className: "text-muted" },
                        React.createElement(DocAnnotationMoment_1.DocAnnotationMoment, { created: comment.created })),
                    React.createElement("div", { style: Styles.barChild, className: "flexbar-right muted-color" },
                        React.createElement(NullCollapse_1.NullCollapse, { open: !comment.immutable }, this.props.editButton),
                        React.createElement("div", { className: "ml-1" },
                            React.createElement(CommentDropdown_1.CommentDropdown, { id: 'comment-dropdown-' + comment.id, disabled: comment.immutable, comment: comment, onDelete: () => this.onDelete(comment) })))))));
    }
    onDelete(comment) {
        log.info("Comment deleted: ", comment);
        delete comment.pageMeta.comments[comment.id];
    }
}
exports.ViewComment = ViewComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld0NvbW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJWaWV3Q29tbWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRy9CLHdEQUFtRDtBQUNuRCwyREFBc0Q7QUFHdEQsK0NBQTBDO0FBQzFDLG1FQUE4RDtBQUU5RCx5RUFBb0U7QUFFcEUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sTUFBTSxHQUFjO0lBRXRCLE9BQU8sRUFBRTtRQUNMLE9BQU8sRUFBRSxNQUFNO0tBQ2xCO0lBRUQsUUFBUSxFQUFFO1FBQ04sU0FBUyxFQUFFLE1BQU07UUFDakIsWUFBWSxFQUFFLE1BQU07S0FDdkI7Q0FFSixDQUFDO0FBS0YsTUFBYSxXQUFZLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRTVELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFTSxNQUFNO1FBQ1QsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFL0IsTUFBTSxHQUFHLEdBQUcsVUFBVSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFFcEMsT0FBTyxDQUVILDZCQUFLLFNBQVMsRUFBQyxVQUFVO1lBRXJCLDZCQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLDBCQUEwQjtnQkFFL0MsNkJBQUssU0FBUyxFQUFDLFdBQVc7b0JBS3RCLDhCQUFNLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFLLEVBQUMsR0FFL0MsQ0FFTDtnQkFFTiw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFDckIsU0FBUyxFQUFDLGtEQUFrRDtvQkFFN0Qsb0JBQUMscUJBQVMsSUFBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRztvQkFFcEMsNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLFlBQVk7d0JBQy9DLG9CQUFDLHlDQUFtQixJQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxHQUFHLENBQzlDO29CQUVOLDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQywyQkFBMkI7d0JBRTlELG9CQUFDLDJCQUFZLElBQUMsSUFBSSxFQUFFLENBQUUsT0FBTyxDQUFDLFNBQVMsSUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ1g7d0JBRWYsNkJBQUssU0FBUyxFQUFDLE1BQU07NEJBQ2pCLG9CQUFDLGlDQUFlLElBQUMsRUFBRSxFQUFFLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQ3BDLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUMzQixPQUFPLEVBQUUsT0FBTyxFQUNoQixRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUN4RCxDQUVKLENBRUosQ0FFSixDQUVKLENBQ1QsQ0FBQztJQUVOLENBQUM7SUFFTyxRQUFRLENBQUMsT0FBc0I7UUFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QyxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBRUo7QUF0RUQsa0NBc0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuaW1wb3J0IHtEb2NBbm5vdGF0aW9ufSBmcm9tICcuLi8uLi9Eb2NBbm5vdGF0aW9uJztcbmltcG9ydCB7Q29tbWVudERyb3Bkb3dufSBmcm9tICcuLi9Db21tZW50RHJvcGRvd24nO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0lTdHlsZU1hcH0gZnJvbSAnLi4vLi4vLi4vcmVhY3QvSVN0eWxlTWFwJztcbmltcG9ydCB7RG9jfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9Eb2MnO1xuaW1wb3J0IHtEb2NBdXRob3J9IGZyb20gXCIuLi8uLi9Eb2NBdXRob3JcIjtcbmltcG9ydCB7RG9jQW5ub3RhdGlvbk1vbWVudH0gZnJvbSBcIi4uLy4uL0RvY0Fubm90YXRpb25Nb21lbnRcIjtcbmltcG9ydCB7RG9jQW5ub3RhdGlvbnN9IGZyb20gXCIuLi8uLi9Eb2NBbm5vdGF0aW9uc1wiO1xuaW1wb3J0IHtOdWxsQ29sbGFwc2V9IGZyb20gXCIuLi8uLi8uLi91aS9udWxsX2NvbGxhcHNlL051bGxDb2xsYXBzZVwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuXG4gICAgYmFyQm9keToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuXG4gICAgYmFyQ2hpbGQ6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxuICAgIH1cblxufTtcblxuLyoqXG4gKiBBIGdlbmVyaWMgd3JhcHBlciB0aGF0IGRldGVybWluZXMgd2hpY2ggc3ViLWNvbXBvbmVudCB0byByZW5kZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWV3Q29tbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9uRGVsZXRlID0gdGhpcy5vbkRlbGV0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNvbW1lbnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3Qga2V5ID0gJ2NvbW1lbnQtJyArIGNvbW1lbnQuaWQ7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTEgbWItMlwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwiY29tbWVudCBtdXRlZC1jb2xvci1yb290XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0xIHB0LTFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qVE9ETzogYmFzZWQgb24gdGhlIHN0YXRlIGRldGVybWluZSBpZiB3ZSBzaG91bGQgYmUqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKmVkaXRpbmcgb3IganVzdCBkaXNwbGF5aW5nIHRoZSBjb21tZW50Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb21tZW50Lmh0bWwhfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuYmFyQm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4YmFyIGNvbW1lbnQtYmFyIGJvcmRlci1ib3R0b20gcHQtMCBwYi0wIG1iLTFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPERvY0F1dGhvciBhdXRob3I9e2NvbW1lbnQuYXV0aG9yfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5iYXJDaGlsZH0gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb2NBbm5vdGF0aW9uTW9tZW50IGNyZWF0ZWQ9e2NvbW1lbnQuY3JlYXRlZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5iYXJDaGlsZH0gY2xhc3NOYW1lPVwiZmxleGJhci1yaWdodCBtdXRlZC1jb2xvclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bGxDb2xsYXBzZSBvcGVuPXshIGNvbW1lbnQuaW1tdXRhYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZWRpdEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L051bGxDb2xsYXBzZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudERyb3Bkb3duIGlkPXsnY29tbWVudC1kcm9wZG93bi0nICsgY29tbWVudC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y29tbWVudC5pbW11dGFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gdGhpcy5vbkRlbGV0ZShjb21tZW50KX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25EZWxldGUoY29tbWVudDogRG9jQW5ub3RhdGlvbikge1xuICAgICAgICBsb2cuaW5mbyhcIkNvbW1lbnQgZGVsZXRlZDogXCIsIGNvbW1lbnQpO1xuICAgICAgICBkZWxldGUgY29tbWVudC5wYWdlTWV0YS5jb21tZW50c1tjb21tZW50LmlkXTtcbiAgICB9XG5cbn1cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGRvYzogRG9jO1xuICAgIHJlYWRvbmx5IGNvbW1lbnQ6IERvY0Fubm90YXRpb247XG4gICAgcmVhZG9ubHkgZWRpdEJ1dHRvbjogSlNYLkVsZW1lbnQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cblxuIl19