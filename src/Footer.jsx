import React from 'react';
import logo from '../../images/T2T.png';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import style_footer from "../src/styles/footer.module.css"

const Footer = () => {
  return (
    <div className='FooterContainer'>
        <div className='FooterLinksWrapper'>
            <div className='FooterDesc'>
                <img className='header_logo' src={logo} alt='T2T_logo' width='130px'/>
                <p className='info'>We are here to provide you with cheaper alternatives and better living experience on campus.</p>
            </div>
            <div className='FooterLinkItems'>
                <div className='FooterLinkTitle'><h6>Contact Us</h6></div>
                <div className='FooterLink' to="/">Contact</div>
                <div className='FooterLink' to="/">Support</div>
                <div className='FooterLink' to="/">Sponsorships</div>
            </div>
            <div className='FooterLinkItems'>
                <div className='FooterLinkTitle'><h6>Social Media</h6></div>
                <div className='FooterLink' to="/"><InstagramIcon />   Instagram </div>
                <div className='FooterLink' to="/"><FacebookIcon />   Facebook</div>
                <div className='FooterLink' to="/"><TwitterIcon />   Twitter</div>
            </div>   
        </div>
        <div className='copyright'>
            <p>Copyright ©T2T all rights reserved. Web Development by C-M-Z.</p>
        </div>
    </div>
  )
}

export default Footer