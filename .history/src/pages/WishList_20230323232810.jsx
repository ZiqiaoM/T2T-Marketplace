//zq: create-0323 
import React from 'react';
import{ListGroup} from "reactstrap";
import CartItem from './WishListItem';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'next/link';


// to close the list and add products
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../store/wish-list/cartUISlice';


const WishList = () => {

  // to close the list
  const dispatch = useDispatch()
  const toggleCart =()=>{
    dispatch(cartUiActions.toggle());
  }
  // add products
  const cartProducts = useSelector(state=>state.cart.cartItems)
  
  const totalAmount=useSelector(state=>state.cart.totalAmount)
  
  
    return (<div className="cart_container">
      <ListGroup className='cart'>
          <div className="cart_close">
              <span onClick={toggleCart}><CloseIcon /></span>
          </div>
          <div className="cart_item-list">
          {
                cartProducts.length === 0 ? <h6 className='text-center mt-5'>No item added to the wish list</h6>: cartProducts.map((item,index)=>(
                  <CartItem item={item} key={index}/>
                ))
          }
              
          </div>
  
          <div className="cart_bottom d-flex align-items-center justify-content-between">
              <h6>Subtotal: <span>${totalAmount}</span></h6> 
              <button><Link href='/wishlist'>Wish List</Link></button>
          </div>
      </ListGroup>
      </div>)
}


// const WishList = () => {
//   return (
//     <div>WishList
//       {/* <Carts /> */}
//     </div>
    
//   )
// }

export default WishList