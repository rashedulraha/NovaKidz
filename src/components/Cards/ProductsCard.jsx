"use client";

import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ product, loading }) {
  if (loading) {
    return (
      <div className="card w-72 bg-base-200 shadow skeleton">
        <div className="h-40 w-full skeleton"></div>
        <div className="card-body">
          <div className="h-4 w-2/3 skeleton"></div>
          <div className="h-4 w-1/3 skeleton"></div>
          <div className="h-8 w-full skeleton mt-2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="card w-full bg-base-100 shadow-lg hover:shadow-xl transition">
      <figure className="bg-base-200">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={220}
          className="h-48 w-full object-contain"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-sm line-clamp-2">{product.title}</h2>

        <div className="flex items-center gap-2 text-yellow-500">
          <AiFillStar />
          <span className="font-semibold">{product.ratings}</span>
          <span className="text-sm text-gray-500">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex justify-between items-center font-semibold">
          <span className="text-lg">৳{product.price}</span>
          <span className="text-sm text-gray-500">Sold: {product.sold}</span>
        </div>

        <button className="btn btn-primary btn-sm mt-2 flex items-center gap-2">
          <FiShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
