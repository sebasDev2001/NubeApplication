import pool from '../DB/dbconnection'
import React, {useState} from 'react';

/*

async function getProductDao(id) {
    if( id == null) {
      id=1
    }
    const [characters] = await pool.query(`SELECT * FROM products WHERE product_id = ${id}`)
    return characters
    
  }

async function randomProductDao() {
    /*const [rows] = await pool.query(
        "SELECT COUNT(*) as totalProd FROM products"
    )
    const { totalCharacters } = rows[0]
    const randomId = getRandomInt(totalCharacters)
    return randomId

    const [rows, setRows] = useState([])

    pool.query(('SELECT COUNT(*) as totalProd FROM products'), (err, result) => {
        if (err) {
          console.log(err)
        }
        setRows(JSON.stringify(result))
    })

    return rows;
}



async function getAllProductsDao() {
    const [data, setData] = useState([])
    const [characters] = await pool.query("SELECT * FROM products")
    console.log(characters)
    return characters
}

function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * (max-1))
}

export default {getAllProductsDao}

*/