import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';

import CoatListContainer from '../containers/CoatListContainer';
import { CoatListProvider } from '../contexts/CoatListContext';
import MainLayout from '../components/MainLayout';

export default function CoatPage() {
  return (
    <CoatListProvider>
      <NavBarContainer />
      <MainLayout>
        <CoatListContainer />
      </MainLayout>
    </CoatListProvider>
  );
}
