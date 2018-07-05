import React from 'react';
import { OrderHistoryConsumer } from '../contexts/OrderHistoryContext';
import LoadingBox from '../components/LoadingBox';
import OrderHistory from '../components/OrderHistory';

export default class OrderHistoryContainer extends React.Component {
  render() {
    return (
      <OrderHistoryConsumer>
        {({ loading, orders }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <OrderHistory
              orders={orders.map(order => ({
                ...order,
              }))}
            />
          )
        }
      </OrderHistoryConsumer>
    );
  }
}
