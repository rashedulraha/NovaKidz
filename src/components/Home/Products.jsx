import { getProducts } from "@/app/aciton/server/products";
import React from "react";
import ProductCard from "../Cards/ProductsCard";

export const ProductData = async () => {
  const getProduct = await getProducts();

  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-10">Our products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {getProduct.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
};
