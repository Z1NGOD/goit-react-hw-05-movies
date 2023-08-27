import { getMovieReviews } from 'Api/Movie';
import { UseGlobalContext } from 'Context/stateContext';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {
  CommentContainer,
  CommentatorName,
  CommentatorComment,
  List,
  ListItem,
} from 'ui/everyUi.styled';

function Reviews() {
  const { movie_id } = useParams();
  const { movieReviews, setMovieReviews } = UseGlobalContext();
  const reviewsData = useMemo(
    () => getMovieReviews({ id: movie_id }),
    [movie_id]
  );

  useEffect(() => {
    if (!movie_id) return;

    async function fetchData() {
      try {
        const reviews = await reviewsData;
        setMovieReviews(reviews.results);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    }

    fetchData();
  }, [reviewsData, movie_id, setMovieReviews]);

  if (!Array.isArray(movieReviews)) {
    return null;
  }

  return (
    <List>
      {movieReviews.length === 0 ? (
        <ListItem>
          <p>No reviews available for this movie.</p>
        </ListItem>
      ) : (
        movieReviews.map(item => (
          <ListItem key={item.id}>
            <CommentContainer>
              <CommentatorName>Author: {item.author}</CommentatorName>
              <CommentatorComment>Commented: {item.content}</CommentatorComment>
            </CommentContainer>
          </ListItem>
        ))
      )}
    </List>
  );
}

export default Reviews;
