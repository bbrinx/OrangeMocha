import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './state/config';

import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';

import './App.scss';

import { ImplicitCallback, Security } from '@okta/okta-react';
import config from './app.config';

class App extends Component {
  public render() {
    // This is only used to show us the store state on every dispatch
    const store = configureStore();
    const initial = store.getState();
    console.log('Initial: ', initial);
    let changeCounter = 0;
    store.subscribe(() => {
      changeCounter++;
      console.log(`State ${changeCounter}: `, store.getState());
    });
    return (
      <Provider store={store}>
        <Router>
          <Security issuer={config.issuer}
            client_id={config.client_id}
            redirect_uri={config.redirect_uri} >
            <div className={process.env.CLIENT_ID}>
              <Route path='/' exact component={HomeContainer} />
              <Route path='/signup/' exact component={SignupContainer} />
              <Route path='/login/' exact component={LoginContainer} />
              <Route path='/implicit/callback' component={ImplicitCallback} />
            </div>
          </Security>
        </Router>
      </Provider>
    );
  }
}

export default App;
