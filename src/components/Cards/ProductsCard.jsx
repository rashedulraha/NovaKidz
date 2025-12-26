"use client";

import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ product, loading }) {
  // if (loading) {
  //   return (
  //     <div className="card w-72 bg-base-200 shadow skeleton">
  //       <div className="h-40 w-full skeleton"></div>
  //       <div className="card-body">
  //         <div className="h-4 w-2/3 skeleton"></div>
  //         <div className="h-4 w-1/3 skeleton"></div>
  //         <div className="h-8 w-full skeleton mt-2"></div>
  //       </div>
  //     </div>
  //   );
  // }

  const { image, title, ratings, price, sold, _id } = product || {};
  return (
    <div className="card w-full bg-base-100 shadow-lg hover:shadow-xl transition">
      <figure className="bg-base-200">
        <Image
          src={image}
          alt={title}
          width={300}
          height={220}
          className="h-48 w-full object-contain"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-sm line-clamp-2">{title}</h2>

        <div className="flex items-center gap-2 text-yellow-500">
          <AiFillStar />
          <span className="font-semibold">{ratings}</span>
          <span className="text-sm text-gray-500">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex justify-between items-center font-semibold">
          <span className="text-lg">৳{price}</span>
          <span className="text-sm text-gray-500">Sold: {sold}</span>
        </div>
        <div className="flex items-center gap-5">
          <button className="btn btn-primary btn-sm mt-2 flex items-center gap-2 flex-1">
            <FiShoppingCart />
            Add to Cart
          </button>
          <Link href={`products/${_id}`}>
            <button className="btn btn-secondary btn-sm mt-2 flex items-center gap-2 ">
              <BsEye />
              View more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
