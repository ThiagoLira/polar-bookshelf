"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MouseEventReferenceObject {
    constructor(mouseEvent, range, mouseDirection) {
        this.clientHeight = 0;
        this.clientWidth = 0;
        const boundingClientRect = range.getBoundingClientRect();
        let y = 0;
        const x = mouseEvent.x;
        const buffer = 5;
        switch (mouseDirection) {
            case 'up':
                y = boundingClientRect.top;
                y -= buffer;
                break;
            case 'down':
                y = boundingClientRect.bottom;
                y += buffer;
                break;
        }
        this.boundingClientRect = {
            width: 0,
            height: 0,
            top: y,
            bottom: y,
            left: x,
            right: x,
        };
    }
    getBoundingClientRect() {
        return this.boundingClientRect;
    }
}
exports.MouseEventReferenceObject = MouseEventReferenceObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW91c2VFdmVudFJlZmVyZW5jZU9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vdXNlRXZlbnRSZWZlcmVuY2VPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFhLHlCQUF5QjtJQU1sQyxZQUFZLFVBQXNCLEVBQUUsS0FBWSxFQUFFLGNBQThCO1FBQzVFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFekQsSUFBSSxDQUFDLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLE1BQU0sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFdkIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLFFBQVEsY0FBYyxFQUFFO1lBQ3BCLEtBQUssSUFBSTtnQkFDTCxDQUFDLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDO2dCQUMzQixDQUFDLElBQUksTUFBTSxDQUFDO2dCQUNaLE1BQU07WUFFVixLQUFLLE1BQU07Z0JBQ1AsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztnQkFDOUIsQ0FBQyxJQUFJLE1BQU0sQ0FBQztnQkFDWixNQUFNO1NBRWI7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEdBQUc7WUFDdEIsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztZQUNULEdBQUcsRUFBRSxDQUFDO1lBQ04sTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsQ0FBQztZQUNQLEtBQUssRUFBRSxDQUFDO1NBQ1gsQ0FBQztJQUVOLENBQUM7SUFFTSxxQkFBcUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDbkMsQ0FBQztDQUVKO0FBL0NELDhEQStDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3BwZXIgZnJvbSAncG9wcGVyLmpzJztcbmltcG9ydCB7TW91c2VEaXJlY3Rpb259IGZyb20gJy4vUG9wdXAnO1xuXG5leHBvcnQgY2xhc3MgTW91c2VFdmVudFJlZmVyZW5jZU9iamVjdCAgaW1wbGVtZW50cyBQb3BwZXIuUmVmZXJlbmNlT2JqZWN0IHtcblxuICAgIHB1YmxpYyByZWFkb25seSBjbGllbnRIZWlnaHQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgY2xpZW50V2lkdGg6IG51bWJlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgYm91bmRpbmdDbGllbnRSZWN0OiBDbGllbnRSZWN0O1xuXG4gICAgY29uc3RydWN0b3IobW91c2VFdmVudDogTW91c2VFdmVudCwgcmFuZ2U6IFJhbmdlLCBtb3VzZURpcmVjdGlvbjogTW91c2VEaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jbGllbnRIZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLmNsaWVudFdpZHRoID0gMDtcblxuICAgICAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSByYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBsZXQgeTogbnVtYmVyID0gMDtcblxuICAgICAgICAvLyB0aGUgeCBjb29yZCBzaG91bGQgYWx3YXlzIGJlIGZyb20gdGhlIG1vdXNlLlxuICAgICAgICBjb25zdCB4ID0gbW91c2VFdmVudC54O1xuXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IDU7XG5cbiAgICAgICAgc3dpdGNoIChtb3VzZURpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgICAgICAgIHkgPSBib3VuZGluZ0NsaWVudFJlY3QudG9wO1xuICAgICAgICAgICAgICAgIHkgLT0gYnVmZmVyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgICAgICB5ID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbTtcbiAgICAgICAgICAgICAgICB5ICs9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QgPSB7XG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIHRvcDogeSxcbiAgICAgICAgICAgIGJvdHRvbTogeSxcbiAgICAgICAgICAgIGxlZnQ6IHgsXG4gICAgICAgICAgICByaWdodDogeCxcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKTogQ2xpZW50UmVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvdW5kaW5nQ2xpZW50UmVjdDtcbiAgICB9XG5cbn1cbiJdfQ==