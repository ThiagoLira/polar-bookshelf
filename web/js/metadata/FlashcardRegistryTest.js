"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FlashcardRegistry_1 = require("./FlashcardRegistry");
const Assertions_1 = require("../test/Assertions");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
TestingTime_1.TestingTime.freeze();
describe('FlashcardRegistry', function () {
    describe('createDefault', function () {
        it("basic", function () {
            const flashcardRegistry = FlashcardRegistry_1.FlashcardRegistry.createDefault();
            const expected = [
                {
                    "id": "9d146db1-7c31-4bcf-866b-7b485c4e50ea",
                    "name": "Front and Back",
                    "description": "Standard front and back flashcard.",
                    "fields": {
                        "front": {
                            "name": "front",
                            "type": "TEXT",
                            "description": "The front of this card",
                            "rememberLastInput": false,
                            "required": true
                        },
                        "back": {
                            "name": "back",
                            "type": "TEXT",
                            "description": "The back of this card",
                            "rememberLastInput": false,
                            "required": true
                        },
                        "extra": {
                            "name": "extra",
                            "type": "TEXT",
                            "description": "Extra data shown after the card has been answered.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "source": {
                            "name": "source",
                            "type": "TEXT",
                            "description": "The source of this card. Name of the webpage, book, whitepaper, etc.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "link": {
                            "name": "link",
                            "type": "URL",
                            "description": "A link for more information regarding this flashcard. Usually the link to the source.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "image": {
                            "name": "image",
                            "type": "IMAGE_URL",
                            "description": "A link to an image for this flashcard.",
                            "rememberLastInput": false,
                            "required": false
                        }
                    }
                },
                {
                    "id": "e3d25ed4-cafd-4350-84e8-123a4258e576",
                    "name": "Front and Back and Reverse",
                    "description": "Standard front and back flashcard (plus reverse)",
                    "fields": {
                        "front": {
                            "name": "front",
                            "type": "TEXT",
                            "description": "The front of this card",
                            "rememberLastInput": false,
                            "required": true
                        },
                        "back": {
                            "name": "back",
                            "type": "TEXT",
                            "description": "The back of this card",
                            "rememberLastInput": false,
                            "required": true
                        },
                        "extra": {
                            "name": "extra",
                            "type": "TEXT",
                            "description": "Extra data shown after the card has been answered.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "source": {
                            "name": "source",
                            "type": "TEXT",
                            "description": "The source of this card. Name of the webpage, book, whitepaper, etc.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "link": {
                            "name": "link",
                            "type": "URL",
                            "description": "A link for more information regarding this flashcard. Usually the link to the source.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "image": {
                            "name": "image",
                            "type": "IMAGE_URL",
                            "description": "A link to an image for this flashcard.",
                            "rememberLastInput": false,
                            "required": false
                        }
                    }
                },
                {
                    "id": "76152976-d7ae-4348-9571-d65e48050c3f",
                    "name": "cloze",
                    "description": "Cloze flashcard with cloze text.",
                    "fields": {
                        "text": {
                            "name": "text",
                            "type": "TEXT",
                            "description": "The text of this card.",
                            "rememberLastInput": false,
                            "required": true
                        },
                        "extra": {
                            "name": "extra",
                            "type": "TEXT",
                            "description": "Extra data shown after the card has been answered.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "source": {
                            "name": "source",
                            "type": "TEXT",
                            "description": "The source of this card. Name of the webpage, book, whitepaper, etc.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "link": {
                            "name": "link",
                            "type": "URL",
                            "description": "A link for more information regarding this flashcard. Usually the link to the source.",
                            "rememberLastInput": false,
                            "required": false
                        },
                        "image": {
                            "name": "image",
                            "type": "IMAGE_URL",
                            "description": "A link to an image for this flashcard.",
                            "rememberLastInput": false,
                            "required": false
                        }
                    }
                }
            ];
            Assertions_1.assertJSON(flashcardRegistry.values(), expected);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkUmVnaXN0cnlUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmxhc2hjYXJkUmVnaXN0cnlUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkRBQXNEO0FBQ3RELG1EQUE4QztBQUM5QyxtRUFBOEQ7QUFFOUQseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVyQixRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFFMUIsUUFBUSxDQUFDLGVBQWUsRUFBRTtRQUV0QixFQUFFLENBQUMsT0FBTyxFQUFFO1lBRVIsTUFBTSxpQkFBaUIsR0FBRyxxQ0FBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUU1RCxNQUFNLFFBQVEsR0FBRztnQkFDYjtvQkFDSSxJQUFJLEVBQUUsc0NBQXNDO29CQUM1QyxNQUFNLEVBQUUsZ0JBQWdCO29CQUN4QixhQUFhLEVBQUUsb0NBQW9DO29CQUNuRCxRQUFRLEVBQUU7d0JBQ04sT0FBTyxFQUFFOzRCQUNMLE1BQU0sRUFBRSxPQUFPOzRCQUNmLE1BQU0sRUFBRSxNQUFNOzRCQUNkLGFBQWEsRUFBRSx3QkFBd0I7NEJBQ3ZDLG1CQUFtQixFQUFFLEtBQUs7NEJBQzFCLFVBQVUsRUFBRSxJQUFJO3lCQUNuQjt3QkFDRCxNQUFNLEVBQUU7NEJBQ0osTUFBTSxFQUFFLE1BQU07NEJBQ2QsTUFBTSxFQUFFLE1BQU07NEJBQ2QsYUFBYSxFQUFFLHVCQUF1Qjs0QkFDdEMsbUJBQW1CLEVBQUUsS0FBSzs0QkFDMUIsVUFBVSxFQUFFLElBQUk7eUJBQ25CO3dCQUNELE9BQU8sRUFBRTs0QkFDTCxNQUFNLEVBQUUsT0FBTzs0QkFDZixNQUFNLEVBQUUsTUFBTTs0QkFDZCxhQUFhLEVBQUUsb0RBQW9EOzRCQUNuRSxtQkFBbUIsRUFBRSxLQUFLOzRCQUMxQixVQUFVLEVBQUUsS0FBSzt5QkFDcEI7d0JBQ0QsUUFBUSxFQUFFOzRCQUNOLE1BQU0sRUFBRSxRQUFROzRCQUNoQixNQUFNLEVBQUUsTUFB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TTs0QkFDZCxNQUFNLEVBQUUsS0FBSzs0QkFDYixhQUFhLEVBQUUsdUZBQXVGOzRCQUN0RyxtQkFBbUIsRUFBRSxLQUFLOzRCQUMxQixVQUFVLEVBQUUsS0FBSzt5QkFDcEI7d0JBQ0QsT0FBTyxFQUFFOzRCQUNMLE1BQU0sRUFBRSxPQUFPOzRCQUNmLE1BQU0sRUFBRSxXQUFXOzRCQUNuQixhQUFhLEVBQUUsd0NBQXdDOzRCQUN2RCxtQkFBbUIsRUFBRSxLQUFLOzRCQUMxQixVQUFVLEVBQUUsS0FBSzt5QkFDcEI7cUJBQ0o7aUJBQ0o7YUFDSixDQUFDO1lBRUYsdUJBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUVwRCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge0ZsYXNoY2FyZFJlZ2lzdHJ5fSBmcm9tICcuL0ZsYXNoY2FyZFJlZ2lzdHJ5JztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGVzdC9UZXN0aW5nVGltZSc7XG5cblRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG5kZXNjcmliZSgnRmxhc2hjYXJkUmVnaXN0cnknLCBmdW5jdGlvbigpIHtcblxuICAgIGRlc2NyaWJlKCdjcmVhdGVEZWZhdWx0JywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZsYXNoY2FyZFJlZ2lzdHJ5ID0gRmxhc2hjYXJkUmVnaXN0cnkuY3JlYXRlRGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCI5ZDE0NmRiMS03YzMxLTRiY2YtODY2Yi03YjQ4NWM0ZTUwZWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnJvbnQgYW5kIEJhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlN0YW5kYXJkIGZyb250IGFuZCBiYWNrIGZsYXNoY2FyZC5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9udFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZnJvbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJURVhUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBmcm9udCBvZiB0aGlzIGNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlbWVtYmVyTGFzdElucHV0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYmFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlRFWFRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGJhY2sgb2YgdGhpcyBjYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZW1lbWJlckxhc3RJbnB1dFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4dHJhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJleHRyYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlRFWFRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRXh0cmEgZGF0YSBzaG93biBhZnRlciB0aGUgY2FyZCBoYXMgYmVlbiBhbnN3ZXJlZC5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlbWVtYmVyTGFzdElucHV0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic291cmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVEVYVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgc291cmNlIG9mIHRoaXMgY2FyZC4gTmFtZSBvZiB0aGUgd2VicGFnZSwgYm9vaywgd2hpdGVwYXBlciwgZXRjLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVtZW1iZXJMYXN0SW5wdXRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlVSTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGxpbmsgZm9yIG1vcmUgaW5mb3JtYXRpb24gcmVnYXJkaW5nIHRoaXMgZmxhc2hjYXJkLiBVc3VhbGx5IHRoZSBsaW5rIHRvIHRoZSBzb3VyY2UuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZW1lbWJlckxhc3RJbnB1dFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJTUFHRV9VUkxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsaW5rIHRvIGFuIGltYWdlIGZvciB0aGlzIGZsYXNoY2FyZC5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlbWVtYmVyTGFzdElucHV0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiZTNkMjVlZDQtY2FmZC00MzUwLTg0ZTgtMTIzYTQyNThlNTc2XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZyb250IGFuZCBCYWNrIGFuZCBSZXZlcnNlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTdGFuZGFyZCBmcm9udCBhbmQgYmFjayBmbGFzaGNhcmQgKHBsdXMgcmV2ZXJzZSlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9udFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZnJvbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJURVhUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBmcm9udCBvZiB0aGlzIGNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlbWVtYmVyTGFzdElucHV0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYmFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlRFWFRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGJhY2sgb2YgdGhpcyBjYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZW1lbWJlckxhc3RJbnB1dFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4dHJhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJleHRyYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlRFWFRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRXh0cmEgZGF0YSBzaG93biBhZnRlciB0aGUgY2FyZCBoYXMgYmVlbiBhbnN3ZXJlZC5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlbWVtYmVyTGFzdElucHV0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic291cmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVEVYVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgc291cmNlIG9mIHRoaXMgY2FyZC4gTmFtZSBvZiB0aGUgd2VicGFnZSwgYm9vaywgd2hpdGVwYXBlciwgZXRjLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVtZW1iZXJMYXN0SW5wdXRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlVSTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGxpbmsgZm9yIG1vcmUgaW5mb3JtYXRpb24gcmVnYXJkaW5nIHRoaXMgZmxhc2hjYXJkLiBVc3VhbGx5IHRoZSBsaW5rIHRvIHRoZSBzb3VyY2UuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZW1lbWJlckxhc3RJbnB1dFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJTUFHRV9VUkxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsaW5rIHRvIGFuIGltYWdlIGZvciB0aGlzIGZsYXNoY2FyZC5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlbWVtYmVyTGFzdElucHV0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiNzYxNTI5NzYtZDdhZS00MzQ4LTk1NzEtZDY1ZTQ4MDUwYzNmXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNsb3plXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDbG96ZSBmbGFzaGNhcmQgd2l0aCBjbG96ZSB0ZXh0LlwiLFxuICAgICAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJURVhUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSB0ZXh0IG9mIHRoaXMgY2FyZC5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlbWVtYmVyTGFzdElucHV0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXh0cmFcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImV4dHJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVEVYVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFeHRyYSBkYXRhIHNob3duIGFmdGVyIHRoZSBjYXJkIGhhcyBiZWVuIGFuc3dlcmVkLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVtZW1iZXJMYXN0SW5wdXRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic291cmNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzb3VyY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJURVhUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBzb3VyY2Ugb2YgdGhpcyBjYXJkLiBOYW1lIG9mIHRoZSB3ZWJwYWdlLCBib29rLCB3aGl0ZXBhcGVyLCBldGMuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZW1lbWJlckxhc3RJbnB1dFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVVJMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgbGluayBmb3IgbW9yZSBpbmZvcm1hdGlvbiByZWdhcmRpbmcgdGhpcyBmbGFzaGNhcmQuIFVzdWFsbHkgdGhlIGxpbmsgdG8gdGhlIHNvdXJjZS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlbWVtYmVyTGFzdElucHV0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIklNQUdFX1VSTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGxpbmsgdG8gYW4gaW1hZ2UgZm9yIHRoaXMgZmxhc2hjYXJkLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVtZW1iZXJMYXN0SW5wdXRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihmbGFzaGNhcmRSZWdpc3RyeS52YWx1ZXMoKSwgZXhwZWN0ZWQpXG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=