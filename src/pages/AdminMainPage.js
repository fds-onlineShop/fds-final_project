import React from 'react';

import AdminMainContainer from '../containers/AdminMainContainer';
import { AdminUrlProvider } from '../contexts/AdminUrlContext';
import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default function AdminMainPage({ match }) {
  const url = match.url;
  return (
    <AdminUrlProvider url={url}>
      <NavBarContainer />
      <MainLayout>
        <h2 className="member__heading">Administrator</h2>
        <AdminMainContainer url={url} />
      </MainLayout>
    </AdminUrlProvider>
  );
}
