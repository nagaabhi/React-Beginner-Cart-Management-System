import { useState } from 'react'
import './App.css'
import ApplicationTitle from './Components/AppTitle'
import MyCart from './Components/Cart';
import ProductsList from './Components/ProductList';
import CartDetails from './Components/CartDetails';

function App() {

  // THIS WILL STORE THE CART DERTAILS IN THE USE STATE
  const [myCart, setMyCart] = useState([]);


  return (
    <>

      <div className="title-and-cart-container">
        <ApplicationTitle />
        <MyCart myCart={myCart} />
      </div>
      <ProductsList myCart={myCart} setMyCart={setMyCart} />{/*THIS WILL STORE THE DATA OF THE PRODUCTS IN THE FORM OF LIST* */}
      <CartDetails myCart={myCart} />{/*THIS WILL DISPLAY ALL THE CART DETAILS* */}



    </>
  )
}

export default App
