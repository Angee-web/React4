import { useState } from "react";
import MovieList from "./pages/MovieList";
import Filter from "./pages/Filter";
import { moviesData } from "./utils/moviesData";

const App = () => {
  // State to manage the list of movies
  const [movies, setMovies] = useState(moviesData);
  // State to manage the filtered list of movies
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  // Function to handle the filtering of movies
  const handleFilter = ({ title, rating }) => {
    // Filter movies based on the title and rating criteria
    const filtered = movies.filter((movie) => {
      // Check if the movie title includes the filter title (case insensitive)
      const matchesTitle = movie.title
        .toLowerCase()
        .includes(title.toLowerCase());
      // Check if the movie rating meets or exceeds the filter rating, if provided
      const matchesRating = rating ? movie.rating >= rating : true;
      // Return true if both criteria are matched
      return matchesTitle && matchesRating;
    });
    // Update the filtered movies state
    setFilteredMovies(filtered);
  };

  // Function to add a new movie to the list
  const addMovie = (newMovie) => {
    setMovies((prevMovies) => {
      // Create a new list of movies including the new movie
      const updatedMovies = [...prevMovies, newMovie];
      // Update both the movies state and filtered movies state
      setFilteredMovies(updatedMovies);
      return updatedMovies;
    });
  };

  return (
    <div className="align-center justify-center p-10 gap-10 bg-slate-400 h-grow lg:flex">
      <div>
        <h1 className="font-bold text-2xl text-red-600 mb-10">Movie List</h1>
        {/* Filter component for filtering movies */}
        <Filter onFilter={handleFilter} />
      </div>

      <div>
        <button
          className="border-2 border-red-600 rounded-lg px-4 m-4"
          onClick={() =>
            addMovie({
              imageUrl: "https://example.com/images/new-movie.jpg",
              title: "New Movie",
              description: "A new movie",
              rating: 7.5,
            })
          }
        >
          Add Movie
        </button>
      </div>

      {/* MovieList component to display the filtered list of movies */}
      <MovieList movies={filteredMovies} />
      {/* Button to add a new movie with movie */}
    </div>
  );
};

export default App;
