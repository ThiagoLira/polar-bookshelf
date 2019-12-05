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
const MousePositions_1 = require("./MousePositions");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class Styles {
}
Styles.Dock = {
    display: 'flex',
    flexGrow: 1,
    height: '100%'
};
class Dock extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.mousePosition = MousePositions_1.MousePositions.get();
        this.mouseDown = false;
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.toggle = this.toggle.bind(this);
        this.setFlyout = this.setFlyout.bind(this);
        this.markResizing = this.markResizing.bind(this);
        if (this.props.toggleCoupler) {
            this.props.toggleCoupler(() => this.toggle());
        }
        if (this.props.setFlyoutCoupler) {
            this.props.setFlyoutCoupler(() => this.setFlyout());
        }
        const mode = this.props.initialMode ? this.props.initialMode : 'expanded';
        const width = this.props.initialWidth || 400;
        const flyout = Preconditions_1.defaultValue(this.props.initialFlyout, false);
        this.state = {
            mode,
            width,
            resizing: false,
            flyout
        };
    }
    render() {
        const leftStyle = {};
        const rightStyle = {};
        for (const style of [leftStyle, rightStyle]) {
            style.height = '100%';
        }
        const createSplitterStyle = () => {
            const result = {
                width: '4px',
                minWidth: '4px',
                maxWidth: '4px',
                cursor: 'col-resize',
                backgroundColor: '#c6c6c6'
            };
            if (this.props.side === 'left') {
                result.marginLeft = 'auto';
            }
            else {
                result.marginRight = 'auto';
            }
            return result;
        };
        const splitterStyle = createSplitterStyle();
        const sidebarStyle = this.props.side === 'left' ? leftStyle : rightStyle;
        const contentStyle = this.props.side === 'right' ? leftStyle : rightStyle;
        const width = this.state.mode === 'expanded' ? this.state.width : 0;
        if (this.state.resizing) {
            for (const style of [sidebarStyle, contentStyle]) {
                style.pointerEvents = 'none';
                style.userSelect = 'none';
            }
        }
        if (this.state.flyout) {
            sidebarStyle.position = 'absolute';
        }
        sidebarStyle.width = width;
        sidebarStyle.minWidth = width;
        sidebarStyle.maxWidth = width;
        contentStyle.flexGrow = 1;
        sidebarStyle.height = '100%';
        const componentClassNames = this.props.componentClassNames || {};
        return (React.createElement("div", { className: "dock", style: Object.assign(Object.assign({}, Styles.Dock), this.props.style || {}), onMouseMove: () => this.onMouseMove(), draggable: false },
            React.createElement("div", { className: "dock-left" + ' ' + componentClassNames.left || "", style: leftStyle, draggable: false }, this.props.left),
            React.createElement("div", { className: "dock-splitter" + ' ' + componentClassNames.splitter || "", draggable: false, onMouseDown: () => this.onMouseDown(), style: splitterStyle }),
            React.createElement("div", { className: "dock-right" + ' ' + componentClassNames.right || "", style: rightStyle, draggable: false }, this.props.right)));
    }
    onMouseUp() {
        this.mousePosition = MousePositions_1.MousePositions.get();
        this.markResizing(false);
    }
    onMouseDown() {
        this.mousePosition = MousePositions_1.MousePositions.get();
        this.markResizing(true);
        window.addEventListener('mouseup', () => {
            this.onMouseUp();
        }, { once: true });
    }
    markResizing(resizing) {
        this.mouseDown = resizing;
        this.setState(Object.assign(Object.assign({}, this.state), { resizing }));
    }
    onMouseMove() {
        if (!this.mouseDown) {
            return;
        }
        const lastMousePosition = MousePositions_1.MousePositions.get();
        const mult = this.props.side === 'left' ? 1 : -1;
        const delta = mult * (lastMousePosition.clientX - this.mousePosition.clientX);
        const width = this.state.width + delta;
        this.setState(Object.assign(Object.assign({}, this.state), { width }));
        this.mousePosition = lastMousePosition;
    }
    toggle() {
        const newMode = () => {
            switch (this.state.mode) {
                case 'expanded':
                    return 'collapsed';
                case 'collapsed':
                    return 'expanded';
            }
        };
        const mode = newMode();
        this.setState(Object.assign(Object.assign({}, this.state), { mode }));
    }
    setFlyout() {
        console.log("setting as flyout ");
        const flyout = !this.state.flyout;
        const newState = Object.assign(Object.assign({}, this.state), { flyout });
        console.log("newState: ", newState);
        this.setState(newState);
    }
}
exports.Dock = Dock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY2sudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixxREFBZ0Q7QUFFaEQsa0VBQTREO0FBRzVELE1BQU0sTUFBTTs7QUFFTSxXQUFJLEdBQXdCO0lBQ3RDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsUUFBUSxFQUFFLENBQUM7SUFDWCxNQUFNLEVBQUUsTUFBTTtDQUNqQixDQUFDO0FBVU4sTUFBYSxJQUFLLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBTXJELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUxsQixrQkFBYSxHQUFHLCtCQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFckMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUsvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDdkQ7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUMxRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxHQUFHLENBQUM7UUFDN0MsTUFBTSxNQUFNLEdBQUcsNEJBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSTtZQUNKLEtBQUs7WUFDTCxRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU07U0FDVCxDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLFNBQVMsR0FBd0IsRUFBRSxDQUFDO1FBQzFDLE1BQU0sVUFBVSxHQUF3QixFQUFFLENBQUM7UUFFM0MsS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsRUFBRTtZQUN6QyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN6QjtRQUVELE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxFQUFFO1lBTTdCLE1BQU0sTUFBTSxHQUF3QjtnQkFDaEMsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLGVBQWUsRUFBRSxTQUFTO2FBQzdCLENBQUM7WUFFRixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDNUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7YUFDL0I7WUFFRCxPQUFPLE1BQU0sQ0FBQztRQUVsQixDQUFDLENBQUM7UUFFRixNQUFNLGFBQWEsR0FBRyxtQkFBbUIsRUFBRSxDQUFDO1FBRTVDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDekUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUUxRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUVyQixLQUFLLE1BQU0sS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxFQUFFO2dCQUM5QyxLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztnQkFDN0IsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7YUFDN0I7U0FFSjtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbkIsWUFBWSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7U0FDdEM7UUFFRCxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMzQixZQUFZLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUM5QixZQUFZLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUU5QixZQUFZLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUcxQixZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUU3QixNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLElBQUksRUFBRSxDQUFDO1FBRWpFLE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsTUFBTSxFQUNoQixLQUFLLGtDQUFNLE1BQU0sQ0FBQyxJQUFJLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxHQUNqRCxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUNyQyxTQUFTLEVBQUUsS0FBSztZQUVqQiw2QkFBSyxTQUFTLEVBQUUsV0FBVyxHQUFHLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUM3RCxLQUFLLEVBQUUsU0FBUyxFQUNoQixTQUFTLEVBQUUsS0FBSyxJQUVmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUVmO1lBRU4sNkJBQUssU0FBUyxFQUFFLGVBQWUsR0FBRyxHQUFHLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFDckUsU0FBUyxFQUFFLEtBQUssRUFDaEIsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFDckMsS0FBSyxFQUFFLGFBQWEsR0FFbkI7WUFFTiw2QkFBSyxTQUFTLEVBQUUsWUFBWSxHQUFHLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLElBQUksRUFBRSxFQUMvRCxLQUFLLEVBQUUsVUFBVSxFQUNqQixTQUFTLEVBQUUsS0FBSyxJQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDZixDQUVKLENBRVQsQ0FBQztJQUNOLENBQUM7SUFFTyxTQUFTO1FBSWIsSUFBSSxDQUFDLGFBQWEsR0FBRywrQkFBYyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRTFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLFdBQVc7UUFFZixJQUFJLENBQUMsYUFBYSxHQUFHLCtCQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtZQUdwQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFFckIsQ0FBQztJQUVPLFlBQVksQ0FBQyxRQUFpQjtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxpQ0FBSyxJQUFJLENBQUMsS0FBSyxLQUFFLFFBQVEsSUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFTyxXQUFXO1FBR2YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsT0FBTztTQUNWO1FBRUQsTUFBTSxpQkFBaUIsR0FBRywrQkFBYyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRS9DLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqRCxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU5RSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFdkMsSUFBSSxDQUFDLFFBQVEsaUNBQUssSUFBSSxDQUFDLEtBQUssS0FBRSxLQUFLLElBQUUsQ0FBQztRQUV0QyxJQUFJLENBQUMsYUFBYSxHQUFHLGlCQUFpQixDQUFDO0lBRTNDLENBQUM7SUFFTyxNQUFNO1FBRVYsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBRWpCLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBRXJCLEtBQUssVUFBVTtvQkFDWCxPQUFPLFdBQVcsQ0FBQztnQkFDdkIsS0FBSyxXQUFXO29CQUNaLE9BQU8sVUFBVSxDQUFDO2FBRXpCO1FBRUwsQ0FBQyxDQUFDO1FBRUYsTUFBTSxJQUFJLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLFFBQVEsaUNBQUssSUFBSSxDQUFDLEtBQUssS0FBRSxJQUFJLElBQUUsQ0FBQztJQUV6QyxDQUFDO0lBR08sU0FBUztRQUViLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUVsQyxNQUFNLE1BQU0sR0FBRyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRW5DLE1BQU0sUUFBUSxtQ0FBTyxJQUFJLENBQUMsS0FBSyxLQUFFLE1BQU0sR0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFNUIsQ0FBQztDQUdKO0FBMU5ELG9CQTBOQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TW91c2VQb3NpdGlvbnN9IGZyb20gJy4vTW91c2VQb3NpdGlvbnMnO1xuaW1wb3J0IHtDaGFubmVsQ291cGxlcn0gZnJvbSAnLi4vLi4vdXRpbC9DaGFubmVscyc7XG5pbXBvcnQge2RlZmF1bHRWYWx1ZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcblxuXG5jbGFzcyBTdHlsZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBEb2NrOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH07XG5cbn1cblxuLyoqXG4gKiBBIHNpbXBsZSBleHBhbmQvY29sbGFwc2UgZG9jayB3aXRoIGEgcGVyc2lzdGVudCBtb2RlIHdoZXJlIGl0IHN0YXlzIGRvY2tlZFxuICogbmV4dCB0aW1lIHlvdSBvcGVuIHRoZSBVSSBhbmQgYSB0ZW1wb3JhcnkgbW9kZSB0b28gd2hlcmUgaXQgZXhwYW5kIHdoZW4gdGhlXG4gKiB0b2dnbGUgYnV0dG9uIGlzIHB1c2hlZC5cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBEb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIG1vdXNlUG9zaXRpb24gPSBNb3VzZVBvc2l0aW9ucy5nZXQoKTtcblxuICAgIHByaXZhdGUgbW91c2VEb3duOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldEZseW91dCA9IHRoaXMuc2V0Rmx5b3V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubWFya1Jlc2l6aW5nID0gdGhpcy5tYXJrUmVzaXppbmcuYmluZCh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy50b2dnbGVDb3VwbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUNvdXBsZXIoKCkgPT4gdGhpcy50b2dnbGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXRGbHlvdXRDb3VwbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldEZseW91dENvdXBsZXIoKCkgPT4gdGhpcy5zZXRGbHlvdXQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2RlID0gdGhpcy5wcm9wcy5pbml0aWFsTW9kZSA/IHRoaXMucHJvcHMuaW5pdGlhbE1vZGUgOiAnZXhwYW5kZWQnO1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMucHJvcHMuaW5pdGlhbFdpZHRoIHx8IDQwMDtcbiAgICAgICAgY29uc3QgZmx5b3V0ID0gZGVmYXVsdFZhbHVlKHRoaXMucHJvcHMuaW5pdGlhbEZseW91dCwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICByZXNpemluZzogZmFsc2UsXG4gICAgICAgICAgICBmbHlvdXRcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbGVmdFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge307XG4gICAgICAgIGNvbnN0IHJpZ2h0U3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IHN0eWxlIG9mIFtsZWZ0U3R5bGUsIHJpZ2h0U3R5bGVdKSB7XG4gICAgICAgICAgICBzdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVTcGxpdHRlclN0eWxlID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBtaWdodCBiZSBiZXR0ZXIgdG8gY3JlYXRlIGEgbWFwIGluZGV4ZWQgYnkgJ3NpZGUnIGFuZCB0aGVuXG4gICAgICAgICAgICAvLyBqdXN0IHJlYWQgdGhhdCBkaXJlY3RseSBhbmQgaGF2ZSBhbGwgdGhlIHByb3BzIGVudW1lcmF0ZWRcbiAgICAgICAgICAgIC8vIGNsZWFybHkgYW5kIG5vIGlmIHN0YXRlbWVudC5cblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnNHB4JyxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzRweCcsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc0cHgnLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNjNmM2YzYnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zaWRlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubWFyZ2luTGVmdCA9ICdhdXRvJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm1hcmdpblJpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc3BsaXR0ZXJTdHlsZSA9IGNyZWF0ZVNwbGl0dGVyU3R5bGUoKTtcblxuICAgICAgICBjb25zdCBzaWRlYmFyU3R5bGUgPSB0aGlzLnByb3BzLnNpZGUgPT09ICdsZWZ0JyA/IGxlZnRTdHlsZSA6IHJpZ2h0U3R5bGU7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRTdHlsZSA9IHRoaXMucHJvcHMuc2lkZSA9PT0gJ3JpZ2h0JyA/IGxlZnRTdHlsZSA6IHJpZ2h0U3R5bGU7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnN0YXRlLm1vZGUgPT09ICdleHBhbmRlZCcgPyB0aGlzLnN0YXRlLndpZHRoIDogMDtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZXNpemluZykge1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0eWxlIG9mIFtzaWRlYmFyU3R5bGUsIGNvbnRlbnRTdHlsZV0pIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZseW91dCkge1xuICAgICAgICAgICAgc2lkZWJhclN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgfVxuXG4gICAgICAgIHNpZGViYXJTdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBzaWRlYmFyU3R5bGUubWluV2lkdGggPSB3aWR0aDtcbiAgICAgICAgc2lkZWJhclN0eWxlLm1heFdpZHRoID0gd2lkdGg7XG4gICAgICAgIFxuICAgICAgICBjb250ZW50U3R5bGUuZmxleEdyb3cgPSAxO1xuXG4gICAgICAgIC8vIGZvcmNlIGl0IHRvIGJlIDEwMCUgYW5kIG1ha2UgdGhlIGlubmVyIGVsZW1lbnRzIHVzZSBvdmVyZmxvd1xuICAgICAgICBzaWRlYmFyU3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudENsYXNzTmFtZXMgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzTmFtZXMgfHwge307XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NrXCJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3suLi5TdHlsZXMuRG9jaywgLi4udGhpcy5wcm9wcy5zdHlsZSB8fCB7fX19XG4gICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoKSA9PiB0aGlzLm9uTW91c2VNb3ZlKCl9XG4gICAgICAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZG9jay1sZWZ0XCIgKyAnICcgKyBjb21wb25lbnRDbGFzc05hbWVzLmxlZnQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtsZWZ0U3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfT5cblxuICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGVmdH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZG9jay1zcGxpdHRlclwiICsgJyAnICsgY29tcG9uZW50Q2xhc3NOYW1lcy5zcGxpdHRlciB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB0aGlzLm9uTW91c2VEb3duKCl9XG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3BsaXR0ZXJTdHlsZX0+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRvY2stcmlnaHRcIiArICcgJyArIGNvbXBvbmVudENsYXNzTmFtZXMucmlnaHQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtyaWdodFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJpZ2h0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Nb3VzZVVwKCkge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBcIik7XG5cbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uID0gTW91c2VQb3NpdGlvbnMuZ2V0KCk7XG5cbiAgICAgICAgdGhpcy5tYXJrUmVzaXppbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Nb3VzZURvd24oKSB7XG5cbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uID0gTW91c2VQb3NpdGlvbnMuZ2V0KCk7XG5cbiAgICAgICAgdGhpcy5tYXJrUmVzaXppbmcodHJ1ZSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzIGNvZGUgcHJvcGVybHkgaGFuZGxlcyB0aGUgbW91c2UgbGVhdmluZyB0aGUgd2luZG93XG4gICAgICAgICAgICAvLyBkdXJpbmcgbW91c2UgdXAgYW5kIHRoZW4gbGVhdmluZyB3b25reSBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgIHRoaXMub25Nb3VzZVVwKCk7XG4gICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG1hcmtSZXNpemluZyhyZXNpemluZzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm1vdXNlRG93biA9IHJlc2l6aW5nO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCByZXNpemluZ30pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Nb3VzZU1vdmUoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW92ZVwiKTtcblxuICAgICAgICBpZiAoIXRoaXMubW91c2VEb3duKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXN0TW91c2VQb3NpdGlvbiA9IE1vdXNlUG9zaXRpb25zLmdldCgpO1xuXG4gICAgICAgIGNvbnN0IG11bHQgPSB0aGlzLnByb3BzLnNpZGUgPT09ICdsZWZ0JyA/IDEgOiAtMTtcblxuICAgICAgICBjb25zdCBkZWx0YSA9IG11bHQgKiAobGFzdE1vdXNlUG9zaXRpb24uY2xpZW50WCAtIHRoaXMubW91c2VQb3NpdGlvbi5jbGllbnRYKTtcblxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuc3RhdGUud2lkdGggKyBkZWx0YTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCB3aWR0aH0pO1xuXG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvbiA9IGxhc3RNb3VzZVBvc2l0aW9uO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGUoKSB7XG5cbiAgICAgICAgY29uc3QgbmV3TW9kZSA9ICgpID0+IHtcblxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLm1vZGUpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2V4cGFuZGVkJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdjb2xsYXBzZWQnO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbGxhcHNlZCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXhwYW5kZWQnO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtb2RlID0gbmV3TW9kZSgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIG1vZGV9KTtcblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBzZXRGbHlvdXQoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5nIGFzIGZseW91dCBcIik7XG5cbiAgICAgICAgY29uc3QgZmx5b3V0ID0gISB0aGlzLnN0YXRlLmZseW91dDtcblxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHsuLi50aGlzLnN0YXRlLCBmbHlvdXR9O1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5ld1N0YXRlOiBcIiwgbmV3U3RhdGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblxuICAgIH1cblxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuXG4gICAgcmVhZG9ubHkgaW5pdGlhbE1vZGU/OiBEb2NrTW9kZTtcblxuICAgIHJlYWRvbmx5IGluaXRpYWxXaWR0aD86IG51bWJlcjtcblxuICAgIHJlYWRvbmx5IGluaXRpYWxGbHlvdXQ/OiBib29sZWFuO1xuXG4gICAgcmVhZG9ubHkgc2lkZTogRG9ja1NpZGU7XG5cbiAgICByZWFkb25seSBsZWZ0OiBKU1guRWxlbWVudDtcblxuICAgIHJlYWRvbmx5IHJpZ2h0OiBKU1guRWxlbWVudDtcblxuICAgIHJlYWRvbmx5IGNvbXBvbmVudENsYXNzTmFtZXM/OiBDb21wb25lbnRDbGFzc05hbWVzO1xuXG4gICAgcmVhZG9ubHkgdG9nZ2xlQ291cGxlcj86IENoYW5uZWxDb3VwbGVyPHZvaWQ+O1xuXG4gICAgcmVhZG9ubHkgc2V0Rmx5b3V0Q291cGxlcj86IENoYW5uZWxDb3VwbGVyPHZvaWQ+O1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG4gICAgcmVhZG9ubHkgbW9kZTogRG9ja01vZGU7XG5cbiAgICByZWFkb25seSB3aWR0aDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSB3aGVuIHdlJ3JlIGluIHRoZSBtaWRkbGUgb2YgcmVzaXppbmcgdGhlIGRvY2suXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzaXppbmc6IGJvb2xlYW47XG5cbiAgICByZWFkb25seSBmbHlvdXQ6IGJvb2xlYW47XG5cbn1cblxuLyoqXG4gKiBUaGUgRG9jTW9kZSBzcGVjaWZpZXMgd2hpY2ggc2lkZSBpcyBleHBhbmRlZCBieSBkZWZhdWx0ICh0aGUgcmlnaHQgb3IgbGVmdCkuXG4gKi9cbmV4cG9ydCB0eXBlIERvY2tTaWRlID0gJ2xlZnQnIHwgJ3JpZ2h0JztcblxuZXhwb3J0IHR5cGUgRG9ja01vZGUgPSAnZXhwYW5kZWQnIHwgJ2NvbGxhcHNlZCc7XG5cbmludGVyZmFjZSBDb21wb25lbnRDbGFzc05hbWVzIHtcbiAgICByZWFkb25seSBsZWZ0Pzogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNwbGl0dGVyPzogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHJpZ2h0Pzogc3RyaW5nO1xufVxuIl19