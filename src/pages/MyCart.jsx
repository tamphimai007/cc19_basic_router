import useProductStore from "../store/product-store";

// rfce
function MyCart() {
  // Javascript
  const cart = useProductStore((state) => state.cart);
  console.log(cart);
  return <h1>Mycart</h1>;
}

export default MyCart;
