"use client";

import Image from "next/image";

export default function ProductDetails({ product }) {
  const productsDetails = product[0];
  const {
    title,
    bangla,
    image,
    price,
    discount,
    description,
    qna,
    reviews,
    sold,
    ratings,
    info,
  } = productsDetails || {};
  console.log(product.title);

  const discountedPrice = price - (price * discount) / 100;

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="w-full">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="rounded-xl shadow"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl font-bold mb-1">{title}</h1>
          <p className="text-lg text-gray-600 mb-4">{bangla}</p>

          {/* Pricing */}
          <div className="flex items-center gap-3 mb-4">
            <p className="text-2xl font-bold">{discountedPrice}</p>
            <p className="text-gray-400 line-through">{price}</p>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
              {discount}% OFF
            </span>
          </div>

          {/* Ratings / Sold */}
          <p className="text-sm text-gray-600 mb-2">
            ⭐ {ratings} | {reviews} Reviews | {sold} Sold
          </p>

          {/* Info List */}
          <ul className="list-disc pl-5 text-gray-700 mb-5 space-y-1">
            {info?.map((item, index) => {
              const value = item;
              return <li key={index}>{value}</li>;
            })}
          </ul>

          {/* Description */}
          <h2 className="font-semibold mb-2">Description</h2>
          <p className="text-gray-700 whitespace-pre-line mb-6">
            {description}
          </p>

          {/* Q&A */}
          <h2 className="font-semibold mb-2">Q & A</h2>
          <div className="space-y-3">
            {qna?.map(({ question, answer }, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded">
                <p className="font-medium">❓ {question}</p>
                <p className="text-gray-700 mt-1">✔ {answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
