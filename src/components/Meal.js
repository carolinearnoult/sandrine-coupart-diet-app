import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=28762f0776864eeea832f740cb7d878b&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Temps de préparation: {meal.readyInMinutes} minutes</li>
        <li>Nombre de couverts: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl} className="links">Voir la recette</a>
    </article>
  );
}
