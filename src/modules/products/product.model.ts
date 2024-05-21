import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";


const tVarientSchema = new Schema<TVariant>({
    type : {type : String , require : true},
    value : {type : String , require : true}

})

const tInventorySachema = new Schema<TInventory>({
    quantity : {type : Number , require : true},
    inStock : {type : Boolean , require : true },


})

const tProductSchema = new Schema<TProduct>({
    name : {type : String , require : true},
    description : {type : String , require: true},
    price : {type : Number , require : true},
    category : {type : String , require : true},
    tags : {type : [String] , require : true },
    variants : {type : [tVarientSchema]},
    inventory : {type : tInventorySachema}

})

export const Product = model<TProduct>("Product" , tProductSchema);