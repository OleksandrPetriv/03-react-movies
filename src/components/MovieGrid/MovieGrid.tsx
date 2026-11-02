import type { Movie } from "../../types/Movie";
import css from "./MovieGrid.module.css"
interface MovieGridProps {
    movies: Movie[];
    onSelect: (movie: Movie) => void;
}

function MovieGrid({ movies, onSelect}: MovieGridProps) {
    return (
    <ul className={css.grid}>
      {movies.map(movie => (
        <li key={movie.id} className={css.card}>
          <div
            className={css.movie}
            onClick={() => onSelect(movie)}
          >
            {movie.poster_path ? (
              <img
                className={css.image}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <div className={css.noPoster}>No poster available</div>
            )}

            <h2 className={css.title}>{movie.title}</h2>
            <p className={css.rating}>
               {movie.vote_average.toFixed(1)}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default MovieGrid;