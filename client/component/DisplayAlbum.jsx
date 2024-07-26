import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../src/assets/frontend-assets/assets';
import './displayAlbum.css';
export default function DisplayAlbum() {
    const {id}=useParams();
    const albumData=albumsData[id];

  return (
    <div className='display-album'>
      
        <div>
        <Navbar/>
        </div>
       <main>
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
        <hr />
        <div  className='album-info'>
          <p className='title'>Title</p>
          <p className='album'>Album</p>
          <p className='date'>Date added</p>
          <img className='clock' src={assets.clock_icon} alt=""/>
        </div>
        <hr/>
        {songsData.map((item,index)=>(
          <div className='title-image-box' key={index}>
              <p className='title-one'>
                <b>{index+1}</b>
             
              <img src={item.image} alt="" />
              {item.name}
              </p>
              <p className='album-two'>{albumData.name}</p>
              <p className='date-three'>5 days ago</p>
          </div>
        ) )}
       </main>
    </div>
  )
}
