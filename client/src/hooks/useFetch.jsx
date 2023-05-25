import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetchDataFromApi(endpoint);
      setData(res);
    };

    makeApiCall(); // Call the async function immediately inside useEffect

    // Cleanup function (optional)
    return () => {
      // Perform any cleanup here (if needed)
    };
  }, [endpoint]);

  return { data };
};

export default useFetch;



