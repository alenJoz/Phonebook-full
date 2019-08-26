import React from 'react';
import Spinner from './Spinner';

const Loading = props => {
  if (props.error) {
    return (
      <div className='uk-flex uk-flex-center uk-flex-middle full-height'>
        Error!
        <button className='uk-button uk-button-danger' onClick={props.retry}>
          Retry
        </button>
      </div>
    );
  } else if (props.timedOut) {
    return (
      <div className='uk-flex uk-flex-center uk-flex-middle full-height'>
        Taking a long time...
        <button className='uk-button uk-button-danger' onClick={props.retry}>
          Retry
        </button>
      </div>
    );
  } else if (props.pastDelay) {
    return (
      <div className='uk-overlay uk-position-cover uk-overlay-custom'>
        <Spinner />
      </div>
    );
  } else {
    return null;
  }
};


export default Loading;