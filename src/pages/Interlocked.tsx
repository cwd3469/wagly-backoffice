import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import Interlocked from '@components/Interlocked';
import InterlockedEdit from '@components/Interlocked/modules/InterlockedEdit';
import Layout from '@components/Common/Layout';

interface MatchParams {
  postId: string;
}
const InterlockedPage: React.SFC<RouteComponentProps<MatchParams>> = ({ match }): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}`} component={Interlocked} />
        <Route exact path={`${match.url}/edit`} component={InterlockedEdit} />
      </Switch>
    </Layout>
  );
};
export default InterlockedPage;
