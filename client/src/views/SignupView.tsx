import React from 'react';
import Form from '../components/SignupForm';

interface Props {
  handleSubmit: (emal: string, password: string) => any;
}

const SignupView: React.FC<Props> = (props) => {
  return (
    <div className='main'>
      <div className='content signup'>
        <div className='card left'>
          <div className='signup-form'>
            <Form handleSubmit={props.handleSubmit}/>
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
