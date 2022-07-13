import React from 'react';
import './Header.css';
import logo from "./T2T.png";
// import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img className='header_logo' src={logo} alt='T2T_logo' />
        {/* <div className='header_search'>
            <input className='header_searchInput' type="text" />
            <SearchIcon className='header_searchIcon' />
        </div> */}

        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionLineOne'>Hello</span>
                <span className='header_optionLineTwo'>Sign In</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Order</span>                
            </div>

            <div className='header_optionBasket'>
                <ShoppingBasketIcon />
                <span className='header_optionLineTwo header_basketCount'>0</span>
            </div>
            <div className='header_optionChat'>
                <ChatIcon />
                <span className='header_optionLineTwo header_chatCount'>0</span>
            </div>
            <div className='header_publish'>
                <button className='button'>Publish</button>
            </div>
        </div>


    </div>
        
  )
}

export default Header