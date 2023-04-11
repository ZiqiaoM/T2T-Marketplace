import React , { useState }from 'react';
import './Hero.module.css';
import SearchIcon from '@mui/icons-material/Search';
import SecurityIcon from '@mui/icons-material/Security';
import PaidIcon from '@mui/icons-material/Paid';
import { useRouter } from 'next/router'



const Hero = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/AllProducts?search=${searchTerm}`);
  };

  return (
      <div className='HeroContainer'>
            <div className='HeroBg'>
                <video className='VideoBg' src='/video/VidoBg.mp4' type='video/mp4' autoPlay loop muted playsInline />
            </div>
            <div className='HeroContent'>
              <div className='HeroItems'>
                <h1 className='HeroH1'><b>Your money will be worth more than you think @T2T</b></h1>
                <form onSubmit={handleSubmit}>
                <div className='header_search'>
                    <input className='header_searchInput' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} type="text" placeholder="   Explore what you want. (examples: kitchen utensils, furniture, book...)" />
                    <button className='header_searchIcon' type="submit">
                    <SearchIcon />
                    </button>
                </div>
                </form>
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
            <style jsx>{`
            .HeroContainer{
              margin-top: -75px;
              display: flex;
              align-items: center;
              position:relative;
              justify-content: center;
              height: 100vh;
              /* padding: 0 1rem; */
              background-color: #4B9CD3;
              /* width: 1404px; */  
                                               
          
          }
          .HeroBg{
              position:absolute;
              top:0;
              bottom: 0;
              right: 0;
              left:0;
              width: 100%;
              height: 100%;
              overflow: hidden;
          }
          
          .VideoBg{
              width: 100%;
              height: 100%;
              object-fit:cover;
          }
          
          .HeroContent{
              z-index: 3;
              height: calc(100vh-80px);
              max-height: 100%;
              padding:0rm calc((100vw-1300px)/2);
          }
          
          .HeroItems{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              height: 100vh;
              max-height: 100%;
              padding: 0;
              color: #fff;
              line-height: 1.1;
              font-weight: bold;
          }
          
          .HeroH1{
              font-size: clamp(1.1rem, 6vw, 4rem);
              margin-top: 6%;
              margin-bottom: 1rem;
              margin-left: 10px;
              margin-right: 10px;
              letter-spacing: 3px;
              color: #fff;
          }
          
          
          .SearchButton{
              border-radius: 20px;
              width:40px;
          }
          
          .header_search{
              display:flex;
              flex: 1;
              align-items: center;
              justify-content:center;
              margin-top: 30px;
              width: 60%;
          }
          
          .header_searchInput{
              height: 40px;
              padding: 10px;
              border: none;
              width: 1100px;
              border-radius: 20px;
              color: grey;
          }
          
          .header_searchIcon{
              padding:10px;
              width: 45px !important;
              height:40px !important;
              background-color: #4B9CD3;
              // background-color:red;  
              border-radius: 20px;
              margin-left: 10px;
          }
          
          .d-flex {
              color: rgb(81, 150, 230);
          }
            `}</style>
    </div>
  )
}

export default Hero
