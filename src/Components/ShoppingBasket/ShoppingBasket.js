import React from "react";

export const ShoppingBasket = ({
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  procuctPrice
}) => {

    //calculate totals
  const totalItems = cartItems.reduce((a, c) => a + procuctPrice * c.qty, 0);
  const totalVat = totalItems * 0.14;
  const totalSummary = totalItems + totalVat;

  return (
    <>
    <div className="basket__header">
    <h2 className="copy__title">Shopping Cart</h2>
    </div>

      <div className="basket__items">
        {cartItems.length === 0 && <div>cart is empty </div>}
        <div className="basket__purchase-list">
          {cartItems.map((item) => (
            <div key={item.id} className="basket__purchase-list__item">
              <div>
                {item.name}
                <img
                  src={item.thumbnailUrl}
                  classname="image__thumbnail"
                  alt="added to basket product"
                />
              </div>

              <button
                onClick={() => onRemoveFromCart(item)}
                className="button__remove"
              >
                -
              </button>

              <button onClick={() => onAddToCart(item)} className="button__add">
                +
              </button>

              <p>
                {item.qty} x &pound;{procuctPrice.toFixed(2)}
              </p>
              
            </div>
          ))}

          {cartItems.length !== 0 && (
            <div className="basket__summary">
              <h3>total price</h3>
              <h2>${totalItems.toFixed(2)}</h2>
              <h3>total price inc VAT</h3>
              <h2>${totalSummary.toFixed(2)}</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
