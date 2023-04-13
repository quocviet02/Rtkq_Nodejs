import express from "express"
import { addCate, deleteCate, editCate, getOneCate, listCate } from "../controller/cate.controller"



const routerCate = express.Router()
routerCate.get("/cate",listCate)
routerCate.get("/cate/:id",getOneCate)
routerCate.delete("/cate/:id",deleteCate)
routerCate.post("/cate",addCate)
routerCate.put("/cate/:id",editCate)

export default routerCate