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
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const DocAnnotationIndex_1 = require("./DocAnnotationIndex");
const DocAnnotationIndexManager_1 = require("./DocAnnotationIndexManager");
const DocMetaListeners_1 = require("../datastore/sharing/db/DocMetaListeners");
const DocMetas_1 = require("../metadata/DocMetas");
const chai_1 = require("chai");
const Proxies_1 = require("../proxies/Proxies");
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const Visibility_1 = require("polar-shared/src/datastore/Visibility");
const Functions_1 = require("polar-shared/src/util/Functions");
describe('DocAnnotationIndexManager', function () {
    beforeEach(function () {
        TestingTime_1.TestingTime.freeze();
    });
    it("Updates and making sure the file is updated properly", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const docFileResolver = (backend, ref, opts) => {
                return { backend, ref, url: 'file:///fake/url/path.jpg' };
            };
            let nrUpdates = 0;
            const docAnnotationIndex = new DocAnnotationIndex_1.DocAnnotationIndex();
            const docAnnotationIndexManager = new DocAnnotationIndexManager_1.DocAnnotationIndexManager(docFileResolver, docAnnotationIndex, () => {
                console.log("onUpdated called properly");
                ++nrUpdates;
            });
            const fingerprint = "39b730b6e9d281b0eae91b2c2c29b842";
            const docID = 'docID:0x00001';
            const profileID = 'prof:0x00002';
            const docMetaHandler = (docMeta) => {
                docAnnotationIndexManager.registerListenerForDocMeta(docMeta);
            };
            const errHandler = Functions_1.NULL_FUNCTION;
            const docMetaListener = new DocMetaListeners_1.DocMetaListener(fingerprint, profileID, docMetaHandler, errHandler);
            function toDocMeta(obj) {
                return DocMetas_1.DocMetas.deserialize(JSON.stringify(docMeta0), fingerprint);
            }
            function handlePrimaryDoc() {
                const docMeta = Proxies_1.Proxies.create(toDocMeta(docMeta0));
                const userProfile = {
                    self: true,
                    profile: {
                        id: 'profile:1',
                        name: 'Alice',
                        handle: 'alice'
                    }
                };
                DocMetaListeners_1.DocMetaRecords.applyAuthorsFromUserProfile(docMeta, userProfile);
                docAnnotationIndexManager.registerListenerForDocMeta(docMeta);
            }
            chai_1.assert.equal(docAnnotationIndex.getDocAnnotationsSorted().length, 0);
            handlePrimaryDoc();
            chai_1.assert.equal(docAnnotationIndex.getDocAnnotationsSorted().length, 1);
            function verify0() {
                const sorted = docAnnotationIndex.getDocAnnotationsSorted();
                const first = sorted[0];
                chai_1.assert.equal(first.id, '1BfJTbv3EZ');
                const children = first.getChildren();
                chai_1.assert.equal(children.length, 1);
            }
            verify0();
            const userProfile1 = {
                self: true,
                profile: {
                    id: 'profile:1',
                    name: 'Alice',
                    handle: 'alice'
                }
            };
            function createDocMetaRecord(docMeta) {
                const docMetaRecord = {
                    uid: 'uid:0x00001',
                    id: docID,
                    visibility: Visibility_1.Visibility.PRIVATE,
                    value: {
                        docInfo: docMeta.docInfo,
                        value: JSON.stringify(docMeta)
                    }
                };
                return docMetaRecord;
            }
            function handleSecondaryDoc() {
                return __awaiter(this, void 0, void 0, function* () {
                    const docMetaRecord = createDocMetaRecord(docMeta1);
                    yield docMetaListener.handleDocMetaRecordWithUserProfile({ docID, fingerprint }, userProfile1, docMetaRecord);
                });
            }
            yield handleSecondaryDoc();
            function dumpDocAnnotations(docAnnotations) {
                for (const docAnnotation of docAnnotations) {
                    console.log("==========");
                    console.log("id: " + docAnnotation.id);
                    console.log(docAnnotation.html);
                    const children = docAnnotation.getChildren();
                    for (const child of children) {
                        console.log("    ====");
                        console.log("    id: ", child.id);
                        console.log("    html: ", child.html);
                    }
                }
            }
            function verify1() {
                console.log("========== Verify1");
                const docAnnotationsSorted = docAnnotationIndex.getDocAnnotationsSorted();
                dumpDocAnnotations(docAnnotationsSorted);
                chai_1.assert.equal(docAnnotationsSorted.length, 2);
                chai_1.assert.equal(nrUpdates, 2);
            }
            verify1();
            function handleSecondaryDoc1() {
                return __awaiter(this, void 0, void 0, function* () {
                    const docMetaRecord = createDocMetaRecord(docMeta2);
                    yield docMetaListener.handleDocMetaRecordWithUserProfile({ docID, fingerprint }, userProfile1, docMetaRecord);
                });
            }
            yield handleSecondaryDoc1();
            function annotationsToMap(docAnnotations) {
                return Dictionaries_1.Dictionaries.toDict(docAnnotations, current => current.id);
            }
            function verify2() {
                console.log("========== Verify2");
                const annotationsSorted = docAnnotationIndex.getDocAnnotationsSorted();
                dumpDocAnnotations(annotationsSorted);
                const annotationsMap = annotationsToMap(annotationsSorted);
                const textHighlight = annotationsMap['12QDRhMd6B'];
                chai_1.assert.equal(textHighlight.html, "Highly available cloud storage is often implemented with");
                const comments = textHighlight.getChildren();
                const commentsMap = annotationsToMap(comments);
                chai_1.assert.equal(commentsMap['123zriqZgHZWjq7jRnEC'].html, "<p>kkkkkkdddddddaaa two</p>");
            }
            verify2();
            function handleSecondaryDoc2() {
                return __awaiter(this, void 0, void 0, function* () {
                    const docMetaRecord = createDocMetaRecord(docMeta3);
                    yield docMetaListener.handleDocMetaRecordWithUserProfile({ docID, fingerprint }, userProfile1, docMetaRecord);
                });
            }
            yield handleSecondaryDoc2();
            function verify3() {
                console.log("========== Verify3");
                const annotationsSorted = docAnnotationIndex.getDocAnnotationsSorted();
                dumpDocAnnotations(annotationsSorted);
                const annotationsMap = annotationsToMap(annotationsSorted);
                const textHighlight = annotationsMap['12QDRhMd6B'];
                const comments = textHighlight.getChildren();
                const commentsMap = annotationsToMap(comments);
                chai_1.assert.equal(commentsMap['12P5mqA4Ye3ofTyMhum5'].html, "<p>kkkkkkdddddddaaa three</p>");
            }
            verify3();
        });
    });
});
const docMeta0 = {
    "annotationInfo": {},
    "version": 2,
    "attachments": {},
    "docInfo": {
        "progress": 0,
        "pagemarkType": "SINGLE_COLUMN",
        "properties": {},
        "archived": false,
        "flagged": false,
        "tags": {},
        "attachments": {},
        "nrPages": 14,
        "fingerprint": "39b730b6e9d281b0eae91b2c2c29b842",
        "added": "2019-06-29T16:54:21.768Z",
        "filename": "12Ji9JDcRn-availability.pdf",
        "uuid": "z2019-07-05T15:18:40.554Z+000001-145375091201",
        "title": "availability.pdf",
        "backend": "stash",
        "hashcode": {
            "alg": "keccak256",
            "data": "12Ji9JDcRnZT27jeckr4HusYY29QVwj4Wv2J6iYc5YXjtzn3ZJT",
            "enc": "base58check"
        },
        "lastUpdated": "2019-07-05T15:18:40.554Z",
        "nrComments": 2,
        "nrNotes": 0,
        "nrFlashcards": 0,
        "nrTextHighlights": 1,
        "nrAreaHighlights": 0,
        "nrAnnotations": 3
    },
    "pageMetas": {
        "1": {
            "pagemarks": {},
            "notes": {},
            "comments": {
                "14E85Nrc4pH1h5fdcpVv": {
                    "id": "14E85Nrc4pH1h5fdcpVv",
                    "guid": "14E85Nrc4pH1h5fdcpVv",
                    "created": "2019-07-04T16:06:09.454Z",
                    "lastUpdated": "2019-07-04T16:06:09.454Z",
                    "content": {
                        "HTML": "<p>this is a test...</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "Kevin Burton",
                        "profileID": "12Erv4jCF5HEBFBVszBZ",
                        "image": {
                            "src": "https://lh5.googleusercontent.com/-BldJH1bae3o/AAAAAAAAAAI/AAAAAAAAADY/Di36-YNrKqk/photo.jpg"
                        },
                        "guest": false
                    }
                },
                "1YdGwTN2RJFEtvqXgN8g": {
                    "id": "1YdGwTN2RJFEtvqXgN8g",
                    "guid": "1YdGwTN2RJFEtvqXgN8g",
                    "created": "2019-07-05T14:14:41.518Z",
                    "lastUpdated": "2019-07-05T14:36:38.851Z",
                    "content": {
                        "HTML": "<p>asdf asdf</p>"
                    },
                    "ref": "text-highlight:1BfJTbv3EZ",
                    "author": {
                        "name": "Kevin Burton",
                        "profileID": "12Erv4jCF5HEBFBVszBZ",
                        "image": {
                            "src": "https://lh5.googleusercontent.com/-BldJH1bae3o/AAAAAAAAAAI/AAAAAAAAADY/Di36-YNrKqk/photo.jpg"
                        },
                        "guest": false
                    }
                }
            },
            "questions": {},
            "flashcards": {},
            "textHighlights": {
                "1BfJTbv3EZ": {
                    "id": "1BfJTbv3EZ",
                    "guid": "1BfJTbv3EZ",
                    "created": "2019-07-02T19:43:58.417Z",
                    "lastUpdated": "2019-07-02T19:43:58.417Z",
                    "rects": {
                        "0": {
                            "left": 506,
                            "top": 370,
                            "right": 567,
                            "bottom": 385,
                            "width": 61,
                            "height": 15
                        }
                    },
                    "textSelections": {
                        "0": {
                            "text": " Google an",
                            "rect": {
                                "left": 506,
                                "top": 370,
                                "right": 567,
                                "bottom": 385,
                                "width": 60,
                                "height": 15
                            }
                        }
                    },
                    "text": {
                        "TEXT": " Google an"
                    },
                    "images": {},
                    "notes": {},
                    "questions": {},
                    "flashcards": {},
                    "color": "red",
                    "author": {
                        "name": "Kevin Burton",
                        "profileID": "12Erv4jCF5HEBFBVszBZ",
                        "image": {
                            "src": "https://lh5.googleusercontent.com/-BldJH1bae3o/AAAAAAAAAAI/AAAAAAAAADY/Di36-YNrKqk/photo.jpg"
                        },
                        "guest": false
                    }
                }
            },
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 1
            }
        },
        "2": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 2
            }
        },
        "3": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 3
            }
        },
        "4": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 4
            }
        },
        "5": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 5
            }
        },
        "6": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 6
            }
        },
        "7": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 7
            }
        },
        "8": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 8
            }
        },
        "9": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 9
            }
        },
        "10": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 10
            }
        },
        "11": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 11
            }
        },
        "12": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 12
            }
        },
        "13": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 13
            }
        },
        "14": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 14
            }
        }
    }
};
const docMeta1 = {
    "annotationInfo": {},
    "version": 2,
    "attachments": {},
    "docInfo": {
        "progress": 0,
        "pagemarkType": "SINGLE_COLUMN",
        "properties": {},
        "archived": false,
        "flagged": false,
        "tags": {},
        "attachments": {},
        "nrPages": 14,
        "fingerprint": "39b730b6e9d281b0eae91b2c2c29b842",
        "added": "2019-06-29T16:52:36.339Z",
        "filename": "12Ji9JDcRn-availability.pdf",
        "uuid": "z2019-07-04T21:52:01.020Z+000015-079792152584",
        "title": "availability.pdf",
        "hashcode": {
            "enc": "base58check",
            "alg": "keccak256",
            "data": "12Ji9JDcRnZT27jeckr4HusYY29QVwj4Wv2J6iYc5YXjtzn3ZJT"
        },
        "lastUpdated": "2019-07-04T21:52:01.020Z",
        "nrComments": 6,
        "nrNotes": 0,
        "nrFlashcards": 0,
        "nrTextHighlights": 1,
        "nrAreaHighlights": 0,
        "nrAnnotations": 7
    },
    "pageMetas": {
        "1": {
            "pagemarks": {},
            "notes": {},
            "comments": {
                "126j66FgcfUnarx6wt9x": {
                    "id": "126j66FgcfUnarx6wt9x",
                    "guid": "126j66FgcfUnarx6wt9x",
                    "created": "2019-06-29T16:52:58.621Z",
                    "lastUpdated": "2019-06-29T16:52:58.621Z",
                    "content": {
                        "HTML": "<p>this is a example highlight and comment from the test user.</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12S4rbb47bSStNtMXmMx": {
                    "id": "12S4rbb47bSStNtMXmMx",
                    "guid": "12S4rbb47bSStNtMXmMx",
                    "created": "2019-06-29T17:04:48.896Z",
                    "lastUpdated": "2019-06-29T17:04:48.896Z",
                    "content": {
                        "HTML": "<p>another one.</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12EpQCYjAteYhmcVfLF2": {
                    "id": "12EpQCYjAteYhmcVfLF2",
                    "guid": "12EpQCYjAteYhmcVfLF2",
                    "created": "2019-07-04T03:29:01.654Z",
                    "lastUpdated": "2019-07-04T03:29:01.654Z",
                    "content": {
                        "HTML": "<p>asdf</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12e21r79FDBWpwhDgs86": {
                    "id": "12e21r79FDBWpwhDgs86",
                    "guid": "12e21r79FDBWpwhDgs86",
                    "created": "2019-07-04T21:26:47.828Z",
                    "lastUpdated": "2019-07-04T21:26:47.828Z",
                    "content": {
                        "HTML": "<p>ok.. updates don't work but what about new comments?</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12LZuo2Z1jovsW2phPu6": {
                    "id": "12LZuo2Z1jovsW2phPu6",
                    "guid": "12LZuo2Z1jovsW2phPu6",
                    "created": "2019-07-04T21:27:20.355Z",
                    "lastUpdated": "2019-07-04T21:27:20.355Z",
                    "content": {
                        "HTML": "<p>another test.</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12rcBjJNPuVVKGBtt3i4": {
                    "id": "12rcBjJNPuVVKGBtt3i4",
                    "guid": "12rcBjJNPuVVKGBtt3i4",
                    "created": "2019-07-04T21:26:12.258Z",
                    "lastUpdated": "2019-07-04T21:52:00.973Z",
                    "content": {
                        "HTML": "<p>kkkkkkdddddddaaa</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                }
            },
            "questions": {},
            "flashcards": {},
            "textHighlights": {
                "12QDRhMd6B": {
                    "id": "12QDRhMd6B",
                    "guid": "12QDRhMd6B",
                    "created": "2019-06-29T16:52:46.249Z",
                    "lastUpdated": "2019-06-29T16:52:46.249Z",
                    "rects": {
                        "0": {
                            "left": 96,
                            "top": 364,
                            "right": 396,
                            "bottom": 379,
                            "width": 300,
                            "height": 15
                        }
                    },
                    "textSelections": {
                        "0": {
                            "text": "Highly available cloud storage ",
                            "rect": {
                                "left": 96,
                                "top": 364,
                                "right": 260,
                                "bottom": 379,
                                "width": 163,
                                "height": 15
                            }
                        },
                        "1": {
                            "text": "is often implemented with",
                            "rect": {
                                "left": 260,
                                "top": 364,
                                "right": 396,
                                "bottom": 379,
                                "width": 136,
                                "height": 15
                            }
                        }
                    },
                    "text": {
                        "TEXT": "Highly available cloud storage is often implemented with"
                    },
                    "images": {},
                    "notes": {},
                    "questions": {},
                    "flashcards": {},
                    "color": "red",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                }
            },
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 1
            }
        },
        "2": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 2
            }
        },
        "3": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 3
            }
        },
        "4": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 4
            }
        },
        "5": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 5
            }
        },
        "6": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 6
            }
        },
        "7": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 7
            }
        },
        "8": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 8
            }
        },
        "9": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 9
            }
        },
        "10": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 10
            }
        },
        "11": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 11
            }
        },
        "12": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 12
            }
        },
        "13": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 13
            }
        },
        "14": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 14
            }
        }
    }
};
const docMeta2 = {
    "annotationInfo": {},
    "version": 2,
    "attachments": {},
    "docInfo": {
        "progress": 0,
        "pagemarkType": "SINGLE_COLUMN",
        "properties": {},
        "archived": false,
        "flagged": false,
        "tags": {},
        "attachments": {},
        "nrPages": 14,
        "fingerprint": "39b730b6e9d281b0eae91b2c2c29b842",
        "added": "2019-06-29T16:52:36.339Z",
        "filename": "12Ji9JDcRn-availability.pdf",
        "uuid": "z2019-07-07T16:57:15.035Z+000001-201567762762",
        "title": "availability.pdf",
        "hashcode": {
            "enc": "base58check",
            "alg": "keccak256",
            "data": "12Ji9JDcRnZT27jeckr4HusYY29QVwj4Wv2J6iYc5YXjtzn3ZJT"
        },
        "lastUpdated": "2019-07-07T16:57:15.035Z",
        "nrComments": 6,
        "nrNotes": 0,
        "nrFlashcards": 0,
        "nrTextHighlights": 1,
        "nrAreaHighlights": 0,
        "nrAnnotations": 7
    },
    "pageMetas": {
        "1": {
            "pagemarks": {},
            "notes": {},
            "comments": {
                "126j66FgcfUnarx6wt9x": {
                    "id": "126j66FgcfUnarx6wt9x",
                    "guid": "126j66FgcfUnarx6wt9x",
                    "created": "2019-06-29T16:52:58.621Z",
                    "lastUpdated": "2019-06-29T16:52:58.621Z",
                    "content": {
                        "HTML": "<p>this is a example highlight and comment from the test user.</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12S4rbb47bSStNtMXmMx": {
                    "id": "12S4rbb47bSStNtMXmMx",
                    "guid": "12S4rbb47bSStNtMXmMx",
                    "created": "2019-06-29T17:04:48.896Z",
                    "lastUpdated": "2019-06-29T17:04:48.896Z",
                    "content": {
                        "HTML": "<p>another one.</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12EpQCYjAteYhmcVfLF2": {
                    "id": "12EpQCYjAteYhmcVfLF2",
                    "guid": "12EpQCYjAteYhmcVfLF2",
                    "created": "2019-07-04T03:29:01.654Z",
                    "lastUpdated": "2019-07-04T03:29:01.654Z",
                    "content": {
                        "HTML": "<p>asdf</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12e21r79FDBWpwhDgs86": {
                    "id": "12e21r79FDBWpwhDgs86",
                    "guid": "12e21r79FDBWpwhDgs86",
                    "created": "2019-07-04T21:26:47.828Z",
                    "lastUpdated": "2019-07-04T21:26:47.828Z",
                    "content": {
                        "HTML": "<p>ok.. updates don't work but what about new comments?</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12LZuo2Z1jovsW2phPu6": {
                    "id": "12LZuo2Z1jovsW2phPu6",
                    "guid": "12LZuo2Z1jovsW2phPu6",
                    "created": "2019-07-04T21:27:20.355Z",
                    "lastUpdated": "2019-07-04T21:27:20.355Z",
                    "content": {
                        "HTML": "<p>another test.</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "123zriqZgHZWjq7jRnEC": {
                    "id": "123zriqZgHZWjq7jRnEC",
                    "guid": "123zriqZgHZWjq7jRnEC",
                    "created": "2019-07-04T21:26:12.258Z",
                    "lastUpdated": "2019-07-07T16:57:14.986Z",
                    "content": {
                        "HTML": "<p>kkkkkkdddddddaaa two</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                }
            },
            "questions": {},
            "flashcards": {},
            "textHighlights": {
                "12QDRhMd6B": {
                    "id": "12QDRhMd6B",
                    "guid": "12QDRhMd6B",
                    "created": "2019-06-29T16:52:46.249Z",
                    "lastUpdated": "2019-06-29T16:52:46.249Z",
                    "rects": {
                        "0": {
                            "left": 96,
                            "top": 364,
                            "right": 396,
                            "bottom": 379,
                            "width": 300,
                            "height": 15
                        }
                    },
                    "textSelections": {
                        "0": {
                            "text": "Highly available cloud storage ",
                            "rect": {
                                "left": 96,
                                "top": 364,
                                "right": 260,
                                "bottom": 379,
                                "width": 163,
                                "height": 15
                            }
                        },
                        "1": {
                            "text": "is often implemented with",
                            "rect": {
                                "left": 260,
                                "top": 364,
                                "right": 396,
                                "bottom": 379,
                                "width": 136,
                                "height": 15
                            }
                        }
                    },
                    "text": {
                        "TEXT": "Highly available cloud storage is often implemented with"
                    },
                    "images": {},
                    "notes": {},
                    "questions": {},
                    "flashcards": {},
                    "color": "red",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                }
            },
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 1
            }
        },
        "2": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 2
            }
        },
        "3": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 3
            }
        },
        "4": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 4
            }
        },
        "5": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 5
            }
        },
        "6": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 6
            }
        },
        "7": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 7
            }
        },
        "8": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 8
            }
        },
        "9": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 9
            }
        },
        "10": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 10
            }
        },
        "11": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 11
            }
        },
        "12": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 12
            }
        },
        "13": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 13
            }
        },
        "14": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 14
            }
        }
    }
};
const docMeta3 = {
    "annotationInfo": {},
    "version": 2,
    "attachments": {},
    "docInfo": {
        "progress": 0,
        "pagemarkType": "SINGLE_COLUMN",
        "properties": {},
        "archived": false,
        "flagged": false,
        "tags": {},
        "attachments": {},
        "nrPages": 14,
        "fingerprint": "39b730b6e9d281b0eae91b2c2c29b842",
        "added": "2019-06-29T16:52:36.339Z",
        "filename": "12Ji9JDcRn-availability.pdf",
        "uuid": "z2019-07-07T16:57:52.721Z+000002-201567762762",
        "title": "availability.pdf",
        "hashcode": {
            "enc": "base58check",
            "alg": "keccak256",
            "data": "12Ji9JDcRnZT27jeckr4HusYY29QVwj4Wv2J6iYc5YXjtzn3ZJT"
        },
        "lastUpdated": "2019-07-07T16:57:52.720Z",
        "nrComments": 6,
        "nrNotes": 0,
        "nrFlashcards": 0,
        "nrTextHighlights": 1,
        "nrAreaHighlights": 0,
        "nrAnnotations": 7
    },
    "pageMetas": {
        "1": {
            "pagemarks": {},
            "notes": {},
            "comments": {
                "126j66FgcfUnarx6wt9x": {
                    "id": "126j66FgcfUnarx6wt9x",
                    "guid": "126j66FgcfUnarx6wt9x",
                    "created": "2019-06-29T16:52:58.621Z",
                    "lastUpdated": "2019-06-29T16:52:58.621Z",
                    "content": {
                        "HTML": "<p>this is a example highlight and comment from the test user.</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12S4rbb47bSStNtMXmMx": {
                    "id": "12S4rbb47bSStNtMXmMx",
                    "guid": "12S4rbb47bSStNtMXmMx",
                    "created": "2019-06-29T17:04:48.896Z",
                    "lastUpdated": "2019-06-29T17:04:48.896Z",
                    "content": {
                        "HTML": "<p>another one.</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12EpQCYjAteYhmcVfLF2": {
                    "id": "12EpQCYjAteYhmcVfLF2",
                    "guid": "12EpQCYjAteYhmcVfLF2",
                    "created": "2019-07-04T03:29:01.654Z",
                    "lastUpdated": "2019-07-04T03:29:01.654Z",
                    "content": {
                        "HTML": "<p>asdf</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12e21r79FDBWpwhDgs86": {
                    "id": "12e21r79FDBWpwhDgs86",
                    "guid": "12e21r79FDBWpwhDgs86",
                    "created": "2019-07-04T21:26:47.828Z",
                    "lastUpdated": "2019-07-04T21:26:47.828Z",
                    "content": {
                        "HTML": "<p>ok.. updates don't work but what about new comments?</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12LZuo2Z1jovsW2phPu6": {
                    "id": "12LZuo2Z1jovsW2phPu6",
                    "guid": "12LZuo2Z1jovsW2phPu6",
                    "created": "2019-07-04T21:27:20.355Z",
                    "lastUpdated": "2019-07-04T21:27:20.355Z",
                    "content": {
                        "HTML": "<p>another test.</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                },
                "12P5mqA4Ye3ofTyMhum5": {
                    "id": "12P5mqA4Ye3ofTyMhum5",
                    "guid": "12P5mqA4Ye3ofTyMhum5",
                    "created": "2019-07-04T21:26:12.258Z",
                    "lastUpdated": "2019-07-07T16:57:52.672Z",
                    "content": {
                        "HTML": "<p>kkkkkkdddddddaaa three</p>"
                    },
                    "ref": "text-highlight:12QDRhMd6B",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                }
            },
            "questions": {},
            "flashcards": {},
            "textHighlights": {
                "12QDRhMd6B": {
                    "id": "12QDRhMd6B",
                    "guid": "12QDRhMd6B",
                    "created": "2019-06-29T16:52:46.249Z",
                    "lastUpdated": "2019-06-29T16:52:46.249Z",
                    "rects": {
                        "0": {
                            "left": 96,
                            "top": 364,
                            "right": 396,
                            "bottom": 379,
                            "width": 300,
                            "height": 15
                        }
                    },
                    "textSelections": {
                        "0": {
                            "text": "Highly available cloud storage ",
                            "rect": {
                                "left": 96,
                                "top": 364,
                                "right": 260,
                                "bottom": 379,
                                "width": 163,
                                "height": 15
                            }
                        },
                        "1": {
                            "text": "is often implemented with",
                            "rect": {
                                "left": 260,
                                "top": 364,
                                "right": 396,
                                "bottom": 379,
                                "width": 136,
                                "height": 15
                            }
                        }
                    },
                    "text": {
                        "TEXT": "Highly available cloud storage is often implemented with"
                    },
                    "images": {},
                    "notes": {},
                    "questions": {},
                    "flashcards": {},
                    "color": "red",
                    "author": {
                        "name": "test test",
                        "profileID": "1mAd24CXixoN99esmfLL",
                        "image": {
                            "src": "https://lh6.googleusercontent.com/-HM8tIi-Ug1Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFOSaGL3nUcMqVCxU3GmT11JttSQ/mo/photo.jpg"
                        },
                        "guest": true
                    }
                }
            },
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 1
            }
        },
        "2": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 2
            }
        },
        "3": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 3
            }
        },
        "4": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 4
            }
        },
        "5": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 5
            }
        },
        "6": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 6
            }
        },
        "7": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 7
            }
        },
        "8": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 8
            }
        },
        "9": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 9
            }
        },
        "10": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 10
            }
        },
        "11": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 11
            }
        },
        "12": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 12
            }
        },
        "13": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 13
            }
        },
        "14": {
            "pagemarks": {},
            "notes": {},
            "comments": {},
            "questions": {},
            "flashcards": {},
            "textHighlights": {},
            "areaHighlights": {},
            "screenshots": {},
            "thumbnails": {},
            "readingProgress": {},
            "pageInfo": {
                "num": 14
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jQW5ub3RhdGlvbkluZGV4TWFuYWdlclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEb2NBbm5vdGF0aW9uSW5kZXhNYW5hZ2VyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1FQUE4RDtBQUM5RCw2REFBd0Q7QUFDeEQsMkVBQXNFO0FBS3RFLCtFQUF3RztBQUN4RyxtREFBOEM7QUFFOUMsK0JBQTRCO0FBQzVCLGdEQUEyQztBQUUzQyxxRUFBZ0U7QUFFaEUsc0VBQWlFO0FBRWpFLCtEQUE4RDtBQUU5RCxRQUFRLENBQUMsMkJBQTJCLEVBQUU7SUFFbEMsVUFBVSxDQUFDO1FBQ1AseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzREFBc0QsRUFBRTs7WUFFdkQsTUFBTSxlQUFlLEdBQW9CLENBQUMsT0FBZ0IsRUFBRSxHQUFZLEVBQUUsSUFBa0IsRUFBZSxFQUFFO2dCQUN6RyxPQUFPLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUM7WUFFRixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFFbEIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixFQUFFLENBQUM7WUFDcEQsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLHFEQUF5QixDQUFDLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7Z0JBQ3RHLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFDekMsRUFBRSxTQUFTLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLFdBQVcsR0FBRyxrQ0FBa0MsQ0FBQztZQUN2RCxNQUFNLEtBQUssR0FBRyxlQUFlLENBQUM7WUFDOUIsTUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDO1lBRWpDLE1BQU0sY0FBYyxHQUFHLENBQUMsT0FBaUIsRUFBRSxFQUFFO2dCQUN6Qyx5QkFBeUIsQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUM7WUFFRixNQUFNLFVBQVUsR0FBRyx5QkFBYSxDQUFDO1lBRWpDLE1BQU0sZUFBZSxHQUFHLElBQUksa0NBQWUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUVoRyxTQUFTLFNBQVMsQ0FBQyxHQUFRO2dCQUN2QixPQUFPLG1CQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDdkUsQ0FBQztZQUVELFNBQVMsZ0JBQWdCO2dCQUVyQixNQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxXQUFXLEdBQWdCO29CQUM3QixJQUFJLEVBQUUsSUFBSTtvQkFDVixPQUFPLEVBQUU7d0JBQ0wsRUFBRSxFQUFFLFdBQVc7d0JBQ2YsSUFBSSxFQUFFLE9BQU87d0JBQ2IsTUFBTSxFQUFFLE9BQU87cUJBQ2xCO2lCQUNKLENBQUM7Z0JBRUYsaUNBQWMsQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBRWpFLHlCQUF5QixDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxFLENBQUM7WUFFRCxhQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLGdCQUFnQixFQUFFLENBQUM7WUFDbkIsYUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVyRSxTQUFTLE9BQU87Z0JBQ1osTUFBTSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztnQkFDNUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixhQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckMsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7WUFFRCxPQUFPLEVBQUUsQ0FBQztZQUVWLE1BQU0sWUFBWSxHQUFnQjtnQkFDOUIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFO29CQUNMLEVBQUUsRUFBRSxXQUFXO29CQUNmLElBQUksRUFBRSxPQUFPO29CQUNiLE1BQU0sRUFBRSxPQUFPO2lCQUNsQjthQUNKLENBQUM7WUFFRixTQUFTLG1CQUFtQixDQUFDLE9BQWlCO2dCQUUxQyxNQUFNLGFBQWEsR0FBa0I7b0JBQ2pDLEdBQUcsRUFBRSxhQUFhO29CQUNsQixFQUFFLEVBQUUsS0FBSztvQkFDVCxVQUFVLEVBQUUsdUJBQVUsQ0FBQyxPQUFPO29CQUM5QixLQUFLLEVBQUU7d0JBQ0gsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO3dCQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7cUJBQ2pDO2lCQUNKLENBQUM7Z0JBRUYsT0FBTyxhQUFhLENBQUM7WUFFekIsQ0FBQztZQUVELFNBQWUsa0JBQWtCOztvQkFFN0IsTUFBTSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBRXBELE1BQU0sZUFBZSxDQUFDLGtDQUFrQyxDQUFDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBQyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFFaEgsQ0FBQzthQUFBO1lBRUQsTUFBTSxrQkFBa0IsRUFBRSxDQUFDO1lBRTNCLFNBQVMsa0JBQWtCLENBQUMsY0FBbUQ7Z0JBRTNFLEtBQUssTUFBTSxhQUFhLElBQUksY0FBYyxFQUFFO29CQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUVoQyxNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzdDLEtBQUssTUFBTSxLQUFLLElBQUksUUFBUSxFQUFFO3dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDekM7aUJBRUo7WUFFTCxDQUFDO1lBR0QsU0FBUyxPQUFPO2dCQUVaLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFFbEMsTUFBTSxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUMxRSxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUN6QyxhQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFL0IsQ0FBQztZQUVELE9BQU8sRUFBRSxDQUFDO1lBRVYsU0FBZSxtQkFBbUI7O29CQUU5QixNQUFNLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFcEQsTUFBTSxlQUFlLENBQUMsa0NBQWtDLENBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFDLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUVoSCxDQUFDO2FBQUE7WUFFRCxNQUFNLG1CQUFtQixFQUFFLENBQUM7WUFFNUIsU0FBUyxnQkFBZ0IsQ0FBQyxjQUE0QztnQkFDbEUsT0FBTywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEUsQ0FBQztZQUVELFNBQVMsT0FBTztnQkFFWixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBRWxDLE1BQU0saUJBQWlCLEdBQUcsa0JBQWtCLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztnQkFFdkUsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFFdEMsTUFBTSxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFFM0QsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUVuRCxhQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsMERBQTBELENBQUMsQ0FBQztnQkFFN0YsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUU3QyxNQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFL0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztZQUcxRixDQUFDO1lBRUQsT0FBTyxFQUFFLENBQUM7WUFFVixTQUFlLG1CQUFtQjs7b0JBRTlCLE1BQU0sYUFBYSxHQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUVwRCxNQUFNLGVBQWUsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUMsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBRWhILENBQUM7YUFBQTtZQUVELE1BQU0sbUJBQW1CLEVBQUUsQ0FBQztZQUU1QixTQUFTLE9BQU87Z0JBRVosT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO2dCQUVqQyxNQUFNLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDLHVCQUF1QixFQUFFLENBQUM7Z0JBQ3ZFLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBRXRDLE1BQU0sY0FBYyxHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBRTNELE1BQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFbkQsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUU3QyxNQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFL0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLEVBQUUsK0JBQStCLENBQUMsQ0FBQztZQUU1RixDQUFDO1lBRUQsT0FBTyxFQUFFLENBQUM7UUFFZCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLFFBQVEsR0FBUTtJQUNsQixnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCLFNBQVMsRUFBRSxDQUFDO0lBQ1osYUFBYSxFQUFFLEVBQUU7SUFDakIsU0FBUyxFQUFFO1FBQ1AsVUFBVSxFQUFFLENBQUM7UUFDYixjQUFjLEVBQUUsZUFBZTtRQUMvQixZQUFZLEVBQUUsRUFBRTtRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUUsRUFBRTtRQUNWLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsYUFBYSxFQUFFLGtDQUFrQztRQUNqRCxPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLFVBQVUsRUFBRSw2QkFBNkI7UUFDekMsTUFBTSxFQUFFLCtDQUErQztRQUN2RCxPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFVBQVUsRUFBRTtZQUNSLEtBQUssRUFBRSxXQUFXO1lBQ2xCLE1BQU0sRUFBRSxxREFBcUQ7WUFDN0QsS0FBSyxFQUFFLGFBQWE7U0FDdkI7UUFDRCxhQUFhLEVBQUUsMEJBQTBCO1FBQ3pDLFlBQVksRUFBRSxDQUFDO1FBQ2YsU0FBUyxFQUFFLENBQUM7UUFDWixjQUFjLEVBQUUsQ0FBQztRQUNqQixrQkFBa0IsRUFBRSxDQUFDO1FBQ3JCLGtCQUFrQixFQUFFLENBQUM7UUFDckIsZUFBZSxFQUFFLENBQUM7S0FDckI7SUFDRCxXQUFXLEVBQUU7UUFDVCxHQUFHLEVBQUU7WUFDRCxXQUFXLEVBQUUsRUFBRTtZQUNmLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFO2dCQUNSLHNCQUFzQixFQUFFO29CQUNwQixJQUFJLEVBQUUsc0JBQXNCO29CQUM1QixNQUFNLEVBQUUsc0JBQXNCO29CQUM5QixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxhQUFhLEVBQUUsMEJBQTBCO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLDBCQUEwQjtxQkFDckM7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLDhGQUE4Rjt5QkFDeEc7d0JBQ0QsT0FBTyxFQUFFLEtBQUs7cUJBQ2pCO2lCQUNKO2dCQUNELHNCQUFzQixFQUFFO29CQUNwQixJQUFJLEVBQUUsc0JBQXNCO29CQUM1QixNQUFNLEVBQUUsc0JBQXNCO29CQUM5QixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxhQUFhLEVBQUUsMEJBQTBCO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLGtCQUFrQjtxQkFDN0I7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLDhGQUE4Rjt5QkFDeEc7d0JBQ0QsT0FBTyxFQUFFLEtBQUs7cUJBQ2pCO2lCQUNKO2FBQ0o7WUFDRCxXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGdCQUFnQixFQUFFO2dCQUNkLFlBQVksRUFBRTtvQkFDVixJQUFJLEVBQUUsWUFBWTtvQkFDbEIsTUFBTSxFQUFFLFlBQVk7b0JBQ3BCLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7b0JBQ3pDLE9BQU8sRUFBRTt3QkFDTCxHQUFHLEVBQUU7NEJBQ0QsTUFBTSxFQUFFLEdBQUc7NEJBQ1gsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsT0FBTyxFQUFFLEdBQUc7NEJBQ1osUUFBUSxFQUFFLEdBQUc7NEJBQ2IsT0FBTyxFQUFFLEVBQUU7NEJBQ1gsUUFBUSxFQUFFLEVBQUU7eUJBQ2Y7cUJBQ0o7b0JBQ0QsZ0JBQWdCLEVBQUU7d0JBQ2QsR0FBRyxFQUFFOzRCQUNELE1BQU0sRUFBRSxZQUFZOzRCQUNwQixNQUFNLEVBQUU7Z0NBQ0osTUFBTSxFQUFFLEdBQUc7Z0NBQ1gsS0FBSyxFQUFFLEdBQUc7Z0NBQ1YsT0FBTyxFQUFFLEdBQUc7Z0NBQ1osUUFBUSxFQUFFLEdBQUc7Z0NBQ2IsT0FBTyxFQUFFLEVBQUU7Z0NBQ1gsUUFBUSxFQUFFLEVBQUU7NkJBQ2Y7eUJBQ0o7cUJBQ0o7b0JBQ0QsTUFBTSxFQUFFO3dCQUNKLE1BQU0sRUFBRSxZQUFZO3FCQUN2QjtvQkFDRCxRQUFRLEVBQUUsRUFBRTtvQkFDWixPQUFPLEVBQUUsRUFBRTtvQkFDWCxXQUFXLEVBQUUsRUFBRTtvQkFDZixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLDhGQUE4Rjt5QkFDeEc7d0JBQ0QsT0FBTyxFQUFFLEtBQUs7cUJBQ2pCO2lCQUNKO2FBQ0o7WUFDRCxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtLQUNKO0NBQ0osQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFRO0lBQ2xCLGdCQUFnQixFQUFFLEVBQUU7SUFDcEIsU0FBUyxFQUFFLENBQUM7SUFDWixhQUFhLEVBQUUsRUFBRTtJQUNqQixTQUFTLEVBQUU7UUFDUCxVQUFVLEVBQUUsQ0FBQztRQUNiLGNBQWMsRUFBRSxlQUFlO1FBQy9CLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsYUFBYSxFQUFFLEVBQUU7UUFDakIsU0FBUyxFQUFFLEVBQUU7UUFDYixhQUFhLEVBQUUsa0NBQWtDO1FBQ2pELE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsVUFBVSxFQUFFLDZCQUE2QjtRQUN6QyxNQUFNLEVBQUUsK0NBQStDO1FBQ3ZELE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsVUFBVSxFQUFFO1lBQ1IsS0FBSyxFQUFFLGFBQWE7WUFDcEIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsTUFBTSxFQUFFLHFEQUFxRDtTQUNoRTtRQUNELGFBQWEsRUFBRSwwQkFBMEI7UUFDekMsWUFBWSxFQUFFLENBQUM7UUFDZixTQUFTLEVBQUUsQ0FBQztRQUNaLGNBQWMsRUFBRSxDQUFDO1FBQ2pCLGtCQUFrQixFQUFFLENBQUM7UUFDckIsa0JBQWtCLEVBQUUsQ0FBQztRQUNyQixlQUFlLEVBQUUsQ0FBQztLQUNyQjtJQUNELFdBQVcsRUFBRTtRQUNULEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUU7Z0JBQ1Isc0JBQXNCLEVBQUU7b0JBQ3BCLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLE1BQU0sRUFBRSxzQkFBc0I7b0JBQzlCLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7b0JBQ3pDLFNBQVMsRUFBRTt3QkFDUCxNQUFNLEVBQUUsb0VBQW9FO3FCQUMvRTtvQkFDRCxLQUFLLEVBQUUsMkJBQTJCO29CQUNsQyxRQUFRLEVBQUU7d0JBQ04sTUFBTSxFQUFFLFdBQVc7d0JBQ25CLFdBQVcsRUFBRSxzQkFBc0I7d0JBQ25DLE9BQU8sRUFBRTs0QkFDTCxLQUFLLEVBQUUsd0hBQXdIO3lCQUNsSTt3QkFDRCxPQUFPLEVBQUUsSUFBSTtxQkFDaEI7aUJBQ0o7Z0JBQ0Qsc0JBQXNCLEVBQUU7b0JBQ3BCLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLE1BQU0sRUFBRSxzQkFBc0I7b0JBQzlCLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7b0JBQ3pDLFNBQVMsRUFBRTt3QkFDUCxNQUFNLEVBQUUscUJBQXFCO3FCQUNoQztvQkFDRCxLQUFLLEVBQUUsMkJBQTJCO29CQUNsQyxRQUFRLEVBQUU7d0JBQ04sTUFBTSxFQUFFLFdBQVc7d0JBQ25CLFdBQVcsRUFBRSxzQkFBc0I7d0JBQ25DLE9BQU8sRUFBRTs0QkFDTCxLQUFLLEVBQUUsd0hBQXdIO3lCQUNsSTt3QkFDRCxPQUFPLEVBQUUsSUFBSTtxQkFDaEI7aUJBQ0o7Z0JBQ0Qsc0JBQXNCLEVBQUU7b0JBQ3BCLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLE1BQU0sRUFBRSxzQkFBc0I7b0JBQzlCLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7b0JBQ3pDLFNBQVMsRUFBRTt3QkFDUCxNQUFNLEVBQUUsYUFBYTtxQkFDeEI7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2dCQUNELHNCQUFzQixFQUFFO29CQUNwQixJQUFJLEVBQUUsc0JBQXNCO29CQUM1QixNQUFNLEVBQUUsc0JBQXNCO29CQUM5QixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxhQUFhLEVBQUUsMEJBQTBCO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLDZEQUE2RDtxQkFDeEU7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2dCQUNELHNCQUFzQixFQUFFO29CQUNwQixJQUFJLEVBQUUsc0JBQXNCO29CQUM1QixNQUFNLEVBQUUsc0JBQXNCO29CQUM5QixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxhQUFhLEVBQUUsMEJBQTBCO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLHNCQUFzQjtxQkFDakM7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2dCQUNELHNCQUFzQixFQUFFO29CQUNwQixJQUFJLEVBQUUsc0JBQXNCO29CQUM1QixNQUFNLEVBQUUsc0JBQXNCO29CQUM5QixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxhQUFhLEVBQUUsMEJBQTBCO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLHlCQUF5QjtxQkFDcEM7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2FBQ0o7WUFDRCxXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGdCQUFnQixFQUFFO2dCQUNkLFlBQVksRUFBRTtvQkFDVixJQUFJLEVBQUUsWUFBWTtvQkFDbEIsTUFBTSxFQUFFLFlBQVk7b0JBQ3BCLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7b0JBQ3pDLE9BQU8sRUFBRTt3QkFDTCxHQUFHLEVBQUU7NEJBQ0QsTUFBTSxFQUFFLEVBQUU7NEJBQ1YsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsT0FBTyxFQUFFLEdBQUc7NEJBQ1osUUFBUSxFQUFFLEdBQUc7NEJBQ2IsT0FBTyxFQUFFLEdBQUc7NEJBQ1osUUFBUSxFQUFFLEVBQUU7eUJBQ2Y7cUJBQ0o7b0JBQ0QsZ0JBQWdCLEVBQUU7d0JBQ2QsR0FBRyxFQUFFOzRCQUNELE1BQU0sRUFBRSxpQ0FBaUM7NEJBQ3pDLE1BQU0sRUFBRTtnQ0FDSixNQUFNLEVBQUUsRUFBRTtnQ0FDVixLQUFLLEVBQUUsR0FBRztnQ0FDVixPQUFPLEVBQUUsR0FBRztnQ0FDWixRQUFRLEVBQUUsR0FBRztnQ0FDYixPQUFPLEVBQUUsR0FBRztnQ0FDWixRQUFRLEVBQUUsRUFBRTs2QkFDZjt5QkFDSjt3QkFDRCxHQUFHLEVBQUU7NEJBQ0QsTUFBTSxFQUFFLDJCQUEyQjs0QkFDbkMsTUFBTSxFQUFFO2dDQUNKLE1BQU0sRUFBRSxHQUFHO2dDQUNYLEtBQUssRUFBRSxHQUFHO2dDQUNWLE9BQU8sRUFBRSxHQUFHO2dDQUNaLFFBQVEsRUFBRSxHQUFHO2dDQUNiLE9BQU8sRUFBRSxHQUFHO2dDQUNaLFFBQVEsRUFBRSxFQUFFOzZCQUNmO3lCQUNKO3FCQUNKO29CQUNELE1BQU0sRUFBRTt3QkFDSixNQUFNLEVBQUUsMERBQTBEO3FCQUNyRTtvQkFDRCxRQUFRLEVBQUUsRUFBRTtvQkFDWixPQUFPLEVBQUUsRUFBRTtvQkFDWCxXQUFXLEVBQUUsRUFBRTtvQkFDZixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2FBQ0o7WUFDRCxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtLQUNKO0NBQ0osQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFRO0lBQ2xCLGdCQUFnQixFQUFFLEVBQUU7SUFDcEIsU0FBUyxFQUFFLENBQUM7SUFDWixhQUFhLEVBQUUsRUFBRTtJQUNqQixTQUFTLEVBQUU7UUFDUCxVQUFVLEVBQUUsQ0FBQztRQUNiLGNBQWMsRUFBRSxlQUFlO1FBQy9CLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsYUFBYSxFQUFFLEVBQUU7UUFDakIsU0FBUyxFQUFFLEVBQUU7UUFDYixhQUFhLEVBQUUsa0NBQWtDO1FBQ2pELE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsVUFBVSxFQUFFLDZCQUE2QjtRQUN6QyxNQUFNLEVBQUUsK0NBQStDO1FBQ3ZELE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsVUFBVSxFQUFFO1lBQ1IsS0FBSyxFQUFFLGFBQWE7WUFDcEIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsTUFBTSxFQUFFLHFEQUFxRDtTQUNoRTtRQUNELGFBQWEsRUFBRSwwQkFBMEI7UUFDekMsWUFBWSxFQUFFLENBQUM7UUFDZixTQUFTLEVBQUUsQ0FBQztRQUNaLGNBQWMsRUFBRSxDQUFDO1FBQ2pCLGtCQUFrQixFQUFFLENBQUM7UUFDckIsa0JBQWtCLEVBQUUsQ0FBQztRQUNyQixlQUFlLEVBQUUsQ0FBQztLQUNyQjtJQUNELFdBQVcsRUFBRTtRQUNULEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUU7Z0JBQ1Isc0JBQXNCLEVBQUU7b0JBQ3BCLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLE1BQU0sRUFBRSxzQkFBc0I7b0JBQzlCLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7b0JBQ3pDLFNBQVMsRUFBRTt3QkFDUCxNQUFNLEVBQUUsb0VBQW9FO3FCQUMvRTtvQkFDRCxLQUFLLEVBQUUsMkJBQTJCO29CQUNsQyxRQUFRLEVBQUU7d0JBQ04sTUFBTSxFQUFFLFdBQVc7d0JBQ25CLFdBQVcsRUFBRSxzQkFBc0I7d0JBQ25DLE9BQU8sRUFBRTs0QkFDTCxLQUFLLEVBQUUsd0hBQXdIO3lCQUNsSTt3QkFDRCxPQUFPLEVBQUUsSUFBSTtxQkFDaEI7aUJBQ0o7Z0JBQ0Qsc0JBQXNCLEVBQUU7b0JBQ3BCLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLE1BQU0sRUFBRSxzQkFBc0I7b0JBQzlCLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7b0JBQ3pDLFNBQVMsRUFBRTt3QkFDUCxNQUFNLEVBQUUscUJBQXFCO3FCQUNoQztvQkFDRCxLQUFLLEVBQUUsMkJBQTJCO29CQUNsQyxRQUFRLEVBQUU7d0JBQ04sTUFBTSxFQUFFLFdBQVc7d0JBQ25CLFdBQVcsRUFBRSxzQkFBc0I7d0JBQ25DLE9BQU8sRUFBRTs0QkFDTCxLQUFLLEVBQUUsd0hBQXdIO3lCQUNsSTt3QkFDRCxPQUFPLEVBQUUsSUFBSTtxQkFDaEI7aUJBQ0o7Z0JBQ0Qsc0JBQXNCLEVBQUU7b0JBQ3BCLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLE1BQU0sRUFBRSxzQkFBc0I7b0JBQzlCLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7b0JBQ3pDLFNBQVMsRUFBRTt3QkFDUCxNQUFNLEVBQUUsYUFBYTtxQkFDeEI7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2dCQUNELHNCQUFzQixFQUFFO29CQUNwQixJQUFJLEVBQUUsc0JBQXNCO29CQUM1QixNQUFNLEVBQUUsc0JBQXNCO29CQUM5QixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxhQUFhLEVBQUUsMEJBQTBCO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLDZEQUE2RDtxQkFDeEU7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2dCQUNELHNCQUFzQixFQUFFO29CQUNwQixJQUFJLEVBQUUsc0JBQXNCO29CQUM1QixNQUFNLEVBQUUsc0JBQXNCO29CQUM5QixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxhQUFhLEVBQUUsMEJBQTBCO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLHNCQUFzQjtxQkFDakM7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2dCQUNELHNCQUFzQixFQUFFO29CQUNwQixJQUFJLEVBQUUsc0JBQXNCO29CQUM1QixNQUFNLEVBQUUsc0JBQXNCO29CQUM5QixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxhQUFhLEVBQUUsMEJBQTBCO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLDZCQUE2QjtxQkFDeEM7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2FBQ0o7WUFDRCxXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGdCQUFnQixFQUFFO2dCQUNkLFlBQVksRUFBRTtvQkFDVixJQUFJLEVBQUUsWUFBWTtvQkFDbEIsTUFBTSxFQUFFLFlBQVk7b0JBQ3BCLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7b0JBQ3pDLE9BQU8sRUFBRTt3QkFDTCxHQUFHLEVBQUU7NEJBQ0QsTUFBTSxFQUFFLEVBQUU7NEJBQ1YsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsT0FBTyxFQUFFLEdBQUc7NEJBQ1osUUFBUSxFQUFFLEdBQUc7NEJBQ2IsT0FBTyxFQUFFLEdBQUc7NEJBQ1osUUFBUSxFQUFFLEVBQUU7eUJBQ2Y7cUJBQ0o7b0JBQ0QsZ0JBQWdCLEVBQUU7d0JBQ2QsR0FBRyxFQUFFOzRCQUNELE1BQU0sRUFBRSxpQ0FBaUM7NEJBQ3pDLE1BQU0sRUFBRTtnQ0FDSixNQUFNLEVBQUUsRUFBRTtnQ0FDVixLQUFLLEVBQUUsR0FBRztnQ0FDVixPQUFPLEVBQUUsR0FBRztnQ0FDWixRQUFRLEVBQUUsR0FBRztnQ0FDYixPQUFPLEVBQUUsR0FBRztnQ0FDWixRQUFRLEVBQUUsRUFBRTs2QkFDZjt5QkFDSjt3QkFDRCxHQUFHLEVBQUU7NEJBQ0QsTUFBTSxFQUFFLDJCQUEyQjs0QkFDbkMsTUFBTSxFQUFFO2dDQUNKLE1BQU0sRUFBRSxHQUFHO2dDQUNYLEtBQUssRUFBRSxHQUFHO2dDQUNWLE9BQU8sRUFBRSxHQUFHO2dDQUNaLFFBQVEsRUFBRSxHQUFHO2dDQUNiLE9BQU8sRUFBRSxHQUFHO2dDQUNaLFFBQVEsRUFBRSxFQUFFOzZCQUNmO3lCQUNKO3FCQUNKO29CQUNELE1BQU0sRUFBRTt3QkFDSixNQUFNLEVBQUUsMERBQTBEO3FCQUNyRTtvQkFDRCxRQUFRLEVBQUUsRUFBRTtvQkFDWixPQUFPLEVBQUUsRUFBRTtvQkFDWCxXQUFXLEVBQUUsRUFBRTtvQkFDZixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2FBQ0o7WUFDRCxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtLQUNKO0NBQ0osQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFRO0lBQ2xCLGdCQUFnQixFQUFFLEVBQUU7SUFDcEIsU0FBUyxFQUFFLENBQUM7SUFDWixhQUFhLEVBQUUsRUFBRTtJQUNqQixTQUFTLEVBQUU7UUFDUCxVQUFVLEVBQUUsQ0FBQztRQUNiLGNBQWMsRUFBRSxlQUFlO1FBQy9CLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsYUFBYSxFQUFFLEVBQUU7UUFDakIsU0FBUyxFQUFFLEVBQUU7UUFDYixhQUFhLEVBQUUsa0NBQWtDO1FBQ2pELE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsVUFBVSxFQUFFLDZCQUE2QjtRQUN6QyxNQUFNLEVBQUUsK0NBQStDO1FBQ3ZELE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsVUFBVSxFQUFFO1lBQ1IsS0FBSyxFQUFFLGFBQWE7WUFDcEIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsTUFBTSxFQUFFLHFEQUFxRDtTQUNoRTtRQUNELGFBQWEsRUFBRSwwQkFBMEI7UUFDekMsWUFBWSxFQUFFLENBQUM7UUFDZixTQUFTLEVBQUUsQ0FBQztRQUNaLGNBQWMsRUFBRSxDQUFDO1FBQ2pCLGtCQUFrQixFQUFFLENBQUM7UUFDckIsa0JBQWtCLEVBQUUsQ0FBQztRQUNyQixlQUFlLEVBQUUsQ0FBQztLQUNyQjtJQUNELFdBQVcsRUFBRTtRQUNULEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUU7Z0JBQ1Isc0JBQXNCLEVBQUU7b0JBQ3BCLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLE1BQU0sRUFBRSxzQkFBc0I7b0JBQzlCLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7b0JBQ3pDLFNBQVMsRUFBRTt3QkFDUCxNQUFNLEVBQUUsb0VBQW9FO3FCQUMvRTtvQkFDRCxLQUFLLEVBQUUsMkJBQTJCO29CQUNsQyxRQUFRLEVBQUU7d0JBQ04sTUFBTSxFQUFFLFdBQVc7d0JBQ25CLFdBQVcsRUFBRSxzQkFBc0I7d0JBQ25DLE9BQU8sRUFBRTs0QkFDTCxLQUFLLEVBQUUsd0hBQXdIO3lCQUNsSTt3QkFDRCxPQUFPLEVBQUUsSUFBSTtxQkFDaEI7aUJBQ0o7Z0JBQ0Qsc0JBQXNCLEVBQUU7b0JBQ3BCLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLE1BQU0sRUFBRSxzQkFBc0I7b0JBQzlCLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7b0JBQ3pDLFNBQVMsRUFBRTt3QkFDUCxNQUFNLEVBQUUscUJBQXFCO3FCQUNoQztvQkFDRCxLQUFLLEVBQUUsMkJBQTJCO29CQUNsQyxRQUFRLEVBQUU7d0JBQ04sTUFBTSxFQUFFLFdBQVc7d0JBQ25CLFdBQVcsRUFBRSxzQkFBc0I7d0JBQ25DLE9BQU8sRUFBRTs0QkFDTCxLQUFLLEVBQUUsd0hBQXdIO3lCQUNsSTt3QkFDRCxPQUFPLEVBQUUsSUFBSTtxQkFDaEI7aUJBQ0o7Z0JBQ0Qsc0JBQXNCLEVBQUU7b0JBQ3BCLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLE1BQU0sRUFBRSxzQkFBc0I7b0JBQzlCLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7b0JBQ3pDLFNBQVMsRUFBRTt3QkFDUCxNQUFNLEVBQUUsYUFBYTtxQkFDeEI7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2dCQUNELHNCQUFzQixFQUFFO29CQUNwQixJQUFJLEVBQUUsc0JBQXNCO29CQUM1QixNQUFNLEVBQUUsc0JBQXNCO29CQUM5QixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxhQUFhLEVBQUUsMEJBQTBCO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLDZEQUE2RDtxQkFDeEU7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2dCQUNELHNCQUFzQixFQUFFO29CQUNwQixJQUFJLEVBQUUsc0JBQXNCO29CQUM1QixNQUFNLEVBQUUsc0JBQXNCO29CQUM5QixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxhQUFhLEVBQUUsMEJBQTBCO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLHNCQUFzQjtxQkFDakM7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2dCQUNELHNCQUFzQixFQUFFO29CQUNwQixJQUFJLEVBQUUsc0JBQXNCO29CQUM1QixNQUFNLEVBQUUsc0JBQXNCO29CQUM5QixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxhQUFhLEVBQUUsMEJBQTBCO29CQUN6QyxTQUFTLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLCtCQUErQjtxQkFDMUM7b0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2FBQ0o7WUFDRCxXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGdCQUFnQixFQUFFO2dCQUNkLFlBQVksRUFBRTtvQkFDVixJQUFJLEVBQUUsWUFBWTtvQkFDbEIsTUFBTSxFQUFFLFlBQVk7b0JBQ3BCLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7b0JBQ3pDLE9BQU8sRUFBRTt3QkFDTCxHQUFHLEVBQUU7NEJBQ0QsTUFBTSxFQUFFLEVBQUU7NEJBQ1YsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsT0FBTyxFQUFFLEdBQUc7NEJBQ1osUUFBUSxFQUFFLEdBQUc7NEJBQ2IsT0FBTyxFQUFFLEdBQUc7NEJBQ1osUUFBUSxFQUFFLEVBQUU7eUJBQ2Y7cUJBQ0o7b0JBQ0QsZ0JBQWdCLEVBQUU7d0JBQ2QsR0FBRyxFQUFFOzRCQUNELE1BQU0sRUFBRSxpQ0FBaUM7NEJBQ3pDLE1BQU0sRUFBRTtnQ0FDSixNQUFNLEVBQUUsRUFBRTtnQ0FDVixLQUFLLEVBQUUsR0FBRztnQ0FDVixPQUFPLEVBQUUsR0FBRztnQ0FDWixRQUFRLEVBQUUsR0FBRztnQ0FDYixPQUFPLEVBQUUsR0FBRztnQ0FDWixRQUFRLEVBQUUsRUFBRTs2QkFDZjt5QkFDSjt3QkFDRCxHQUFHLEVBQUU7NEJBQ0QsTUFBTSxFQUFFLDJCQUEyQjs0QkFDbkMsTUFBTSxFQUFFO2dDQUNKLE1BQU0sRUFBRSxHQUFHO2dDQUNYLEtBQUssRUFBRSxHQUFHO2dDQUNWLE9BQU8sRUFBRSxHQUFHO2dDQUNaLFFBQVEsRUFBRSxHQUFHO2dDQUNiLE9BQU8sRUFBRSxHQUFHO2dDQUNaLFFBQVEsRUFBRSxFQUFFOzZCQUNmO3lCQUNKO3FCQUNKO29CQUNELE1BQU0sRUFBRTt3QkFDSixNQUFNLEVBQUUsMERBQTBEO3FCQUNyRTtvQkFDRCxRQUFRLEVBQUUsRUFBRTtvQkFDWixPQUFPLEVBQUUsRUFBRTtvQkFDWCxXQUFXLEVBQUUsRUFBRTtvQkFDZixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsUUFBUSxFQUFFO3dCQUNOLE1BQU0sRUFBRSxXQUFXO3dCQUNuQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxPQUFPLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLHdIQUF3SDt5QkFDbEk7d0JBQ0QsT0FBTyxFQUFFLElBQUk7cUJBQ2hCO2lCQUNKO2FBQ0o7WUFDRCxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtLQUNKO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGVzdC9UZXN0aW5nVGltZSc7XG5pbXBvcnQge0RvY0Fubm90YXRpb25JbmRleH0gZnJvbSBcIi4vRG9jQW5ub3RhdGlvbkluZGV4XCI7XG5pbXBvcnQge0RvY0Fubm90YXRpb25JbmRleE1hbmFnZXJ9IGZyb20gXCIuL0RvY0Fubm90YXRpb25JbmRleE1hbmFnZXJcIjtcbmltcG9ydCB7RG9jRmlsZVJlc29sdmVyfSBmcm9tIFwiLi4vZGF0YXN0b3JlL0RvY0ZpbGVSZXNvbHZlcnNcIjtcbmltcG9ydCB7QmFja2VuZH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmRcIjtcbmltcG9ydCB7R2V0RmlsZU9wdHN9IGZyb20gXCIuLi9kYXRhc3RvcmUvRGF0YXN0b3JlXCI7XG5pbXBvcnQge0RvY0ZpbGVNZXRhfSBmcm9tIFwiLi4vZGF0YXN0b3JlL0RvY0ZpbGVNZXRhXCI7XG5pbXBvcnQge0RvY01ldGFMaXN0ZW5lciwgRG9jTWV0YVJlY29yZCwgRG9jTWV0YVJlY29yZHN9IGZyb20gXCIuLi9kYXRhc3RvcmUvc2hhcmluZy9kYi9Eb2NNZXRhTGlzdGVuZXJzXCI7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tIFwiLi4vbWV0YWRhdGEvRG9jTWV0YXNcIjtcbmltcG9ydCB7VXNlclByb2ZpbGV9IGZyb20gXCIuLi9kYXRhc3RvcmUvc2hhcmluZy9kYi9Vc2VyUHJvZmlsZXNcIjtcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7UHJveGllc30gZnJvbSBcIi4uL3Byb3hpZXMvUHJveGllc1wiO1xuaW1wb3J0IHtEZWZhdWx0RG9jQW5ub3RhdGlvbiwgRG9jQW5ub3RhdGlvbn0gZnJvbSBcIi4vRG9jQW5ub3RhdGlvblwiO1xuaW1wb3J0IHtEaWN0aW9uYXJpZXN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvRGljdGlvbmFyaWVzXCI7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuaW1wb3J0IHtWaXNpYmlsaXR5fSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvVmlzaWJpbGl0eVwiO1xuaW1wb3J0IHtGaWxlUmVmfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvRmlsZVJlZlwiO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9uc1wiO1xuXG5kZXNjcmliZSgnRG9jQW5ub3RhdGlvbkluZGV4TWFuYWdlcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgVGVzdGluZ1RpbWUuZnJlZXplKCk7XG4gICAgfSk7XG5cbiAgICBpdChcIlVwZGF0ZXMgYW5kIG1ha2luZyBzdXJlIHRoZSBmaWxlIGlzIHVwZGF0ZWQgcHJvcGVybHlcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZG9jRmlsZVJlc29sdmVyOiBEb2NGaWxlUmVzb2x2ZXIgPSAoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmLCBvcHRzPzogR2V0RmlsZU9wdHMpOiBEb2NGaWxlTWV0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge2JhY2tlbmQsIHJlZiwgdXJsOiAnZmlsZTovLy9mYWtlL3VybC9wYXRoLmpwZyd9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBuclVwZGF0ZXMgPSAwO1xuXG4gICAgICAgIGNvbnN0IGRvY0Fubm90YXRpb25JbmRleCA9IG5ldyBEb2NBbm5vdGF0aW9uSW5kZXgoKTtcbiAgICAgICAgY29uc3QgZG9jQW5ub3RhdGlvbkluZGV4TWFuYWdlciA9IG5ldyBEb2NBbm5vdGF0aW9uSW5kZXhNYW5hZ2VyKGRvY0ZpbGVSZXNvbHZlciwgZG9jQW5ub3RhdGlvbkluZGV4LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uVXBkYXRlZCBjYWxsZWQgcHJvcGVybHlcIik7XG4gICAgICAgICAgICArK25yVXBkYXRlcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnQgPSBcIjM5YjczMGI2ZTlkMjgxYjBlYWU5MWIyYzJjMjliODQyXCI7XG4gICAgICAgIGNvbnN0IGRvY0lEID0gJ2RvY0lEOjB4MDAwMDEnO1xuICAgICAgICBjb25zdCBwcm9maWxlSUQgPSAncHJvZjoweDAwMDAyJztcblxuICAgICAgICBjb25zdCBkb2NNZXRhSGFuZGxlciA9IChkb2NNZXRhOiBJRG9jTWV0YSkgPT4ge1xuICAgICAgICAgICAgZG9jQW5ub3RhdGlvbkluZGV4TWFuYWdlci5yZWdpc3Rlckxpc3RlbmVyRm9yRG9jTWV0YShkb2NNZXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBlcnJIYW5kbGVyID0gTlVMTF9GVU5DVElPTjtcblxuICAgICAgICBjb25zdCBkb2NNZXRhTGlzdGVuZXIgPSBuZXcgRG9jTWV0YUxpc3RlbmVyKGZpbmdlcnByaW50LCBwcm9maWxlSUQsIGRvY01ldGFIYW5kbGVyLCBlcnJIYW5kbGVyKTtcblxuICAgICAgICBmdW5jdGlvbiB0b0RvY01ldGEob2JqOiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBEb2NNZXRhcy5kZXNlcmlhbGl6ZShKU09OLnN0cmluZ2lmeShkb2NNZXRhMCksIGZpbmdlcnByaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVByaW1hcnlEb2MoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBQcm94aWVzLmNyZWF0ZSh0b0RvY01ldGEoZG9jTWV0YTApKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQcm9maWxlOiBVc2VyUHJvZmlsZSA9IHtcbiAgICAgICAgICAgICAgICBzZWxmOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb2ZpbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdwcm9maWxlOjEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQWxpY2UnLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6ICdhbGljZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBEb2NNZXRhUmVjb3Jkcy5hcHBseUF1dGhvcnNGcm9tVXNlclByb2ZpbGUoZG9jTWV0YSwgdXNlclByb2ZpbGUpO1xuXG4gICAgICAgICAgICBkb2NBbm5vdGF0aW9uSW5kZXhNYW5hZ2VyLnJlZ2lzdGVyTGlzdGVuZXJGb3JEb2NNZXRhKGRvY01ldGEpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBhc3NlcnQuZXF1YWwoZG9jQW5ub3RhdGlvbkluZGV4LmdldERvY0Fubm90YXRpb25zU29ydGVkKCkubGVuZ3RoLCAwKTtcbiAgICAgICAgaGFuZGxlUHJpbWFyeURvYygpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoZG9jQW5ub3RhdGlvbkluZGV4LmdldERvY0Fubm90YXRpb25zU29ydGVkKCkubGVuZ3RoLCAxKTtcblxuICAgICAgICBmdW5jdGlvbiB2ZXJpZnkwKCkge1xuICAgICAgICAgICAgY29uc3Qgc29ydGVkID0gZG9jQW5ub3RhdGlvbkluZGV4LmdldERvY0Fubm90YXRpb25zU29ydGVkKCk7XG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IHNvcnRlZFswXTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChmaXJzdC5pZCwgJzFCZkpUYnYzRVonKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gZmlyc3QuZ2V0Q2hpbGRyZW4oKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChjaGlsZHJlbi5sZW5ndGgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmVyaWZ5MCgpO1xuXG4gICAgICAgIGNvbnN0IHVzZXJQcm9maWxlMTogVXNlclByb2ZpbGUgPSB7XG4gICAgICAgICAgICBzZWxmOiB0cnVlLFxuICAgICAgICAgICAgcHJvZmlsZToge1xuICAgICAgICAgICAgICAgIGlkOiAncHJvZmlsZToxJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQWxpY2UnLFxuICAgICAgICAgICAgICAgIGhhbmRsZTogJ2FsaWNlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZURvY01ldGFSZWNvcmQoZG9jTWV0YTogSURvY01ldGEpOiBEb2NNZXRhUmVjb3JkIHtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YVJlY29yZDogRG9jTWV0YVJlY29yZCA9IHtcbiAgICAgICAgICAgICAgICB1aWQ6ICd1aWQ6MHgwMDAwMScsXG4gICAgICAgICAgICAgICAgaWQ6IGRvY0lELFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IFZpc2liaWxpdHkuUFJJVkFURSxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICBkb2NJbmZvOiBkb2NNZXRhLmRvY0luZm8sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeShkb2NNZXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBkb2NNZXRhUmVjb3JkO1xuXG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTZWNvbmRhcnlEb2MoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGFSZWNvcmQgPSBjcmVhdGVEb2NNZXRhUmVjb3JkKGRvY01ldGExKTtcblxuICAgICAgICAgICAgYXdhaXQgZG9jTWV0YUxpc3RlbmVyLmhhbmRsZURvY01ldGFSZWNvcmRXaXRoVXNlclByb2ZpbGUoe2RvY0lELCBmaW5nZXJwcmludH0sIHVzZXJQcm9maWxlMSwgZG9jTWV0YVJlY29yZCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGhhbmRsZVNlY29uZGFyeURvYygpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGR1bXBEb2NBbm5vdGF0aW9ucyhkb2NBbm5vdGF0aW9uczogUmVhZG9ubHlBcnJheTxEZWZhdWx0RG9jQW5ub3RhdGlvbj4pIHtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBkb2NBbm5vdGF0aW9uIG9mIGRvY0Fubm90YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09XCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWQ6IFwiICsgZG9jQW5ub3RhdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jQW5ub3RhdGlvbi5odG1sKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gZG9jQW5ub3RhdGlvbi5nZXRDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgICAgPT09PVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgICAgaWQ6IFwiLCBjaGlsZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiICAgIGh0bWw6IFwiLCBjaGlsZC5odG1sKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgICAgICBmdW5jdGlvbiB2ZXJpZnkxKCkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT0gVmVyaWZ5MVwiKTtcblxuICAgICAgICAgICAgY29uc3QgZG9jQW5ub3RhdGlvbnNTb3J0ZWQgPSBkb2NBbm5vdGF0aW9uSW5kZXguZ2V0RG9jQW5ub3RhdGlvbnNTb3J0ZWQoKTtcbiAgICAgICAgICAgIGR1bXBEb2NBbm5vdGF0aW9ucyhkb2NBbm5vdGF0aW9uc1NvcnRlZCk7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoZG9jQW5ub3RhdGlvbnNTb3J0ZWQubGVuZ3RoLCAyKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChuclVwZGF0ZXMsIDIpO1xuXG4gICAgICAgIH1cblxuICAgICAgICB2ZXJpZnkxKCk7XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2Vjb25kYXJ5RG9jMSgpIHtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YVJlY29yZCA9IGNyZWF0ZURvY01ldGFSZWNvcmQoZG9jTWV0YTIpO1xuXG4gICAgICAgICAgICBhd2FpdCBkb2NNZXRhTGlzdGVuZXIuaGFuZGxlRG9jTWV0YVJlY29yZFdpdGhVc2VyUHJvZmlsZSh7ZG9jSUQsIGZpbmdlcnByaW50fSwgdXNlclByb2ZpbGUxLCBkb2NNZXRhUmVjb3JkKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgaGFuZGxlU2Vjb25kYXJ5RG9jMSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFubm90YXRpb25zVG9NYXAoZG9jQW5ub3RhdGlvbnM6IFJlYWRvbmx5QXJyYXk8RG9jQW5ub3RhdGlvbj4pIHtcbiAgICAgICAgICAgIHJldHVybiBEaWN0aW9uYXJpZXMudG9EaWN0KGRvY0Fubm90YXRpb25zLCBjdXJyZW50ID0+IGN1cnJlbnQuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdmVyaWZ5MigpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09IFZlcmlmeTJcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25zU29ydGVkID0gZG9jQW5ub3RhdGlvbkluZGV4LmdldERvY0Fubm90YXRpb25zU29ydGVkKCk7XG5cbiAgICAgICAgICAgIGR1bXBEb2NBbm5vdGF0aW9ucyhhbm5vdGF0aW9uc1NvcnRlZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25zTWFwID0gYW5ub3RhdGlvbnNUb01hcChhbm5vdGF0aW9uc1NvcnRlZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHRIaWdobGlnaHQgPSBhbm5vdGF0aW9uc01hcFsnMTJRRFJoTWQ2QiddO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwodGV4dEhpZ2hsaWdodC5odG1sLCBcIkhpZ2hseSBhdmFpbGFibGUgY2xvdWQgc3RvcmFnZSBpcyBvZnRlbiBpbXBsZW1lbnRlZCB3aXRoXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBjb21tZW50cyA9IHRleHRIaWdobGlnaHQuZ2V0Q2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgY29uc3QgY29tbWVudHNNYXAgPSBhbm5vdGF0aW9uc1RvTWFwKGNvbW1lbnRzKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGNvbW1lbnRzTWFwWycxMjN6cmlxWmdIWldqcTdqUm5FQyddLmh0bWwsIFwiPHA+a2tra2trZGRkZGRkZGFhYSB0d288L3A+XCIpO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHZlcmlmeTIoKTtcblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTZWNvbmRhcnlEb2MyKCkge1xuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhUmVjb3JkID0gY3JlYXRlRG9jTWV0YVJlY29yZChkb2NNZXRhMyk7XG5cbiAgICAgICAgICAgIGF3YWl0IGRvY01ldGFMaXN0ZW5lci5oYW5kbGVEb2NNZXRhUmVjb3JkV2l0aFVzZXJQcm9maWxlKHtkb2NJRCwgZmluZ2VycHJpbnR9LCB1c2VyUHJvZmlsZTEsIGRvY01ldGFSZWNvcmQpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBoYW5kbGVTZWNvbmRhcnlEb2MyKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gdmVyaWZ5MygpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09IFZlcmlmeTNcIilcblxuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbnNTb3J0ZWQgPSBkb2NBbm5vdGF0aW9uSW5kZXguZ2V0RG9jQW5ub3RhdGlvbnNTb3J0ZWQoKTtcbiAgICAgICAgICAgIGR1bXBEb2NBbm5vdGF0aW9ucyhhbm5vdGF0aW9uc1NvcnRlZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25zTWFwID0gYW5ub3RhdGlvbnNUb01hcChhbm5vdGF0aW9uc1NvcnRlZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHRIaWdobGlnaHQgPSBhbm5vdGF0aW9uc01hcFsnMTJRRFJoTWQ2QiddO1xuXG4gICAgICAgICAgICBjb25zdCBjb21tZW50cyA9IHRleHRIaWdobGlnaHQuZ2V0Q2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgY29uc3QgY29tbWVudHNNYXAgPSBhbm5vdGF0aW9uc1RvTWFwKGNvbW1lbnRzKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGNvbW1lbnRzTWFwWycxMlA1bXFBNFllM29mVHlNaHVtNSddLmh0bWwsIFwiPHA+a2tra2trZGRkZGRkZGFhYSB0aHJlZTwvcD5cIik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHZlcmlmeTMoKTtcblxuICAgIH0pO1xuXG59KTtcblxuY29uc3QgZG9jTWV0YTA6IGFueSA9IHtcbiAgICBcImFubm90YXRpb25JbmZvXCI6IHt9LFxuICAgIFwidmVyc2lvblwiOiAyLFxuICAgIFwiYXR0YWNobWVudHNcIjoge30sXG4gICAgXCJkb2NJbmZvXCI6IHtcbiAgICAgICAgXCJwcm9ncmVzc1wiOiAwLFxuICAgICAgICBcInBhZ2VtYXJrVHlwZVwiOiBcIlNJTkdMRV9DT0xVTU5cIixcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICAgICAgICBcImFyY2hpdmVkXCI6IGZhbHNlLFxuICAgICAgICBcImZsYWdnZWRcIjogZmFsc2UsXG4gICAgICAgIFwidGFnc1wiOiB7fSxcbiAgICAgICAgXCJhdHRhY2htZW50c1wiOiB7fSxcbiAgICAgICAgXCJuclBhZ2VzXCI6IDE0LFxuICAgICAgICBcImZpbmdlcnByaW50XCI6IFwiMzliNzMwYjZlOWQyODFiMGVhZTkxYjJjMmMyOWI4NDJcIixcbiAgICAgICAgXCJhZGRlZFwiOiBcIjIwMTktMDYtMjlUMTY6NTQ6MjEuNzY4WlwiLFxuICAgICAgICBcImZpbGVuYW1lXCI6IFwiMTJKaTlKRGNSbi1hdmFpbGFiaWxpdHkucGRmXCIsXG4gICAgICAgIFwidXVpZFwiOiBcInoyMDE5LTA3LTA1VDE1OjE4OjQwLjU1NForMDAwMDAxLTE0NTM3NTA5MTIwMVwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiYXZhaWxhYmlsaXR5LnBkZlwiLFxuICAgICAgICBcImJhY2tlbmRcIjogXCJzdGFzaFwiLFxuICAgICAgICBcImhhc2hjb2RlXCI6IHtcbiAgICAgICAgICAgIFwiYWxnXCI6IFwia2VjY2FrMjU2XCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCIxMkppOUpEY1JuWlQyN2plY2tyNEh1c1lZMjlRVndqNFd2Mko2aVljNVlYanR6bjNaSlRcIixcbiAgICAgICAgICAgIFwiZW5jXCI6IFwiYmFzZTU4Y2hlY2tcIlxuICAgICAgICB9LFxuICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxOS0wNy0wNVQxNToxODo0MC41NTRaXCIsXG4gICAgICAgIFwibnJDb21tZW50c1wiOiAyLFxuICAgICAgICBcIm5yTm90ZXNcIjogMCxcbiAgICAgICAgXCJuckZsYXNoY2FyZHNcIjogMCxcbiAgICAgICAgXCJuclRleHRIaWdobGlnaHRzXCI6IDEsXG4gICAgICAgIFwibnJBcmVhSGlnaGxpZ2h0c1wiOiAwLFxuICAgICAgICBcIm5yQW5ub3RhdGlvbnNcIjogM1xuICAgIH0sXG4gICAgXCJwYWdlTWV0YXNcIjoge1xuICAgICAgICBcIjFcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCIxNEU4NU5yYzRwSDFoNWZkY3BWdlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxNEU4NU5yYzRwSDFoNWZkY3BWdlwiLFxuICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxNEU4NU5yYzRwSDFoNWZkY3BWdlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDE5LTA3LTA0VDE2OjA2OjA5LjQ1NFpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTktMDctMDRUMTY6MDY6MDkuNDU0WlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJIVE1MXCI6IFwiPHA+dGhpcyBpcyBhIHRlc3QuLi48L3A+XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZcIjogXCJ0ZXh0LWhpZ2hsaWdodDoxMlFEUmhNZDZCXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktldmluIEJ1cnRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9maWxlSURcIjogXCIxMkVydjRqQ0Y1SEVCRkJWc3pCWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLUJsZEpIMWJhZTNvL0FBQUFBQUFBQUFJL0FBQUFBQUFBQURZL0RpMzYtWU5yS3FrL3Bob3RvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWVzdFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjFZZEd3VE4yUkpGRXR2cVhnTjhnXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFZZEd3VE4yUkpGRXR2cVhnTjhnXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjFZZEd3VE4yUkpGRXR2cVhnTjhnXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTktMDctMDVUMTQ6MTQ6NDEuNTE4WlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxOS0wNy0wNVQxNDozNjozOC44NTFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkhUTUxcIjogXCI8cD5hc2RmIGFzZGY8L3A+XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZcIjogXCJ0ZXh0LWhpZ2hsaWdodDoxQmZKVGJ2M0VaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktldmluIEJ1cnRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9maWxlSURcIjogXCIxMkVydjRqQ0Y1SEVCRkJWc3pCWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLUJsZEpIMWJhZTNvL0FBQUFBQUFBQUFJL0FBQUFBQUFBQURZL0RpMzYtWU5yS3FrL3Bob3RvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWVzdFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7XG4gICAgICAgICAgICAgICAgXCIxQmZKVGJ2M0VaXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFCZkpUYnYzRVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMUJmSlRidjNFWlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDE5LTA3LTAyVDE5OjQzOjU4LjQxN1pcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTktMDctMDJUMTk6NDM6NTguNDE3WlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlY3RzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDUwNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAzNzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA1NjcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMzg1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNjEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0U2VsZWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIjBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIiBHb29nbGUgYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogNTA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAzNzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogNTY3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAzODUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJURVhUXCI6IFwiIEdvb2dsZSBhblwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktldmluIEJ1cnRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9maWxlSURcIjogXCIxMkVydjRqQ0Y1SEVCRkJWc3pCWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLUJsZEpIMWJhZTNvL0FBQUFBQUFBQUFJL0FBQUFBQUFBQURZL0RpMzYtWU5yS3FrL3Bob3RvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWVzdFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMlwiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIzXCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjRcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiNVwiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCI2XCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogNlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjdcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiA3XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiOFwiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCI5XCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogOVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjEwXCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogMTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIxMVwiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDExXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTJcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiAxMlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjEzXCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogMTNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIxNFwiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDE0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jb25zdCBkb2NNZXRhMTogYW55ID0ge1xuICAgIFwiYW5ub3RhdGlvbkluZm9cIjoge30sXG4gICAgXCJ2ZXJzaW9uXCI6IDIsXG4gICAgXCJhdHRhY2htZW50c1wiOiB7fSxcbiAgICBcImRvY0luZm9cIjoge1xuICAgICAgICBcInByb2dyZXNzXCI6IDAsXG4gICAgICAgIFwicGFnZW1hcmtUeXBlXCI6IFwiU0lOR0xFX0NPTFVNTlwiLFxuICAgICAgICBcInByb3BlcnRpZXNcIjoge30sXG4gICAgICAgIFwiYXJjaGl2ZWRcIjogZmFsc2UsXG4gICAgICAgIFwiZmxhZ2dlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJ0YWdzXCI6IHt9LFxuICAgICAgICBcImF0dGFjaG1lbnRzXCI6IHt9LFxuICAgICAgICBcIm5yUGFnZXNcIjogMTQsXG4gICAgICAgIFwiZmluZ2VycHJpbnRcIjogXCIzOWI3MzBiNmU5ZDI4MWIwZWFlOTFiMmMyYzI5Yjg0MlwiLFxuICAgICAgICBcImFkZGVkXCI6IFwiMjAxOS0wNi0yOVQxNjo1MjozNi4zMzlaXCIsXG4gICAgICAgIFwiZmlsZW5hbWVcIjogXCIxMkppOUpEY1JuLWF2YWlsYWJpbGl0eS5wZGZcIixcbiAgICAgICAgXCJ1dWlkXCI6IFwiejIwMTktMDctMDRUMjE6NTI6MDEuMDIwWiswMDAwMTUtMDc5NzkyMTUyNTg0XCIsXG4gICAgICAgIFwidGl0bGVcIjogXCJhdmFpbGFiaWxpdHkucGRmXCIsXG4gICAgICAgIFwiaGFzaGNvZGVcIjoge1xuICAgICAgICAgICAgXCJlbmNcIjogXCJiYXNlNThjaGVja1wiLFxuICAgICAgICAgICAgXCJhbGdcIjogXCJrZWNjYWsyNTZcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcIjEySmk5SkRjUm5aVDI3amVja3I0SHVzWVkyOVFWd2o0V3YySjZpWWM1WVhqdHpuM1pKVFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDE5LTA3LTA0VDIxOjUyOjAxLjAyMFpcIixcbiAgICAgICAgXCJuckNvbW1lbnRzXCI6IDYsXG4gICAgICAgIFwibnJOb3Rlc1wiOiAwLFxuICAgICAgICBcIm5yRmxhc2hjYXJkc1wiOiAwLFxuICAgICAgICBcIm5yVGV4dEhpZ2hsaWdodHNcIjogMSxcbiAgICAgICAgXCJuckFyZWFIaWdobGlnaHRzXCI6IDAsXG4gICAgICAgIFwibnJBbm5vdGF0aW9uc1wiOiA3XG4gICAgfSxcbiAgICBcInBhZ2VNZXRhc1wiOiB7XG4gICAgICAgIFwiMVwiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcIjEyNmo2NkZnY2ZVbmFyeDZ3dDl4XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEyNmo2NkZnY2ZVbmFyeDZ3dDl4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjEyNmo2NkZnY2ZVbmFyeDZ3dDl4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTktMDYtMjlUMTY6NTI6NTguNjIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxOS0wNi0yOVQxNjo1Mjo1OC42MjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkhUTUxcIjogXCI8cD50aGlzIGlzIGEgZXhhbXBsZSBoaWdobGlnaHQgYW5kIGNvbW1lbnQgZnJvbSB0aGUgdGVzdCB1c2VyLjwvcD5cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInJlZlwiOiBcInRleHQtaGlnaGxpZ2h0OjEyUURSaE1kNkJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdCB0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2ZpbGVJRFwiOiBcIjFtQWQyNENYaXhvTjk5ZXNtZkxMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tSE04dElpLVVnMVEvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZEZPU2FHTDNuVWNNcVZDeFUzR21UMTFKdHRTUS9tby9waG90by5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3Vlc3RcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjEyUzRyYmI0N2JTU3ROdE1YbU14XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEyUzRyYmI0N2JTU3ROdE1YbU14XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjEyUzRyYmI0N2JTU3ROdE1YbU14XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTktMDYtMjlUMTc6MDQ6NDguODk2WlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxOS0wNi0yOVQxNzowNDo0OC44OTZaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkhUTUxcIjogXCI8cD5hbm90aGVyIG9uZS48L3A+XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZcIjogXCJ0ZXh0LWhpZ2hsaWdodDoxMlFEUmhNZDZCXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInRlc3QgdGVzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9maWxlSURcIjogXCIxbUFkMjRDWGl4b045OWVzbWZMTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLUhNOHRJaS1VZzFRL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FDSGkzcmRGT1NhR0wzblVjTXFWQ3hVM0dtVDExSnR0U1EvbW8vcGhvdG8uanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImd1ZXN0XCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIxMkVwUUNZakF0ZVlobWNWZkxGMlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxMkVwUUNZakF0ZVlobWNWZkxGMlwiLFxuICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxMkVwUUNZakF0ZVlobWNWZkxGMlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDE5LTA3LTA0VDAzOjI5OjAxLjY1NFpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTktMDctMDRUMDM6Mjk6MDEuNjU0WlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJIVE1MXCI6IFwiPHA+YXNkZjwvcD5cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInJlZlwiOiBcInRleHQtaGlnaGxpZ2h0OjEyUURSaE1kNkJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdCB0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2ZpbGVJRFwiOiBcIjFtQWQyNENYaXhvTjk5ZXNtZkxMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tSE04dElpLVVnMVEvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZEZPU2FHTDNuVWNNcVZDeFUzR21UMTFKdHRTUS9tby9waG90by5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3Vlc3RcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjEyZTIxcjc5RkRCV3B3aERnczg2XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEyZTIxcjc5RkRCV3B3aERnczg2XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjEyZTIxcjc5RkRCV3B3aERnczg2XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTktMDctMDRUMjE6MjY6NDcuODI4WlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxOS0wNy0wNFQyMToyNjo0Ny44MjhaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkhUTUxcIjogXCI8cD5vay4uIHVwZGF0ZXMgZG9uJ3Qgd29yayBidXQgd2hhdCBhYm91dCBuZXcgY29tbWVudHM/PC9wPlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwicmVmXCI6IFwidGV4dC1oaWdobGlnaHQ6MTJRRFJoTWQ2QlwiLFxuICAgICAgICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0ZXN0IHRlc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZmlsZUlEXCI6IFwiMW1BZDI0Q1hpeG9OOTllc21mTExcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1ITTh0SWktVWcxUS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JkRk9TYUdMM25VY01xVkN4VTNHbVQxMUp0dFNRL21vL3Bob3RvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWVzdFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiMTJMWnVvMloxam92c1cycGhQdTZcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTJMWnVvMloxam92c1cycGhQdTZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJMWnVvMloxam92c1cycGhQdTZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxOS0wNy0wNFQyMToyNzoyMC4zNTVaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDE5LTA3LTA0VDIxOjI3OjIwLjM1NVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSFRNTFwiOiBcIjxwPmFub3RoZXIgdGVzdC48L3A+XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZcIjogXCJ0ZXh0LWhpZ2hsaWdodDoxMlFEUmhNZDZCXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInRlc3QgdGVzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9maWxlSURcIjogXCIxbUFkMjRDWGl4b045OWVzbWZMTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLUhNOHRJaS1VZzFRL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FDSGkzcmRGT1NhR0wzblVjTXFWQ3hVM0dtVDExSnR0U1EvbW8vcGhvdG8uanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImd1ZXN0XCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIxMnJjQmpKTlB1VlZLR0J0dDNpNFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxMnJjQmpKTlB1VlZLR0J0dDNpNFwiLFxuICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxMnJjQmpKTlB1VlZLR0J0dDNpNFwiLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDE5LTA3LTA0VDIxOjI2OjEyLjI1OFpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTktMDctMDRUMjE6NTI6MDAuOTczWlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJIVE1MXCI6IFwiPHA+a2tra2trZGRkZGRkZGFhYTwvcD5cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInJlZlwiOiBcInRleHQtaGlnaGxpZ2h0OjEyUURSaE1kNkJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdCB0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2ZpbGVJRFwiOiBcIjFtQWQyNENYaXhvTjk5ZXNtZkxMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tSE04dElpLVVnMVEvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZEZPU2FHTDNuVWNNcVZDeFUzR21UMTFKdHRTUS9tby9waG90by5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3Vlc3RcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7XG4gICAgICAgICAgICAgICAgXCIxMlFEUmhNZDZCXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEyUURSaE1kNkJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJRRFJoTWQ2QlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDE5LTA2LTI5VDE2OjUyOjQ2LjI0OVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTktMDYtMjlUMTY6NTI6NDYuMjQ5WlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlY3RzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDM2NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDM5NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAzNzksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0U2VsZWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIjBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkhpZ2hseSBhdmFpbGFibGUgY2xvdWQgc3RvcmFnZSBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDM2NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAyNjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDM3OSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxNjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaXMgb2Z0ZW4gaW1wbGVtZW50ZWQgd2l0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAyNjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDM2NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAzOTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDM3OSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMzYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJURVhUXCI6IFwiSGlnaGx5IGF2YWlsYWJsZSBjbG91ZCBzdG9yYWdlIGlzIG9mdGVuIGltcGxlbWVudGVkIHdpdGhcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0ZXN0IHRlc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZmlsZUlEXCI6IFwiMW1BZDI0Q1hpeG9OOTllc21mTExcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1ITTh0SWktVWcxUS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JkRk9TYUdMM25VY01xVkN4VTNHbVQxMUp0dFNRL21vL3Bob3RvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWVzdFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIyXCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogMlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjNcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiNFwiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCI1XCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogNVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjZcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiA2XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiN1wiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCI4XCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogOFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjlcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiA5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTBcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiAxMFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjExXCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogMTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIxMlwiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDEyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTNcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiAxM1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjE0XCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogMTRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IGRvY01ldGEyOiBhbnkgPSB7XG4gICAgXCJhbm5vdGF0aW9uSW5mb1wiOiB7fSxcbiAgICBcInZlcnNpb25cIjogMixcbiAgICBcImF0dGFjaG1lbnRzXCI6IHt9LFxuICAgIFwiZG9jSW5mb1wiOiB7XG4gICAgICAgIFwicHJvZ3Jlc3NcIjogMCxcbiAgICAgICAgXCJwYWdlbWFya1R5cGVcIjogXCJTSU5HTEVfQ09MVU1OXCIsXG4gICAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgICAgXCJhcmNoaXZlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJmbGFnZ2VkXCI6IGZhbHNlLFxuICAgICAgICBcInRhZ3NcIjoge30sXG4gICAgICAgIFwiYXR0YWNobWVudHNcIjoge30sXG4gICAgICAgIFwibnJQYWdlc1wiOiAxNCxcbiAgICAgICAgXCJmaW5nZXJwcmludFwiOiBcIjM5YjczMGI2ZTlkMjgxYjBlYWU5MWIyYzJjMjliODQyXCIsXG4gICAgICAgIFwiYWRkZWRcIjogXCIyMDE5LTA2LTI5VDE2OjUyOjM2LjMzOVpcIixcbiAgICAgICAgXCJmaWxlbmFtZVwiOiBcIjEySmk5SkRjUm4tYXZhaWxhYmlsaXR5LnBkZlwiLFxuICAgICAgICBcInV1aWRcIjogXCJ6MjAxOS0wNy0wN1QxNjo1NzoxNS4wMzVaKzAwMDAwMS0yMDE1Njc3NjI3NjJcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcImF2YWlsYWJpbGl0eS5wZGZcIixcbiAgICAgICAgXCJoYXNoY29kZVwiOiB7XG4gICAgICAgICAgICBcImVuY1wiOiBcImJhc2U1OGNoZWNrXCIsXG4gICAgICAgICAgICBcImFsZ1wiOiBcImtlY2NhazI1NlwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiMTJKaTlKRGNSblpUMjdqZWNrcjRIdXNZWTI5UVZ3ajRXdjJKNmlZYzVZWGp0em4zWkpUXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTktMDctMDdUMTY6NTc6MTUuMDM1WlwiLFxuICAgICAgICBcIm5yQ29tbWVudHNcIjogNixcbiAgICAgICAgXCJuck5vdGVzXCI6IDAsXG4gICAgICAgIFwibnJGbGFzaGNhcmRzXCI6IDAsXG4gICAgICAgIFwibnJUZXh0SGlnaGxpZ2h0c1wiOiAxLFxuICAgICAgICBcIm5yQXJlYUhpZ2hsaWdodHNcIjogMCxcbiAgICAgICAgXCJuckFubm90YXRpb25zXCI6IDdcbiAgICB9LFxuICAgIFwicGFnZU1ldGFzXCI6IHtcbiAgICAgICAgXCIxXCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiMTI2ajY2RmdjZlVuYXJ4Nnd0OXhcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTI2ajY2RmdjZlVuYXJ4Nnd0OXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTI2ajY2RmdjZlVuYXJ4Nnd0OXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxOS0wNi0yOVQxNjo1Mjo1OC42MjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDE5LTA2LTI5VDE2OjUyOjU4LjYyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSFRNTFwiOiBcIjxwPnRoaXMgaXMgYSBleGFtcGxlIGhpZ2hsaWdodCBhbmQgY29tbWVudCBmcm9tIHRoZSB0ZXN0IHVzZXIuPC9wPlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwicmVmXCI6IFwidGV4dC1oaWdobGlnaHQ6MTJRRFJoTWQ2QlwiLFxuICAgICAgICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0ZXN0IHRlc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZmlsZUlEXCI6IFwiMW1BZDI0Q1hpeG9OOTllc21mTExcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1ITTh0SWktVWcxUS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JkRk9TYUdMM25VY01xVkN4VTNHbVQxMUp0dFNRL21vL3Bob3RvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWVzdFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiMTJTNHJiYjQ3YlNTdE50TVhtTXhcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTJTNHJiYjQ3YlNTdE50TVhtTXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJTNHJiYjQ3YlNTdE50TVhtTXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxOS0wNi0yOVQxNzowNDo0OC44OTZaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDE5LTA2LTI5VDE3OjA0OjQ4Ljg5NlpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSFRNTFwiOiBcIjxwPmFub3RoZXIgb25lLjwvcD5cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInJlZlwiOiBcInRleHQtaGlnaGxpZ2h0OjEyUURSaE1kNkJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdCB0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2ZpbGVJRFwiOiBcIjFtQWQyNENYaXhvTjk5ZXNtZkxMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tSE04dElpLVVnMVEvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZEZPU2FHTDNuVWNNcVZDeFUzR21UMTFKdHRTUS9tby9waG90by5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3Vlc3RcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjEyRXBRQ1lqQXRlWWhtY1ZmTEYyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEyRXBRQ1lqQXRlWWhtY1ZmTEYyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjEyRXBRQ1lqQXRlWWhtY1ZmTEYyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTktMDctMDRUMDM6Mjk6MDEuNjU0WlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxOS0wNy0wNFQwMzoyOTowMS42NTRaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkhUTUxcIjogXCI8cD5hc2RmPC9wPlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwicmVmXCI6IFwidGV4dC1oaWdobGlnaHQ6MTJRRFJoTWQ2QlwiLFxuICAgICAgICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0ZXN0IHRlc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZmlsZUlEXCI6IFwiMW1BZDI0Q1hpeG9OOTllc21mTExcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1ITTh0SWktVWcxUS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JkRk9TYUdMM25VY01xVkN4VTNHbVQxMUp0dFNRL21vL3Bob3RvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWVzdFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiMTJlMjFyNzlGREJXcHdoRGdzODZcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTJlMjFyNzlGREJXcHdoRGdzODZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJlMjFyNzlGREJXcHdoRGdzODZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxOS0wNy0wNFQyMToyNjo0Ny44MjhaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDE5LTA3LTA0VDIxOjI2OjQ3LjgyOFpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSFRNTFwiOiBcIjxwPm9rLi4gdXBkYXRlcyBkb24ndCB3b3JrIGJ1dCB3aGF0IGFib3V0IG5ldyBjb21tZW50cz88L3A+XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZcIjogXCJ0ZXh0LWhpZ2hsaWdodDoxMlFEUmhNZDZCXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInRlc3QgdGVzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9maWxlSURcIjogXCIxbUFkMjRDWGl4b045OWVzbWZMTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLUhNOHRJaS1VZzFRL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FDSGkzcmRGT1NhR0wzblVjTXFWQ3hVM0dtVDExSnR0U1EvbW8vcGhvdG8uanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImd1ZXN0XCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIxMkxadW8yWjFqb3ZzVzJwaFB1NlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxMkxadW8yWjFqb3ZzVzJwaFB1NlwiLFxuICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxMkxadW8yWjFqb3ZzVzJwaFB1NlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDE5LTA3LTA0VDIxOjI3OjIwLjM1NVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTktMDctMDRUMjE6Mjc6MjAuMzU1WlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJIVE1MXCI6IFwiPHA+YW5vdGhlciB0ZXN0LjwvcD5cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInJlZlwiOiBcInRleHQtaGlnaGxpZ2h0OjEyUURSaE1kNkJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdCB0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2ZpbGVJRFwiOiBcIjFtQWQyNENYaXhvTjk5ZXNtZkxMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tSE04dElpLVVnMVEvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZEZPU2FHTDNuVWNNcVZDeFUzR21UMTFKdHRTUS9tby9waG90by5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3Vlc3RcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjEyM3pyaXFaZ0haV2pxN2pSbkVDXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEyM3pyaXFaZ0haV2pxN2pSbkVDXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjEyM3pyaXFaZ0haV2pxN2pSbkVDXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTktMDctMDRUMjE6MjY6MTIuMjU4WlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxOS0wNy0wN1QxNjo1NzoxNC45ODZaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkhUTUxcIjogXCI8cD5ra2tra2tkZGRkZGRkYWFhIHR3bzwvcD5cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInJlZlwiOiBcInRleHQtaGlnaGxpZ2h0OjEyUURSaE1kNkJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdCB0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2ZpbGVJRFwiOiBcIjFtQWQyNENYaXhvTjk5ZXNtZkxMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tSE04dElpLVVnMVEvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZEZPU2FHTDNuVWNNcVZDeFUzR21UMTFKdHRTUS9tby9waG90by5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3Vlc3RcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7XG4gICAgICAgICAgICAgICAgXCIxMlFEUmhNZDZCXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEyUURSaE1kNkJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJRRFJoTWQ2QlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDE5LTA2LTI5VDE2OjUyOjQ2LjI0OVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTktMDYtMjlUMTY6NTI6NDYuMjQ5WlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlY3RzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDM2NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDM5NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAzNzksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0U2VsZWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIjBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkhpZ2hseSBhdmFpbGFibGUgY2xvdWQgc3RvcmFnZSBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDM2NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAyNjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDM3OSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxNjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaXMgb2Z0ZW4gaW1wbGVtZW50ZWQgd2l0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAyNjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDM2NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAzOTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDM3OSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMzYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJURVhUXCI6IFwiSGlnaGx5IGF2YWlsYWJsZSBjbG91ZCBzdG9yYWdlIGlzIG9mdGVuIGltcGxlbWVudGVkIHdpdGhcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0ZXN0IHRlc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZmlsZUlEXCI6IFwiMW1BZDI0Q1hpeG9OOTllc21mTExcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1ITTh0SWktVWcxUS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JkRk9TYUdMM25VY01xVkN4VTNHbVQxMUp0dFNRL21vL3Bob3RvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWVzdFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIyXCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogMlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjNcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiNFwiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCI1XCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogNVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjZcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiA2XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiN1wiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCI4XCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogOFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjlcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiA5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTBcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiAxMFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjExXCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogMTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIxMlwiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDEyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTNcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiAxM1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjE0XCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogMTRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IGRvY01ldGEzOiBhbnkgPSB7XG4gICAgXCJhbm5vdGF0aW9uSW5mb1wiOiB7fSxcbiAgICBcInZlcnNpb25cIjogMixcbiAgICBcImF0dGFjaG1lbnRzXCI6IHt9LFxuICAgIFwiZG9jSW5mb1wiOiB7XG4gICAgICAgIFwicHJvZ3Jlc3NcIjogMCxcbiAgICAgICAgXCJwYWdlbWFya1R5cGVcIjogXCJTSU5HTEVfQ09MVU1OXCIsXG4gICAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgICAgXCJhcmNoaXZlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJmbGFnZ2VkXCI6IGZhbHNlLFxuICAgICAgICBcInRhZ3NcIjoge30sXG4gICAgICAgIFwiYXR0YWNobWVudHNcIjoge30sXG4gICAgICAgIFwibnJQYWdlc1wiOiAxNCxcbiAgICAgICAgXCJmaW5nZXJwcmludFwiOiBcIjM5YjczMGI2ZTlkMjgxYjBlYWU5MWIyYzJjMjliODQyXCIsXG4gICAgICAgIFwiYWRkZWRcIjogXCIyMDE5LTA2LTI5VDE2OjUyOjM2LjMzOVpcIixcbiAgICAgICAgXCJmaWxlbmFtZVwiOiBcIjEySmk5SkRjUm4tYXZhaWxhYmlsaXR5LnBkZlwiLFxuICAgICAgICBcInV1aWRcIjogXCJ6MjAxOS0wNy0wN1QxNjo1Nzo1Mi43MjFaKzAwMDAwMi0yMDE1Njc3NjI3NjJcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcImF2YWlsYWJpbGl0eS5wZGZcIixcbiAgICAgICAgXCJoYXNoY29kZVwiOiB7XG4gICAgICAgICAgICBcImVuY1wiOiBcImJhc2U1OGNoZWNrXCIsXG4gICAgICAgICAgICBcImFsZ1wiOiBcImtlY2NhazI1NlwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiMTJKaTlKRGNSblpUMjdqZWNrcjRIdXNZWTI5UVZ3ajRXdjJKNmlZYzVZWGp0em4zWkpUXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTktMDctMDdUMTY6NTc6NTIuNzIwWlwiLFxuICAgICAgICBcIm5yQ29tbWVudHNcIjogNixcbiAgICAgICAgXCJuck5vdGVzXCI6IDAsXG4gICAgICAgIFwibnJGbGFzaGNhcmRzXCI6IDAsXG4gICAgICAgIFwibnJUZXh0SGlnaGxpZ2h0c1wiOiAxLFxuICAgICAgICBcIm5yQXJlYUhpZ2hsaWdodHNcIjogMCxcbiAgICAgICAgXCJuckFubm90YXRpb25zXCI6IDdcbiAgICB9LFxuICAgIFwicGFnZU1ldGFzXCI6IHtcbiAgICAgICAgXCIxXCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiMTI2ajY2RmdjZlVuYXJ4Nnd0OXhcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTI2ajY2RmdjZlVuYXJ4Nnd0OXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTI2ajY2RmdjZlVuYXJ4Nnd0OXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxOS0wNi0yOVQxNjo1Mjo1OC42MjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDE5LTA2LTI5VDE2OjUyOjU4LjYyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSFRNTFwiOiBcIjxwPnRoaXMgaXMgYSBleGFtcGxlIGhpZ2hsaWdodCBhbmQgY29tbWVudCBmcm9tIHRoZSB0ZXN0IHVzZXIuPC9wPlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwicmVmXCI6IFwidGV4dC1oaWdobGlnaHQ6MTJRRFJoTWQ2QlwiLFxuICAgICAgICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0ZXN0IHRlc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZmlsZUlEXCI6IFwiMW1BZDI0Q1hpeG9OOTllc21mTExcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1ITTh0SWktVWcxUS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JkRk9TYUdMM25VY01xVkN4VTNHbVQxMUp0dFNRL21vL3Bob3RvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWVzdFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiMTJTNHJiYjQ3YlNTdE50TVhtTXhcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTJTNHJiYjQ3YlNTdE50TVhtTXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJTNHJiYjQ3YlNTdE50TVhtTXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxOS0wNi0yOVQxNzowNDo0OC44OTZaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDE5LTA2LTI5VDE3OjA0OjQ4Ljg5NlpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSFRNTFwiOiBcIjxwPmFub3RoZXIgb25lLjwvcD5cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInJlZlwiOiBcInRleHQtaGlnaGxpZ2h0OjEyUURSaE1kNkJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdCB0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2ZpbGVJRFwiOiBcIjFtQWQyNENYaXhvTjk5ZXNtZkxMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tSE04dElpLVVnMVEvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZEZPU2FHTDNuVWNNcVZDeFUzR21UMTFKdHRTUS9tby9waG90by5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3Vlc3RcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjEyRXBRQ1lqQXRlWWhtY1ZmTEYyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEyRXBRQ1lqQXRlWWhtY1ZmTEYyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjEyRXBRQ1lqQXRlWWhtY1ZmTEYyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTktMDctMDRUMDM6Mjk6MDEuNjU0WlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxOS0wNy0wNFQwMzoyOTowMS42NTRaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkhUTUxcIjogXCI8cD5hc2RmPC9wPlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwicmVmXCI6IFwidGV4dC1oaWdobGlnaHQ6MTJRRFJoTWQ2QlwiLFxuICAgICAgICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0ZXN0IHRlc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZmlsZUlEXCI6IFwiMW1BZDI0Q1hpeG9OOTllc21mTExcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1ITTh0SWktVWcxUS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JkRk9TYUdMM25VY01xVkN4VTNHbVQxMUp0dFNRL21vL3Bob3RvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWVzdFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiMTJlMjFyNzlGREJXcHdoRGdzODZcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTJlMjFyNzlGREJXcHdoRGdzODZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJlMjFyNzlGREJXcHdoRGdzODZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxOS0wNy0wNFQyMToyNjo0Ny44MjhaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDE5LTA3LTA0VDIxOjI2OjQ3LjgyOFpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSFRNTFwiOiBcIjxwPm9rLi4gdXBkYXRlcyBkb24ndCB3b3JrIGJ1dCB3aGF0IGFib3V0IG5ldyBjb21tZW50cz88L3A+XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZcIjogXCJ0ZXh0LWhpZ2hsaWdodDoxMlFEUmhNZDZCXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInRlc3QgdGVzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9maWxlSURcIjogXCIxbUFkMjRDWGl4b045OWVzbWZMTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLUhNOHRJaS1VZzFRL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FDSGkzcmRGT1NhR0wzblVjTXFWQ3hVM0dtVDExSnR0U1EvbW8vcGhvdG8uanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImd1ZXN0XCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIxMkxadW8yWjFqb3ZzVzJwaFB1NlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxMkxadW8yWjFqb3ZzVzJwaFB1NlwiLFxuICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxMkxadW8yWjFqb3ZzVzJwaFB1NlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDE5LTA3LTA0VDIxOjI3OjIwLjM1NVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTktMDctMDRUMjE6Mjc6MjAuMzU1WlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJIVE1MXCI6IFwiPHA+YW5vdGhlciB0ZXN0LjwvcD5cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInJlZlwiOiBcInRleHQtaGlnaGxpZ2h0OjEyUURSaE1kNkJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdCB0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2ZpbGVJRFwiOiBcIjFtQWQyNENYaXhvTjk5ZXNtZkxMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tSE04dElpLVVnMVEvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZEZPU2FHTDNuVWNNcVZDeFUzR21UMTFKdHRTUS9tby9waG90by5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3Vlc3RcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjEyUDVtcUE0WWUzb2ZUeU1odW01XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEyUDVtcUE0WWUzb2ZUeU1odW01XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjEyUDVtcUE0WWUzb2ZUeU1odW01XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTktMDctMDRUMjE6MjY6MTIuMjU4WlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxOS0wNy0wN1QxNjo1Nzo1Mi42NzJaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkhUTUxcIjogXCI8cD5ra2tra2tkZGRkZGRkYWFhIHRocmVlPC9wPlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwicmVmXCI6IFwidGV4dC1oaWdobGlnaHQ6MTJRRFJoTWQ2QlwiLFxuICAgICAgICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0ZXN0IHRlc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZmlsZUlEXCI6IFwiMW1BZDI0Q1hpeG9OOTllc21mTExcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1ITTh0SWktVWcxUS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JkRk9TYUdMM25VY01xVkN4VTNHbVQxMUp0dFNRL21vL3Bob3RvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWVzdFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHtcbiAgICAgICAgICAgICAgICBcIjEyUURSaE1kNkJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTJRRFJoTWQ2QlwiLFxuICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxMlFEUmhNZDZCXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTktMDYtMjlUMTY6NTI6NDYuMjQ5WlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxOS0wNi0yOVQxNjo1Mjo0Ni4yNDlaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVjdHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogOTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMzY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMzk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDM3OSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxNVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRTZWxlY3Rpb25zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiSGlnaGx5IGF2YWlsYWJsZSBjbG91ZCBzdG9yYWdlIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA5NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMzY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDI2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMzc5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDE2MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJpcyBvZnRlbiBpbXBsZW1lbnRlZCB3aXRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDI2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMzY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDM5NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMzc5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDEzNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRFWFRcIjogXCJIaWdobHkgYXZhaWxhYmxlIGNsb3VkIHN0b3JhZ2UgaXMgb2Z0ZW4gaW1wbGVtZW50ZWQgd2l0aFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInRlc3QgdGVzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9maWxlSURcIjogXCIxbUFkMjRDWGl4b045OWVzbWZMTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLUhNOHRJaS1VZzFRL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FDSGkzcmRGT1NhR0wzblVjTXFWQ3hVM0dtVDExSnR0U1EvbW8vcGhvdG8uanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImd1ZXN0XCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjJcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiAyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiM1wiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCI0XCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogNFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjVcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiA1XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiNlwiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCI3XCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogN1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjhcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiA4XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiOVwiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIxMFwiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDEwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTFcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiAxMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjEyXCI6IHtcbiAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHt9LFxuICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJudW1cIjogMTJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIxM1wiOiB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICBcInRleHRIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwic2NyZWVuc2hvdHNcIjoge30sXG4gICAgICAgICAgICBcInRodW1ibmFpbHNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDEzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTRcIjoge1xuICAgICAgICAgICAgXCJwYWdlbWFya3NcIjoge30sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgXCJjb21tZW50c1wiOiB7fSxcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0c1wiOiB7fSxcbiAgICAgICAgICAgIFwiYXJlYUhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9LFxuICAgICAgICAgICAgXCJyZWFkaW5nUHJvZ3Jlc3NcIjoge30sXG4gICAgICAgICAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm51bVwiOiAxNFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuIl19