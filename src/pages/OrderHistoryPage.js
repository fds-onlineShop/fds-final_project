import React from 'react';
import OrderHistoryContainer from '../containers/OrderHistoryContainer';
import { OrderHistoryProvider } from '../contexts/OrderHistoryContext';
import NavBar from '../components/NavBar';
import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default class OrderHistoryPage extends React.Component {
  static defaultProps = {
    title: 'ORDER HISTORY',
  };
  render() {
    return (
      <React.Fragment>
        <NavBarContainer />
        <MainLayout>
          <OrderHistoryProvider>
            <h2>{this.props.title}</h2>
            <OrderHistoryContainer />
          </OrderHistoryProvider>
        </MainLayout>
      </React.Fragment>
    );
  }
}
