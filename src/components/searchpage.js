import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  /*const fetchData = async () => {
    const result = await axios
      .get("http://localhost:5000/product/" + search, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response);
        setProduct(response.data);
      });
  };*/

  return (
    <div className="searchArea">
      <input
        type="text"
        placeholder="Buscar Producto"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button
        onClick={async () => {
          const result = await axios
            .get("http://localhost:5000/product/" + search, {
              headers: { "Access-Control-Allow-Origin": "*" },
            })
            .then((response) => {
              console.log(response);
              setProduct(response.data);
            });
        }}
      >
        Buscar
      </button>
      {product.map((product, index) => {
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
