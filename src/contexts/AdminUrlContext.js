import React from 'react';
const { Provider, Consumer } = React.createContext();

class AdminUrlProvider extends React.Component {
  static defaultProps = {
    url: '', // admin페이지의 url
  };
  state = {
    url: this.props.url,
  };

  render() {
    const value = {
      url: this.state.url,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { AdminUrlProvider, Consumer as AdminUrlConsumer };
