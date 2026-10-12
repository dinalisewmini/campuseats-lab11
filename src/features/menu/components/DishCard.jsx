import { Link } from "react-router-dom";

function DishCard({ dish }) {
  return (
    <div className="dish-card">
      <Link to={`/dish/${dish.id}`}>
        <h3>{dish.name}</h3>
      </Link>

      <p>Rs. {dish.price.toFixed(2)}</p>
      <small>{dish.category}</small>

      {!dish.available && <span> — Sold out</span>}
    </div>
  );
}

export default DishCard;