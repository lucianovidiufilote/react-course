import {useEffect, useState} from "react";

export default function useFetch(fetchFn, initialValue) {
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }
      
      setIsFetching(false);
    }
    
    fetchData();
  }, [fetchFn]);
  
  return {
    fetchedData,
    setFetchedData,
    isFetching,
    error,
  }
}