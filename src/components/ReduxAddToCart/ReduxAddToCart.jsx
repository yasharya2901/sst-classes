import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store";
function ReduxAddToCart({ product }) {
    console.log("add to cart", product.id);
    // useSelector
    let dispatch = useDispatch();
    function increase() {
        //dispatch({type: , payload: })
        dispatch(addToCart(product));
    }
    function decrease() {
     //dispatch({type: , payload: })
     dispatch(removeFromCart(product));
    }

    let quantity = useSelector((state) => {
        return state.items[product.id]?.quantity || 0;
    })

    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
     )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        )
    }
}
export default ReduxAddToCart;


// array of object 
// object of object 

//[{id: 1, quantity: 10}, {id: 2, quantity: 10}, {id: 3, quantity: 10}, {id: 4, quantity: 10}]
// cart = 
// {id:{id: 1, quantity: 10}, id:{id: 2, quantity: 10}, id:{id: 3, quantity: 10}, id:{id: 4, quantity: 10}}
//cart["3"]

// Object.value(obj);
// Object.keys(obj);
