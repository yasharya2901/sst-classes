import {createStore} from 'redux';

function cartReducer(state={items: {}}, action) {
    switch(action.type) {
        case 'ADD_TO_CART': {
            const product = action.payload;
            if (state.items[product.id]) {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            product,
                            quantity: state.items[product.id].quantity + 1
                        }
                    }
                }
            }
        }
        case 'REMOVE_FROM_CART': {
            const product = action.payload;
            if (state.items[product.id]) {
                const newItems = {...state.items};
                if (newItems[product.id].quantity === 1) {
                    delete newItems[product.id];
                } else {
                    newItems[product.id] = {
                        ...newItems[product.id],
                        quantity: newItems[product.id].quantity - 1
                    }
                }
                return {
                    ...state,
                    items: newItems
                }
            }
        }
        default:
            return state;
    }
}


const store = createStore(cartReducer);

export default store;