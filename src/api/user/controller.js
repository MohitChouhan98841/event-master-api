import userModel from "../../model/user.js"

export const registerUser = async(req,res)=>{
try {
   const {userName,email,password} = req.body;
   const userObj = userModel(
    {
        email:email,
        userName:userName,
        password:password,
    }
   )
   const userData =await userObj.save();
   if(userData){
    return res.status(200).send({
        status:true,
        message:"User created Succesfully",
        token:"token",
        data:userData
    })
   }
   res.status(500).send({
    status: false,
    message:"Faild to register user"
})

} catch (error) {
    res.status(500).send({
        status: false,
        message:error.message
    })
}
}


export const login = async(req,res)=>{
try {
    

} catch (error) {
    res.status(500).send({
        status: false,
        message:error.message
    })
}
}