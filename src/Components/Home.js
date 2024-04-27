import React from 'react'
import Nav from './Nav'
import banner from '../assets/banner.png'
import instagram from "../assets/instagram.png"
import whatsapp from "../assets/whatsapp.png"
import telegram from "../assets/telegram.png"

const Home = () => {
  return (
    <div className='main-page'>
        <Nav />
        <div className='home-banner'>
            <div className='home-bannerImage'>
                <img src={banner} alt='home-image' />
            </div>
            <div className='left-panel'> 
                <div className='contact-icons '>
                <a href=''><img src={instagram} style={{backgroundColor:"white",borderRadius:"18px"}}/></a>
                <a href=''><img src={whatsapp} /></a>
                <a href=''><img src={telegram} /></a>
               </div>
            <div className='divider'>
            <div className='round'></div>
           
            </div>
            <div className='home-text '>
                <h1 className='heading'>
                    Gilchay Market
                </h1>
                <p className='primary-text'>
                    Good taste with Gilchay
                </p>
                <p className='text-content'>
                    Gilchay tea has a complex appearance and a bitter and astringent taste in terms of
                tea flavor and natural color, it has high degree of quality.
                 </p>
                 <button className='primary-button'> Get Started</button>
                 <div className='round-2'></div> <div className='divider'>
                
                </div>
                
           

            </div>
            
            </div>
            
        </div>
        
    </div>
  )
}

export default Home