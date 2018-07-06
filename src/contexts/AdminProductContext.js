import React from 'react';
import superAPI from '../superAPI';
const { Provider, Consumer } = React.createContext();

class AdminProductProvider extends React.Component {
  static defaultProps = {
    productId: '', //admin페이지의 서브메뉴 카테고리
  };
  state = {
    productId: this.props.productId,
    loading: false,
    products: [],
  };
  async componentDidMount() {
    await this.fetchProducts();
  }
  fetchProducts = async () => {
    const { productId } = this.props;
    let count = 1;
    this.setState({
      loading: true,
    });
    if (productId === 'top') {
      try {
        const res = await superAPI.get('/tops');
        this.setState({
          products: res.data.map(product => ({
            id: product.id,
            imgurl: product.imgurl,
            title: product.title,
            price: product.price,
            count: count++,
          })),
        });
      } finally {
        this.setState({ loading: false });
      }
    } else if (productId === 'bottom') {
      try {
        const res = await superAPI.get('/bottoms');
        this.setState({
          products: res.data.map(product => ({
            id: product.id,
            imgurl: product.imgurl,
            title: product.title,
            price: product.price,
            count: count++,
          })),
        });
      } finally {
        this.setState({ loading: false });
      }
    } else if (productId === 'shoes') {
      try {
        const res = await superAPI.get('/shoes');
        this.setState({
          products: res.data.map(product => ({
            id: product.id,
            imgurl: product.imgurl,
            title: product.title,
            price: product.price,
            count: count++,
          })),
        });
      } finally {
        this.setState({ loading: false });
      }
    } else if (productId === 'bag') {
      try {
        const res = await superAPI.get('/bags');
        this.setState({
          products: res.data.map(product => ({
            id: product.id,
            imgurl: product.imgurl,
            title: product.title,
            price: product.price,
            count: count++,
          })),
        });
      } finally {
        this.setState({ loading: false });
      }
    } else if (productId === 'coat') {
      try {
        const res = await superAPI.get('/coats');
        this.setState({
          products: res.data.map(product => ({
            id: product.id,
            imgurl: product.imgurl,
            title: product.title,
            price: product.price,
            count: count++,
          })),
        });
      } finally {
        this.setState({ loading: false });
      }
    }
  };
  // 관리자 아이템 삭제 기능
  removeProduct = async id => {
    const { productId } = this.props;
    const productLists = ['top', 'bottom', 'shoes', 'bag', 'coat'];
    const productDatas = ['tops', 'bottoms', 'shoes', 'bags', 'coats'];
    for (let i = 0; i < 5; i++) {
      if (productId === productLists[i]) {
        this.setState({ loading: true });
        try {
          await superAPI.delete(`${productDatas[i]}/${id}`);
          alert('The product has been deleted.');
          await this.fetchProducts();
        } finally {
          this.setState({ loading: false });
        }
      }
    }
  };

  render() {
    const value = {
      productId: this.state.productId,
      products: this.state.products,
      loading: this.state.loading,
      fetchProducts: this.fetchProducts,
      removeProduct: this.removeProduct,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { AdminProductProvider, Consumer as AdminProductConsumer };
