import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="border-2 border-red-700 m-2 p-3 rounded-tr-3xl rounded-bl-3xl">
        <img src={movie.imageUrl} alt={movie.title} />
        <h2 className="font-bold">{movie.title}</h2>
        <p>Release Date: {movie.releasedate}</p>
        <p>Genre: {movie.genre}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
