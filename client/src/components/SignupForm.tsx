import { Field, Form, FormikErrors, FormikProps, withFormik } from 'formik';
import React from 'react';

interface IFormValues {
  email: string;
  password: string;
}

interface IOtherProps {
  message: string;
}

const InnerForm = (props: IOtherProps & FormikProps<IFormValues>) => {
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

interface IMyFormProps {
  initialEmail?: string;
  message: string;
}

interface IMyFormProps {
  initialEmail?: string;
  message: string;
}

const MyForm = withFormik<IMyFormProps, IFormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || '',
      password: '',
    };
  },

  validate: (values: IFormValues) => {
    const errors: FormikErrors<any> = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    return errors;
  },

  handleSubmit: (values) => {
    console.log('values', values);
  },
})(InnerForm);

export default MyForm;
