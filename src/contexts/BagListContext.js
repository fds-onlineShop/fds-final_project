import React from 'react';
import superAPI from '../superAPI';

const { Provider, Consumer } = React.createContext();

class BagListProvider extends React.Component {
  static defaultProps = {};

  state = {
    id: this.props.id,
    bags: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await superAPI.get(`/bags`);
      this.setState({
        bags: res.data.map(p => ({
          id: p.id,
          title: p.title,
          body: p.body,
          price: p.price,
          imgurl: p.imgurl,
          hoverimg: p.hoverimg,
          hover: false,
        })),
      });
      console.log(this.state);
    } finally {
      this.setState({ loading: false });
    }
  }

  submit = async id => {
    const bagItem = this.state.bags.find(bag => bag.id === id);
    const payload = {
      imgurl: bagItem.imgurl,
      title: bagItem.title,
      price: bagItem.price,
    };
    this.setState({ loading: true });
    try {
      await superAPI.post(`/carts/`, payload);
      alert('장바구니에 담겼습니다.');
    } catch (e) {
      if (e.response && e.response.status === 401) {
        alert('로그인을 해주세요');
      }
    } finally {
      this.setState({ loading: false });
    }
  };

  handleOver = async id => {
    const res = await superAPI.get(`/bags/${id}`);
    this.setState({
      // bags: [
      //   ...this.state.bags,
      //   ((this.state.bags[id - 1].hover = true),
      //   (this.state.bags[id - 1].imgurl = res.data.hoverimg)),
      // ],
      bags: this.state.bags.map(item => {
        item.id === res.data.id ? (item.imgurl = res.data.hoverimg) : item;
        return item;
      }),
    });
  };

  handleOut = async id => {
    const res = await superAPI.get(`/bags/${id}`);
    this.setState({
      // bags: [
      //   ...this.state.bags,
      //   ((this.state.bags[id - 1].hover = false),
      //   (this.state.bags[id - 1].imgurl = res.data.imgurl)),
      // ],
      bags: this.state.bags.map(item => {
        item.id === res.data.id ? (item.imgurl = res.data.imgurl) : item;
        return item;
      }),
    });
  };

  render() {
    const value = {
      bags: this.state.bags,
      loading: this.state.loading,
      submit: this.submit,
      handleOver: this.handleOver,
      handleOut: this.handleOut,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { BagListProvider, Consumer as BagListConsumer };
