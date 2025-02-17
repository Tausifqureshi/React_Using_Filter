import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function Product({ images,title, price, id}) {
  const navigate = useNavigate();
  return (  
      <div className="border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white       overflow-hidden">
        <div className="w-full bg-gray-100 cursor-pointer" style={{ aspectRatio: "4/3" }} 
         onClick={() => navigate(`/productsInfo/${id}`)}>
          <img
            src={images[0]}
            alt={title}
            className={`w-full h-full object-contain mix-blend-darken py-3 px-1` }
          />
        </div>
 
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors truncate">
            {title}
          </h3>

          <p className="text-xl font-bold text-green-600 mt-2">${price}</p>

         

        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-full mt-4 w-full transition-all duration-300"
          onClick={() => console.log("Add to Cart")}

          >Add to Cart</Button>

        </div>

      </div>





  );
}

export default Product;
