import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";


const tOrder = new Schema<TOrder>({
    email : {type : String , require : true},
    productId : {type : String , require : true},
    price : {type : Number , require : true},
    quantity : {type : Number , require : true}


})
//export const Product = model<TProduct>("Product" , tProductSchema);
export const Order = model<TOrder>("order" , tOrder); 

