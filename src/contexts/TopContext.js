// import React from 'react';
// import superAPI from '../superAPI';

// const { Provider, Consumer } = React.createContext();

// class TopProvider extends React.Component {
//   state = {
//     loading: true,
//     id: null,
//     title: null,
//     body: null,
//   };

//   async componentDidMount() {
//     this.setState({ loading: true });
//     try {
//       const res = await superAPI.get('/tops');
//       this.setState({
//         id: res.data.id,
//         title: res.data.title,
//         body: res.data.body,
//       });
//     } finally {
//       this.setState({ loading: false });
//     }
//   }
//   render() {
//     const value = {
//       ...this.state,
//     };
//     return <Provider value={value}>{this.props.children}</Provider>;
//   }
// }

// export { TopProvider, Consumer as TopConsumer };
