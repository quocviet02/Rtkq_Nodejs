import { createAsyncThunk } from "@reduxjs/toolkit"
import { IProduct } from "../interfaces/Product"
import axios from 'axios'
//lấy list
export const getAllProduct = createAsyncThunk("product/getAllProduct", async () =>{
    const reponsive =await axios.get('http://localhost:3000/product')
    const data = await reponsive.data
    return data
})
//lấy 1
export const getProduct = createAsyncThunk("product/getProduct", async (id:number|string) =>{
const reponsive =await axios.get(`http://localhost:3000/product/${id}`)
const data = await reponsive.data
console.log(data);
return data
})

//thêm
export const addProduct = createAsyncThunk('product/addProduct', async (product:IProduct) => {
const response = await fetch('http://localhost:3000/product', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
});
const data = await response.json();
return data
})

//sửa

export const editProduct = createAsyncThunk('product/editProduct',async (product:IProduct)=>{
const response = await fetch(`http://localhost:3000/product/${product.id}`,
   {
    method:"PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(product)
   }
)
console.log(product);
const data = await response.json()
return data


//xóa
})
export const deleteProduct = createAsyncThunk('product/deleteProduct',async(id:number|string)=>{
await fetch(`http://localhost:3000/product/${id}`,{
    method:"DELETE",
    headers:{
        "Content-Type":"application/json"
    }
})    
console.log(id); 
return id
})