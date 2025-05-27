import express from "express";
import {login, registerUser,forgetPassword,changePassword} from "./controller.js"
import authMiddleware from "../../helper/jwt_auth/jwt_middleware.js"

const Route = express.Router;

const userRoute = Route()

userRoute.get('/',(req,res)=>{
res.send("user route....")
})
userRoute.post('/login',login)
userRoute.post('/register',registerUser)
userRoute.post('/forgetPassword',forgetPassword)
userRoute.post('/changePassword',authMiddleware,changePassword)

export default userRoute;