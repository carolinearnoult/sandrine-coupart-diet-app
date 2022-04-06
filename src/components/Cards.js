import React, {useState} from 'react';
import MealList from "./MealList";
import './Cards.css';




function Cards() {
  const [mealData, setMealdata] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=28762f0776864eeea832f740cb7d878b&timeFrame=day&targetCalories=${calories}`
    )
    .then((response) => response.json())
    .then((data) => {
      setMealdata(data);
     
    })
    .catch(() => {
      console.log('error');
    });
  }

  return (
  <div className='Cards'>
    <section className='controls'>
      <h1 className='title'>Nutricienne Diététicienne</h1>
      <p className='text'>Sélectionnez le nombre de calories pour vos plats du jour:</p>
      <input
      type='number'
      placeholder='calories (e.g 2000)'
      onChange={handleChange} />
    </section>
    <button onClick={getMealData} className='cardsBtn'>Voir les plats du jour</button>
    {mealData && <MealList mealData={mealData} />}
  </div>
  );
}

export default Cards;