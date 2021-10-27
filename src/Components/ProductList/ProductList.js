
import React  from "react";
export const ProductList = ({ postProducts, onAddToCart, procuctPrice }) => {

 

  return (
    <>
     <div className="results__header">
          <h2 className="copy__title">shopping results for GPU</h2>   
           </div>

      <div className="product-grid">
        <ul className="product-grid__list">
          {postProducts.map((product) => (
            <li className="product-grid__list__item" key={product.id}>
              <p className="copy__p-title">{product.title} </p>
              <img
                src={product.thumbnailUrl}
                alt="product"
                className="image__product"
              />
              <p>Price:  &pound;{procuctPrice}</p>
              <button onClick={() => onAddToCart(product)} className="button__addtocart">
                add to basket
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
