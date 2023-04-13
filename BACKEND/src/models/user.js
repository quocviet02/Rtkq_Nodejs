import mongoose from  "mongoose"
const User = mongoose.Schema({
    nameUser:{
        type:String,
        require:true,
    },
    ageUser:{
        type:Number,
        require:true,
        
    },
    numberPhone:{
        type:Number,
        require:true,
        
    }

}, {timestamps:true, versionKey:false})
export default mongoose.model("User",User)