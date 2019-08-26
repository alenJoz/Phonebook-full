import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../Contact/ContactForm';
import DashboardLayoutHOC from './DashboardLayoutHOC';
import { startEditContact } from '../../actions/contacts';

const EditContactPage = props => (
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
                      Edit Contact
                    </h3>
                  </div>
                </div>
              </div>
              <div className='uk-card-body'>
                <ContactForm
                  startAddContact={payload =>
                    props.startEditContact(props.contact.id, payload)
                  }
                  {...props.contact}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  contact: state.contact
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditContact: (id, payload) => dispatch(startEditContact(id, payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardLayoutHOC(EditContactPage, false));
