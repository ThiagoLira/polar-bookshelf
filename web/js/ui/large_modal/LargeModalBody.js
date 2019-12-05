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
const reactstrap_1 = require("reactstrap");
class LargeModalBody extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(reactstrap_1.ModalBody, { style: {
                overflowY: 'auto',
                maxHeight: 'calc(100vh - 150px)'
            } }, this.props.children));
    }
}
exports.LargeModalBody = LargeModalBody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFyZ2VNb2RhbEJvZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMYXJnZU1vZGFsQm9keS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJDQUFxQztBQU1yQyxNQUFhLGNBQWUsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFL0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFTSxNQUFNO1FBR1QsT0FBTyxDQUNILG9CQUFDLHNCQUFTLElBQUMsS0FBSyxFQUFFO2dCQUNKLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixTQUFTLEVBQUUscUJBQXFCO2FBQ2xDLElBRVAsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRVosQ0FDZixDQUFDO0lBQ04sQ0FBQztDQUVKO0FBdEJELHdDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TW9kYWxCb2R5fSBmcm9tICdyZWFjdHN0cmFwJztcblxuLyoqXG4gKiBNb2RhbCB0aGF0IGlzIGxhcmdlIGFuZCBmaXRzIG5lYXJseSB0aGUgZnVsbCBzY3JlZW4gYW5kIGhhcyBhIHNpbXBsZVxuICogYWNjZXB0IGJ1dHRvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIExhcmdlTW9kYWxCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9kYWxCb2R5IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTUwcHgpJ1xuICAgICAgICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==