import React, {useRef} from 'react';
import {Container} from 'reactstrap';
import WishltIcon from '@mui/icons-material/Loyalty';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
// import { useSelector, useDispatch } from 'react-redux';

import logo from 'src/asset/images/T2T.png';
import '../src/styles/header.module.css';
import { cartUiActions } from '/src/store/wish-list/cartUISlice';

const nav_links=[
    {
        display:'Home',
        path:'/home'
    },
    {
        display:'Products',
        path:'/products'
    },    
    {
        display:'About',
        path:'/contact'
    },
    {
        display:'Publish Post',
        path:'/post'
    },
]

const Header = () => {
    const menuRef = useRef(null)
    // const totalQuantity = useSelector(state=> state.cart.totalQuantity)
    const totalQuantity = 10
    // for cart list
    // const dispatch = useDispatch();
    const dispatch = 12
    // const toggleCart = ()=>{
    //     dispatch(cartUiActions.toggle())
    // }
    const toggleCart = false

    const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')
  return <header className='header'>
    <Container>
        {/* <div className="nav_wrapper d-flex align-items-center justify-content-between"> */}
        <div className="nav_wrapper">   
            <div className='logo'>
                <img src={logo} alt="logo" width="130px" />
            </div>
           
            {/* menu */}
            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                <div className="menu">
                    {/* {
                       nav_links.map((item,index)=>(
                        <NavLink 
                        to={item.path} key={index}
                        className={navClass => navClass.isActive ? 'active_menu':''}
                        >{item.display}</NavLink>
                       )) 
                    } */}
                </div>
            </div>
            {/* nav icons */}
            <div className="nav_right">
                <span className="wishlt_icon" onClick={toggleCart}>
                    <WishltIcon />
                    <span className='wishlt_badge'>{totalQuantity}</span>
                </span>
                <span className="user">
                    {/* <Link to='/'><PersonOutlineIcon /></Link> */}
                    {/* <Link to='/userpages'><PersonOutlineIcon /></Link> */}
                </span>
                <span className="mobile_menu" onClick={toggleMenu}>
                    <MenuIcon />
                </span>
            </div>
        </div>
    </Container>
    </header>
}

export default Header