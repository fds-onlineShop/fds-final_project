import React from 'react';
import OrderFormItem from './OrderFormItem';
export default function OrderForm({
  orderAddress = '', // 배송지 주소 입력 필드에 표시될 값
  orderPhone = '', // 배송지 핸드폰번호 입력 필드에 표시될 값
  orderEmail = '', // 배송지 이메일 입력 필드에 표시될 값
  orderItems = [], // 주문할 물품 리스트에 표시될 값
  onAddressChange = orderAddress => {}, // 배송지 주소 입력 필드에 입력이 일어날 때 호출되는 함수
  onPhoneChange = orderPhone => {}, // 배송지 핸드폰번호 입력 필드에 입력이 일어날 때 호출되는 함수
  onEmailChange = orderEmail => {}, // 배송지 이메일 입력 필드에 입력이 일어날 때 호출되는 함수
  onSubmit = () => {}, // 폼 전송이 일어날 때 호출되는 함수
}) {
  // 주문 금액 총합계 계산식
  let orderTotalPrice = 0;
  for (let i = 0; i < orderItems.length; i++) {
    orderTotalPrice += parseFloat(orderItems[i].price.replace(/\$/, ''));
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
            <label htmlFor="address" className="label">
              Address
            </label>
            <input
              type="text"
              required
              className="input"
              id="address"
              value={orderAddress}
              onChange={e => onAddressChange(e.target.value)}
            />
          </div>
          <div className="control">
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <input
              type="text"
              required
              className="input"
              id="phone"
              value={orderPhone}
              onChange={e => onPhoneChange(e.target.value)}
            />
          </div>
          <div className="control">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              required
              className="input"
              id="email"
              value={orderEmail}
              onChange={e => onEmailChange(e.target.value)}
            />
          </div>
        </div>
      </section>
      <section className="orderForm__order">
        <h3>Shopping Bag</h3>
        <ul className="orderForm__list">
          {orderItems.map((orderItem, index) => (
            <OrderFormItem key={index} {...orderItem} />
          ))}
        </ul>
        <div className="orderForm__total">
          <span className="orderForm__total__heading">Total</span>
          <span className="orderForm__total__price">${orderTotalPrice}</span>
        </div>
      </section>
      <button className="button">Payment</button>
    </form>
  );
}
