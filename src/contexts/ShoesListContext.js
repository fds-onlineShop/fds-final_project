import React from 'react';
import superAPI from '../superAPI';

const { Provider, Consumer } = React.createContext();

class ShoesListProvider extends React.Component {
  static defaultProps = {};

  state = {
    id: this.props.id,
    shoes: [],
    loading: false,
    hover: false,
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
      const res = await superAPI.post(`/carts/`, payload);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const value = {
      shoes: this.state.shoes,
      loading: this.state.loading,
      submit: this.submit,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { ShoesListProvider, Consumer as ShoesListConsumer };
