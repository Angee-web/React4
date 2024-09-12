
import MovieCard from "./MovieCard";  

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-2">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
