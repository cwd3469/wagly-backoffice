import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import StoreDeduted from '@components/StoreSettlement/StoreDeduted';
import StoreCharging from '@components/StoreSettlement/StoreCharging';
import StoreStatement from '@components/StoreSettlement/StoreStatement';
import Layout from '@components/Common/Layout';
interface MatchParams {
  postId: string;
}

const StoreSettlement: React.SFC<RouteComponentProps<MatchParams>> = ({ match }): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/deducted`} component={StoreDeduted} />
        <Route exact path={`${match.url}/charging`} component={StoreCharging} />
        <Route exact path={`${match.url}/statement`} component={StoreStatement} />
      </Switch>
    </Layout>
  );
};

export default StoreSettlement;
