
import { Router } from 'express';
import getProduct from '../DM/products.controller';


const getProductRouter = Router();

  
getProductRouter.get('/:id', getProduct.getProduct);

export default getProductRouter

