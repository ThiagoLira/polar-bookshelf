"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MutationTypes_1 = require("./MutationTypes");
class TraceEvent {
    constructor(opts) {
        this.path = opts.path;
        this.mutationType = opts.mutationType;
        this.target = opts.target;
        this.property = opts.property;
        this.value = opts.value;
        this.previousValue = opts.previousValue;
        this.mutationState = MutationTypes_1.MutationTypes.toMutationState(this.mutationType);
    }
}
exports.TraceEvent = TraceEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2VFdmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRyYWNlRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxtREFBOEM7QUFFOUMsTUFBYSxVQUFVO0lBcUNuQixZQUFZLElBQVM7UUFFakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyw2QkFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFMUUsQ0FBQztDQUVKO0FBakRELGdDQWlEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGlzdGVuIHRvIGEgbXV0YXRpb24gYW5kIHdlJ3JlIGdpdmVuIGEgbGlzdCBvZiBuYW1lcyBhbmQgdHlwZXMuXG4gKi9cbmltcG9ydCB7TXV0YXRpb25UeXBlfSBmcm9tICcuL011dGF0aW9uVHlwZSc7XG5pbXBvcnQge011dGF0aW9uU3RhdGV9IGZyb20gJy4vTXV0YXRpb25TdGF0ZSc7XG5pbXBvcnQge011dGF0aW9uVHlwZXN9IGZyb20gJy4vTXV0YXRpb25UeXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBUcmFjZUV2ZW50IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IFRoZSBwYXRoIGluIHRoZSBvYmplY3QgdHJlZSBvZiB0aGUgb2JqZWN0IGJlaW5nIG11dGF0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNdXRhdGlvblR5cGV9IFRoZSB0eXBlIG9mIHRoZSBtdXRhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgbXV0YXRpb25UeXBlOiBNdXRhdGlvblR5cGU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fSBUaGUgb2JqZWN0IGJlaW5nIG11dGF0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHRhcmdldDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGZpZWxkIGluIHRoZSBvYmplY3QuXG4gICAgICovXG4gICAgcHVibGljIHByb3BlcnR5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fSBUaGUgbmV3IHZhbHVlIG9mIHRoZSBmaWVsZCBvciB1bmRlZmluZWQgaWYgaXQncyBhIGRlbGV0ZSBvcGVyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fSBUaGUgcHJldmlvdXMgdmFsdWUgb2YgdGhlIGZpZWxkIGJlZm9yZSB0aGUgb3BlcmF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcmV2aW91c1ZhbHVlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TXV0YXRpb25TdGF0ZX0gQSBoaWdoIGxldmVsXG4gICAgICovXG4gICAgcHVibGljIG11dGF0aW9uU3RhdGU6IE11dGF0aW9uU3RhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzOiBhbnkpIHtcblxuICAgICAgICB0aGlzLnBhdGggPSBvcHRzLnBhdGg7XG4gICAgICAgIHRoaXMubXV0YXRpb25UeXBlID0gb3B0cy5tdXRhdGlvblR5cGU7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gb3B0cy50YXJnZXQ7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBvcHRzLnByb3BlcnR5O1xuICAgICAgICB0aGlzLnZhbHVlID0gb3B0cy52YWx1ZTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gb3B0cy5wcmV2aW91c1ZhbHVlO1xuICAgICAgICB0aGlzLm11dGF0aW9uU3RhdGUgPSBNdXRhdGlvblR5cGVzLnRvTXV0YXRpb25TdGF0ZSh0aGlzLm11dGF0aW9uVHlwZSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==