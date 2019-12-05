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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Reviewer_1 = require("./Reviewer");
const ReactInjector_1 = require("../../../../web/js/ui/util/ReactInjector");
const React = __importStar(require("react"));
const ReviewerTasks_1 = require("./ReviewerTasks");
const Functions_1 = require("polar-shared/src/util/Functions");
const SpacedReps_1 = require("polar-firebase/src/firebase/om/SpacedReps");
const LightModal_1 = require("../../../../web/js/ui/LightModal");
const S2Plus_1 = require("polar-spaced-repetition-api/src/scheduler/S2Plus/S2Plus");
const TasksCalculator_1 = require("polar-spaced-repetition/src/spaced_repetition/scheduler/S2Plus/TasksCalculator");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Firebase_1 = require("../../../../web/js/firebase/Firebase");
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const Latch_1 = require("polar-shared/src/util/Latch");
const PreviewWarnings_1 = require("./PreviewWarnings");
const Dialogs_1 = require("../../../../web/js/ui/dialogs/Dialogs");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const SpacedRepStats_1 = require("polar-firebase/src/firebase/om/SpacedRepStats");
const FirestoreCollections_1 = require("./FirestoreCollections");
const RendererAnalytics_1 = require("../../../../web/js/ga/RendererAnalytics");
const log = Logger_1.Logger.create();
class Reviewers {
    static start(datastoreCapabilities, prefs, repoDocAnnotations, mode, limit = 10) {
        this.create(datastoreCapabilities, prefs, repoDocAnnotations, mode, limit)
            .catch(err => console.error("Unable to start review: ", err));
    }
    static notifyPreview(prefs) {
        return __awaiter(this, void 0, void 0, function* () {
            const latch = new Latch_1.Latch();
            yield PreviewWarnings_1.PreviewWarnings.doWarning(prefs, () => latch.resolve(true));
            yield latch.get();
        });
    }
    static displayWebRequiredError() {
        Dialogs_1.Dialogs.confirm({
            title: 'Cloud sync required (please login)',
            subtitle: 'Cloud sync is required to review annotations.  Please login to review flashcards and reading.',
            type: 'danger',
            onConfirm: Functions_1.NULL_FUNCTION,
            noCancel: true
        });
    }
    static displayNoTasksMessage() {
        Dialogs_1.Dialogs.confirm({
            title: 'No tasks to complete',
            subtitle: "Awesome.  Looks like you're all caught up and have no tasks to complete.",
            type: 'success',
            onConfirm: Functions_1.NULL_FUNCTION,
            noCancel: true
        });
    }
    static create(datastoreCapabilities, prefs, repoDocAnnotations, mode, limit = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertPresent(mode, 'mode');
            const uid = yield Firebase_1.Firebase.currentUserID();
            if (!datastoreCapabilities.networkLayers.has('web')) {
                this.displayWebRequiredError();
                return;
            }
            if (!uid) {
                throw new Error("Not authenticated");
            }
            yield FirestoreCollections_1.FirestoreCollections.configure();
            yield this.notifyPreview(prefs);
            const calculateTaskReps = () => __awaiter(this, void 0, void 0, function* () {
                switch (mode) {
                    case "flashcard":
                        return yield ReviewerTasks_1.ReviewerTasks.createFlashcardTasks(repoDocAnnotations, limit);
                    case "reading":
                        return yield ReviewerTasks_1.ReviewerTasks.createReadingTasks(repoDocAnnotations, limit);
                }
            });
            const calculatedTaskReps = yield calculateTaskReps();
            const { taskReps } = calculatedTaskReps;
            const doWriteQueueStageCounts = () => __awaiter(this, void 0, void 0, function* () {
                const spacedRepStats = Object.assign({ type: 'queue', mode }, calculatedTaskReps.stageCounts);
                yield SpacedRepStats_1.SpacedRepStats.write(uid, spacedRepStats);
            });
            yield doWriteQueueStageCounts();
            if (taskReps.length === 0) {
                this.displayNoTasksMessage();
                return;
            }
            console.log("Found N tasks: " + taskReps.length);
            let injected;
            const doClose = () => {
                injected.destroy();
            };
            const completedStageCounts = S2Plus_1.StageCountsCalculator.createMutable();
            const incrCompletedStageCounts = (taskRep) => {
                switch (taskRep.stage) {
                    case "new":
                        ++completedStageCounts.nrNew;
                        break;
                    case "learning":
                        ++completedStageCounts.nrLearning;
                        break;
                    case "review":
                        ++completedStageCounts.nrReview;
                        break;
                    case "lapsed":
                        ++completedStageCounts.nrLapsed;
                        break;
                }
            };
            const doWriteCompletedStageCounts = () => __awaiter(this, void 0, void 0, function* () {
                const spacedRepStats = Object.assign({ type: 'completed', mode }, completedStageCounts);
                yield SpacedRepStats_1.SpacedRepStats.write(uid, spacedRepStats);
            });
            const onFinished = () => {
                doWriteCompletedStageCounts()
                    .catch(err => log.error("Unable to write completed stage counts: ", err));
                doClose();
            };
            const onSuspended = (taskRep) => {
                const convertedSpacedRep = SpacedReps_1.SpacedReps.convertFromTaskRep(uid, taskRep);
                const spacedRep = Object.assign(Object.assign({}, convertedSpacedRep), { suspended: true });
                SpacedReps_1.SpacedReps.set(taskRep.id, spacedRep)
                    .catch(err => log.error("Could not save state: ", err));
            };
            const onRating = (taskRep, rating) => {
                console.log("Saving rating... ");
                const next = TasksCalculator_1.TasksCalculator.computeNextSpacedRep(taskRep, rating);
                const spacedRep = Dictionaries_1.Dictionaries.onlyDefinedProperties(Object.assign({ uid }, next));
                incrCompletedStageCounts(taskRep);
                SpacedReps_1.SpacedReps.set(next.id, spacedRep)
                    .then(() => console.log("Saving rating... done", JSON.stringify(spacedRep, null, '  ')))
                    .catch(err => log.error("Could not save state: ", err));
            };
            RendererAnalytics_1.RendererAnalytics.event({ category: 'reviewer', action: 'created-' + mode });
            injected = ReactInjector_1.ReactInjector.inject(React.createElement(LightModal_1.LightModal, null,
                React.createElement(Reviewer_1.Reviewer, { taskReps: taskReps, onRating: onRating, onSuspended: onSuspended, onFinished: onFinished })));
        });
    }
}
exports.Reviewers = Reviewers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmV2aWV3ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmV2aWV3ZXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsNEVBQTBGO0FBQzFGLDZDQUErQjtBQUMvQixtREFBOEM7QUFDOUMsK0RBQThEO0FBQzlELDBFQUFnRjtBQUNoRixpRUFBNEQ7QUFDNUQsb0ZBS2lFO0FBQ2pFLG9IQUd3RjtBQUN4RiwyREFBc0Q7QUFDdEQsbUVBQThEO0FBQzlELHFFQUFnRTtBQUNoRSx1REFBa0Q7QUFDbEQsdURBQWtEO0FBR2xELG1FQUE4RDtBQUM5RCxrRUFBNkQ7QUFDN0Qsa0ZBQTRGO0FBQzVGLGlFQUE0RDtBQUM1RCwrRUFBMEU7QUFJMUUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsU0FBUztJQUVYLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQTRDLEVBQzVDLEtBQXNCLEVBQ3RCLGtCQUFpRCxFQUNqRCxJQUFvQixFQUNwQixRQUFnQixFQUFFO1FBRWxDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7YUFDckUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUFHTyxNQUFNLENBQU8sYUFBYSxDQUFDLEtBQXNCOztZQUNyRCxNQUFNLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1lBRTFCLE1BQU0saUNBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUVsRSxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztR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Y2VzQ29udGVudCI6WyJpbXBvcnQge1Jldmlld2VyfSBmcm9tIFwiLi9SZXZpZXdlclwiO1xuaW1wb3J0IHtJbmplY3RlZENvbXBvbmVudCwgUmVhY3RJbmplY3Rvcn0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy91aS91dGlsL1JlYWN0SW5qZWN0b3JcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtSZXZpZXdlclRhc2tzfSBmcm9tIFwiLi9SZXZpZXdlclRhc2tzXCI7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zXCI7XG5pbXBvcnQge1NwYWNlZFJlcCwgU3BhY2VkUmVwc30gZnJvbSBcInBvbGFyLWZpcmViYXNlL3NyYy9maXJlYmFzZS9vbS9TcGFjZWRSZXBzXCI7XG5pbXBvcnQge0xpZ2h0TW9kYWx9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvdWkvTGlnaHRNb2RhbFwiO1xuaW1wb3J0IHtcbiAgICBSYXRpbmcsXG4gICAgUmVwZXRpdGlvbk1vZGUsXG4gICAgU3RhZ2VDb3VudHNDYWxjdWxhdG9yLFxuICAgIFRhc2tSZXBcbn0gZnJvbSBcInBvbGFyLXNwYWNlZC1yZXBldGl0aW9uLWFwaS9zcmMvc2NoZWR1bGVyL1MyUGx1cy9TMlBsdXNcIjtcbmltcG9ydCB7XG4gICAgQ2FsY3VsYXRlZFRhc2tSZXBzLFxuICAgIFRhc2tzQ2FsY3VsYXRvclxufSBmcm9tIFwicG9sYXItc3BhY2VkLXJlcGV0aXRpb24vc3JjL3NwYWNlZF9yZXBldGl0aW9uL3NjaGVkdWxlci9TMlBsdXMvVGFza3NDYWxjdWxhdG9yXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlclwiO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9maXJlYmFzZS9GaXJlYmFzZVwiO1xuaW1wb3J0IHtEaWN0aW9uYXJpZXN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvRGljdGlvbmFyaWVzXCI7XG5pbXBvcnQge0xhdGNofSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0xhdGNoXCI7XG5pbXBvcnQge1ByZXZpZXdXYXJuaW5nc30gZnJvbSBcIi4vUHJldmlld1dhcm5pbmdzXCI7XG5pbXBvcnQge1BlcnNpc3RlbnRQcmVmc30gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy91dGlsL3ByZWZzL1ByZWZzXCI7XG5pbXBvcnQge0RhdGFzdG9yZUNhcGFiaWxpdGllc30gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlXCI7XG5pbXBvcnQge0RpYWxvZ3N9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvdWkvZGlhbG9ncy9EaWFsb2dzXCI7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnNcIjtcbmltcG9ydCB7U3BhY2VkUmVwU3RhdCwgU3BhY2VkUmVwU3RhdHN9IGZyb20gXCJwb2xhci1maXJlYmFzZS9zcmMvZmlyZWJhc2Uvb20vU3BhY2VkUmVwU3RhdHNcIjtcbmltcG9ydCB7RmlyZXN0b3JlQ29sbGVjdGlvbnN9IGZyb20gXCIuL0ZpcmVzdG9yZUNvbGxlY3Rpb25zXCI7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2dhL1JlbmRlcmVyQW5hbHl0aWNzXCI7XG5pbXBvcnQge0lEb2NBbm5vdGF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2Fubm90YXRpb25fc2lkZWJhci9Eb2NBbm5vdGF0aW9uXCI7XG5pbXBvcnQge1JlYWRpbmdUYXNrQWN0aW9ufSBmcm9tIFwiLi9jYXJkcy9SZWFkaW5nVGFza0FjdGlvblwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBSZXZpZXdlcnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBzdGFydChkYXRhc3RvcmVDYXBhYmlsaXRpZXM6IERhdGFzdG9yZUNhcGFiaWxpdGllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZzOiBQZXJzaXN0ZW50UHJlZnMsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvRG9jQW5ub3RhdGlvbnM6IFJlYWRvbmx5QXJyYXk8SURvY0Fubm90YXRpb24+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogUmVwZXRpdGlvbk1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyID0gMTApIHtcblxuICAgICAgICB0aGlzLmNyZWF0ZShkYXRhc3RvcmVDYXBhYmlsaXRpZXMsIHByZWZzLCByZXBvRG9jQW5ub3RhdGlvbnMsIG1vZGUsIGxpbWl0KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIHN0YXJ0IHJldmlldzogXCIsIGVycikpO1xuXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBub3RpZnlQcmV2aWV3KHByZWZzOiBQZXJzaXN0ZW50UHJlZnMpIHtcbiAgICAgICAgY29uc3QgbGF0Y2ggPSBuZXcgTGF0Y2goKTtcblxuICAgICAgICBhd2FpdCBQcmV2aWV3V2FybmluZ3MuZG9XYXJuaW5nKHByZWZzLCAoKSA9PiBsYXRjaC5yZXNvbHZlKHRydWUpKTtcblxuICAgICAgICBhd2FpdCBsYXRjaC5nZXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBkaXNwbGF5V2ViUmVxdWlyZWRFcnJvcigpIHtcblxuICAgICAgICBEaWFsb2dzLmNvbmZpcm0oe1xuICAgICAgICAgICAgdGl0bGU6ICdDbG91ZCBzeW5jIHJlcXVpcmVkIChwbGVhc2UgbG9naW4pJyxcbiAgICAgICAgICAgIHN1YnRpdGxlOiAnQ2xvdWQgc3luYyBpcyByZXF1aXJlZCB0byByZXZpZXcgYW5ub3RhdGlvbnMuICBQbGVhc2UgbG9naW4gdG8gcmV2aWV3IGZsYXNoY2FyZHMgYW5kIHJlYWRpbmcuJyxcbiAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgb25Db25maXJtOiBOVUxMX0ZVTkNUSU9OLFxuICAgICAgICAgICAgbm9DYW5jZWw6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBkaXNwbGF5Tm9UYXNrc01lc3NhZ2UoKSB7XG5cbiAgICAgICAgRGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgIHRpdGxlOiAnTm8gdGFza3MgdG8gY29tcGxldGUnLFxuICAgICAgICAgICAgc3VidGl0bGU6IFwiQXdlc29tZS4gIExvb2tzIGxpa2UgeW91J3JlIGFsbCBjYXVnaHQgdXAgYW5kIGhhdmUgbm8gdGFza3MgdG8gY29tcGxldGUuXCIsXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBvbkNvbmZpcm06IE5VTExfRlVOQ1RJT04sXG4gICAgICAgICAgICBub0NhbmNlbDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlKGRhdGFzdG9yZUNhcGFiaWxpdGllczogRGF0YXN0b3JlQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZzOiBQZXJzaXN0ZW50UHJlZnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb0RvY0Fubm90YXRpb25zOiBSZWFkb25seUFycmF5PElEb2NBbm5vdGF0aW9uPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBSZXBldGl0aW9uTW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyID0gMTApIHtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQobW9kZSwgJ21vZGUnKTtcblxuICAgICAgICBjb25zdCB1aWQgPSBhd2FpdCBGaXJlYmFzZS5jdXJyZW50VXNlcklEKCk7XG5cbiAgICAgICAgaWYgKCEgZGF0YXN0b3JlQ2FwYWJpbGl0aWVzLm5ldHdvcmtMYXllcnMuaGFzKCd3ZWInKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2ViUmVxdWlyZWRFcnJvcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEgdWlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYXV0aGVudGljYXRlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IEZpcmVzdG9yZUNvbGxlY3Rpb25zLmNvbmZpZ3VyZSgpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMubm90aWZ5UHJldmlldyhwcmVmcyk7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlVGFza1JlcHMgPSBhc3luYyAoKTogUHJvbWlzZTxDYWxjdWxhdGVkVGFza1JlcHM8YW55Pj4gPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImZsYXNoY2FyZFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgUmV2aWV3ZXJUYXNrcy5jcmVhdGVGbGFzaGNhcmRUYXNrcyhyZXBvRG9jQW5ub3RhdGlvbnMsIGxpbWl0KTtcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVhZGluZ1wiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgUmV2aWV3ZXJUYXNrcy5jcmVhdGVSZWFkaW5nVGFza3MocmVwb0RvY0Fubm90YXRpb25zLCBsaW1pdCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRUYXNrUmVwcyA9IGF3YWl0IGNhbGN1bGF0ZVRhc2tSZXBzKCk7XG4gICAgICAgIGNvbnN0IHt0YXNrUmVwc30gPSBjYWxjdWxhdGVkVGFza1JlcHM7XG5cbiAgICAgICAgY29uc3QgZG9Xcml0ZVF1ZXVlU3RhZ2VDb3VudHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNwYWNlZFJlcFN0YXRzOiBTcGFjZWRSZXBTdGF0ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdxdWV1ZScsXG4gICAgICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgICAgICAuLi5jYWxjdWxhdGVkVGFza1JlcHMuc3RhZ2VDb3VudHNcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGF3YWl0IFNwYWNlZFJlcFN0YXRzLndyaXRlKHVpZCwgc3BhY2VkUmVwU3RhdHMpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgZG9Xcml0ZVF1ZXVlU3RhZ2VDb3VudHMoKTtcblxuICAgICAgICBpZiAodGFza1JlcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlOb1Rhc2tzTWVzc2FnZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJGb3VuZCBOIHRhc2tzOiBcIiArIHRhc2tSZXBzLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IGluamVjdGVkOiBJbmplY3RlZENvbXBvbmVudCB8IHVuZGVmaW5lZDtcblxuICAgICAgICBjb25zdCBkb0Nsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgaW5qZWN0ZWQhLmRlc3Ryb3koKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjb21wbGV0ZWRTdGFnZUNvdW50cyA9IFN0YWdlQ291bnRzQ2FsY3VsYXRvci5jcmVhdGVNdXRhYmxlKCk7XG5cbiAgICAgICAgY29uc3QgaW5jckNvbXBsZXRlZFN0YWdlQ291bnRzID0gKHRhc2tSZXA6IFRhc2tSZXA8YW55PikgPT4ge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRhc2tSZXAuc3RhZ2UpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwibmV3XCI6XG4gICAgICAgICAgICAgICAgICAgICsrY29tcGxldGVkU3RhZ2VDb3VudHMubnJOZXc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWFybmluZ1wiOlxuICAgICAgICAgICAgICAgICAgICArK2NvbXBsZXRlZFN0YWdlQ291bnRzLm5yTGVhcm5pbmc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyZXZpZXdcIjpcbiAgICAgICAgICAgICAgICAgICAgKytjb21wbGV0ZWRTdGFnZUNvdW50cy5uclJldmlldztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxhcHNlZFwiOlxuICAgICAgICAgICAgICAgICAgICArK2NvbXBsZXRlZFN0YWdlQ291bnRzLm5yTGFwc2VkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRvV3JpdGVDb21wbGV0ZWRTdGFnZUNvdW50cyA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3Qgc3BhY2VkUmVwU3RhdHM6IFNwYWNlZFJlcFN0YXQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NvbXBsZXRlZCcsXG4gICAgICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgICAgICAuLi5jb21wbGV0ZWRTdGFnZUNvdW50c1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYXdhaXQgU3BhY2VkUmVwU3RhdHMud3JpdGUodWlkLCBzcGFjZWRSZXBTdGF0cyk7XG5cbiAgICAgICAgfTtcblxuXG4gICAgICAgIGNvbnN0IG9uRmluaXNoZWQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGRvV3JpdGVDb21wbGV0ZWRTdGFnZUNvdW50cygpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gd3JpdGUgY29tcGxldGVkIHN0YWdlIGNvdW50czogXCIsIGVycikpO1xuXG4gICAgICAgICAgICBkb0Nsb3NlKCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvblN1c3BlbmRlZCA9ICh0YXNrUmVwOiBUYXNrUmVwPFJlYWRpbmdUYXNrQWN0aW9uPikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRTcGFjZWRSZXAgPSBTcGFjZWRSZXBzLmNvbnZlcnRGcm9tVGFza1JlcCh1aWQsIHRhc2tSZXApO1xuICAgICAgICAgICAgY29uc3Qgc3BhY2VkUmVwOiBTcGFjZWRSZXAgPSB7XG4gICAgICAgICAgICAgICAgLi4uY29udmVydGVkU3BhY2VkUmVwLFxuICAgICAgICAgICAgICAgIHN1c3BlbmRlZDogdHJ1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgU3BhY2VkUmVwcy5zZXQodGFza1JlcC5pZCwgc3BhY2VkUmVwKVxuICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBzYXZlIHN0YXRlOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvblJhdGluZyA9ICh0YXNrUmVwOiBUYXNrUmVwPGFueT4sIHJhdGluZzogUmF0aW5nKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2F2aW5nIHJhdGluZy4uLiBcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSBUYXNrc0NhbGN1bGF0b3IuY29tcHV0ZU5leHRTcGFjZWRSZXAodGFza1JlcCwgcmF0aW5nKTtcblxuICAgICAgICAgICAgY29uc3Qgc3BhY2VkUmVwOiBTcGFjZWRSZXAgPSBEaWN0aW9uYXJpZXMub25seURlZmluZWRQcm9wZXJ0aWVzKHt1aWQsIC4uLm5leHR9KTtcblxuICAgICAgICAgICAgaW5jckNvbXBsZXRlZFN0YWdlQ291bnRzKHRhc2tSZXApO1xuXG4gICAgICAgICAgICBTcGFjZWRSZXBzLnNldChuZXh0LmlkLCBzcGFjZWRSZXApXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJTYXZpbmcgcmF0aW5nLi4uIGRvbmVcIiwgSlNPTi5zdHJpbmdpZnkoc3BhY2VkUmVwLCBudWxsLCAnICAnKSkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3Qgc2F2ZSBzdGF0ZTogXCIsIGVycikpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZW1pdCBzdGF0cyB0aGF0IHRoZSByZXZpZXdlciB3YXMgcnVuLi4uXG4gICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ3Jldmlld2VyJywgYWN0aW9uOiAnY3JlYXRlZC0nICsgbW9kZX0pO1xuXG4gICAgICAgIGluamVjdGVkID0gUmVhY3RJbmplY3Rvci5pbmplY3QoXG4gICAgICAgICAgICA8TGlnaHRNb2RhbD5cbiAgICAgICAgICAgICAgICA8UmV2aWV3ZXIgdGFza1JlcHM9e3Rhc2tSZXBzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblJhdGluZz17b25SYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VzcGVuZGVkPXtvblN1c3BlbmRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25GaW5pc2hlZD17b25GaW5pc2hlZH0vPlxuICAgICAgICAgICAgPC9MaWdodE1vZGFsPik7XG5cbiAgICB9XG5cbn1cbiJdfQ==