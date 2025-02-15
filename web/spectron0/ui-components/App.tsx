import * as React from 'react';
import {Tags} from 'polar-shared/src/tags/Tags';
import {NULL_FUNCTION} from "polar-shared/src/util/Functions";
import {Group} from "../../js/datastore/sharing/db/Groups";
import {ISODateTimeStrings} from "polar-shared/src/metadata/ISODateTimeStrings";
import {TasksCalculator} from "polar-spaced-repetition/src/spaced_repetition/scheduler/S2Plus/TasksCalculator";
import {Lorems} from "polar-shared/src/util/Lorems";
import {Task} from "polar-spaced-repetition-api/src/scheduler/S2Plus/S2Plus";
import {FontAwesomeIcon} from "../../js/ui/fontawesome/FontAwesomeIcon";
import {DocSidebar} from "./DocSidebar";
import {EditableText} from "./EditableText";
import {Suggestions} from "../../js/ui/feedback/Suggestions";
import {TagInputWidget} from "../../../apps/repository/js/TagInputWidget";
import {FolderContextMenus, promptForCreate} from "../../../apps/repository/js/folders/FolderContextMenus";

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
    return <div style={{backgroundColor: 'red', overflow: 'auto'}}>
        these are the folders
    </div>;
};

const Preview = () => {
    return <div style={{backgroundColor: 'orange', overflow: 'auto'}}>
        This is the preview
    </div>;
};


const Main = () => {
    return <div style={{backgroundColor: 'blue'}}>this is the right</div>;
};

export class App<P> extends React.Component<{}, IAppState> {

    constructor(props: P, context: any) {
        super(props, context);

        promptForCreate('tag', NULL_FUNCTION);

    }

    public render() {


        //
        // const root: TNode<TagNode> = {
        //     id: 0,
        //     name: 'CompSci',
        //     children: [
        //         {
        //             id: 1,
        //             name: 'Linux',
        //             children: [],
        //             value: {
        //                 tag: "/CompSci/Linux"
        //             }
        //         },
        //         {
        //             id: 2,
        //             name: 'Google',
        //             children: [
        //                 {
        //                     id: 3,
        //                     name: 'Mountain View',
        //                     children: [],
        //                     value: {
        //                         tag: "/CompSci/Google/Mountain View"
        //                     }
        //                 },
        //                 {
        //                     id: 4,
        //                     name: 'San Francisco',
        //                     children: [],
        //                     value: {
        //                         tag: "/CompSci/Google/San Francisco"
        //                     }
        //                 },
        //             ],
        //             value: {
        //                 tag: "/CompSci/Google"
        //             }
        //
        //         }
        //
        //     ],
        //     value: {
        //         tag: "/CompSci"
        //     }
        // };

        // Dialogs.confirm({title: 'hello world',
        //                  subtitle: 'Some really bad stuff is happening right now which you should probably look into.',
        //                  onConfirm: NULL_FUNCTION,
        //                  type: 'danger'});
        //
        // Dialogs.prompt({title: 'New folder: ',
        //                 onCancel: NULL_FUNCTION,
        //                 onDone: NULL_FUNCTION});

        // PreviewWarnings.createDialog(NULL_FUNCTION);

        const tags = [
            '/CompSci/Google',
            '/CompSci/Linux',
            '/CompSci/Microsoft',
            '/CompSci/Programming Languages/C++',
            '/CompSci/Programming Languages/Java',
            '/History/WWII',
            '/History/United States/WWII',
        ].map(current => Tags.create(current))
            .map(current => {
                const count = Math.floor(Math.random() * 100);
                return {...current, count};
            });

        // // const root: TNode<Tag> = TagNodes.create(...tags);
        // Dialogs.prompt({
        //                    title: "Enter the name of a new folder:",
        //                    validator: () => {
        //                        return {message: "it failed dude"};
        //                    },
        //                    onCancel: NULL_FUNCTION,
        //                    onDone: NULL_FUNCTION
        //
        //                });

        const group: Group = {
            nrMembers: 100,
            name: 'Linux',
            description: "A group about Linux, Ubuntu, Debian, and UNIX operating systems.",
            id: "101",
            visibility: 'public',
            created: ISODateTimeStrings.create()
        };

        const keyBindingHandler = (event: React.KeyboardEvent) => {

            if (event.key === 'F') {
                console.log("YUP!");
            }

        };


        const createReadingTaskReps = () => {

            const lorem = Lorems.mediumLength();

            const tasks: ReadonlyArray<Task<string>> = [
                {
                    id: "10102",
                    action: lorem,
                    created: ISODateTimeStrings.create(),
                    color: 'red',
                    mode: 'reading'
                },
                {
                    id: "10101",
                    action: "this is the first one",
                    created: ISODateTimeStrings.create(),
                    color: 'yellow',
                    mode: 'reading'
                },
                {
                    id: "10102",
                    action: "this is the second one",
                    created: ISODateTimeStrings.create(),
                    color: 'yellow',
                    mode: 'reading'
                },
            ];

            return tasks.map(task => TasksCalculator.createInitialLearningState(task));

        };

        // const createFlashcardTaskReps = async (): Promise<ReadonlyArray<TaskRep<FlashcardTaskAction>>> => {
        //
        //     const ref = Refs.create('1234', 'text-highlight');
        //
        //     const flashcard = Flashcards.createFrontBack('What is the capital of California? ', 'Sacramento', ref);
        //
        //     const docInfo = DocInfos.create('0x0001', 1);
        //     const repoAnnotation = RepoAnnotations.toRepoAnnotation(null!, flashcard, AnnotationType.FLASHCARD, docInfo);
        //     const repoAnnotations = [repoAnnotation];
        //
        //     return ReviewerTasks.createFlashcardTasks(repoAnnotations, 10);
        //
        // };
        //
        // const createFlashcardTaskReps = (): ReadonlyArray<TaskRep<FlashcardTaskAction>> => {
        //     const ref = Refs.create('1234', 'text-highlight');
        //
        //     const createFrontAndBackAction = () => {
        //         const flashcard = Flashcards.createFrontBack('What is the capital of California? ', 'Sacramento', ref);
        //         const flashcardTaskActions = FlashcardTaskActions.create(flashcard, docAnnotation);
        //         return flashcardTaskActions[0];
        //     };
        //
        //     const createClozeAction = () => {
        //         const flashcard = Flashcards.createCloze('The capital of california is {{c1::Sacramento}}.', ref);
        //         const flashcardTaskActions = FlashcardTaskActions.create(flashcard, docAnnotation);
        //         return flashcardTaskActions[0];
        //     };
        //
        //     const clozeAction = createClozeAction();
        //
        //     Preconditions.assertPresent(clozeAction, 'clozeAction');
        //
        //     const tasks: ReadonlyArray<Task<FlashcardTaskAction>> = [
        //         {
        //             id: "10102",
        //             action: clozeAction,
        //             created: ISODateTimeStrings.create(),
        //             color: 'red',
        //             mode: 'flashcard'
        //         },
        //         {
        //             id: "10102",
        //             action: createFrontAndBackAction(),
        //             created: ISODateTimeStrings.create(),
        //             color: 'red',
        //             mode: 'flashcard'
        //         }
        //     ];
        //
        //     return tasks.map(task => TasksCalculator.createInitialLearningState(task));
        //
        // };


        // const taskReps = createReadingTaskReps();
        // const taskReps = createFlashcardTaskReps();

        const MockTag = (props: any) => {
            return <div className="bg-grey100 p-1 rounded mr-1"
                        style={{
                        display: 'inline-block'
                   }}>
                {props.children}

                <span className="text-sm">
                    <FontAwesomeIcon name="fas fa-close"/>
                </span>

            </div>;
        };

        return (

            <div className="p-1">

                <TagInputWidget availableTags={[]} onChange={NULL_FUNCTION}/>

                {/*<WhatsNewModal/>*/}

                {/*<FolderContextMenu toggle={false}*/}
                {/*                   onCreateFolder={NULL_FUNCTION}>*/}
                {/*    <div>*/}
                {/*        Fake folder*/}
                {/*    </div>*/}
                {/*</FolderContextMenu>*/}

                {/*<div className="p-1">*/}

                {/*    <div className="item">*/}

                {/*        <div className="title text-xxl font-weight-bold text-grey900" style={{fontSize: '33px'}}>*/}
                {/*            Something amazing has happened in science and the community is excited.*/}
                {/*        </div>*/}

                {/*        <div className="title text-lg text-grey800">*/}
                {/*            <span className="text-primary">Martin Smith</span>, <span className="text-primary">Carson Weishaus</span>*/}
                {/*        </div>*/}

                {/*        <div className="title text-lg text-grey800 mt-1 mb-2"  style={{fontSize: '22px'}}>*/}
                {/*            This is a longer overview or abstract of the current document we're reading.*/}
                {/*        </div>*/}

                {/*        <div className="metadata" style={{fontSize: '14px'}}>*/}
                {/*            <MockTag>linux</MockTag> <MockTag>microsoft</MockTag>*/}
                {/*        </div>*/}

                {/*        <div className="metadata mt-1">*/}
                {/*            <b>Added: </b> 1 month ago <b>Updated: </b> 1 day ago*/}
                {/*        </div>*/}

                {/*    </div>*/}

                {/*</div>*/}

                {/*<AnnotationTypeSelector selected={[AnnotationType.FLASHCARD]} onSelected={selected => console.log('selected: ', selected)}/>*/}

                {/*<ColorSelectorBox/>*/}

                {/*<StartReviewButton onClick={NULL_FUNCTION}/>*/}

                {/*<div className="p-1">*/}

                {/*    <Button size='sm' color="light" className="border">*/}
                {/*        <i className="fas fa-gem"/> Upgrade to bronze to unlock related tags*/}
                {/*    </Button>*/}

                {/*</div>*/}

                {/*<div style={{width: '500px', height: '700px', display: 'flex'}}*/}
                {/*     className="border">*/}

                {/*    <Flashcard front={<div>front</div>}*/}
                {/*               back={<div>back</div>}*/}
                {/*               answers={<div>answers</div>}/>*/}

                {/*</div>*/}

                {/*<div className="border border-dark m-1" style={{width: '450px'}}>*/}
                {/*    <DocSidebar meta={{*/}
                {/*        fingerprint: "0x01",*/}
                {/*        title: 'Bitcoin - A distributed currency system.',*/}
                {/*        description: "Some stuff about bitcoin and what it does.",*/}
                {/*        authors: [*/}
                {/*            {*/}
                {/*                displayName: "Alice Smith",*/}
                {/*            }*/}
                {/*        ],*/}
                {/*        doi: '12345'*/}
                {/*    }}/>*/}
                {/*</div>*/}

                {/*this should be editable:*/}

                {/*<EditableText value="hello world" onCancel={NULL_FUNCTION} onDone={NULL_FUNCTION}/>*/}



                {/*<div className="border border-dark m-1" style={{width: '450px'}}>*/}
                {/*    <DocSidebar fingerprint="0x01"*/}
                {/*                title="Bitcoin: A Peer-to-Peer Electronic Cash System"*/}
                {/*                subtitle="A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution."*/}
                {/*                authors={authors}*/}
                {/*                updated={ISODateTimeStrings.create()}*/}
                {/*                url='http://www.example.com/this/is/a/long-path/00000000000000000000000000000000000000000000000000.pdf'*/}
                {/*                published="2017"/>*/}
                {/*</div>*/}

                {/*<PDFViewer src="foo"/>*/}

                    {/*<LoadingProgress/>*/}

                {/*<MockFolderTree/>*/}

                {/*<AccountUpgradeBarView plan='free' accountUsage={{storageInBytes: 0}}/>*/}

                {/*<div>*/}

                {/*    /!*<LargeModal isOpen={true}*!/*/}
                {/*    /!*            centered={true}*!/*/}
                {/*    /!*            minWidth="20%">*!/*/}

                {/*    /!*    <LargeModalBody>*!/*/}

                {/*    /!*        this is some modal content.*!/*/}

                {/*    /!*        <GroupSearch/>*!/*/}

                {/*    /!*        <GroupHits>*!/*/}
                {/*    /!*            <GroupHit name="Linux" description="A group about Linux" nrMembers={10} onAdd={NULL_FUNCTION}/>*!/*/}
                {/*    /!*            <GroupHit name="Microsoft" description="A group about Microsoft" nrMembers={5} onAdd={NULL_FUNCTION}/>*!/*/}
                {/*    /!*        </GroupHits>*!/*/}

                {/*    /!*    </LargeModalBody>*!/*/}

                {/*    /!*    /!*<ModalFooter>*!/*!/*/}
                {/*    /!*    /!*    <Button color="primary" onClick={() => this.onDone()}>Close</Button>*!/*!/*/}
                {/*    /!*    /!*</ModalFooter>*!/*!/*/}


                {/*    /!*</LargeModal>*!/*/}


                {/*    <GroupCard group={group}/>*/}

                {/*</div>*/}

                {/*<TreeView root={root}*/}
                {/*          />*/}

                {/*<Dock side="left"*/}
                {/*      left={<Folders/>}*/}
                {/*      right={<Dock side="left"*/}
                {/*                   left={<Preview/>}*/}
                {/*                   right={<Main/>}/>}/>*/}


            </div>

        );
    }


}

interface IAppState {

}


