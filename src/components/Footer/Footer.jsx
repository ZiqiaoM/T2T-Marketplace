import React from 'react';
import './Footer.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


//import image 0130
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='FooterContainer'>
        <div className='FooterLinksWrapper'>
            <div className='FooterDesc'>
            <Image src="/images/T2T.png" alt="logo" width={130} height={125}/>
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
        <style jsx>{`
        .FooterContainer{
            padding: 5rem calc((100vw-1100px)/2);
            color: #000;
            background: rgb(234,237,237);
        }
        
        
        
        .FooterLinksWrapper{
            display: flex;
            margin-left: 6%;
            margin-top: -20px;
        
        }
        
        .FooterDesc{
            padding: 0 2rem;
            margin-left: 8%;
            margin-top: 5px;
            width: 35%;
            margin-bottom: 25px;
        }
        .header_logo{
            margin-left: 20%;
            margin-bottom: -15px;
        }
        
        
        .FooterLinkItems{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem 2rem;
            margin-top: 4%;
            margin-left: 8%;
        }
        
        .FooterLinkTitle{
            font-size: 16px;
            font-weight: 700;
            margin-bottom:16px;
            color: #4B9CD3;
        }
        
        .FooterLink{
            text-decoration: none;
            margin-bottom: 0.5rem;
            font-size: 14px;
            color: #3d3d4e;
        }
        .info{
            font-family: "RocknRoll One", sans-serif !important;
            font-size: 14px;
            color: #595969;
        }
        
        .copyright{
            margin-left: auto;
            margin-right: auto;
            width:32em;
            font-size: 12px;
            padding-top: 10px;
            padding-bottom: 10px;
            color: grey;
        }
        `
        }
        </style>
    </div>
  )
}

export default Footer
