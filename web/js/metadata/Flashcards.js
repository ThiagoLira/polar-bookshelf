"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dicts_1 = require("../util/Dicts");
const FlashcardType_1 = require("polar-shared/src/metadata/FlashcardType");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Flashcard_1 = require("./Flashcard");
const Texts_1 = require("polar-shared/src/metadata/Texts");
const TextType_1 = require("polar-shared/src/metadata/TextType");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
class Flashcards {
    static createMutable(flashcard) {
        return Object.assign({}, flashcard);
    }
    static create(type, fields, archetype, ref) {
        Preconditions_1.Preconditions.assertPresent(fields, "fields");
        const created = ISODateTimeStrings_1.ISODateTimeStrings.create();
        const lastUpdated = created;
        const id = Hashcodes_1.Hashcodes.createID({ fields, created });
        return Flashcard_1.Flashcard.newInstance(id, id, created, lastUpdated, type, fields, archetype, ref);
    }
    static createCloze(text, ref) {
        const archetype = this.CLOZE_ARCHETYPE;
        const fields = {};
        fields.text = Texts_1.Texts.create(text, TextType_1.TextType.HTML);
        return Flashcards.create(FlashcardType_1.FlashcardType.CLOZE, fields, archetype, ref);
    }
    static createFrontBack(front, back, ref) {
        const archetype = this.FRONT_BACK_ARCHETYPE;
        const fields = {};
        fields.front = Texts_1.Texts.create(front, TextType_1.TextType.HTML);
        fields.back = Texts_1.Texts.create(back, TextType_1.TextType.HTML);
        return Flashcards.create(FlashcardType_1.FlashcardType.BASIC_FRONT_BACK, fields, archetype, ref);
    }
    static createFromSchemaFormData(formData, archetype, ref) {
        const fields = {};
        Dicts_1.Dicts.ownKeys(formData, (key, value) => {
            fields[key] = Texts_1.Texts.create(value, TextType_1.TextType.HTML);
        });
        return Flashcards.create(FlashcardType_1.FlashcardType.BASIC_FRONT_BACK, fields, archetype, ref);
    }
    static convertFieldsToMap(fields = {}) {
        const result = {};
        for (const key of Object.keys(fields)) {
            result[key] = fields[key].HTML;
        }
        return result;
    }
}
exports.Flashcards = Flashcards;
Flashcards.CLOZE_ARCHETYPE = "76152976-d7ae-4348-9571-d65e48050c3f";
Flashcards.FRONT_BACK_ARCHETYPE = "9d146db1-7c31-4bcf-866b-7b485c4e50ea";
class MockFlashcards {
    static attachFlashcards(docMeta) {
        let idx = 0;
        Object.values(docMeta.pageMetas).forEach(pageMeta => {
            const archetype = "9d146db1-7c31-4bcf-866b-7b485c4e50ea";
            const front = Texts_1.Texts.create("What is the capital of California? <img src=\"data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7\" />\n" + idx, TextType_1.TextType.HTML);
            const back = Texts_1.Texts.create("Sacramento", TextType_1.TextType.TEXT);
            const fields = {
                'Front': front,
                'Back': back,
            };
            const ref = 'page:1';
            const flashcard = Flashcards.create(FlashcardType_1.FlashcardType.CLOZE, fields, archetype, ref);
            pageMeta.flashcards[flashcard.id] = flashcard;
            ++idx;
        });
        return docMeta;
    }
}
exports.MockFlashcards = MockFlashcards;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZsYXNoY2FyZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBb0M7QUFDcEMsMkVBQXNFO0FBQ3RFLCtEQUEwRDtBQUMxRCxrRUFBNkQ7QUFDN0QsMkNBQXNDO0FBQ3RDLDJEQUFzRDtBQUV0RCxpRUFBNEQ7QUFFNUQscUZBQWdGO0FBS2hGLE1BQWEsVUFBVTtJQUtaLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBb0I7UUFJNUMsT0FBTyxrQkFBZ0IsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBbUIsRUFBRSxNQUE2QixFQUFFLFNBQWlCLEVBQUUsR0FBUTtRQUVoRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFOUMsTUFBTSxPQUFPLEdBQUcsdUNBQWtCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBSzVCLE1BQU0sRUFBRSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFFakQsT0FBTyxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFN0YsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBZ0IsRUFBRSxHQUFRO1FBRWhELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFdkMsTUFBTSxNQUFNLEdBQTJCLEVBQUUsQ0FBQztRQUUxQyxNQUFNLENBQUMsSUFBSSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLG1CQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEQs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QUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0lBRW5CLENBQUM7Q0FFSjtBQXBDRCx3Q0FvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpY3RzfSBmcm9tICcuLi91dGlsL0RpY3RzJztcbmltcG9ydCB7Rmxhc2hjYXJkVHlwZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9GbGFzaGNhcmRUeXBlJztcbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvSGFzaGNvZGVzJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7Rmxhc2hjYXJkfSBmcm9tICcuL0ZsYXNoY2FyZCc7XG5pbXBvcnQge1RleHRzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1RleHRzJztcbmltcG9ydCB7VGV4dH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9UZXh0JztcbmltcG9ydCB7VGV4dFR5cGV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvVGV4dFR5cGUnO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuL0RvY01ldGEnO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ3N9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzJztcbmltcG9ydCB7SFRNTFN0cmluZ30gZnJvbSAnLi4vdXRpbC9IVE1MU3RyaW5nJztcbmltcG9ydCB7UmVmfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1JlZnMnO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcblxuZXhwb3J0IGNsYXNzIEZsYXNoY2FyZHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBDTE9aRV9BUkNIRVRZUEUgPSBcIjc2MTUyOTc2LWQ3YWUtNDM0OC05NTcxLWQ2NWU0ODA1MGMzZlwiO1xuICAgIHB1YmxpYyBzdGF0aWMgRlJPTlRfQkFDS19BUkNIRVRZUEUgPSBcIjlkMTQ2ZGIxLTdjMzEtNGJjZi04NjZiLTdiNDg1YzRlNTBlYVwiO1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVNdXRhYmxlKGZsYXNoY2FyZDogRmxhc2hjYXJkKTogRmxhc2hjYXJkIHtcbiAgICAgICAgLy8gVE9ETzogYW4gaWRpb3N5bmNyYWN5IG9mIHRoZSBwcm94aWVzIHN5c3RlbSBpcyB0aGF0IGl0IG11dGF0ZXMgdGhlXG4gICAgICAgIC8vIG9iamVjdCBzbyBpZiBpdCdzIHJlYWQgb25seSBpdCB3b24ndCB3b3JrLiAgVGhpcyBpcyBhIGJ1ZyB3aXRoXG4gICAgICAgIC8vIFByb3hpZXMgc28gSSBuZWVkIHRvIGFsc28gZml4IHRoYXQgYnVnIHRoZXJlIGluIHRoZSBmdXR1cmUuXG4gICAgICAgIHJldHVybiA8Rmxhc2hjYXJkPiB7Li4uZmxhc2hjYXJkfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSh0eXBlOiBGbGFzaGNhcmRUeXBlLCBmaWVsZHM6IHtba2V5OiBzdHJpbmddOiBUZXh0fSwgYXJjaGV0eXBlOiBzdHJpbmcsIHJlZjogUmVmKSB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KGZpZWxkcywgXCJmaWVsZHNcIik7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlZCA9IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKTtcbiAgICAgICAgY29uc3QgbGFzdFVwZGF0ZWQgPSBjcmVhdGVkO1xuXG4gICAgICAgIC8vIFRPRE86IGltcGxlbWVudCAnbWFjaGluZSBjb2RlcycgaGVyZSB3aGVyZSB3ZSBoYXZlIGEgdW5pcXVlIGNvZGUgcGVyXG4gICAgICAgIC8vIHBoeXNpY2FsIGRldmljZS4gIFRoaXMgd2F5IHR3byBwZW9wbGUgY2FuIGNyZWF0ZSB0aGUgc2FtZSBmbGFzaGNhcmRcbiAgICAgICAgLy8gYW5kIG5ldmVyIGNvbmZsaWN0LiAgVGhpcyB3YXkgd2Ugc3VwcG9ydCBkaXN0cmlidXRlZCBiZWhhdmlvci5cbiAgICAgICAgY29uc3QgaWQgPSBIYXNoY29kZXMuY3JlYXRlSUQoe2ZpZWxkcywgY3JlYXRlZH0pO1xuXG4gICAgICAgIHJldHVybiBGbGFzaGNhcmQubmV3SW5zdGFuY2UoaWQsIGlkLCBjcmVhdGVkLCBsYXN0VXBkYXRlZCwgdHlwZSwgZmllbGRzLCBhcmNoZXR5cGUsIHJlZik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUNsb3plKHRleHQ6IEhUTUxTdHJpbmcsIHJlZjogUmVmKSB7XG5cbiAgICAgICAgY29uc3QgYXJjaGV0eXBlID0gdGhpcy5DTE9aRV9BUkNIRVRZUEU7XG5cbiAgICAgICAgY29uc3QgZmllbGRzOiB7W2tleTogc3RyaW5nXTogVGV4dCB9ID0ge307XG5cbiAgICAgICAgZmllbGRzLnRleHQgPSBUZXh0cy5jcmVhdGUodGV4dCwgVGV4dFR5cGUuSFRNTCk7XG5cbiAgICAgICAgcmV0dXJuIEZsYXNoY2FyZHMuY3JlYXRlKEZsYXNoY2FyZFR5cGUuQ0xPWkUsIGZpZWxkcywgYXJjaGV0eXBlLCByZWYpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZmxhc2hjYXJkIGZyb20gdGhlIHJhdywgY29tcGxldGVkLCBzY2hlbWEgZm9ybSBkYXRhLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRnJvbnRCYWNrKGZyb250OiBIVE1MU3RyaW5nLCBiYWNrOiBIVE1MU3RyaW5nLCByZWY6IFJlZikge1xuXG4gICAgICAgIGNvbnN0IGFyY2hldHlwZSA9IHRoaXMuRlJPTlRfQkFDS19BUkNIRVRZUEU7XG5cbiAgICAgICAgY29uc3QgZmllbGRzOiB7W2tleTogc3RyaW5nXTogVGV4dCB9ID0ge307XG5cbiAgICAgICAgZmllbGRzLmZyb250ID0gVGV4dHMuY3JlYXRlKGZyb250LCBUZXh0VHlwZS5IVE1MKTtcbiAgICAgICAgZmllbGRzLmJhY2sgPSBUZXh0cy5jcmVhdGUoYmFjaywgVGV4dFR5cGUuSFRNTCk7XG5cbiAgICAgICAgcmV0dXJuIEZsYXNoY2FyZHMuY3JlYXRlKEZsYXNoY2FyZFR5cGUuQkFTSUNfRlJPTlRfQkFDSywgZmllbGRzLCBhcmNoZXR5cGUsIHJlZik7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBmbGFzaGNhcmQgZnJvbSB0aGUgcmF3LCBjb21wbGV0ZWQsIHNjaGVtYSBmb3JtIGRhdGEuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVGcm9tU2NoZW1hRm9ybURhdGEoZm9ybURhdGE6IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfSwgYXJjaGV0eXBlOiBzdHJpbmcsIHJlZjogUmVmKSB7XG5cbiAgICAgICAgLy8gVE9ETzogdGhlIG1hcmtkb3duIG5lZWRzIHRvIGJlIGNvbnZlcnRlZCB0byBIVE1MIGFzIHdlbGwuICBUaGUgdGV4dFxuICAgICAgICAvLyB3ZSBnZXQgZnJvbSB0aGUgbWFya2Rvd24gd2lkZ2V0IGlzIG1hcmtkb3duLiBOb3QgSFRNTCBhbmQgSSBjb25maXJtZWRcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgY2FzZS5cblxuICAgICAgICBjb25zdCBmaWVsZHM6IHtba2V5OiBzdHJpbmddOiBUZXh0IH0gPSB7fTtcblxuICAgICAgICAvLyBub3cgd29yayB3aXRoIHRoZSBmb3JtRGF0YSB0byBjcmVhdGUgdGhlIGZpZWxkcy5cbiAgICAgICAgRGljdHMub3duS2V5cyhmb3JtRGF0YSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGZpZWxkc1trZXldID0gVGV4dHMuY3JlYXRlKHZhbHVlLCBUZXh0VHlwZS5IVE1MKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIEZsYXNoY2FyZHMuY3JlYXRlKEZsYXNoY2FyZFR5cGUuQkFTSUNfRlJPTlRfQkFDSywgZmllbGRzLCBhcmNoZXR5cGUsIHJlZik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGaWVsZHNUb01hcChmaWVsZHM6IHtba2V5OiBzdHJpbmddOiBUZXh0IH0gPSB7fSkge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1tuYW1lOiBzdHJpbmddOiBIVE1MU3RyaW5nfSA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGZpZWxkcykpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gZmllbGRzW2tleV0uSFRNTCE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBNb2NrRmxhc2hjYXJkcyB7XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggbW9jayBmbGFzaGNhcmRzIG9uIHRoZSBnaXZlbiBEb2NNZXRhIGZvciB0ZXN0aW5nXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhdHRhY2hGbGFzaGNhcmRzKGRvY01ldGE6IElEb2NNZXRhKSB7XG5cbiAgICAgICAgbGV0IGlkeCA9IDA7XG5cbiAgICAgICAgT2JqZWN0LnZhbHVlcyhkb2NNZXRhLnBhZ2VNZXRhcykuZm9yRWFjaChwYWdlTWV0YSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGFyY2hldHlwZSA9IFwiOWQxNDZkYjEtN2MzMS00YmNmLTg2NmItN2I0ODVjNGU1MGVhXCI7XG5cbiAgICAgICAgICAgIC8vIG5vaW5zcGVjdGlvbiBUc0xpbnRcbiAgICAgICAgICAgIGNvbnN0IGZyb250ID0gVGV4dHMuY3JlYXRlKFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBDYWxpZm9ybmlhPyA8aW1nIHNyYz1cXFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFBUUFNUUFBT1JISE9WU0t1ZGZPdWxyU09wM1dPeURadTZRZHZDY2hQR29sZk8wby9YQnMvZk53ZmpaMGZybDMvenk3Ly8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDSDVCQWtBQUJBQUxBQUFBQUFRQUJBQUFBVlZJQ1NPWkdsQ1FBb3NKNm11N2ZpeVplS3FOS1RvUUdEc004aEJBRGdVWG9HQWlxaFN2cDVRQW5RS0dJZ1Vod0ZVWUxDVkRGQ3JLVUUxbEJhdkFWaUZJRGxUSW1iS0M1R20yaEIwU2xCQ0JNUWlCMFVqSVFBN1xcXCIgLz5cXG5cIiArIGlkeCwgVGV4dFR5cGUuSFRNTCk7XG4gICAgICAgICAgICBjb25zdCBiYWNrID0gVGV4dHMuY3JlYXRlKFwiU2FjcmFtZW50b1wiLCBUZXh0VHlwZS5URVhUKTtcblxuICAgICAgICAgICAgY29uc3QgZmllbGRzID0ge1xuICAgICAgICAgICAgICAgICdGcm9udCc6IGZyb250LFxuICAgICAgICAgICAgICAgICdCYWNrJzogYmFjayxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHJlZiA9ICdwYWdlOjEnO1xuXG4gICAgICAgICAgICBjb25zdCBmbGFzaGNhcmQgPSBGbGFzaGNhcmRzLmNyZWF0ZShGbGFzaGNhcmRUeXBlLkNMT1pFLCBmaWVsZHMsIGFyY2hldHlwZSwgcmVmKTtcblxuICAgICAgICAgICAgcGFnZU1ldGEuZmxhc2hjYXJkc1tmbGFzaGNhcmQuaWRdID0gZmxhc2hjYXJkO1xuXG4gICAgICAgICAgICArK2lkeDtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZG9jTWV0YTtcblxuICAgIH1cblxufVxuIl19