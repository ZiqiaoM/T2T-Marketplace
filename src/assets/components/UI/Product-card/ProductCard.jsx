import React from 'react';
import {Link} from 'react-router-dom';
// import productImg from '../../../images/product_01_image_01.jpg';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import {cartActions} from '../../../store/wish-list/cartSlice';

const ProductCard = (props) => {
    const {id, title, image01, price} = props.item;
    const dispatch = useDispatch()

    const addToCart =() =>{
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }
  return (
    <div className='product_item'>
        <div className='product_img'>
            {/* <img src={productImg} alt='product-img' /> */}
            <img src={image01} alt='product-img' className='w-95' height='180px'/>
        </div>
        <div className="product_content">
            {/* <h5><Link>Pasta Maker</Link></h5> */}
            <h5><Link to={`/products/${id}`}>{title}</Link></h5>
            <div className='d-flex align-items-center justify-content-between'>
                {/* <span className='product_price'>$15.00</span> */}
                <span className='product_price'><b>${price}</b></span>
                <button className='addToWl_btn' onClick={addToCart}>Add to Wishlist</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard