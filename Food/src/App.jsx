import { useState } from "react";
import Cards from "./components/Cards";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const itemInCart = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );
    if (itemInCart) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const itemInCart = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );
    if (itemInCart.quantity === 1) {
      setCartItems((prevItems) =>
        prevItems.filter((cartItem) => cartItem.name !== item.name)
      );
    }
  };

  return (
    <main className="w-screen h-auto bg-rose-100 container m-auto p-5">
      <section className="h-full w-full">
        <h1 className="text-3xl">Desserts</h1>
        <div className="flex justify-center items-center mt-7">
          <Cards addToCart={addToCart} />
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </section>
    </main>
  );
};

export default App;
