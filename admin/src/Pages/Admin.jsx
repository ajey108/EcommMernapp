import React from 'react'
import Sidebar from '../Components/Sidebar'
import {Routes,Route} from 'react-router-dom'
import AddProduct from '../Components/AddProduct'
import ListProduct from '../Components/ListProduct'

const Admin = () => {
  return (
<div className="flex h-screen">
  <Sidebar/>
  <Routes>
    <Route path='/addproduct' element={<AddProduct/>}/>
    <Route path='/addproduct 'element={<ListProduct/>}/>
  </Routes>

</div>
  )
}

export default Admin