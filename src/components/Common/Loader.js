import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import '../../styles/components/Loader.scss';

export const Loader = ({ showLoader }) => (
  <Fragment>
    {showLoader && (
      <div className='uk-overlay uk-position-cover uk-overlay-custo '>
        <Spinner />
      </div>
    )}
  </Fragment>
);

const mapStateToProps = (state, props) => ({
  showLoader: state.ui.showLoader
});

export default connect(mapStateToProps)(Loader);
