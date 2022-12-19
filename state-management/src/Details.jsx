import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sku,setSku] = useState("");

  const { data, error, loading } = useFetch(`products/${id}`);

  if (loading) return <Spinner />;
  if (!data) return <PageNotFound />;
  if (error) throw error;

  // TODO: Display these products details

  return (
    <div id="detail">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p id="price">${data.price}</p>
      <select id="size" value={sku} onChange={(e) => setSku(e.target.value)}>
        <option value="">What size</option>
        {data.skus.map((s) => <option key={s.sku} value={s.sku}>{s.size}</option>)}
      </select>
      <p>
        <button disabled={!sku} className="btn btn-primary" onClick={() => navigate("/cart")}>
          Add to Cart
        </button>
      </p>
      <img src={`/images/${data.image}`} alt={data.category} />
    </div>
  );
}
