"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MutationType_1 = require("./MutationType");
const MutationState_1 = require("./MutationState");
class MutationTypes {
    static toMutationState(mutationType) {
        switch (mutationType) {
            case MutationType_1.MutationType.INITIAL:
                return MutationState_1.MutationState.PRESENT;
            case MutationType_1.MutationType.SET:
                return MutationState_1.MutationState.PRESENT;
            case MutationType_1.MutationType.DELETE:
                return MutationState_1.MutationState.ABSENT;
            default:
                throw new Error("Invalid mutationType: " + mutationType);
        }
    }
}
exports.MutationTypes = MutationTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXV0YXRpb25UeXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk11dGF0aW9uVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBNEM7QUFDNUMsbURBQThDO0FBRTlDLE1BQWEsYUFBYTtJQUVmLE1BQU0sQ0FBQyxlQUFlLENBQUMsWUFBMEI7UUFFcEQsUUFBUSxZQUFZLEVBQUU7WUFDbEIsS0FBSywyQkFBWSxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8sNkJBQWEsQ0FBQyxPQUFPLENBQUM7WUFDakMsS0FBSywyQkFBWSxDQUFDLEdBQUc7Z0JBQ2pCLE9BQU8sNkJBQWEsQ0FBQyxPQUFPLENBQUM7WUFDakMsS0FBSywyQkFBWSxDQUFDLE1BQU07Z0JBQ3BCLE9BQU8sNkJBQWEsQ0FBQyxNQUFNLENBQUM7WUFFaEM7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxZQUFZLENBQUMsQ0FBQztTQUVoRTtJQUVMLENBQUM7Q0FFSjtBQW5CRCxzQ0FtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge011dGF0aW9uVHlwZX0gZnJvbSAnLi9NdXRhdGlvblR5cGUnO1xuaW1wb3J0IHtNdXRhdGlvblN0YXRlfSBmcm9tICcuL011dGF0aW9uU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgTXV0YXRpb25UeXBlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvTXV0YXRpb25TdGF0ZShtdXRhdGlvblR5cGU6IE11dGF0aW9uVHlwZSkge1xuXG4gICAgICAgIHN3aXRjaCAobXV0YXRpb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIE11dGF0aW9uVHlwZS5JTklUSUFMOlxuICAgICAgICAgICAgICAgIHJldHVybiBNdXRhdGlvblN0YXRlLlBSRVNFTlQ7XG4gICAgICAgICAgICBjYXNlIE11dGF0aW9uVHlwZS5TRVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE11dGF0aW9uU3RhdGUuUFJFU0VOVDtcbiAgICAgICAgICAgIGNhc2UgTXV0YXRpb25UeXBlLkRFTEVURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gTXV0YXRpb25TdGF0ZS5BQlNFTlQ7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBtdXRhdGlvblR5cGU6IFwiICsgbXV0YXRpb25UeXBlKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==