import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../src/assets/frontend-assets/assets';
import './displayAlbum.css';
export default function DisplayAlbum() {
    const {id}=useParams();
    const albumData=albumsData[id];

  return (
    <div className='display-album'>
        <Navbar/>
        <div className='display-album-content'>
            <div className='display-album-img'>
            <img src={albumData.image} alt=""/>

            </div>
            <div className='display-album-desc'>
               <h1>Playlist</h1>
               <p className='album-name'>{albumData.name}</p>
               <p className='album-desc'>{albumData.desc}</p>
               <p className='logo'>
                 <img src={assets.spotify_logo} alt=""/>
                  <span className='logo-desc'>
                  <span>Spotify</span>
                 . 1,323,154,likes
                 <span>50 songs,</span>
                 about 2 hr 30 min
                  </span>
               </p>
            </div>
        </div>
    </div>
  )
}
