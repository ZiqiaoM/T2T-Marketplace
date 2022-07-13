import React from 'react';
import Video from './VidoBg.mp4';
import './Hero.css';
import SearchIcon from '@mui/icons-material/Search';

const Hero = () => {
  return (
    <div>
        <div className='HeroContainer'>
            <div className='HeroBg'>
                <video className='VideoBg' src={Video} type='video/mp4' autoPlay loop muted playsInline />
            </div>
            <div className='HeroContent'>
              <div className='HeroItems'>
                <h1 className='HeroH1'>Your pennies will be worth more than you think @T2T</h1>
                <div className='header_search'>
                    <input className='header_searchInput' type="text" />
                    <SearchIcon className='header_searchIcon' />
                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Hero
