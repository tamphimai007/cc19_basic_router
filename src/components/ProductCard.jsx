// rfce
import { ShoppingCart } from "lucide-react";
import useProductStore from "../store/product-store";
function ProductCard({ product }) {
  const actionAddToCart = useProductStore((state) => state.actionAddToCart);
  return (
    <div className="bg-slate-100 m-2 p-2 rounded-md shadow-md">
      <img
        className="w-[200px] h-[100px] object-cover"
        src={product.images[0]}
      />
      <p className="text-sm font-semibold">{product.title.slice(0, 20)}...</p>
      <p className="text-sm">{product.description.slice(0, 30)}</p>
      <div className="flex justify-between">
        <p className="text-sm">{product.price}</p>
        <ShoppingCart
        className="hover:cursor-pointer"
        onClick={()=>actionAddToCart(product)}
        color="red" />
      </div>
    </div>
  );
}
export default ProductCard;
