import Cart from "../../assets/images/icon-add-to-cart.svg";
const Button = () => {
  return (
    <button
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full
         bg-rose-50 h-10 w-40 gap-3 flex items-center justify-center border border-rose-500"
    >
      <img src={Cart} alt="" />
      Add to Cart
    </button>
  );
};

export default Button;
