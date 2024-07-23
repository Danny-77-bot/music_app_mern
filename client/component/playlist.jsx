import React from 'react'
import {assets,songsData} from '../src/assets/frontend-assets/assets.js'
import './playlist.css';
export default function Playlist() {
  return (
    <div className='music-box' >
        <div className="music-top">
           <div className="image">
           <img src={songsData[0].image} alt=""/>
            </div>        <div>
        <p>{songsData[0].name}</p>
        <p>{songsData[0].desc.slice(0,12)}</p>
        </div>
        </div>

        <div className='music-box-2'>
          <div className='music-controls'>
            <img src= {assets.shuffle_icon} alt=""/>
            <img src={assets.prev_icon }  alt=""/>
            <img src={assets.play_icon} alt=""/>
            <img src={assets.next_icon} alt=""/>
            <img src={assets.loop_icon} alt=""/>

          </div>
          <div className='music-time'>
          <div>
                <p>0:10</p>
              </div>
              <hr/>
            <div>
              <p>3:20</p>
            </div>
             
          
          </div>
        </div>
    </div>
  )
}
