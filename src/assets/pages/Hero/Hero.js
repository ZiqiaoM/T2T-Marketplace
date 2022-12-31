import React from 'react';
import Video from '../../images/VidoBg.mp4';
import './Hero.css';
import SearchIcon from '@mui/icons-material/Search';
import SecurityIcon from '@mui/icons-material/Security';
import PaidIcon from '@mui/icons-material/Paid';

const Hero = () => {
  return (
      <div className='HeroContainer'>
            <div className='HeroBg'>
                <video className='VideoBg' src={Video} type='video/mp4' autoPlay loop muted playsInline />
            </div>
            <div className='HeroContent'>
              <div className='HeroItems'>
                <h1 className='HeroH1'><b>Your money will be worth more than you think @T2T</b></h1>
                <div className='header_search'>
                    <input className='header_searchInput' type="text" placeholder="   Explore what you want. (examples: kitchen utensils, furniture, book...)" />
                    <SearchIcon className='header_searchIcon' />
                </div>
                <div className='d-flex align-items-center gap-5'>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='hero_icon'>
                      <PaidIcon />
                    </span>{"  "}
                    On-Campus Transactions
                  </p>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='hero_icon'>
                      <SecurityIcon />
                    </span>{"  "}
                    User campus real-name authentication 
                  </p>                 
                </div>
              </div>
            </div>
    </div>
  )
}

export default Hero
