import { useState, useEffect } from "react";

const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const abortCont = new AbortController();

      setTimeout(() => {
         fetch(url)
            .then((res) => {
               if (!res.ok) {
                  throw Error("Unable to fetch data");
               }
               return res.json();
            })
            .then((data) => {
               setData(data);
               setIsPending(false);
               setError(null);
            })
            .catch((err) => {
               if (err.name === "AbortError") {
                  console.log("Fetching data has been aborted");
               } else {
                  setError(err.message);
                  setIsPending(false);
               }
            });
      }, 4000);

      return () => abortCont.abort();
   }, [url]);

   return { data, isPending, error };
};

export default useFetch;
