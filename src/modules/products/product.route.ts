import express, { Request, Response } from 'express';
import { productControllers } from './product.controller';

const router = express.Router();

router.post('/' , productControllers.createProduct);
router.get('/' , productControllers.getAllProducts);
router.get('/:productId' , productControllers.getSpecificProduct);




export const productsRouter = router;