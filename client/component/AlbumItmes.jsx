import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AlbumItems({image,name,desc,id}) {
const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/albums/${id}`)} className='album-box'>
      <img src={image} alt=""/>   
      <p>{name}</p>
      <p>{desc}</p>
    </div>
  );
}
