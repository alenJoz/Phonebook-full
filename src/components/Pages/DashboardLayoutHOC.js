import React, { Fragment } from 'react';
import Header from '../Includes/Header';
import SideBar from '../Includes/SideBar';
import OffcanvasSideBar from '../Includes/OffcanvasSidebar';
import RaisedButton from '../Includes/RaisedButton';

const DashboardLayoutHOC = (PassedComponent, showAddButton = true) => props => (
  <Fragment>
    <Header />

    <SideBar />

    <PassedComponent {...props} />

    {showAddButton && <RaisedButton />}

    <OffcanvasSideBar />
  </Fragment>
);

export default DashboardLayoutHOC;
