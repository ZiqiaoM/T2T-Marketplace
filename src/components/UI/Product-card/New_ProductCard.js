import React from "react";
import Link from "next/link";
const ProductCard = (props) => {
  return (
    <section
      aria-labelledby="product-heading"
      className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3"
    >
      <h2 id="product-heading" className="sr-only">
        Products
      </h2>
      <ul>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <li key={product.id}>
              <Link
                passHref
                legacyBehavior
                href={`/productDetails/${encodeURIComponent(product.id)}`}
              >
                <a key={product.id} href={product.href} className="group">
                  <div className=" aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 w-full">
                    <img
                      src={product.images[0].src}
                      // alt={product.imageAlt}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {product.post_title}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                </a>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </section>
  );
};

export default ProductCard;
