import React from 'react';
import superAPI from '../superAPI';
const { Provider, Consumer } = React.createContext();

class AdminFormProvider extends React.Component {
  static defaultProps = {
    id: null, // id가 주어지면 편집 모드, 아니면 생성 모드
    productId: null, // 상품 카테고리
  };

  state = {
    id: this.props.id,
    productId: this.props.productId,
    success: false,
    loading: false,
    title: '',
    body: '',
    imgurl: '',
    hoverimg: '',
    price: '',
  };

  async componentDidMount() {
    const { id } = this.props;
    const { productId } = this.props;

    if (id && productId === 'top') {
      this.setState({ loading: true });
      try {
        const res = await superAPI.get(`/tops/${id}`);
        this.setState({
          title: res.data.title,
          body: res.data.body,
          imgurl: res.data.imgurl,
          hoverimg: res.data.hoverimg,
          price: res.data.price,
        });
      } finally {
        this.setState({
          loading: false,
        });
      }
    } else if (id && productId === 'bottom') {
      this.setState({ loading: true });
      try {
        const res = await superAPI.get(`/bottoms/${id}`);
        this.setState({
          title: res.data.title,
          body: res.data.body,
          imgurl: res.data.imgurl,
          hoverimg: res.data.hoverimg,
          price: res.data.price,
        });
      } finally {
        this.setState({
          loading: false,
        });
      }
    } else if (id && productId === 'shoes') {
      this.setState({ loading: true });
      try {
        const res = await superAPI.get(`/shoes/${id}`);
        this.setState({
          title: res.data.title,
          body: res.data.body,
          imgurl: res.data.imgurl,
          hoverimg: res.data.hoverimg,
          price: res.data.price,
        });
      } finally {
        this.setState({
          loading: false,
        });
      }
    } else if (id && productId === 'bag') {
      this.setState({ loading: true });
      try {
        const res = await superAPI.get(`/bags/${id}`);
        this.setState({
          title: res.data.title,
          body: res.data.body,
          imgurl: res.data.imgurl,
          hoverimg: res.data.hoverimg,
          price: res.data.price,
        });
      } finally {
        this.setState({
          loading: false,
        });
      }
    } else if (id && productId === 'coat') {
      this.setState({ loading: true });
      try {
        const res = await superAPI.get(`/coats/${id}`);
        this.setState({
          title: res.data.title,
          body: res.data.body,
          imgurl: res.data.imgurl,
          hoverimg: res.data.hoverimg,
          price: res.data.price,
        });
      } finally {
        this.setState({
          loading: false,
        });
      }
    }
  }

  submit = async () => {
    const { id } = this.props;
    const { productId } = this.props;
    const payload = {
      title: this.state.title,
      body: this.state.body,
      imgurl: this.state.imgurl,
      hoverimg: this.state.hoverimg,
      price: this.state.price,
    };
    this.setState({ loading: true });
    if (id) {
      if (productId === 'top') {
        try {
          const res = await superAPI.patch(`/tops/${id}`, payload);
          this.setState({ success: true, id: res.data.id });
        } finally {
          this.setState({ loading: false });
        }
      } else if (productId === 'bottom') {
        try {
          const res = await superAPI.patch(`/bottoms/${id}`, payload);
          this.setState({ success: true, id: res.data.id });
        } finally {
          this.setState({ loading: false });
        }
      } else if (productId === 'shoes') {
        try {
          const res = await superAPI.patch(`/shoes/${id}`, payload);
          this.setState({ success: true, id: res.data.id });
        } finally {
          this.setState({ loading: false });
        }
      } else if (productId === 'bag') {
        try {
          const res = await superAPI.patch(`/bags/${id}`, payload);
          this.setState({ success: true, id: res.data.id });
        } finally {
          this.setState({ loading: false });
        }
      } else if (productId === 'coat') {
        try {
          const res = await superAPI.patch(`/coats/${id}`, payload);
          this.setState({ success: true, id: res.data.id });
        } finally {
          this.setState({ loading: false });
        }
      }
    } else {
      if (productId === 'top') {
        try {
          const res = await superAPI.post(`/tops`, payload);
          this.setState({ success: true, id: res.data.id });
        } finally {
          this.setState({ loading: false });
        }
      } else if (productId === 'bottom') {
        try {
          const res = await superAPI.post(`/bottoms`, payload);
          this.setState({ success: true, id: res.data.id });
        } finally {
          this.setState({ loading: false });
        }
      } else if (productId === 'shoes') {
        try {
          const res = await superAPI.post(`/shoes`, payload);
          this.setState({ success: true, id: res.data.id });
        } finally {
          this.setState({ loading: false });
        }
      } else if (productId === 'bag') {
        try {
          const res = await superAPI.post(`/bags`, payload);
          this.setState({ success: true, id: res.data.id });
        } finally {
          this.setState({ loading: false });
        }
      } else if (productId === 'coat') {
        try {
          const res = await superAPI.post(`/coats`, payload);
          this.setState({ success: true, id: res.data.id });
        } finally {
          this.setState({ loading: false });
        }
      }
    }
  };

  updateTitle = title => this.setState({ title });
  updateBody = body => this.setState({ body });
  updateImgUrl = imgurl => this.setState({ imgurl });
  updateHoverImg = hoverimg => this.setState({ hoverimg });
  updatePrice = price => this.setState({ price });

  render() {
    const value = {
      ...this.state,
      updateTitle: this.updateTitle,
      updateBody: this.updateBody,
      updateImgUrl: this.updateImgUrl,
      updateHoverImg: this.updateHoverImg,
      updatePrice: this.updatePrice,
      submit: this.submit,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { AdminFormProvider, Consumer as AdminFormConsumer };
