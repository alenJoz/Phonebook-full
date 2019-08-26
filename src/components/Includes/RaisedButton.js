import React from 'react';
import { Link } from 'react-router-dom';

const RaisedButton = () => (
  <div className='uk-position-bottom-right'>
    <div data-uk-sticky='bottom: true'>
      <div className='uk-card uk-card-secondary uk-card-body'>
        <Link
          to='/add'
          className='uk-icon-link'
          data-uk-icon='icon: plus; ratio: 2'
        />
      </div>
    </div>
  </div>
);

export default RaisedButton;
