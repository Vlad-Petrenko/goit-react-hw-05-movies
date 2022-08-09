import { useAxios } from 'services-hook/useAxios';
import { Nav } from 'components/Nav/Nav';
import { MovieItem } from './Home.styled';
import { pathParams } from '../../variebles/variables';

export const Home = () => {
  const { results: trendingMovies } = useAxios(pathParams.GET_TRENDING);

  if (!trendingMovies) {
    return;
  }

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
    </>
  );
};
