import { Link } from "react-router-dom";
import "./Main.scss";

export default function Main() {
  return (
    <div className="main-container p-4 overflow-hidden sm:ml-64 min-h-screen">
      <div className="container py-8 px-4">
        <h1 className="title">Learn, Cook, Eat Your Food</h1>

        {/* Mobile View */}
        <div className="sm:hidden mt-8">
          <label htmlFor="tabs" className="sr-only">
            Select your category
          </label>
          <select id="tabs" className="tabs-select">
            <option value="Beef">Beef</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Chicken">Chicken</option>
            <option value="Dessert">Dessert</option>
            <option value="Goat">Goat</option>
            <option value="Lamb">Lamb</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Pasta">Pasta</option>
            <option value="Pork">Pork</option>
            <option value="Seafood">Seafood</option>
            <option value="Side">Side</option>
            <option value="Starter">Starter</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>
        </div>

        {/* Desktop View */}
        <ul className="categories sm:flex hidden mt-8 flex-wrap gap-4 font-medium text-center text-gray-500 border-b border-gray-200">
          <li className="category-item">
            <a className="category-link active" href="#/category/Vegan">
              Vegan
            </a>
          </li>
        </ul>

        {/* Meals Section */}
        <div className="meals mt-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
          <div className="meal">
            <img
              src="https://www.themealdb.com/images/media/meals/1520081754.jpg"
              className="meal-img"
              alt="Roast fennel"
            />
            <h3 className="meal-title">Roast fennel</h3>
            <button className="meal-btn">
              <Link to="/mealdetails/52942">View Recipe</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
