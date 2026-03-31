function MyCart({ myCart }) {
  return (<>

    <button className="cart-button">In cart : {myCart && myCart.length}</button>
  </>)
}

export default MyCart;