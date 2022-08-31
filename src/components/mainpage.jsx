import React, {useEffect, useState} from "react";
import axios from "axios";

export default function MainPage (){

    const [products, setProducts] = useState([]);
//ec2-18-208-127-192.compute-1.amazonaws.com:5000/products
    useEffect(() => {
        const fetchData = async () => {
       /*    const result = await axios.get("http://localhost:5000/products", {headers: {'Access-Control-Allow-Origin': '*'}})
		.then((response) => {
			console.log(response);
            setProducts(response.data);
		})}*/
        
        await fetch('http://localhost:5000/products')
        .then(response => {
            response.json().then(data => {
                console.log(data)
                setProducts(data);
            })
        })
        
        console.log(products);
        }
        
        fetchData();
    }, []);
    
    return (
        <div>
          <h1 className="app-title">Productos</h1>
          {products.map((product, index) => {
              return (
                  <div className="product" key={index}>
                      <h3 className="producttitle">{product.product_name}</h3>
                      <p className="productdescription">{product.product_description}</p>
                  </div>
              );
          })}
        </div>
    );
}
