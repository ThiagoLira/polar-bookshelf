"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
class ReactComponents {
    static shouldComponentUpdate(props, nextProps, keys) {
        return !Dictionaries_1.Dictionaries.equals(props, nextProps, keys);
    }
}
exports.ReactComponents = ReactComponents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3RDb21wb25lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVhY3RDb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUVBQWdFO0FBRWhFLE1BQWEsZUFBZTtJQUVqQixNQUFNLENBQUMscUJBQXFCLENBQUksS0FBa0IsRUFDbEIsU0FBc0IsRUFDdEIsSUFBMkI7UUFFOUQsT0FBTyxDQUFFLDJCQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFekQsQ0FBQztDQUVKO0FBVkQsMENBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpY3Rpb25hcmllc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9EaWN0aW9uYXJpZXNcIjtcblxuZXhwb3J0IGNsYXNzIFJlYWN0Q29tcG9uZW50cyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHNob3VsZENvbXBvbmVudFVwZGF0ZTxQPihwcm9wczogUmVhZG9ubHk8UD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFByb3BzOiBSZWFkb25seTxQPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiBSZWFkb25seUFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcblxuICAgICAgICByZXR1cm4gISBEaWN0aW9uYXJpZXMuZXF1YWxzKHByb3BzLCBuZXh0UHJvcHMsIGtleXMpO1xuXG4gICAgfVxuXG59XG5cbiJdfQ==