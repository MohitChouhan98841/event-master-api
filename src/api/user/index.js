import express from "express";
import {login, registerUser} from "./controller.js"

const Route = express.Router;

const userRoute = Route()

userRoute.get('/',(req,res)=>{
res.send("user route....")
})
userRoute.post('/login',login)
userRoute.post('/register',registerUser)

export default userRoute;