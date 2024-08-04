import express from 'express';
import {test} from '../controllers/user.controller.js';
import User from '../models/user.model.js';
const route = express.Router();

route.use('/test', test); // callback from "user.controller.js"

//create
route.post('/' , async(req,res) =>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    }catch(error){
        res.status(400).send(error);
    }
});
//read
route.get('/:id' , async(req , res) =>{
    
});
export default route;
