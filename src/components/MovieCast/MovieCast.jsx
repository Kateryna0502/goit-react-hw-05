import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../service/api.jsx";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

const MovieCast = () => {
const { movieId } = useParams();
const [movieCast, setMovieCast] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
    
  useEffect(() => {
    const movieCastStars = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchMovieCredits(movieId);
        setMovieCast(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    movieCastStars();
  }, [movieId]);

  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  if (movieCast.length === 0) {
    return <p>Something went wrong...</p>;
  } else {
    return (
      <>
        <ul className={css.list}>
          {movieCast.map(({ id, name, profile_path }) => {
            if (profile_path) {
              return (
                <li key={id} className={css.item}>
                  <img
                    src={baseUrl + profile_path}
                    alt={name}
                    className={css.img}
                  />
                  <p className="text"> {name}</p>
                </li>
              );
            }
          })}
        </ul>
        {isLoading && <Loader />}
        {error && <h2>Something went wrong ...</h2>}
      </>
    );
  }
};

export default MovieCast;