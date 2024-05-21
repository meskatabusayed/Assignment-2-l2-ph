import express, { Request, Response } from 'express';
import { productsRouter } from './modules/products/product.route';
const app = express()
//parser
app.use(express.json())


app.use("/api/products" , productsRouter);

app.get('/', (req : Request , res : Response) => {
  res.send('Hello World!')
})

export default app;