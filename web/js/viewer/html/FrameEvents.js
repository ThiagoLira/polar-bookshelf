"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("polar-shared/src/Preconditions");
class FrameEvents {
    static calculatePoints(iframe, mouseEvent) {
        Preconditions_1.Preconditions.assertNotNull(iframe, "iframe");
        if (!mouseEvent.target) {
            throw new Error("No target");
        }
        const targetElement = mouseEvent.target;
        if (targetElement.ownerDocument !== iframe.contentDocument) {
            throw new Error("Event did not occur in specified iframe");
        }
        const result = {
            page: {
                x: 0,
                y: 0
            },
            client: {
                x: 0,
                y: 0
            },
            offset: {
                x: 0,
                y: 0
            }
        };
        result.client.x = mouseEvent.screenX - window.screenX;
        const browserNavHeight = window.outerHeight - window.innerHeight;
        result.client.y = mouseEvent.screenY - window.screenY - browserNavHeight;
        result.page.x = result.client.x;
        result.page.y = result.client.y;
        result.offset.x = mouseEvent.pageX;
        result.offset.y = mouseEvent.pageY;
        return result;
    }
}
exports.FrameEvents = FrameEvents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJhbWVFdmVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGcmFtZUV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtFQUE2RDtBQUk3RCxNQUFhLFdBQVc7SUFNYixNQUFNLENBQUMsZUFBZSxDQUFDLE1BQXlCLEVBQUUsVUFBc0I7UUFFM0UsNkJBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEM7UUFLRCxNQUFNLGFBQWEsR0FBaUIsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUV0RCxJQUFJLGFBQWEsQ0FBQyxhQUFhLEtBQUssTUFBTSxDQUFDLGVBQWUsRUFBRTtZQUl4RCxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxNQUFNLE1BQU0sR0FBRztZQUVYLElBQUksRUFBRTtnQkFDRixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNQO1lBQ0QsTUFBTSxFQUFFO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2FBQ1A7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDUDtTQUVKLENBQUM7UUFRRixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFJdEQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFTakUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDO1FBRXpFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRWhDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUVuQyxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0NBRUo7QUExRUQsa0NBMEVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7SVBvaW50fSBmcm9tICcuLi8uLi9Qb2ludCc7XG5cbmV4cG9ydCBjbGFzcyBGcmFtZUV2ZW50cyB7XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIHBvaW50cyBvZiBhbiBtb3VzZUV2ZW50IGluIHRoZSBjdXJyZW50IHdpbmRvdyByZWxhdGl2ZSB0byB0aGVcbiAgICAgKiBmcmFtZSB3aGljaCBvcmlnaW5hdGVkIHRoZSBtb3VzZUV2ZW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY2FsY3VsYXRlUG9pbnRzKGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQsIG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQpOiBGcmFtZVBvaW50cyB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKGlmcmFtZSwgXCJpZnJhbWVcIik7XG5cbiAgICAgICAgaWYgKCFtb3VzZUV2ZW50LnRhcmdldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdGFyZ2V0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmlnaHQgbm93IHdlJ3JlIGZvcmNpbmcgdGhlIGNhc3QgdG8gZWxlbWVudCBhcyB0aGVyZSdzIHNvbWUgc29ydCBvZlxuICAgICAgICAvLyBpc3N1ZSB3aXRoIGluc3RhbmNlb2YgYW5kIEhUTUxFbGVtZW50IHJldHVybmluZyBmYWxzZS5cblxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gPEhUTUxFbGVtZW50PiBtb3VzZUV2ZW50LnRhcmdldDtcblxuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudC5vd25lckRvY3VtZW50ICE9PSBpZnJhbWUuY29udGVudERvY3VtZW50KSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIG1vdXNlRXZlbnQgQUNUVUFMTFkgaGFwcGVuZWQgaW4gdGhlIGlmcmFtZSBiZWNhdXNlXG4gICAgICAgICAgICAvLyBpZiBpdCBkaWRuJ3QgdGhlbiB0aGUgY2FsY3VsYXRpb25zIGhlcmUgd29uJ3QgbWFrZSBhbnkgc2Vuc2UuXG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV2ZW50IGRpZCBub3Qgb2NjdXIgaW4gc3BlY2lmaWVkIGlmcmFtZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcblxuICAgICAgICAgICAgcGFnZToge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWVudDoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gV2UgbmVlZCBhIGZyYW1lIG9mIHJlZmVyZW5jZSB0byB0cmFuc2xhdGUgdGhlIHR3byBjb29yZGluYXRlIHN5c3RlbXMuXG4gICAgICAgIC8vIHVzaW5nIHNjcmVlblggYW5kIHNjcmVlblkgc29sdmUgdGhpcyBwcm9ibGVtIGZvciB1cy4gIFdlIGNhblxuICAgICAgICAvLyB0cmFuc2xhdGUgdGhlIHRoZSBzY3JlZW4gcG9zaXRpb24gdG8gdGhlIGNsaWVudCAodmlld3BvcnQpIHBvc2l0aW9uLFxuICAgICAgICAvLyBhbmQgdGhlbiBiYXNlZCBvbiB0aGUgc2Nyb2xsaW5nIHBvc2l0aW9ucyBvZiB0aGUgZG9jdW1lbnQgdHJhbnNsYXRlXG4gICAgICAgIC8vIHRoYXQgaW50byB0aGUgcGFnZSBwb3NpdGlvbnMuXG5cbiAgICAgICAgcmVzdWx0LmNsaWVudC54ID0gbW91c2VFdmVudC5zY3JlZW5YIC0gd2luZG93LnNjcmVlblg7XG5cbiAgICAgICAgLy8gd2UgaGF2ZSB0byBmYWN0b3IgaW4gdGhlIGhlaWdodCBvZiB0aGUgVVJMIGJhciArIHRoZSBoZWlnaHQgb2YgdGhlXG4gICAgICAgIC8vIGJyb3dzZXIgdGFicyBvZiB0aGUgZXZlbnQgd2lsbCBiZSBvZmZzZXQgaW4gdGhlIFkgYXhpcy5cbiAgICAgICAgY29uc3QgYnJvd3Nlck5hdkhlaWdodCA9IHdpbmRvdy5vdXRlckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIHN0aWxsIHdyb25nIG9uIEZpcmVmb3ggYnV0IHRoZSBjaHJvbWUgbmF2IGhlaWdodCBzdHVmZlxuICAgICAgICAvLyBpcyByaWdodCBhbmQgRkYgaXMgb25seSBvZmYgYnkgYWJvdXQgMjAtMzBweCBzbyBub3QgcmVhbGx5IHRoZSBlbmQgb2ZcbiAgICAgICAgLy8gdGhlIHdvcmxkLiAgV2UgY2FuIGZpeCB0aGF0IGxhdGVyLiAgTm90ZSB0aGF0IGNvbXB1dGluZyB0aGVcbiAgICAgICAgLy8gYnJvd3Nlck5hdkhlaWdodCBpcyBhY3R1YWxseSBDT1JSRUNUIHNvIGl0IG11c3QgYmUgc2NyZWVuWSBiZWluZ1xuICAgICAgICAvLyBjYWxjdWxhdGVkIGluY29ycmVjdGx5IGZvciBGaXJlZm94LlxuXG4gICAgICAgIC8vIHdlIGhhdmUgdG8gYWRqdXN0IGJ5IGJyb3dzZXJOYXZIZWlnaHQgdG8gYWNjb3VudCBmb3IgdGhlIG5hdmJhci5cbiAgICAgICAgcmVzdWx0LmNsaWVudC55ID0gbW91c2VFdmVudC5zY3JlZW5ZIC0gd2luZG93LnNjcmVlblkgLSBicm93c2VyTmF2SGVpZ2h0O1xuXG4gICAgICAgIHJlc3VsdC5wYWdlLnggPSByZXN1bHQuY2xpZW50Lng7XG4gICAgICAgIHJlc3VsdC5wYWdlLnkgPSByZXN1bHQuY2xpZW50Lnk7XG5cbiAgICAgICAgcmVzdWx0Lm9mZnNldC54ID0gbW91c2VFdmVudC5wYWdlWDtcbiAgICAgICAgcmVzdWx0Lm9mZnNldC55ID0gbW91c2VFdmVudC5wYWdlWTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYwNzM1MDUvd2hhdC1pcy10aGUtZGlmZmVyZW5jZS1iZXR3ZWVuLXNjcmVlbngteS1jbGllbnR4LXktYW5kLXBhZ2V4LXlcblxuLy8gcGFnZVgsIHBhZ2VZLCBzY3JlZW5YLCBzY3JlZW5ZLCBjbGllbnRYLCBhbmQgY2xpZW50WSByZXR1cm5zIGEgbnVtYmVyIHdoaWNoXG4vLyBpbmRpY2F0ZXMgdGhlIG51bWJlciBvZiBwaHlzaWNhbCDigJxDU1MgcGl4ZWxz4oCdIGEgcG9pbnQgaXMgZnJvbSB0aGUgcmVmZXJlbmNlXG4vLyBwb2ludC4gVGhlIGV2ZW50IHBvaW50IGlzIHdoZXJlIHRoZSB1c2VyIGNsaWNrZWQsIHRoZSByZWZlcmVuY2UgcG9pbnQgaXMgYVxuLy8gcG9pbnQgaW4gdGhlIHVwcGVyIGxlZnQuIFRoZXNlIHByb3BlcnRpZXMgcmV0dXJuIHRoZSBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbFxuLy8gZGlzdGFuY2UgZnJvbSB0aGF0IHJlZmVyZW5jZSBwb2ludC5cbi8vXG4vLyBwYWdlWCBhbmQgcGFnZVk6XG5cbi8vIFJlbGF0aXZlIHRvIHRoZSB0b3AgbGVmdCBvZiB0aGUgZnVsbHkgcmVuZGVyZWQgY29udGVudCBhcmVhIGluIHRoZSBicm93c2VyLlxuLy8gVGhpcyByZWZlcmVuY2UgcG9pbnQgaXMgYmVsb3cgdGhlIFVSTCBiYXIgYW5kIGJhY2sgYnV0dG9uIGluIHRoZSB1cHBlciBsZWZ0LlxuLy8gVGhpcyBwb2ludCBjb3VsZCBiZSBhbnl3aGVyZSBpbiB0aGUgYnJvd3NlciB3aW5kb3cgYW5kIGNhbiBhY3R1YWxseSBjaGFuZ2Vcbi8vIGxvY2F0aW9uIGlmIHRoZXJlIGFyZSBlbWJlZGRlZCBzY3JvbGxhYmxlIHBhZ2VzIGVtYmVkZGVkIHdpdGhpbiBwYWdlcyBhbmQgdGhlXG4vLyB1c2VyIG1vdmVzIGEgc2Nyb2xsYmFyLlxuLy9cbi8vIHNjcmVlblggYW5kIHNjcmVlblk6XG5cbi8vIFJlbGF0aXZlIHRvIHRoZSB0b3AgbGVmdCBvZiB0aGUgcGh5c2ljYWwgc2NyZWVuL21vbml0b3IsIHRoaXMgcmVmZXJlbmNlIHBvaW50XG4vLyBvbmx5IG1vdmVzIGlmIHlvdSBpbmNyZWFzZSBvciBkZWNyZWFzZSB0aGUgbnVtYmVyIG9mIG1vbml0b3JzIG9yIHRoZSBtb25pdG9yXG4vLyByZXNvbHV0aW9uLlxuLy9cbi8vIGNsaWVudFggYW5kIGNsaWVudFk6XG5cbi8vIFJlbGF0aXZlIHRvIHRoZSB1cHBlciBsZWZ0IGVkZ2Ugb2YgdGhlIGNvbnRlbnQgYXJlYSAodGhlIHZpZXdwb3J0KSBvZiB0aGVcbi8vIGJyb3dzZXIgd2luZG93LiBUaGlzIHBvaW50IGRvZXMgbm90IG1vdmUgZXZlbiBpZiB0aGUgdXNlciBtb3ZlcyBhIHNjcm9sbGJhclxuLy8gZnJvbSB3aXRoaW4gdGhlIGJyb3dzZXIuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRnJhbWVQb2ludHMge1xuXG4gICAgcmVhZG9ubHkgcGFnZTogSVBvaW50O1xuXG4gICAgcmVhZG9ubHkgY2xpZW50OiBJUG9pbnQ7XG5cbiAgICByZWFkb25seSBvZmZzZXQ6IElQb2ludDtcblxufVxuIl19