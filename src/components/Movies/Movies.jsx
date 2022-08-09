import { useState } from 'react';
import { toast } from 'react-toastify';

import { Nav } from 'components/Nav/Nav';
import { useAxios } from 'services-hook/useAxios';
import { pathParams } from 'variebles/variables';

export const Movies = () => {
  const [inputQuery, setInputQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleNameChange = event => {
    setInputQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputQuery === '') {
      return toast.warn('Enter something, please');
    }
    setSearchQuery(inputQuery);
  };

  const { results } = useAxios(pathParams.SEARCH_MOVIES, searchQuery);

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          id="pair-text"
          placeholder="Enter the name of the movie"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
