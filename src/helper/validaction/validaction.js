import {body} from "express-validator"

const requriedValidaction =(feild,message)=> body(feild,message).not().notEmpty();
const emailValidaction =()=> requriedValidaction("email","Email id is requried");

export const validator = (method)=>{
switch(method){
    case "userLoginValidaction":{
        return [
            emailValidaction(),
            requriedValidaction("password","Password is requried"),
        ]
    }
    case "userRegisterValidaction":{
        return [
            emailValidaction(),
            requriedValidaction("password","Password is requried"),
            requriedValidaction("userName","Password is requried"),
        ]
    }
    case "changePasswordValidaction":{
        return [
            requriedValidaction("password","Password is requried"),
            requriedValidaction("oldPassword","oldPassword is requried"),
        ]
    }
    case "forgetPasswordValidaction":{
        return [
            emailValidaction(),
        ]
    }
    default:
        return "Something went wrong in validaction"
}
}