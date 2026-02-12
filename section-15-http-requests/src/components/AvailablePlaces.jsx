import Places from './Places.jsx';
import {useEffect, useState} from "react";
import ErrorPage from './Error.jsx';
import {sortPlacesByDistance} from "../loc.js";
import {fetchAvailablePlaces} from '../http.js';

export default function AvailablePlaces({onSelectPlace}) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [availablePlaces, setAvailablePlaces] = useState([]);
  
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const sortedPlaces = sortPlacesByDistance(
              places,
              position.coords.latitude,
              position.coords.longitude
            );
            setAvailablePlaces(sortedPlaces);
            setIsFetching(false);
          });
      } catch (error) {
        setError({
          message: error.message || 'Could not fetch places.',
          ...error
        })
        setIsFetching(false);
      }
    }
    
    fetchPlaces();
  }, [])
  
  if (error) return <ErrorPage message={error.message}/>;
  
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
