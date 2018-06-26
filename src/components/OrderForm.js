import React from 'react';
import { Link } from 'react-router-dom';
import OrderFormItem from './OrderFormItem';
export default function OrderForm({
  name = '',
  address = '',
  phone = '',
  carts = [],
  onNameChange = name => {},
  onAddressChange = address => {},
  onPhoneChange = phone => {},
  onSubmit = () => {},
}) {
  // Order 총합계 금액 계산식
  let orderTotalPrice = 0;
  for (let i = 0; i < carts.length; i++) {
    orderTotalPrice += parseFloat(carts[i].price.replace(/\$/, ''));
  }
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
      className="orderForm"
    >
      <section className="orderForm__address">
        <h3>Shipping Address</h3>
        <div className="field">
          <div className="control">
            <input
              type="text"
              placeholder="Name"
              aria-label="name"
              required
              className="input"
              value={name}
              onChange={e => onNameChange(e.target.value)}
            />
          </div>
          <div className="control">
            <input
              type="text"
              placeholder="Address"
              aria-label="address"
              required
              className="input"
              value={address}
              onChange={e => onAddressChange(e.target.value)}
            />
          </div>
          <div className="control">
            <input
              type="text"
              placeholder="Phone"
              aria-label="phone"
              required
              className="input"
              value={phone}
              onChange={e => onPhoneChange(e.target.value)}
            />
          </div>
        </div>
      </section>
      <section className="orderForm__order">
        <h3>Shopping Bag</h3>
        <ul className="orderForm__list">
          {carts.map(cart => <OrderFormItem {...cart} />)}
        </ul>
        <div className="orderForm__total">
          Total<span className="orderForm__total_price">
            ${orderTotalPrice}
          </span>
        </div>
      </section>
      <button className="button">Payment</button>
    </form>
  );
}
