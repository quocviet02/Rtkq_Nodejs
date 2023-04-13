import Cate from "../models/cate"

export const listCate = async (req,res)=>{
    try {
        const value = await Cate.find()
        res.status(200).json({
            data:value
        })
    } catch (error) {
        res.status(400).json({
            message:error
        })
    }
}
export const getOneCate = async(req,res)=>{
    try {
         const id = req.params.id
         console.log(id);
        const value = await Cate.findById(id)
        res.status(200).json({
            data:value
        })
    } catch (error) {
        res.status(400).json({
            message:"Project không tồn tại"
        })
    }
}
export const addCate = async (req,res)=>{
    try {
        const dataForm = req.body
        const value = await Cate.create(dataForm)
        res.status(200).json({
            data:value
        })
    } catch (error) {
        res.status(400).json({
            message:"không thêm cate"
        })
    }
}
export const editCate = async (req,res)=>{
    try {
        const id = req.params.id
        const dataForm = req.body
        const value = await Cate.findOneAndUpdate({_id:id},dataForm,{new:true})//new:true trả về dữ liệu mới nhất
        res.status(200).json({
            value
        })
    } catch (error) {
        res.status(400).json({
            message:"K sửa đc"
        })
    }
}
export const deleteCate = async (req,res)=>{
    try {
        const id = req.params.id
        const value = await Cate.findOneAndRemove({_id:id})//new:true trả về dữ liệu mới nhất
        res.status(200).json({
            data:value
        })
    } catch (error) {
        res.status(400).json({
            message:"K xóa đc"
        })
    }
}