import express, { Request, Response } from 'express';
import { productControllers } from './product.controller';

const router = express.Router();

router.post('/' , productControllers.createProduct)




export const productsRouter = router;