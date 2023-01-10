import Basket from "./pages/basket/containers/basket-container";
import Products from "./pages/products/containers/product-container";
import Rules from "./pages/rules/containers/rules-container";

export default function App() {
  return (
    <div>
      <Products />
      <Rules />
      <Basket />
    </div>
  );
}
