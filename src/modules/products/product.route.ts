import express, { Request, Response } from 'express';
import { productControllers } from './product.controller';

const router = express.Router();

router.post('/' , productControllers.createProduct);
router.get('/' , productControllers.getAllProducts);




export const productsRouter = router;