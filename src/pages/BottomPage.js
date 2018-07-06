import React from 'react';

import NavBarMainContainer from '../containers/NavBarMainContainer';

import BottomPreContainer from '../containers/BottomPreContainer';
import BottomListContainer from '../containers/BottomListContainer';
import { BottomListProvider } from '../contexts/BottomListContext';
import MainLayout from '../components/MainLayout';

export default function BottomPage() {
  return (
    <BottomListProvider>
      <NavBarMainContainer />
      <BottomPreContainer />
      <MainLayout>
        <BottomListContainer />
      </MainLayout>
    </BottomListProvider>
  );
}
