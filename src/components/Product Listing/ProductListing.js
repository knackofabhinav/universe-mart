import { useCart } from "../../contexts/cart-context";
import { useTheme } from "../../contexts/theme-context";
import "./ProductListing.css";
import { useReducerContext } from "../../contexts/reducer-context";

export const ProductListing = ({ setProductlist }) => {
  const {state:{wishlist, productlist}, dispatch} = useReducerContext()
  const {theme: { backgroundColor }} = useTheme();
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
          setCartItems([...cartItems, newProduct]);
        }
      }
    }
    console.log(cartItems);
  };

  const addToWishlist = (newProduct) => {
    dispatch({type: 'ADD_TO_WISHLIST', payload:{newProduct}})
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
    const sortedProductList = [...productlist].sort(compare)
    return dispatch({type: 'PRICE_HIGH_TO_LOW', payload:{sortedProductList}})
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
    const sortedProductList = [...productlist].sort(compare)
    return dispatch({type: 'PRICE_LOW_TO_HIGH', payload:{sortedProductList}})
  }
  return (
    <div>
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', margin: '1em'}}>
      <p>Prices: </p>
      <button onClick={() => highToLowHandler()} className='btn text outline primary'>High to Low</button>
      <button onClick={() => lowToHighHandler()} className='btn text outline primary'>Low To High</button>
    </div>
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
                  <i className="far fa-heart"></i>
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
              <div style={{display: 'flex', justifyContent: 'space-around', alignItems: "center", margin: '1.5em'}}>
                <a href={product.url}>
                  <button className="btn primary" style={{width: '6em'}}>Buy Now</button>
                </a>
                <button
                  className="btn secondary outline"
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
