import mongoose from "mongoose";
 const todoSchema=mongoose.Schema({
    todo : {type:String, require:true , unique:true}
 })

 const todoCollections=mongoose.model("todos",todoSchema)
 export default todoCollections;