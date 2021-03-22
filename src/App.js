import "./App.css";
import { useState, useEffect } from "react";
import { useTheme } from "../src/contexts/theme-context";
import { useCart } from "./contexts/cart-context";
import { Navigation } from "./components/Navigation/Navigation";
import { ProductListing } from "./components/Product Listing/ProductListing";
import { Wishlist } from "./components/Wishlist/Wishlist";
import { Cart } from "./components/Cart/Cart";
import { ProductPage } from "./components/Product Page/ProductPage";
const axios = require("axios");

function App() {
  const {
    theme: { backgroundColor, color },
  } = useTheme();
  const [wishlist, setWishlist] = useState([]);
  const [route, setRoute] = useState("product");
  const [productlist, setProductlist] = useState([]);
  const [loader, setLoader] = useState(false);
  const { cartItems } = useCart();

  useEffect(() => {
    (async function () {
      try {
        setLoader(true);
        const { data } = await axios.get("/api/productlist");
        console.log(data.productlist);
        setProductlist(data.productlist);
        console.log(productlist);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    })();
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
    >
      <Navigation setRoute={setRoute} />
      {loader && (
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "lightgray" }}>Your Goodies are Loading...</h1>
        </div>
      )}
      {route === "productpage" && <ProductPage />}
      {route === "product" && (
        <ProductListing
          productlist={productlist}
          setProductlist={setProductlist}
          wishlist={wishlist}
          setWishlist={setWishlist}
        />
      )}
      {route === "wishlist" && <Wishlist wishlist={wishlist} />}
      {route === "cart" && <Cart />}
    </div>
  );
}

export default App;
