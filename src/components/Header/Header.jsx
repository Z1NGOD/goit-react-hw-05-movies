import React from 'react'
import { Paragraph,HeaderEl } from 'ui/everyUi.styled';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <HeaderEl>
        <NavLink to="/">
          <Paragraph>Home</Paragraph>
        </NavLink>
        <NavLink to="/movies">
          <Paragraph>Movies</Paragraph>
        </NavLink>
      </HeaderEl>
    </div>
  );
}

export default Header

