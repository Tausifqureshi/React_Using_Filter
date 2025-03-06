    // Increment quantity

    // incrementQuantity: (state, action) => {
    //   // return {
    //   //   ...state,    // Pura state ko copy karo
    //   //   cart: state.cart.map((item) => { // Cart mein jo bhi items hain unko map karo
    //   //     if (item.id === action.payload) { // Agar item ka id action.payload ke barabar hai toh us item ka quantity increment karo
    //   //       return { ...item, quantity: item.quantity + 1 }; // Item ko copy karke quantity increment karo
    //   //     }

    //   //     return item; // Agar item ka id action.payload ke barabar nahi hai toh us item ko as it is return karo
    //   //   }),
    //   // };
    //   state.cart = state.cart.map((item) => { // Cart mein jo bhi items hain unko map karo
    //     if (item.id === action.payload) { // Agar item ka id action.payload ke barabar hai toh us item ka quantity increment karo
    //       return { ...item, quantity: item.quantity + 1 }; // Item ko copy karke quantity increment karo
    //     }
    //     return item; // Agar item ka id action.payload ke barabar nahi hai toh us item ko as it is return karo
    //   });
    // },







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
    
  