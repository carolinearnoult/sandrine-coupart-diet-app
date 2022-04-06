import React from 'react';
import Meal from './Meal';

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main className='mainNutrients'>
      <section className="nutrients">
        <h1>Nutriments</h1>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Graisses: {nutrients.fat.toFixed(0)}</li>
          <li>Protéines: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}