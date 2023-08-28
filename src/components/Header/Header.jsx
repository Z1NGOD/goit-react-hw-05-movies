import { UseGlobalContext } from 'Context/stateContext';
import {  HeaderEl, StyledNavLink, NewFeature, List } from 'ui/everyUi.styled';

function Header() {
  const { location } = UseGlobalContext();
  
  return (
    <HeaderEl>
      <List>
        <StyledNavLink to="/" state={{from: location.pathname}}>
          <NewFeature>Home</NewFeature>
        </StyledNavLink>
        <StyledNavLink to="/movies" state={{from: location.pathname}}>
          <NewFeature>Movies</NewFeature>
        </StyledNavLink>
      </List>
    </HeaderEl>
  );
}

export default Header;
