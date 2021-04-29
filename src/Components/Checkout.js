import React from "react";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  //   console.log(basket)
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/39/electronics/store/kamja/Bose/AEFY2179_DA1_QCEB_1500x200_F.jpg"
          alt=""
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping Basket is empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && ( 
          <div className="checkout__right">
              <SubTotal/>
              
          </div>
      )}
    </div>
  );
}

export default Checkout;
