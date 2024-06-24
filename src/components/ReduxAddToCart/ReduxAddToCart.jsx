import { useDispatch, useSelector } from "react-redux";


function AddToCart({product}) {
    console.log("add to cart", product.id);
    let dispatch = useDispatch();
    function increase() {
        dispatch({type: "ADD_TO_CART", payload: product.id});
    }

    function decrease() {
        dispatch({type: "REMOVE_FROM_CART", payload: product.id});
    }

    let cart = useSelector(state => state.cart);
}