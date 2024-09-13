import { Link, useParams } from "react-router-dom";
import { moviesData } from "../utils/moviesData";

const LinkDes = ({ movies }) => {
  const { id } = useParams();
  // Find the movie based on the ID from the URL
  const movie = movies.find((movie) => movie.id.toString() === id);

  // If the movie is not found, show a fallback message
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="flex align-center justify-center ">
      <div
        className="border-2 border-red-700 m-2 p-3 rounded-tr-3xl rounded-bl-3xl
        w-[500px]"
      >
        <video controls preload="auto" width="100%" className="mb-2">
          <source src={movie.trailer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2 className="font-bold">{movie.title}</h2>
        <p>
          <strong>Description:</strong> {movie.description}
        </p>
        <p>
          <strong>Release Date:</strong> {movie.releasedate}
        </p>
        <p>
          <strong>Genre:</strong> {movie.genre}
        </p>
        <p>
          <strong>Rating:</strong> {movie.rating}
        </p>

        <div className="m-5">
          <Link
            className="border-2 border-red-300 rounded-lg font-bold p-2"
            to="/"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LinkDes;
