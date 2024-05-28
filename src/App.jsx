
import './App.css'
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className='relative'>
      <div className='bg-[url(./assets/NNL2.svg)] bg-cover bg-no-repeat bg-opacity-100'>
      <Navbar />

      <Home />

      <Footer />
      </div>
    </div>
  )
}

export default App;
