
import { Router } from 'express';
//import controller from '../DM/products.controller'
import pool from '../DB/dbconnection'



const findProductRouter = Router();

findProductRouter.get('/product/:productName', (req , res) =>{
    const name = req.params.productName
    pool.query(`SELECT * FROM products where product_name like "%${name}%";`, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.json(result)
    })})


export default findProductRouter;
