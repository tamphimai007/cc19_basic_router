// rfce
import useProductStore from "../store/product-store";
function Product() {
  // Javascript
  const products = useProductStore((state) => state.products);
  const actionGetData = useProductStore((state)=>state.actionGetData)
  console.log(products);
  return <div>
    <button 
    onClick={actionGetData}
    className="bg-green-400">
        Get Data
        </button>
    </div>;
}
export default Product;
