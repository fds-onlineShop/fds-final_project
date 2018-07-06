import React from 'react';

export default function AdminForm({
  productId = '', // 상품 카테고리
  title = '', // 상품 이름
  body = '', //  상품 설명
  imgurl = '', // 상품 이미지 URL
  hoverimg = '', // 상품 마우스 오버 이미지 URL
  price = '', // 상품가격
  onTitleChange = title => {}, // 상품 이름이 변경되었을때 호출되는 함수
  onBodyChange = body => {}, // 상품 설명이 변경되었을때 호출되는 함수
  onImgUrlChange = imgurl => {}, // 상품 이미지URL이 변경되었을때 호출되는 함수
  onHoverImgChange = hoverimg => {}, // 상품 마우스 오버 이미지 URL이 변경되었을때 호출되는 함수
  onPriceChange = price => {}, // 상품 가격이 변경되었을때 호출되는 함수
  onSubmit = () => {}, // 상품 변경사항이 등록될 때 호출되는 함수
}) {
  return (
    <section className="admin-form__container">
      <h3>&lt;{productId}&gt;</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="field">
          <label className="label">Product Name</label>
          <div className="control">
            <input
              className="input"
              value={title}
              onChange={e => onTitleChange(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Product details</label>
          <div className="control">
            <textarea
              className="textarea"
              value={body}
              onChange={e => onBodyChange(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image URL (Main)</label>
          <div className="control">
            <input
              className="input"
              value={imgurl}
              onChange={e => onImgUrlChange(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image URL (Mouseover)</label>
          <div className="control">
            <input
              className="input"
              value={hoverimg}
              onChange={e => onHoverImgChange(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              className="input"
              value={price}
              placeholder="ex) $100"
              onChange={e => onPriceChange(e.target.value)}
            />
          </div>
        </div>
        <div className="admin-form__button">
          <button className="button is-black">Sumbit</button>
        </div>
      </form>
    </section>
  );
}
