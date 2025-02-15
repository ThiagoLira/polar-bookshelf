import * as React from 'react';
import {FixedNav, FixedNavBody} from '../../../FixedNav';
import {RepoHeader} from '../../../repo_header/RepoHeader';
import {PersistenceLayerManager} from '../../../../../../web/js/datastore/PersistenceLayerManager';
import {PremiumContent2} from './PremiumContent2';
import {UserInfo} from '../../../../../../web/js/apps/repository/auth_handler/AuthHandler';
import {AccountPlan} from '../../../../../../web/js/accounts/Account';
import {RepoFooter} from "../../../repo_footer/RepoFooter";

export class PremiumScreen extends React.Component<IProps> {

    public render() {

        return (

            <FixedNav id="doc-repository">

                <header>

                    <RepoHeader persistenceLayerManager={this.props.persistenceLayerManager}/>

                </header>

                <FixedNavBody className="container-fluid">

                    <div className="row">

                        <div className="col-lg-12 w-100 pt-4">
                            <PremiumContent2 userInfo={this.props.userInfo} plan={this.props.plan}/>
                        </div>
                    </div>

                </FixedNavBody>

                <RepoFooter/>

            </FixedNav>

        );
    }

}

export interface IProps {
    readonly persistenceLayerManager: PersistenceLayerManager;
    readonly plan: AccountPlan;
    readonly userInfo?: UserInfo;
}

