import { TOrder } from "./order.interface";
import { Order } from "./order.model";


const createOrder = async (payLoad: TOrder) => {
    const result = await Order.create(payLoad);
    return result;
}

export const orderServices = {
    createOrder,
    


}