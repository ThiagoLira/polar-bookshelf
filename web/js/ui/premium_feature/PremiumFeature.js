"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Account_1 = require("../../accounts/Account");
const AccountProvider_1 = require("../../accounts/AccountProvider");
const reactstrap_1 = require("reactstrap");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
class PremiumFeature extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onUpgrade = this.onUpgrade.bind(this);
    }
    render() {
        const { required, feature } = this.props;
        const PremiumFeatureWarningSM = () => {
            return react_1.default.createElement("div", null,
                react_1.default.createElement(UpgradeButton, null));
        };
        const PremiumFeatureWarningMD = () => {
            return react_1.default.createElement("div", null,
                react_1.default.createElement("div", { style: { filter: 'blur(8px)' } }, this.props.children),
                react_1.default.createElement("div", { className: "text-center mt-1" },
                    react_1.default.createElement(UpgradeButton, null)));
        };
        const PremiumFeatureWarning = () => {
            const { size } = this.props;
            switch (size) {
                case "xs":
                    return react_1.default.createElement(PremiumFeatureWarningSM, null);
                case "sm":
                    return react_1.default.createElement(PremiumFeatureWarningSM, null);
                case "md":
                    return react_1.default.createElement(PremiumFeatureWarningMD, null);
                case "lg":
                    return react_1.default.createElement(PremiumFeatureWarningMD, null);
            }
        };
        const hasRequiredPlan = () => {
            const account = AccountProvider_1.AccountProvider.get();
            if (!account) {
                return true;
            }
            return Account_1.AccountPlans.hasLevel(required, account.plan);
        };
        const UpgradeButton = () => {
            const account = AccountProvider_1.AccountProvider.get();
            const color = Account_1.AccountPlans.toColor(account.plan);
            return react_1.default.createElement(reactstrap_1.Button, { size: this.props.size, color: "light", className: "border", onClick: () => this.onUpgrade() },
                react_1.default.createElement("i", { className: "fas fa-gem", style: { color } }),
                " Upgrade to ",
                required,
                " to unlock ",
                feature);
        };
        if (hasRequiredPlan()) {
            return this.props.children;
        }
        else {
            return (react_1.default.createElement(PremiumFeatureWarning, null));
        }
    }
    onUpgrade() {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'premium', action: 'upgrade-from-premium-feature-wall' });
        document.location.hash = "plans";
    }
}
exports.PremiumFeature = PremiumFeature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlbWl1bUZlYXR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcmVtaXVtRmVhdHVyZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsb0RBQWlFO0FBQ2pFLG9FQUErRDtBQUMvRCwyQ0FBa0M7QUFDbEMsa0VBQTZEO0FBRTdELE1BQWEsY0FBZSxTQUFRLGVBQUssQ0FBQyxTQUF5QjtJQUUvRCxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV2QyxNQUFNLHVCQUF1QixHQUFHLEdBQUcsRUFBRTtZQUNqQyxPQUFPO2dCQUNILDhCQUFDLGFBQWEsT0FBRSxDQUNkLENBQUM7UUFFWCxDQUFDLENBQUM7UUFFRixNQUFNLHVCQUF1QixHQUFHLEdBQUcsRUFBRTtZQUNqQyxPQUFPO2dCQUVILHVDQUFLLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsSUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2xCO2dCQUVOLHVDQUFLLFNBQVMsRUFBQyxrQkFBa0I7b0JBQzdCLDhCQUFDLGFBQWEsT0FBRSxDQUNkLENBRUosQ0FBQztRQUVYLENBQUMsQ0FBQztRQUNGLE1BQU0scUJBQXFCLEdBQUcsR0FBRyxFQUFFO1lBQy9CLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRTFCLFFBQVEsSUFBSSxFQUFFO2dCQUNWLEtBQUssSUFBSTtvQkFDTCxPQUFPLDhCQUFDLHVCQUF1QixPQUFFLENBQUM7Z0JBQ3RDLEtBQUssSUFBSTtvQkFDTCxPQUFPLDhCQUFDLHVCQUF1QixPQUFFLENBQUM7Z0JBQ3RDLEtBQUssSUFBSTtvQkFDTCxPQUFPLDhCQUFDLHVCQUF1QixPQUFFLENBQUM7Z0JBQ3RDLEtBQUssSUFBSTtvQkFDTCxPQUFPLDhCQUFDLHVCQUF1QixPQUFFLENBQUM7YUFDekM7UUFFTCxDQUFDLENBQUM7UUFFRixNQUFNLGVBQWUsR0FBRyxHQUFHLEVBQUU7WUFFekIsTUFBTSxPQUFPLEdBQUcsaUNBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUV0QyxJQUFJLENBQUUsT0FBTyxFQUFFO2dCQUdYLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFFRCxPQUFPLHNCQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHekQsQ0FBQyxDQUFDO1FBRUYsTUFBTSxhQUFhLEdBQUcsR0FBRyxFQUFFO1lBRXZCLE1BQU0sT0FBTyxHQUFHLGlDQUFlLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFdEMsTUFBTSxLQUFLLEdBQUcsc0JBQVksQ0FBQyxPQUFPLENBQUMsT0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxELE9BQU8sOEJBQUMsbUJBQU0sSUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3JCLEtBQUssRUFBQyxPQUFPLEVBQ2IsU0FBUyxFQUFDLFFBQVEsRUFDbEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBRTFDLHFDQUFHLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFDLEdBQUc7O2dCQUFhLFFBQVE7O2dCQUFhLE9BQU8sQ0FFL0UsQ0FBQTtRQUViLENBQUMsQ0FBQztRQUVGLElBQUksZUFBZSxFQUFFLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUM5QjthQUFNO1lBQ0gsT0FBTyxDQUNILDhCQUFDLHFCQUFxQixPQUFFLENBQzNCLENBQUM7U0FDTDtJQUVMLENBQUM7SUFFTyxTQUFTO1FBQ2IscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsbUNBQW1DLEVBQUMsQ0FBQyxDQUFDO1FBQzVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUNyQyxDQUFDO0NBRUo7QUEvRkQsd0NBK0ZDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FjY291bnRQbGFuLCBBY2NvdW50UGxhbnN9IGZyb20gXCIuLi8uLi9hY2NvdW50cy9BY2NvdW50XCI7XG5pbXBvcnQge0FjY291bnRQcm92aWRlcn0gZnJvbSBcIi4uLy4uL2FjY291bnRzL0FjY291bnRQcm92aWRlclwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tIFwiLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3NcIjtcblxuZXhwb3J0IGNsYXNzIFByZW1pdW1GZWF0dXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vblVwZ3JhZGUgPSB0aGlzLm9uVXBncmFkZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qge3JlcXVpcmVkLCBmZWF0dXJlfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgUHJlbWl1bUZlYXR1cmVXYXJuaW5nU00gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICA8VXBncmFkZUJ1dHRvbi8+XG4gICAgICAgICAgICA8L2Rpdj47XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBQcmVtaXVtRmVhdHVyZVdhcm5pbmdNRCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZpbHRlcjogJ2JsdXIoOHB4KSd9fT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPFVwZ3JhZGVCdXR0b24vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj47XG5cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgUHJlbWl1bUZlYXR1cmVXYXJuaW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge3NpemV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInhzXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8UHJlbWl1bUZlYXR1cmVXYXJuaW5nU00vPjtcbiAgICAgICAgICAgICAgICBjYXNlIFwic21cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxQcmVtaXVtRmVhdHVyZVdhcm5pbmdTTS8+O1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtZFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFByZW1pdW1GZWF0dXJlV2FybmluZ01ELz47XG4gICAgICAgICAgICAgICAgY2FzZSBcImxnXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8UHJlbWl1bUZlYXR1cmVXYXJuaW5nTUQvPjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhc1JlcXVpcmVkUGxhbiA9ICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IEFjY291bnRQcm92aWRlci5nZXQoKTtcblxuICAgICAgICAgICAgaWYgKCEgYWNjb3VudCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBsb2NhbCBvbmx5IGFjY291bnQgbm90IHVzaW5nIGNsb3VkIGFuZCByaWdodCBub3dcbiAgICAgICAgICAgICAgICAvLyB3ZSdyZSBub3QgZm9yY2luZyB0aGVtIHRvIHVwZ3JhZGUuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBBY2NvdW50UGxhbnMuaGFzTGV2ZWwocmVxdWlyZWQsIGFjY291bnQucGxhbik7XG4gICAgICAgICAgICAvLyByZXR1cm4gQWNjb3VudFBsYW5zLmhhc0xldmVsKHJlcXVpcmVkLCAnZnJlZScpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgVXBncmFkZUJ1dHRvbiA9ICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IEFjY291bnRQcm92aWRlci5nZXQoKTtcblxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBBY2NvdW50UGxhbnMudG9Db2xvcihhY2NvdW50IS5wbGFuKTtcblxuICAgICAgICAgICAgcmV0dXJuIDxCdXR0b24gc2l6ZT17dGhpcy5wcm9wcy5zaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vblVwZ3JhZGUoKX0+XG5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2VtXCIgc3R5bGU9e3tjb2xvcn19Lz4gVXBncmFkZSB0byB7cmVxdWlyZWR9IHRvIHVubG9jayB7ZmVhdHVyZX1cblxuICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaGFzUmVxdWlyZWRQbGFuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UHJlbWl1bUZlYXR1cmVXYXJuaW5nLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgb25VcGdyYWRlKCkge1xuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdwcmVtaXVtJywgYWN0aW9uOiAndXBncmFkZS1mcm9tLXByZW1pdW0tZmVhdHVyZS13YWxsJ30pO1xuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5oYXNoID0gXCJwbGFuc1wiO1xuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBVSVNpemUgPSAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSByZXF1aXJlZDogQWNjb3VudFBsYW47XG4gICAgcmVhZG9ubHkgZmVhdHVyZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNpemU6IFVJU2l6ZTtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbiJdfQ==