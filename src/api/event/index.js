import express from 'express'
import { create ,deleteEvent,list,update} from './controller.js';
import authMiddleware from "../../helper/jwt_auth/jwt_middleware.js";
import {validator} from './../../helper/validaction/validaction.js'
import { errorMiddleware } from '../../helper/validaction/validaction_middleware.js';
const Route = express.Router;

const eventRoute = Route()

eventRoute.post('/create',validator("createEvent"),errorMiddleware,authMiddleware,create)
eventRoute.post('/update',validator("updateEvent"),errorMiddleware,authMiddleware,update)
eventRoute.delete('/deleteEvent/:id',authMiddleware,deleteEvent)
eventRoute.post('/list',authMiddleware,list)


export default eventRoute;