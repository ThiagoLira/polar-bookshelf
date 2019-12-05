"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GroupOptions {
    static toGroupOptions(groups) {
        return groups.filter(group => group.visibility === 'public')
            .map(group => {
            return {
                value: group.name,
                label: group.name,
            };
        });
    }
}
exports.GroupOptions = GroupOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBPcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsTUFBYSxZQUFZO0lBRWQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUE0QjtRQUNyRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQzthQUN2RCxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVCxPQUFPO2dCQUNILEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSztnQkFDbEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFLO2FBQ3JCLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7Q0FFSjtBQWJELG9DQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWN0UHJvZmlsZX0gZnJvbSAnLi9Hcm91cFNoYXJpbmdSZWNvcmRzJztcbmltcG9ydCB7VXNlclJlZn0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvcnBjL1VzZXJSZWZzJztcbmltcG9ydCB7Q29udGFjdE9wdGlvbn0gZnJvbSAnLi9Db250YWN0c1NlbGVjdG9yJztcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi8uLi9kYXRhc3RvcmUvc2hhcmluZy9kYi9Hcm91cHNcIjtcbmltcG9ydCB7R3JvdXBPcHRpb259IGZyb20gXCIuL0dyb3Vwc1NlbGVjdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBHcm91cE9wdGlvbnMge1xuXG4gICAgcHVibGljIHN0YXRpYyB0b0dyb3VwT3B0aW9ucyhncm91cHM6IFJlYWRvbmx5QXJyYXk8R3JvdXA+KTogUmVhZG9ubHlBcnJheTxHcm91cE9wdGlvbj4ge1xuICAgICAgICByZXR1cm4gZ3JvdXBzLmZpbHRlcihncm91cCA9PiBncm91cC52aXNpYmlsaXR5ID09PSAncHVibGljJylcbiAgICAgICAgICAgIC5tYXAoZ3JvdXAgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBncm91cC5uYW1lISxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGdyb3VwLm5hbWUhLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19