import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import requireAuth from '../Common/requireAuth';
import { startSetContact } from '../../actions/contact';

export class ContactDetails extends Component {
  componentDidMount() {
    this.props.startSetContact(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.startSetContact(this.props.match.params.id);
    }
  }

  render() {
    return (
      <div className='tm-main uk-section uk-section-default'>
        <div className='uk-container uk-container-small'>
          <div className='tm-sidebar-right'>
            <div data-uk-grid>
              <div className='uk-width-1-1'>
                <div className='uk-card uk-card-default'>
                  <div className='uk-card-header'>
                    <div className='uk-grid-small uk-flex-middle' data-uk-grid>
                      <div className='uk-width-auto'>
                        <img
                          className='uk-border-circle'
                          width='40'
                          height='40'
                          alt={this.props.contact.name}
                          src={this.props.contact.profilePic}
                        />
                      </div>
                      <div className='uk-width-expand'>
                        <h3 className='uk-card-title uk-margin-remove-bottom'>
                          {this.props.contact.name}
                        </h3>
                        <p className='uk-text-meta uk-margin-remove-top'>
                          <time dateTime='2016-04-01T19:00'>April 24 2019</time>
                        </p>
                      </div>
                      <div className='position-right'>
                        <Link
                          to={'/edit/' + this.props.contact.id}
                          data-uk-icon='icon: pencil'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='uk-card-body'>
                    <div className='uk-margin'>
                      <h4>Phone Numbers</h4>
                      <ul className='uk-list uk-list-large uk-list-divider'>
                        {this.props.contact.phoneNumbers &&
                          this.props.contact.phoneNumbers.map(
                            (phoneNumber, index) => (
                              <li key={index}>
                                <span data-uk-icon='icon: receiver' />{' '}
                                {phoneNumber}
                              </li>
                            )
                          )}
                      </ul>
                    </div>

                    <div className='uk-margin'>
                      <h4>Emails</h4>
                      <ul className='uk-list uk-list-large uk-list-divider'>
                        {this.props.contact.emails &&
                          this.props.contact.emails.map((email, index) => (
                            <li key={index}>
                              <span data-uk-icon='icon: mail' /> {email}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact
});

const mapDispatchToProps = (dispatch, props) => ({
  startSetContact: id => dispatch(startSetContact(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(requireAuth(ContactDetails)));
