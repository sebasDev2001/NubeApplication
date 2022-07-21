import { Router } from 'express';
import randomProduct from '../DM/products.controller';

const RadomProductRouter = Router();


RadomProductRouter.get('/random', randomProduct.radomProduct);    


export default RadomProductRouter;
