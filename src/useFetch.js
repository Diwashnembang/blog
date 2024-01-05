import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    const fetchdata = async () => {
      try {
        const response = await fetch(url, { signal: abortController.signal });
        if (!response.ok) throw Error("server status not ok");
        const result = await response.json();
        if (result) setError(null);
        setBlog(result);
        setIsLoading(false);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(e.message);
          setIsLoading(false);
        }
      }
    };
    fetchdata();
    return () => {
      abortController.abort();
    };
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
