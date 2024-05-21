import { Request, Response } from "express";
import { productServices } from "./product.services";
import mongoose from "mongoose";

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

//getSpecificData

const getSpecificProduct = async(req : Request , res : Response) => {
    try{
        
        const {productId} = req.params;
        

        const result = await productServices.getSpecificProduct(productId);
        

        res.status(200).json({
            success : true,
            messgae : "Product fatched successfully!",
            data : result
        })


    }catch(error : any){
        res.status(500).json({
            success : false,
            message : "Could not fached product",
            error : error
        })
    }
}



export const productControllers = {
    createProduct,
    getAllProducts,
    getSpecificProduct
}