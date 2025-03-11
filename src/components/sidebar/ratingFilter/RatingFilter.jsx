import React, { useMemo, useCallback } from "react";
import { useProductContext } from "../../Context API/ProductProvider";

function RatingFilter() {
  const { ratingFilter, setRatingFilter, data, setFilteredProducts } = useProductContext();

  // ⭐ Amazon-style rating filter ranges
  const ratingRanges = useMemo(() => [
    { label: "4★ & above", min: 4 },
    { label: "3★ & above", min: 3 },
    { label: "2★ & above", min: 2 },   
    { label: "1★ & above", min: 1 },
  ], []);
                
         
  // Handle click-based selection (Amazon-style)
  const handleSelection = useCallback((selectedRating) => {
    if (ratingFilter?.min === selectedRating.min) {
      // ⭐ If the same rating is clicked again, reset the filter
      setRatingFilter(null);
      setFilteredProducts(data);
      return;
    }
  
    // ✅ Apply new rating filter
    setRatingFilter(selectedRating);
    const filteredData = data.filter((product) => product.rating >= selectedRating.min);
    setFilteredProducts(filteredData);
  }, [data, ratingFilter, setFilteredProducts, setRatingFilter]);

  return (
    <div style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
      <h3>Customer Ratings</h3>
      {ratingRanges.map((rating) => (
        <div
          key={rating.label}
          onClick={() => handleSelection(rating)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginBottom: "5px",
            cursor: "pointer",
            color: ratingFilter?.min === rating.min ? "#FFA41C" : "black", // 🟡 Highlight selected rating
            fontWeight: ratingFilter?.min === rating.min ? "bold" : "normal",
          }}
        >
          <span style={{ fontSize: "16px" }}>
            {"★".repeat(rating.min)} & above
            {/* {rating.label} */}
  
          </span>
        </div>
      ))}
    </div>
  );
}

export default RatingFilter;