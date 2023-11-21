import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Homee from './pages/Homee';
import Wishlist from './pages/Wishlist';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>

      <Routes>
      <Route path='/' element={<Homee/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>


      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
