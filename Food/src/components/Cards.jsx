import Button from "./Button";
import { list } from "./datacatalog";

const Cards = () => {
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
            <Button />
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

export default Cards;
