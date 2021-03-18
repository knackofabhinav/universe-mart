import './App.css';
import {useState, useEffect} from 'react';
import {useTheme} from '../src/contexts/theme-context' 
import {Navigation} from './components/Navigation/Navigation'
import {ProductListing} from './components/Product Listing/ProductListing'
import {Wishlist} from './components/Wishlist/Wishlist'
import {Cart} from './components/Cart/Cart'
const axios = require('axios');


function App() {
  const {theme:{backgroundColor, color}} = useTheme();
  const [route, setRoute] = useState('products');

  useEffect(() => {
    (async function(){
      try{
        const {data} = await axios.get("/api/productlist")
        console.log(data.productlist)
      }
      catch (error){
        console.error(error)
      }
      finally{
        console.log("done")
      }
    })();
  }, [])

  
  return (
    <div className="App" style={{backgroundColor: backgroundColor, color: color}}>
      <Navigation setRoute={setRoute}/>
      {route==='product' && <ProductListing />}
      {route==='wishlist' && <Wishlist />}
      {route==='cart' && <Cart />}
    </div>
  );
}

export default App;
