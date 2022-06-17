import React from 'react';
import SecurityUserStatus from '@components/Security/SecurityUserStatus';
import SecurityPermission from '@components/Security/SecurityPermission';
import SecurityUserExist from '@components/Security/SecurityUserExist';
import SecurityEdit from '@components/Security/SecurityUserStatus/modules/SecurityEdit';
import SecurityEditPermission from '@components/Security/SecurityPermission/modules/SecurityEdit';
import SecurityLoginHistory from '@components/Security/SecurityLoginHistory';
import SecurityHistory from '@components/Security/SecurityHistory';
import Layout from '@components/Common/Layout';
import { Route, RouteComponentProps, Switch } from 'react-router';

interface MatchParams {
  postId: string;
}

const Security: React.SFC<RouteComponentProps<MatchParams>> = ({ match }): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/user`} component={SecurityUserStatus} />
        <Route exact path={`${match.url}/user/edit`} component={SecurityEdit} />
        <Route exact path={`${match.url}/permission`} component={SecurityPermission} />
        <Route exact path={`${match.url}/permission/edit`} component={SecurityEditPermission} />
        <Route exact path={`${match.url}/exist`} component={SecurityUserExist} />
        <Route exact path={`${match.url}/log`} component={SecurityLoginHistory} />
        <Route exact path={`${match.url}/history`} component={SecurityHistory} />
      </Switch>
    </Layout>
  );
};

export default Security;
