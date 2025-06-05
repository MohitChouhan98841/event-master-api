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
    case "createEvent":{
        return [
            requriedValidaction("title","title is requried"),
            requriedValidaction("categoryId","category is requried"),
            requriedValidaction("startDateTime","startDateTime is requried"),
            requriedValidaction("venue","venue is requried"),
            requriedValidaction("capacity","capacity is requried"),
            requriedValidaction("ticketPrice","ticketPrice is requried"),
        ]
    }
    case "updateEvent":{
        return [
            requriedValidaction("eventId","eventId is requried")
            // requriedValidaction("title","title is requried"),
            // requriedValidaction("categoryId","category is requried"),
            // requriedValidaction("startDateTime","startDateTime is requried"),
            // requriedValidaction("venue","venue is requried"),
            // requriedValidaction("capacity","capacity is requried"),
            // requriedValidaction("ticketPrice","ticketPrice is requried"),
        ]
    }
    default:
        return "Something went wrong in validaction"
}
}