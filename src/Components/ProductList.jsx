import ProductsCard from "./ProductCard";
function ProductsList({ myCart, setMyCart }) {
  const products = [
    {
      id: 1,
      name: "Nike Running Shoes",
      price: 4999,
      quantity: 10,
      category: "Footwear"
    },
    {
      id: 2,
      name: "Adidas T-Shirt",
      price: 1999,
      quantity: 3,
      category: "Clothing"
    },
    {
      id: 3,
      name: "Puma Hoodie",
      price: 3499,
      quantity: 0,
      category: "Clothing"
    },
    {
      id: 4,
      name: "Levi's Jeans",
      price: 4599,
      quantity: 5,
      category: "Clothing"
    },
    {
      id: 5,
      name: "Apple AirPods",
      price: 12999,
      quantity: 15,
      category: "Electronics"
    },
    {
      id: 6,
      name: "Samsung Smart Watch",
      price: 9999,
      quantity: 2,
      category: "Electronics"
    },
    {
      id: 7,
      name: "Wildcraft Backpack",
      price: 1499,
      quantity: 0,
      category: "Accessories"
    },
    {
      id: 8,
      name: "Logitech Gaming Mouse",
      price: 2499,
      quantity: 7,
      category: "Electronics"
    },
    {
      id: 9,
      name: "Mechanical Keyboard",
      price: 3999,
      quantity: 4,
      category: "Electronics"
    },
    {
      id: 10,
      name: "Milton Water Bottle",
      price: 499,
      quantity: 20,
      category: "Home & Kitchen"
    }
  ];
  return (<>
    {/*THIS COMPONENT WILL DISPLAY ALL THE PRODUCTS DETAILS* */}
    <ProductsCard productDetails={products} myCart={myCart} setMyCart={setMyCart} />

  </>)
}

export default ProductsList;