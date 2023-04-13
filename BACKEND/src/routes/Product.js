import express from "express"
import { addProduct, deleteProduct, editProduct, getOneProduct, listProduct } from "../controller/product.controller"


const routerProduct = express.Router()
routerProduct.get("/product",listProduct)
routerProduct.get("/product/:id",getOneProduct)
routerProduct.delete("/product/:id",deleteProduct)
routerProduct.post("/product",addProduct)
routerProduct.put("/product/:id",editProduct)

export default routerProduct