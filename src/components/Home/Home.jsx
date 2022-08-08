// import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAxios } from 'services/movies-api';
import { Nav } from 'components/Nav/Nav';
import { MovieItem } from './Home.styled';

export const Home = () => {
  const { results: trendingMovies } = useAxios();

  if (!trendingMovies) {
    return;
  }

  console.log(trendingMovies);

  return (
    <>
      <Nav />

      <ul>
        {trendingMovies.map(({ title, id }) => (
          <li key={id}>
            <MovieItem to={'/'} key={id}>
              {title}
            </MovieItem>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
