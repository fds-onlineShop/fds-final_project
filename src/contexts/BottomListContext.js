import React from 'react';
import superAPI from '../superAPI';

const { Provider, Consumer } = React.createContext();

class BottomListProvider extends React.Component {
  static defaultProps = {};

  state = {
    id: this.props.id,
    bottoms: [],
    loading: false,
    hover: false,
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
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const value = {
      bottoms: this.state.bottoms,
      loading: this.state.loading,
      submit: this.submit,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { BottomListProvider, Consumer as BottomListConsumer };
