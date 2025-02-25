import Recat from "react";
import { useProductContext } from "../../Context API/ProductProvider";

function RatingFilter() {
  const { ratingFilter, setRatingFilter, data, setFilteredProducts } =
    useProductContext();

  const ratingFilterMap = [...new Set(data.map((item) => item.rating))];

  return (
    <div>
      <h1>Rating</h1>
      {ratingFilterMap.map((rating) => (
        <div key={rating}>
          <input
            type="checkbox"
            id={rating}
            name="rating"
            value={rating}
            // checked={ratingFilter.includes(rating)}
          />
          {/* returnPolicy : "30 days return policy" reviews */}
          <label htmlFor={rating}>{rating}</label>
        </div>
      ))}
    </div>
  );
}

export default RatingFilter;
