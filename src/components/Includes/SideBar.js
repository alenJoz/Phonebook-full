import React from 'react';
import AlphaList from './AlphaList';
import ContactList from './ContactList';
import SearchBox from './SearchBox';

const SideBar = () => (
  <aside className='tm-sidebar-left uk-visible@l'>
    <div className='fixed-serch'>
      <SearchBox />
    </div>
    <AlphaList />

    <ContactList />
  </aside>
);

export default SideBar;
