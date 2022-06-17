import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import Main from './Mian';
import Sign from './Sign';
import User from './User';
import Notice from './Notice';
import Dispatch from './Dispatch';
import PacerSettlement from './PacerSettlement';
import StoreSettlement from './StoreSettlement';
import Post from './Post';
import Security from './Security';
import NotFound from './NotFound';
import InterlockedPage from './Interlocked';
import { useAppSelector } from '@store/hooks';
import Pmodal from '@components/Common/Pmodal';

function App(): JSX.Element {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/interlock" component={InterlockedPage} />
        <Route path="/user" component={User} />
        <Route path="/signin" component={Sign} />
        <Route path="/notice" component={Notice} />
        <Route path="/dispatch" component={Dispatch} />
        <Route path="/settlement/pacer" component={PacerSettlement} />
        <Route path="/settlement/store" component={StoreSettlement} />
        <Route path="/security" component={Security} />
        <Route path="/Post" component={Post} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
