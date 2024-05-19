//Cart.js
import React, { useContext } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext';
import './Cart.css'
const Cart = () => {
    const { cartItems, totalPrice } = useContext(RestaurantContext);

    const handleOrderNow = () => {
        // Add your logic for handling the order here
        console.log("Order Now button clicked");
    };

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <div className="cart-content">
                <span style={{ color: "brown" }}>Total Price for your selected dishes: </span> ${totalPrice}
            </div>
        </div>
    );
};

export default Cart;
