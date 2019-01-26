import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class HomeView extends Component {
  public render() {
    return (
      <div className='main'>
        <div className='content landing'>
          <div className='intro'>
            <h1>Orange Mocha</h1>
            <p>Orange Mocha is a Social Location App that allows to share your favorite locations,
              restaurants and spots with your friends</p>
          </div>
          <div className='callToAction'>
            <Link className='link' to='/signup/'>Sign Up</Link>
            <Link className='link' to='/login/'>Log In</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;
