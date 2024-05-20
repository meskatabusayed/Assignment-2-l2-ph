import { Schema } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";


const tVarientSchema = new Schema<TVariant>({
    type : {type : String , require : true},
    value : {type : String , require : true}

})

const tInventory = new Schema<TInventory>({
    quantity : {type : Number , require : true},
    inStock : {type : Boolean , require : true },


})

const tProduct = new Schema<TProduct>({
    name : {type : String , require : true},
    

})