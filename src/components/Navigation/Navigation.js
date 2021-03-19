import './Navigation.css'
import LogoLight from '../../assets/logo/universe.png'
import LogoDark from '../../assets/logo/Universe-logo-white.png'
import {useTheme} from '../../contexts/theme-context'

export const Navigation = ({setRoute}) => {
    const {dark, toggle} = useTheme()
    return(
        <div className="navigation">
            <a href="/">
                <img src={dark ? LogoDark : LogoLight} alt="logo"/>
            </a>
            <ul>
                <li onClick={() => setRoute('product')}>Products</li>
                <li onClick={() => setRoute('wishlist')}><i className="fas fa-heart"></i></li>
                <li onClick={() => setRoute('cart')}><i className="fas fa-shopping-cart"></i></li>
                <li onClick={toggle}>{dark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}</li>
            </ul>
        </div>
    )
}