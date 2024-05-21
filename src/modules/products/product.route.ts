import express, { Request, Response } from 'express';
import { productControllers } from './product.controller';

const router = express.Router();


router.post('/' , productControllers.createProduct);
router.get('/' , productControllers.searchProduct);
router.get('/' , productControllers.getAllProducts);
router.get('/:productId' , productControllers.getSpecificProduct);
router.put('/:productId' , productControllers.updateProductById);
router.delete('/:productId' , productControllers.deleteProductById);





export const productsRouter = router;