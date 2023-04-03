// import { getPostDetails, getPostIdList } from "../../lib/products";
import { Fragment, useState } from "react";
import prisma from "../../lib/prisma";
import { useRouter } from "next/router";

import absoluteUrl from 'next-absolute-url'


import {
  Dialog,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";

const relatedProducts = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export async function getStaticPaths(req) {
  
  const paths = await prisma.product.findMany({
    select: {
    id: true,
    // name: true,
  },});

  paths.forEach((p)=>{p.id=p.id.toString()});
  // console.log(paths);
  return {
    paths: paths.map((id) => (
      {params:  id}
     )),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {

  const product = await prisma.product.findUnique({
    where:{
      id:parseInt(params.id),
    },
    select:{
      id:true,
      post_title: true,
      category_name: true,
      price: true,
      condition: true,
      location: true,
      product_details: true,
      reference_link: true,
      phone: true,
      images: true,
    }
  }
); 
       
  return {
    props: {
      product,
    },
  };
}

export default function product_details({ product }) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {/* {breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))} */}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.post_title}
              </a>
            </li>
          </ol>
        </nav>
        <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{image.name}</span>
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img
                              src={image.src}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? "ring-indigo-500" : "ring-transparent",
                              "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            {/* Product name */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {product.post_title}
              </h1>
              {/* Product price */}
              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-xl font-medium text-gray-900">
                  {product.price}
                </p>
                <p className="mt-4 prose prose-sm text-gray-500">
                  Condition: {product.condition}
                </p>
                <p className="mt-4 prose prose-sm text-gray-500">
                  Location: {product.location}
                </p>
              </div>

              <form className="mt-6">
                <div className="mt-10 flex sm:flex-col1">
                  <button
                    type="submit"
                    className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                  >
                    Add to wishlist
                  </button>
                </div>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div
                  className="mt-4 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
              {/* Reference Link */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Reference Link
                </h2>
                <div
                  className="mt-4 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.reference_link }}
                />
              </div>
              {/* Reference Link */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Contact Information
                </h2>
                <div
                  className="mt-4 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.phone }}
                />
              </div>
            </div>
          </div>
        </main>

        <section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
          <h2
            id="related-heading"
            className="text-lg font-medium text-gray-900"
          >
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={relatedProduct.imageSrc}
                    alt={relatedProduct.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={relatedProduct.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {relatedProduct.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {relatedProduct.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
