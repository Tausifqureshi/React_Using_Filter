import React from "react";
import { useProductContext } from "../../Context API/ProductProvider";
import Button from "../../Button";

function Clear() {
  const {
    data,
    setFilteredProducts,
    setSelectedCategories,
    setBucketFiltering,
    setSelectedPriceRange,
  } = useProductContext();
  function resetFilter() { // ✅ Reset filtered products when clearing filter
    setSelectedCategories([]); // ✅ Saari categories hata do
    setBucketFiltering(null); // ✅ Filtering reset karne ke liye null set karo
    setSelectedPriceRange(0); // ✅ Price range ko reset karne ke liye 0 set karo
    setFilteredProducts(data); // ✅ Pura data wapas dikhao bina filter ke
  }
  return (
    <div>
      <Button
        onClick={resetFilter}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-full mt-4 w-full transition-all duration-300"
      >
        {" "}
        Clear Filter
      </Button>
    </div>
  );
}

export default Clear;
