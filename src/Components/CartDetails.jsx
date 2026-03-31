function CartDetails({ myCart }) {
  return (<>
    <h1 className="productsCartSystem">Products Cart System</h1>
    <div className="products-cart-system">
      {
        myCart ? myCart.map((items) => {
          return <div className="cart" key={items.id}>
            <p><strong>Name : </strong> {items.name}</p>
            <p><strong>Price : </strong> {items.price}</p>
            <p><strong>Quantity : </strong> {items.quantity}</p>
            <p><strong>Category : </strong> {items.category}</p>
          </div>
        })
          : "Cart Not Exist"
      }

    </div>
  </>)
}
export default CartDetails;