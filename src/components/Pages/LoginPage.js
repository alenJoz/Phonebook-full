import React, { Fragment } from 'react';
import Header from '../Includes/Header';
import LoginForm from '../Login/LoginForm';

const LoginPage = props => (
  <Fragment>
    <Header />

    <div className='tm-main uk-section uk-section-default'>
      <div className='uk-container uk-container-small'>
        <div className='tm-sidebar-right'>
          <div data-uk-grid>
            <div className='uk-width-1-1'>
              <div className='uk-card uk-card-default'>
                <div className='uk-card-header'>
                  <div className='uk-grid-small uk-flex-middle' data-uk-grid>
                    <div className='uk-width-expand'>
                      <h2 className='uk-margin-remove-bottom uk-text-center'>
                        Login
                      </h2>
                    </div>
                  </div>
                </div>
                <div className='uk-card-body'>
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default LoginPage;
