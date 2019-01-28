import { withAuth } from '@okta/okta-react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TOktaAuth } from '../types/okta.d';

interface Props {
  auth: TOktaAuth;
}

interface State {
  authenticated: boolean;
}

class HomeView extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { authenticated: false };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.login = this.login.bind(this);

    this.checkAuthentication();
  }

  public render() {
    console.log('typeof auth', this.props.auth);
    if (this.state.authenticated === true) { return <div className='main'><h1>YAY!</h1></div>; }
    return (
      <div className='main'>
        <div className='content landing'>
          <div className='intro'>
            <h1>Orange Mocha</h1>
            <p>Orange Mocha is a Social Location App that allows to share your favorite locations,
              restaurants and spots with your friends</p>
          </div>
          <div className='callToAction'>
            <button onClick={this.login}>Login</button>;
            <Link className='link' to='/signup/'>Sign Up</Link>
            <Link className='link' to='/login/'>Log In</Link>
          </div>
        </div>
      </div>
    );
  }

  private async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  private async login() {
    this.props.auth.login('/');
  }
}

export default withAuth(HomeView);
