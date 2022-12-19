import { useEffect } from "react";
import { useState } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const data = await fetch(baseUrl + url);

        if (data.ok) {
          const json = await data.json();
              setData(json);
        } else {
          throw data;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
}
