import { ADD_TO_CART, REMOVE_CART, EMPTY_CART } from "../constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    

    case ADD_TO_CART:
      console.warn("CART_TO_CART condition ", action);
      return [action.data, ...data];
    case REMOVE_CART:
      console.warn("REMOVE_FROM_CART condition ", action);
      const newData = data.slice(0, data.length - 1);
      return [...newData];
    case EMPTY_CART:
      console.warn(action);
      return [];
    default:
      return data;
  }
};
