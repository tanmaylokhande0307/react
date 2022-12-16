import { useState, useEffect } from "react";
import { getProducts } from "./productService";

// const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function init(){
      try {
        const response = await getProducts("shoes")
          setData(response)
        
      } catch (error) {
        setError(error)
      }
      finally{
        setLoading(false)
      }
       
    }
    init();
  },[])

  return { data, error, loading };
}
