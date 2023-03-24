import React from 'react';
import {ListGroupItem} from 'reactstrap';

import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


import { useDispatch } from 'react-redux';
import { cartActions } from '../store/wish-list/cartSlice';


const WishlistItem = ({item}) => {
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
        <style jsx>{`
        .cart_item-info img{
          width: 40px;
          height: 40px;
          object-fit: cover;
      }
      
      .cart_product-title{
          font-size: 0.7rem;
          font-weight:600;
      }
      .cart_product-price{
          font-size: 0.8rem;
      }
      .cart_product-price span{
          font-size: 0.9rem;
          font-weight: 600;
          color: rgb(236, 111, 33);
      }
      .increase_decrease-btn{
          background-color: rgb(205, 242, 255);
          padding: 2px 3px;
          border-radius: 5px;
      }
      .increase_btn, .decrease_btn{
          cursor: pointer;
      }
      .delete_btn{
          font-size: 1.1rem;
          /* font-weight: 300; */
      }
      
      .cart_item{
          padding-bottom: 10px;
          border-bottom: 1px solid whitesmoke;
      }
      `}</style>
    </div>
  </ListGroupItem>
}

export default WishlistItem
