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
class PropertyTable extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("table", { className: "" },
            React.createElement("tbody", null, this.props.children)));
    }
}
exports.PropertyTable = PropertyTable;
PropertyTable.Row = class extends React.Component {
    render() {
        if (this.props.value === undefined) {
            return [];
        }
        const value = Values.toStr(this.props.value);
        return (React.createElement("tr", null,
            React.createElement("td", { className: "font-weight-bold text-grey800 pt-1 pr-1" },
                this.props.name,
                ":"),
            React.createElement("td", { className: "pt-1" },
                React.createElement("div", { style: {
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    } }, value))));
    }
};
PropertyTable.Text = class extends React.Component {
    render() {
        if (this.props.value === undefined) {
            return [];
        }
        const value = Values.toStr(this.props.value);
        return (React.createElement("tr", null,
            React.createElement("td", { colSpan: 2, className: "pt-1" },
                React.createElement("div", { className: "font-weight-bold text-grey800 " },
                    this.props.name,
                    ":"),
                React.createElement("p", null, value))));
    }
};
class Values {
    static toStr(value) {
        if (typeof value === 'string') {
            return value;
        }
        else if (Array.isArray(value)) {
            return value.join(", ");
        }
        else {
            return "";
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHlUYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByb3BlcnR5VGFibGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQixNQUFhLGFBQWMsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFOUQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILCtCQUFPLFNBQVMsRUFBQyxFQUFFO1lBQ2YsbUNBQ0ssSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2hCLENBQ0osQ0FFWCxDQUFDO0lBRU4sQ0FBQzs7QUFuQkwsc0NBZ0dDO0FBM0VpQixpQkFBRyxHQUFHLEtBQU0sU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFdEQsTUFBTTtRQUVULElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ2hDLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0MsT0FBTyxDQUVIO1lBRUksNEJBQUksU0FBUyxFQUFDLHlDQUF5QztnQkFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO29CQUNmO1lBRUwsNEJBQUksU0FBUyxFQUFDLE1BQU07Z0JBRWhCLDZCQUFLLEtBQUssRUFBRTt3QkFDUixVQUFVLEVBQUUsUUFBUTt3QkFDcEIsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFlBQVksRUFBRSxVQUFVO3FCQUMzQixJQUNJLEtBQUssQ0FDSixDQUVMLENBRUosQ0FFUixDQUFDO0lBRU4sQ0FBQztDQUVKLENBQUM7QUFLWSxrQkFBSSxHQUFHLEtBQU0sU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFdkQsTUFBTTtRQUVULElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ2hDLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0MsT0FBTyxDQUVIO1lBRUksNEJBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUMsTUFBTTtnQkFFNUIsNkJBQUssU0FBUyxFQUFDLGdDQUFnQztvQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO3dCQUNkO2dCQUVOLCtCQUNDLEtBQUssQ0FDRixDQUVILENBRUosQ0FFUixDQUFDO0lBRU4sQ0FBQztDQUVKLENBQUM7QUFJTixNQUFNLE1BQU07SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQWlEO1FBQ2pFLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzNCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ0gsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUVMLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5VGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIFJvdyA9IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElSb3dQcm9wcywgYW55PiB7XG5cbiAgICAgICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBWYWx1ZXMudG9TdHIodGhpcy5wcm9wcy52YWx1ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8dHI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ncmV5ODAwIHB0LTEgcHItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX06XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB0LTFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcydcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUZXh0IGJsb2NrIG9mIG11bHRpLWxpbmUgLyBsb25nIGZvcm0gdGV4dCBsaWtlIGEgZGVzY3JpcHRpb24gdGhhdCBuZWVkcyB0byByZWZsb3cuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBUZXh0ID0gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVJvd1Byb3BzLCBhbnk+IHtcblxuICAgICAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IFZhbHVlcy50b1N0cih0aGlzLnByb3BzLnZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDx0cj5cblxuICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gY2xhc3NOYW1lPVwicHQtMVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ncmV5ODAwIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5hbWV9OlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbn1cblxuY2xhc3MgVmFsdWVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgdG9TdHIodmFsdWU6IHN0cmluZyB8IFJlYWRvbmx5QXJyYXk8c3RyaW5nPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuam9pbihcIiwgXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cblxuaW50ZXJmYWNlIElSb3dQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdGl0bGUgaWYgb25lIGlzIG9wdGlvbmFsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmcgfCBSZWFkb25seUFycmF5PHN0cmluZz4gfCB1bmRlZmluZWQ7XG5cbn1cbiJdfQ==