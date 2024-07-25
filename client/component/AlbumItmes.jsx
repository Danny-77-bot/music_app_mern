import React from 'react';

export default function AlbumItems(props) {
  console.log(props)
  return (
    <div className='album-box'>
      <img src={props.image} alt=""/>   
      <p>{props.name}</p>
      <p>{props.desc}</p>
    </div>
  );
}
