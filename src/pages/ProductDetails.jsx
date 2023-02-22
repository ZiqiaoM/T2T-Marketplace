import { Fragment, useState } from "react";
import {
  Dialog,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  HeartIcon,
  MinusSmIcon,
  PlusSmIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/24/outline";

const navigation = {
  categories: [
    {
      name: "Women",
      featured: [
        { name: "Sleep", href: "#" },
        { name: "Swimwear", href: "#" },
        { name: "Underwear", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Basic Tees", href: "#" },
        { name: "Artwork Tees", href: "#" },
        { name: "Bottoms", href: "#" },
        { name: "Underwear", href: "#" },
        { name: "Accessories", href: "#" },
      ],
      brands: [
        { name: "Full Nelson", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Significant Other", href: "#" },
      ],
    },
    {
      name: "Men",
      featured: [
        { name: "Casual", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Outdoor", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Artwork Tees", href: "#" },
        { name: "Pants", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Basic Tees", href: "#" },
      ],
      brands: [
        { name: "Significant Other", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Full Nelson", href: "#" },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

const product = {
  name: "Zip Tote Basket",
  price: "$140",
  condition: "New",
  location: "on campus",
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://res.cloudinary.com/dfpmcuzpx/image/upload/v1676676034/QQ%E6%88%AA%E5%9B%BE20221219232811_n4eo37.png",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Black tee",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
      alt: "Side profile of women's Basic Tee in black.",
    },

    {
      id: 3,
      name: "Front black tee",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      alt: "Front of women's Basic Tee in black.",
    },
    // More images...
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  reference_link: `<p> Here is the reference link</p>`,
  contact: `<p>Here is the contact information</p>`,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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
              {product.name}
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
              <h2 className="text-sm font-medium text-gray-900">Description</h2>

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
                dangerouslySetInnerHTML={{ __html: product.contact }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
