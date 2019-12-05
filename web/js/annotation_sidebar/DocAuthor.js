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
const Image = (props) => {
    const { author } = props;
    return (React.createElement("div", { className: "mt-auto mb-auto mr-1" },
        React.createElement("img", { src: author.image.src, alt: author.name, title: author.name, className: "rounded", style: {
                maxWidth: '18px',
                maxHeight: '18px'
            } })));
};
class DocAuthor extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { author } = this.props;
        if (author && author.image) {
            return React.createElement(Image, Object.assign({}, this.props));
        }
        else {
            return React.createElement("div", null);
        }
    }
}
exports.DocAuthor = DocAuthor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jQXV0aG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jQXV0aG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFJL0IsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUU1QixNQUFNLEVBQUMsTUFBTSxFQUFDLEdBQUcsS0FBSyxDQUFDO0lBRXZCLE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsc0JBQXNCO1FBRWpDLDZCQUFLLEdBQUcsRUFBRSxNQUFPLENBQUMsS0FBTSxDQUFDLEdBQUcsRUFDdkIsR0FBRyxFQUFFLE1BQU8sQ0FBQyxJQUFLLEVBQ2xCLEtBQUssRUFBRSxNQUFPLENBQUMsSUFBSyxFQUNwQixTQUFTLEVBQUMsU0FBUyxFQUNuQixLQUFLLEVBQUU7Z0JBQ0gsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFNBQVMsRUFBRSxNQUFNO2FBQ3BCLEdBQUcsQ0FFUCxDQUNULENBQUM7QUFFTixDQUFDLENBQUM7QUFLRixNQUFhLFNBQVUsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFMUQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFTSxNQUFNO1FBQ1QsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFNUIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN4QixPQUFPLG9CQUFDLEtBQUssb0JBQUssSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDO1NBQ25DO2FBQU07WUFDSCxPQUFPLGdDQUFNLENBQUM7U0FDakI7SUFFTCxDQUFDO0NBRUo7QUFsQkQsOEJBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBdXRob3J9IGZyb20gXCIuLi9tZXRhZGF0YS9BdXRob3JcIjtcbmltcG9ydCB7SUF1dGhvcn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSUF1dGhvclwiO1xuXG5jb25zdCBJbWFnZSA9IChwcm9wczogSVByb3BzKSA9PiB7XG5cbiAgICBjb25zdCB7YXV0aG9yfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gbWItYXV0byBtci0xXCI+XG5cbiAgICAgICAgICAgIDxpbWcgc3JjPXthdXRob3IhLmltYWdlIS5zcmN9XG4gICAgICAgICAgICAgICAgIGFsdD17YXV0aG9yIS5uYW1lIX1cbiAgICAgICAgICAgICAgICAgdGl0bGU9e2F1dGhvciEubmFtZSF9XG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzE4cHgnXG4gICAgICAgICAgICAgICAgIH19Lz5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG59O1xuXG4vKipcbiAqIEEgZ2VuZXJpYyB3cmFwcGVyIHRoYXQgZGV0ZXJtaW5lcyB3aGljaCBzdWItY29tcG9uZW50IHRvIHJlbmRlci5cbiAqL1xuZXhwb3J0IGNsYXNzIERvY0F1dGhvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthdXRob3J9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoYXV0aG9yICYmIGF1dGhvci5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIDxJbWFnZSB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz47XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgYXV0aG9yPzogSUF1dGhvcjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cblxuXG4iXX0=