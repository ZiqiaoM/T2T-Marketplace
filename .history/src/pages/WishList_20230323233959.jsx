//zq: create-0323 
import React from 'react';
import WishlistItem from './WishListItem.jsx';
import { useSelector } from 'react-redux';
import{ListGroup} from "reactstrap";


const WishList = () => {
  const cartProducts = useSelector(state=>state.cart.cartItems)

  return (
  <div className='Container'>
    <div>WishList

    </div>
    <ListGroup className='cart'>
    <div className="cart_item-list">
        {
              cartProducts.length === 0 ? <h6 className='text-center mt-5'>No item added to the wish list</h6>: cartProducts.map((item,index)=>(
                <WishlistItem item={item} key={index}/>
              ))
        }           
        </div>
    </ListGroup>
    </div>
  )
}

export default WishList