import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = Schema({
    title:{type:String,require:true},
    userId:{type:Schema.Types.ObjectId,ref:"user"},
    categoryId:{type:Schema.Types.ObjectId,ref:"category"},
    description:{type:String,require:false},
    startDateTime:{type:Date,require:true},
    venue:{type:String,require:true},
    capacity:{type:Number,require:true},
    ticketPrice:{type:Number,require:true},
    images:[{type:String,require:false}],
},{
    timestap:true
})

const eventModle = mongoose.model('event',eventSchema);

export default eventModle;