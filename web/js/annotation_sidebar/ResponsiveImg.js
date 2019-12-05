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
const FastComponent_1 = require("../react/FastComponent");
class ResponsiveImg extends FastComponent_1.FastComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const { img, id, color } = this.props;
        if (img) {
            const width = Math.floor(img.width);
            const height = Math.floor(img.height);
            return (React.createElement("div", { className: "area-highlight m-1", "data-annotation-id": id, "data-annotation-color": color, style: {
                    display: 'block',
                    textAlign: 'center',
                    position: 'relative'
                } },
                React.createElement("img", { style: {
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        maxWidth: width,
                        maxHeight: height,
                        boxSizing: 'content-box',
                    }, draggable: false, className: "", width: width, height: height, alt: "screenshot", src: img.src })));
        }
        else {
            return React.createElement("div", null, this.props.defaultText || 'No image');
        }
    }
}
exports.ResponsiveImg = ResponsiveImg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2l2ZUltZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlc3BvbnNpdmVJbWcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQiwwREFBcUQ7QUFNckQsTUFBYSxhQUFjLFNBQVEsNkJBQXFCO0lBRXBELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBRU0sTUFBTTtRQUNULE1BQU0sRUFBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFcEMsSUFBSSxHQUFHLEVBQUU7WUFDTCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV0QyxPQUFPLENBTUgsNkJBQUssU0FBUyxFQUFDLG9CQUFvQix3QkFDVixFQUFFLDJCQUNDLEtBQUssRUFDNUIsS0FBSyxFQUFFO29CQUNKLE9BQU8sRUFBRSxPQUFPO29CQUNoQixTQUFTLEVBQUUsUUFBUTtvQkFDbkIsUUFBUSxFQUFFLFVBQVU7aUJBRXRCO2dCQUVGLDZCQUFLLEtBQUssRUFBRTt3QkFLSCxLQUFLLEVBQUUsTUFBTTt3QkFDYixNQUFNLEVBQUUsTUFBTTt3QkFDZCxTQUFTLEVBQUUsU0FBUzt3QkFDcEIsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsU0FBUyxFQUFFLE1BQU07d0JBSWpCLFNBQVMsRUFBRSxhQUFhO3FCQUczQixFQUNELFNBQVMsRUFBRSxLQUFLLEVBQ2hCLFNBQVMsRUFBQyxFQUFFLEVBQ1osS0FBSyxFQUFFLEtBQUssRUFDWixNQUFNLEVBQUUsTUFBTSxFQUNkLEdBQUcsRUFBQyxZQUFZLEVBQ2hCLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBRWxCLENBRVQsQ0FBQztTQUNMO2FBQU07WUFDSCxPQUFPLGlDQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLFVBQVUsQ0FBTyxDQUFDO1NBQzVEO0lBRUwsQ0FBQztDQUVKO0FBakVELHNDQWlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SW1nfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0ltZyc7XG5pbXBvcnQge0Zhc3RDb21wb25lbnR9IGZyb20gJy4uL3JlYWN0L0Zhc3RDb21wb25lbnQnO1xuaW1wb3J0IHtIaWdobGlnaHRDb2xvcn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSUJhc2VIaWdobGlnaHRcIjtcblxuLyoqXG4gKiBTaG93cyBhIGFuZCBpbWFnZSBhbmQgcmUtc2l6ZXMgaXQgdG8gaXRzIHBhcmVudCBwcm9wZXJseS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVJbWcgZXh0ZW5kcyBGYXN0Q29tcG9uZW50PElQcm9wcz4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aW1nLCBpZCwgY29sb3J9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoaW1nKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IE1hdGguZmxvb3IoaW1nLndpZHRoKTtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGguZmxvb3IoaW1nLmhlaWdodCk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3ZSBuZWVkIHRoZSBhYmlsaXR5IHRvIHNjcm9sbCB0byB0aGUgbW9zdCByZWNlbnRcbiAgICAgICAgICAgICAgICAvLyBhbm5vdGF0aW9uIHRoYXQgaXMgY3JlYXRlZCBidXQgSSBuZWVkIGEgZnVuY3Rpb25hbCB3YXkgdG8gZG9cbiAgICAgICAgICAgICAgICAvLyB0aGlzIGJlY2F1c2UgaG93IGRvIEkgZGV0ZXJtaW5lIHdoZW4gaXQgbG9zZXMgZm9jdXM/XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZWEtaGlnaGxpZ2h0IG0tMVwiXG4gICAgICAgICAgICAgICAgICAgICBkYXRhLWFubm90YXRpb24taWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbm5vdGF0aW9uLWNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG5cbiAgICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3tcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb3JlIENTUyBwcm9wZXJ0aWVzIGZvciB0aGUgaW1hZ2Ugc28gdGhhdCBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpcyByZXNwb25zaXZlLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb250YWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IGhlaWdodCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXIgYXJvdW5kIHRoZSBpbWFnZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiBgMXB4IHNvbGlkICNjNmM2YzZgLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInNjcmVlbnNob3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nLnNyY30vPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdj57dGhpcy5wcm9wcy5kZWZhdWx0VGV4dCB8fCAnTm8gaW1hZ2UnfTwvZGl2PjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGltZz86IEltZztcbiAgICByZWFkb25seSBjb2xvcj86IEhpZ2hsaWdodENvbG9yO1xuICAgIHJlYWRvbmx5IGRlZmF1bHRUZXh0Pzogc3RyaW5nO1xufVxuIl19