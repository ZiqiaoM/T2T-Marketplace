import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import prisma from "../lib/prisma";

const ProductCategory = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "CLOTHING", label: "Clothing" },
      { value: "ELECTRONICS", label: "Electronics" },
      { value: "KITCHENWARES", label: "Kitchenwares" },
      { value: "FURNITURES", label: "Funitures" },
      { value: "OTHERS", label: "Other" },
    ],
  },
];

const Locations = [
  {
    id: "Location",
    name: "Location",
    options: [
      { value: "On Campus", label: "On Campus" },
      { value: "Off Campus", label: "Off Campus" },
    ],
  },
];

const Conditions = [
  {
    id: "condition",
    name: "Condition",
    options: [
      { value: "New", label: "New" },
      { value: "Used", label: "Used" },
    ],
  },
];

export async function getServerSideProps(context) {
  const products_init = await prisma.product.findMany({
    select: {
      post_title: true,
      price: true,
      images: true,
      location: true,
      condition: true,
      category_name: true,
    },
  });
  console.log(products_init[0].images[0].src);
  console.log("using function get server side props.");
  return { props: { products_init } };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AllProducts({ products_init }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProduct] = useState(products_init);

  function handleLocations(e) {
    console.log(e.target.value);
    setProduct(products_init.filter((p) => p.location == e.target.value));
    console.log(products);
  }
  function handleConditions(e) {
    console.log(e.target.value);
    setProduct(products_init.filter((p) => p.condition == e.target.value));
    console.log(products);
  }
  function handleCategory(e) {
    console.log(e.target.value);
    setProduct(products_init.filter((p) => p.category_name == e.target.value));
    console.log(products);
  }

  return (
    <div className="bg-white, container mx-auto">
      <main className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
        <div className="border-b border-gray-200 pt-24 pb-10 py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Welcome to T2T marketplace!
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
            Thoughtfully designed objects for the workspace, home, and travel.
          </p>
        </div>
        <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <div className="hidden lg:block">
              <form className="divide-y divide-gray-200 space-y-10">
                {Locations.map((section, sectionIdx) => (
                  <div
                    key={section.name}
                    className={sectionIdx === 0 ? null : "pt-10"}
                  >
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">
                        {section.name}
                      </legend>
                      <div className="pt-6 space-y-3">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              onClick={handleLocations}
                              type="checkbox"
                              value={option.label}
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ))}

                {Conditions.map((section, sectionIdx) => (
                  <div
                    key={section.name}
                    className={sectionIdx === 0 ? null : "pt-10"}
                  >
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">
                        {section.name}
                      </legend>
                      <div className="pt-6 space-y-3">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              onClick={handleConditions}
                              type="checkbox"
                              value={option.label}
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ))}
                {ProductCategory.map((section, sectionIdx) => (
                  <div
                    key={section.name}
                    className={sectionIdx === 0 ? null : "pt-10"}
                  >
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">
                        {section.name}
                      </legend>
                      <div className="pt-6 space-y-3">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              onClick={handleCategory}
                              type="checkbox"
                              value={option.label}
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ))}
              </form>
            </div>
          </aside>

          {/* all Products */}
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
                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
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
          {/* Pagination */}
          <nav
            aria-label="Pagination"
            className="max-w-7xl mx-auto px-4 mt-6 flex justify-between text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
          >
            <div className="min-w-0 flex-1">
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
              >
                Previous
              </a>
            </div>
            <div className="hidden space-x-2 sm:flex">
              {/* Current: "border-indigo-600 ring-1 ring-indigo-600", Default: "border-gray-300" */}
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
              >
                1
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
              >
                2
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-indigo-600 ring-1 ring-indigo-600 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
              >
                3
              </a>
              <span className="inline-flex items-center text-gray-500 px-1.5 h-10">
                ...
              </span>
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
              >
                8
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
              >
                9
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
              >
                10
              </a>
            </div>
            <div className="min-w-0 flex-1 flex justify-end">
              <a
                href="#"
                className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
              >
                Next
              </a>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}
