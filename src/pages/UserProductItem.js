import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { ListGroupItem } from "reactstrap";
import { cartActions } from "../store/wish-list/cartSlice";

export async function getStaticPaths(req) {
  const user = req.user;
  const paths = await prisma.product.findMany({
    where: {
      seller_id: user.id,
    },
    select: {
      id: true,
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

export async function getStaticProps({ params, req }) {
  const user = req.user;
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(params.id),
      seller_id: user.id,
    },
    select: {
      id: true,
      post_title: true,
      images: {
        select: {
          src: true,
        },
      },
    },
  });

  return {
    props: {
      product,
    },
  };
}

const UserProductItem = ({ product }) => {
  if (!product) {
    return (
      <h6 className="text-center mt-5">
        You haven't uploaded any products yet.
      </h6>
    );
  }

  const { id, post_title, price, images } = product;

  const dispatch = useDispatch();

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

export default UserProductItem;
