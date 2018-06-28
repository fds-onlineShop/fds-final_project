import React from 'react';

export default function OrderHistoryItem({
  id,
  orderDate,
  orderItems,
  orderPrice,
}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{orderDate}</td>
      <td>
        <div className="order-history__table__items">
          {orderItems.map((orderItem, index) => {
            return (
              <div className="order-history__table__item" key={index}>
                <img src={orderItem.imgurl} alt={orderItem.title} />
                <p>{orderItem.title}</p>
                <p>{orderItem.price}</p>
              </div>
            );
          })}
        </div>
      </td>
      <td>${orderPrice}</td>
    </tr>
  );
}
