import React from 'react';
import {  HeaderEl, StyledNavLink, NewFeature, List } from 'ui/everyUi.styled';

function Header() {
  return (
    <HeaderEl>
      <List>
        <StyledNavLink to="/">
          <NewFeature>Home</NewFeature>
        </StyledNavLink>
        <StyledNavLink to="/movies">
          <NewFeature>Movies</NewFeature>
        </StyledNavLink>
      </List>
    </HeaderEl>
  );
}

export default Header;
