"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectIDs_1 = require("../util/ObjectIDs");
class Docs {
    static create(docMeta, permission) {
        const mutable = permission.mode === 'rw';
        return {
            oid: ObjectIDs_1.ObjectIDs.create(),
            docMeta,
            docInfo: docMeta.docInfo,
            permission,
            mutable
        };
    }
}
exports.Docs = Docs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxpREFBNEM7QUFHNUMsTUFBYSxJQUFJO0lBRU4sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFpQixFQUFFLFVBQStCO1FBRW5FLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO1FBRXpDLE9BQU87WUFDSCxHQUFHLEVBQUUscUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDdkIsT0FBTztZQUNQLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztZQUN4QixVQUFVO1lBQ1YsT0FBTztTQUNWLENBQUM7SUFFTixDQUFDO0NBRUo7QUFoQkQsb0JBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb2N9IGZyb20gJy4vRG9jJztcbmltcG9ydCB7RGF0YXN0b3JlUGVybWlzc2lvbn0gZnJvbSAnLi4vZGF0YXN0b3JlL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4vRG9jTWV0YSc7XG5pbXBvcnQge09iamVjdElEc30gZnJvbSAnLi4vdXRpbC9PYmplY3RJRHMnO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcblxuZXhwb3J0IGNsYXNzIERvY3Mge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoZG9jTWV0YTogSURvY01ldGEsIHBlcm1pc3Npb246IERhdGFzdG9yZVBlcm1pc3Npb24pOiBEb2Mge1xuXG4gICAgICAgIGNvbnN0IG11dGFibGUgPSBwZXJtaXNzaW9uLm1vZGUgPT09ICdydyc7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9pZDogT2JqZWN0SURzLmNyZWF0ZSgpLFxuICAgICAgICAgICAgZG9jTWV0YSxcbiAgICAgICAgICAgIGRvY0luZm86IGRvY01ldGEuZG9jSW5mbyxcbiAgICAgICAgICAgIHBlcm1pc3Npb24sXG4gICAgICAgICAgICBtdXRhYmxlXG4gICAgICAgIH07XG5cbiAgICB9XG5cbn1cbiJdfQ==