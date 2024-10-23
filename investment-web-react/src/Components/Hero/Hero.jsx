import React from 'react'
import './Hero.css'
import classroom from '../../assets/coin_up.jpg'

const Hero = () => {
  return (
    <div>
       <div className="hero">
  <div className="media_container">
    <div className="invest">
      <p>Strategic Investing</p>
    </div>
    <div className="invest">
      <p>Dividend Growth</p>
    </div>
    <div className="invest">
      <p>Sector Investing</p>
    </div>
    <div className="invest">
      <p>Index Fund Investing</p>
    </div>
  </div>
           <h1 className="hero_header">PROSPER</h1>
<img src={classroom} alt="hero_image" className='hero_img'/>
<h1 className="hero_bottom_header">YOUR FINANCIAL FUTURE</h1>
<h1 className='hero_txt'>ONE SMART INVESTMENT AT A TIME.</h1>

        </div>
    </div>
  )
}

export default Hero
