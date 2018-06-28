import React from 'react';

import superAPI from '../superAPI';

const { Provider, Consumer } = React.createContext();

class TopListProvider extends React.Component {
  state = {
    id: this.props.id,
    tops: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await superAPI.get('/tops');
      this.setState({
        tops: res.data.map(p => ({
          title: p.title,
          body: p.body,
          price: p.price,
          imgurl: p.imgurl,
        })),
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  submit = async () => {
    const { id } = this.props;
    const payload = {
      id: this.props.id,
      title: this.state.title,
      price: this.state.price,
      imgurl: this.state.imgurl,
    };
    this.setState({ loading: true });
    try {
      const res = await superAPI.post(`/carts/${id}`, payload);
      console.log('res');
      this.setState({
        title: res.data.title,
        price: res.data.price,
        imgurl: res.data.imgurl,
      });
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
