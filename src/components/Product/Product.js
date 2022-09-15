import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    
    const { img, name, price, seller, ratings } = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className="product-info">
                <h5 className='product-name'>{name}</h5>
                <p>Price : ${price}</p>
                <p>Seller : {seller}</p>
                <p>Ratings : {ratings}*</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>AddToCart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;