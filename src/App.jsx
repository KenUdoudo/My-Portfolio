import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import Sec1 from './Home/section1'
import Sec2 from './Home/section2'
import Sec3 from './Home/section3'
import Sec4 from './Home/section4'
import Sec5 from './Home/section5'
import FAQ from './Home/FAQs'

function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar />
      
      <Sec1 />

      <Sec2 />

      <Sec3 />

      <Sec4 />

      <Sec5 />

      <FAQ />
    </div>
  )
}

export default App;
