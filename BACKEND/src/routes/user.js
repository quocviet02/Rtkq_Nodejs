import express from "express"
import { listUser,getOneUser,deleteUser,addUser,editUser } from "../controller/user.controller"

const routerUser = express.Router()
routerUser.get("/user",listUser)
routerUser.get("/user/:id",getOneUser)
routerUser.delete("/user/:id",deleteUser)
routerUser.post("/user",addUser)
routerUser.put("/user/:id",editUser)

export default routerUser