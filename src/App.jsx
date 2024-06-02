import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Alumini from './pages/Alumini/alumini';


function App() {
  return (
    <Router>
      <div className='relative bg-[#e9e9e9]'>
        {/*<div className='bg-[url(./assets/NNL2.svg)] bg-cover bg-no-repeat backdrop-opacity-25'>*/}
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/alumini' element={<Alumini />} />
          </Routes>
        </div>
        <Footer />
        </div>
      {/*</div>*/}
    </Router>
  )
}

export default App;
