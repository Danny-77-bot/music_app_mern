// App.jsx
import React from 'react';
import "./App.css";
import Sidebar from '../component/Sidebar';
import Playlist from '../component/playlist';
import Display from '../component/Display';

export default function App() {
  return (
    <div className='main-box'>
    <div className='main-box-one'>
    <div  className='side-box'>
    
    <div className='sidebar-box'>
    <Sidebar />
    </div>
    <div className='display-box'>
  <Display/>
  </div>
    </div>
  
    </div>
    <div className='playlist-box'>
    <Playlist/>
    </div>
    </div>
  );
}
