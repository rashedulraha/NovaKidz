import { getProductsDetails } from "@/app/aciton/server/products";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

import React from "react";

const ProductsDetails = async ({ params }) => {
  const { id } = await params;
  const productDetails = await getProductsDetails(id);
  console.log(productDetails);

  return (
    <div>
      <ProductDetails product={productDetails} />
    </div>
  );
};

export default ProductsDetails;
