import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';

import BottomListContainer from '../containers/BottomListContainer';
import { BottomListProvider } from '../contexts/BottomListContext';
import MainLayout from '../components/MainLayout';

export default function BottomPage() {
  return (
    <BottomListProvider>
      <NavBarContainer />
      <MainLayout>
        <BottomListContainer />
      </MainLayout>
    </BottomListProvider>
  );
}
