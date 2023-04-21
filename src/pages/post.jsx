import { Cloudinary } from "@cloudinary/url-gen";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import swal from "sweetalert";
import CldGallery from "../components/cloudinary/CldGallery";
import ImageUploader from "../components/cloudinary/ImageUploader";

import useUser from '../lib/userUser';

const ProductCategory = [
  { id: "cloth", title: "Cloth" },
  { id: "kitchenware", title: "Kitchenware" },
  { id: "Electronics", title: "Electronics" },
  { id: "funiture", title: "Funiture" },
  { id: "other", title: "Other" },
];

const Locations = [
  { id: "on_campus", title: "On Campus" },
  { id: "off_campus", title: "Off Campus" },
];

const Conditions = [
  { id: "new", title: "New" },
  { id: "used", title: "Used" },
];

const defaultImg =
  "https://nato.cdnartwhere.eu/cdn/ff/oca4fwSi7ZMflFF5-LRcenPXoZTDpZSTkwLZEvZtQIw/1607780582/public/default_images/default-image.jpg";

import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../lib/session";

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user;
  if (user === undefined || user.id == -1) {
    // Router.push("/Login");
    // res.redirect(307, '/Login');
    // res.setHeader("location", "/Login");
    // res.statusCode = 302;
    // res.end();
    return {
      props: {
        user: {
          isLoggedIn: false,
          login: "",
          avatarUrl: "",
          id: -1,
          email: "NOTLOGIN",
          username: "NOTLOGIN",
        },
      },
    };
  }

  return {
    props: { user: req.session.user },
  };
},
sessionOptions);

export default function Example({ user }) {


  if(user.isLoggedIn==false){
    swal("You have not login yet!", "", "");
  }
  const { mutateUser } = useUser({
    redirectTo: "/Login",
    redirectIfFound: false,
  });

  const [imagesUploadedList, setImagesUploadedList] = useState([]);
  const [ImageUrl, setImageUrl] = useState([]);

  function handleImageUrl(url) {
    setImageUrl((prevState) => [...prevState, url]);
    console.log(ImageUrl);
  }

  const onImageUploadHandler = (publicId) => {
    setImagesUploadedList((prevState) => [...prevState, publicId]);
  };

  const cld = new Cloudinary({
    cloud: {
      cloud_name: "djwgzmcwe", //Your cloud name
      upload_preset: "products", //Create an unsigned upload preset and update this
    },
  });

  const [condition, setCondition] = useState(Conditions[0].title);
  const [location, setLocation] = useState(Locations[0].title);
  const [category, setCategory] = useState(ProductCategory[0].title);

  function handleCondition(e) {
    setCondition(e.target.value);
  }
  function handleLocation(e) {
    setLocation(e.target.value);
  }
  function handleCategory(e) {
    setCategory(e.target.value);
  }
  async function submitPost() {
    // let image = ImageUrl;
    let data = {
      post_title: document.querySelector("#product_title").value,
      condition: condition,
      location: location,
      category_name: category,
      price: parseFloat(document.querySelector("#price").value),
      product_details: document.querySelector("#product_details").value,
      reference_link: document.querySelector("#reference_link").value,
      email: document.querySelector("#email_address").value,
      if_sold: false,
      seller_id: user.id,
      //  images Image[]
    };
    if (ImageUrl.length == 0) {
      setImageUrl((prevState) => [...prevState, defaultImg]);
    }
    console.log("submit posts.");
    console.log(data);
    console.log(ImageUrl);
    try {
      const body = { data, ImageUrl };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // await Router.push('/drafts');
      // show success message
      swal("You have successfully posted the item!", "", "success");

      // redirect to allproducts page
      window.location.href = "/AllProducts";
      // await Router.push('/drafts');
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="space-y-6 container mx-auto px-4">
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Post product
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <form className="space-y-6" action="#" method="POST">
            {/* Product details */}
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label className="text-base font-medium text-gray-900">
                  Product title
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    // required
                    type="text"
                    name="product_title"
                    id="product_title"
                    // aria-invalid="true"
                    inputProps={{ maxLength: 30 }}
                    aria-describedby="product_title_error"
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                {/* <p className="mt-2 text-sm text-red-600" id="email-error">
                  Your title must be less than 30 characters.
                </p> */}
              </div>
            </div>
            {/* Price */}
            <div className="grid grid-cols-5 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="price"
                  className="text-base font-medium text-gray-900"
                >
                  Price
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="0.00"
                  />
                </div>
                <p className="text-sm leading-5 text-gray-500">
                  Enter 0.00 if this product is free.
                </p>
              </div>
            </div>
            {/* Product category */}
            <div>
              <fieldset className="mt-6">
                <label className="text-base font-medium text-gray-900">
                  Product category
                </label>
                <p className="text-sm leading-5 text-gray-500">
                  What is the category of your product?
                </p>

                <div className="space-y-4">
                  {ProductCategory.map((ProductCategory) => (
                    <div key={ProductCategory.id} className="flex items-center">
                      <input
                        id={ProductCategory.id}
                        name="product_category"
                        type="radio"
                        value={ProductCategory.title}
                        onChange={handleCategory}
                        defaultChecked={ProductCategory.id === "cloth"}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor={ProductCategory.id}
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        {ProductCategory.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            {/* Product Condition */}
            <div>
              <label className="text-base font-medium text-gray-900">
                Conditions
              </label>
              <p className="text-sm leading-5 text-gray-500">
                What is the condition of your product?
              </p>
              <fieldset className="mt-4">
                <legend className="sr-only">Condition</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  {Conditions.map((condition) => (
                    <div key={condition.id} className="flex items-center">
                      <input
                        id={condition.id}
                        name="notification-method"
                        type="radio"
                        value={condition.title}
                        defaultChecked={condition.id === "new"}
                        onChange={handleCondition}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor={condition.id}
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        {condition.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            {/* Product location */}
            <div>
              <label className="text-base font-medium text-gray-900">
                Locations
              </label>
              <p className="text-sm leading-5 text-gray-500">
                Where do you prefer to trade your product?
              </p>
              <fieldset className="mt-4">
                <legend className="sr-only">Location</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  {Locations.map((Location) => (
                    <div key={Location.id} className="flex items-center">
                      <input
                        id={Location.id}
                        name="location_product"
                        type="radio"
                        value={Location.title}
                        onChange={handleLocation}
                        defaultChecked={Location.id === "email"}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor={Location.id}
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        {Location.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            {/* Product details */}
            <div>
              <label
                htmlFor="about"
                className="text-base font-medium text-gray-900"
              >
                Product details
              </label>
              <span className="text-sm text-gray-500" id="detail-optional">
                (Optional)
              </span>
              <div className="mt-1">
                <textarea
                  id="product_details"
                  name="product_details"
                  rows="5"
                  cols="80"
                  className="border-gray-300 rounded-md sm:text-sm shadow-sm"
                  aria-describedby="detail-optional"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Brief description for your Product.
              </p>
            </div>
            {/* Product reference */}
            <div>
              <label
                htmlFor="reference_link"
                className="text-base font-medium text-gray-900"
              >
                Reference link
              </label>
              <span className="text-sm text-gray-500" id="link-optional">
                (Optional)
              </span>
              <div className="mt-1">
                <textarea
                  id="reference_link"
                  name="reference_link"
                  rows="4"
                  cols="80"
                  className="border-gray-300 rounded-md sm:text-sm shadow-sm"
                  aria-describedby="link-optional"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Give some reference links for your product. URLs are
                hyperlinked.
              </p>
            </div>
            {/* Product photo */}
            <div>
              <label className="text-base font-medium text-gray-900">
                Upload photo
              </label>
              {/* <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"></div> */}
              <div className="border-gray-300 border-dashed mt-1 flex px-9 pt-2 pb-9 justify-center border-2 rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <ImageUploader
                      cloud_name={cld.cloudinaryConfig.cloud.cloud_name}
                      upload_preset={cld.cloudinaryConfig.cloud.upload_preset}
                      onImageUpload={(publicId) =>
                        onImageUploadHandler(publicId)
                      }
                      recordUrl={(url) => handleImageUrl(url)}
                    />
                  </div>
                </div>
              </div>
              <CldGallery
                imagesUploaded={imagesUploadedList}
                {...cld}
                cloud_name={cld.cloudinaryConfig.cloud.cloud_name}
              />
            </div>
            {/* Contact information */}
            <div>
              <label
                htmlFor="reference_link"
                className="text-base font-medium text-gray-900"
              >
                Contact information
              </label>
              <span className="text-sm text-gray-500" id="email-optional">
                (Optional)
              </span>
              {/* Phone */}
              <div className="grid grid-cols-5 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
                      placeholder="+1 (555) 987-6543"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
              </div>
              {/* email */}
              <div className="grid grid-cols-5 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="email_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>

                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      name="email_address"
                      id="email_address"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
                      placeholder="your@email.com"
                      aria-describedby="email-optional"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Submit botton */}
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save draft
              </button>
              <input
                type="button"
                value="Sumbit"
                onClick={submitPost}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
}
