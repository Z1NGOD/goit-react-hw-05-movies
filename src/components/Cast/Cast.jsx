import { getMovieCredits } from 'Api/Movie';
import { UseGlobalContext } from 'Context/stateContext';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastImg,
  CastList,
  CastMemberName,
  ListItem,
} from 'ui/everyUi.styled';

const placeholderImageUrl = 'https://via.placeholder.com/150';

function Cast() {
  const { movie_id } = useParams();
  const { movieCredits, setMovieCredits } = UseGlobalContext();
  const creditsData = useMemo(
    () => getMovieCredits({ id: movie_id }),
    [movie_id]
  );

  useEffect(() => {
    if (!movie_id) return;

    async function fetchData() {
      try {
        const credits = await creditsData;
        setMovieCredits(credits.cast);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    }

    fetchData();
  }, [creditsData, movie_id, setMovieCredits]);

  if (!Array.isArray(movieCredits)) {
    return null;
  }

  return (
    <CastList>
      {movieCredits.map(item => (
        <ListItem key={item.id}>
          <CastImg
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                : placeholderImageUrl
            }
            alt=""
            width={40}
          />
          <CastMemberName>{item.name}</CastMemberName>
        </ListItem>
      ))}
    </CastList>
  );
}

export default Cast;
