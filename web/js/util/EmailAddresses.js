"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_addresses_1 = require("email-addresses");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class EmailAddresses {
    static parseList(input) {
        input = input.replace(/[\r\n]/g, "");
        const parsed = email_addresses_1.parseAddressList(input);
        if (!Preconditions_1.isPresent(parsed)) {
            return [];
        }
        const result = [];
        for (const current of parsed) {
            if (current.type === 'mailbox') {
                const parsedMailbox = current;
                const name = Optional_1.Optional.of(parsedMailbox.name).getOrUndefined();
                const address = parsedMailbox.address;
                result.push({ name, address });
            }
        }
        return result;
    }
    static format(addr) {
        if (addr.name) {
            return `"${addr.name}" <${addr.address}>`;
        }
        return addr.address;
    }
}
exports.EmailAddresses = EmailAddresses;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWxBZGRyZXNzZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbWFpbEFkZHJlc3Nlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFEQUFpRDtBQUVqRCxnRUFBMkQ7QUFDM0Qsa0VBQXlEO0FBS3pELE1BQWEsY0FBYztJQUVoQixNQUFNLENBQUMsU0FBUyxDQUFDLEtBQWE7UUFFakMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXJDLE1BQU0sTUFBTSxHQUFHLGtDQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBRSx5QkFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxNQUFNLE1BQU0sR0FBbUIsRUFBRSxDQUFDO1FBRWxDLEtBQUssTUFBTSxPQUFPLElBQUksTUFBTSxFQUFFO1lBRTFCLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQzVCLE1BQU0sYUFBYSxHQUF5QixPQUFPLENBQUM7Z0JBQ3BELE1BQU0sSUFBSSxHQUFHLG1CQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDOUQsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztnQkFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO2FBQ2hDO1NBRUo7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFrQjtRQUVuQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUM7U0FDN0M7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFFeEIsQ0FBQztDQUVKO0FBdkNELHdDQXVDQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtwYXJzZUFkZHJlc3NMaXN0fSBmcm9tICdlbWFpbC1hZGRyZXNzZXMnO1xuaW1wb3J0IFBhcnNlZE1haWxib3ggPSBlbWFpbEFkZHJlc3Nlcy5QYXJzZWRNYWlsYm94O1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuXG4vKipcbiAqIFRoaXMgaXMgYW4gUkZDIDUzMjIgcGFyc2VyLlxuICovXG5leHBvcnQgY2xhc3MgRW1haWxBZGRyZXNzZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZUxpc3QoaW5wdXQ6IHN0cmluZykge1xuXG4gICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcclxcbl0vZywgXCJcIik7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VBZGRyZXNzTGlzdChpbnB1dCk7XG5cbiAgICAgICAgaWYgKCEgaXNQcmVzZW50KHBhcnNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogRW1haWxBZGRyZXNzW10gPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGN1cnJlbnQgb2YgcGFyc2VkKSB7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50LnR5cGUgPT09ICdtYWlsYm94Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZE1haWxib3ggPSA8UGFyc2VkTWFpbGJveD4gPGFueT4gY3VycmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gT3B0aW9uYWwub2YocGFyc2VkTWFpbGJveC5uYW1lKS5nZXRPclVuZGVmaW5lZCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJzZWRNYWlsYm94LmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe25hbWUsIGFkZHJlc3N9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0KGFkZHI6IEVtYWlsQWRkcmVzcykge1xuXG4gICAgICAgIGlmIChhZGRyLm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBgXCIke2FkZHIubmFtZX1cIiA8JHthZGRyLmFkZHJlc3N9PmA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWRkci5hZGRyZXNzO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1haWxBZGRyZXNzIHtcbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGFkZHJlc3M6IHN0cmluZztcbn1cbiJdfQ==