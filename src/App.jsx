import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Alumini from './pages/Alumini/alumini';
import Events from './pages/Events/events';
import About from './pages/About/about';

function App() {
  return (
    <Router>
      <div className='relative bg-[#e9e9e9] font-pop'>
        {/*<div className='bg-[url(./assets/NNL2.svg)] bg-cover bg-no-repeat backdrop-opacity-25'>*/}
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/alumini' element={<Alumini />} />
            <Route path='/events' element={<Events />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
        </div>
      {/*</div>*/}
    </Router>
  )
}

export default App;
