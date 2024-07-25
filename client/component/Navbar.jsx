import React from 'react'
import { assets } from '../src/assets/frontend-assets/assets'
import './navbar.css';
export default function Navbar() {
  return (
    <>
    <div className="navbar">
    
      <div className="image-box">
            <img src={assets.arrow_left} alt=""/>
            <img src={assets.arrow_right} alt=""/>
        </div>
        <div className='image-desc'>
            <p>Explore Premium</p>
            <p>Install App</p>
            <p className='username'>D</p>
        </div>
    </div>
    <div className='music-options'>
          <p className='all'>All</p>
          <p>Music</p>
          <p>Podcasts</p>
        </div>
    </>
  )
}
