import React from 'react';

import NavBarMainContainer from '../containers/NavBarMainContainer';

import BottomListContainer from '../containers/BottomListContainer';
import { BottomListProvider } from '../contexts/BottomListContext';
import MainLayout from '../components/MainLayout';

export default function BottomPage() {
  return (
    <BottomListProvider>
      <NavBarMainContainer />
      <MainLayout>
        <BottomListContainer />
      </MainLayout>
    </BottomListProvider>
  );
}
