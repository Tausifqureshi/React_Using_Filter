
  //BrandFilter Components code.
  //  import React, { useEffect } from "react";
  //  import { useProductContext } from "../../Context API/ProductProvider";
  //  import Input from "../../Input";
   
  //  function BrandFilter({ isSidebarOpen }) {
  //    const { data, selectedBrand, setSelectedBrand, setFilteredProducts } =
  //      useProductContext();
  //    console.log(selectedBrand, "selectedBrand");
     
  //    const brand = [...new Set(data.map((item) => item.brand))];
  //    const handleChange = (e) => {
  //      console.log(e.target.value);
  //      const targetValue = e.target.value;
  //      if (selectedBrand.includes(targetValue)) {
  //        setSelectedBrand((prev) => prev.filter((c) => c !== targetValue));
  //      } else {
  //        setSelectedBrand((prev) => [...prev, targetValue]);
  //      }
  //    };
         
  //    useEffect(() => {
  //      const filteredProducts =
  //        selectedBrand.length === 0
  //          ? data
  //          : data.filter((item) => selectedBrand.includes(item.brand));
  //      setFilteredProducts(filteredProducts);
  //    }, [selectedBrand, data, setFilteredProducts]);
   
  //    return (
  //      <div className="">
  //        <h1>BrandFilter </h1>
  //        {brand.map((value, index) => (
  //          <Input
  //            key={index}
  //            type="checkbox"
  //            value={value}
  //            //   checked={selectedBrand.includes(value)}
  //            isSidebarOpen={isSidebarOpen}
  //            handleChange={handleChange}
  //            checked={selectedBrand.includes(value)}
  //          />
  //        ))}
  //      </div>
  //    );
  //  }
   
  //  export default BrandFilter;
    
  //   const dynamicFilter = [...new Set(data.flatMap((item) => item.reviews.map((review) => review.rating)))];
  //   const dynamicFilter = [...new Set(data.flatMap((item) => item.reviews.comment))];













      
      // const updatedCart = state.cart.map((item) => {
      //   if (item.id === action.payload) {
      //     return { ...item, quantity: item.quantity + 1 };
      //   }
      //   return item;
      // });

      // localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ LocalStorage update karo

      // return {
      //   ...state, // Pure state ko copy karo
      //   cart: updatedCart, // Cart update karo
      // };



      decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; // ✅ Directly modify kar sakte ho Redux Toolkit me (Immer use karta hai)
        localStorage.setItem("cart", JSON.stringify(state.cart)); // ✅ Sirf cart save ho
      
      }

     
    },

















