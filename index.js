import express from "express"
import http from "http"
import { conntectToDB } from "./src/helper/common/db.js";
import userRoute from "./src/api/user/index.js";
import { errorMiddleware } from "./src/helper/validaction/validaction_middleware.js";
conntectToDB()
const app = express();
app.use(express.json({limit:"200mb"}))

app.get("/",(req,res)=>{
    res.send("Server is Runnin ....")
})

app.use("/user",userRoute)
// app.use("/user",errorMiddleware,userRoute)

const PORT = process.env.PORT || 9001

http.createServer(app).listen(PORT,()=>{
    console.log("Server is running on ",PORT);
})
