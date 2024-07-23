// App.jsx
import React from 'react';
import "./App.css";
import Sidebar from '../component/Sidebar';
import Playlist from '../component/playlist';

export default function App() {
  return (
    <div className='main-box'>
      <div  className='side-box'>
        <Sidebar />
      
      </div>
    <div className='playlist-box'>
    <Playlist/>
    </div>
    </div>
  );
}
