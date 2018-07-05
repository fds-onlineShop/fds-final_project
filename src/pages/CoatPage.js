import React from 'react';

import NavBarMainContainer from '../containers/NavBarMainContainer';

import CoatListContainer from '../containers/CoatListContainer';
import { CoatListProvider } from '../contexts/CoatListContext';
import MainLayout from '../components/MainLayout';

export default function CoatPage() {
  return (
    <CoatListProvider>
      <NavBarMainContainer />
      <MainLayout>
        <CoatListContainer />
      </MainLayout>
    </CoatListProvider>
  );
}
