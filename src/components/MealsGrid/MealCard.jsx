import { Link } from "react-router-dom";
import { GiEarthAfricaEurope } from "react-icons/gi";
import styles from "./MealsGrid.module.scss";

// eslint-disable-next-line react/prop-types
export default function MealCard({ name, src, id, area }) {
  return (
    <div className={styles.meal}>
      <img src={src} className={styles["meal-img"]} alt={name} loading="lazy" />

      <h3 className={styles["meal-title"]}>{name}</h3>

      {area && (
        <h5 className={styles["meal-area"]}>
          <GiEarthAfricaEurope size={18} />
          {area}
        </h5>
      )}

      <button className={styles["meal-btn"]}>
        <Link to={`/mealDetails/${id}`}>View Recipe</Link>
      </button>
    </div>
  );
}
