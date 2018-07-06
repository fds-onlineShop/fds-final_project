import React from 'react';
import { Link } from 'react-router-dom';
export default function AdminProductItem({
  id,
  productId,
  count,
  title,
  imgurl,
  price,
  onRemoveProduct,
}) {
  return (
    <tr key={id}>
      <td>{count}</td>
      <td>
        <img src={imgurl} alt={title} />
      </td>
      <td>
        <strong>{title}</strong>
      </td>
      <td className="admin-product__item__table-price">{price}</td>
      <td>
        <Link
          className="admin-product__item__table__btn-edit button"
          to={`/admin/${productId}/${id}/edit`}
        >
          EDIT
        </Link>
        <br />
        <button
          className="admin-product__item__table__btn-remove button"
          onClick={e => {
            onRemoveProduct(id);
          }}
        >
          REMOVE
        </button>
      </td>
    </tr>
  );
}
