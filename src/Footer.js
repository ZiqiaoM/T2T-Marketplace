import React from 'react';
import './Footer.css';
import logo from "./T2T.png";

function Footer() {
  return (
    <div className='FooterContainer'>
        <div className='FooterLinksWrapper'>
            <div className='FooterDesc'>
                <img className='header_logo' src={logo} alt='T2T_logo' />
                <p className='info'>We are here to provide you with cheaper alternatives and better living experience on campus.</p>
            </div>
            <div className='FooterLinkItems'>
                <div className='FooterLinkTitle'>Contact Us</div>
                <div className='FooterLink' to="/">Contact</div>
                <div className='FooterLink' to="/">Support</div>
                <div className='FooterLink' to="/">Sponsorships</div>
            </div>
            <div className='FooterLinkItems'>
                <div className='FooterLinkTitle'>Social Media</div>
                <div className='FooterLink' to="/">Instagram</div>
                <div className='FooterLink' to="/">Facebook</div>
                <div className='FooterLink' to="/">Twitter</div>
            </div>   
        </div>
    </div>

  )
}

export default Footer