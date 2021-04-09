export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case "SET_USER":
      return  {
        ...state,
        user: action.user
      }
    case 'ADD_TO_BASKET':
      // Logic to add item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      // logic to remove item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      
      if(index >=0) {
        // item exists in basket, remove it
        newBasket.splice(index,1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not present in the basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}

export default reducer;
