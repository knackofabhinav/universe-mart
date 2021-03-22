import { useCart } from "../../contexts/cart-context";
import { useTheme } from "../../contexts/theme-context";
import "./Cart.css";

export const Cart = () => {
  const {
    theme: { color },
  } = useTheme();
  const { cartItems, setCartItems } = useCart(); // Data coming from Add to cart
  console.log(cartItems);

  function removeItem(item) {
    let newCart = [...cartItems];
    if (newCart.length !== 0) {
      setCartItems(newCart.filter((product) => item.id !== product.id));
    } else {
      setCartItems(newCart);
    }
  }

  function incrementHandler({ item }) {}

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gridTemplateRows: "1fr",
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      {cartItems.length === 0 && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <h1
            style={{
              justifySelf: "center",
              alignSelf: "center",
              color: "lightgrey",
            }}
          >
            Add Something in your Cart !
          </h1>
        </div>
      )}
      <div>
        {cartItems.map((item) => {
          return (
            <div
              className="card text horizontal"
              style={{
                border: `1px solid ${color}`,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // alignItems: "center",
                minHeight: "20vh",
              }}
              key={item.id}
            >
              <img
                src={item.image}
                style={{
                  // width: "10%"
                  maxHeight: "10rem",
                  margin: "1rem",
                }}
                alt="product"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "5em",
                  fontSize: "80%",
                  width: "25em",
                }}
              >
                <h2>{item.name}</h2>
                <h3
                  style={{
                    marginTop: "0.5em",
                  }}
                >
                  Price: ₹{item.price}/-
                </h3>
                <h3>
                  Quantity:
                  <button
                    className="btn primary"
                    onClick={() => incrementHandler(item)}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button className="btn primary">-</button>{" "}
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a href={item.url}>
                  <button className="btn primary text">Buy Now</button>
                </a>
                <button
                  className="btn secondary text"
                  onClick={() => removeItem(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {cartItems.length !== 0 && (
        <div
          style={{
            margin: "2em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Total Price:</h1>
          <h1>
            {" "}
            ₹
            {cartItems.length !== 0 &&
              cartItems
                .map((item) => item.price * item.quantity)
                .reduce((acc, value) => acc + value)}
            /-
          </h1>
          <button className="btn primary">Checkout</button>
        </div>
      )}
    </div>
  );
};
