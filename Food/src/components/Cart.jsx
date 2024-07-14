import Ilust from "../../assets/images/illustration-empty-cart.svg";
import Remove from "../../assets/images/icon-remove-item.svg";
import Carbon from "../../assets/images/icon-carbon-neutral.svg";
import PropTypes from "prop-types";

const Cart = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="p-4 w-full h-auto bg-red-200 bg-rose-50 rounded-xl flex flex-col">
      <strong className="text-xl text-red">{`Your cart (${cartItems.length})`}</strong>
      <div
        className={`flex flex-col ${!cartItems.length ? "items-center" : ""}`}
      >
        {cartItems.length === 0 ? (
          <>
            <img src={Ilust} alt="Empty Cart" className="h-40 w-40" />
            <strong className="text-rose-500">
              Your added items will appear here
            </strong>
          </>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex w-full justify-between mt-5 items-center border-b border-rose-100"
                >
                  <div className="flex flex-col pb-3">
                    <strong>{item.description}</strong>
                    <span className="flex gap-4">
                      <span className="text-red font-semibold">{`${item.quantity}x`}</span>
                      <p className="text-rose-400">{`@ $${item.price.toFixed(
                        2
                      )}`}</p>
                      <p className="text-rose-600">{` $${(
                        item.price * item.quantity
                      ).toFixed(2)}`}</p>
                    </span>
                  </div>
                  <button onClick={() => removeFromCart(item)}>
                    <img
                      src={Remove}
                      alt="Remove Item"
                      className="border rounded-full p-1 border-rose-300"
                    />
                  </button>
                </li>
              ))}
            </ul>
            <div className="my-5 flex justify-between w-full ">
              <p>Order Total</p>
              <strong className="text-xl text-red">
                ${calculateTotal().toFixed(2)}
              </strong>
            </div>

            <div className="m-4 bg-rose-100 p-4 rounded-xl gap-2 flex items-center justify-center">
              <img src={Carbon} alt="" />
              <span className="text-sm">
                This is a <strong>carbon-neutral</strong> delivery
              </span>
            </div>
            <button className="bg-red rounded-full mx-4 p-3 text-white my-2">
              Confirm Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
