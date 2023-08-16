import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import Sec1 from './section1'
import Sec2 from './section2'

function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar />
      
      <Sec1 />

      <Sec2 />
    </div>
  )
}

export default App;
