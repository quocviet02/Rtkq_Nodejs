import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StateProduct } from "../interfaces/Product";
import { addProduct, getAllProduct,getProduct, editProduct,deleteProduct} from "./productApi";

const initialState:StateProduct = {
    value:[],
    item:{name:"",price:1}
}
const productSlice = createSlice({
   name:"product",
   initialState,
   reducers:{},

   //xử lý action
   //xét lại state
    extraReducers: (builder) => {
        // GET Products
        builder.addCase(getAllProduct.pending, (state, action) => {
           //chuẩn bị
        })
        builder.addCase(getAllProduct.fulfilled, (state, action) => {
            state.value = action.payload;
           //hoàn thành
        })
        builder.addCase(getAllProduct.rejected, (state, action) => {
           //thất bại
        })


        // POST product
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.value.push(action.payload)
           
        })
        //get one product
        builder.addCase(getProduct.fulfilled, (state,action)=>{
            state.item = action.payload
            
        })
        //update product
        builder.addCase(editProduct.fulfilled, (state, action) => {
            state.value = state.value.map(item => item.id === action.payload.id ? action.payload : item)
           
        })

        //delete product 
        builder.addCase(deleteProduct.fulfilled,(state, action)=>{
            state.value = state.value.filter(item =>item.id !==action.payload)
           
        })
    }
})  


export default productSlice.reducer