import React from 'react';

export default function OrderHistoryItem({
  id,
  orderName,
  orderAddress,
  orderPhone,
  orderEmail,
  orderDate,
  orderItems,
  orderPrice,
  onRemoveOrderItem,
}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{orderDate}</td>
      <td>
        <div className="order-history__table__items">
          {orderItems.map(orderItem => {
            return (
              <div className="order-history__table__item">
                <img src={orderItem.imgurl} alt={orderItem.title} />
                <p>{orderItem.title}</p>
                <p>{orderItem.price}</p>
              </div>
            );
          })}
        </div>
      </td>
      <td>${orderPrice}</td>
      <td>
        <button
          className="order-history__table__btn-remove"
          onClick={e => {
            onRemoveOrderItem(id);
          }}
        >
          CANCEL
        </button>
      </td>
    </tr>
  );
}
