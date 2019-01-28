import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';
import Types from 'Types';
import { actionSetAuthToken } from '../state/actions';
import { TOktaAuth } from '../types/okta.d';
import SignupView from '../views/SignupView';

class SignupContainer extends Component {
  private oktaAuth: TOktaAuth;

  constructor(props: any) {
    super(props);
    this.oktaAuth = new OktaAuth({ url: props.baseUrl });
  }

  public render() {
    return <SignupView />;
  }

  private handleSubmit = async (props: any) => {
    try {
      const response = await this.oktaAuth.signIn({
        password: props.password,
        username: props.email,
      });
      props.setAuthToken(response.sessionToken);
    } catch (err) {
      console.log('Found an error', err);
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => ({
  setAuthToken: (token: string) => dispatch(actionSetAuthToken(token)),
});

export default connect(null, mapDispatchToProps)(withAuth(SignupContainer));
