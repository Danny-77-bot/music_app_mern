// Sidebar.jsx
import React from 'react';
import { assets } from '../src/assets/frontend-assets/assets.js/'; // Assuming assets are correctly imported

import './sidebar.css';
export default function Sidebar() {
  return (
    <div className='sidebar'>
  
      <div className='sidebar-wrapper'>
        <div className='home-box'>
          <img className="p-4" src={assets.home_icon} alt="Home Icon" />
          <p className=''>Home</p>
        </div>
        <div className='home-box'>
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold">Search</p>
        </div>

        <div className='library-box'>
          <div className='library-box-img' >
            <img src={assets.stack_icon} alt="Stack Icon" className="" />
            <p >Your Library</p>
          </div>
          <div className='library-draw' >
            <img src={assets.arrow_icon} alt="Arrow Icon" className="w-4" />
            <img src={assets.plus_icon} alt="Plus Icon" className="w-4" />
          </div>
        </div>
        <div className='playlist-box' >
          <h1>Create your first playlist</h1>
          <p>It's easy, we will help you</p>
          <button>Create Playlist</button>
      </div>
      <div className='podcast-box'>
        <h1>Let's findSome podcasts to follow</h1>
        <p>It's easy we will help you</p>
        <button>browse podcast</button>
      </div>
      </div>
    </div>
  );
}
