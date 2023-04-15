//zq: create-0323
import { useSelector } from "react-redux";
import UserProductItem from "./UserProductItem.js";

const UserProduct = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);

  return (
    <div className="Container">
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
          <h1 className="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">
            My Product
          </h1>
          <form className="mt-12">
            <section aria-labelledby="cart-heading">
              <ul
                role="list"
                className="border-t border-b border-gray-200 divide-y divide-gray-200"
              >
                <UserProductItem />
                {/* <ListGroup className="cart">
                  <div className="cart_item-list">
                    {cartProducts.length === 0 ? (
                      <h6 className="text-center mt-5">
                        You haven't uploaded any products yet.
                      </h6>
                    ) : (
                      cartProducts.map((item, index) => (
                        <UserProductItem item={item} key={index} />
                      ))
                    )}
                  </div>
                </ListGroup> */}
              </ul>
            </section>

            {/* Order summary */}
            <section aria-labelledby="summary-heading" className="mt-10">
              <div className="mt-10">
                <button
                  type="submit"
                  href="#"
                  className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Post Product
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProduct;
