import React from 'react';
import superAPI from '../superAPI';

const { Provider, Consumer } = React.createContext();

class OrderFormProvider extends React.Component {
  state = {
    loading: false,
    orderName: '',
    orderAddress: '',
    orderPhone: '',
    orderEmail: '',
    orderItems: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const userRes = await superAPI.get(`/users`);
      const cartRes = await superAPI.get(`/carts`);
      this.setState({
        orderName: userRes.data.name,
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
    const orderDate = new Date().toLocaleDateString();

    const payload = {
      orderName: this.state.orderName,
      orderAddress: this.state.orderAddress,
      orderPhone: this.state.orderPhone,
      orderEmail: this.state.orderEmail,
      orderDate: orderDate,
      //orderItems: this.state.carts,
    };
    this.setState({ loading: true });
    try {
      const res = await superAPI.post('/orders', payload);
      this.setState({
        orderName: res.data.orderName,
        orderAddress: res.data.orderAddress,
        orderPhone: res.data.orderPhone,
        orderEmail: res.data.orderEmail,
      });
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
