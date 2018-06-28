import React from 'react';
import superAPI from '../superAPI';
const { Provider, Consumer } = React.createContext();

class CartProvider extends React.Component {
  state = {
    loading: false,
    carts: [],
  };
  async componentDidMount() {
    await this.fetchCartItems();
  }
  fetchCartItems = async () => {
    this.setState({
      loading: true,
    });
    try {
      const res = await superAPI.get('/carts');
      this.setState({
        carts: res.data.map(cart => ({
          id: cart.id,
          imgurl: cart.imgurl,
          title: cart.title,
          price: cart.price,
        })),
      });
    } finally {
      this.setState({ loading: false });
    }
  };
  // 장바구니 아이템 삭제 기능
  removeCartItem = async id => {
    this.setState({ loading: true });
    try {
      await superAPI.delete(`carts/${id}`);
      await this.fetchCartItems();
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    const value = {
      carts: this.state.carts,
      loading: this.state.loading,
      fetchCartItems: this.fetchCartItems,
      removeCartItem: this.removeCartItem,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { CartProvider, Consumer as CartConsumer };
