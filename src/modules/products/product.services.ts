import { TProduct } from "./product.interface";
import { Product } from "./product.model";


const createProduct = async (payLoad: TProduct) => {
    const result = await Product.create(payLoad);
    return result;
}


const getSpecificProduct = async (_id: String) => {

    const result = await Product.findById({ _id, isDelete: { $ne: true } });
    return result;
}

//update Product By Id

const updateProductById = async (_id: String, updatedProduct: any) => {
    const result = await Product.findByIdAndUpdate( _id, updatedProduct, { new: true })
    return result;
}

//delete product

const deleteProductById = async (productId: String) => {
    const result = await Product.findByIdAndDelete(productId , { isDelete: { $ne: true } })
    return result;
}

//search product

// const searchTermProduct = async (searchTerm: String) => {
//     const results = await Product.find({
//         $or: [
//             { name: { $regex: searchTerm, $options: 'i' } },
//             { description: { $regex: searchTerm, $options: 'i' } }
//         ]
//     });

//     return results;
// }





export const productServices = {
    createProduct,
    getSpecificProduct,
    updateProductById,
    deleteProductById,
    

}