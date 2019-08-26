import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { startLogin } from '../../actions/auth';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required')
});

export const LoginForm = props => (
  <Formik
    initialValues={{
      email: '',
      password: ''
    }}
    validationSchema={LoginSchema}
    onSubmit={values => {
      // same shape as initial values
      props.startLogin(values);
    }}
  >
    {({ errors, touched }) => (
      <Form className='uk-form-stacked '>
        <div className='uk-margin'>
          <label className='uk-form-label' htmlFor='form-stacked-text'>
            Email
          </label>
          <div className='uk-form-controls'>
            <Field
              className={
                errors.email
                  ? 'uk-input uk-form-large uk-form-danger'
                  : 'uk-input uk-form-large '
              }
              name='email'
              type='email'
              placeholder='Enter Email...'
            />
            {errors.email && touched.email ? (
              <div className='uk-text-danger'>{errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className='uk-margin'>
          <label className='uk-form-label' htmlFor='form-stacked-text'>
            Password
          </label>
          <div className='uk-form-controls'>
            <Field
              className={
                errors.password
                  ? 'uk-input uk-form-large uk-form-danger'
                  : 'uk-input uk-form-large '
              }
              name='password'
              type='password'
              placeholder='Enter Password...'
            />
            {errors.password && touched.password ? (
              <div className='uk-text-danger'>{errors.password}</div>
            ) : null}
          </div>
        </div>

        <div className='uk-margin'>
          <button
            className='uk-button uk-button-secondary uk-width-1-1  uk-margin-top'
            type='submit'
          >
            Login
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

const mapDispatchToProps = (dispatch, props) => ({
  startLogin: payload => dispatch(startLogin(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
