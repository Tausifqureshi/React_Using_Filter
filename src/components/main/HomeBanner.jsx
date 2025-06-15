// import React from "react";

// function HomeBanner() {
//   const bannerImages = [
//     "https://images.unsplash.com/photo-1589187154962-1cc8c1ca7b8e?auto=format&fit=crop&w=1470&q=80",
//     "https://images.unsplash.com/photo-1606813909021-34e9e5d56401?auto=format&fit=crop&w=1470&q=80",
//     "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1470&q=80",
//     "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1470&q=80",
//   ];

//   return (
//     <div className="w-full px-4 py-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//       {bannerImages.map((img, index) => (
//         <div
//           key={index}
//           className="h-64 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           <img
//             src={img}
//             alt={`Banner ${index + 1}`}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HomeBanner;



import React, { useEffect, useState } from "react";

function HomeBanner() {
  const bannerImages = [
    "https://images.unsplash.com/photo-1589187154962-1cc8c1ca7b8e?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1606813909021-34e9e5d56401?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1470&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="w-full px-4 py-6">
      <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
        <img
          src={bannerImages[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome to Our Store</h1>
            <p className="text-lg">Find the best deals on everything you love!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
