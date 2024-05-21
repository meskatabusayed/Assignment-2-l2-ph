import { TProduct } from "./product.interface";
import { Product } from "./product.model";


const createProduct = async(payLoad : TProduct) => {
    const result = await Product.create(payLoad);
    return result;
}

//getAllProducts

const getAllProducts = async() => {
    const result =await  Product.find({isDelete : {$ne : true}});
    return result;
}

//get Specific data

const getSpecificProduct = async(_id : String) => {
    
    const result = await Product.findById({_id , isDelete : {$ne : true}});
    return result;
}

export const productServices = {
    createProduct,
    getAllProducts,
    getSpecificProduct,
}