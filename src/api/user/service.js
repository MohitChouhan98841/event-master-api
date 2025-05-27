import userModel from "../../model/user.js"

export const getUserByEmail=async(email)=>{
  const user = userModel.findOne({
    email:email.toLowerCase()
  })
return user;
}

export const getUserById=async(id)=>{
  const user = userModel.findOne({
    _id:id
  })
return user;
}