import React from 'react';

export default function SongItem(props) {
  return (
    <div className='song-item'>
      <img src={props.image} alt=""/>
      <p>{props.name}</p>
      <p>{props.desc}</p>
    </div>
  );
}
