import React from 'react';
import ContactDetails from '../Contact/ContactDetails';
import DashboardLayoutHOC from './DashboardLayoutHOC';

const ContactDetailPage = () => <ContactDetails />;

export default DashboardLayoutHOC(ContactDetailPage);