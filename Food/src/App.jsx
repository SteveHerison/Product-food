import { useState } from "react";
import Cards from "./components/Cards";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemInCart) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    );
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
