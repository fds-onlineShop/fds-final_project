import React from 'react';
import superAPI from '../superAPI';

const { Provider, Consumer } = React.createContext();

class TopListProvider extends React.Component {
  static defaultProps = {};

  state = {
    id: this.props.id,
    tops: [],
    loading: false,
    newTitle: '',
    newPrice: '',
    infor: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await superAPI.get(`/tops`);
      this.setState({
        tops: res.data.map(p => ({
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
      console.log(this.state.infor);
    } finally {
      this.setState({ loading: false });
    }
  }

  ClickEvent = id => {
    this.setState({ loading: true });
    const topItem = this.state.tops.find(top => top.id === id);
    this.state.infor.push(topItem);
    try {
      this.setState({ topItem });
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
    const topItem = this.state.tops.find(top => top.id === id);
    const payload = {
      imgurl: topItem.imgurl,
      title: topItem.title,
      price: topItem.price,
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
    const res = await superAPI.get(`/tops/${id}`);
    this.setState({
      tops: this.state.tops.map(item => {
        item.id === res.data.id ? (item.imgurl = res.data.hoverimg) : item;
        return item;
      }),
    });
  };

  handleOut = async id => {
    const res = await superAPI.get(`/tops/${id}`);
    this.setState({
      tops: this.state.tops.map(item => {
        item.id === res.data.id ? (item.imgurl = res.data.imgurl) : item;
        return item;
      }),
    });
  };

  render() {
    const value = {
      tops: this.state.tops,
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

export { TopListProvider, Consumer as TopListConsumer };
