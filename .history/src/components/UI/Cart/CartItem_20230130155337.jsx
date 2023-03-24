import React from 'react';
import {ListGroupItem} from 'reactstrap';
// import productImg from '../../../images/product_01_image_01.jpg'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './CartItem.module.css';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/wish-list/cartSlice';
// import {cartActions} from '../../../store/wish-list/cartSlice'

const CartItem = ({item}) => {
//add products
const {id, title, price, image01, quantity, totalPrice} = item

const dispatch = useDispatch()

// const increase_item
const increaseItem = ()=>{
  dispatch(cartActions.addItem({
    id,
    title,
    price,
    image01
  }))
}

//remove items
const decreaseItem = ()=>{
  dispatch(cartActions.removeItem(id))
}

//delete item 
const deleteItem = ()=>{
  dispatch(cartActions.deleteItem(id))
}


  return <ListGroupItem className='border-0 cart_item'> 
    <div className="cart_item-info d-flex gap-2">
        {/* <img src={productImg} alt='product-img' /> */}
        <img src={image01} alt='product-img' />
        <div className="cart_product-info w-100 d-flex align-items-center gap-4 justify-content-between">
            <div>
                <h6 className='cart_product-title'>{title}</h6>
                <p className='d-flex align-items-center gap-5 cart_product-price'>{quantity}x<span>${totalPrice}</span></p>
                <div className='d-flex align-items-center gap-3 justify-content-between increase_decrease-btn'>
                    <span className='increase_btn' onClick={increaseItem}><AddIcon /></span>
                    <span className='quantity'>{quantity}</span>
                    <span className='decrease_btn' onClick={decreaseItem}><RemoveIcon /></span>
                </div>
            </div>

            <span className='delete_btn' onClick={deleteItem}><CloseIcon/></span>
        </div>
    </div>
  </ListGroupItem>
}

export default CartItem
