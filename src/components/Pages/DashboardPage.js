import React from 'react';
import DashBoard from '../DashBoard/DashBoard';
import DashboardLayoutHOC from './DashboardLayoutHOC';

const DashboardPage = () => <DashBoard />;

export default DashboardLayoutHOC(DashboardPage);
