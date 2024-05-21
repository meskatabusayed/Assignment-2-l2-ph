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

//get All Products

const getAllProducts = async(req : Request , res : Response) => {
    try{
        const result = await productServices.getAllProducts();

        res.status(200).json({
            success : true,
            messgae : "Products fetched successfully!",
            data : result
        })


    }catch(error : any){
        res.status(500).json({
            success : false,
            message : "Could not faced products",
            error : error
        })
    }
}


export const productControllers = {
    createProduct,
    getAllProducts
}