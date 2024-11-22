import React, { useEffect, useState } from "react";

const useRecommendedProducts = (productName) => {
  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    getRecommendedProducts();
  }, []);

  const getRecommendedProducts = async () => {
    const response = await fetch("/api/recommendedProducts", {
      method: "POST",
      body: JSON.stringify({
        product_name: productName,
      }),
    });
    const jsonData = await response.json();


    setProductsData(jsonData);
  };
  return productsData;
};

export default useRecommendedProducts;
