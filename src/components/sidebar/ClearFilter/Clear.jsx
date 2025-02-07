import React from "react";
import { useProductContext } from "../../Context API/ProductProvider";
import Button  from "../../Button"

function Clear() {
    const {data, setFilteredProducts, setSelectedCategories} = useProductContext();
    function resetFilter(){
       setSelectedCategories([])
       setFilteredProducts(data);  // ✅ Reset filtered products when clearing filter
    }


    
  return( 
  <div>
  <Button onClick={resetFilter} className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-full mt-4 w-full transition-all duration-300" > Clear Filter</Button>
  
  </div>
  );
}

export default Clear;






























