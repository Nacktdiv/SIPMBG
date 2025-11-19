import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './home.jsx'
import LacakMbg from './lacakmbg.jsx'
import Kontak from './kontak.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/lacakmbg' element={<LacakMbg />}></Route>
      <Route path='/kontak' element={<Kontak />}></Route>
    </Routes>
  )
}

export default App
