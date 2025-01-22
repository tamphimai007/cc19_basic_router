// rfce
import { useEffect } from "react";
import useProductStore from "../store/product-store";
function Product() {
  // Javascript
  const products = useProductStore((state) => state.products);
  const actionGetData = useProductStore((state) => state.actionGetData);
  
    useEffect(()=>{
        // code body
        actionGetData()
    },[])

  return (
    <div>
      <button onClick={actionGetData} className="bg-green-400">
        Get Data
      </button>
      <hr />

      {
        products?.map((product)=>{
            console.log(product)
            return <li>{product.title}</li>
        })
      }
    </div>
  );
}
export default Product;
