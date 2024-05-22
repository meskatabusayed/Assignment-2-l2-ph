import express, { Request, Response } from 'express';
import { productsRouter } from './modules/products/product.route';
import { orderRouter } from './modules/orders/order.router';
const app = express()
//parser
app.use(express.json())


app.use("/api/products" , productsRouter);
app.use("/api/orders" , orderRouter);


app.get('/', (req : Request , res : Response) => {
  res.send('Hello World!')
})

export default app;