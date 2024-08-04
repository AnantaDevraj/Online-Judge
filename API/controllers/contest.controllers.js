import contest from '../models/contest.model.js';


//create contest
export const createContest = async(req, res) =>{
    const {name , problems, startDate, endDate } = req.body;
    try{
        const newContest = new contest({name , problems, startDate , endDate });
        await newContest.save();
        res.status(201).json(newContest);
    }catch(err){
        res.status(500).json({error: err.message})
    }
};

//get all contest
export const getContests = async(req ,res)=>{
    try{
        const contests = await contests.find().populate('problem');
        res.status(201).json(contests);
    }catch(err){
        res.status(500).json({error : err.message});
    }
};

//get contest by ID

export const getContestsById = async(req,res)=>{
    try{
        const contest = await contest.findById(req.params.id).populate('problem');
        if(!contest) return res.status(404).json({message:'Contest not found'});
        res.status(200).json({contest});
    }catch(err){
        res.status(500).json({error : err.message});
    }
};

//update contest

export const updateContest = async(req,res)=>{
    const {name , problems , startDate, endDate} = req.body();
    try{
        const contest = await contest.findByIdAndUpdate(req.params.Id)
    }catch(err){

    }
};