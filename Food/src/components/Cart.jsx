import Ilust from "../../assets/images/illustration-empty-cart.svg";
import PropTypes from "prop-types";

const Cart = ({ cartItems, removeFormCart }) => {
  return (
    <div className="p-4 w-full h-auto bg-red-200 bg-rose-50 rounded-xl flex flex-col">
      <strong className="text-xl text-red">{`Your cart (${cartItems.length})`}</strong>
      <div className="flex flex-col items-center">
        {cartItems.length === 0 ? (
          <>
            <img src={Ilust} alt="" className="h-40 w-40" />
            <strong className="text-rose-500">
              Your added items will appear here
            </strong>
          </>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price} - Quantity: {item.quantity}
                <button onClick={() => removeFormCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFormCart: PropTypes.func.isRequired,
};

export default Cart;
