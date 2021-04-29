import React from "react";
import { useStateValue } from "../context/StateProvider";
import { REMOVE_TO_BASKET } from "../context/reducer";
function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
console.log(basket)
  const RemoveFromBasket = () => {
    dispatch({ type: REMOVE_TO_BASKET, id: id });
  };
  return (
    <div className="checkoutProduct">
        
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={RemoveFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
