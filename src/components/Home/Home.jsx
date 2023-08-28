import { List, ListItem, NewFeature, StyledNavLink } from 'ui/everyUi.styled';
import { UseGlobalContext } from 'Context/stateContext';
import { useEffect } from 'react';

function Home() {
  const { movies, location } = UseGlobalContext();
  useEffect(() => {
    localStorage.removeItem('searchedMovies');
  }, []);
  return (
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
  );
}

export default Home;
