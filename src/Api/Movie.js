export const getMovies = async () => {
  try {
    const response = fetch();

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const movies = await response.json();
    return movies;
  } catch (error) {
    console.log(error.message);
  }
};
