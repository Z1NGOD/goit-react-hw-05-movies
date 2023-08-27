const API_KEY = '8aa290cf4e93aa12ee559682384ebf30';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWEyOTBjZjRlOTNhYTEyZWU1NTk2ODIzODRlYmYzMCIsInN1YiI6IjY0ZWE0NzhmYzVjMWVmMDBjNjUyM2E5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qx7igFj7yLqCnDnK4QpUSgQ3HMkvEVvG4HNpYYGyd4M',
  },
};
const getTrendyMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${API_KEY}`,
      options
    );

    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.log(error.message);
  }
};
const SearchMovies = async ({ query }) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );

    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.log(error.message);
  }
};
const getMovieDetails = async ({ id }) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${API_KEY}`,
      options
    );

    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.log(error.message);
  }
};
const getMovieCredits = async ({ id }) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${API_KEY}`,
      options
    );

    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.log(error.message);
  }
};
const getMovieReviews = async ({ id }) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1S&api_key=${API_KEY}`,
      options
    );

    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.log(error.message);
  }
};
export {
  getTrendyMovies,
  SearchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
