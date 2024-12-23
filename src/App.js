import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes ,Route} from 'react-router-dom' 
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/assets/banner_mens.png'
import women_banner from  './Components/assets/banner_women.png'
import kid_banner from  './Components/assets/banner_kids.png'
import Payment from './Pages/Payment';

function App() {
  return (
    <div >
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
     <Route path="product" element={<Product/>}>
      <Route path=':productid' element={<Product/>}>
        </Route>
       
     </Route>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/payment' element={<Payment/>}/>
     <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
     <Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
