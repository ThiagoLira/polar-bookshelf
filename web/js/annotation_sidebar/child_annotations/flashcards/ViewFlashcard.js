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
const FlashcardDropdown_1 = require("./FlashcardDropdown");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocAnnotationMoment_1 = require("../../DocAnnotationMoment");
const DocAuthor_1 = require("../../DocAuthor");
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
class ViewFlashcard extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.onDelete = this.onDelete.bind(this);
        this.state = {};
    }
    render() {
        const { flashcard } = this.props;
        const key = 'comment-' + flashcard.id;
        const RenderFrontAndBackFields = () => {
            return (React.createElement("div", null,
                React.createElement("div", { className: "pb-2 pt-2" },
                    React.createElement("span", { dangerouslySetInnerHTML: { __html: flashcard.fields.front } })),
                React.createElement("div", { className: "pb-2 pt-2 border-top" },
                    React.createElement("span", { dangerouslySetInnerHTML: { __html: flashcard.fields.back } }))));
        };
        const RenderClozeFields = () => {
            return (React.createElement("div", null,
                React.createElement("div", { className: "pb-2 pt-2" },
                    React.createElement("span", { dangerouslySetInnerHTML: { __html: flashcard.fields.text } }))));
        };
        const RenderFields = () => {
            if (flashcard.fields.text) {
                return (React.createElement(RenderClozeFields, null));
            }
            else {
                return (React.createElement(RenderFrontAndBackFields, null));
            }
        };
        return (React.createElement("div", { key: key, className: "mt-1 muted-color-root" },
            React.createElement("div", { className: "flashcard card shadow-sm mb-1" },
                React.createElement("div", { className: "card-body p-1" },
                    React.createElement(RenderFields, null))),
            React.createElement("div", { style: Styles.barBody, className: "flexbar comment-bar border-bottom pb-0 mb-2" },
                React.createElement(DocAuthor_1.DocAuthor, { author: flashcard.author }),
                React.createElement("div", { style: Styles.barChild, className: "text-muted" },
                    React.createElement(DocAnnotationMoment_1.DocAnnotationMoment, { created: flashcard.created })),
                React.createElement("div", { style: Styles.barChild, className: "flexbar-right muted-color" },
                    this.props.editButton,
                    React.createElement(FlashcardDropdown_1.FlashcardDropdown, { id: 'flashcard-dropdown-' + flashcard.id, disabled: !this.props.doc.mutable, flashcard: flashcard, onDelete: () => this.onDelete(flashcard) })))));
    }
    onDelete(flashcard) {
        log.info("Flashcard deleted: ", flashcard);
        delete flashcard.pageMeta.flashcards[flashcard.id];
    }
}
exports.ViewFlashcard = ViewFlashcard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld0ZsYXNoY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZpZXdGbGFzaGNhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUcvQiwyREFBc0Q7QUFDdEQsMkRBQXNEO0FBR3RELG1FQUE4RDtBQUM5RCwrQ0FBMEM7QUFFMUMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sTUFBTSxHQUFjO0lBRXRCLE9BQU8sRUFBRTtRQUNMLE9BQU8sRUFBRSxNQUFNO0tBQ2xCO0lBRUQsUUFBUSxFQUFFO1FBQ04sU0FBUyxFQUFFLE1BQU07UUFDakIsWUFBWSxFQUFFLE1BQU07S0FDdkI7Q0FFSixDQUFDO0FBS0YsTUFBYSxhQUFjLFNBQVEsS0FBSyxDQUFDLGFBQTZCO0lBRWxFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFTSxNQUFNO1FBQ1QsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFakMsTUFBTSxHQUFHLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFFdEMsTUFBTSx3QkFBd0IsR0FBRyxHQUFHLEVBQUU7WUFFbEMsT0FBTyxDQUNIO2dCQUVJLDZCQUFLLFNBQVMsRUFBQyxXQUFXO29CQUV0Qiw4QkFBTSx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTyxDQUFDLEtBQUssRUFBQyxHQUV6RCxDQUVMO2dCQUVOLDZCQUFLLFNBQVMsRUFBQyxzQkFBc0I7b0JBRWpDLDhCQUFNLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFPLENBQUMsSUFBSSxFQUFDLEdBRXhELENBRUwsQ0FFSixDQUNULENBQUM7UUFFTixDQUFDLENBQUM7UUFFRixNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtZQUUzQixPQUFPLENBQ0g7Z0JBQ0ksNkJBQUssU0FBUyxFQUFDLFdBQVc7b0JBQ3RCLDhCQUFNLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFPLENBQUMsSUFBSSxFQUFDLEdBQ3hELENBQ0wsQ0FDSixDQUNULENBQUM7UUFFTixDQUFDLENBQUM7UUFFRixNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUU7WUFFdEIsSUFBSSxTQUFTLENBQUMsTUFBTyxDQUFDLElBQUksRUFBRTtnQkFDeEIsT0FBTyxDQUFDLG9CQUFDLGlCQUFpQixPQUFFLENBQUMsQ0FBQzthQUNqQztpQkFBTTtnQkFDSCxPQUFPLENBQUMsb0JBQUMsd0JBQXdCLE9BQUUsQ0FBQyxDQUFDO2FBQ3hDO1FBRUwsQ0FBQyxDQUFDO1FBRUYsT0FBTyxDQUVILDZCQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLHVCQUF1QjtZQUU1Qyw2QkFBSyxTQUFTLEVBQUMsK0JBQStCO2dCQUUxQyw2QkFBSyxTQUFTLEVBQUMsZUFBZTtvQkFFMUIsb0JBQUMsWUFBWSxPQUFFLENBRWIsQ0FFSjtZQUVOLDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUNyQixTQUFTLEVBQUMsNkNBQTZDO2dCQUV4RCxvQkFBQyxxQkFBUyxJQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTSxHQUFHO2dCQUV0Qyw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsWUFBWTtvQkFDL0Msb0JBQUMseUNBQW1CLElBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FDaEQ7Z0JBRU4sNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLDJCQUEyQjtvQkFFN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO29CQUV0QixvQkFBQyxxQ0FBaUIsSUFBQyxFQUFFLEVBQUUscUJBQXFCLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFDeEMsUUFBUSxFQUFFLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUNsQyxTQUFTLEVBQUUsU0FBUyxFQUNwQixRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUM1RCxDQUVKLENBRUosQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUVPLFFBQVEsQ0FBQyxTQUF3QjtRQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FHSjtBQTdHRCxzQ0E2R0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5pbXBvcnQge0RvY0Fubm90YXRpb259IGZyb20gJy4uLy4uL0RvY0Fubm90YXRpb24nO1xuaW1wb3J0IHtGbGFzaGNhcmREcm9wZG93bn0gZnJvbSAnLi9GbGFzaGNhcmREcm9wZG93bic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi8uLi9yZWFjdC9JU3R5bGVNYXAnO1xuaW1wb3J0IHtEb2N9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0RvYyc7XG5pbXBvcnQge0RvY0Fubm90YXRpb25Nb21lbnR9IGZyb20gXCIuLi8uLi9Eb2NBbm5vdGF0aW9uTW9tZW50XCI7XG5pbXBvcnQge0RvY0F1dGhvcn0gZnJvbSBcIi4uLy4uL0RvY0F1dGhvclwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuXG4gICAgYmFyQm9keToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuXG4gICAgYmFyQ2hpbGQ6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxuICAgIH1cblxufTtcblxuLyoqXG4gKiBBIGdlbmVyaWMgd3JhcHBlciB0aGF0IGRldGVybWluZXMgd2hpY2ggc3ViLWNvbXBvbmVudCB0byByZW5kZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWV3Rmxhc2hjYXJkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9uRGVsZXRlID0gdGhpcy5vbkRlbGV0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGZsYXNoY2FyZCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBrZXkgPSAnY29tbWVudC0nICsgZmxhc2hjYXJkLmlkO1xuXG4gICAgICAgIGNvbnN0IFJlbmRlckZyb250QW5kQmFja0ZpZWxkcyA9ICgpID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMiBwdC0yXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBmbGFzaGNhcmQuZmllbGRzIS5mcm9udH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0yIHB0LTIgYm9yZGVyLXRvcFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZmxhc2hjYXJkLmZpZWxkcyEuYmFja319PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBSZW5kZXJDbG96ZUZpZWxkcyA9ICgpID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTIgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGZsYXNoY2FyZC5maWVsZHMhLnRleHR9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgUmVuZGVyRmllbGRzID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoZmxhc2hjYXJkLmZpZWxkcyEudGV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPFJlbmRlckNsb3plRmllbGRzLz4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxSZW5kZXJGcm9udEFuZEJhY2tGaWVsZHMvPik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJtdC0xIG11dGVkLWNvbG9yLXJvb3RcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxhc2hjYXJkIGNhcmQgc2hhZG93LXNtIG1iLTFcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBwLTFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlbmRlckZpZWxkcy8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5iYXJCb2R5fVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleGJhciBjb21tZW50LWJhciBib3JkZXItYm90dG9tIHBiLTAgbWItMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxEb2NBdXRob3IgYXV0aG9yPXtmbGFzaGNhcmQuYXV0aG9yfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLmJhckNoaWxkfSBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RG9jQW5ub3RhdGlvbk1vbWVudCBjcmVhdGVkPXtmbGFzaGNhcmQuY3JlYXRlZH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuYmFyQ2hpbGR9IGNsYXNzTmFtZT1cImZsZXhiYXItcmlnaHQgbXV0ZWQtY29sb3JcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZWRpdEJ1dHRvbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsYXNoY2FyZERyb3Bkb3duIGlkPXsnZmxhc2hjYXJkLWRyb3Bkb3duLScgKyBmbGFzaGNhcmQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEgdGhpcy5wcm9wcy5kb2MubXV0YWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFzaGNhcmQ9e2ZsYXNoY2FyZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gdGhpcy5vbkRlbGV0ZShmbGFzaGNhcmQpfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EZWxldGUoZmxhc2hjYXJkOiBEb2NBbm5vdGF0aW9uKSB7XG4gICAgICAgIGxvZy5pbmZvKFwiRmxhc2hjYXJkIGRlbGV0ZWQ6IFwiLCBmbGFzaGNhcmQpO1xuICAgICAgICBkZWxldGUgZmxhc2hjYXJkLnBhZ2VNZXRhLmZsYXNoY2FyZHNbZmxhc2hjYXJkLmlkXTtcbiAgICB9XG5cblxufVxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgZmxhc2hjYXJkOiBEb2NBbm5vdGF0aW9uO1xuICAgIHJlYWRvbmx5IGRvYzogRG9jO1xuICAgIHJlYWRvbmx5IGVkaXRCdXR0b246IEpTWC5FbGVtZW50O1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuXG5cbiJdfQ==