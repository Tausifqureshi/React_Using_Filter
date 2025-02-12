import React, { useEffect } from "react";
import { useProductContext } from "../../Context API/ProductProvider";
import Input  from "../../Input"

function Category({ isSidebarOpen, }) {
  const { data, setFilteredProducts, selectedCategories, setSelectedCategories } = useProductContext();
  // const categories = [... new Set(data.map((item)=>item.category))]
  const categories = [...new Set(data.map((item) => item.category))];
  console.log(categories);
  function handleCheckbox(e){
    console.log("Checkbox clicked");
    const targetValue = e.target.value;
    if(selectedCategories.includes(targetValue)){
      setSelectedCategories((prev)=>prev.filter((c)=>c!==targetValue))
    }else{
      setSelectedCategories((prev)=>[...prev, targetValue])
    }

   
  }

  useEffect(()=>{
    const filterProducts = selectedCategories.length === 0 ? data : data.filter((item)=>selectedCategories.includes(item.category))
    setFilteredProducts(filterProducts)
  }, [selectedCategories, setFilteredProducts, data])


  return <div>
   <h1>Category</h1>

        {categories.map((category) => (
           <Input
             key={category}
             value ={category}
             handleChange={handleCheckbox} // Temporary test ke liye
             isSidebarOpen={ isSidebarOpen} 
             checked={selectedCategories.includes(category)}
           />
         ))}
         
  </div>
  ;
}

export default Category;
