import React from 'react';
import { Link } from 'react-router-dom';
import OrderHistoryItem from './OrderHistoryItem';

export default function OrderHistory({
  orders = [], // 주문내역 리스트에 표시될 값
  onRemoveOrderItem = () => {}, // 주문내역을 삭제할때 호출되는 함수
}) {
  return orders.length > 0 ? (
    // 주문내역이 있는 경우
    <div className="order-history">
      <table className="order-history__table">
        <tr>
          <th>Order No.</th>
          <th>Date</th>
          <th>Product</th>
          <th>Total</th>
          <th>Cancel</th>
        </tr>
        {orders.map(order => (
          <OrderHistoryItem
            key={order.id}
            {...order}
            onRemoveOrderItem={onRemoveOrderItem}
          />
        ))}
      </table>
    </div>
  ) : (
    // 주문내역이 없는 경우
    <div className="order-history-noitem">
      <p>There is no order history.</p>
      <Link to="/" className="button">
        Continue Browsing
      </Link>
    </div>
  );
}
