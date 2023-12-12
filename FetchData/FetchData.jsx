import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const useFetchData = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [data, isLoading, error, fetchData];
};

const SimpleFetch = ({ url, debug, className, buttonText, data }) => {
  const [debugEnabled, setDebugEnabled] = useState(false);
  const [fetchedData, , error, refetchData] = useFetchData(url);

  useEffect(() => {
    if (debug) {
      setDebugEnabled(true);
    } else {
      setDebugEnabled(false);
    }
  }, [debug]);

  const fetchDataAgain = async () => {
    try {
      await refetchData();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={className}>
      {data.map((field, index) => (
        <p key={index} className={field}>
          {fetchedData[field]}
        </p>
      ))}
      {buttonText !== undefined ? (
        <button onClick={fetchDataAgain}>{buttonText}</button>
      ) : null}
      {debugEnabled ? console.log(fetchedData) : null}
    </div>
  );
};

export default SimpleFetch;

SimpleFetch.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  buttonText: PropTypes.string,
  debug: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.string),
};
