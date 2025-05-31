import jwt from "jsonwebtoken"
import dotenv  from "dotenv";
dotenv.config()

export const getUserToken = async (data)=>{
    const jwtSecretKey = process.env.JWT_SECRET
    const token = jwt.sign(data, jwtSecretKey);
    return token;
}


