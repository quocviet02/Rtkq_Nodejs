import mongoose from  "mongoose"
const Product = mongoose.Schema({
    nameProduct:{
        type:String,
        require:true,
        unique:true
    },
    priceProduct:{
        type:Number,
        require:true
    }
},{timestamps:true, versionKey:false})
export default mongoose.model("Product",Product)