import React from 'react';
import superAPI from '../superAPI';

const { Provider, Consumer } = React.createContext();

class OrderFormProvider extends React.Component {
  state = {
    loading: false,
    success: false,
    orderAddress: '',
    orderPhone: '',
    orderEmail: '',
    orderItems: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const userRes = await superAPI.get(`/me`);
      console.log(userRes);
      const cartRes = await superAPI.get(`/carts`);
      this.setState({
        orderAddress: userRes.data.address,
        orderPhone: userRes.data.phone,
        orderEmail: userRes.data.email,

        orderItems: cartRes.data.map(cart => ({
          imgurl: cart.imgurl,
          title: cart.title,
          price: cart.price,
        })),
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  submit = async () => {
    alert('주문이 완료되었습니다.');
    const date = new Date().toLocaleDateString();
    let priceTotal = 0;
    for (let i = 0; i < this.state.orderItems.length; i++) {
      priceTotal += parseFloat(
        this.state.orderItems[i].price.replace(/\$/, '')
      );
    }
    const payload = {
      orderName: this.state.orderName,
      orderAddress: this.state.orderAddress,
      orderPhone: this.state.orderPhone,
      orderEmail: this.state.orderEmail,
      orderDate: date,
      orderItems: this.state.orderItems,
      orderPrice: priceTotal,
    };
    this.setState({ loading: true });
    try {
      const orderRes = await superAPI.post('/orders', payload);
      this.setState({
        success: true,
        orderName: orderRes.data.orderName,
        orderAddress: orderRes.data.orderAddress,
        orderPhone: orderRes.data.orderPhone,
        orderEmail: orderRes.data.orderEmail,
      });

      const cartItems = [];
      const cartRes = await superAPI.get(`/carts`);
      for (let i = 0; i < cartRes.data.length; i++) {
        cartItems.push(cartRes.data[i].id);
      }
      for (let i = 0; i < cartItems.length; i++) {
        await superAPI.delete(`/carts/${cartItems[i]}?_expand=user`);
      }
    } finally {
      this.setState({ loading: false });
    }
  };

  updateName = orderName => this.setState({ orderName });
  updateAddress = orderAddress => this.setState({ orderAddress });
  updatePhone = orderPhone => this.setState({ orderPhone });
  updateEmail = orderEmail => this.setState({ orderEmail });

  render() {
    const value = {
      ...this.state,
      updateName: this.updateName,
      updateAddress: this.updateAddress,
      updatePhone: this.updatePhone,
      updateEmail: this.updateEmail,
      submit: this.submit,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { OrderFormProvider, Consumer as OrderFormConsumer };
