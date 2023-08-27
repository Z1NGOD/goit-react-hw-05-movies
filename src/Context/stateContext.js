import { createContext, useContext, useState, useMemo } from 'react';
import { getTrendyMovies } from '../Api/Movie';
export const Context = createContext();

export function GlobalContext({ children }) {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCredits, setMovieCredits] = useState({});
  const [movieReviews, setMovieReviews] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const getAllTrendyMovies = async () => {
    const response = await getTrendyMovies();
    const trendyMovies = response.results;
    setMovies(prevMovies => [...prevMovies, ...trendyMovies]);
  };
  useMemo(() => getAllTrendyMovies(), []);

  return (
    <Context.Provider
      value={{
        movies,
        setMovies,
        movieDetails,
        setMovieDetails,
        movieCredits,
        setMovieCredits,
        movieReviews,
        setMovieReviews,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export function UseGlobalContext() {
  return useContext(Context);
}
