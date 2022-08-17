import AddRestaurant from "./components/AddRestaurant";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import IngredientList from "./components/ingredients/IngredientList";
import AddIngredient from "./components/ingredients/AddIngredient";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"restaurants"} element={<AddRestaurant />} />
          <Route path={"ingredients"} element={<AddIngredient />} />
          <Route path={"restaurants-list"} element={<RestaurantList />} />
          <Route path={"ingredients-list"} element={<IngredientList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
