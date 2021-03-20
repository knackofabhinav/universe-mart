import { useCart } from "../../contexts/cart-context"
import { useTheme } from "../../contexts/theme-context"
import {useState} from 'react';
import "./ProductListing.css"

export const ProductListing = ({productlist}) => {
  const [wishlist, setWishlist] = useState([])
  const [wishlisted, setWishlisted] = useState(false)
    const {theme:{backgroundColor}} = useTheme()
    const {cartItems, setCartItems} = useCart()
    const addToCart = (product) => {
        setCartItems([...cartItems, product])
        console.log(cartItems)
    }

    const addToWishlist = (product) => {
         setWishlist([...wishlist, product])
         console.log(wishlist)
    }


    return(
        <div >
            <ul className='productlist-container'>
                {productlist.map((product) => {
                    return (<div className="card" key={product.id} style={{backgroundColor: backgroundColor}}>
                                <div className="thumbnail">
                                    <i className="fas fa-badge"></i>
                                    <p className="badge-text">New</p>
                                    <img src={product.image} alt='product'/>
                                    <button 
                                    key={product.id}
                                    className="wishlist" 
                                    style={{fontSize: 'large', border: '1px solid black'}}
                                    onClick={() => {addToWishlist(product)}}>
                                    {wishlisted ? <i style={{color:'red'}} class="fas fa-heart"></i> :<i class="far fa-heart"></i>}
                                    </button>
                                </div>
                                <div className='cta-container'>
                                <h2 style={{textAlign:'center'}}>{product.name}</h2>
                                </div>
                                <p className='text-heading2' style={{textAlign:'center'}}>Price: ₹{product.price}/-</p>
                                <div>
                                <a href={product.url}>
                                <button className="btn primary">Buy Now</button>
                                </a>
                                <button className="btn secondary" onClick={()=> addToCart(product)}>Add to Cart</button>
                                </div>
                            </div>)
                })}
            </ul>
        </div>
    )
}