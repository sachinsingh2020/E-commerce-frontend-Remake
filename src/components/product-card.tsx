import { FaPlus } from "react-icons/fa";
import type { CartItem } from "../types/types";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const ProductCard = ({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>
      <div>
        <button
          onClick={() =>
            handler({
              productId,
              name,
              price,
              stock,
              photo,
              quantity: 1,
            })
          }>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
