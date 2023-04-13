import Product from "../models/Product";

export const listProduct = async (req,res)=>{
    try {
        const value = await Product.find()
        res.status(200).json({
            data:value
        })
    } catch (error) {
        res.status(400).json({
            message:error
        })
    }
}
export const getOneProduct = async(req,res)=>{
    try {
         const id = req.params.id
         console.log(id);
        const value = await Product.findById(id)
        res.status(200).json({
            data:value
        })
    } catch (error) {
        res.status(400).json({
            message:"Project không tồn tại"
        })
    }
}
export const addProduct = async (req,res)=>{
    try {
        const value = await Product.create(req.body)
        res.status(200).json({
            data:value
        })
    } catch (error) {
        res.status(400).json({
            message:"không thêm project"
        })
    }
}
export const editProduct = async (req,res)=>{
    try {
        const id = req.params.id
        const dataForm = req.body
        const value = await Product.findOneAndUpdate({_id:id},dataForm,{new:true})//new:true trả về dữ liệu mới nhất
        res.status(200).json({
            value
        })
    } catch (error) {
        res.status(400).json({
            message:"K sửa đc"
        })
    }
}
export const deleteProduct = async (req,res)=>{
    try {
        const id = req.params.id
        const value = await Product.findOneAndRemove({_id:id})//new:true trả về dữ liệu mới nhất
        res.status(200).json({
            data:value
        })
    } catch (error) {
        res.status(400).json({
            message:"K xóa đc"
        })
    }
}