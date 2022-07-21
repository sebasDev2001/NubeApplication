
import { Router } from 'express';
//import controller from '../DM/products.controller'
import pool from '../DB/dbconnection'



const allProductsRouter = Router();

allProductsRouter.get('/products', (req , res) =>{
    pool.query("SELECT * FROM products", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.json(result)
    })})


export default allProductsRouter;
