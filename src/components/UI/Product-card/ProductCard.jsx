import React from "react";
import Link from "next/link";
// import productImg from '../../../images/product_01_image_01.jpg';
import "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/wish-list/cartSlice";

//import image 0130
import Image from "next/image";
const user_id = 1;

const ProductCard =  (props) => {
  // const {id, title, image01, price} = props.item;
  const { id, images, post_title, price } = props.item;
  // console.log(Array.isArray(images));
  // console.log(id,images,post_title,price);
  // console.log(`/productDetails/${id}`);
  const dispatch = useDispatch();
  
  const addToCart = async() => {
    dispatch(
      cartActions.addItem({
        id,
        //title,
        post_title,
        // image01,
        images,
        price,
      })
    );
    try{
      let data = {
          product_id: id,
          user_id: user_id,
        };
      const body = { data };
      await fetch("/api/addWishlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          // await Router.push('/drafts');
  } catch (error) {
      console.error(error);
  }
  };
  return (
    <div>
      <li key={id}>
        <Link passHref legacyBehavior href={`/productDetails/${id}`}>
          <a key={id} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={images}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-lg text-gray-700">{post_title}</h3>
            {/* <div className="product_content"> */}
            {/* <h5><Link>Pasta Maker</Link></h5> */}
            {/* <h5>
          <Link href={`/products/${id}`}>{post_title}</Link>
        </h5> */}
            <div className="d-flex align-items-center justify-content-between">
              {/* <span className='product_price'>$15.00</span> */}
              {/* <span className="product_price">
            <b>${price}</b>
          </span> */}
              <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
              {/* <button className="addToWl_btn" onClick={addToCart}>
                Add to Wishlist
              </button> */}
              {/* </div> */}
            </div>
          </a>
        </Link>
        <button className="addToWl_btn" onClick={addToCart}>
          Add to Wishlist
        </button>
      </li>
      <style jsx>{`
        li {
          list-style: none;
        }
        .product_item {
          border: 1px solid #fde4e4;
          text-align: center;
          padding: 30px;
          cursor: pointer;
        }

        .product_img {
          margin-bottom: 20px;
          transition: 0.4s;
        }
        .product_img:hover {
          transform: scale(1.2);
        }
        .product_content h5 a {
          color: navy;
          text-decoration: none;
        }
        .product_content h5 {
          margin-bottom: 10px;
        }

        .product_price {
          font-weight: bold;
          font-size: 1.1rem;
          color: rgb(243, 93, 39);
        }
        .addToWl_btn {
          border: none;
          padding: 7px 25px;
          background-color: rgb(78, 163, 216);
          color: white;
          border-radius: 5px;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
