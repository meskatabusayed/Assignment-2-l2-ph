import { Schema, model, Document } from 'mongoose';
import { TOrder } from './order.interface';

interface OrderDocument extends TOrder, Document {}

const orderSchema = new Schema<OrderDocument>(
  {
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: false,
  },
);
export const Order = model<OrderDocument>('order', orderSchema);
