/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from 'react-router-dom';

import Navbar from 'components/navbar';
import Main from 'routes/main';
import Static from 'routes/static';
import { MAIN, ROOT, STATIC } from 'constants/routes';

import './App.scss';

const redirectToMain = () => <Redirect to={MAIN} />;

const MainApp = () => {
  const { pathname } = useLocation();

  return (
    <Router>
      <div className="app">
        <Navbar showButtons={pathname !== STATIC} />
        <Switch>
          <Route exact path={MAIN} component={Main} />
          <Route path={`${STATIC}`}>
            <Static />
          </Route>
          {/* <Route exact path={ROOT} component={Landing} /> */}
          <Route exact path={ROOT} render={redirectToMain} />
        </Switch>
      </div>
    </Router>
  );
};

export default MainApp;
