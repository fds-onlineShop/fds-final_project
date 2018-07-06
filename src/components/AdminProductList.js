import React from 'react';
import { Link } from 'react-router-dom';
import AdminProductItem from './AdminProductItem';

export default function AdminProductList({
  productId = '', // 관리자 상품 카테고리,
  id = '', // 상품 번호,
  products = [], // 관리자 상품리스트에 표시될 값,
  onRemoveProduct = () => {}, // 관리자 상품리스트 아이템 삭제할때 호출되는 함수
}) {
  return products.length > 0 ? (
    // 상품리스트가 비어있지 않은 경우
    <div className="admin-product__item">
      <div className="admin-product__item__head">
        <p className="admin-product__item__info">
          <span>{productId}</span> ({products.length} items)
        </p>
        <Link to={`/admin/${productId}/upload`} className="button is-black">
          UPLOAD
        </Link>
      </div>
      <table className="admin-product__item__table table">
        <thead>
          <tr>
            <th className="admin-product__item__table-num">No.</th>
            <th className="admin-product__item__table-image">Image</th>
            <th className="admin-product__item__table-name">Name</th>
            <th className="admin-product__item__table-price">Price</th>
            <th className="admin-product__item__table-setting">Setting</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <AdminProductItem
              key={product.id}
              {...product}
              onRemoveProduct={onRemoveProduct}
              productId={productId}
            />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    // 상품리스트가 비어있는 경우
    <div className="product-noitem">
      <p>We don't have any products.</p>
    </div>
  );
}
