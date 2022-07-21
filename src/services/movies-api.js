import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const MY_KEY = '24e4eab4087587f665387e2c9c3e66ad';

export const fetchMovies = () => {
  axios.get(`${BASE_URL}trending/movie/week?api_key=${MY_KEY}`);
  // .then(res => res.data);
};
