import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    const controller = new AbortController();

    async function fetchAPI(url) {
      try {
        setIsLoading(true);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        setResult(data);
        setIsLoading(false);
        setError("");
      } catch (error) {
        console.log("Fetch Error:", error.message);
        setError({ "Error During Fetch": error.message });
      }
    }
    fetchAPI(url);
    return () => controller.abort();
  }, [url]);

  return { result, isLoading, error };
};
