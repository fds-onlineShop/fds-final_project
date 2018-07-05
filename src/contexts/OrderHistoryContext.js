import React from 'react';
import superAPI from '../superAPI';
const { Provider, Consumer } = React.createContext();

class OrderHistoryProvider extends React.Component {
  state = {
    loading: false,
    orders: [],
  };
  async componentDidMount() {
    await this.fetchOrderHistoryItems();
  }
  fetchOrderHistoryItems = async () => {
    this.setState({
      loading: true,
    });
    try {
      const res = await superAPI.get('/orders');
      this.setState({
        orders: res.data.map(order => ({
          id: order.id,
          orderDate: order.orderDate,
          orderItems: order.orderItems,
          orderPrice: order.orderPrice,
        })),
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const value = {
      orders: this.state.orders,
      loading: this.state.loading,
      fetchOrderHistoryItems: this.fetchOrderHistoryItems,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { OrderHistoryProvider, Consumer as OrderHistoryConsumer };
