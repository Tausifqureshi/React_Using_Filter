

 // Is tara se bhi likh sakte ho filter laga sakte hai

  
  useEffect(() => {
    // Agar searchQuery ka `trim()` empty string hai, iska matlab user ne kuch enter nahi kiya ya sirf spaces diye hain. Aise case me, hame saare products dikhane chahiye, isliye `data` ko directly set kar diya.
    const filtered = searchQuery.trim() === ""  
      ? data  // ✅ Search bar khali hai, toh saare products dikhaye.
      : data.filter((product) => 
          // ✅ Otherwise, filter karo jo searchQuery se match karte hain.
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
  
    
    setFilteredProducts(filtered); // ✅ Final filtered products ko state me update kar do.
  
  }, [data, searchQuery, setFilteredProducts]); 
  // ✅ Dependency array: Jab `data` ya `searchQuery` change ho, tab useEffect chalega.
  


  useEffect(() => {
    // ✅ Step 1: Agar searchQuery empty ya sirf spaces hai, toh saare products dikhane chahiye.
    if (searchQuery.trim() === "") {  
      setFilteredProducts(data);  // 🔹 Search bar khali hai, toh saare products dikhaye.
      return;  // 🔹 `return` kar diya taaki neeche wala filter execute na ho.
    }
  
    // ✅ Step 2: Search Query empty nahi hai, toh filter lagana hai.
    const filterProduct = data.filter((product) => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase())  
      // 🔹 `toLowerCase()` ka use kiya hai taaki case-insensitive search ho.
      // 🔹 searchQuery me jo value hai usko lowercase me convert karke check karo ki product.title me hai ya nahi
    );
  
    // ✅ Step 3: Filtered products ko state me update karo.
    setFilteredProducts(filterProduct);  
  
  }, [data, searchQuery, setFilteredProducts]);  
  // 🔹 Ye effect tab chalega jab `data`, `searchQuery`, ya `setFilteredProducts` change hoga.
  



//  /=================
  // useEffect(() => {
  //   // if(searchQuery.trim() ===""){
  //   //   setFilteredProducts(data);
  //   //   return
  //   // }
  //   // const filterData = data.filter((itme)=>(itme.title.toLowerCase().includes(searchQuery.toLowerCase())));
  //   // setFilteredProducts(filterData);

  //   const filterDat =
  //     searchQuery.trim() === ""
  //       ? data
  //       : data.filter((item) =>
  //           item.title.toLowerCase().includes(searchQuery.toLowerCase())
  //         );
  //   setFilteredProducts(filterDat);
  // }, [data, searchQuery, setFilteredProducts]); 