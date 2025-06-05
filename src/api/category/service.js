import categoryModel from "../../model/category.js"

export const getCategryById=async (id)=>{
  const categoryData = await categoryModel.findOne({
    _id:id
  })
  return categoryData;
}

export const getCategryList=async ()=>{
  const categoryData = await categoryModel.find({
    isActive:true
  })
  return categoryData;
}