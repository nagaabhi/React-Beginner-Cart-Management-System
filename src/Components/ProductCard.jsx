function ProductsCard({ productDetails, myCart, setMyCart }) {

  const addProductToCart = (id, name, price, quantity, category) => {

    {/*THIS WILL CHECK IF THE PRODUCT ID ALREADY EXIST IF EXIST IT WILL INCREASE THE QUANTITY* */}
    myCart.find((products) => {
      if (products.id === id) {
        alert("Products Already Added...");
        products.quantity += 1;
        return;
      }
    })

    {/*IF PRODUCTS IS NOT PRESENT IT WILL ADD TO THE CART* */}
    setMyCart([...myCart, {
      id: id,
      name: name,
      price: price,
      quantity: quantity,
      category: category
    }]);




  }


  return (<>

    <div className="product-details-container">
      {
        productDetails.map((product) => {
          return (<div className="product">
            <p><strong>Name : </strong> {product.name}</p>
            <p><strong>Price : </strong> {product.price}</p>
            <p><strong>Quantity : </strong> {product.quantity}</p>
            <p><strong>Category : </strong> {product.category}</p>
            <div className="manage-products">
              <div className="add-to-cart-button">
                <button onClick={() => addProductToCart(product.id, product.name, product.price, product.quantity, product.category)}>Add to Cart</button>
              </div>
              <div className="remove-from-cart-button">
                <button>Buy Now</button>
              </div>
            </div>

          </div>)
        })
      }
    </div>
  </>)

}

export default ProductsCard;