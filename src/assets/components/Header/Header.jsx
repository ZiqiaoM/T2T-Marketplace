import React, {useRef} from 'react';
import {Container} from 'reactstrap';
import logo from '../../images/T2T.png';
import {NavLink, Link} from "react-router-dom";
import WishltIcon from '@mui/icons-material/Loyalty';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';

import { cartUiActions } from '../../store/wish-list/cartUISlice';

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
    const totalQuantity = useSelector(state=> state.cart.totalQuantity)
    // for cart list
    const dispatch = useDispatch();
    const toggleCart = ()=>{
        dispatch(cartUiActions.toggle())
    }

    const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')
  return <header className='header'>
    <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className='logo'>
                <img src={logo} alt="logo" width="130px" />
            </div>
           
            {/* menu */}
            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                <div className="menu d-flex align-items-center gap-5">
                    {
                       nav_links.map((item,index)=>(
                        <NavLink 
                        to={item.path} key={index}
                        className={navClass => navClass.isActive ? 'active_menu':''}
                        >{item.display}</NavLink>
                       )) 
                    }
                </div>
            </div>
            {/* nav icons */}
            <div className="nav_right d-flex align-items-center gap-4">
                <span className="wishlt_icon" onClick={toggleCart}>
                    <WishltIcon />
                    <span className='wishlt_badge'>{totalQuantity}</span>
                </span>
                <span className="user">
                    <Link to='/'><PersonOutlineIcon /></Link>
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