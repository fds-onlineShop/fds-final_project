import React from 'react';
import superAPI from '../superAPI';

const { Provider, Consumer } = React.createContext();

class TopListProvider extends React.Component {
  static defaultProps = {};

  state = {
    id: this.props.id,
    tops: [],
    loading: false,
    hover: false,
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
        })),
      });
      console.log(this.state);
    } finally {
      this.setState({ loading: false });
    }
  }

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
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const value = {
      tops: this.state.tops,
      loading: this.state.loading,
      submit: this.submit,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { TopListProvider, Consumer as TopListConsumer };
