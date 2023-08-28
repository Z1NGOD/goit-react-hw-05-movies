import { useState, useEffect } from 'react';
import {
  Btn,
  Input,
  List,
  ListItem,
  NewFeature,
  StyledNavLink,
} from 'ui/everyUi.styled';
import { SearchMovies } from 'Api/Movie';
import { UseGlobalContext } from 'Context/stateContext';

function Movies() {
  const { searchParams, setSearchParams, location } = UseGlobalContext();
  const searchQuery = searchParams.get('query') || '';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem('searchedMovies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  const handleSearchSubmit = async e => {
    e.preventDefault();

    if (searchQuery === '') return;

    try {
      const searchedMovies = await SearchMovies({ query: searchQuery });
      setMovies(searchedMovies.results);
     
      localStorage.setItem(
        'searchedMovies',
        JSON.stringify(searchedMovies.results)
      );
    } catch (error) {
      console.error('Error fetching movie details:', error.message);
    }
  };

  const handleSearchChange = e => {
    const search = e.target.value;
    const normalizedSearch = search.toLowerCase().trim();
    normalizedSearch
      ? setSearchParams({ query: normalizedSearch })
      : setSearchParams({});
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <Input
          onChange={handleSearchChange}
          value={searchQuery}
          placeholder="Search your favorite movie"
          type="text"
          required
          autoFocus
        />
        <Btn type="submit">Search</Btn>
      </form>
      <List>
        {movies.map(item => (
          <StyledNavLink
            to={`/movies/${item.id}`}
            key={item.id}
            state={{ from: location.pathname }}
          >
            <ListItem>
              <NewFeature>{item.title}</NewFeature>
            </ListItem>
          </StyledNavLink>
        ))}
      </List>
    </>
  );
}

export default Movies;
