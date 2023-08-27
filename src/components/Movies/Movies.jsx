import { useState } from 'react';
import { Btn, Input, List, ListItem, NewFeature, StyledNavLink } from 'ui/everyUi.styled';
import { SearchMovies } from 'Api/Movie';
import { UseGlobalContext } from 'Context/stateContext';

function Movies() {
  const { searchParams, setSearchParams } = UseGlobalContext();
  const searchQuery = searchParams.get('query') || '';

  const [movies, setMovies] = useState([]);

  const handleSearchSubmit = async e => {
    e.preventDefault(); 

    if (searchQuery === '') return;

    try {
      const searchedMovies = await SearchMovies({ query: searchQuery });
      setMovies(searchedMovies.results);
    } catch (error) {
      console.error('Error fetching movie details:', error.message);
    }
  };

  const handleSearchChange = e => {
    const search = e.target.value;
    const normalizedSearch = search.toLowerCase().trim();
    setSearchParams({query:normalizedSearch});
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <Input
          onChange={handleSearchChange}
          value={searchQuery}
          placeholder="Search"
          type="text"
          required
        />
        <Btn type="submit">Search</Btn>
      </form>
      <List>
        {movies.map(item => (
          <StyledNavLink to={`/movies/${item.id}`} key={item.id}>
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
