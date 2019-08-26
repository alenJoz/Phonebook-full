import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const Header = props => (
  <Fragment>
    <header data-uk-sticky='sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky'>
      <nav className='uk-navbar-container' data-uk-navbar>
        <div className='uk-navbar-item'>
          <a
            className='uk-navbar-toggle uk-hidden@l'
            data-uk-toggle='target: #offcanvas-nav'
            data-uk-navbar-toggle-icon
            href='#offcanvas-nav'
          >
            &nbsp;
          </a>
        </div>
        <div className='uk-navbar-center'>
          <Link className='uk-navbar-item uk-logo' to='/'>
            React Phonebook
          </Link>
        </div>
        <div className='uk-navbar-right'>
          <ul className='uk-navbar-nav'>
            <li>
              <Link to='#'>
                <span className='uk-visible@s uk-margin-small-right'>
                  {props.auth.name ? 'Hello ' + props.auth.name : ''}
                </span>
                <div data-uk-navbar-toggle-icon className='uk-hidden@s' />
              </Link>
              <div className='uk-navbar-dropdown'>
                <ul className='uk-nav uk-navbar-dropdown-nav'>
                  <li>
                    <Link to='/login' onClick={props.startLogout}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div
      className='uk-sticky-placeholder'
      style={{ height: '80px', margin: '0px' }}
    />
  </Fragment>
);

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch, props) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
