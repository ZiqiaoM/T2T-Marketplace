import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import prisma from "../lib/prisma";

const Categories = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "Clothing", label: "Clothing" },
      { value: "Electronics", label: "Electronics" },
      { value: "Kitchenwares", label: "Kitchenwares" },
      { value: "Funitures", label: "Funitures" },
      { value: "Other", label: "Other" },
    ],
  },
];

const Locations = [
  {
    id: "location",
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
// for InputSearchTerm
  const searchKeyword = context.query.search.toLowerCase()
  let products_init=[]
  const options={
    select:{
      id: true,
      post_title: true,
      price: true,
      images: true,
      location: true,
      condition: true,
      category_name: true,

    }
  }

  if(searchKeyword){
    products_init = await prisma.product.findMany({
      ...options,
      where:{
        OR:[
          {post_title:{contains:searchKeyword.toLowerCase()}},
        ],
      },
    })
  }else{

  // const products_init = await prisma.product.findMany({
    products_init = await prisma.product.findMany({
    select: {
      id: true,
      post_title: true,
      price: true,
      images: true,
      location: true,
      condition: true,
      category_name: true,
    },
  });
}
  // console.log(products_init[0].images[0].src);
  console.log("using function get server side props.");
  return { props: { products_init } };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AllProducts({ products_init }) {
  const [products, setProducts] = useState(products_init);
  console.log(products);

  // function handleLocations(e) {
  //   const location = e.target.value;
  //   if (e.target.checked) {
  //     const filteredProducts = products_init.filter(
  //       (p) => p.location === location
  //     );
  //     setProducts(filteredProducts);
  //   } else {
  //     setProducts(products_init);
  //   }
  // }
  function handleLocations(e) {
    const selectedValue = e.target.value;
    const selectedOption = Locations.flatMap(
      (location) => location.options
    ).find((option) => option.value === selectedValue);
    selectedOption.isSelected = e.target.checked;
    const selectedLocations = Locations.flatMap((location) =>
      location.options.filter((option) => option.isSelected)
    ).map((option) => option.value);
    if (selectedLocations.length === 0) {
      setProducts(products_init);
    } else {
      const filteredProducts = products_init.filter((p) =>
        selectedLocations.includes(p.location)
      );
      setProducts(filteredProducts);
    }
  }

  function handleConditions(e) {
    const selectedValue = e.target.value;
    const selectedOption = Conditions.flatMap(
      (condition) => condition.options
    ).find((option) => option.value === selectedValue);
    selectedOption.isSelected = e.target.checked;
    const selectedConditions = Conditions.flatMap((condition) =>
      condition.options.filter((option) => option.isSelected)
    ).map((option) => option.value);
    if (selectedConditions.length === 0) {
      setProducts(products_init);
    } else {
      const filteredProducts = products_init.filter((p) =>
        selectedConditions.includes(p.condition)
      );
      setProducts(filteredProducts);
    }
  }

  function handleCategory(e) {
    const selectedValue = e.target.value;
    const selectedOption = Categories.flatMap(
      (category_name) => category_name.options
    ).find((option) => option.value === selectedValue);
    selectedOption.isSelected = e.target.checked;
    const selectedCategories = Categories.flatMap((category_name) =>
      category_name.options.filter((option) => option.isSelected)
    ).map((option) => option.value);
    if (selectedCategories.length === 0) {
      setProducts(products_init);
    } else {
      const filteredProducts = products_init.filter((p) =>
        selectedCategories.includes(p.category_name)
      );
      setProducts(filteredProducts);
    }
  }

  return (
    <div className="bg-white, container mx-auto">
      <main className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
        <div className="border-b border-gray-200 pt-24 pb-10 py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Welcome to T2T marketplace!
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
            Buy and sell pre-loved treasures with ease
          </p>
        </div>
        <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <div className="hidden lg:block">
              <form className="divide-y divide-gray-200 space-y-10">
                {Locations.map((location) => (
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-900">
                      {location.name}
                    </legend>
                    <div className="pt-6 space-y-3">
                      <div key={location.id}>
                        {location.options.map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              type="checkbox"
                              name={location.id}
                              value={option.value}
                              checked={option.isSelected}
                              onChange={handleLocations}
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              key={option.value}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </fieldset>
                ))}

                {/* Condition filter */}

                {Conditions.map((condition) => (
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-900">
                      {condition.name}
                    </legend>
                    <div className="pt-6 space-y-3">
                      <div key={condition.id}>
                        {condition.options.map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              type="checkbox"
                              name={condition.id}
                              value={option.value}
                              checked={option.isSelected}
                              onChange={handleConditions}
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              key={option.value}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </fieldset>
                ))}
                {/* Product category filter */}
                {Categories.map((category_name) => (
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-900">
                      {category_name.name}
                    </legend>
                    <div className="pt-6 space-y-3">
                      <div key={category_name.id}>
                        {category_name.options.map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              type="checkbox"
                              name={category_name.id}
                              value={option.value}
                              checked={option.isSelected}
                              onChange={handleCategory}
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              key={option.value}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </fieldset>
                ))}
              </form>
            </div>
          </aside>

          {/* all Products */}
          {/* All Products */}
          <section
            aria-labelledby="product-heading"
            className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3"
          >
            <h2 id="product-heading" className="sr-only">
              Products
            </h2>
            <ul>
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => {
                  const { id, images, post_title, price } = product;
                  return (
                    <li key={id}>
                      <Link
                        passHref
                        legacyBehavior
                        href={`/productDetails/${id}`}
                      >
                        <a key={id} href={product.href} className="group">
                          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img
                              src={images[0].src}
                              className="w-full h-full object-center object-cover group-hover:opacity-75"
                            />
                          </div>
                          <h3 className="mt-4 text-sm text-gray-700">
                            {post_title}
                          </h3>
                          <p className="mt-1 text-lg font-medium text-gray-900">
                            ${price}
                          </p>
                        </a>
                      </Link>
                    </li>
                  );
                })}
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
