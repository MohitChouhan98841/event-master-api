import eventModle from "../../model/event_model.js";
import { EventResponse } from "../../response/event_response.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const create=async(req,res)=>{
    try {
        const {title,description,venu,capacity,ticketPrice,images,startDateTime,categoryId} = req.body;
        const eventObj = eventModle({
            title:title,
            description:description,
            venu:venu,
            capacity,
            ticketPrice,
            images:images??[],
            startDateTime,
            categoryId,
            userId: req.user.user_id
        })

        const eventData = await eventObj.save();
        if(eventData){

            return res.status(201).send(
                {
                    status:true,
                    message:"Event created successfully",
                    data: new EventResponse(eventData),
                }
            )
        }
        return res.status(500).send(
            {
                status:true,
                message:"Faild to create event"
            }
        )
    } catch (error) {
        return res.status(500).send({
            status:false,
            message:error.message
        })
    }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const list=async (req,res)=>{
    try {
        const {} = req.body;
        const findEvent = await eventModle.find({userId:req.user.user_id});
        if(!findEvent){
            return res.send(404).send(
                {
                    status:false,
                    message:"Event not found"
                }
            )
        }

        const list =[];
        for(const i in findEvent){
            const event = findEvent[i];
            list.push(new EventResponse(event));
        }
        res.status(200).send({
            status:true,
            message:"Event fetch succesfully",
            // data2:findEvent,
            data:list
        })

    } catch (error) {
        return res.status(500).send({
            status:false,
            message:error.message
        })
    }
}
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const deleteEvent=async (req,res)=>{
    try {
        const id= req.params.id;
        const findEvent = await eventModle.findOne({
            _id:id,
        })
        if(!findEvent){
          return  res.status(404).send({
                status:false,
                message:"Event not found"
            })
        }
        if(req.user.user_id!=findEvent.userId){
            return res.status(401).send({
                status:true,
                message:"Your not authorize to delete this event"
            })
        }
        await findEvent.delete();
        return res.status(200).send({
            status:true,
            message:"Event deleted succsfully"
        })
    } catch (error) {
        return res.status(500).send(
            {
                status:false,
                message:error.message
            }
        )
    }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const update=async(req,res)=>{
    try {
        const {title,description,venu,capacity,ticketPrice,images,startDateTime,categoryId,eventID} = req.body;
        const findEvent = await eventModle.findOne({_id:eventID});
        if(!findEvent){
            return res.status(404).send({
                status:false,
                message:"Event not found"
            })
        }
        if(req.user.user_id!=findEvent.userId){
            return res.send(401).send({
                status:true,
                message:"Your not authorize to update this event"
            })
        }
        
        const eventObj = await eventModle.findOneAndUpdate({_id:eventID},{
            title:title,
            description:description,
            venu:venu,
            capacity,
            ticketPrice,
            images:images??[],
            startDateTime,
            categoryId
        })

        // const eventData = await eventObj.save();
        if(eventData){

            return res.status(201).send(
                {
                    status:true,
                    message:"Event updated successfully",
                    data: new EventResponse(eventData),
                }
            )
        }
        return res.status(500).send(
            {
                status:true,
                message:"Faild to create event"
            }
        )
    } catch (error) {
        return res.status(500).send({
            status:false,
            message:error.message
        })
    }
}