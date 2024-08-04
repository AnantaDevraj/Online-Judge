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
        enum :['Accepted' ,'Wrong answer' , 'Compilation Error' , 'Runtime Error'],
        required : true
    },
    submittedAt:{
        type: Date,
        default: Date.now
    }
});

const Submission = mongoose.model('Submission', submissionSchema);

export default Submission;