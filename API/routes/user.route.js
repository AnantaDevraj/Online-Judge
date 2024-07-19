import express from 'express';
import {test} from '../controllers/user.controller.js';

const route = express.Router();

route.use('/test', test); // callback from "user.controller.js"

export default route;
