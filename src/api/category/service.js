import categoryModel from "../../model/category.js"

export const getCategryById=async (id)=>{
  const cetegoryData = await categoryModel.findOne({
    _id:id
  })
  return cetegoryData;
}

export const getCategryList=async ()=>{
  const cetegoryData = await categoryModel.find({
    isActive:true
  })
  return cetegoryData;
}