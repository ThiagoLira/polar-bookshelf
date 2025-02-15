import * as React from 'react';
import {RepoDocMetaLoader} from '../RepoDocMetaLoader';
import {RepoDocMetaManager} from '../RepoDocMetaManager';
import {IDocInfo} from 'polar-shared/src/metadata/IDocInfo';
import {IEventDispatcher} from '../../../../web/js/reactor/SimpleReactor';
import {PersistenceLayerManager} from '../../../../web/js/datastore/PersistenceLayerManager';
import AnnotationRepoTable from './AnnotationRepoTable';
import {RepoAnnotationMetaView} from './RepoAnnotationMetaView';
import {UpdateFiltersCallback} from './AnnotationRepoFiltersHandler';
import {Dock} from '../../../../web/js/ui/dock/Dock';
import {NULL_FUNCTION} from "polar-shared/src/util/Functions";
import {Devices} from "../../../../web/js/util/Devices";
import {IDocAnnotation} from "../../../../web/js/annotation_sidebar/DocAnnotation";

export default class PreviewAndMainViewDock extends React.Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);

        this.state = {
        };

    }

    public render() {

        const onSelected = (repoAnnotation: IDocAnnotation) => this.onRepoAnnotationSelected(repoAnnotation);

        if (Devices.get() === 'phone') {
            return <PreviewAndMainViewDock.Phone {...this.props}
                                                 repoAnnotation={this.state.repoAnnotation}
                                                 onSelected={onSelected}/>
        } else {
            return <PreviewAndMainViewDock.Default {...this.props}
                                                   repoAnnotation={this.state.repoAnnotation}
                                                   onSelected={onSelected}/>
        }

    }

    private onRepoAnnotationSelected(repoAnnotation: IDocAnnotation) {
        // console.log("A repo annotation was selected: " , repoAnnotation);

        this.setState({repoAnnotation});

    }

    public static Main = class extends PreviewAndMainViewDock {

        public render() {

            return (

                <div style={{
                        display: 'flex' ,
                        flexDirection: 'column',
                        height: '100%'
                    }}>

                    <div style={{overflowY: 'auto'}}>

                        <AnnotationRepoTable persistenceLayerManager={this.props.persistenceLayerManager}
                                             updatedDocInfoEventDispatcher={this.props.updatedDocInfoEventDispatcher}
                                             repoDocMetaManager={this.props.repoDocMetaManager}
                                             repoDocMetaLoader={this.props.repoDocMetaLoader}
                                             data={this.props.data}
                                             onSelected={this.props.onSelected || NULL_FUNCTION}/>

                    </div>

                </div>

            );
        }
    };

    public static Default = class extends PreviewAndMainViewDock {

        public render() {

            return (

                <Dock componentClassNames={{
                }}
                      left={
                          <PreviewAndMainViewDock.Main {...this.props}/>
                      }
                      right={
                          <div className="mt-2 pl-1 pr-1">
                              <RepoAnnotationMetaView persistenceLayerManager={this.props.persistenceLayerManager}
                                                      repoAnnotation={this.props.repoAnnotation}/>
                          </div>
                      }
                      side='left'
                      initialWidth={450}/>
            );
        }

    };

    public static Phone = class extends PreviewAndMainViewDock {

        public render() {

            return (

              <PreviewAndMainViewDock.Main {...this.props}/>

            );
        }

    }

}

export interface IProps {

    readonly persistenceLayerManager: PersistenceLayerManager;

    readonly updatedDocInfoEventDispatcher: IEventDispatcher<IDocInfo>;

    readonly repoDocMetaManager: RepoDocMetaManager;

    readonly repoDocMetaLoader: RepoDocMetaLoader;

    readonly updateFilters: UpdateFiltersCallback;

    readonly data: ReadonlyArray<IDocAnnotation>;

    readonly onSelected?: (repoAnnotation: IDocAnnotation) => void;

    readonly repoAnnotation?: IDocAnnotation;

}

export interface IState {

    readonly repoAnnotation?: IDocAnnotation;

}

