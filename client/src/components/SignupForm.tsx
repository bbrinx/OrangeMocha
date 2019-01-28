import { Field, Form, FormikErrors, FormikProps, withFormik } from 'formik';
import React from 'react';

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      <h1>{ message }</h1>
      <Field type='email' name='email' />
      { touched.email && errors.email && <div>{errors.email}</div> }

      <Field type='password' name='password' />
      { touched.password && errors.password && <div>{errors.password}</div> }

      <button type='submit' disabled={isSubmitting}>Submit</button>
    </Form>
  );
};

interface SignUpFormProps {
  initialEmail?: string;
  message?: string;
}

const SignUpForm = withFormik<SignUpFormProps, FormValues>({

  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || '',
      password: '',
      setAuthToken: props.setAuthToken,
    };
  },

  validate: (values: FormValues) => {
    const errors: FormikErrors<any> = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    return errors;
  },

  handleSubmit: async (props, values) => {
    //
  },
})(InnerForm);

export default SignUpForm;
