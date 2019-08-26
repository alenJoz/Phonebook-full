import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../Contact/ContactForm';
import DashboardLayoutHOC from './DashboardLayoutHOC';
import { startAddContact } from '../../actions/contacts';

const AddContactPage = props => (
  <div className='tm-main uk-section uk-section-default'>
    <div className='uk-container uk-container-small'>
      <div className='tm-sidebar-right'>
        <div data-uk-grid>
          <div className='uk-width-1-1'>
            <div className='uk-card uk-card-default'>
              <div className='uk-card-header'>
                <div className='uk-grid-small uk-flex-middle' data-uk-grid>
                  <div className='uk-width-expand'>
                    <h3 className='uk-card-title uk-margin-remove-bottom'>
                      Add New Contact
                    </h3>
                  </div>
                </div>
              </div>
              <div className='uk-card-body'>
                <ContactForm startAddContact={props.startAddContact} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch, props) => ({
  startAddContact: payload => dispatch(startAddContact(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(DashboardLayoutHOC(AddContactPage, false));
