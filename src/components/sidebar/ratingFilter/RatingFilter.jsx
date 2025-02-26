import Recat,{useMemo} from "react";
import { useProductContext } from "../../Context API/ProductProvider";

function RatingFilter() {
  const { ratingFilter, setRatingFilter, data, setFilteredProducts } =
    useProductContext();

  const ratingRanges = useMemo(
    () => [
      { label: "All Ratings", min: 0 },
      { label: "4★ & above", min: 4 },
      { label: "3★ & above", min: 3 },
      { label: "2★ & above", min: 2 },
      { label: "1★ & above", min: 1 },
    ],
    []
  );

  
  return (
    <div>
      <h1>Rating</h1>
      {ratingRanges.map((rating) => (
        <div key={rating.label}>
          <input
            type="checkbox" 
            id={rating.label}
            name="rating"
            value={rating.label}
            // checked={ratingFilter.includes(rating)}
          />
          {/* returnPolicy : "30 days return policy" reviews */}
          <label htmlFor={rating.label}>{rating.label}</label>
        </div>
      ))}
    </div>
  );
}

export default RatingFilter;
