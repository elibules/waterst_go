import { useEffect, useState } from "react";

const useXhr = (url, method) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let request = new XMLHttpRequest();

    request.open(method, url, true);

    request.timeout = 2000;

    request.onload = () => {
      setLoading(false);

      if (request.status === 200) {
        setData(JSON.parse(request.response));
      } else {
        console.log(request);
        setError(
          "Status: " + request.status + "; Error: " + request.statusText
        );
      }
    };

    request.ontimeout = () => {
      setLoading(false);
      setError("Error: The request has timed out.");
    };
  }, [url, method]);

  return { data, loading, error };
};

export default useXhr;
