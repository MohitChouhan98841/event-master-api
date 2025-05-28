import { CategoryResponse } from '../../response/category_response.js';
import categoryModel from './../../model/category.js'
import { getCategryById, getCategryList } from './service.js';

export const create = async (req,res)=>{
    try {
        const {name} = req.body;
        const cetegoryObj = new categoryModel({
            name:name.toLowerCase()
        })
        const cetegoryData = await cetegoryObj.save();
        if(!cetegoryData){
            return res.status(500).send({
                status: false,
                message: "Faild to create category"
            })
        }
        return res.status(200).send({
            status: true,
            message: "category created successfully",
            data:new CategoryResponse(cetegoryData)
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
} 

export const update = async (req,res)=>{
    try {
        const {name,id} = req.body;
        const cetegoryData = await getCategryById(id);
        if(!cetegoryData){
            return res.status(500).send({
                status: false,
                message: "category not found"
            })
        }
        cetegoryData.name= name.toLowerCase();
        await cetegoryData.save()
        return res.status(200).send({
            status: true,
            message: "category update successfully",
            data:new CategoryResponse(cetegoryData),
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
} 

export const remove = async (req,res)=>{
    try {
        const {id} = req.body;
        const cetegoryData = await getCategryById(id);
        if(!cetegoryData){
            return res.status(500).send({
                status: false,
                message: "category not found"
            })
        }
        cetegoryData.isActive=false;
        await cetegoryData.save()
        return res.status(200).send({
            status: true,
            message: "category remove successfully"
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Faild to create category"
        })
    }
} 

export const list = async (req,res)=>{
    try {
        const categoryData = await getCategryList();
        if(!categoryData){
            return res.status(500).send({
                status: false,
                message: "category not found"
            })
        }
        var list=[];
        for (var key in categoryData) {
           var item = categoryData[key];
            console.log(item)
            list.push(new CategoryResponse(item))
        }

        return res.status(200).send({
            status: true,
            message: "category list fetch successfully",
            data: list
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
} 