import React from "react";
import { useState } from "react";
import useFetch from "./services/UseFetch";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { Link } from 'react-router-dom';

export default function Products() {
  const [size, setSize] = useState("");
  const { category } = useParams();

  const {data,error,loading} = useFetch("products?category=" + category);

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <Link to={`/${category}/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </Link>
      </div>
    );
  }

  const filteredProducts = size
    ? data.filter((p) => p.skus.find((s) => s.size === parseInt(size)))
    : data;

  

  if(error) throw error;
  if(loading) return <Spinner />  
  if(data.length === 0) return <PageNotFound />

  return (
    <>

          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">All sizes</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </section>
          <section id="products">{filteredProducts.map(renderProduct)}</section>
       
    </>
  );
}
