import express from 'express'
import mongoose from 'mongoose'
// import morgan  from 'morgan'

import routerUser from './routes/user'
import routerInfoProject from './routes/Product'
import routerCate from './routes/cate'
import routerProduct from './routes/Product'
import cors from 'cors'
const app = express()
mongoose.connect("mongodb://localhost:27017/rtkQuery").then(()=>{console.log("kết nối thành công");})
.catch((error)=>{console.log("Kết nối thành công",error);})



app.use(express.json())
app.use(cors())
app.use("/be",routerUser)
app.use("/product",routerProduct)
app.use("/cate",routerCate)
app.listen(8000,()=>{
    console.log("Đang chạy trên cổng 8000")
})
export const viteNodeApp = app