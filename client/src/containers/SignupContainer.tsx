import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as authActions from '../state/actions';
import { ApplicationState } from '../state/reducers';
import { TOktaAuth } from '../types/okta.d';
import SignupView from '../views/SignupView';

interface Props {
  setAuthToken: (token: string) => any;
  auth: TOktaAuth;
  sessionToken: string;
}

class SignupContainer extends Component<Props, {}> {
  private oktaAuth: TOktaAuth;

  constructor(props: Props) {
    super(props);
    this.oktaAuth = new OktaAuth({ url: props.auth._oktaAuth.options.url });
  }

  public render() {
    const {sessionToken} = this.props;
    console.log(sessionToken);
    if (sessionToken) {
      this.props.auth.redirect({ sessionToken });
      return null;
    }
    return <SignupView handleSubmit={this.handleSubmit}/>;
  }

  private handleSubmit = async (email: string, password: string) => {
    try {
      await fetch('/api/users', {
        body: JSON.stringify({ password, email }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      const response = await this.oktaAuth.signIn({username: email, password});
      await this.props.setAuthToken(response.sessionToken);
      const test = this.props.sessionToken;
      return true;
    } catch (err) {
      console.log('Found an error', err);
      return false;
    }
  }
}

const mapStateToProps = (state: ApplicationState ) => ({
  sessionToken: state.auth.sessionToken,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setAuthToken: (token: string) => dispatch(authActions.setAuthToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(SignupContainer));
