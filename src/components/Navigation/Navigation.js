import './Navigation.css'
import LogoLight from '../../assets/logo/universe.png'
import LogoDark from '../../assets/logo/Universe-logo-white.png'
import {useTheme} from '../../contexts/theme-context'

export const Navigation = ({setRoute}) => {
    const {dark, toggle} = useTheme()
    return(
        <div class="navigation">
            <a href="/">
                <img src={dark ? LogoDark : LogoLight} alt="logo"/>
            </a>
            <ul>
                <li onClick={() => setRoute('product')}>Products</li>
                <li onClick={() => setRoute('wishlist')}><i class="fas fa-heart"></i></li>
                <li onClick={() => setRoute('cart')}><i class="fas fa-shopping-cart"></i></li>
                <li onClick={toggle}>{dark ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}</li>
            </ul>
        </div>
    )
}