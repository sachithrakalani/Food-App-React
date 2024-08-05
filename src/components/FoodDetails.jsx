import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoard, setIsLoard] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "ee5bdc0c495a45eb9b9093bcde4393d1";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoard(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
        <div>
          <span>
            <strong>⏲ {food.readyInMinutes} Minutes </strong>
          </span>
          <span>
            👪<strong>Serves {food.servings}</strong>
          </span>
          <span>
            {food.vegetarian ? "  🥕 vegetarian" : "🍗 Non-vegetarian"}
          </span>
        </div>
        <div>
          💲<span>{food.pricePerServing} Per servings</span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoard
          ? "Loard..."
          : food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))}
      </div>
    </div>
  );
}
