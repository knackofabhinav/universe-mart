import {useCart} from "../../contexts/cart-context"
import {useTheme} from "../../contexts/theme-context"

export const Wishlist = ({wishlist, setWishlist}) => {
    const {cartItems, setCartItems} = useCart()
    const {
        theme: {
            backgroundColor,
            color
        }
    } = useTheme()
    const removeFromWishlist = (product) => {
        const itemRemovedWishlist = [...wishlist].filter(item => item.id!==product.id)
        console.log(itemRemovedWishlist)
        setWishlist(itemRemovedWishlist)
    }

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

    return (
        <div
            style={{
            minHeight: '100vh',
            display: "flex",
            justifyContent: 'center'
        }}>
            {wishlist.length === 0 && <h1
                style={{
                position: 'absolute',
                top: '50%',
                justifySelf: 'center',
                alignSelf: 'center',
                color: "lightgrey",
                textAlign: 'center'
            }}>Man ! Even Your wishlist is empty.</h1>}
            <ul className='productlist-container'>
                {wishlist.map((product) => {
                    return (
                        <div
                            className="card"
                            key={product.id}
                            style={{
                            backgroundColor: backgroundColor,
                            maxHeight: '65vh',
                            cursor: 'pointer'
                        }}>
                            <div className="thumbnail">
                                <i className="fas fa-badge"></i>
                                <p className="badge-text">New</p>
                                <img src={product.image} alt='product'/>
                                <button
                                    onClick={() => removeFromWishlist(product)}
                                    key={product.id}
                                    className="wishlist"
                                    style={{
                                    fontSize: 'large',
                                    border: '1px solid black'
                                }}>
                                    <i
                                        style={{
                                        color: 'red'
                                    }}
                                        class="fas fa-heart"></i>
                                </button>
                            </div>
                            <div className='cta-container'>
                                <h2
                                    style={{
                                    textAlign: 'center'
                                }}>{product.name}</h2>
                            </div>
                            <p
                                className='text-heading2'
                                style={{
                                textAlign: 'center'
                            }}>Price: ₹{product.price}/-</p>
                            <div>
                                <a href={product.url}>
                                    <button className="btn primary">Buy Now</button>
                                </a>
                                <button
                                    className="btn secondary"
                                    onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}