import React from 'react';
import ContactList from './ContactList';
import SearchBox from './SearchBox';

const OffcanvasSideBar = () => (
  <div id='offcanvas-nav' data-uk-offcanvas='flip: false; overlay: false'>
    <div className='uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide'>
      <button
        className='uk-offcanvas-close uk-close'
        type='button'
        data-uk-close
      />
      <SearchBox />

      <ContactList />
    </div>
  </div>
);

export default OffcanvasSideBar;
