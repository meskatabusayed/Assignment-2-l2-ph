import { Request, Response } from "express";
import { productServices } from "./product.services";

const createProduct = async(req : Request , res : Response) => {
    const productData = req.body;
    const result = await productServices.createProduct(productData);
    res.json({
        sucess : true,
        message : "Product created successfully!",
        data : result
    })


   
}

export const productControllers = {
    createProduct,
}