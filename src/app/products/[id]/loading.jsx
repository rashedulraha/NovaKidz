import React from "react";

const ProductSkeleton = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-105 bg-gray-200 rounded-xl" />

        <div>
          <div className="h-6 bg-gray-200 w-3/4 mb-3 rounded" />
          <div className="h-4 bg-gray-200 w-2/3 mb-4 rounded" />

          <div className="h-8 bg-gray-200 w-1/3 mb-4 rounded" />

          <div className="space-y-2 mb-6">
            <div className="h-4 bg-gray-200 w-2/3 rounded" />
            <div className="h-4 bg-gray-200 w-1/2 rounded" />
            <div className="h-4 bg-gray-200 w-3/4 rounded" />
          </div>

          <div className="space-y-3">
            <div className="h-16 bg-gray-200 rounded" />
            <div className="h-16 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSkeleton;
