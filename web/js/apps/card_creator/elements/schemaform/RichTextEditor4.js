"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TypedWidgetProps_1 = require("./TypedWidgetProps");
const Logger_1 = require("polar-shared/src/logger/Logger");
const ReactSummernote4_1 = require("./ReactSummernote4");
const Functions_1 = require("polar-shared/src/util/Functions");
const log = Logger_1.Logger.create();
class RichTextEditor4 extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.value = "";
        if (props.id) {
            this.id = props.id;
        }
        else {
            throw new Error("No ID");
        }
        this.typedWidgetProps = new TypedWidgetProps_1.TypedWidgetProps(props);
        if (this.typedWidgetProps.value) {
            this.value = this.typedWidgetProps.value;
        }
        this.onChange = this.onChange.bind(this);
        this.onImageUpload = this.onImageUpload.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }
    onChange(newValue) {
        this.value = newValue;
        if (this.props.onChange) {
            this.props.onChange(newValue);
        }
    }
    onBlur() {
        if (this.props.onBlur) {
            this.props.onBlur(this.id, this.value);
        }
    }
    onFocus() {
        if (this.props.onFocus) {
            this.props.onFocus(this.id, this.value);
        }
    }
    onImageUpload(images, insertImage) {
        log.debug('onImageUpload', images);
        for (let i = 0; i < images.length; i++) {
            const reader = new FileReader();
            reader.onloadend = () => {
                insertImage(reader.result);
            };
            reader.readAsDataURL(images[i]);
        }
    }
    render() {
        const onKeyDown = this.props.onKeyDown ? this.props.onKeyDown : Functions_1.NULL_FUNCTION;
        return (react_1.default.createElement(ReactSummernote4_1.ReactSummernote4, { value: this.props.value || '', defaultValue: this.props.defaultValue, options: {
                id: this.typedWidgetProps.id,
                lang: 'en-US',
                height: 180,
                disableResizeEditor: true,
                placeholder: this.props.placeholder || '',
                dialogsInBody: false,
                airMode: false,
                tabSize: 0,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'italic', 'underline']],
                    ['para', ['paragraph']],
                    ['table', ['table']],
                    ['insert', ['link', 'picture']],
                    ['view', []]
                ]
            }, autofocus: this.props.autofocus, onChange: this.onChange, onKeyDown: (event) => onKeyDown(event.originalEvent), onBlur: this.onBlur, onFocus: this.onFocus, onImageUpload: this.onImageUpload, onRichTextMutator: this.props.onRichTextMutator }));
    }
}
exports.RichTextEditor4 = RichTextEditor4;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmljaFRleHRFZGl0b3I0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmljaFRleHRFZGl0b3I0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLGtEQUEwQjtBQUMxQix5REFBb0Q7QUFDcEQsMkRBQXNEO0FBQ3RELHlEQUFvRDtBQUNwRCwrREFBOEQ7QUFHOUQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSzVCLE1BQWEsZUFBZ0IsU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFRaEUsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUxULFVBQUssR0FBVyxFQUFFLENBQUM7UUFPdkIsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFO1lBQ1YsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztTQUM1QztRQUlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJ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SUFBSSxDQUFDLE1BQU0sRUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBRXJCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUNqQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUNqRCxDQUVMLENBQUM7SUFFTixDQUFDO0NBRUo7QUEvSkQsMENBK0pDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIG91ciBtYWluIHdpZGdldCBmb3IgaGFuZGxpbmcgdGV4dCBmaWVsZHMgd2hpY2ggYXJlIEhUTUwuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1R5cGVkV2lkZ2V0UHJvcHN9IGZyb20gJy4vVHlwZWRXaWRnZXRQcm9wcyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UmVhY3RTdW1tZXJub3RlNH0gZnJvbSAnLi9SZWFjdFN1bW1lcm5vdGU0JztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge1JpY2hUZXh0TXV0YXRvcn0gZnJvbSAnLi9SaWNoVGV4dE11dGF0b3InO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogUmljaCB0ZXh0IGVkaXRvciBjb21wb25lbnQgYmFzZWQgb2YgUmVhY3RTdW1tZXJub3RlNFxuICovXG5leHBvcnQgY2xhc3MgUmljaFRleHRFZGl0b3I0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiAge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB0eXBlZFdpZGdldFByb3BzOiBUeXBlZFdpZGdldFByb3BzO1xuXG4gICAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nID0gXCJcIjtcblxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIGlmIChwcm9wcy5pZCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHByb3BzLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gSURcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnR5cGVkV2lkZ2V0UHJvcHMgPSBuZXcgVHlwZWRXaWRnZXRQcm9wcyhwcm9wcyk7XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZWRXaWRnZXRQcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudHlwZWRXaWRnZXRQcm9wcy52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5lZWRlZCBiZWNhdXNlIFJlYWN0IGNoYW5nZXMgJ3RoaXMnIHRvIHRoZSBFbGVtZW50IGl0IGNyZWF0ZWQgd2hpY2hcbiAgICAgICAgLy8gaXMgYSBiaXQgY29uZnVzaW5nLlxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uSW1hZ2VVcGxvYWQgPSB0aGlzLm9uSW1hZ2VVcGxvYWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIC8vIEZJWE1FOiB0aGVyZSBpcyBhbiBlcnJvclNjaGVtYSBoZXJlIHRvbyB3aGljaCBJIG1pZ2h0IHdhbnQgdG8gbG9vayBhdC5cbiAgICBwcml2YXRlIG9uQ2hhbmdlKG5ld1ZhbHVlOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBGSVhNRTogc3VtbWVybm90ZSBoYXMgaXNFbXB0eSBhbmQgc29tZSBvdGhlciBtZXRob2RzIEkgbmVlZCB0byB1c2VcbiAgICAgICAgLy8gaGVyZS5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25DaGFuZ2U6IG5ld1ZhbHVlOiAnLCBuZXdWYWx1ZSk7XG5cbiAgICAgICAgLy8gbG9nLmRlYnVnKCdvbkNoYW5nZScsIG5ld1ZhbHVlKTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQmx1cigpIHtcbiAgICAgICAgLy8gbG9nLmluZm8oXCJvbkJsdXJcIik7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cih0aGlzLmlkLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRm9jdXMoKSB7XG4gICAgICAgIC8vIGxvZy5pbmZvKFwib25Gb2N1c1wiKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXModGhpcy5pZCwgdGhpcy52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGRvY3VtZW50ZWQgaGVyZTpcbiAgICAgKlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zdW1tZXJub3RlL3JlYWN0LXN1bW1lcm5vdGUvaXNzdWVzLzM4XG4gICAgICovXG4gICAgcHVibGljIG9uSW1hZ2VVcGxvYWQoaW1hZ2VzOiBhbnlbXSwgaW5zZXJ0SW1hZ2U6IEZ1bmN0aW9uKSB7XG5cbiAgICAgICAgbG9nLmRlYnVnKCdvbkltYWdlVXBsb2FkJywgaW1hZ2VzKTtcbiAgICAgICAgLyogRmlsZUxpc3QgZG9lcyBub3Qgc3VwcG9ydCBvcmRpbmFyeSBhcnJheSBtZXRob2RzICovXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvKiBTdG9yZXMgYXMgYmFzNjRlbmMgc3RyaW5nIGluIHRoZSB0ZXh0LlxuICAgICAgICAgICAgICogU2hvdWxkIHBvdGVudGlhbGx5IGJlIHN0b3JlZCBzZXBhcmF0ZWx5IGFuZCBpbmNsdWRlIGp1c3QgdGhlIHVybFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGluc2VydEltYWdlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW1hZ2VzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3VtbWVybm90ZS9yZWFjdC1zdW1tZXJub3RlL2lzc3Vlcy8zOFxuXG4gICAgICAgIGNvbnN0IG9uS2V5RG93bjogKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkID1cbiAgICAgICAgICAgIHRoaXMucHJvcHMub25LZXlEb3duID8gdGhpcy5wcm9wcy5vbktleURvd24gOiBOVUxMX0ZVTkNUSU9OO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3RTdW1tZXJub3RlNFxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlIHx8ICcnfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy50eXBlZFdpZGdldFByb3BzLmlkLFxuICAgICAgICAgICAgICAgICAgICBsYW5nOiAnZW4tVVMnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MCxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJlc2l6ZUVkaXRvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucHJvcHMucGxhY2Vob2xkZXIgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3NJbkJvZHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBhaXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlZCB0byBmaXggaXNzdWVzIHdpdGggdGFiIG5hdmlnYXRpb25cbiAgICAgICAgICAgICAgICAgICAgdGFiU2l6ZTogMCxcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9vbGJhcjogW1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWydzdHlsZScsIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsnZm9udCcsIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsnZm9udG5hbWUnLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ3BhcmEnLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ3RhYmxlJywgW11dLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWydpbnNlcnQnLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ3ZpZXcnLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ2ltYWdlJywgW11dXG4gICAgICAgICAgICAgICAgICAgIC8vIF1cblxuICAgICAgICAgICAgICAgICAgICAvLyBGSVhNRTogc29tZWhvdyBpbWFnZXMgcGFzdGUgaGFzIGJyb2tlbiBub3cuLi5cblxuICAgICAgICAgICAgICAgICAgICAvLyBGSVhNRTogYWRkIGJsb2NrcXVvdGUsIGNvZGUsIGFuZCBwcmUsIGFuZCBjaXRlXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbWlzc2luZyB0aGUgaGlnaGxpZ2h0IGNvbG9yIHB1bGxkb3duLi4uXG5cbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgWydzdHlsZScsIFsnc3R5bGUnXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBbJ2ZvbnQnLCBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdjbGVhcicsICdjb2xvcicsICdzdXBlcnNjcmlwdCcsICdzdWJzY3JpcHQnXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2ZvbnQnLCBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZSddXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFsnZm9udG5hbWUnLCBbJ2ZvbnRuYW1lJ11dLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gWydwYXJhJywgWyd1bCcsICdvbCcsICdwYXJhZ3JhcGgnXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3BhcmEnLCBbJ3BhcmFncmFwaCddXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsndGFibGUnLCBbJ3RhYmxlJ11dLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gWydpbnNlcnQnLCBbJ2xpbmsnLCAncGljdHVyZScsICd2aWRlbyddXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaW5zZXJ0JywgWydsaW5rJywgJ3BpY3R1cmUnXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3ZpZXcnLCBbXV1cbiAgICAgICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhdXRvZm9jdXM9e3RoaXMucHJvcHMuYXV0b2ZvY3VzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGV2ZW50OiBhbnkpID0+IG9uS2V5RG93bihldmVudC5vcmlnaW5hbEV2ZW50KX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICAgICAgICAvLyBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cbiAgICAgICAgICAgICAgICBvbkltYWdlVXBsb2FkPXt0aGlzLm9uSW1hZ2VVcGxvYWR9XG4gICAgICAgICAgICAgICAgb25SaWNoVGV4dE11dGF0b3I9e3RoaXMucHJvcHMub25SaWNoVGV4dE11dGF0b3J9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgICByZWFkb25seSBhdXRvZm9jdXM/OiBib29sZWFuO1xuICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgICByZWFkb25seSBvbktleURvd24/OiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgb25DaGFuZ2U/OiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbkJsdXI/OiAoaWQ6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbkZvY3VzPzogKGlkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgb25SaWNoVGV4dE11dGF0b3I/OiAobXV0YXRvcjogUmljaFRleHRNdXRhdG9yKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuXG5pbnRlcmZhY2UgT25DaGFuZ2VDYWxsYmFjayB7XG4gICAgKG5ld1ZhbHVlOiBzdHJpbmcpOiB2b2lkO1xufVxuXG4vKipcbiAqIFVzZWQgZm9yIG9uRm9jdXMgYW5kIG9uQmx1clxuICovXG5pbnRlcmZhY2UgT25TZWxlY3Rpb25DYWxsYmFjayB7XG4gICAgKGlkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xufVxuXG4iXX0=