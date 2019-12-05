"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FlashcardArchetype_1 = require("./FlashcardArchetype");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const FlashcardField_1 = require("./FlashcardField");
const FlashcardFieldType_1 = require("./FlashcardFieldType");
class FlashcardRegistry {
    constructor() {
        this.registry = {};
    }
    register(flashcardArchetype) {
        Preconditions_1.Preconditions.assertNotNull(flashcardArchetype.id, "id");
        this.registry[flashcardArchetype.id] = flashcardArchetype;
    }
    get(id) {
    }
    hasKey(id) {
        return id in this.registry;
    }
    keys() {
        return Object.keys(this.registry);
    }
    values() {
        return Object.values(this.registry);
    }
    static createDefault() {
        const flashcardRegistry = new FlashcardRegistry();
        flashcardRegistry.register(new FlashcardArchetype_1.FlashcardArchetype({
            id: "9d146db1-7c31-4bcf-866b-7b485c4e50ea",
            name: "Front and Back",
            description: "Standard front and back flashcard.",
            fields: {
                "front": new FlashcardField_1.FlashcardField({
                    name: "front",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The front of this card",
                    required: true
                }),
                "back": new FlashcardField_1.FlashcardField({
                    name: "back",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The back of this card",
                    required: true
                }),
                "extra": new FlashcardField_1.FlashcardField({
                    name: "extra",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "Extra data shown after the card has been answered.",
                    required: false
                }),
                "source": new FlashcardField_1.FlashcardField({
                    name: "source",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The source of this card. Name of the webpage, book, whitepaper, etc.",
                    required: false
                }),
                "link": new FlashcardField_1.FlashcardField({
                    name: "link",
                    type: FlashcardFieldType_1.FlashcardFieldType.URL,
                    description: "A link for more information regarding this flashcard. Usually the link to the source.",
                    required: false
                }),
                "image": new FlashcardField_1.FlashcardField({
                    name: "image",
                    type: FlashcardFieldType_1.FlashcardFieldType.IMAGE_URL,
                    description: "A link to an image for this flashcard.",
                    required: false
                })
            }
        }));
        flashcardRegistry.register(new FlashcardArchetype_1.FlashcardArchetype({
            id: "e3d25ed4-cafd-4350-84e8-123a4258e576",
            name: "Front and Back and Reverse",
            description: "Standard front and back flashcard (plus reverse)",
            fields: {
                "front": new FlashcardField_1.FlashcardField({
                    name: "front",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The front of this card",
                    required: true
                }),
                "back": new FlashcardField_1.FlashcardField({
                    name: "back",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The back of this card",
                    required: true
                }),
                "extra": new FlashcardField_1.FlashcardField({
                    name: "extra",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "Extra data shown after the card has been answered.",
                    required: false
                }),
                "source": new FlashcardField_1.FlashcardField({
                    name: "source",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The source of this card. Name of the webpage, book, whitepaper, etc.",
                    required: false
                }),
                "link": new FlashcardField_1.FlashcardField({
                    name: "link",
                    type: FlashcardFieldType_1.FlashcardFieldType.URL,
                    description: "A link for more information regarding this flashcard. Usually the link to the source.",
                    required: false
                }),
                "image": new FlashcardField_1.FlashcardField({
                    name: "image",
                    type: FlashcardFieldType_1.FlashcardFieldType.IMAGE_URL,
                    description: "A link to an image for this flashcard.",
                    required: false
                })
            }
        }));
        flashcardRegistry.register(new FlashcardArchetype_1.FlashcardArchetype({
            id: "76152976-d7ae-4348-9571-d65e48050c3f",
            name: "cloze",
            description: "Cloze flashcard with cloze text.",
            fields: {
                "text": new FlashcardField_1.FlashcardField({
                    name: "text",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The text of this card.",
                    required: true
                }),
                "extra": new FlashcardField_1.FlashcardField({
                    name: "extra",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "Extra data shown after the card has been answered.",
                    required: false
                }),
                "source": new FlashcardField_1.FlashcardField({
                    name: "source",
                    type: FlashcardFieldType_1.FlashcardFieldType.TEXT,
                    description: "The source of this card. Name of the webpage, book, whitepaper, etc.",
                    required: false
                }),
                "link": new FlashcardField_1.FlashcardField({
                    name: "link",
                    type: FlashcardFieldType_1.FlashcardFieldType.URL,
                    description: "A link for more information regarding this flashcard. Usually the link to the source.",
                    required: false
                }),
                "image": new FlashcardField_1.FlashcardField({
                    name: "image",
                    type: FlashcardFieldType_1.FlashcardFieldType.IMAGE_URL,
                    description: "A link to an image for this flashcard.",
                    required: false
                })
            }
        }));
        return flashcardRegistry;
    }
}
exports.FlashcardRegistry = FlashcardRegistry;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkUmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGbGFzaGNhcmRSZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUF3RDtBQUN4RCxrRUFBNkQ7QUFDN0QscURBQWdEO0FBQ2hELDZEQUF3RDtBQU94RCxNQUFhLGlCQUFpQjtJQUE5QjtRQUVxQixhQUFRLEdBQXVDLEVBQUUsQ0FBQztJQW9LdkUsQ0FBQztJQWxLVSxRQUFRLENBQUMsa0JBQXNDO1FBQ2xELDZCQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO0lBQzlELENBQUM7SUFFTSxHQUFHLENBQUMsRUFBVTtJQUVyQixDQUFDO0lBRU0sTUFBTSxDQUFDLEVBQVU7UUFDcEIsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMvQixDQUFDO0lBRU0sSUFBSTtRQUNQLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUtNLE1BQU07UUFDVCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFLTSxNQUFNLENBQUMsYUFBYTtRQUV2QixNQUFNLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUVsRCxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx1Q0FBa0IsQ0FBQztZQUM5QyxFQUFFLEVBQUUsc0NBQXNDO1lBQzFDLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxNQUFNLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLElBQUksK0JBQWMsQ0FBQztvQkFDeEIsSUFBSSxFQUFFLE9BQU87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QUFLO2lCQUNsQixDQUFDO2FBQ0w7U0FFSixDQUFDLENBQUMsQ0FBQztRQUVKLE9BQU8saUJBQWlCLENBQUM7SUFFN0IsQ0FBQztDQUVKO0FBdEtELDhDQXNLQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZsYXNoY2FyZEFyY2hldHlwZX0gZnJvbSAnLi9GbGFzaGNhcmRBcmNoZXR5cGUnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtGbGFzaGNhcmRGaWVsZH0gZnJvbSAnLi9GbGFzaGNhcmRGaWVsZCc7XG5pbXBvcnQge0ZsYXNoY2FyZEZpZWxkVHlwZX0gZnJvbSAnLi9GbGFzaGNhcmRGaWVsZFR5cGUnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSByZWdpc3RyeSBGbGFzaGNhcmRBcmNoZXR5cGVzIGZvciB1c2UgYnkgdGhlIHVzZXIuXG4gKlxuICogQHR5cGUge0ZsYXNoY2FyZFJlZ2lzdHJ5fVxuICovXG5leHBvcnQgY2xhc3MgRmxhc2hjYXJkUmVnaXN0cnkge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSByZWdpc3RyeToge1tpZDogc3RyaW5nXTogRmxhc2hjYXJkQXJjaGV0eXBlfSA9IHt9O1xuXG4gICAgcHVibGljIHJlZ2lzdGVyKGZsYXNoY2FyZEFyY2hldHlwZTogRmxhc2hjYXJkQXJjaGV0eXBlKSB7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChmbGFzaGNhcmRBcmNoZXR5cGUuaWQsIFwiaWRcIik7XG4gICAgICAgIHRoaXMucmVnaXN0cnlbZmxhc2hjYXJkQXJjaGV0eXBlLmlkXSA9IGZsYXNoY2FyZEFyY2hldHlwZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGlkOiBzdHJpbmcpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBoYXNLZXkoaWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gaWQgaW4gdGhpcy5yZWdpc3RyeTtcbiAgICB9XG5cbiAgICBwdWJsaWMga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucmVnaXN0cnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdmFsdWVzIGluIHRoZSByZWdpc3RyeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnJlZ2lzdHJ5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdGhlIGRlZmF1bHQgZmxhc2hjYXJkIHJlZ2lzdHJ5LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRGVmYXVsdCgpIHtcblxuICAgICAgICBjb25zdCBmbGFzaGNhcmRSZWdpc3RyeSA9IG5ldyBGbGFzaGNhcmRSZWdpc3RyeSgpO1xuXG4gICAgICAgIGZsYXNoY2FyZFJlZ2lzdHJ5LnJlZ2lzdGVyKG5ldyBGbGFzaGNhcmRBcmNoZXR5cGUoe1xuICAgICAgICAgICAgaWQ6IFwiOWQxNDZkYjEtN2MzMS00YmNmLTg2NmItN2I0ODVjNGU1MGVhXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkZyb250IGFuZCBCYWNrXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdGFuZGFyZCBmcm9udCBhbmQgYmFjayBmbGFzaGNhcmQuXCIsXG4gICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICBcImZyb250XCI6IG5ldyBGbGFzaGNhcmRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZnJvbnRcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRmxhc2hjYXJkRmllbGRUeXBlLlRFWFQsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBmcm9udCBvZiB0aGlzIGNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcImJhY2tcIjogbmV3IEZsYXNoY2FyZEZpZWxkKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJiYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5URVhULFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYmFjayBvZiB0aGlzIGNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcImV4dHJhXCI6IG5ldyBGbGFzaGNhcmRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZXh0cmFcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRmxhc2hjYXJkRmllbGRUeXBlLlRFWFQsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkV4dHJhIGRhdGEgc2hvd24gYWZ0ZXIgdGhlIGNhcmQgaGFzIGJlZW4gYW5zd2VyZWQuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFwic291cmNlXCI6IG5ldyBGbGFzaGNhcmRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic291cmNlXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5URVhULFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgc291cmNlIG9mIHRoaXMgY2FyZC4gTmFtZSBvZiB0aGUgd2VicGFnZSwgYm9vaywgd2hpdGVwYXBlciwgZXRjLlwiLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogbmV3IEZsYXNoY2FyZEZpZWxkKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5VUkwsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgbGluayBmb3IgbW9yZSBpbmZvcm1hdGlvbiByZWdhcmRpbmcgdGhpcyBmbGFzaGNhcmQuIFVzdWFsbHkgdGhlIGxpbmsgdG8gdGhlIHNvdXJjZS5cIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBuZXcgRmxhc2hjYXJkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5JTUFHRV9VUkwsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgbGluayB0byBhbiBpbWFnZSBmb3IgdGhpcyBmbGFzaGNhcmQuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICBmbGFzaGNhcmRSZWdpc3RyeS5yZWdpc3RlcihuZXcgRmxhc2hjYXJkQXJjaGV0eXBlKHtcbiAgICAgICAgICAgIGlkOiBcImUzZDI1ZWQ0LWNhZmQtNDM1MC04NGU4LTEyM2E0MjU4ZTU3NlwiLFxuICAgICAgICAgICAgbmFtZTogXCJGcm9udCBhbmQgQmFjayBhbmQgUmV2ZXJzZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU3RhbmRhcmQgZnJvbnQgYW5kIGJhY2sgZmxhc2hjYXJkIChwbHVzIHJldmVyc2UpXCIsXG4gICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICBcImZyb250XCI6IG5ldyBGbGFzaGNhcmRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZnJvbnRcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRmxhc2hjYXJkRmllbGRUeXBlLlRFWFQsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBmcm9udCBvZiB0aGlzIGNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcImJhY2tcIjogbmV3IEZsYXNoY2FyZEZpZWxkKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJiYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5URVhULFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYmFjayBvZiB0aGlzIGNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcImV4dHJhXCI6IG5ldyBGbGFzaGNhcmRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZXh0cmFcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRmxhc2hjYXJkRmllbGRUeXBlLlRFWFQsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkV4dHJhIGRhdGEgc2hvd24gYWZ0ZXIgdGhlIGNhcmQgaGFzIGJlZW4gYW5zd2VyZWQuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFwic291cmNlXCI6IG5ldyBGbGFzaGNhcmRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic291cmNlXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5URVhULFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgc291cmNlIG9mIHRoaXMgY2FyZC4gTmFtZSBvZiB0aGUgd2VicGFnZSwgYm9vaywgd2hpdGVwYXBlciwgZXRjLlwiLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogbmV3IEZsYXNoY2FyZEZpZWxkKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5VUkwsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgbGluayBmb3IgbW9yZSBpbmZvcm1hdGlvbiByZWdhcmRpbmcgdGhpcyBmbGFzaGNhcmQuIFVzdWFsbHkgdGhlIGxpbmsgdG8gdGhlIHNvdXJjZS5cIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBuZXcgRmxhc2hjYXJkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5JTUFHRV9VUkwsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgbGluayB0byBhbiBpbWFnZSBmb3IgdGhpcyBmbGFzaGNhcmQuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICBmbGFzaGNhcmRSZWdpc3RyeS5yZWdpc3RlcihuZXcgRmxhc2hjYXJkQXJjaGV0eXBlKHtcbiAgICAgICAgICAgIGlkOiBcIjc2MTUyOTc2LWQ3YWUtNDM0OC05NTcxLWQ2NWU0ODA1MGMzZlwiLFxuICAgICAgICAgICAgbmFtZTogXCJjbG96ZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ2xvemUgZmxhc2hjYXJkIHdpdGggY2xvemUgdGV4dC5cIixcbiAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBuZXcgRmxhc2hjYXJkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRmxhc2hjYXJkRmllbGRUeXBlLlRFWFQsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB0ZXh0IG9mIHRoaXMgY2FyZC5cIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcImV4dHJhXCI6IG5ldyBGbGFzaGNhcmRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZXh0cmFcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRmxhc2hjYXJkRmllbGRUeXBlLlRFWFQsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkV4dHJhIGRhdGEgc2hvd24gYWZ0ZXIgdGhlIGNhcmQgaGFzIGJlZW4gYW5zd2VyZWQuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFwic291cmNlXCI6IG5ldyBGbGFzaGNhcmRGaWVsZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic291cmNlXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5URVhULFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgc291cmNlIG9mIHRoaXMgY2FyZC4gTmFtZSBvZiB0aGUgd2VicGFnZSwgYm9vaywgd2hpdGVwYXBlciwgZXRjLlwiLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogbmV3IEZsYXNoY2FyZEZpZWxkKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5VUkwsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgbGluayBmb3IgbW9yZSBpbmZvcm1hdGlvbiByZWdhcmRpbmcgdGhpcyBmbGFzaGNhcmQuIFVzdWFsbHkgdGhlIGxpbmsgdG8gdGhlIHNvdXJjZS5cIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBuZXcgRmxhc2hjYXJkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZsYXNoY2FyZEZpZWxkVHlwZS5JTUFHRV9VUkwsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgbGluayB0byBhbiBpbWFnZSBmb3IgdGhpcyBmbGFzaGNhcmQuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJldHVybiBmbGFzaGNhcmRSZWdpc3RyeTtcblxuICAgIH1cblxufTtcbiJdfQ==