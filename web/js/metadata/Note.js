"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextType_1 = require("polar-shared/src/metadata/TextType");
const VersionedObject_1 = require("./VersionedObject");
const Texts_1 = require("polar-shared/src/metadata/Texts");
class Note extends VersionedObject_1.VersionedObject {
    constructor(val) {
        super(val);
        this.content = val.content;
        this.init(val);
    }
    setup() {
        if (!this.content) {
            this.content = Texts_1.Texts.create("", TextType_1.TextType.HTML);
        }
    }
    validate() {
        if (!this.created) {
            throw new Error("The field `created` is required.");
        }
    }
}
exports.Note = Note;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5vdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRUFBNEQ7QUFDNUQsdURBQWtEO0FBRWxELDJEQUFzRDtBQU10RCxNQUFhLElBQUssU0FBUSxpQ0FBZTtJQUlyQyxZQUFZLEdBQVM7UUFFakIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVgsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbkIsQ0FBQztJQUVNLEtBQUs7UUFFUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsbUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsRDtJQUVMLENBQUM7SUFFTSxRQUFRO1FBRVgsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDdkQ7SUFFTCxDQUFDO0NBRUo7QUE5QkQsb0JBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXh0VHlwZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9UZXh0VHlwZSc7XG5pbXBvcnQge1ZlcnNpb25lZE9iamVjdH0gZnJvbSAnLi9WZXJzaW9uZWRPYmplY3QnO1xuaW1wb3J0IHtUZXh0fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1RleHQnO1xuaW1wb3J0IHtUZXh0c30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9UZXh0cyc7XG5pbXBvcnQge0lOb3RlfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JTm90ZVwiO1xuXG4vKipcbiAqIFByaXZhdGUgbm90ZSBkZXNjcmliaW5nIHRoaXMgb2JqZWN0LiAgTWVhbnQgdG8gbGFzdCBhIGxvbmcgdGltZS5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vdGUgZXh0ZW5kcyBWZXJzaW9uZWRPYmplY3QgaW1wbGVtZW50cyBJTm90ZSB7XG5cbiAgICBwdWJsaWMgY29udGVudDogVGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKHZhbDogTm90ZSkge1xuXG4gICAgICAgIHN1cGVyKHZhbCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50ID0gdmFsLmNvbnRlbnQ7XG5cbiAgICAgICAgdGhpcy5pbml0KHZhbCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0dXAoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IFRleHRzLmNyZWF0ZShcIlwiLCBUZXh0VHlwZS5IVE1MKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXRlKCkge1xuXG4gICAgICAgIGlmKCF0aGlzLmNyZWF0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBmaWVsZCBgY3JlYXRlZGAgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuIl19