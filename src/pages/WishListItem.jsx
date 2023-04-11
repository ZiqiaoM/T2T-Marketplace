import React from "react";
import { ListGroupItem } from "reactstrap";

import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/wish-list/cartSlice";

const WishlistItem = ({ item }) => {
  //add products
  const { id, product_title, price, images, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  // const increase_item
  const increaseItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        product_title,
        price,
        images,
      })
    );
  };

  //remove items
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  //delete item
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart_item">
      <div className="ml-4 flex-1 flex flex-col sm:ml-6">
        <div className="cart_item-info d-flex gap-2">
          <li key={id} className="flex py-6">
            <div className="flex-shrink-0">
              <img
                src={images}
                className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
              />
            </div>
            <div className="ml-4 flex-1 flex flex-col sm:ml-6">
              <div>
                <div className="flex justify-between">
                  {/* <h4 className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-gray-700 hover:text-gray-800"
                    >
                      {title}Water
                    </a>
                  </h4> */}
                </div>
                <p className="mt-4 text-sm text-gray-500">{product_title}</p>
                <p className="mt-4 text-sm text-gray-500">Qty: {quantity}</p>
                <p className="mt-1 text-sm text-gray-500">Price: ${price}</p>
                <p className="mt-1 text-sm text-gray-500">
                  Total: ${totalPrice.toFixed(2)}
                </p>
              </div>
              <div>
                <div className="d-flex align-items-center gap-3 justify-content-between increase_decrease-btn">
                  <span className="increase_btn" onClick={increaseItem}>
                    <AddIcon />
                  </span>
                  <span className="quantity">{quantity}</span>
                  <span className="decrease_btn" onClick={decreaseItem}>
                    <RemoveIcon />
                  </span>
                </div>
                <div className="mt-4 flex-1 flex items-end justify-between">
                  <div className="ml-4">
                    <span
                      className="delete_btn text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={deleteItem}
                    >
                      <CloseIcon />
                      remove
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="mt-4 flex-1 flex items-end justify-between">
                <div className="ml-4">
                  <span
                    className="delete_btn text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={deleteItem}
                  >
                    <CloseIcon />
                    remove
                  </span>
                </div>
              </div> */}
            </div>

            <div className="ml-4 flex-1 flex flex-col sm:ml-6">
              {/* <div>
                <div className="d-flex align-items-center gap-3 justify-content-between increase_decrease-btn">
                  <span className="increase_btn" onClick={increaseItem}>
                    <AddIcon />
                  </span>
                  <span className="quantity">{quantity}</span>
                  <span className="decrease_btn" onClick={decreaseItem}>
                    <RemoveIcon />
                  </span>
                </div>
              </div> */}
            </div>
          </li>
        </div>
        <style jsx>{`
          // .cart_item-info img {
          //   width: 40px;
          //   height: 40px;
          //   object-fit: cover;
          // }

          // .cart_product-title {
          //   font-size: 0.7rem;
          //   font-weight: 600;
          // }
          // .cart_product-price {
          //   font-size: 0.8rem;
          // }
          // .cart_product-price span {
          //   font-size: 0.9rem;
          //   font-weight: 600;
          //   color: rgb(236, 111, 33);
          // }
          .increase_decrease-btn {
            background-color: rgb(205, 242, 255);
            padding: 2px 3px;
            border-radius: 5px;
          }
          .increase_btn,
          .decrease_btn {
            cursor: pointer;
          }
          // .delete_btn {
          //   font-size: 1.1rem;
          //   /* font-weight: 300; */
          // }

          // .cart_item {
          //   padding-bottom: 10px;
          //   border-bottom: 1px solid whitesmoke;
          // }
        `}</style>
      </div>
    </ListGroupItem>
  );
};

export default WishlistItem;
