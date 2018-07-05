import React from 'react';
import { Link } from 'react-router-dom';
import OrderHistoryItem from './OrderHistoryItem';

export default function OrderHistory({
  orders = [], // 주문내역 리스트에 표시될 값
}) {
  return orders.length > 0 ? (
    // 주문내역이 있는 경우
    <div className="order-history">
      <table className="order-history__table table">
        <thead>
          <tr>
            <th>Order No.</th>
            <th>Date</th>
            <th>Product</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => <OrderHistoryItem key={order.id} {...order} />)}
        </tbody>
      </table>
    </div>
  ) : (
    // 주문내역이 없는 경우
    <div className="order-history-noitem">
      <p className="order-history-noitem__info">There is no order history.</p>
      <Link to="/main" className="button is-black">
        Continue Browsing
      </Link>
    </div>
  );
}
