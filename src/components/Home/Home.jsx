import { List, ListItem, NewFeature, StyledNavLink } from 'ui/everyUi.styled';
import { UseGlobalContext } from 'Context/stateContext';

function Home() {
  const { movies, location } = UseGlobalContext();

  return (
    <List>
      {movies.map(item => (
        <StyledNavLink to={`/movies/${item.id}`} key={item.id} state={{from: location.pathname}}>
          <ListItem>
            <NewFeature>{item.title}</NewFeature>
          </ListItem>
        </StyledNavLink>
      ))}
    </List>
  );
}

export default Home;
