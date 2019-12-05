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
const TreeNodeChildren_1 = require("./TreeNodeChildren");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const DragTarget_1 = require("./DragTarget");
class Styles {
}
Styles.NODE_PARENT = {
    display: 'flex',
    paddingTop: '2px',
    paddingLeft: '5px'
};
Styles.NODE_ICON = {
    display: 'block',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: '0px',
    fontSize: '12px',
    lineHeight: '1.5',
    color: 'var(--secondary)',
    cursor: 'pointer',
    userSelect: 'none',
    width: '12px',
};
Styles.NODE_NAME = {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '2px',
    fontSize: '14px',
    lineHeight: '1.5',
    cursor: 'pointer',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    paddingRight: '5px',
    fontFamily: 'sans-serif',
    boxShadow: 'none',
    backgroundColor: 'inherit',
    border: 'none',
    outlineColor: 'transparent',
    borderRadius: '4px'
};
Styles.NODE_SELECTOR = {
    lineHeight: '1.5',
    fontSize: '14px',
    userSelect: 'none',
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingLeft: '5px',
};
Styles.NODE_BODY = {
    marginTop: 'auto',
    marginBottom: 'auto',
    flexGrow: 1,
};
Styles.NODE_RIGHT = {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    fontSize: '14px',
    lineHeight: '1.5',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    marginRight: '5px',
    fontFamily: 'sans-serif',
    boxShadow: 'none',
    color: 'var(--grey300)',
    display: 'flex',
};
Styles.CREATE_BUTTON = {
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: 'inherit',
    border: 'none',
    outlineColor: 'transparent',
    borderRadius: '4px'
};
Styles.CREATE_ICON = {
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: '12px',
    lineHeight: '1.5',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    backgroundColor: 'inherit',
    border: 'none',
    outlineColor: 'transparent',
    borderRadius: '4px'
};
class TreeNode extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.deselect = this.deselect.bind(this);
        this.onCheckbox = this.onCheckbox.bind(this);
        this.onClick = this.onClick.bind(this);
        this.dispatchSelected = this.dispatchSelected.bind(this);
        this.state = {};
    }
    render() {
        const { treeState } = this.props;
        const { node } = this.props;
        const children = node.children || [];
        const { id } = this.props.node;
        treeState.index[id] = this;
        const createIcon = () => {
            if (children.length > 0) {
                if (closed) {
                    return 'far fa-plus-square';
                }
                else {
                    return 'far fa-minus-square';
                }
            }
            return "";
        };
        const selected = treeState.selected.isMarked(id);
        const closed = treeState.closed.isMarked(node.id);
        const nodeButtonClazz = selected ? 'bg-primary text-white' : '';
        const icon = createIcon();
        return (React.createElement("div", { style: {} },
            React.createElement(DragTarget_1.DragTarget, { onDropped: () => this.props.treeState.dispatchDropped(node.value) },
                React.createElement("div", { style: Styles.NODE_PARENT, className: "hover-highlight" },
                    React.createElement("div", { style: Styles.NODE_ICON, className: icon, onClick: () => this.toggle() }),
                    React.createElement("div", { style: Styles.NODE_SELECTOR },
                        React.createElement("input", { className: "m-0", checked: selected, type: "checkbox", style: { display: 'block' }, onContextMenu: (event) => this.onClick(event), onChange: event => this.onCheckbox(event) })),
                    React.createElement("div", { style: Styles.NODE_BODY, onDoubleClick: () => this.toggle(), onContextMenu: (event) => this.onClick(event), onClick: (event) => this.onClick(event) },
                        React.createElement("button", { style: Styles.NODE_NAME, className: "p-0 pl-1 pr-1 border-0 " + nodeButtonClazz, color: "light" }, this.props.title || node.name)),
                    React.createElement("div", { style: Styles.NODE_RIGHT },
                        React.createElement("div", null, node.count)))),
            React.createElement(TreeNodeChildren_1.TreeNodeChildren, { children: children, closed: closed, treeState: this.props.treeState })));
    }
    onClick(event) {
        const multi = event.ctrlKey;
        this.select(multi);
    }
    onCheckbox(event) {
        this.select(true, event.target.checked);
    }
    toggle() {
        const children = this.props.node.children || [];
        if (children.length === 0) {
            return;
        }
        this.props.treeState.closed.toggle(this.props.node.id);
    }
    deselect() {
        const { id } = this.props.node;
        this.props.treeState.selected.delete(id);
    }
    select(multi = false, selected = true) {
        const { treeState } = this.props;
        const { id } = this.props.node;
        if (!multi) {
            for (const id of treeState.selected.keys()) {
                const node = treeState.index[id];
                Preconditions_1.Preconditions.assertPresent(node, "No node for id: " + id);
                node.deselect();
                treeState.selected.delete(id);
            }
        }
        treeState.selected.mark(id, selected);
        this.dispatchSelected();
    }
    dispatchSelected() {
        this.props.treeState.dispatchSelected();
    }
}
exports.TreeNode = TreeNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJlZU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUcmVlTm9kZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLHlEQUFvRDtBQUNwRCxrRUFBNkQ7QUFFN0QsNkNBQXdDO0FBR3hDLE1BQU0sTUFBTTs7QUFFTSxrQkFBVyxHQUF3QjtJQUM3QyxPQUFPLEVBQUUsTUFBTTtJQUNmLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFdBQVcsRUFBRSxLQUFLO0NBQ3JCLENBQUM7QUFFWSxnQkFBUyxHQUF3QjtJQUMzQyxPQUFPLEVBQUUsT0FBTztJQUNoQixTQUFTLEVBQUUsTUFBTTtJQUNqQixZQUFZLEVBQUUsTUFBTTtJQUNwQixXQUFXLEVBQUUsS0FBSztJQUNsQixRQUFRLEVBQUUsTUFBTTtJQUNoQixVQUFVLEVBQUUsS0FBSztJQUNqQixLQUFLLEVBQUUsa0JBQWtCO0lBQ3pCLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLFVBQVUsRUFBRSxNQUFNO0lBRWxCLEtBQUssRUFBRSxNQUFNO0NBRWhCLENBQUM7QUFFWSxnQkFBUyxHQUF3QjtJQUMzQyxTQUFTLEVBQUUsTUFBTTtJQUNqQixZQUFZLEVBQUUsTUFBTTtJQUNwQixVQUFVLEVBQUUsS0FBSztJQUNqQixRQUFRLEVBQUUsTUFBTTtJQUNoQixVQUFVLEVBQUUsS0FBSztJQUNqQixNQUFNLEVBQUUsU0FBUztJQUNqQixVQUFVLEVBQUUsTUFBTTtJQUNsQixVQUFVLEVBQUUsUUFBUTtJQUNwQixZQUFZLEVBQUUsS0FBSztJQUNuQixVQUFVLEVBQUUsWUFBWTtJQUN4QixTQUFTLEVBQUUsTUFBTTtJQUdqQixlQUFlLEVBQUUsU0FBUztJQUMxQixNQUFNLEVBQUUsTUFBTTtJQUNkLFlBQVksRUFBRSxhQUFhO0lBQzNCLFlBQVksRUFBRSxLQUFLO0NBRXRCLENBQUM7QUFFWSxvQkFBYSxHQUF3QjtJQUMvQyxVQUFVLEVBQUUsS0FBSztJQUNqQixRQUFRLEVB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RSxRQUFRLENBQUMsQ0FBQztRQUd0QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUU1QixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUMsQ0FBQztDQUVKO0FBMU1ELDRCQTBNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VHJlZU5vZGVDaGlsZHJlbn0gZnJvbSAnLi9UcmVlTm9kZUNoaWxkcmVuJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7VE5vZGV9IGZyb20gJy4vVHJlZVZpZXcnO1xuaW1wb3J0IHtEcmFnVGFyZ2V0fSBmcm9tIFwiLi9EcmFnVGFyZ2V0XCI7XG5pbXBvcnQge1RyZWVTdGF0ZX0gZnJvbSBcIi4vVHJlZVN0YXRlXCI7XG5cbmNsYXNzIFN0eWxlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIE5PREVfUEFSRU5UOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIHBhZGRpbmdUb3A6ICcycHgnLFxuICAgICAgICBwYWRkaW5nTGVmdDogJzVweCdcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBOT0RFX0lDT046IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxuICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcwcHgnLFxuICAgICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMS41JyxcbiAgICAgICAgY29sb3I6ICd2YXIoLS1zZWNvbmRhcnkpJyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgLy8gdGhpcyBoYXMgdG8gYmUgZml4ZWQgd2lkdGggb3IgZWFjaCBsYXllciBkb2Vzbid0IGxpbmUgdXAuXG4gICAgICAgIHdpZHRoOiAnMTJweCcsXG4gICAgICAgIC8vIGhlaWdodDogJzIwcHgnXG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgTk9ERV9OQU1FOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnYXV0bycsXG4gICAgICAgIG1hcmdpbkxlZnQ6ICcycHgnLFxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMS41JyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzVweCcsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG5cbiAgICAgICAgLy8gbmVlZGVkIHRvIGNoYW5nZSB0aGUgbG9vayBvZiBidXR0b25zIHRvIHNvbWV0aGluZyByZWFzb25hYmxlLlxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG91dGxpbmVDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4J1xuXG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgTk9ERV9TRUxFQ1RPUjogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgbGluZUhlaWdodDogJzEuNScsXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxuICAgICAgICBwYWRkaW5nTGVmdDogJzVweCcsXG5cbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBOT0RFX0JPRFk6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxuICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICAgICAgLy8gcGFkZGluZ0xlZnQ6ICc1cHgnLFxuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBOT0RFX1JJR0hUOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuXG4gICAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxuICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxLjUnLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICBtYXJnaW5SaWdodDogJzVweCcsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgIGNvbG9yOiAndmFyKC0tZ3JleTMwMCknLFxuXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcblxuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIENSRUFURV9CVVRUT046IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG5cbiAgICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxuXG4gICAgICAgIC8vIG5lZWRlZCB0byBjaGFuZ2UgdGhlIGxvb2sgb2YgYnV0dG9ucyB0byBzb21ldGhpbmcgcmVhc29uYWJsZS5cbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBvdXRsaW5lQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzRweCdcblxuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIENSRUFURV9JQ09OOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuXG4gICAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxuICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcblxuICAgICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMS41JyxcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcblxuICAgICAgICAvLyBuZWVkZWQgdG8gY2hhbmdlIHRoZSBsb29rIG9mIGJ1dHRvbnMgdG8gc29tZXRoaW5nIHJlYXNvbmFibGUuXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgb3V0bGluZUNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnXG5cbiAgICB9O1xuXG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTm9kZTxWPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHM8Vj4sIElTdGF0ZTxWPj4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wczxWPiwgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gdGhpcy5zZWxlY3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZXNlbGVjdCA9IHRoaXMuZGVzZWxlY3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoZWNrYm94ID0gdGhpcy5vbkNoZWNrYm94LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoU2VsZWN0ZWQgPSB0aGlzLmRpc3BhdGNoU2VsZWN0ZWQuYmluZCh0aGlzKTtcblxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgLy8gICAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICAvLyB9XG5cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qge3RyZWVTdGF0ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7bm9kZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gfHwgW107XG5cbiAgICAgICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHMubm9kZTtcblxuICAgICAgICAvLyBkdXJpbmcgZXhwYW5kL2NvbGxhcHNlIG5ldyBub2RlcyBhcmUgY3JlYXRlZCBhbmQgd2UgaGF2ZSB0byBrZWVwIHRoZVxuICAgICAgICAvLyBpbmRleCB1cGRhdGVkIG9yIHdlIHdpbGwgYWNjZXNzIGEgY29tcG9uZW50IHRoYXQgbm8gbG9uZ2VyIGV4aXN0cy5cbiAgICAgICAgLy8gbm90IHN1cmUgd2h5IGJ1dCB0aGlzIG5lZWRzIHRvIGJlIHVwZGF0ZWQgZm9yIGVhY2ggcmVuZGVyIGFuZFxuICAgICAgICAvLyBjb21wb25lbnRzIGFyZW4ndCBhbHdheXMgY3JlYXRlZC5cbiAgICAgICAgdHJlZVN0YXRlLmluZGV4W2lkXSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlSWNvbiA9ICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLnN0YXRlLm5vZGUuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiAnZmFzIGZhLWNhcmV0LXJpZ2h0JztcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gJ2ZhcyBmYS1jYXJldC1kb3duJztcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiAoY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiAnZmFzIGZhLXBsdXMnO1xuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiAnZmFzIGZhLW1pbnVzJztcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZmFyIGZhLXBsdXMtc3F1YXJlJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2ZhciBmYS1taW51cy1zcXVhcmUnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIDxpIGNsYXNzTmFtZT1cImZhciBmYS1wbHVzLXNxdWFyZVwiPjwvaT5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmV0dXJuIFwiZmFyIGZhLWZpbGVcIjtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdHJlZVN0YXRlLnNlbGVjdGVkLmlzTWFya2VkKGlkKTtcblxuICAgICAgICBjb25zdCBjbG9zZWQgPSB0cmVlU3RhdGUuY2xvc2VkLmlzTWFya2VkKG5vZGUuaWQpO1xuXG4gICAgICAgIGNvbnN0IG5vZGVCdXR0b25DbGF6eiA9IHNlbGVjdGVkID8gJ2JnLXByaW1hcnkgdGV4dC13aGl0ZScgOiAnJztcblxuICAgICAgICBjb25zdCBpY29uID0gY3JlYXRlSWNvbigpO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cblxuICAgICAgICAgICAgICAgIDxEcmFnVGFyZ2V0IG9uRHJvcHBlZD17KCkgPT4gdGhpcy5wcm9wcy50cmVlU3RhdGUuZGlzcGF0Y2hEcm9wcGVkKG5vZGUudmFsdWUpfT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuTk9ERV9QQVJFTlR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXItaGlnaGxpZ2h0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5OT0RFX0lDT059XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGUoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLk5PREVfU0VMRUNUT1J9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm0tMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdibG9jayd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbnRleHRNZW51PXsoZXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLm9uQ2hlY2tib3goZXZlbnQpfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuTk9ERV9CT0RZfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbnRleHRNZW51PXsoZXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtTdHlsZXMuTk9ERV9OQU1FfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInAtMCBwbC0xIHByLTEgYm9yZGVyLTAgXCIgKyBub2RlQnV0dG9uQ2xhenp9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGUgfHwgbm9kZS5uYW1lfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuTk9ERV9SSUdIVH0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gbWItYXV0b1wiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8YnV0dG9uIHN0eWxlPXtTdHlsZXMuQ1JFQVRFX0JVVFRPTn0+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxpIHN0eWxlPXtTdHlsZXMuQ1JFQVRFX0lDT059Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlci1idXR0b24gZmFzIGZhLXBsdXNcIj48L2k+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPC9idXR0b24+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9kZS5jb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9EcmFnVGFyZ2V0PlxuXG4gICAgICAgICAgICAgICAgPFRyZWVOb2RlQ2hpbGRyZW4gY2hpbGRyZW49e2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlZD17Y2xvc2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVTdGF0ZT17dGhpcy5wcm9wcy50cmVlU3RhdGV9Lz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGljayhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pIHtcbiAgICAgICAgY29uc3QgbXVsdGkgPSBldmVudC5jdHJsS2V5O1xuICAgICAgICB0aGlzLnNlbGVjdChtdWx0aSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNoZWNrYm94KGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgICAgICB0aGlzLnNlbGVjdCh0cnVlLCBldmVudC50YXJnZXQuY2hlY2tlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGUoKSB7XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnByb3BzLm5vZGUuY2hpbGRyZW4gfHwgW107XG5cbiAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gZG9lc24ndCBtYWtlIHNlbnNlIHRvIGV4cGFuZC9jb2xsYXBzZSBzb21ldGhpbmcgd2l0aG91dCBjaGlsZHJlbi5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMudHJlZVN0YXRlLmNsb3NlZC50b2dnbGUodGhpcy5wcm9wcy5ub2RlLmlkKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgZGVzZWxlY3QoKSB7XG4gICAgICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzLm5vZGU7XG4gICAgICAgIHRoaXMucHJvcHMudHJlZVN0YXRlLnNlbGVjdGVkLmRlbGV0ZShpZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZWxlY3QobXVsdGk6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogYm9vbGVhbiA9IHRydWUpIHtcblxuICAgICAgICBjb25zdCB7dHJlZVN0YXRlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzLm5vZGU7XG5cbiAgICAgICAgaWYgKCFtdWx0aSkge1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIHRyZWVTdGF0ZS5zZWxlY3RlZC5rZXlzKCkpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0cmVlU3RhdGUuaW5kZXhbaWRdO1xuICAgICAgICAgICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChub2RlLCBcIk5vIG5vZGUgZm9yIGlkOiBcIiArIGlkKTtcblxuICAgICAgICAgICAgICAgIG5vZGUuZGVzZWxlY3QoKTtcbiAgICAgICAgICAgICAgICB0cmVlU3RhdGUuc2VsZWN0ZWQuZGVsZXRlKGlkKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICB0cmVlU3RhdGUuc2VsZWN0ZWQubWFyayhpZCwgc2VsZWN0ZWQpO1xuXG4gICAgICAgIC8vIFRPRE86IGRvbid0IGRvIHRoaXMgdHlwZSBvZiByZWZyZXNoXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hTZWxlY3RlZCgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkaXNwYXRjaFNlbGVjdGVkKCkge1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVTdGF0ZS5kaXNwYXRjaFNlbGVjdGVkKCk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHM8Vj4ge1xuXG4gICAgLyoqXG4gICAgICogQW4gYWx0ZXJuYXRpdmUgaHVtYW4gcmVhZGFibGUgdGl0bGUgZm9yIHRoaXMgbm9kZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aXRsZT86IHN0cmluZztcblxuICAgIHJlYWRvbmx5IG5vZGU6IFROb2RlPFY+O1xuXG4gICAgcmVhZG9ubHkgdHJlZVN0YXRlOiBUcmVlU3RhdGU8Vj47XG5cbn1cblxuXG5pbnRlcmZhY2UgSVN0YXRlPFY+IHtcbn1cblxuXG4iXX0=