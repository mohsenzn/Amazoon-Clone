export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

export const SET_USER = "SET_USER";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_TO_BASKET = "REMOVE_TO_BASKET";
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_USER:
      return {
        ...state,user:action.user
      }
    case ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.item] };

    case REMOVE_TO_BASKET:
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("no action id");
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
