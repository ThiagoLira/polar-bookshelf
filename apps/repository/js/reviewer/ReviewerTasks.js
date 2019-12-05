"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const TasksCalculator_1 = require("polar-spaced-repetition/src/spaced_repetition/scheduler/S2Plus/TasksCalculator");
const AnnotationType_1 = require("polar-shared/src/metadata/AnnotationType");
const HighlightColor_1 = require("polar-shared/src/metadata/HighlightColor");
const SpacedReps_1 = require("polar-firebase/src/firebase/om/SpacedReps");
const IDMaps_1 = require("polar-shared/src/util/IDMaps");
const Firebase_1 = require("../../../../web/js/firebase/Firebase");
const FlashcardTaskActions_1 = require("./cards/FlashcardTaskActions");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Reducers_1 = require("polar-shared/src/util/Reducers");
const SpacedRepStats_1 = require("polar-firebase/src/firebase/om/SpacedRepStats");
const FirestoreCollections_1 = require("./FirestoreCollections");
class ReviewerTasks {
    static createReadingTasks(repoDocAnnotations, limit = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const mode = 'reading';
            const taskBuilder = (repoDocAnnotations) => {
                const toTask = (docAnnotation) => {
                    const color = HighlightColor_1.HighlightColors.withDefaultColor(docAnnotation.color);
                    return {
                        id: docAnnotation.guid,
                        action: {
                            text: docAnnotation.text || "",
                            docAnnotation
                        },
                        created: docAnnotation.created,
                        color,
                        mode
                    };
                };
                return repoDocAnnotations
                    .filter(current => current.annotationType === AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT)
                    .filter(current => current.text !== undefined && current.text !== '')
                    .map(toTask);
            };
            return this.createTasks(repoDocAnnotations, mode, taskBuilder, limit);
        });
    }
    static createFlashcardTasks(repoDocAnnotations, limit = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const mode = 'flashcard';
            const taskBuilder = (repoDocAnnotations) => {
                const toTasks = (docAnnotation) => {
                    const toTask = (action) => {
                        return {
                            id: docAnnotation.guid,
                            action,
                            created: docAnnotation.created,
                            mode
                        };
                    };
                    const actions = FlashcardTaskActions_1.FlashcardTaskActions.create(docAnnotation.original, docAnnotation);
                    return actions.map(toTask);
                };
                return repoDocAnnotations
                    .filter(current => current.annotationType === AnnotationType_1.AnnotationType.FLASHCARD)
                    .map(toTasks)
                    .reduce(Reducers_1.Reducers.FLAT);
            };
            return this.createTasks(repoDocAnnotations, mode, taskBuilder, limit);
        });
    }
    static createTasks(repoDocAnnotations, mode, tasksBuilder, limit = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertPresent(mode, 'mode');
            const potential = tasksBuilder(repoDocAnnotations);
            const uid = yield Firebase_1.Firebase.currentUserID();
            if (!uid) {
                throw new Error("Not authenticated");
            }
            const spacedReps = yield SpacedReps_1.SpacedReps.list(uid);
            const spacedRepsMap = IDMaps_1.IDMaps.toIDMap(spacedReps);
            const optionalTaskRepResolver = (task) => __awaiter(this, void 0, void 0, function* () {
                const spacedRep = spacedRepsMap[task.id];
                if (!spacedRep) {
                    return undefined;
                }
                const age = TasksCalculator_1.TasksCalculator.computeAge(spacedRep);
                return Object.assign(Object.assign(Object.assign({}, task), spacedRep), { age });
            });
            const resolver = TasksCalculator_1.createDefaultTaskRepResolver(optionalTaskRepResolver);
            return yield TasksCalculator_1.TasksCalculator.calculate({
                potential,
                resolver,
                limit
            });
        });
    }
    static isReviewer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield FirestoreCollections_1.FirestoreCollections.configure();
            const uid = yield Firebase_1.Firebase.currentUserID();
            if (!uid) {
                return false;
            }
            return yield SpacedRepStats_1.SpacedRepStats.hasStats(uid);
        });
    }
}
exports.ReviewerTasks = ReviewerTasks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmV2aWV3ZXJUYXNrcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJldmlld2VyVGFza3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxvSEFLd0Y7QUFDeEYsNkVBQXdFO0FBQ3hFLDZFQUF5RTtBQUN6RSwwRUFBcUU7QUFDckUseURBQW9EO0FBQ3BELG1FQUE4RDtBQUc5RCx1RUFBa0U7QUFFbEUsa0VBQTZEO0FBQzdELDZEQUF3RDtBQUN4RCxrRkFBNkU7QUFDN0UsaUVBQTREO0FBVzVELE1BQWEsYUFBYTtJQUVmLE1BQU0sQ0FBTyxrQkFBa0IsQ0FBQyxrQkFBaUQsRUFDakQsUUFBZ0IsRUFBRTs7WUFFckQsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDO1lBRXZCLE1BQU0sV0FBVyxHQUFvQyxDQUFDLGtCQUFpRCxFQUEwQyxFQUFFO2dCQUUvSSxNQUFNLE1BQU0sR0FBRyxDQUFDLGFBQTZCLEVBQTJCLEVBQUU7b0JBQ3RFLE1BQU0sS0FBSyxHQUFHLGdDQUFlLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwRSxPQUFPO3dCQUNILEVBQUUsRUFBRSxhQUFhLENBQUMsSUFBSTt3QkFDdEIsTUFBTSxFQUFFOzRCQUNKLElBQUksRUFBRSxhQUFhLENBQUMsSUFBSSxJQUFJLEVBQUU7NEJBQzlCLGFBQWE7eUJBQ2hCO3dCQUNELE9BQU8sRUFBRSxhQUFhLENBQUMsT0FBTzt3QkFDOUIsS0FBSzt3QkFDTCxJQUFJO3FCQUNQLENBQUM7Z0JBQ04sQ0FBQyxDQUFDO2dCQUVGLE9BQU8sa0JBQWtCO3FCQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxLQUFLLCtCQUFjLENBQUMsY0FBYyxDQUFDO3FCQUMzRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsSUFBSSxL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QUMsU0FBUyxFQUFFLENBQUM7WUFFdkMsTUFBTSxHQUFHLEdBQUcsTUFBTSxtQkFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRTNDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBRU4sT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFFRCxPQUFPLE1BQU0sK0JBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFOUMsQ0FBQztLQUFBO0NBRUo7QUF2SUQsc0NBdUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDYWxjdWxhdGVkVGFza1JlcHMsXG4gICAgY3JlYXRlRGVmYXVsdFRhc2tSZXBSZXNvbHZlcixcbiAgICBPcHRpb25hbFRhc2tSZXBSZXNvbHZlcixcbiAgICBUYXNrc0NhbGN1bGF0b3Jcbn0gZnJvbSBcInBvbGFyLXNwYWNlZC1yZXBldGl0aW9uL3NyYy9zcGFjZWRfcmVwZXRpdGlvbi9zY2hlZHVsZXIvUzJQbHVzL1Rhc2tzQ2FsY3VsYXRvclwiO1xuaW1wb3J0IHtBbm5vdGF0aW9uVHlwZX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvQW5ub3RhdGlvblR5cGVcIjtcbmltcG9ydCB7SGlnaGxpZ2h0Q29sb3JzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9IaWdobGlnaHRDb2xvclwiO1xuaW1wb3J0IHtTcGFjZWRSZXBzfSBmcm9tIFwicG9sYXItZmlyZWJhc2Uvc3JjL2ZpcmViYXNlL29tL1NwYWNlZFJlcHNcIjtcbmltcG9ydCB7SURNYXBzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0lETWFwc1wiO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9maXJlYmFzZS9GaXJlYmFzZVwiO1xuaW1wb3J0IHtSZXBldGl0aW9uTW9kZSwgVGFzaywgVGFza1JlcH0gZnJvbSBcInBvbGFyLXNwYWNlZC1yZXBldGl0aW9uLWFwaS9zcmMvc2NoZWR1bGVyL1MyUGx1cy9TMlBsdXNcIjtcbmltcG9ydCB7Rmxhc2hjYXJkVGFza0FjdGlvbn0gZnJvbSBcIi4vY2FyZHMvRmxhc2hjYXJkVGFza0FjdGlvblwiO1xuaW1wb3J0IHtGbGFzaGNhcmRUYXNrQWN0aW9uc30gZnJvbSBcIi4vY2FyZHMvRmxhc2hjYXJkVGFza0FjdGlvbnNcIjtcbmltcG9ydCB7SUZsYXNoY2FyZH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSUZsYXNoY2FyZFwiO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zXCI7XG5pbXBvcnQge1JlZHVjZXJzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1JlZHVjZXJzXCI7XG5pbXBvcnQge1NwYWNlZFJlcFN0YXRzfSBmcm9tIFwicG9sYXItZmlyZWJhc2Uvc3JjL2ZpcmViYXNlL29tL1NwYWNlZFJlcFN0YXRzXCI7XG5pbXBvcnQge0ZpcmVzdG9yZUNvbGxlY3Rpb25zfSBmcm9tIFwiLi9GaXJlc3RvcmVDb2xsZWN0aW9uc1wiO1xuaW1wb3J0IHtJRG9jQW5ub3RhdGlvbn0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9hbm5vdGF0aW9uX3NpZGViYXIvRG9jQW5ub3RhdGlvblwiO1xuaW1wb3J0IHtSZWFkaW5nVGFza0FjdGlvbn0gZnJvbSBcIi4vY2FyZHMvUmVhZGluZ1Rhc2tBY3Rpb25cIjtcblxuLyoqXG4gKiBUYWtlIHRhc2tzIGFuZCB0aGVuIGJ1aWxkIGFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUYXNrc0J1aWxkZXI8QT4ge1xuICAgIChyZXBvRG9jQW5ub3RhdGlvbnM6IFJlYWRvbmx5QXJyYXk8SURvY0Fubm90YXRpb24+KTogUmVhZG9ubHlBcnJheTxUYXNrPEE+Pjtcbn1cblxuZXhwb3J0IGNsYXNzIFJldmlld2VyVGFza3Mge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGVSZWFkaW5nVGFza3MocmVwb0RvY0Fubm90YXRpb25zOiBSZWFkb25seUFycmF5PElEb2NBbm5vdGF0aW9uPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyID0gMTApOiBQcm9taXNlPENhbGN1bGF0ZWRUYXNrUmVwczxSZWFkaW5nVGFza0FjdGlvbj4+IHtcblxuICAgICAgICBjb25zdCBtb2RlID0gJ3JlYWRpbmcnO1xuXG4gICAgICAgIGNvbnN0IHRhc2tCdWlsZGVyOiBUYXNrc0J1aWxkZXI8UmVhZGluZ1Rhc2tBY3Rpb24+ID0gKHJlcG9Eb2NBbm5vdGF0aW9uczogUmVhZG9ubHlBcnJheTxJRG9jQW5ub3RhdGlvbj4pOiBSZWFkb25seUFycmF5PFRhc2s8UmVhZGluZ1Rhc2tBY3Rpb24+PiA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvVGFzayA9IChkb2NBbm5vdGF0aW9uOiBJRG9jQW5ub3RhdGlvbik6IFRhc2s8UmVhZGluZ1Rhc2tBY3Rpb24+ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IEhpZ2hsaWdodENvbG9ycy53aXRoRGVmYXVsdENvbG9yKGRvY0Fubm90YXRpb24uY29sb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBkb2NBbm5vdGF0aW9uLmd1aWQsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZG9jQW5ub3RhdGlvbi50ZXh0IHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NBbm5vdGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IGRvY0Fubm90YXRpb24uY3JlYXRlZCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIG1vZGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcG9Eb2NBbm5vdGF0aW9uc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoY3VycmVudCA9PiBjdXJyZW50LmFubm90YXRpb25UeXBlID09PSBBbm5vdGF0aW9uVHlwZS5URVhUX0hJR0hMSUdIVClcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGN1cnJlbnQgPT4gY3VycmVudC50ZXh0ICE9PSB1bmRlZmluZWQgJiYgY3VycmVudC50ZXh0ICE9PSAnJylcbiAgICAgICAgICAgICAgICAubWFwKHRvVGFzayk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVUYXNrcyhyZXBvRG9jQW5ub3RhdGlvbnMsIG1vZGUsIHRhc2tCdWlsZGVyLCBsaW1pdCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZUZsYXNoY2FyZFRhc2tzKHJlcG9Eb2NBbm5vdGF0aW9uczogUmVhZG9ubHlBcnJheTxJRG9jQW5ub3RhdGlvbj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyID0gMTApOiBQcm9taXNlPENhbGN1bGF0ZWRUYXNrUmVwczxGbGFzaGNhcmRUYXNrQWN0aW9uPj4ge1xuXG4gICAgICAgIGNvbnN0IG1vZGUgPSAnZmxhc2hjYXJkJztcblxuICAgICAgICBjb25zdCB0YXNrQnVpbGRlcjogVGFza3NCdWlsZGVyPEZsYXNoY2FyZFRhc2tBY3Rpb24+ID0gKHJlcG9Eb2NBbm5vdGF0aW9uczogUmVhZG9ubHlBcnJheTxJRG9jQW5ub3RhdGlvbj4pOiBSZWFkb25seUFycmF5PFRhc2s8Rmxhc2hjYXJkVGFza0FjdGlvbj4+ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdG9UYXNrcyA9IChkb2NBbm5vdGF0aW9uOiBJRG9jQW5ub3RhdGlvbik6IFJlYWRvbmx5QXJyYXk8VGFzazxGbGFzaGNhcmRUYXNrQWN0aW9uPj4gPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9UYXNrID0gKGFjdGlvbjogRmxhc2hjYXJkVGFza0FjdGlvbik6IFRhc2s8Rmxhc2hjYXJkVGFza0FjdGlvbj4gPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZG9jQW5ub3RhdGlvbi5ndWlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZDogZG9jQW5ub3RhdGlvbi5jcmVhdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbnMgPSBGbGFzaGNhcmRUYXNrQWN0aW9ucy5jcmVhdGUoPElGbGFzaGNhcmQ+IGRvY0Fubm90YXRpb24ub3JpZ2luYWwsIGRvY0Fubm90YXRpb24pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMubWFwKHRvVGFzayk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiByZXBvRG9jQW5ub3RhdGlvbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGN1cnJlbnQgPT4gY3VycmVudC5hbm5vdGF0aW9uVHlwZSA9PT0gQW5ub3RhdGlvblR5cGUuRkxBU0hDQVJEKVxuICAgICAgICAgICAgICAgIC5tYXAodG9UYXNrcylcbiAgICAgICAgICAgICAgICAucmVkdWNlKFJlZHVjZXJzLkZMQVQpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlVGFza3MocmVwb0RvY0Fubm90YXRpb25zLCBtb2RlLCB0YXNrQnVpbGRlciwgbGltaXQpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGVUYXNrczxBPihyZXBvRG9jQW5ub3RhdGlvbnM6IFJlYWRvbmx5QXJyYXk8SURvY0Fubm90YXRpb24+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogUmVwZXRpdGlvbk1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrc0J1aWxkZXI6IFRhc2tzQnVpbGRlcjxBPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBudW1iZXIgPSAxMCk6IFByb21pc2U8Q2FsY3VsYXRlZFRhc2tSZXBzPEE+PiB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KG1vZGUsICdtb2RlJyk7XG5cbiAgICAgICAgLy8gVE9ETzogd2UgYWxzbyBuZWVkIHRvIGJlIGFibGUgdG8gcmV2aWV3IGltYWdlcy4uLi4gd2UgYWxzbyBuZWVkIGEgZGVkaWNhdGVkIHByb3ZpZGVyIHRvXG4gICAgICAgIC8vIHJldHVybiB0aGUgcmlnaHQgdHlwZSBvZiBhbm5vdGF0aW9uIHR5cGUuLi5cblxuICAgICAgICBjb25zdCBwb3RlbnRpYWw6IFJlYWRvbmx5QXJyYXk8VGFzazxBPj4gPSB0YXNrc0J1aWxkZXIocmVwb0RvY0Fubm90YXRpb25zKTtcbiAgICAgICAgY29uc3QgdWlkID0gYXdhaXQgRmlyZWJhc2UuY3VycmVudFVzZXJJRCgpO1xuXG4gICAgICAgIGlmICghIHVpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGF1dGhlbnRpY2F0ZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzcGFjZWRSZXBzID0gYXdhaXQgU3BhY2VkUmVwcy5saXN0KHVpZCk7XG5cbiAgICAgICAgY29uc3Qgc3BhY2VkUmVwc01hcCA9IElETWFwcy50b0lETWFwKHNwYWNlZFJlcHMpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbmFsVGFza1JlcFJlc29sdmVyOiBPcHRpb25hbFRhc2tSZXBSZXNvbHZlcjxBPlxuICAgICAgICAgICAgPSBhc3luYyAodGFzazogVGFzazxBPik6IFByb21pc2U8VGFza1JlcDxBPiB8IHVuZGVmaW5lZD4gPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBzcGFjZWRSZXAgPSBzcGFjZWRSZXBzTWFwW3Rhc2suaWRdO1xuXG4gICAgICAgICAgICBpZiAoISBzcGFjZWRSZXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhZ2UgPSBUYXNrc0NhbGN1bGF0b3IuY29tcHV0ZUFnZShzcGFjZWRSZXApO1xuXG4gICAgICAgICAgICByZXR1cm4gey4uLnRhc2ssIC4uLnNwYWNlZFJlcCwgYWdlfTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc29sdmVyID0gY3JlYXRlRGVmYXVsdFRhc2tSZXBSZXNvbHZlcihvcHRpb25hbFRhc2tSZXBSZXNvbHZlcik7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IFRhc2tzQ2FsY3VsYXRvci5jYWxjdWxhdGUoe1xuICAgICAgICAgICAgcG90ZW50aWFsLFxuICAgICAgICAgICAgcmVzb2x2ZXIsXG4gICAgICAgICAgICBsaW1pdFxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoZSB1c2VyIGlzIGFjdGl2ZWx5IHVzaW5nIHRoZSBmbGFzaGNhcmQvSVIgcmV2aWV3ZXIgc3lzdGVtLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgaXNSZXZpZXdlcigpOiBQcm9taXNlPGJvb2xlYW4+IHtcblxuICAgICAgICBhd2FpdCBGaXJlc3RvcmVDb2xsZWN0aW9ucy5jb25maWd1cmUoKTtcblxuICAgICAgICBjb25zdCB1aWQgPSBhd2FpdCBGaXJlYmFzZS5jdXJyZW50VXNlcklEKCk7XG5cbiAgICAgICAgaWYgKCF1aWQpIHtcbiAgICAgICAgICAgIC8vIHRoZXkgYXJlbid0IGxvZ2dlZCBpbnRvIEZpcmViYXNlIHNvIGNsZWFybHkgbm90Li4uXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXdhaXQgU3BhY2VkUmVwU3RhdHMuaGFzU3RhdHModWlkKTtcblxuICAgIH1cblxufVxuIl19