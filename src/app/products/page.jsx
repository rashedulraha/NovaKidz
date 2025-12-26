import { ProductData } from "@/components/Home/Products";
import React from "react";

export const metadata = {
  title: "Products",
  description: "all products here",
};

const Products = () => {
  return (
    <div>
      <ProductData />
    </div>
  );
};

export default Products;
