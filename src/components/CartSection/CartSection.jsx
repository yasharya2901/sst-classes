import React from 'react'
import { useSelector } from 'react-redux'
import './CartSection.css'

function CartSection() {
    const cartItems = useSelector(state => state.items)
  return (
    <div className='cart'>
        <h2>My Cart</h2>
        {Object.values(cartItems).map((item) => {
            return (
                <div key={item.id}>
                    <p>{item.title} - Quantity: {item.quantity}</p>
                </div>
            )
        })}
    </div>
  )
}

export default CartSection