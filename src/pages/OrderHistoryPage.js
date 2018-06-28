import React from 'react';
import OrderHistoryContainer from '../containers/OrderHistoryContainer';
import { OrderHistoryProvider } from '../contexts/OrderHistoryContext';

export default class OrderHistoryPage extends React.Component {
  static defaultProps = {
    title: 'ORDER HISTORY',
  };
  render() {
    return (
      <OrderHistoryProvider>
        <h2>{this.props.title}</h2>
        <OrderHistoryContainer />
      </OrderHistoryProvider>
    );
  }
}
