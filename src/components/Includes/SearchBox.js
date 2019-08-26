import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setSearchContact } from '../../actions/search';

const SearchBox = ({ setSearchContact }) => (
  <Fragment>
    <h3>Contacts</h3>

    <div className='uk-margin'>
      <form className='uk-search uk-search-default uk-search-medium'>
        <span data-uk-search-icon />
        <input
          className='uk-search-input'
          type='search'
          placeholder='Search Contacts...'
          onChange={e => setSearchContact(e.target.value)}
        />
      </form>
    </div>
  </Fragment>
);

const mapDispatchToProps = (dispatch, props) => ({
  setSearchContact: searchTerm => dispatch(setSearchContact(searchTerm))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBox);
