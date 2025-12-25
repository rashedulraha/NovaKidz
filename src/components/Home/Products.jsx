import React from "react";

import products from "@/data/toys.json";
import ProductCard from "../Cards/ProductsCard";
const Products = () => {
  console.log(products);

  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-10">Our products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
};

export default Products;
