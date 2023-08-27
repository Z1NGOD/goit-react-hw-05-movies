import React, { useEffect, useMemo, Suspense } from 'react';
import { getMovieDetails } from 'Api/Movie.js';
import { Outlet, useParams } from 'react-router-dom';
import {
  Btn,
  Img,
  List,
  MainText,
  Paragraph,
  SecondaryText,
  StyledNavLink,
  UserScored,
} from 'ui/everyUi.styled';
import { UseGlobalContext } from 'Context/stateContext';

function calculatePercentage(score) {
  return Math.round((score / 10) * 100);
}

function MovieDetails() {
  const { movie_id } = useParams();
  const { movieDetails, setMovieDetails, location } = UseGlobalContext();

  const detailsData = useMemo(
    () => getMovieDetails({ id: movie_id }),
    [movie_id]
  );

  useEffect(() => {
    if (!movie_id) return;
    async function fetchData() {
      try {
        const details = await detailsData;
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    }

    fetchData();
  }, [detailsData, movie_id, setMovieDetails]);
  console.log(location.state.from)
  return (
    <>
      <StyledNavLink to={location.state.from ? location.state.from : '/'}>
        <Btn>Go back</Btn>
      </StyledNavLink>

      <Img
        src={
          movieDetails.poster_path ? (
            `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
          ) : (
            <div>No image</div>
          )
        }
        width={250}
      />
      <MainText>{movieDetails.original_title}</MainText>
      <UserScored score={calculatePercentage(movieDetails.vote_average)}>
        User Score: {calculatePercentage(movieDetails.vote_average)}%
      </UserScored>
      <SecondaryText>Overview: {movieDetails.overview}</SecondaryText>
      <List>
        Additional information:
        <StyledNavLink to="cast" state={{ from: location.state.from }}>
          <Paragraph>Cast:</Paragraph>
        </StyledNavLink>
        <StyledNavLink to="reviews" state={{from: location.state.from}}>
          <Paragraph>Reviews:</Paragraph>
        </StyledNavLink>
      </List>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
