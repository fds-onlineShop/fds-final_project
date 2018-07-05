import React from 'react';
import superAPI from '../superAPI';

const { Provider, Consumer } = React.createContext();

class BottomListProvider extends React.Component {
  static defaultProps = {};

  state = {
    id: this.props.id,
    bottoms: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await superAPI.get(`/bottoms`);
      this.setState({
        bottoms: res.data.map(p => ({
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
    const bottomItem = this.state.bottoms.find(bottom => bottom.id === id);
    const payload = {
      imgurl: bottomItem.imgurl,
      title: bottomItem.title,
      price: bottomItem.price,
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
    const res = await superAPI.get(`/bottoms/${id}`);
    this.setState({
      // bottoms: [
      //   ...this.state.bottoms,
      //   ((this.state.bottoms[id - 1].hover = true),
      //   (this.state.bottoms[id - 1].imgurl = res.data.hoverimg)),
      // ],
      bottoms: this.state.bottoms.map(item => {
        item.id === res.data.id ? (item.imgurl = res.data.hoverimg) : item;
        return item;
      }),
    });
  };

  handleOut = async id => {
    const res = await superAPI.get(`/bottoms/${id}`);
    this.setState({
      // bottoms: [
      //   ...this.state.bottoms,
      //   ((this.state.bottoms[id - 1].hover = false),
      //   (this.state.bottoms[id - 1].imgurl = res.data.imgurl)),
      // ],
      bottoms: this.state.bottoms.map(item => {
        item.id === res.data.id ? (item.imgurl = res.data.imgurl) : item;
        return item;
      }),
    });
  };

  render() {
    const value = {
      bottoms: this.state.bottoms,
      loading: this.state.loading,
      submit: this.submit,
      handleOver: this.handleOver,
      handleOut: this.handleOut,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { BottomListProvider, Consumer as BottomListConsumer };
