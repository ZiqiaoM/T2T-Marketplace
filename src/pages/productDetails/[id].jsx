// import { getPostDetails, getPostIdList } from "../../lib/products";
import prisma from "../../lib/prisma";

import { Tab } from "@headlessui/react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { cartActions } from "../../store/wish-list/cartSlice";
import useUser from '../../lib/userUser'
// const relatedProducts = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
//     imageAlt: "Front of men's Basic Tee in white.",
//     price: "$35",
//     color: "Aspen White",
//   },
//   // More products...
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export async function getStaticPaths(req) {
  const paths = await prisma.product.findMany({
    select: {
      id: true,
      // name: true,
    },
  });

  paths.forEach((p) => {
    p.id = p.id.toString();
  });
  console.log(paths);
  return {
    paths: paths.map((id) => ({ params: id })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(params.id),
    },
    select: {
      id: true,
      post_title: true,
      category_name: true,
      price: true,
      condition: true,
      location: true,
      product_details: true,
      reference_link: true,
      phone: true,
      email: true,
      images: true,
    },
  });

  return {
    props: {
      product,
    },
  };
}

export default function product_details({ product }) {
  const { id, images, post_title, price } = product;
  const { user } = useUser({
    redirectTo: '/login',
  })
  // console.log(user);

  const dispatch = useDispatch();
  const addToCart = async () => {
    event.preventDefault();
    dispatch(
      cartActions.addItem({
        id,
        //title,
        post_title,
        // image01,
        images: images[0].src,
        price,
      })
    );

    try {
      let data = {
        product_id: id,
        user_id: user.id,
      };
      const body = { data };
      await fetch("/api/addWishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      swal("Successfully added to wishlist!", "", "success");
      // await Router.push('/drafts');
    } catch (error) {
      console.error(error);
    }

    swal("Successfully added to wishlist!", "", "success");


  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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
                  ${product.price}
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
                    className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                    onClick={addToCart}
                  >
                    Add to Wishlist
                  </button>
                </div>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description:
                </h2>

                <div
                  className="mt-4 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
              {/* Reference Link */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Reference Link:
                </h2>
                <div
                  className="mt-4 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.reference_link }}
                />
              </div>
              {/* Reference Link */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Contact Phone:
                </h2>
                <div
                  className="mt-4 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.phone }}
                />
              </div>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Contact Email:
                </h2>
                <div
                  className="mt-4 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.email }}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
