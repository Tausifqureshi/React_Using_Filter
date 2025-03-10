import React, { useState } from "react";
import { useProductContext } from "../Context API/ProductProvider";

function Dynamic() {
  const { data, setFilteredProducts } = useProductContext();
  const [dynamicRating, setDynamicRating] = useState([]);
  const dynamicFilter = data.flatMap((item) => item.reviews.map((review) => review.rating));  
//   const dynamicFilter = data.flatMap((item) => item.reviews);  
  return (
    <div>
      <h1>Dynamic</h1>

      {dynamicFilter.map((review, index) => (
        <div key={index}>
          {/* <h4>{review.date}</h4> */}
          <p>Rating: {review}</p>
          {/* <p>Rating: {review.rating}</p> */}
          {/* <p>Comment: {review.comment}</p>
          <p>Reviewer: {review.reviewerName}</p> */}
        </div>
      ))}
    </div>
  );
}

export default Dynamic;

// Error Create this components 
// Objects are not valid as a React child (found: object with keys {rating, comment, date, reviewerName, reviewerEmail}). If you meant to render a collection of children, use an array instead.Objects are not valid as a React child (found: object with keys {rating, comment, date, reviewerName, reviewerEmail}). If you meant to render a collection of children, use an array instead.