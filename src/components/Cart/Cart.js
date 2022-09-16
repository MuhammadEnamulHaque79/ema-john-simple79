import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // console.log(cart);
    let total=0;
    let shipping=0;
    for(const product of cart){
        total=total+product.price;
        shipping=shipping+product.shipping;
    }
    const tax=parseFloat((total * 0.1).toFixed(2));
   const grandTotal= parseFloat((total + shipping + tax).toFixed(2));

    return (
        <div className='cart'>
            <h4 style={{textAlign:'center'}}>Order Summary</h4>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : ${total.toFixed(2)}</p>
            <p>Total Shipping Charge : ${shipping.toFixed(2)}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h4 style={{textAlign:'center'}}>Grand Total : ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;