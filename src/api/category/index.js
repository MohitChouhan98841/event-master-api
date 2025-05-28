import express from "express"
import authMiddleware from "../../helper/jwt_auth/jwt_middleware.js";
import { create, list, remove, update } from "./controller.js";

const Route = express.Router;

const categoryRoute = Route();

categoryRoute.post('/create',authMiddleware,create)
categoryRoute.post('/update',authMiddleware,update)
categoryRoute.post('/remove',authMiddleware,remove)
categoryRoute.post('/list',authMiddleware,list)

export default categoryRoute;
