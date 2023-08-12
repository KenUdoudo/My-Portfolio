import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import Sec1 from './section1'

function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar />
      
      <Sec1 />
    </div>
  )
}

export default App;
