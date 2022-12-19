import { useEffect,useRef } from "react";
import { useState } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
  const isMounted = useRef(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isMounted.current = true;
    async function init() {
      try {
        const data = await fetch(baseUrl + url);

        if (data.ok) {
          const json = await data.json();
            if(isMounted.current) setData(json);
        } else {
          throw data;
        }
      } catch (e) {
        if(isMounted.current) setError(e);
      } finally {
        if(isMounted.current) setLoading(false);
      }
    }
    init();

    return () => {
      isMounted.current = false;
    }
  }, [url]);

  return {
    data,
    error,
    loading,
  };
}
