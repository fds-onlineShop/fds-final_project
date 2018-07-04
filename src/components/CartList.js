import React from 'react';
import { Link } from 'react-router-dom';
import CartListItem from './CartListItem';

export default function CartList({
  carts = [], // 장바구니 아이템 리스트에 표시될 값
  onRemoveCartItem = () => {}, // 장바구니 아이템 삭제할때 호출되는 함수
}) {
  // 장바구니 금액 총합계 계산식
  let cartTotalPrice = 0;
  for (let i = 0; i < carts.length; i++) {
    cartTotalPrice += parseFloat(carts[i].price.replace(/\$/, ''));
  }
  return carts.length > 0 ? (
    // 장바구니가 비어있지 않은 경우
    <div className="cart-item">
      <ul className="cart-item__list">
        {carts.map(cart => (
          <CartListItem
            key={cart.id}
            {...cart}
            onRemoveCartItem={onRemoveCartItem}
          />
        ))}
      </ul>
      <div className="cart-item__checkout">
        <Link to="/order" className="button is-black">
          Checkout /{' '}
          <span className="cart-item__checkout-unit">${cartTotalPrice}</span>
        </Link>
      </div>
    </div>
  ) : (
    // 장바구니가 비어있는 경우
    <div className="cart-noitem">
      <p class="cart-noitem__info">The Cart is empty.</p>
      <Link to="/main" className="button is-black">
        Continue Browsing
      </Link>
    </div>
  );
}
