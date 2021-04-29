import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import {getBasketTotal} from '../context/reducer';
function SubTotal() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/* price */}
      <CurrencyFormat
           renderText={(value) => (
            <>
            <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type='checkbox' />
                This order contains a gift
            </small>
            </>
        )} 
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
