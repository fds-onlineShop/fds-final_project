import React from 'react';
import superAPI from '../superAPI';

const { Provider, Consumer } = React.createContext();

class CoatListProvider extends React.Component {
  static defaultProps = {};

  state = {
    id: this.props.id,
    coats: [],
    loading: false,
    newTitle: '',
    newPrice: '',
    infor: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await superAPI.get(`/coats`);
      this.setState({
        coats: res.data.map(p => ({
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

  ClickEvent = id => {
    this.setState({ loading: true });
    const coatItem = this.state.coats.find(coat => coat.id === id);
    this.state.infor.push(coatItem);
    try {
      this.setState({ coatItem });
      console.log(this.state.infor);
    } finally {
      this.setState({ loading: false });
    }
  };

  RemoveEvent = () => {
    this.setState({ loading: true });
    this.state.infor.shift();
    try {
      this.setState({});
      console.log(this.state.infor);
    } finally {
      this.setState({ loading: false });
    }
  };

  submit = async id => {
    const coatItem = this.state.coats.find(coat => coat.id === id);
    const payload = {
      imgurl: coatItem.imgurl,
      title: coatItem.title,
      price: coatItem.price,
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
    const res = await superAPI.get(`/coats/${id}`);
    this.setState({
      coats: this.state.coats.map(item => {
        item.id === res.data.id ? (item.imgurl = res.data.hoverimg) : item;
        return item;
      }),
    });
  };

  handleOut = async id => {
    const res = await superAPI.get(`/coats/${id}`);
    this.setState({
      coats: this.state.coats.map(item => {
        item.id === res.data.id ? (item.imgurl = res.data.imgurl) : item;
        return item;
      }),
    });
  };

  render() {
    const value = {
      coats: this.state.coats,
      infor: this.state.infor,
      loading: this.state.loading,
      submit: this.submit,
      handleOver: this.handleOver,
      handleOut: this.handleOut,
      ClickEvent: this.ClickEvent,
      RemoveEvent: this.RemoveEvent,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { CoatListProvider, Consumer as CoatListConsumer };
