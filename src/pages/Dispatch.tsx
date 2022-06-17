import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import DispatchEmergency from '@components/Dispatch/DispatchEmergency';
import DispatchReservation from '@components/Dispatch/DispatchReservation';
import DispatchRegular from '@components/Dispatch/DispatchRegular';
import Layout from '@components/Common/Layout';
interface MatchParams {
  postId: string;
}
const Dispatch: React.SFC<RouteComponentProps<MatchParams>> = ({ match }): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/emergency`} component={DispatchEmergency} />
        <Route exact path={`${match.url}/reservation`} component={DispatchReservation} />
        <Route exact path={`${match.url}/regular`} component={DispatchRegular} />
      </Switch>
    </Layout>
  );
};
export default Dispatch;
