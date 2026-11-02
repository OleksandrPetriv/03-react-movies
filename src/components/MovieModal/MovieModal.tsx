import type { Movie } from "../../types/Movie";
import css from "./MovieModal.module.css";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

function MovieModal({ movie, onClose }: MovieModalProps) {
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div
        className={css.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className={css.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <img
          className={css.image}
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title}
        />

        <div className={css.content}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;