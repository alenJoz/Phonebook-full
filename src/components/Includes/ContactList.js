import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '../../images/avatar.jpg';
import { sortContacts, searchContacts } from '../../selectors/contacts';

let temp = null;
const renderTitle = firstChar => {
  if (firstChar !== temp) {
    temp = firstChar;
    return (
      <div className='uk-margin'>
        <a href={`#${firstChar}`} id={firstChar} className='uk-nav-header'>
          {firstChar}
        </a>
      </div>
    );
  }
};

const ContactList = ({ contacts }) => (
  <ul className='uk-nav uk-nav-default tm-nav  uk-list-divider'>
    {contacts.map(contact => (
      <Fragment key={contact.id}>
        {renderTitle(contact.name.charAt(0).toLowerCase())}

        <li>
          <Link to={`/contact/${contact.id}`}>
            <div className='uk-width-auto'>
              <img
                className='uk-border-circle'
                width='40'
                height='40'
                alt={contact.name}
                src={Avatar}
              />
              {contact.name}
            </div>
          </Link>
        </li>
      </Fragment>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  contacts: sortContacts(
    searchContacts(state.contacts, state.search.contactSearchTerm)
  )
});

export default connect(mapStateToProps)(ContactList);
