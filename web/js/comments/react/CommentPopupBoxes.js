"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOM = __importStar(require("react-dom"));
const React = __importStar(require("react"));
const CommentPopupBox_1 = require("./CommentPopupBox");
const Elements_1 = require("../../util/Elements");
class CommentPopupBoxes {
    static create(commentEventDispatcher, commentHandler) {
        const popupElement = CommentPopupBoxes.createPopupElement();
        document.body.appendChild(popupElement);
        CommentPopupBoxes.render(popupElement, commentEventDispatcher, commentHandler);
    }
    static createPopupElement() {
        const style = `width: 600px; height: 250px;`;
        return Elements_1.Elements.createElementHTML(`<div id="comments-popup" style="${style}"></div>`);
    }
    static render(target, commentEventDispatcher, commentHandler) {
        ReactDOM.render(React.createElement(CommentPopupBox_1.CommentPopupBox, { commentEventDispatcher: commentEventDispatcher, onComment: commentHandler }), target);
    }
}
exports.CommentPopupBoxes = CommentPopupBoxes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudFBvcHVwQm94ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb21tZW50UG9wdXBCb3hlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsb0RBQXNDO0FBQ3RDLDZDQUErQjtBQUMvQix1REFBa0Q7QUFDbEQsa0RBQTZDO0FBTTdDLE1BQWEsaUJBQWlCO0lBRW5CLE1BQU0sQ0FBQyxNQUFNLENBQUMsc0JBQTJELEVBQzNELGNBQWdDO1FBRWpELE1BQU0sWUFBWSxHQUFHLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUVuRixDQUFDO0lBRU8sTUFBTSxDQUFDLGtCQUFrQjtRQUU3QixNQUFNLEtBQUssR0FBRyw4QkFBOEIsQ0FBQztRQUU3QyxPQUFPLG1CQUFRLENBQUMsaUJBQWlCLENBQUMsbUNBQW1DLEtBQUssVUFBVSxDQUFDLENBQUM7SUFFMUYsQ0FBQztJQUVPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBbUIsRUFDbkIsc0JBQTJELEVBQzNELGNBQWdDO1FBRWxELFFBQVEsQ0FBQyxNQUFNLENBQ1gsb0JBQUMsaUNBQWUsSUFBQyxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxTQUFTLEVBQUUsY0FBYyxHQUFHLEVBQzdGLE1BQU0sQ0FDVCxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBOUJELDhDQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NvbW1lbnRQb3B1cEJveH0gZnJvbSAnLi9Db21tZW50UG9wdXBCb3gnO1xuaW1wb3J0IHtFbGVtZW50c30gZnJvbSAnLi4vLi4vdXRpbC9FbGVtZW50cyc7XG5pbXBvcnQge0lFdmVudERpc3BhdGNoZXJ9IGZyb20gJy4uLy4uL3JlYWN0b3IvU2ltcGxlUmVhY3Rvcic7XG5pbXBvcnQge0NvbW1lbnRJbnB1dEV2ZW50fSBmcm9tICcuL0NvbW1lbnRJbnB1dEV2ZW50JztcbmltcG9ydCB7QW5ub3RhdGlvbkRlc2NyaXB0b3J9IGZyb20gJy4uLy4uL21ldGFkYXRhL0Fubm90YXRpb25EZXNjcmlwdG9yJztcbmltcG9ydCB7Q29tbWVudENyZWF0ZWRFdmVudH0gZnJvbSAnLi9Db21tZW50Q3JlYXRlZEV2ZW50JztcblxuZXhwb3J0IGNsYXNzIENvbW1lbnRQb3B1cEJveGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGNvbW1lbnRFdmVudERpc3BhdGNoZXI6IElFdmVudERpc3BhdGNoZXI8Q29tbWVudElucHV0RXZlbnQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRIYW5kbGVyOiBPbkNvbW1lbnRIYW5kbGVyKSB7XG5cbiAgICAgICAgY29uc3QgcG9wdXBFbGVtZW50ID0gQ29tbWVudFBvcHVwQm94ZXMuY3JlYXRlUG9wdXBFbGVtZW50KCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXBFbGVtZW50KTtcbiAgICAgICAgQ29tbWVudFBvcHVwQm94ZXMucmVuZGVyKHBvcHVwRWxlbWVudCwgY29tbWVudEV2ZW50RGlzcGF0Y2hlciwgY29tbWVudEhhbmRsZXIpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlUG9wdXBFbGVtZW50KCkge1xuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gYHdpZHRoOiA2MDBweDsgaGVpZ2h0OiAyNTBweDtgO1xuXG4gICAgICAgIHJldHVybiBFbGVtZW50cy5jcmVhdGVFbGVtZW50SFRNTChgPGRpdiBpZD1cImNvbW1lbnRzLXBvcHVwXCIgc3R5bGU9XCIke3N0eWxlfVwiPjwvZGl2PmApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVuZGVyKHRhcmdldDogSFRNTEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRFdmVudERpc3BhdGNoZXI6IElFdmVudERpc3BhdGNoZXI8Q29tbWVudElucHV0RXZlbnQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50SGFuZGxlcjogT25Db21tZW50SGFuZGxlcikge1xuXG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgICAgIDxDb21tZW50UG9wdXBCb3ggY29tbWVudEV2ZW50RGlzcGF0Y2hlcj17Y29tbWVudEV2ZW50RGlzcGF0Y2hlcn0gb25Db21tZW50PXtjb21tZW50SGFuZGxlcn0vPixcbiAgICAgICAgICAgIHRhcmdldFxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWVudFBvcHVwIHtcbiAgICBwb3B1cEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xufVxuXG5leHBvcnQgdHlwZSBPbkNvbW1lbnRIYW5kbGVyID0gKGNvbW1lbnRDcmVhdGVkRXZlbnQ6IENvbW1lbnRDcmVhdGVkRXZlbnQpID0+IHZvaWQ7XG5cbiJdfQ==