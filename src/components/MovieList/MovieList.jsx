import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.list}>
        {movies.map(({ id, title }) => {
          return (
            <li className={css.li} key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                <h3 className={css.title}> {title}</h3>
              </Link>
            </li >
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;