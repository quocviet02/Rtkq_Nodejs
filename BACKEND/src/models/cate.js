import mongoose from  "mongoose"
const Cate = mongoose.Schema({
    nameCate:{
        type:String,
        require:true,
        unique:true
    }
},{timestamps:true, versionKey:false})
export default mongoose.model("Cate",Cate)