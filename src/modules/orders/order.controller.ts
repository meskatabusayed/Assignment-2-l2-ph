import { Request, Response } from "express";
import { orderServices } from "./order.service";



const createOrder = async(req : Request , res : Response) => {
    const orderData = req.body;
    const result = await orderServices.createOrder(orderData);
    res.json({
        sucess : true,
        message : "Orders created successfully!",
        data : result
    })


   
}


export const orderControllers = {
    createOrder

}