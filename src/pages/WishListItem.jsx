import { ListGroupItem } from "reactstrap";

import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/wish-list/cartSlice";

const WishlistItem = ({ item }) => {
  //add products
  if (item){

    const { id, post_title, price, images, quantity, totalPrice } = item;
  }

  else{
    return(
      <ListGroupItem className="border-0 cart_item"></ListGroupItem>
    )
  }
  const dispatch = useDispatch();

  // const increase_item
  const increaseItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        post_title,
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
            <Link passHref legacyBehavior href={`/productDetails/${id}`}>
              <div className="flex-shrink-0">
                <img
                  src={images}
                  className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                />
              </div>
            </Link>
            <div className="ml-4 flex-1 flex flex-col sm:ml-6">
              <div className="flex justify-between">
                <h4 className="text-sm">
                  <a
                    passHref
                    legacyBehavior
                    href={`/productDetails/${id}`}
                    className="font-medium text-gray-700 hover:text-gray-800"
                  >
                    {post_title}
                  </a>
                </h4>
              </div>
              <p className="mt-1 text-sm text-gray-500">Price: ${price}</p>
              <span
                className="delete_btn text-sm font-medium text-indigo-600 hover:text-indigo-500"
                onClick={deleteItem}
              >
                <CloseIcon />
                remove
              </span>
            </div>
          </li>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default WishlistItem;
