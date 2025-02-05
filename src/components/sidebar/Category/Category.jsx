import React, { useEffect, useState } from "react";
import Input from "../../Input"
import { useProductContext } from "../../Context API/ProductProvider";

function Category({isSidebarOpen}) {
    const{data,  setFilteredProducts} = useProductContext();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const categories = [...new Set(data.map((item)=>item.category))]

    function handleChange(e) {
      // const value = e.target.value; // Jo category select ya deselect ho rahi hai, uska value millenge.
      // selectedCategories.includes(value) // agar category pehle se selected hai, toh usko remove karte hain
      //   ? setSelectedCategories((prevSelectedCategories) =>
      //       prevSelectedCategories.filter((c) => c !== value)// agar category pehle se selected hai, toh usko remove karte hain
      //     )
      //   : setSelectedCategories((prevSelectedCategories) => [ // agar category select nahi ki gayi, toh usko add karte hain
      //       ...prevSelectedCategories,
      //       value,
      //     ]);

      
      const value = e.target.value; // Jo category select ya deselect ho rahi hai, uska value millenge.
      if (selectedCategories.includes(value)) {
        setSelectedCategories((prevSelectedCategories) =>
          prevSelectedCategories.filter((c) => c !== value) // agar category pehle se selected hai, toh usko remove karte hain
        );
      } else {
        setSelectedCategories((prevSelectedCategories) => [
          ...prevSelectedCategories, // agar category select nahi ki gayi, toh usko add karte hain
          value,
        ]);
      }
   

    // 2. is me phele value lene bol re hai.
    //  if(!selectedCategories.includes(value)){
    //   setSelectedCategories((prevSelectedCategories) => [
    //     ...prevSelectedCategories,  // Pura previous selectedCategories ko leke, naye category ko add karte hain
    //     value,
    //   ]);
    //  }else{
    //   setSelectedCategories((prevSelectedCategories) => prevSelectedCategories.filter((c) => c !== value));

    //  }

    // const valueSelected = e.target.value; // Jo category select ya deselect ho rahi hai, uska value
    // setSelectedCategories((prevSelectedCategories) => 
    //   !prevSelectedCategories.includes(valueSelected)
    //     ? [...prevSelectedCategories, valueSelected] // Agar category select nahi hai, toh add karo
    //     : prevSelectedCategories.filter((c) => c !== valueSelected) // Agar already selected hai, toh remove karo
    // );



    }

    // Bina useEffect aisa kar sakte hai bit error dega. 
  //   function handleChange(e) {
  //     const value = e.target.value;
  
  //     setSelectedCategories((prevSelectedCategories) => {
  //         const updatedCategories = prevSelectedCategories.includes(value)
  //             ? prevSelectedCategories.filter((c) => c !== value) // Remove category
  //             : [...prevSelectedCategories, value]; // Add category
  
  //         // Yaha par updatedCategories latest state hai, isliye isi ko use karo
  //         const filteredProducts =
  //             updatedCategories.length === 0
  //                 ? data
  //                 : data.filter((product) => updatedCategories.includes(product.category));
  
  //         setFilteredProducts(filteredProducts);
  
  //         return updatedCategories; // Ye state update karega
  //     });
  // }
  

    useEffect(()=>{
      // 1. agar selectedCategories empty nahi hai toh uska matlab user ne kuch select kiya hai.
      // if (selectedCategories.length > 0) {
      //   const filteredProducts = data.filter((product) =>
      //     selectedCategories.includes(product.category)
      //   );
      //   setFilteredProducts(filteredProducts);
      // } else {
      //   setFilteredProducts(data); // Show all products if no category selected
      // }

        //  const filteredProducts = selectedCategories.length > 0
        //   ? data.filter((product) => selectedCategories.includes(product.category))
        //   : data;
        // setFilteredProducts(filteredProducts);


        // 2. First Data Render agar selectedCategories empty hai toh uska matlab user ne kuch select nahi kiya ya sirf spaces diye hain. Aise case me, hame saare products dikhane chahiye, isliye `data` ko directly set kar diya.
        const filteredProducts = selectedCategories.length === 0
        ? data
        : data.filter((product) => selectedCategories.includes(product.category));
        setFilteredProducts(filteredProducts);


        // if(selectedCategories.length === 0){
        //   setFilteredProducts(data);
        // }
        // else{
        //   const filteredProducts = data.filter((product) => selectedCategories.includes(product.category));
        //   setFilteredProducts(filteredProducts);
        // }


    }, [data, selectedCategories, setFilteredProducts])

  return( 
  <div className="flex flex-col">
   <h3>Filter by Category:</h3>
      {categories.map((category) => (
        <Input key={category} value={category} isSidebarOpen={isSidebarOpen}  
         handleChange={handleChange}
           
         
         />
      ))}
 </div>
  );
}

export default Category;
