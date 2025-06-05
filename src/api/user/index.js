import express from "express";
import {login, registerUser,forgetPassword,changePassword} from "./controller.js"
import authMiddleware from "../../helper/jwt_auth/jwt_middleware.js"
import { validator } from "../../helper/validaction/validaction.js";
import { errorMiddleware } from "../../helper/validaction/validaction_middleware.js";

const Route = express.Router;

const userRoute = Route()

userRoute.get('/',(req,res)=>{
res.send("user route....")
})
userRoute.post('/login',validator("userLoginValidaction"),errorMiddleware,login)
userRoute.post('/register',validator("userRegisterValidaction"),errorMiddleware,registerUser)
userRoute.post('/forgetPassword',validator("forgetPasswordValidaction"),errorMiddleware,forgetPassword)
userRoute.patch('/changePassword',authMiddleware,validator("changePasswordValidaction"),errorMiddleware,changePassword)

export default userRoute;