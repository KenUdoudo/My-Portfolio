
import './App.css'
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className='relative'>
      <Navbar />

      <Home />

      <Footer />
    </div>
  )
}

export default App;
