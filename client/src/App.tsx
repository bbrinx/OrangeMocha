import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';

import './App.scss';

class App extends Component {
  public render() {
    return(
      <Router>
        <div>
          <Route path='/' exact component={HomeContainer} />
          <Route path='/signup/' exact component={SignupContainer} />
          <Route path='/login/' exact component={LoginContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
