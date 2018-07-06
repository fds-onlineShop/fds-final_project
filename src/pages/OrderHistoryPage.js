import React from 'react';
import OrderHistoryContainer from '../containers/OrderHistoryContainer';
import { OrderHistoryProvider } from '../contexts/OrderHistoryContext';
import NavBarMainContainer from '../containers/NavBarMainContainer';
import MainLayout from '../components/MainLayout';

export default class OrderHistoryPage extends React.Component {
  static defaultProps = {
    title: 'ORDER HISTORY',
  };
  render() {
    return (
      <React.Fragment>
        <NavBarMainContainer />
        <MainLayout>
          <OrderHistoryProvider>
            <h2 className="member__heading">{this.props.title}</h2>
            <OrderHistoryContainer />
          </OrderHistoryProvider>
        </MainLayout>
      </React.Fragment>
    );
  }
}
