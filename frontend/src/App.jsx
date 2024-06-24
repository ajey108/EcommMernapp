import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Newsletter from './Components/NewsLetter';


const App = () => {
  return (
   <>
   
   <BrowserRouter>
   <Navbar/>

   <Routes>
    <Route path = '/' element={<Shop/>}/>
    <Route path = '/mobiles' element={<ShopCategory category="mobile"/>}/>
    <Route path = '/laptops' element={<ShopCategory category="laptops"/>}/>
    <Route path = '/cameras' element={<ShopCategory category="cameras"/>}/>
   <Route path='/product' element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>
   </Route>
   <Route path = '/cart' element={<Cart/>}/>
   <Route path = '/login' element={<LoginSignup/>}/>
   </Routes>
   </BrowserRouter>
 

   
   </>
  )
}

export default App