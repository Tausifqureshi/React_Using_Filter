import React, { useState ,useEffect} from "react";
import { LuScanSearch } from "react-icons/lu";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/productSlice";


function SearchBar() {
  const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.data);
    console.log("PRODUCT DATA FROM REDUX",products);

    
  function searchFilter(e) {
   let searchProducts = e.target.value.toLowerCase();
   setSearch(searchProducts);

    if (e.target.value === "") {
      dispatch(fetchData());
      return;
    }

    // const filteredProducts = products.filter((product) =>
    //   product.title.toLowerCase().includes(e.target.value.toLowerCase())
    // );

    // dispatch(fetchData(filteredProducts));


    const filterProducts = products.filter((product)=>
        product.title.toLowerCase().includes(searchProducts)
    )

    dispatch(fetchData(filterProducts));


  }



  return (
    <div className="relative flex items-center bg-white rounded-full border border-gray-300 shadow-sm w-[26rem]">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 text-sm text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search"
        value={search}
        onChange={searchFilter}
      />

      <Button className="absolute right-2 flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all">
        <LuScanSearch />
      </Button>
    </div>
  );
}

export default SearchBar;















