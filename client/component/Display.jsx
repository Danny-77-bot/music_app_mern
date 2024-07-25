import React from 'react'
import "./display.css"
import { Routes,Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
export default function Display() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DisplayHome/>}/>
        <Route path="/albums/:id" element={<DisplayAlbum/>}/>

      </Routes>
    </div>
  )
}
