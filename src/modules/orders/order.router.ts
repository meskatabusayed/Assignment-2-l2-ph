import express, { Request, Response } from 'express';
import { orderControllers } from './order.controller';
import { TOrder } from './order.interface';
import { Order } from './order.model';
const router = express.Router();

router.post('/' , orderControllers.createOrder);

router.get('/', async (req: Request, res: Response) => {
    try {
      const email = req.query.email as string;
      let products: TOrder[];
      
  
      if (email) {
        products = await Order.find({ email: { $regex: email, $options: 'i' } },
        );
        res.status(200).json({
            success : true ,
            message : "Orders fetched successfully for user email!",
            data : products
          });

      }else {
        products = await Order.find();
        res.status(200).json({
                        success : true,
                        messgae : "Orders fetched successfully!",
                        data : products
                    })
      }
  
      
    } catch (error : any) {
      res.status(500).json({ 
        
            success : false,
            message : "Could not fached order",
            error : error

       });
    }
  });



export const orderRouter = router;