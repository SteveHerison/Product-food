import PropTypes from "prop-types";
import Button from "./Button";
import { list } from "./datacatalog";

const Cards = ({ addToCart }) => {
  return (
    <ul className="grid grid-cols-1 gap-4">
      {list.map((item, index) => (
        <li key={index}>
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-xl hover:border-2 hover:border-rose-500"
            />
            <Button onClick={() => addToCart(item)} />
          </div>
          <div className="mt-9 mb-3 text-start">
            <p className="text-base text-rose-400">{item.name}</p>
            <strong className="text-rose-900">{item.description}</strong>
            <p className="text-lg text-red font-semibold">{item.price}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

Cards.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Cards;
