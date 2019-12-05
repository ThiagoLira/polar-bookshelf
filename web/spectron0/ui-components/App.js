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
const Tags_1 = require("polar-shared/src/tags/Tags");
const Functions_1 = require("polar-shared/src/util/Functions");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const TasksCalculator_1 = require("polar-spaced-repetition/src/spaced_repetition/scheduler/S2Plus/TasksCalculator");
const Lorems_1 = require("polar-shared/src/util/Lorems");
const FontAwesomeIcon_1 = require("../../js/ui/fontawesome/FontAwesomeIcon");
const DocSidebar_1 = require("./DocSidebar");
const EditableText_1 = require("./EditableText");
const styles = {
    swatch: {
        width: '30px',
        height: '30px',
        float: 'left',
        borderRadius: '4px',
        margin: '0 6px 6px 0',
    }
};
const Folders = () => {
    return React.createElement("div", { style: { backgroundColor: 'red', overflow: 'auto' } }, "these are the folders");
};
const Preview = () => {
    return React.createElement("div", { style: { backgroundColor: 'orange', overflow: 'auto' } }, "This is the preview");
};
const Main = () => {
    return React.createElement("div", { style: { backgroundColor: 'blue' } }, "this is the right");
};
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const tags = [
            '/CompSci/Google',
            '/CompSci/Linux',
            '/CompSci/Microsoft',
            '/CompSci/Programming Languages/C++',
            '/CompSci/Programming Languages/Java',
            '/History/WWII',
            '/History/United States/WWII',
        ].map(current => Tags_1.Tags.create(current))
            .map(current => {
            const count = Math.floor(Math.random() * 100);
            return Object.assign(Object.assign({}, current), { count });
        });
        const group = {
            nrMembers: 100,
            name: 'Linux',
            description: "A group about Linux, Ubuntu, Debian, and UNIX operating systems.",
            id: "101",
            visibility: 'public',
            created: ISODateTimeStrings_1.ISODateTimeStrings.create()
        };
        const keyBindingHandler = (event) => {
            if (event.key === 'F') {
                console.log("YUP!");
            }
        };
        const createReadingTaskReps = () => {
            const lorem = Lorems_1.Lorems.mediumLength();
            const tasks = [
                {
                    id: "10102",
                    action: lorem,
                    created: ISODateTimeStrings_1.ISODateTimeStrings.create(),
                    color: 'red',
                    mode: 'reading'
                },
                {
                    id: "10101",
                    action: "this is the first one",
                    created: ISODateTimeStrings_1.ISODateTimeStrings.create(),
                    color: 'yellow',
                    mode: 'reading'
                },
                {
                    id: "10102",
                    action: "this is the second one",
                    created: ISODateTimeStrings_1.ISODateTimeStrings.create(),
                    color: 'yellow',
                    mode: 'reading'
                },
            ];
            return tasks.map(task => TasksCalculator_1.TasksCalculator.createInitialLearningState(task));
        };
        const MockTag = (props) => {
            return React.createElement("div", { className: "bg-grey100 p-1 rounded mr-1", style: {
                    display: 'inline-block'
                } },
                props.children,
                React.createElement("span", { className: "text-sm" },
                    React.createElement(FontAwesomeIcon_1.FontAwesomeIcon, { name: "fas fa-close" })));
        };
        return (React.createElement("div", null,
            React.createElement("div", { className: "border border-dark m-1", style: { width: '450px' } },
                React.createElement(DocSidebar_1.DocSidebar, { meta: {
                        fingerprint: "0x01",
                        title: 'Bitcoin - A distributed currency system.',
                        description: "Some stuff about bitcoin and what it does.",
                        authors: [
                            {
                                displayName: "Alice Smith",
                            }
                        ],
                        doi: '12345'
                    } })),
            "this should be editable:",
            React.createElement(EditableText_1.EditableText, { value: "hello world", onCancel: Functions_1.NULL_FUNCTION, onDone: Functions_1.NULL_FUNCTION })));
    }
}
exports.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IscURBQWdEO0FBQ2hELCtEQUE4RDtBQUU5RCxxRkFBZ0Y7QUFDaEYsb0hBRXdGO0FBSXhGLHlEQUFvRDtBQWdCcEQsNkVBQXdFO0FBRXhFLDZDQUF3QztBQUN4QyxpREFBNEM7QUFFNUMsTUFBTSxNQUFNLEdBQUc7SUFDWCxNQUFNLEVBQUU7UUFDSixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsS0FBSyxFQUFFLE1BQU07UUFDYixZQUFZLEVBQUUsS0FBSztRQUNuQixNQUFNLEVBQUUsYUFBYTtLQUN4QjtDQUNKLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7SUFDakIsT0FBTyw2QkFBSyxLQUFLLEVBQUUsRUFBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsNEJBRXZELENBQUM7QUFDWCxDQUFDLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7SUFDakIsT0FBTyw2QkFBSyxLQUFLLEVBQUUsRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsMEJBRTFELENBQUM7QUFDWCxDQUFDLENBQUM7QUFHRixNQUFNLElBQUksR0FBRyxHQUFHLEVBQUU7SUFDZCxPQUFPLDZCQUFLLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUMsd0JBQXlCLENBQUM7QUFDMUUsQ0FBQyxDQUFDO0FBRUYsTUFBYSxHQUFPLFNBQVEsS0FBSyxDQUFDLFNBQXdCO0lBRXRELFlBQVksS0FBUSxFQUFFLE9BQVk7UUFDOUIsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUxQixDQUFDO0lBRU0sTUFBTTtRQTREVCxNQUFNLElBQUksR0FBRztZQUNULGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLG9DQUFvQztZQUNwQyxxQ0FBcUM7WUFDckMsZUFBZTtZQUNmLDZCQUE2QjtTQUNoQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1gsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDOUMsdUNBQVcsT0FBTyxLQUFFLEtBQUssSUFBRTtRQUMvQixDQUFDLENBQUMsQ0FBQztRQWFQLE1BQU0sS0FBSyxHQUFVO1lBQ2pCLFNBQVMsRUFBRSxHQUFHO1lBQ2QsSUFBSSxFQUFFLE9BQU87WUFDYixXQUFXLEVBQUUsa0VBQWtFO1lBQy9FLEVBQUUsRUFBRSxLQUFLO1lBQ1QsVUFBVSxFQUFFLFFBQVE7WUFDcEIsT0FBTyxFQUFFLHVDQUFrQixDQUFDLE1BQU0sRUFBRTtTQUN2QyxDQUFDO1FBRUYsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQTBCLEVBQUUsRUFBRTtZQUVyRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZCO1FBRUwsQ0FBQyxDQUFDO1FBR0YsTUFBTSxxQkFBcUIsR0FBRyxHQUFHLEVBQUU7WUFFL0IsTUFBTSxLQUFLLEdBQUcsZUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXBDLE1BQU0sS0FBSyxHQUFnQztnQkFDdkM7b0JBQ0ksRUFBRSxFQUFFLE9BQU87b0JBQ1gsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLHVDQUFrQixDQUFDLE1BQU0sRUFBRTtvQkFDcEMsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLFNBQVM7aUJBQ2xCO2dCQUNEO29CQUNJLEVBQUUsRUFBRSxPQUFPO29CQUNYLE1BQU0sRUFBRSx1QkFBdUI7b0JBQy9CLE9BQU8sRUFBRSx1Q0FBa0IsQ0FBQyxNQUFNLEVBQUU7b0JBQ3BDLEtBQUssRUFBRSxRQUFRO29CQUNmLElBQUksRUFBRSxTQUFTO2lCQUNsQjtnQkFDRDtvQkFDSSxFQUFFLEVBQUUsT0FBTztvQkFDWCxNQUFNLEVBQUUsd0JBQXdCO29CQUNoQyxPQUFPLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxFQUFFO29CQUNwQyxLQUFLLEVBQUUsUUFBUTtvQkFDZixJQUFJLEVBQUUsU0FBUztpQkFDbEI7YUFDSixDQUFDO1lBRUYsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUNBQWUsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRS9FLENBQUMsQ0FBQztRQTRERixNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQzNCLE9BQU8sNkJBQUssU0FBUyxFQUFDLDZCQUE2QixFQUN2QyxLQUFLLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLGNBQWM7aUJBQzNCO2dCQUNILEtBQUssQ0FBQyxRQUFRO2dCQUVmLDhCQUFNLFNBQVMsRUFBQyxTQUFTO29CQUNyQixvQkFBQyxpQ0FBZSxJQUFDLElBQUksRUFBQyxjQUFjLEdBQUUsQ0FDbkMsQ0FFTCxDQUFDO1FBQ1gsQ0FBQyxDQUFDO1FBRUYsT0FBTyxDQUVIO1lBOERJLDZCQUFLLFNBQVMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDO2dCQUMzRCxvQkFBQyx1QkFBVSxJQUFDLElBQUksRUFBRTt3QkFDZCxXQUFXLEVBQUUsTUFBTTt3QkFDbkIsS0FBSyxFQUFFLDBDQUEwQzt3QkFDakQsV0FBVyxFQUFFLDRDQUE0Qzt3QkFDekQsT0FBTyxFQUFFOzRCQUNMO2dDQUNJLFdBQVcsRUFBRSxhQUFhOzZCQUM3Qjt5QkFDSjt3QkFDRCxHQUFHLEVBQUUsT0FBTztxQkFDZixHQUFHLENBQ0Y7O1lBSU4sb0JBQUMsMkJBQVksSUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBRSx5QkFBYSxFQUFFLE1BQU0sRUFBRSx5QkFBYSxHQUFHLENBK0RqRixDQUVULENBQUM7SUFDTixDQUFDO0NBR0o7QUEzV0Qsa0JBMldDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUYWdzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3RhZ3MvVGFncyc7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vLi4vanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBzXCI7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzXCI7XG5pbXBvcnQge1xuICAgIFRhc2tzQ2FsY3VsYXRvclxufSBmcm9tIFwicG9sYXItc3BhY2VkLXJlcGV0aXRpb24vc3JjL3NwYWNlZF9yZXBldGl0aW9uL3NjaGVkdWxlci9TMlBsdXMvVGFza3NDYWxjdWxhdG9yXCI7XG5pbXBvcnQge1Jldmlld2VyfSBmcm9tIFwiLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL3Jldmlld2VyL1Jldmlld2VyXCI7XG5pbXBvcnQge0xpZ2h0TW9kYWx9IGZyb20gXCIuLi8uLi9qcy91aS9MaWdodE1vZGFsXCI7XG5pbXBvcnQge0Fubm90YXRpb25UeXBlfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0Fubm90YXRpb25UeXBlJztcbmltcG9ydCB7TG9yZW1zfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0xvcmVtc1wiO1xuaW1wb3J0IHtGbGFzaGNhcmRzfSBmcm9tIFwiLi4vLi4vanMvbWV0YWRhdGEvRmxhc2hjYXJkc1wiO1xuaW1wb3J0IHtSZWZzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9SZWZzXCI7XG5pbXBvcnQge1JlcG9Eb2NBbm5vdGF0aW9uc30gZnJvbSBcIi4uLy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9qcy9SZXBvRG9jQW5ub3RhdGlvbnNcIjtcbmltcG9ydCB7RG9jSW5mb3N9IGZyb20gXCIuLi8uLi9qcy9tZXRhZGF0YS9Eb2NJbmZvc1wiO1xuaW1wb3J0IHtSZXZpZXdlclRhc2tzfSBmcm9tIFwiLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL3Jldmlld2VyL1Jldmlld2VyVGFza3NcIjtcbmltcG9ydCB7Rmxhc2hjYXJkVGFza0FjdGlvbn0gZnJvbSBcIi4uLy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9qcy9yZXZpZXdlci9jYXJkcy9GbGFzaGNhcmRUYXNrQWN0aW9uXCI7XG5pbXBvcnQge0ZsYXNoY2FyZFRhc2tBY3Rpb25zfSBmcm9tIFwiLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL3Jldmlld2VyL2NhcmRzL0ZsYXNoY2FyZFRhc2tBY3Rpb25zXCI7XG5pbXBvcnQge0ZsYXNoY2FyZENhcmR9IGZyb20gXCIuLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvcmV2aWV3ZXIvY2FyZHMvRmxhc2hjYXJkQ2FyZFwiO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zXCI7XG5pbXBvcnQge1Rhc2ssIFRhc2tSZXB9IGZyb20gXCJwb2xhci1zcGFjZWQtcmVwZXRpdGlvbi1hcGkvc3JjL3NjaGVkdWxlci9TMlBsdXMvUzJQbHVzXCI7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7RGlhbG9nc30gZnJvbSBcIi4uLy4uL2pzL3VpL2RpYWxvZ3MvRGlhbG9nc1wiO1xuaW1wb3J0IHtDb250ZXh0TWVudVdyYXBwZXJ9IGZyb20gXCJAYnVydG9uYXRvci9yZWFjdC1jb250ZXh0LW1lbnUtd3JhcHBlclwiO1xuaW1wb3J0IHtEb2NEcm9wZG93bkl0ZW1zfSBmcm9tIFwiLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL0RvY0Ryb3Bkb3duSXRlbXNcIjtcbmltcG9ydCB7Rm9sZGVyQ29udGV4dE1lbnV9IGZyb20gXCIuLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvRm9sZGVyQ29udGV4dE1lbnVcIjtcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tIFwiLi4vLi4vanMvdWkvZm9udGF3ZXNvbWUvRm9udEF3ZXNvbWVJY29uXCI7XG5pbXBvcnQge1doYXRzTmV3TW9kYWx9IGZyb20gXCIuLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvc3BsYXNoMi93aGF0c19uZXcvV2hhdHNOZXdNb2RhbFwiO1xuaW1wb3J0IHtEb2NTaWRlYmFyfSBmcm9tIFwiLi9Eb2NTaWRlYmFyXCI7XG5pbXBvcnQge0VkaXRhYmxlVGV4dH0gZnJvbSBcIi4vRWRpdGFibGVUZXh0XCI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBzd2F0Y2g6IHtcbiAgICAgICAgd2lkdGg6ICczMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgIG1hcmdpbjogJzAgNnB4IDZweCAwJyxcbiAgICB9XG59O1xuXG5jb25zdCBGb2xkZXJzID0gKCkgPT4ge1xuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmVkJywgb3ZlcmZsb3c6ICdhdXRvJ319PlxuICAgICAgICB0aGVzZSBhcmUgdGhlIGZvbGRlcnNcbiAgICA8L2Rpdj47XG59O1xuXG5jb25zdCBQcmV2aWV3ID0gKCkgPT4ge1xuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnb3JhbmdlJywgb3ZlcmZsb3c6ICdhdXRvJ319PlxuICAgICAgICBUaGlzIGlzIHRoZSBwcmV2aWV3XG4gICAgPC9kaXY+O1xufTtcblxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnYmx1ZSd9fT50aGlzIGlzIHRoZSByaWdodDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBjbGFzcyBBcHA8UD4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElBcHBTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFAsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gY29uc3Qgcm9vdDogVE5vZGU8VGFnTm9kZT4gPSB7XG4gICAgICAgIC8vICAgICBpZDogMCxcbiAgICAgICAgLy8gICAgIG5hbWU6ICdDb21wU2NpJyxcbiAgICAgICAgLy8gICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgLy8gICAgICAgICAgICAgbmFtZTogJ0xpbnV4JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGFnOiBcIi9Db21wU2NpL0xpbnV4XCJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgLy8gICAgICAgICAgICAgbmFtZTogJ0dvb2dsZScsXG4gICAgICAgIC8vICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ01vdW50YWluIFZpZXcnLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiL0NvbXBTY2kvR29vZ2xlL01vdW50YWluIFZpZXdcIlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1NhbiBGcmFuY2lzY28nLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiL0NvbXBTY2kvR29vZ2xlL1NhbiBGcmFuY2lzY29cIlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgICAgIF0sXG4gICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0YWc6IFwiL0NvbXBTY2kvR29vZ2xlXCJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIF0sXG4gICAgICAgIC8vICAgICB2YWx1ZToge1xuICAgICAgICAvLyAgICAgICAgIHRhZzogXCIvQ29tcFNjaVwiXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgLy8gRGlhbG9ncy5jb25maXJtKHt0aXRsZTogJ2hlbGxvIHdvcmxkJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICBzdWJ0aXRsZTogJ1NvbWUgcmVhbGx5IGJhZCBzdHVmZiBpcyBoYXBwZW5pbmcgcmlnaHQgbm93IHdoaWNoIHlvdSBzaG91bGQgcHJvYmFibHkgbG9vayBpbnRvLicsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgb25Db25maXJtOiBOVUxMX0ZVTkNUSU9OLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInfSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIERpYWxvZ3MucHJvbXB0KHt0aXRsZTogJ05ldyBmb2xkZXI6ICcsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBvbkNhbmNlbDogTlVMTF9GVU5DVElPTixcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG9uRG9uZTogTlVMTF9GVU5DVElPTn0pO1xuXG4gICAgICAgIC8vIFByZXZpZXdXYXJuaW5ncy5jcmVhdGVEaWFsb2coTlVMTF9GVU5DVElPTik7XG5cbiAgICAgICAgY29uc3QgdGFncyA9IFtcbiAgICAgICAgICAgICcvQ29tcFNjaS9Hb29nbGUnLFxuICAgICAgICAgICAgJy9Db21wU2NpL0xpbnV4JyxcbiAgICAgICAgICAgICcvQ29tcFNjaS9NaWNyb3NvZnQnLFxuICAgICAgICAgICAgJy9Db21wU2NpL1Byb2dyYW1taW5nIExhbmd1YWdlcy9DKysnLFxuICAgICAgICAgICAgJy9Db21wU2NpL1Byb2dyYW1taW5nIExhbmd1YWdlcy9KYXZhJyxcbiAgICAgICAgICAgICcvSGlzdG9yeS9XV0lJJyxcbiAgICAgICAgICAgICcvSGlzdG9yeS9Vbml0ZWQgU3RhdGVzL1dXSUknLFxuICAgICAgICBdLm1hcChjdXJyZW50ID0+IFRhZ3MuY3JlYXRlKGN1cnJlbnQpKVxuICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5jdXJyZW50LCBjb3VudH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyAvLyBjb25zdCByb290OiBUTm9kZTxUYWc+ID0gVGFnTm9kZXMuY3JlYXRlKC4uLnRhZ3MpO1xuICAgICAgICAvLyBEaWFsb2dzLnByb21wdCh7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFbnRlciB0aGUgbmFtZSBvZiBhIG5ldyBmb2xkZXI6XCIsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6ICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge21lc3NhZ2U6IFwiaXQgZmFpbGVkIGR1ZGVcIn07XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw6IE5VTExfRlVOQ1RJT04sXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICBvbkRvbmU6IE5VTExfRlVOQ1RJT05cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZ3JvdXA6IEdyb3VwID0ge1xuICAgICAgICAgICAgbnJNZW1iZXJzOiAxMDAsXG4gICAgICAgICAgICBuYW1lOiAnTGludXgnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSBncm91cCBhYm91dCBMaW51eCwgVWJ1bnR1LCBEZWJpYW4sIGFuZCBVTklYIG9wZXJhdGluZyBzeXN0ZW1zLlwiLFxuICAgICAgICAgICAgaWQ6IFwiMTAxXCIsXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAncHVibGljJyxcbiAgICAgICAgICAgIGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGtleUJpbmRpbmdIYW5kbGVyID0gKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdGJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWVVQIVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG5cbiAgICAgICAgY29uc3QgY3JlYXRlUmVhZGluZ1Rhc2tSZXBzID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBsb3JlbSA9IExvcmVtcy5tZWRpdW1MZW5ndGgoKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza3M6IFJlYWRvbmx5QXJyYXk8VGFzazxzdHJpbmc+PiA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIjEwMTAyXCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogbG9yZW0sXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAncmVhZGluZydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiMTAxMDFcIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcInRoaXMgaXMgdGhlIGZpcnN0IG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiBJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAneWVsbG93JyxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ3JlYWRpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIjEwMTAyXCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ0aGlzIGlzIHRoZSBzZWNvbmQgb25lXCIsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAncmVhZGluZydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgcmV0dXJuIHRhc2tzLm1hcCh0YXNrID0+IFRhc2tzQ2FsY3VsYXRvci5jcmVhdGVJbml0aWFsTGVhcm5pbmdTdGF0ZSh0YXNrKSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zdCBjcmVhdGVGbGFzaGNhcmRUYXNrUmVwcyA9IGFzeW5jICgpOiBQcm9taXNlPFJlYWRvbmx5QXJyYXk8VGFza1JlcDxGbGFzaGNhcmRUYXNrQWN0aW9uPj4+ID0+IHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGNvbnN0IHJlZiA9IFJlZnMuY3JlYXRlKCcxMjM0JywgJ3RleHQtaGlnaGxpZ2h0Jyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBjb25zdCBmbGFzaGNhcmQgPSBGbGFzaGNhcmRzLmNyZWF0ZUZyb250QmFjaygnV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBDYWxpZm9ybmlhPyAnLCAnU2FjcmFtZW50bycsIHJlZik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBjb25zdCBkb2NJbmZvID0gRG9jSW5mb3MuY3JlYXRlKCcweDAwMDEnLCAxKTtcbiAgICAgICAgLy8gICAgIGNvbnN0IHJlcG9Bbm5vdGF0aW9uID0gUmVwb0Fubm90YXRpb25zLnRvUmVwb0Fubm90YXRpb24obnVsbCEsIGZsYXNoY2FyZCwgQW5ub3RhdGlvblR5cGUuRkxBU0hDQVJELCBkb2NJbmZvKTtcbiAgICAgICAgLy8gICAgIGNvbnN0IHJlcG9Bbm5vdGF0aW9ucyA9IFtyZXBvQW5ub3RhdGlvbl07XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICByZXR1cm4gUmV2aWV3ZXJUYXNrcy5jcmVhdGVGbGFzaGNhcmRUYXNrcyhyZXBvQW5ub3RhdGlvbnMsIDEwKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gY29uc3QgY3JlYXRlRmxhc2hjYXJkVGFza1JlcHMgPSAoKTogUmVhZG9ubHlBcnJheTxUYXNrUmVwPEZsYXNoY2FyZFRhc2tBY3Rpb24+PiA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCByZWYgPSBSZWZzLmNyZWF0ZSgnMTIzNCcsICd0ZXh0LWhpZ2hsaWdodCcpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgY29uc3QgY3JlYXRlRnJvbnRBbmRCYWNrQWN0aW9uID0gKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGZsYXNoY2FyZCA9IEZsYXNoY2FyZHMuY3JlYXRlRnJvbnRCYWNrKCdXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIENhbGlmb3JuaWE/ICcsICdTYWNyYW1lbnRvJywgcmVmKTtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBmbGFzaGNhcmRUYXNrQWN0aW9ucyA9IEZsYXNoY2FyZFRhc2tBY3Rpb25zLmNyZWF0ZShmbGFzaGNhcmQsIGRvY0Fubm90YXRpb24pO1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBmbGFzaGNhcmRUYXNrQWN0aW9uc1swXTtcbiAgICAgICAgLy8gICAgIH07XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBjb25zdCBjcmVhdGVDbG96ZUFjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBmbGFzaGNhcmQgPSBGbGFzaGNhcmRzLmNyZWF0ZUNsb3plKCdUaGUgY2FwaXRhbCBvZiBjYWxpZm9ybmlhIGlzIHt7YzE6OlNhY3JhbWVudG99fS4nLCByZWYpO1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGZsYXNoY2FyZFRhc2tBY3Rpb25zID0gRmxhc2hjYXJkVGFza0FjdGlvbnMuY3JlYXRlKGZsYXNoY2FyZCwgZG9jQW5ub3RhdGlvbik7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGZsYXNoY2FyZFRhc2tBY3Rpb25zWzBdO1xuICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGNvbnN0IGNsb3plQWN0aW9uID0gY3JlYXRlQ2xvemVBY3Rpb24oKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChjbG96ZUFjdGlvbiwgJ2Nsb3plQWN0aW9uJyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBjb25zdCB0YXNrczogUmVhZG9ubHlBcnJheTxUYXNrPEZsYXNoY2FyZFRhc2tBY3Rpb24+PiA9IFtcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlkOiBcIjEwMTAyXCIsXG4gICAgICAgIC8vICAgICAgICAgICAgIGFjdGlvbjogY2xvemVBY3Rpb24sXG4gICAgICAgIC8vICAgICAgICAgICAgIGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSxcbiAgICAgICAgLy8gICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAvLyAgICAgICAgICAgICBtb2RlOiAnZmxhc2hjYXJkJ1xuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgICBpZDogXCIxMDEwMlwiLFxuICAgICAgICAvLyAgICAgICAgICAgICBhY3Rpb246IGNyZWF0ZUZyb250QW5kQmFja0FjdGlvbigpLFxuICAgICAgICAvLyAgICAgICAgICAgICBjcmVhdGVkOiBJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgbW9kZTogJ2ZsYXNoY2FyZCdcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICBdO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgcmV0dXJuIHRhc2tzLm1hcCh0YXNrID0+IFRhc2tzQ2FsY3VsYXRvci5jcmVhdGVJbml0aWFsTGVhcm5pbmdTdGF0ZSh0YXNrKSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIH07XG5cblxuICAgICAgICAvLyBjb25zdCB0YXNrUmVwcyA9IGNyZWF0ZVJlYWRpbmdUYXNrUmVwcygpO1xuICAgICAgICAvLyBjb25zdCB0YXNrUmVwcyA9IGNyZWF0ZUZsYXNoY2FyZFRhc2tSZXBzKCk7XG5cbiAgICAgICAgY29uc3QgTW9ja1RhZyA9IChwcm9wczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiZy1ncmV5MTAwIHAtMSByb3VuZGVkIG1yLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG5hbWU9XCJmYXMgZmEtY2xvc2VcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIHsvKjxXaGF0c05ld01vZGFsLz4qL31cblxuICAgICAgICAgICAgICAgIHsvKjxGb2xkZXJDb250ZXh0TWVudSB0b2dnbGU9e2ZhbHNlfSovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZUZvbGRlcj17TlVMTF9GVU5DVElPTn0+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDxkaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICBGYWtlIGZvbGRlciovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8L0ZvbGRlckNvbnRleHRNZW51PiovfVxuXG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJwLTFcIj4qL31cblxuICAgICAgICAgICAgICAgIHsvKiAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj4qL31cblxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LXh4bCBmb250LXdlaWdodC1ib2xkIHRleHQtZ3JleTkwMFwiIHN0eWxlPXt7Zm9udFNpemU6ICczM3B4J319PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIFNvbWV0aGluZyBhbWF6aW5nIGhhcyBoYXBwZW5lZCBpbiBzY2llbmNlIGFuZCB0aGUgY29tbXVuaXR5IGlzIGV4Y2l0ZWQuKi99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8L2Rpdj4qL31cblxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LWxnIHRleHQtZ3JleTgwMFwiPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPk1hcnRpbiBTbWl0aDwvc3Bhbj4sIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPkNhcnNvbiBXZWlzaGF1czwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvZGl2PiovfVxuXG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHRleHQtbGcgdGV4dC1ncmV5ODAwIG10LTEgbWItMlwiICBzdHlsZT17e2ZvbnRTaXplOiAnMjJweCd9fT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICBUaGlzIGlzIGEgbG9uZ2VyIG92ZXJ2aWV3IG9yIGFic3RyYWN0IG9mIHRoZSBjdXJyZW50IGRvY3VtZW50IHdlJ3JlIHJlYWRpbmcuKi99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8L2Rpdj4qL31cblxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhZGF0YVwiIHN0eWxlPXt7Zm9udFNpemU6ICcxNHB4J319PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxNb2NrVGFnPmxpbnV4PC9Nb2NrVGFnPiA8TW9ja1RhZz5taWNyb3NvZnQ8L01vY2tUYWc+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8L2Rpdj4qL31cblxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhZGF0YSBtdC0xXCI+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPGI+QWRkZWQ6IDwvYj4gMSBtb250aCBhZ28gPGI+VXBkYXRlZDogPC9iPiAxIGRheSBhZ28qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvZGl2PiovfVxuXG4gICAgICAgICAgICAgICAgey8qICAgIDwvZGl2PiovfVxuXG4gICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICB7Lyo8QW5ub3RhdGlvblR5cGVTZWxlY3RvciBzZWxlY3RlZD17W0Fubm90YXRpb25UeXBlLkZMQVNIQ0FSRF19IG9uU2VsZWN0ZWQ9e3NlbGVjdGVkID0+IGNvbnNvbGUubG9nKCdzZWxlY3RlZDogJywgc2VsZWN0ZWQpfS8+Ki99XG5cbiAgICAgICAgICAgICAgICB7Lyo8Q29sb3JTZWxlY3RvckJveC8+Ki99XG5cbiAgICAgICAgICAgICAgICB7Lyo8U3RhcnRSZXZpZXdCdXR0b24gb25DbGljaz17TlVMTF9GVU5DVElPTn0vPiovfVxuXG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJwLTFcIj4qL31cblxuICAgICAgICAgICAgICAgIHsvKiAgICA8QnV0dG9uIHNpemU9J3NtJyBjb2xvcj1cImxpZ2h0XCIgY2xhc3NOYW1lPVwiYm9yZGVyXCI+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2VtXCIvPiBVcGdyYWRlIHRvIGJyb256ZSB0byB1bmxvY2sgcmVsYXRlZCB0YWdzKi99XG4gICAgICAgICAgICAgICAgey8qICAgIDwvQnV0dG9uPiovfVxuXG4gICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IHN0eWxlPXt7d2lkdGg6ICc1MDBweCcsIGhlaWdodDogJzcwMHB4JywgZGlzcGxheTogJ2ZsZXgnfX0qL31cbiAgICAgICAgICAgICAgICB7LyogICAgIGNsYXNzTmFtZT1cImJvcmRlclwiPiovfVxuXG4gICAgICAgICAgICAgICAgey8qICAgIDxGbGFzaGNhcmQgZnJvbnQ9ezxkaXY+ZnJvbnQ8L2Rpdj59Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgYmFjaz17PGRpdj5iYWNrPC9kaXY+fSovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgIGFuc3dlcnM9ezxkaXY+YW5zd2VyczwvZGl2Pn0vPiovfVxuXG4gICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZGFyayBtLTFcIiBzdHlsZT17e3dpZHRoOiAnNDUwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxEb2NTaWRlYmFyIG1ldGE9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBcIjB4MDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQml0Y29pbiAtIEEgZGlzdHJpYnV0ZWQgY3VycmVuY3kgc3lzdGVtLicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTb21lIHN0dWZmIGFib3V0IGJpdGNvaW4gYW5kIHdoYXQgaXQgZG9lcy5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkFsaWNlIFNtaXRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvaTogJzEyMzQ1J1xuICAgICAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB0aGlzIHNob3VsZCBiZSBlZGl0YWJsZTpcblxuICAgICAgICAgICAgICAgIDxFZGl0YWJsZVRleHQgdmFsdWU9XCJoZWxsbyB3b3JsZFwiIG9uQ2FuY2VsPXtOVUxMX0ZVTkNUSU9OfSBvbkRvbmU9e05VTExfRlVOQ1RJT059Lz5cblxuXG5cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZGFyayBtLTFcIiBzdHlsZT17e3dpZHRoOiAnNDUwcHgnfX0+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDxEb2NTaWRlYmFyIGZpbmdlcnByaW50PVwiMHgwMVwiKi99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIHRpdGxlPVwiQml0Y29pbjogQSBQZWVyLXRvLVBlZXIgRWxlY3Ryb25pYyBDYXNoIFN5c3RlbVwiKi99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIHN1YnRpdGxlPVwiQSBwdXJlbHkgcGVlci10by1wZWVyIHZlcnNpb24gb2YgZWxlY3Ryb25pYyBjYXNoIHdvdWxkIGFsbG93IG9ubGluZSBwYXltZW50cyB0byBiZSBzZW50IGRpcmVjdGx5IGZyb20gb25lIHBhcnR5IHRvIGFub3RoZXIgd2l0aG91dCBnb2luZyB0aHJvdWdoIGEgZmluYW5jaWFsIGluc3RpdHV0aW9uLlwiKi99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIGF1dGhvcnM9e2F1dGhvcnN9Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIHVwZGF0ZWQ9e0lTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKX0qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgdXJsPSdodHRwOi8vd3d3LmV4YW1wbGUuY29tL3RoaXMvaXMvYS9sb25nLXBhdGgvMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAucGRmJyovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICBwdWJsaXNoZWQ9XCIyMDE3XCIvPiovfVxuICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuXG4gICAgICAgICAgICAgICAgey8qPFBERlZpZXdlciBzcmM9XCJmb29cIi8+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qPExvYWRpbmdQcm9ncmVzcy8+Ki99XG5cbiAgICAgICAgICAgICAgICB7Lyo8TW9ja0ZvbGRlclRyZWUvPiovfVxuXG4gICAgICAgICAgICAgICAgey8qPEFjY291bnRVcGdyYWRlQmFyVmlldyBwbGFuPSdmcmVlJyBhY2NvdW50VXNhZ2U9e3tzdG9yYWdlSW5CeXRlczogMH19Lz4qL31cblxuICAgICAgICAgICAgICAgIHsvKjxkaXY+Ki99XG5cbiAgICAgICAgICAgICAgICB7LyogICAgLyEqPExhcmdlTW9kYWwgaXNPcGVuPXt0cnVlfSohLyovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAvISogICAgICAgICAgICBjZW50ZXJlZD17dHJ1ZX0qIS8qL31cbiAgICAgICAgICAgICAgICB7LyogICAgLyEqICAgICAgICAgICAgbWluV2lkdGg9XCIyMCVcIj4qIS8qL31cblxuICAgICAgICAgICAgICAgIHsvKiAgICAvISogICAgPExhcmdlTW9kYWxCb2R5PiohLyovfVxuXG4gICAgICAgICAgICAgICAgey8qICAgIC8hKiAgICAgICAgdGhpcyBpcyBzb21lIG1vZGFsIGNvbnRlbnQuKiEvKi99XG5cbiAgICAgICAgICAgICAgICB7LyogICAgLyEqICAgICAgICA8R3JvdXBTZWFyY2gvPiohLyovfVxuXG4gICAgICAgICAgICAgICAgey8qICAgIC8hKiAgICAgICAgPEdyb3VwSGl0cz4qIS8qL31cbiAgICAgICAgICAgICAgICB7LyogICAgLyEqICAgICAgICAgICAgPEdyb3VwSGl0IG5hbWU9XCJMaW51eFwiIGRlc2NyaXB0aW9uPVwiQSBncm91cCBhYm91dCBMaW51eFwiIG5yTWVtYmVycz17MTB9IG9uQWRkPXtOVUxMX0ZVTkNUSU9OfS8+KiEvKi99XG4gICAgICAgICAgICAgICAgey8qICAgIC8hKiAgICAgICAgICAgIDxHcm91cEhpdCBuYW1lPVwiTWljcm9zb2Z0XCIgZGVzY3JpcHRpb249XCJBIGdyb3VwIGFib3V0IE1pY3Jvc29mdFwiIG5yTWVtYmVycz17NX0gb25BZGQ9e05VTExfRlVOQ1RJT059Lz4qIS8qL31cbiAgICAgICAgICAgICAgICB7LyogICAgLyEqICAgICAgICA8L0dyb3VwSGl0cz4qIS8qL31cblxuICAgICAgICAgICAgICAgIHsvKiAgICAvISogICAgPC9MYXJnZU1vZGFsQm9keT4qIS8qL31cblxuICAgICAgICAgICAgICAgIHsvKiAgICAvISogICAgLyEqPE1vZGFsRm9vdGVyPiohLyohLyovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAvISogICAgLyEqICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5vbkRvbmUoKX0+Q2xvc2U8L0J1dHRvbj4qIS8qIS8qL31cbiAgICAgICAgICAgICAgICB7LyogICAgLyEqICAgIC8hKjwvTW9kYWxGb290ZXI+KiEvKiEvKi99XG5cblxuICAgICAgICAgICAgICAgIHsvKiAgICAvISo8L0xhcmdlTW9kYWw+KiEvKi99XG5cblxuICAgICAgICAgICAgICAgIHsvKiAgICA8R3JvdXBDYXJkIGdyb3VwPXtncm91cH0vPiovfVxuXG4gICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICB7Lyo8VHJlZVZpZXcgcm9vdD17cm9vdH0qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgICAgLz4qL31cblxuICAgICAgICAgICAgICAgIHsvKjxEb2NrIHNpZGU9XCJsZWZ0XCIqL31cbiAgICAgICAgICAgICAgICB7LyogICAgICBsZWZ0PXs8Rm9sZGVycy8+fSovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgIHJpZ2h0PXs8RG9jayBzaWRlPVwibGVmdFwiKi99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgIGxlZnQ9ezxQcmV2aWV3Lz59Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgIHJpZ2h0PXs8TWFpbi8+fS8+fS8+Ki99XG5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cblxufVxuXG5pbnRlcmZhY2UgSUFwcFN0YXRlIHtcblxufVxuXG5cbiJdfQ==