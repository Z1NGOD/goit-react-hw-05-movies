import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'ui/everyUi.styled';

function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default Layout;
