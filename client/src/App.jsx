import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './home.jsx'
import LacakMbg from './lacakmbg.jsx'
import Kontak from './kontak.jsx'
import TestAi from './TestAi.jsx'
import { supabase } from './api/supabase.js'; // Sesuaikan path



function App() {


  return (
    <Routes>
      <Route path='/' element={<LacakMbg />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/lacakmbg' element={<LacakMbg />}></Route>
      <Route path='/kontak' element={<Kontak />}></Route>
      <Route path='/testai' element={<TestAi />}></Route>
    </Routes>
  )
}

export default App
