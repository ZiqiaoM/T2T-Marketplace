import Link from "next/link";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/wish-list/cartSlice";

const UserProductItem = (props) => {
  const product = props.product;
  if (!product) {
    return (
      <div>
        <h6 className="text-center mt-5">
          You haven't uploaded any products yet.
        </h6>
      </div>
    );
  }

  const { id, price, post_title, images } = product;
  const dispatch = useDispatch();

  //delete item
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ul>
      {product.map((item) => {
        const { id, post_title, price, images } = item;
        const image = images[0].src;

        return (
          <li key={id} className="flex py-6">
            <Link passHref href={`/productDetails/${id}`}>
              <div className="flex-shrink-0 bg-white-200 rounded-lg overflow-hidden ">
                <img
                  src={image}
                  className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                />
              </div>
            </Link>
            <div className="ml-4 flex-1 flex flex-col sm:ml-6">
              <div className="flex justify-between">
                <h4 className="text-sm">
                  <Link passHref href={`/productDetails/${id}`}>
                    <div className="font-medium text-gray-700 hover:text-gray-800">
                      {post_title}
                    </div>
                  </Link>
                </h4>
              </div>
              <p className="mt-1 text-sm text-gray-500">Price: ${price}</p>
              <span
                className="delete_btn text-sm font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => deleteItem(id)}
              >
                remove
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default UserProductItem;
