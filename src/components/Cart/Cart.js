import { useCart } from "../../contexts/cart-context"
import { useTheme } from "../../contexts/theme-context"
import "./Cart.css"

export const Cart = () => {
    const {theme:{color}} = useTheme()
    const {cartItems, setCartItems} = useCart() // Data coming from Add to cart

    return(
        <div
      style={{
        display: "grid",
        gridTemplateColumns: '3fr 1fr',
        alignItems: "center",
        flexDirection: "row",
        minHeight: '100vh'
      }}
    >
    {cartItems.length===0 && <h1 style={{position:'absolute' ,top: '50%',justifySelf: 'center', alignSelf:'center', color: "lightgrey"}}>Add Something in your Cart !</h1>}
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
              alignItems: "center"
            }}
            key={item.id}
          >
            <img src={item.image} style={{ width: "10%" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "5em",
                fontSize: "80%"
              }}
            >
              <h2>{item.name}</h2>
              <h3 style={{ marginTop: "0.5em" }}>Price: ₹{item.price}/-</h3>
              <h3>
                Quantity: <button className="btn primary">+</button> 1{" "}
                <button className="btn primary">-</button>{" "}
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <a href={item.url}>
                <button className="btn primary text">Buy Now</button>
              </a>
              <button className="btn secondary text">Remove</button>
            </div>
          </div>
        );
      })}
      </div>
      <h1 style={{justifyContent: 'flex-start', alignSelf: 'flex-start', margin:'2em'}}>Total Price: ₹{cartItems.map(item => item.price).reduce((acc, value) => acc + value)}/-</h1>
    </div>
    )
}