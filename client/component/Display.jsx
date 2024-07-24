import React from 'react'
import "./display.css"
import { Routes,Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'
export default function Display() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DisplayHome/>}/>
      </Routes>
    </div>
  )
}
