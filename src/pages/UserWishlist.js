import Link from "next/link";
import UserWishlistItem from "./UserWishlistItem";

const UserWishList = (props) => {
  const wishlistItems=props.wishlistItems;
  // const cartProducts = useSelector((state) => state.cart.cartItems);

  return (
    <div className="Container">
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
          <h1 className="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">
            Wishlist
          </h1>
          <form className="mt-12">
            <section aria-labelledby="cart-heading">
              <ul
                role="list"
                className="border-t border-b border-gray-200 divide-y divide-gray-200"
              >
                <UserWishlistItem wishlistItems={wishlistItems}/>

                {/* <ListGroup className="cart">
                  <div className="cart_item-list">
                    {cartProducts.length === 0 ? (
                      <h6 className="text-center mt-5">
                        No item added to the wish list
                      </h6>
                    ) : (
                      cartProducts.map((item, index) => (
                        <WishlistItem item={item} key={index} />
                      ))
                    )}
                  </div>
                </ListGroup> */}
              </ul>
            </section>

            {/* Order summary */}
            <section aria-labelledby="summary-heading" className="mt-10">
              <div>
                <dl className="space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Subtotal
                    </dt>
                    <dd className="ml-4 text-base font-medium text-gray-900">
                      $96.00
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10">
                <Link href="/AllProducts">
                  <button
                    type="submit"
                    href="#"
                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserWishList;
