import User from "../models/user";

export const listUser = async (req,res)=>{
    try {
        const value = await User.find()
        res.status(200).json({
            data:value
        })
    } catch (error) {
        res.status(400).json({
            message:error
        })
    }
}
export const getOneUser = async(req,res)=>{
    try {
         const id = req.params.id
         console.log(id);
        const value = await User.findById(id)
        res.status(200).json({
            data:value
        })
    } catch (error) {
        res.status(400).json({
            message:"user không tồn tại"
        })
    }
}
export const addUser = async (req,res)=>{
    try {
        const dataForm = req.body
        const value = await User.create(dataForm)
        res.status(200).json({
            data:value
        })
    } catch (error) {
        res.status(400).json({
            message:"không thêm đc"
        })
    }
}
export const editUser = async (req,res)=>{
    try {
        const id = req.params.id
        const dataForm = req.body
        const value = await User.findOneAndUpdate({_id:id},dataForm,{new:true})//new:true trả về dữ liệu mới nhất
        res.status(200).json({
            value
        })
    } catch (error) {
        res.status(400).json({
            message:"K sửa đc"
        })
    }
}
export const deleteUser = async (req,res)=>{
    try {
        const id = req.params.id
        const value = await User.findOneAndRemove({_id:id})//new:true trả về dữ liệu mới nhất
        res.status(200).json({
            data:value
        })
    } catch (error) {
        res.status(400).json({
            message:"K xóa đc"
        })
    }
}