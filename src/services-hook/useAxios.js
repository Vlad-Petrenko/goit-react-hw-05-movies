import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { BASE_URL, API_KEY } from 'variebles/variables';

export const useAxios = (midleLine, query = null) => {
  const [movies, setMovies] = useState({});
  const isMounted = useRef(false);
  const options = {
    params: {
      api_key: API_KEY,
      query,
    },
  };

  const getMovies = async () => {
    const { data } = await axios.get(BASE_URL + midleLine, options);
    setMovies(data);
    console.log(data);
  };

  useEffect(() => {
    if (isMounted.current) {
      getMovies(movies);
    } else {
      isMounted.current = true;
    }
    getMovies();
  }, [midleLine, query]);

  return movies;
};
