import React from 'react';
import './Product.css';


function Product({image, title, price, location}) {
  return (
    <div className='product'>
        <div className='product_info'>
            <img src={image} alt="pro" className='product_img' height="190" width="260" />
            <p className='product_name'>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            <p className='product_location'>{location}</p>
            <button>learn more</button>

            </p>
        </div>

    </div>
  )
}

export default Product