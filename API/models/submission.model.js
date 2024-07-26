import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref :'User',
        required: true
    },
    problemId:{
        type: mongoose.Schema.Types.ObjectId,
        ref :'Problem',
        required : true
    },
    code :{
        type : String,
        required : true
    },
    status :{
        type : String,
        required : true
    }
});

const Submission = mongoose.model('Submission', submissionSchema);

export default Submission;