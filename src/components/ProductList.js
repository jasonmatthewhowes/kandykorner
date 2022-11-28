import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

//don't think this is needed, inserting permission in navbar
const localKandyUser = localStorage.getItem("kandy_user");

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFiltered] = useState([])
  const [topPriced, setTopPriced] = useState(false)
  const [productTypes, setProductTypes] = useState ([])  

  //fetchs datafrom API loads initial products on mount
    
  useEffect(() => {
    fetch(`http://localhost:8088/products
    `)
      .then((res) => res.json())
      .then((productsArray) => {
        setProducts(productsArray);
        setTopPriced(false)
        setFiltered(productsArray)
      });
  }, []);




  useEffect(() => {
    if(topPriced === true) {
        const topPricedCandy = products.filter (product => product.price > 2)
        setFiltered(topPricedCandy)
    }
    else {setFiltered(products)
    }
  }, [topPriced]
  )
console.log(filteredProducts)
  return (
    <>
      <h2>Product List</h2>
      <button onClick={() => {setTopPriced(true)}}>Top Priced </button> 
      <button onClick={() => {setTopPriced(false)}}>Show All</button>
      <ul>
        {filteredProducts.sort((a,b)=> a.name > b.name ? 1 : -1)
        .map((product) => {
          return <li className="product">{product.name} • $ {product.price} • {product.type} </li>;
        })}
      </ul>
    </>
  );
};
