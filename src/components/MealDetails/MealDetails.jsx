import styles from "./MealDetails.module.scss";
import { FaYoutube } from "react-icons/fa";
import { GiEarthAfricaEurope } from "react-icons/gi";

export default function MealDetails() {
  return (
    <div className="main-container p-4 overflow-hidden sm:ml-64 min-h-screen">
      <div className="container py-8 px-4">
        <div className={styles.mealDetails}>
          <div className={styles.leftPanel}>
            <h1 className={styles.title}>Roast fennel and aubergine paella</h1>
            <div className={styles.contentGrid}>
              <div>
                <img
                  className={styles.mealImage}
                  src="https://www.themealdb.com/images/media/meals/1520081754.jpg"
                  alt="Roast fennel and aubergine paella"
                />
                <ul className={styles.links}>
                  <li className={styles.youtubeButton}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.youtube.com/watch?v=H5SmjR-fxUs"
                    >
                      <FaYoutube size={18} /> YouTube
                    </a>
                  </li>
                  <li className={styles.sourceButton}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.homestylemag.co.uk/recipe/517/main-courses/roast-fennel-and-aubergine-paella"
                    >
                      <GiEarthAfricaEurope size={18} /> Source
                    </a>
                  </li>
                </ul>
              </div>
              <p className={styles.recipeText}>
                1. Put the fennel, aubergine, pepper, and courgette in a
                roasting tray... (Full instructions here)
              </p>
            </div>
          </div>
          <div className={styles.rightPanel}>
            <div className={styles.ingredientsCard}>
              <h3 className={styles.ingredientsTitle}>Ingredients</h3>
              {[
                { name: "Baby Aubergine", quantity: "6 small" },
                { name: "Fennel", quantity: "4 small" },
                { name: "Red Pepper", quantity: "1 thinly sliced" },
                { name: "Courgettes", quantity: "1 medium" },
                { name: "Onion", quantity: "1 finely chopped" },
                { name: "Paella Rice", quantity: "300g" },
                { name: "Paprika", quantity: "1 tsp" },
                { name: "Saffron", quantity: "pinch" },
                { name: "White Wine", quantity: "200ml" },
              ].map((ingredient, index) => (
                <div key={index} className={styles.ingredientItem}>
                  <span>{ingredient.name}:</span>
                  <span>{ingredient.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
