import { validationResult } from "express-validator";
import { clubAllRequriedFeild } from "./validaction_helpwe.js";

export const errorMiddleware=(req,res,next)=>{
        //use validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send({
                status: false,
                message: clubAllRequriedFeild(errors.errors),
                // message: (errors.errors[0]["msg"]),
            })
        }else{
            next();
        }
}