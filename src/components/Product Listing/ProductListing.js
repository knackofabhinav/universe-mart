import { useCart } from "../../contexts/cart-context";
import { useTheme } from "../../contexts/theme-context";
import { useState } from "react";
import "./ProductListing.css";

export const ProductListing = ({ productlist, setProductlist, wishlist, setWishlist }) => {
  const {
    theme: { backgroundColor },
  } = useTheme();
  const { cartItems, setCartItems } = useCart();
  const addToCart = (newProduct) => {
    if (cartItems.length === 0) {
      setCartItems([...cartItems, newProduct]);
    } else {
      for (let index in cartItems) {
        if (cartItems[index].id === newProduct.id) {
          cartItems[index].quantity += 1;
          setCartItems([...cartItems]);
          break;
        } else {
          cartItems[index].quantity = 1;
          setCartItems([...cartItems, newProduct]);
        }
      }
    }
    console.log(cartItems);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    console.log(wishlist);
  };

  const highToLowHandler = () => {
    const compare = (a,b) => {
      const priceA = a.price
      const priceB = b.price
    
      let comparison = 0;
      if (priceA > priceB) {
        comparison = 1;
      } else if (priceA < priceB) {
        comparison = -1;
      }
      return comparison * -1; //for descending comparison * -1
    }
    const sortedProductList = productlist.sort(compare)
    return setProductlist(sortedProductList)
  }

  const lowToHighHandler = () => {
    const compare = (a,b) => {
      const priceA = a.price
      const priceB = b.price
    
      let comparison = 0;
      if (priceA > priceB) {
        comparison = 1;
      } else if (priceA < priceB) {
        comparison = -1;
      }
      return comparison; //for descending comparison * -1
    }
    const sortedProductList = productlist.sort(compare)
    return setProductlist(sortedProductList)
  }
  return (
    <div>
      <button onClick={highToLowHandler}>High to Low</button>
      <button onClick={lowToHighHandler}>Low To High</button>
      <ul className="productlist-container">
        {productlist.map((product) => {
          return (
            <div
              className="card"
              key={product.id}
              style={{
                backgroundColor: backgroundColor,
                cursor: "pointer",
              }}
            >
              <div className="thumbnail">
                <i className="fas fa-badge"></i>
                <p className="badge-text">New</p>
                <img src={product.image} alt="product" />
                <button
                  className="wishlist"
                  style={{
                    fontSize: "large",
                    outline: "none",
                    border: "1px solid black",
                  }}
                  onClick={() => {
                    addToWishlist(product);
                  }}
                >
                  <i class="far fa-heart"></i>
                </button>
              </div>
              <div className="cta-container">
                <h2
                  style={{
                    textAlign: "center",
                  }}
                >
                  {product.name}
                </h2>
              </div>
              <p
                className="text-heading2"
                style={{
                  textAlign: "center",
                }}
              >
                Price: ₹{product.price}/-
              </p>
              <div>
                <a href={product.url}>
                  <button className="btn primary">Buy Now</button>
                </a>
                <button
                  className="btn secondary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
