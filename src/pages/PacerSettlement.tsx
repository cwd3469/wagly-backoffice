import React from 'react';
import PacerAccumulation from '@components/PacerSettlement/PacerAccumulation';
import PacerWithdrawal from '@components/PacerSettlement/PacerWithdrawal';
import { Route, RouteComponentProps, Switch } from 'react-router';
import Layout from '@components/Common/Layout';

interface MatchParams {
  postId: string;
}

const PacerSettlement: React.SFC<RouteComponentProps<MatchParams>> = ({ match }): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/accumulation`} component={PacerAccumulation} />
        <Route exact path={`${match.url}/withdrawal`} component={PacerWithdrawal} />
      </Switch>
    </Layout>
  );
};

export default PacerSettlement;
