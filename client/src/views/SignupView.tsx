import React from 'react';
import Form from '../components/SignupForm';

const SignupView: React.SFC<{}> = () => {
  return (
    <div className='main'>
      <div className='content signup'>
        <div className='card left'>
          <div className='signup-form'>
            <Form message='Sign Up' />
          </div>
        </div>
        <div className='card right'>
          <h2>Signup</h2>
        </div>
      </div>
    </div>
  );
};

export default SignupView;
