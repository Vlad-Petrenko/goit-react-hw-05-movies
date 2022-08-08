import axios from 'axios';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '24e4eab4087587f665387e2c9c3e66ad';

export const useAxios = () => {
  const [movies, setMovies] = useState({});
  const getMovies = async () => {
    const { data } = await axios.get(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}`
    );
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return movies;
};
