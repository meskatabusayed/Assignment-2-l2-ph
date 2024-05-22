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

app.all("*" , (req : Request , res : Response) => {
  res.status(400).json({
    success : false,
    message : "Route not find"
  })
})

export default app;