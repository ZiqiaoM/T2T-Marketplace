import Link from "next/link";
import "react-image-gallery/styles/css/image-gallery.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/wish-list/cartSlice";

// export async function getStaticProps({ params, req }) {
//   const wishlistItems = await prisma.wishlist.findMany({
//     select: {
//       id: true,
//       product_id: true,
//       products: {
//         select: {
//           post_title: true,
//           images: {
//             select: {
//               src: true,
//             },
//           },
//         },
//       },
//     },
//   });

//   return {
//     props: {
//       wishlistItems,
//     },
//   };
// }

const UserWishlistItem = (props) => {
  const wishlistItems = props.wishlistItems;
  console.log("From UserWishlistItem: ", wishlistItems);

  const dispatch = useDispatch();
  // delete item
  const deleteItem = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  if (!wishlistItems || wishlistItems.length === 0) {
    return (
      <h6 className="text-center mt-5">
        You haven't added any products to your wishlist yet.
      </h6>
    );
  }

  return (
    <ul>
      {wishlistItems.map((item) => {
        const { product_id, products } = item;
        const id = product_id;
        const { post_title, price, images } = products;
        const image = images[0].src;

        return (
          <li key={id} className="flex py-6">
            <Link passHref href={`/productDetails/${id}`}>
              <div className="flex-shrink-0">
                {/* <ImageGallery items={imageList} showThumbnails={true} /> */}
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
export default UserWishlistItem;

// CSS
// .image-gallery-container {
//   width: 40%;
//   height: auto;
// }

// .image-gallery-slide img {
//   max-width: 100%;
//   height: auto;
// }
// return (
//   <ListGroupItem className="border-0 cart_item">
//     <div className="ml-4 flex-1 flex flex-col sm:ml-6">
//       <div className="cart_item-info d-flex gap-2">
//         <li key={id} className="flex py-6">
//           <Link passHref legacyBehavior href={`/productDetails/${id}`}>
//             <div className="flex-shrink-0">
//               <img
//                 src={images}
//                 className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
//               />
//             </div>
//           </Link>
//           <div className="ml-4 flex-1 flex flex-col sm:ml-6">
//             <div className="flex justify-between">
//               <h4 className="text-sm">
//                 <a
//                   passHref
//                   legacyBehavior
//                   href={`/productDetails/${id}`}
//                   className="font-medium text-gray-700 hover:text-gray-800"
//                 >
//                   {post_title}
//                 </a>
//               </h4>
//             </div>
//             <p className="mt-1 text-sm text-gray-500">Price: ${price}</p>
//             <span
//               className="delete_btn text-sm font-medium text-indigo-600 hover:text-indigo-500"
//               onClick={deleteItem}
//             >
//               <CloseIcon />
//               remove
//             </span>
//           </div>
//         </li>
//       </div>
//     </div>
//   </ListGroupItem>
// );
