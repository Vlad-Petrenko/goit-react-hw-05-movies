import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { fetchMovies } from 'services/movies-api';
import { Nav } from 'components/Nav/Nav';

export const Home = () => {
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Nav />

      <div>Home</div>
      <Outlet />
    </>
  );
};
