import express, { Request, Response } from 'express';
import { productControllers } from './product.controller';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const router = express.Router();


router.post('/' , productControllers.createProduct);



router.get('/:productId' , productControllers.getSpecificProduct);
router.put('/:productId' , productControllers.updateProductById);
router.delete('/:productId' , productControllers.deleteProductById);

router.get('/', async (req: Request, res: Response) => {
    try {
      const searchTerm = req.query.searchTerm as string;
      let products: TProduct[];
  
      if (searchTerm) {
        products = await Product.find({ name: { $regex: searchTerm, $options: 'i' } },
        );
        res.status(200).json({
            success : true,
            message : `Products matching search term '${searchTerm}' fetched successfully!`,
            data : products
          });

      } else {
        products = await Product.find();
        res.status(200).json({
                        success : true,
                        messgae : "Products fetched successfully!",
                        data : products
                    })
      }
  
      
    } catch (error : any) {
      res.status(500).json({ 
        
            success : false,
            message : "Could not fached product",
            error : error

       });
    }
  });





export const productsRouter = router;