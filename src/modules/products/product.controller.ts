import { Request, Response } from "express";
import { productServices } from "./product.services";

import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async(req : Request , res : Response) => {
    const productData = req.body;
    const result = await productServices.createProduct(productData);
    res.json({
        sucess : true,
        message : "Product created successfully!",
        data : result
    })


   
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

//Update Product

const updateProductById = async(req : Request , res : Response) => {
    try{
        
        const productId = req.params.productId;
        const updatedProduct: Partial<TProduct> = req.body;

        

        const result = await productServices.updateProductById(productId , updatedProduct);
        

        res.status(200).json({
            success : true,
            messgae : "Product updated successfully!",
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


//product Delete

const deleteProductById = async(req : Request , res : Response) => {
    try{
        
        const productId = req.params.productId;
        const result = await productServices.deleteProductById(productId);
        

        res.status(200).json({
            success : true,
            messgae : "Product deleted successfully!",
            data : null
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
    getSpecificProduct,
    updateProductById,
    deleteProductById,
    
}