import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Product from './component/Product'
import AddProduct from './component/product/AddProduct'

import { useRequest } from 'ahooks'
import Mui from './component/Mui'
import He from './component/layout/Header'
import UpdateProduct from './component/product/UpdateProduct'
import ListProduct from './component/product/ListProduct'
import AddCate from './component/category/AddCate'
import UpdateCate from './component/category/UpdateCate'
import ListCate from './component/category/ListCate'
import Signin from './component/register/signin'
import Signup from './component/register/signup'


function App() {


  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<He />}>
          <Route index element={<ListProduct />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/update-product/:id' element={<UpdateProduct/>}/>

          <Route path='/list-cate' element={<ListCate />} />
          <Route path='/add-cate' element={<AddCate />} />
          <Route path='/update-cate' element={<UpdateCate/>}/>
          <Route path='/mui-test' element={<Mui />} />
        </Route>
        <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>

      </Routes>
    </div>
  )
}

export default App
