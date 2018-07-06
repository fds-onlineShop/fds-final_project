import React from 'react';

import { AdminFormConsumer } from '../contexts/AdminFormContext';
import { Redirect } from 'react-router-dom';
import AdminForm from '../components/AdminForm';
import LoadingBox from '../components/LoadingBox';

export default class AdminFormContainer extends React.Component {
  render() {
    return (
      <AdminFormConsumer>
        {({
          productId,
          id,
          title,
          body,
          imgurl,
          hoverimg,
          price,
          updateTitle,
          updateBody,
          updateImgUrl,
          updateHoverImg,
          updatePrice,
          submit,
          success,
          loading,
        }) =>
          loading ? (
            <LoadingBox />
          ) : success ? (
            productId === 'top' ? (
              <Redirect to={`/admin/tops`} />
            ) : productId === 'bottom' ? (
              <Redirect to={`/admin/bottoms`} />
            ) : productId === 'shoes' ? (
              <Redirect to={`/admin/shoes`} />
            ) : productId === 'bag' ? (
              <Redirect to={`/admin/bags`} />
            ) : (
              <Redirect to={`/admin/coats`} />
            )
          ) : (
            <AdminForm
              productId={productId}
              id={id}
              title={title}
              body={body}
              imgurl={imgurl}
              hoverimg={hoverimg}
              price={price}
              onTitleChange={updateTitle}
              onBodyChange={updateBody}
              onImgUrlChange={updateImgUrl}
              onHoverImgChange={updateHoverImg}
              onPriceChange={updatePrice}
              onSubmit={submit}
            />
          )
        }
      </AdminFormConsumer>
    );
  }
}
