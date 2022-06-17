import React from 'react';
import PostNotice from '@components/Post/PostNotice';
import PostFaq from '@components/Post/PostFaq';
import PostEvent from '@components/Post/PostEvent';
import { Route, RouteComponentProps, Switch } from 'react-router';
import Layout from '@components/Common/Layout';
interface MatchParams {
  postId: string;
}

const Post: React.SFC<RouteComponentProps<MatchParams>> = ({ match }): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/notice`} component={PostNotice} />
        <Route exact path={`${match.url}/faq`} component={PostFaq} />
        <Route exact path={`${match.url}/event`} component={PostEvent} />
      </Switch>
    </Layout>
  );
};

export default Post;
