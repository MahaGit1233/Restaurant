import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import MealItemList from "./components/Meals/MealItemList";
import Cart from "./components/Cart";

const Dummy_Meals = [
  { id: 1, title: 'Dosa', description: 'Along with Peanut Chutney', price: 20 },
  { id: 2, title: 'Idly', description: 'Along with Special Sambar', price: 30 },
  { id: 3, title: 'Puri', description: 'Along with Chole Bhature', price: 30 },
  { id: 4, title: 'Rice', description: 'Along with different curries', price: 40 },
];

function App() {
  const [meal, setMeals] = useState(Dummy_Meals);
  const [cartVisible, setCartVisible] = useState(false);

  const cartHandler = () => {
    setCartVisible(true);
  }

  const closeBtnHandler = () => {
    setCartVisible(false);
  }

  return (
    <Fragment>
      {cartVisible && <Cart onClose={closeBtnHandler}/>}
      <Header onConfirm={cartHandler} />
      <MealItemList meals={meal} />
    </Fragment>
  );
}

export default App;
