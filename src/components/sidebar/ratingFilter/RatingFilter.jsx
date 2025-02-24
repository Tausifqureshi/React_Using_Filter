import Recat from "react";
import { useProductContext } from "../../Context API/ProductProvider";

function RatingFilter() {
  const { ratingFilter, setRatingFilter, data, setFilteredProducts } = useProductContext();
  
  return (
    <div>
      <h1>Rating</h1>
    </div>
  );
}

export default RatingFilter;
