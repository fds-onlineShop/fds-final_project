import React from 'react';
import superAPI from '../superAPI';

const { Provider, Consumer } = React.createContext();

class ShoesListProvider extends React.Component {
  static defaultProps = {};

  state = {
    id: this.props.id,
    shoes: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await superAPI.get(`/shoes`);
      this.setState({
        shoes: res.data.map(p => ({
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
    const shoesItem = this.state.shoes.find(shoes => shoes.id === id);
    const payload = {
      imgurl: shoesItem.imgurl,
      title: shoesItem.title,
      price: shoesItem.price,
    };
    this.setState({ loading: true });
    try {
      await superAPI.post(`/carts/`, payload);
    } catch (e) {
      if (e.response && e.response.status === 401) {
        alert('로그인을 해주세요');
      }
    } finally {
      this.setState({ loading: false });
      alert('장바구니에 담겼습니다.');
    }
  };

  handleOver = async id => {
    const res = await superAPI.get(`/shoes/${id}`);
    this.setState({
      shoes: [
        ...this.state.shoes,
        ((this.state.shoes[id - 1].hover = true),
        (this.state.shoes[id - 1].imgurl = res.data.hoverimg)),
      ],
    });
  };

  handleOut = async id => {
    const res = await superAPI.get(`/shoes/${id}`);
    this.setState({
      shoes: [
        ...this.state.shoes,
        ((this.state.shoes[id - 1].hover = false),
        (this.state.shoes[id - 1].imgurl = res.data.imgurl)),
      ],
    });
  };

  render() {
    const value = {
      shoes: this.state.shoes,
      loading: this.state.loading,
      submit: this.submit,
      handleOver: this.handleOver,
      handleOut: this.handleOut,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { ShoesListProvider, Consumer as ShoesListConsumer };
