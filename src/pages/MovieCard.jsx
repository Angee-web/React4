
const MovieCard = ({ movie }) => {
  return (
    <div className="border-2 border-red-700 m-2 p-3 rounded-tr-3xl rounded-bl-3xl">
      <img src={movie.imageUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
