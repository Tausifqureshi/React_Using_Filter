import React, { useEffect, useState } from "react";
import { useProductContext } from "../../Context API/ProductProvider";
import { useSearchParams } from "react-router-dom"; // ✅ React Router ka hook

const Price = () => {
  const { setFilteredProducts, data } = useProductContext();
  const [searchParams, setSearchParams] = useSearchParams(); // ✅ URL params handle karne ke liye
  const [selectedRange, setSelectedRange] = useState(null);

  // ✅ Price Ranges
  const priceRanges = [
    { label: "All Prices", min: 0, max: Infinity },
    { label: "Under ₹500", min: 0, max: 500 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000 - ₹5000", min: 1000, max: 5000 },
    { label: "₹5000 - ₹10000", min: 5000, max: 10000 },
    { label: "Over ₹10000", min: 10000, max: Infinity },
  ];

  // ✅ Jab bhi URL change ho, toh price filter apply ho jaye
  useEffect(() => {
    const priceParam = searchParams.get("price"); // 🔹 URL se `price` query param get karo

    if (priceParam) {
      const [min, max] = priceParam.split("-").map(Number); // `min-max` format ko parse karo
      const selected = priceRanges.find(
        (range) => range.min === min && range.max === max
      );

      if (selected) {
        setSelectedRange(selected);
        const filtered = data.filter(
          (product) => product.price >= min && product.price <= max
        );
        setFilteredProducts(filtered);
      }
    } else {
      setSelectedRange(null);
      setFilteredProducts(data); // ✅ Default: sab products dikhao
    }
  }, [searchParams, data]);

  // ✅ Jab user koi price range select kare, toh URL update ho
  const handleSelection = (e) => {
    const targetValue = e.target.value;
    const selectedRange = priceRanges.find((range) => range.label === targetValue);

    if (!selectedRange) return;

    setSelectedRange(selectedRange);

    // ✅ URL Query Params update karo (Amazon style)
    if (selectedRange.min === 0 && selectedRange.max === Infinity) {
      searchParams.delete("price"); // Agar "All Prices" select kare toh query param hatao
    } else {
      searchParams.set("price", `${selectedRange.min}-${selectedRange.max}`);
    }
    setSearchParams(searchParams); // ✅ URL update ho jayega

    // ✅ Filter products
    const filtered = data.filter(
      (product) =>
        product.price >= selectedRange.min && product.price <= selectedRange.max
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h3>Filter by Price</h3>
      {priceRanges.map((range, index) => (
        <div key={index}>
          <input
            type="radio"
            id={range.label}
            name="price"
            value={range.label}
            checked={selectedRange ? selectedRange.label === range.label : false}
            onChange={handleSelection}
          />
          <label htmlFor={range.label}>{range.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Price;
