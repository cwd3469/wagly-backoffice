import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import NoticeEmployment from '@components/Notice/NoticeEmployment';
import NoticeEmergency from '@components/Notice/NoticeEmergency';
import NoticeReservation from '@components/Notice/NoticeReservation';
import Layout from '@components/Common/Layout';

interface MatchParams {
  postId: string;
}
const Notice: React.SFC<RouteComponentProps<MatchParams>> = ({ match }): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/employment`} component={NoticeEmployment} />
        <Route exact path={`${match.url}/emergency`} component={NoticeEmergency} />
        <Route exact path={`${match.url}/reservation`} component={NoticeReservation} />
      </Switch>
    </Layout>
  );
};
export default Notice;
