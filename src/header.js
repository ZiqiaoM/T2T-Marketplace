import React, {useRef} from 'react';
import WishltIcon from '@mui/icons-material/Loyalty';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Image from 'next/image'
import Link from 'next/link'
import logo from './assets/images/T2T.png';
import style_header from  '../src/styles/header.module.css';

import {Container} from 'reactstrap';

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

  return <header className={style_header.header}>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className='logo'>
                <Image src={logo} classname = {style_header.logo} alt="logo" width ={130} height = {130} />
            </div>

            <div className={style_header.menu}>
                    {
                       nav_links.map((item,index)=>(
                        <Link href={item.path}>{item.display}</Link>
                       )) 
                    }
                </div>
            {/* nav icons */}
            <div className="nav_right">
                <span className={style_header.wishlt_icon}>
                    <WishltIcon />
                    <span className={style_header.wishlt_badge}>{0}</span>
                </span>
                <span className={style_header.user}>
                    {/* <Link to='/'><PersonOutlineIcon /></Link> */}
                    <div ><PersonOutlineIcon/></div>
                </span>
            </div>
        </div>
    </header>
}

export default Header