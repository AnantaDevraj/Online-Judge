import mongoose from "mongoose";

const contestSchema = new mongoose.Schema({
    name :{
        type : String,
        required :true
    },
    problems : [{
        type : mongoose.Schema.Types.objectId,
        ref :'Problem'
    }],
    startTime :{
        type : Date,
        required : true
    },
    endTime:{
        type :Date,
        required : true
    }
});

const Contest = mongoose.model('Contest',contestSchema);
export default Contest; 