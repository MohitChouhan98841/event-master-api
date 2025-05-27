import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


export const conntectToDB = async()=>{
    const url = process.env.MONGO_URI;
    if(!url){
        console.error("\n\n===>>>Error unable to connet to mongooes 'url is not define' \n\n")
        return;
    }
    mongoose.connect(
        url,
        (error) => {
            if (error) {
    
                console.error(`errror in DB connection ${error}`)
            }
            else { console.warn("mongo DB is connected with us") }
        }
    )
}