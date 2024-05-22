import { Request, Response } from "express";
import { orderServices } from "./order.service";
import { createOrderSchema } from "./order.validation.joi";
import mongoose from "mongoose";
import { Product } from "../products/product.model";
import { Order } from "./order.model";



const createOrder = async(req : Request , res : Response) => {
    // const orderData = req.body;
    // const result = await orderServices.createOrder(orderData);
    // res.json({
    //     sucess : true,
    //     message : "Orders created successfully!",
    //     data : result
    // })

    try{
        const {error} = createOrderSchema.validate(req.body)
        if(error){
            return res.status(400).json({
                success : false,
                message : "Order Validation error",
                details : error.details

            });
        }
        const {email , productId , price , quantity} = req.body;
        if(!mongoose.Types.ObjectId.isValid(productId)){
            return res.status(404).json({
                success : false,
                message : `product not found ${productId}`
            });
        }

        const product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({
                success : false,
                message : `product not found`
            });
        }

        if(quantity > product.inventory.quantity){
            return res.status(400).json({
                success : false,
                message : "Insufficient quantity available in inventory"
            });
        }

        const newOrder = new Order({
            email , productId , price , quantity
        })

        product.inventory.quantity -= quantity;
        if(product.inventory.quantity === 0){
            product.inventory.inStock = false;
        }
        await product.save();
        const savedOrder = await newOrder.save();
        const savedOrderObject = savedOrder.toObject();
        delete savedOrderObject._id;
        delete savedOrderObject.__v;

      res.status(201).json({
        success: true,
        message: 'Order created successfully!',
        data: savedOrder,
      });




    }catch(err : any){
        if (err.name === 'CastError' && err.kind === 'ObjectId') {
            return res.status(404).json({
              success: false,
              message: 'Product not found',
            });

            
          }
        }

    


   
}


export const orderControllers = {
    createOrder

}