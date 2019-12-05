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
class LeftRightSplit extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let margins = {
            bottom: 'auto',
            top: undefined
        };
        const rightOpts = this.props.rightOpts || {};
        const verticalAlign = rightOpts.verticalAlign || 'top';
        if (verticalAlign === 'middle') {
            margins = {
                bottom: 'auto',
                top: 'auto'
            };
        }
        return (React.createElement("div", { className: 'split-layout' + " " + this.props.className || "", style: this.props.style },
            React.createElement("div", { style: { display: 'flex' } },
                React.createElement("div", { className: "split-left", style: {
                        verticalAlign: 'top'
                    } }, this.props.left),
                React.createElement("div", { className: "split-right", style: {
                        marginBottom: margins.bottom,
                        marginTop: margins.top,
                        marginLeft: 'auto',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        verticalAlign
                    } }, this.props.right))));
    }
}
exports.LeftRightSplit = LeftRightSplit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVmdFJpZ2h0U3BsaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMZWZ0UmlnaHRTcGxpdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLE1BQWEsY0FBZSxTQUFRLEtBQUssQ0FBQyxhQUEwQjtJQUVoRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxJQUFJLE9BQU8sR0FBWTtZQUNuQixNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxTQUFTO1NBQ2pCLENBQUM7UUFFRixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFFN0MsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUM7UUFFdkQsSUFBSSxhQUFhLEtBQUssUUFBUSxFQUFFO1lBQzVCLE9BQU8sR0FBRztnQkFDTixNQUFNLEVBQUUsTUFBTTtnQkFDZCxHQUFHLEVBQUUsTUFBTTthQUNkLENBQUM7U0FDTDtRQUVELE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUUsY0FBYyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQzVELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFFeEIsNkJBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQztnQkFFekIsNkJBQUssU0FBUyxFQUFDLFlBQVksRUFDdEIsS0FBSyxFQUFFO3dCQUdILGFBQWEsRUFBRSxLQUFLO3FCQUN2QixJQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUVkO2dCQUVOLDZCQUFLLFNBQVMsRUFBQyxhQUFhLEVBQ3ZCLEtBQUssRUFBRTt3QkFFSCxZQUFZLEVBQUUsT0FBTyxDQUFDLE1BQU07d0JBQzVCLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRzt3QkFDdEIsVUFBVSxFQUFFLE1BQU07d0JBQ2xCLE9BQU8sRUFBRSxNQUFNO3dCQUNmLGNBQWMsRUFBRSxVQUFVO3dCQUUxQixhQUFhO3FCQUNoQixJQUVELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUVmLENBRUosQ0FFSixDQUNULENBQUM7SUFDTixDQUFDO0NBRUo7QUFoRUQsd0NBZ0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgTGVmdFJpZ2h0U3BsaXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgYW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IG1hcmdpbnM6IE1hcmdpbnMgPSB7XG4gICAgICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgICAgIHRvcDogdW5kZWZpbmVkXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmlnaHRPcHRzID0gdGhpcy5wcm9wcy5yaWdodE9wdHMgfHwge307XG5cbiAgICAgICAgY29uc3QgdmVydGljYWxBbGlnbiA9IHJpZ2h0T3B0cy52ZXJ0aWNhbEFsaWduIHx8ICd0b3AnO1xuXG4gICAgICAgIGlmICh2ZXJ0aWNhbEFsaWduID09PSAnbWlkZGxlJykge1xuICAgICAgICAgICAgbWFyZ2lucyA9IHtcbiAgICAgICAgICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgICAgICAgICB0b3A6ICdhdXRvJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3BsaXQtbGF5b3V0JyArIFwiIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJ1xuICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sZWZ0fVxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpblRvcDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IG1hcmdpbnMuYm90dG9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IG1hcmdpbnMudG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25cbiAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucmlnaHR9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQWRkaXRpb25hbCBjbGFzc2VzXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuXG4gICAgcmVhZG9ubHkgbGVmdDogSlNYLkVsZW1lbnQ7XG5cbiAgICByZWFkb25seSByaWdodDogSlNYLkVsZW1lbnQ7XG5cbiAgICByZWFkb25seSByaWdodE9wdHM/OiBSaWdodE9wdHM7XG5cbn1cblxuaW50ZXJmYWNlIFJpZ2h0T3B0cyB7XG4gICAgcmVhZG9ubHkgdmVydGljYWxBbGlnbj86ICd0b3AnIHwgJ21pZGRsZSc7XG59XG5cblxuaW50ZXJmYWNlIE1hcmdpbnMge1xuICAgIGJvdHRvbTogJ2F1dG8nIHwgdW5kZWZpbmVkO1xuICAgIHRvcDogJ2F1dG8nIHwgdW5kZWZpbmVkO1xufVxuIl19