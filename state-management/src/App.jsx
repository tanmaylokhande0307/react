import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { getProducts } from "./services/productService";
import Spinner from "./Spinner";

export default function App() {

  const [size,setSize] = useState("");
  const [products,setProducts] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    getProducts("shoes")
      .then((res) => setProducts(res))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  },[])

  const filteredProducts = size ? products.filter((p) => p.skus.find((s) => s.size === parseInt(size))) : products;
  // console.log(filteredProducts);  

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }

  if(error) throw error;
  if(loading) return <Spinner />

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="">All sizes</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            {size && <h2>{filteredProducts.length} items found</h2>}
          </section>
          <section id="products">
            {filteredProducts.map(renderProduct)}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
