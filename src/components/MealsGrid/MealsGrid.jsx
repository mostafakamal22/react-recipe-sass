import { Link } from "react-router-dom";
import styles from "./MealsGrid.module.scss";

export default function MealsGrid() {
  return (
    <div className={styles.meals}>
      <div className={styles.meal}>
        <img
          src="https://www.themealdb.com/images/media/meals/1520081754.jpg"
          className={styles["meal-img"]}
          alt="Roast fennel"
        />
        <h3 className={styles["meal-title"]}>Roast fennel</h3>
        <button className={styles["meal-btn"]}>
          <Link to="/mealdetails/52942">View Recipe</Link>
        </button>
      </div>
    </div>
  );
}
