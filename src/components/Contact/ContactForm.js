import React, { Fragment } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(/^((?!script).)*$/, {
      message: 'Please enter valid name.',
      excludeEmptyString: false
    }),
  phoneNumbers: Yup.array()
    .of(
      Yup.string().matches(/^[0-9]\d{9}$/, {
        message: 'Please enter valid phone number.',
        excludeEmptyString: false
      })
    )
    .required('Must have phoneNumbers'),
  emails: Yup.array()
    .of(Yup.string().email())
    .required('Must have emails')
});

const ContactForm = props => (
  <Formik
    initialValues={{
      name: props.name || '',
      phoneNumbers: props.phoneNumbers,
      emails: props.emails
    }}
    validationSchema={ContactFormSchema}
    onSubmit={values => {
      props.startAddContact(values);
    }}
  >
    {({ values, errors, touched }) => (
      <Form className='uk-form-stacked '>
        <div className='uk-margin'>
          <label className='uk-form-label' htmlFor='form-stacked-text'>
            Name
          </label>
          <div className='uk-form-controls'>
            <Field
              className={errors.name ? 'uk-input  uk-form-danger' : 'uk-input '}
              name='name'
              type='text'
              placeholder='Enter Full Name...'
            />
            {errors.name && touched.name ? (
              <div className='uk-text-danger'>{errors.name}</div>
            ) : null}
          </div>
        </div>

        <div className='uk-margin'>
          <label className='uk-form-label' htmlFor='form-stacked-text'>
            Phone Number
          </label>
          <div className='uk-form-controls'>
            <FieldArray
              name='phoneNumbers'
              render={arrayHelpers =>
                values.phoneNumbers && values.phoneNumbers.length > 0 ? (
                  values.phoneNumbers.map((phoneNumber, index) => (
                    <div key={index}>
                      <Field
                        type='tel'
                        placeholder='Enter Phone Number...'
                        name={`phoneNumbers.${index}`}
                        className={
                          errors.phoneNumbers
                            ? 'uk-input  uk-form-danger'
                            : 'uk-input '
                        }
                      />
                      {
                        <ErrorMessage name={`phoneNumbers.${index}`}>
                          {msg => <div className='uk-text-danger'>{msg}</div>}
                        </ErrorMessage>
                      }

                      <span
                        data-uk-icon='icon: close'
                        onClick={() => arrayHelpers.remove(index)}
                      />
                      <span
                        data-uk-icon='icon: plus'
                        onClick={() => arrayHelpers.insert(index, '')}
                      />
                    </div>
                  ))
                ) : (
                  <Fragment>
                    <Field
                      type='tel'
                      placeholder='Enter Phone Number...'
                      name={'phoneNumbers.0'}
                      className={
                        errors.phoneNumbers
                          ? 'uk-input  uk-form-danger'
                          : 'uk-input '
                      }
                    />
                    {
                      <ErrorMessage name={`phoneNumbers.0`}>
                        {msg => <div className='uk-text-danger'>{msg}</div>}
                      </ErrorMessage>
                    }
                    <span
                      data-uk-icon='icon: plus'
                      onClick={() => arrayHelpers.insert(0, '')}
                    />
                  </Fragment>
                )
              }
            />
          </div>
        </div>

        <div className='uk-margin'>
          <label className='uk-form-label' htmlFor='form-stacked-text'>
            Email
          </label>
          <div className='uk-form-controls'>
            <FieldArray
              name='emails'
              render={arrayHelpers =>
                values.emails && values.emails.length > 0 ? (
                  values.emails.map((email, index) => (
                    <div key={index}>
                      <Field
                        type='tel'
                        placeholder='Enter Email...'
                        name={`emails.${index}`}
                        className={
                          errors.emails
                            ? 'uk-input  uk-form-danger'
                            : 'uk-input '
                        }
                      />
                      {
                        <ErrorMessage name={`emails.${index}`}>
                          {msg => <div className='uk-text-danger'>{msg}</div>}
                        </ErrorMessage>
                      }

                      <span
                        data-uk-icon='icon: close'
                        onClick={() => arrayHelpers.remove(index)}
                      />
                      <span
                        data-uk-icon='icon: plus'
                        onClick={() => arrayHelpers.insert(index, '')}
                      />
                    </div>
                  ))
                ) : (
                  <Fragment>
                    <Field
                      type='tel'
                      placeholder='Enter Email...'
                      name={'emails.0'}
                      className={
                        errors.emails ? 'uk-input  uk-form-danger' : 'uk-input '
                      }
                    />
                    {
                      <ErrorMessage name={`emails.0`}>
                        {msg => <div className='uk-text-danger'>{msg}</div>}
                      </ErrorMessage>
                    }
                    <span
                      data-uk-icon='icon: plus'
                      onClick={() => arrayHelpers.insert(0, '')}
                    />
                  </Fragment>
                )
              }
            />
          </div>
        </div>

        <div className='uk-margin'>
          <button className='uk-button uk-button-secondary' type='submit'>
            Save
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
