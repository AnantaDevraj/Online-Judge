import mongoose, { Schema } from "mongoose";

const problemSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    difficulty:{
        type: String,
        enum:['Easy','Medium','Hard'],
        required: true
    }
});

const Problem = mongoose.model('Problem', problemSchema);
export default Problem;