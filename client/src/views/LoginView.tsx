import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Login extends Component {
  public render() {
    return (
      <div className='main'>
        <div className='intro'>
          <h1>Test 1</h1>
          <p>Orange Mocha is a Social Location App that allows to share your favorite locations, <br />
            restaurants and spots with your friends</p>
        </div>
        <div className='callToAction'>
          <Link to='/signup/'>Sign Up</Link>
          <p>or</p>
          <Link to='/login/'>Log In</Link>
        </div>
      </div>
    );
  }
}

export default Login;
