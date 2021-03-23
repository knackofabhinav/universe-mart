import './Navigation.css'
import LogoLight from '../../assets/logo/universe.png'
import LogoDark from '../../assets/logo/Universe-logo-white.png'
import {useTheme} from '../../contexts/theme-context'
import {useCart} from '../../contexts/cart-context'

export const Navigation = ({setRoute}) => {
    const {dark,toggle} = useTheme()
    const {cartItems} = useCart()
    return (
        <div className="navigation">
            <a href="/">
                <img src={dark ? LogoDark : LogoLight} alt="logo"/>
            </a>
            <ul style={{}}>
                <li style={{padding: '0.5em', margin: '0.5em'}} onClick={() => setRoute('product')}>Products</li>
                <li style={{padding: '0.5em', margin: '0.5em'}} onClick={() => setRoute('wishlist')}>
                    <i className="fas fa-heart"></i>
                </li>
                <li style={{padding: '0.5em', margin: '0.5em'}} onClick={() => setRoute('cart')}>
                    <div className="cart-icon">
                        <i className="fas fa-shopping-cart"></i>
                        <span>{cartItems.length}</span>
                    </div>
                </li>
                <li  style={{padding: '0.5em', margin: '0.5em'}} onClick={toggle}>{dark
                        ? <i className="fas fa-sun"></i>
                        : <i className="fas fa-moon"></i>}</li>
            </ul>
        </div>
    )
}