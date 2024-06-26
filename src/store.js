import { act } from "react";
import { createStore } from "redux";
import { omit } from "lodash";
function cartReducer(state= { items: {}}, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      if (state.items[product.id]) {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity + 1
            }
          }
        }
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...product,
              quantity: 1
            }
          }
        }
      }
    }
    case "REMOVE_FROM_CART": {
      const product = action.payload;
      if (state.items[product.id].quantity <= 1) {
        return {
          ...state,
          items: omit(state.items, [product.id])
        }
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity - 1
            }
          }
        }
      }

    }
    default:
      return state;
  }
}


const store = createStore(cartReducer);

export default store;


// action is an object 

// type
// payload
//state = {items: {1:{id: 1, quantity: 11}, 2:{id: 2, quantity: 10}, 3:{id: 3, quantity: 10}, 4:{id: 4, quantity: 10}}} 

// ...state, ...product[1]
