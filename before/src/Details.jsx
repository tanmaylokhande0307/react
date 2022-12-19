import React,{ useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import useFetch from "./services/UseFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";
import { useCart } from "./cartContext";

export default function Detail() {
  const { dispatch } = useCart();
  const { id } = useParams();  
  const navigate = useNavigate();
  const [skus,setSkus] = useState("");

  const {data,error,loading} = useFetch(`products/${id}`);
  if(loading) return <Spinner />
    if(!data) return <PageNotFound />
  if(error) throw error;

//   TODO: Display these products details

   const sku = data.skus;

  return (
    <div id="detail">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p id="price">${data.price}</p>
      <select
              id="size"
              value={skus}
              onChange={(e) => setSkus(e.target.value)}
            >
              <option value="">Size?</option>
              {sku.map((p) => <option key={p.sku} value={p.sku}>{p.size}</option> )}
              
            </select>
      <p>
        <button disabled={!skus} className="btn btn-primary" onClick={() => {
            dispatch({ type: "add", id, sku})
            navigate("/cart")
            }}>Add to cart</button>
      </p>
      <img src={`/images/${data.image}`} alt={data.category} />
    </div>
  );
}
  