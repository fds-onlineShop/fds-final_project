import React from 'react';

import CartContainer from '../containers/CartContainer';
import { CartProvider } from '../contexts/CartContext';

export default function CartPage() {
  return (
    <CartProvider>
      <CartContainer />
    </CartProvider>
  );
}
