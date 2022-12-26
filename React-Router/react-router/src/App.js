import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main></main>
      <Routes>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
