import React from 'react';
import Navbar from './Navbar';
import './display.css';
import { albumsData, songsData } from '../src/assets/frontend-assets/assets';

import SongItem from './SongItem';
import AlbumItmes from './AlbumItmes'
export default function DisplayHome() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <h1>Featured Charts</h1>
          <div className='music-chart'>
            {albumsData.map((item, index) => (
              <AlbumItmes
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
                key={index}
              />
            ))}
          </div>
          <div className='music-chart'>
            <h1>Today's biggest hits</h1>
            {songsData.map((item, index) => (
              <SongItem
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
