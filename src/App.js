import "./App.css";
import { useState, useEffect } from "react";
import { useTheme } from "../src/contexts/theme-context";
import { Navigation } from "./components/Navigation/Navigation";
import { ProductListing } from "./components/Product Listing/ProductListing";
import { Wishlist } from "./components/Wishlist/Wishlist";
import { Cart } from "./components/Cart/Cart";
import { ProductPage } from "./components/Product Page/ProductPage";
import { useReducerContext } from "./contexts/reducer-context";
const axios = require("axios");

function App() {
  const {
    theme: { backgroundColor, color },
  } = useTheme();
  const {state:{productlist}, dispatch} = useReducerContext()
  const [route, setRoute] = useState("product");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        setLoader(true);
        const { data } = await axios.get("/api/productlist");
        const initialList = data.productlist;
        dispatch({type: 'INITAL_PRODUCTLIST', payload:{initialList}})
        console.log(productlist);
        setLoader(false)
      } catch (error) {
        console.error(error);
        setLoader(false)
      } finally {
        setLoader(false);
      }
    })();
  }, []);

  return (
    <div
      className="App"
      style={{
        maxWidth: '100%',
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
      {route === "product" && <ProductListing/>}
      {route === "wishlist" && <Wishlist />}
      {route === "cart" && <Cart />}
    </div>
  );
}

export default App;
