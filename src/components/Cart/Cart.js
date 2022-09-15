import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='order-info'>
            <h3>Order Summary</h3>
            <p>Slelected Items :{cart.length}</p>
            <p>Total Price :</p>
            <p>Total Shipping Charge :</p>
            <p>Tax :</p>
            <h4>Grand Total :</h4>
        </div>
    );
};

export default Cart;