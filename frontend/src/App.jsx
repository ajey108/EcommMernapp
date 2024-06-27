import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Newsletter from './Components/NewsLetter';
import Footer from './Components/Footer';
import Mobileban from './assets/Mobileban.png';
import lap from './assets/lap.png';
import camdeal from './assets/camdeal.png';


const App = () => {
  return (
   <>
   
   <BrowserRouter>
   <Navbar/>

   <Routes>
    <Route path = '/' element={<Shop/>}/>
    <Route path = '/mobiles' element={<ShopCategory banner={Mobileban} category="mobiles"/>}/>
    <Route path = '/laptops' element={<ShopCategory banner={lap}   category="laptops"/>}/>
    <Route path = '/cameras' element={<ShopCategory banner={camdeal}  category="cameras"/>}/>
   <Route path='/product' element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>
   </Route>
   <Route path = '/cart' element={<Cart/>}/>
   <Route path = '/login' element={<LoginSignup/>}/>

   </Routes>
   <Footer/>
   </BrowserRouter>
 

   
   </>
  )
}

export default App