
import { useState } from "react";

const Filter = ({ onFilter }) => {
    // Define the state variables for the title and rating
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

//   Define the event handlers for the title and rating inputs update 
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

//   Define the event handler for the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onFilter prop with the title and rating values
    onFilter({ title, rating: 
        // Convert the rating to a number or an empty string
    rating ? parseFloat(rating) : "" });
  };

  return (
    <form onSubmit={handleSubmit} className="font-bold">
      <div className="mb-2">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          className="border-2 border-black ml-2 p-2"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={handleRatingChange}
          min="0"
          max="10"
          className="border-2 border-black ml-2 p-1"
          required
        />
      </div>
      <button
        type="submit"
        className="border-2 border-red-600 rounded-lg px-4 m-4"
      >
        Filter
      </button>
    </form>
  );
};

export default Filter;
