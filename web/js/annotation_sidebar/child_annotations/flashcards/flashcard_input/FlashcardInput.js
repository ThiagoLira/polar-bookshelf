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
const FlashcardType_1 = require("polar-shared/src/metadata/FlashcardType");
const FlashcardInputForCloze_1 = require("./FlashcardInputForCloze");
const FlashcardInputForFrontAndBack_1 = require("./FlashcardInputForFrontAndBack");
const log = Logger_1.Logger.create();
class FlashcardInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onFlashcard = this.onFlashcard.bind(this);
        this.state = {
            iter: 0,
            flashcardType: this.props.flashcardType || this.defaultFlashcardType()
        };
    }
    render() {
        if (this.state.flashcardType === FlashcardType_1.FlashcardType.BASIC_FRONT_BACK) {
            return (React.createElement(FlashcardInputForFrontAndBack_1.FlashcardInputForFrontAndBack, { id: this.props.id, cancelButton: this.props.cancelButton, existingFlashcard: this.props.existingFlashcard, defaultValue: this.props.defaultValue, onFlashcard: (flashcardType, fields) => this.onFlashcard(flashcardType, fields), onFlashcardChangeType: flashcardType => this.onFlashcardChangeType(flashcardType) }));
        }
        else {
            return (React.createElement(FlashcardInputForCloze_1.FlashcardInputForCloze, { id: this.props.id, cancelButton: this.props.cancelButton, existingFlashcard: this.props.existingFlashcard, defaultValue: this.props.defaultValue, onFlashcard: (flashcardType, fields) => this.onFlashcard(flashcardType, fields), onFlashcardChangeType: flashcardType => this.onFlashcardChangeType(flashcardType) }));
        }
    }
    onFlashcardChangeType(flashcardType) {
        this.setState(Object.assign(Object.assign({}, this.state), { flashcardType }));
        this.setDefaultFlashcardType(flashcardType);
    }
    defaultFlashcardType() {
        const defaultFlashcardType = window.localStorage.getItem('default-flashcard-type');
        switch (defaultFlashcardType) {
            case FlashcardType_1.FlashcardType.BASIC_FRONT_BACK:
                return FlashcardType_1.FlashcardType.BASIC_FRONT_BACK;
            case FlashcardType_1.FlashcardType.CLOZE:
                return FlashcardType_1.FlashcardType.CLOZE;
            default:
                return FlashcardType_1.FlashcardType.BASIC_FRONT_BACK;
        }
    }
    setDefaultFlashcardType(flashcardType) {
        window.localStorage.setItem('default-flashcard-type', flashcardType);
    }
    onFlashcard(flashcardType, fields) {
        this.props.onFlashcard(flashcardType, fields, this.props.existingFlashcard);
        this.setState({
            iter: this.state.iter + 1
        });
    }
}
exports.FlashcardInput = FlashcardInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkSW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGbGFzaGNhcmRJbnB1dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJEQUFzRDtBQUN0RCwyRUFBc0U7QUFFdEUscUVBQWdFO0FBQ2hFLG1GQUE4RTtBQUc5RSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxjQUFlLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRS9ELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsQ0FBQztZQUlQLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7U0FDekUsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsS0FBSyw2QkFBYSxDQUFDLGdCQUFnQixFQUFFO1lBRTdELE9BQU8sQ0FBRSxvQkFBQyw2REFBNkIsSUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQ2pCLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDckMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFDL0MsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUNyQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsRUFDL0UscUJBQXFCLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBRSxDQUFDO1NBRWxJO2FBQU07WUFFSCxPQUFPLENBQUUsb0JBQUMsK0NBQXNCLElBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUNqQixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQ3JDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQy9DLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDckMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLEVBQy9FLHFCQUFxQixFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUUsQ0FBQztTQUUzSDtJQUVMLENBQUM7SUFFTyxxQkFBcUIsQ0FBQyxhQUE0QjtRQUN0RCxJQUFJLENBQUMsUUFBUSxpQ0FBSyxJQUFJLENBQUMsS0FBSyxLQUFFLGFBQWEsSUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sb0JBQW9CO1FBRXhCLE1BQU0sb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUVuRixRQUFRLG9CQUFvQixFQUFFO1lBRTFCLEtBQUssNkJBQWEsQ0FBQyxnQkFBZ0I7Z0JBQy9CLE9BQU8sNkJBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUUxQyxLQUFLLDZCQUFhLENBQUMsS0FBSztnQkFDcEIsT0FBTyw2QkFBYSxDQUFDLEtBQUssQ0FBQztZQUUvQjtnQkFDSSxPQUFPLDZCQUFhLENBQUMsZ0JBQWdCLENBQUM7U0FDN0M7SUFFTCxDQUFDO0lBRU8sdUJBQXVCLENBQUMsYUFBNEI7UUFDeEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVPLFdBQVcsQ0FBQyxhQUE0QixFQUM1QixNQUEwQztRQUUxRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUU1RSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBL0VELHdDQStFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtGbGFzaGNhcmRUeXBlfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0ZsYXNoY2FyZFR5cGUnO1xuaW1wb3J0IHtGbGFzaGNhcmRJbnB1dEZpZWxkc1R5cGV9IGZyb20gJy4vRmxhc2hjYXJkSW5wdXRzJztcbmltcG9ydCB7Rmxhc2hjYXJkSW5wdXRGb3JDbG96ZX0gZnJvbSAnLi9GbGFzaGNhcmRJbnB1dEZvckNsb3plJztcbmltcG9ydCB7Rmxhc2hjYXJkSW5wdXRGb3JGcm9udEFuZEJhY2t9IGZyb20gJy4vRmxhc2hjYXJkSW5wdXRGb3JGcm9udEFuZEJhY2snO1xuaW1wb3J0IHtGbGFzaGNhcmR9IGZyb20gJy4uLy4uLy4uLy4uL21ldGFkYXRhL0ZsYXNoY2FyZCc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEZsYXNoY2FyZElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub25GbGFzaGNhcmQgPSB0aGlzLm9uRmxhc2hjYXJkLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGl0ZXI6IDAsXG5cbiAgICAgICAgICAgIC8vIFRPRE86IG1heWJlIHJlYWQgdGhpcyBmcm9tIGxvY2FsU3RvcmFnZSBzbyB0aGUgdXNlcnMgcHJlZnNcbiAgICAgICAgICAgIC8vIGFyZSBrZXB0XG4gICAgICAgICAgICBmbGFzaGNhcmRUeXBlOiB0aGlzLnByb3BzLmZsYXNoY2FyZFR5cGUgfHwgdGhpcy5kZWZhdWx0Rmxhc2hjYXJkVHlwZSgpXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZsYXNoY2FyZFR5cGUgPT09IEZsYXNoY2FyZFR5cGUuQkFTSUNfRlJPTlRfQkFDSykge1xuXG4gICAgICAgICAgICByZXR1cm4gKCA8Rmxhc2hjYXJkSW5wdXRGb3JGcm9udEFuZEJhY2sgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uPXt0aGlzLnByb3BzLmNhbmNlbEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0ZsYXNoY2FyZD17dGhpcy5wcm9wcy5leGlzdGluZ0ZsYXNoY2FyZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmxhc2hjYXJkPXsoZmxhc2hjYXJkVHlwZSwgZmllbGRzKSA9PiB0aGlzLm9uRmxhc2hjYXJkKGZsYXNoY2FyZFR5cGUsIGZpZWxkcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GbGFzaGNhcmRDaGFuZ2VUeXBlPXtmbGFzaGNhcmRUeXBlID0+IHRoaXMub25GbGFzaGNhcmRDaGFuZ2VUeXBlKGZsYXNoY2FyZFR5cGUpfS8+ICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuICggPEZsYXNoY2FyZElucHV0Rm9yQ2xvemUgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b249e3RoaXMucHJvcHMuY2FuY2VsQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdGbGFzaGNhcmQ9e3RoaXMucHJvcHMuZXhpc3RpbmdGbGFzaGNhcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GbGFzaGNhcmQ9eyhmbGFzaGNhcmRUeXBlLCBmaWVsZHMpID0+IHRoaXMub25GbGFzaGNhcmQoZmxhc2hjYXJkVHlwZSwgZmllbGRzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmxhc2hjYXJkQ2hhbmdlVHlwZT17Zmxhc2hjYXJkVHlwZSA9PiB0aGlzLm9uRmxhc2hjYXJkQ2hhbmdlVHlwZShmbGFzaGNhcmRUeXBlKX0vPiApO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgb25GbGFzaGNhcmRDaGFuZ2VUeXBlKGZsYXNoY2FyZFR5cGU6IEZsYXNoY2FyZFR5cGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgZmxhc2hjYXJkVHlwZX0pO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRGbGFzaGNhcmRUeXBlKGZsYXNoY2FyZFR5cGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVmYXVsdEZsYXNoY2FyZFR5cGUoKSB7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdEZsYXNoY2FyZFR5cGUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlZmF1bHQtZmxhc2hjYXJkLXR5cGUnKTtcblxuICAgICAgICBzd2l0Y2ggKGRlZmF1bHRGbGFzaGNhcmRUeXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgRmxhc2hjYXJkVHlwZS5CQVNJQ19GUk9OVF9CQUNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBGbGFzaGNhcmRUeXBlLkJBU0lDX0ZST05UX0JBQ0s7XG5cbiAgICAgICAgICAgIGNhc2UgRmxhc2hjYXJkVHlwZS5DTE9aRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gRmxhc2hjYXJkVHlwZS5DTE9aRTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gRmxhc2hjYXJkVHlwZS5CQVNJQ19GUk9OVF9CQUNLO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldERlZmF1bHRGbGFzaGNhcmRUeXBlKGZsYXNoY2FyZFR5cGU6IEZsYXNoY2FyZFR5cGUpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWZhdWx0LWZsYXNoY2FyZC10eXBlJywgZmxhc2hjYXJkVHlwZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkZsYXNoY2FyZChmbGFzaGNhcmRUeXBlOiBGbGFzaGNhcmRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBSZWFkb25seTxGbGFzaGNhcmRJbnB1dEZpZWxkc1R5cGU+KTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkZsYXNoY2FyZChmbGFzaGNhcmRUeXBlLCBmaWVsZHMsIHRoaXMucHJvcHMuZXhpc3RpbmdGbGFzaGNhcmQpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXRlcjogdGhpcy5zdGF0ZS5pdGVyICsgMVxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgdG8gc2hvdyBpbiB0aGUgZmxhc2hjYXJkXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgZmxhc2hjYXJkVHlwZT86IEZsYXNoY2FyZFR5cGU7XG5cbiAgICByZWFkb25seSBvbkZsYXNoY2FyZDogRmxhc2hjYXJkQ2FsbGJhY2s7XG5cbiAgICByZWFkb25seSBjYW5jZWxCdXR0b246IEpTWC5FbGVtZW50O1xuXG4gICAgcmVhZG9ubHkgZXhpc3RpbmdGbGFzaGNhcmQ/OiBGbGFzaGNhcmQ7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IGl0ZXI6IG51bWJlcjtcbiAgICByZWFkb25seSBmbGFzaGNhcmRUeXBlOiBGbGFzaGNhcmRUeXBlO1xufVxuXG5leHBvcnQgdHlwZSBGbGFzaGNhcmRDYWxsYmFjayA9IChmbGFzaGNhcmRUeXBlOiBGbGFzaGNhcmRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBSZWFkb25seTxGbGFzaGNhcmRJbnB1dEZpZWxkc1R5cGU+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdGbGFzaGNhcmQ/OiBGbGFzaGNhcmQpID0+IHZvaWQ7XG4iXX0=