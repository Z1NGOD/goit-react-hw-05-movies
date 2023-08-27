import PropTypes from 'prop-types';
import { List, ListItem, NewFeature, StyledNavLink } from 'ui/everyUi.styled';
import { UseGlobalContext } from 'Context/stateContext';

function Home() {
  const { movies } = UseGlobalContext();

  return (
    <List>
      {movies.map(item => (
        <StyledNavLink to={`/movies/${item.id}`} key={item.id}>
          <ListItem>
            <NewFeature>{item.title}</NewFeature>
          </ListItem>
        </StyledNavLink>
      ))}
    </List>
  );
}

Home.propTypes = {};

export default Home;
