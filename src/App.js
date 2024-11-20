import { useState } from "react";
import Header from "./components/Layout/Header";
import MealItemList from "./components/Meals/MealItemList";

const Dummy_Meals = [
  { id: 1, title: 'Dosa', description: 'Along with Peanut Chutney', price: 20 },
  { id: 2, title: 'Idly', description: 'Along with Special Sambar', price: 30 },
  { id: 3, title: 'Puri', description: 'Along with Chole Bhature', price: 30 },
  { id: 4, title: 'Rice', description: 'Along with different curries', price: 40 },
];

function App() {
  const [meal,setMeals]=useState(Dummy_Meals);

  return (
    <div>
      <Header />
      <MealItemList meals={meal}/>
    </div>
  );
}

export default App;
