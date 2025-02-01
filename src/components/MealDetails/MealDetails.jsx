import { useQuery } from "@tanstack/react-query";
import { FaYoutube } from "react-icons/fa";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useEffect } from "react";
import axios from "axios";
import styles from "./MealDetails.module.scss";
import MealDetailsSkeleton from "./MealDetailsSkeleton";
import FetchError from "../Shared/FetchError";

export default function MealDetails() {
  const params = useParams();

  const mealId = params?.id || "";

  const [, scrollTo] = useWindowScroll();

  const {
    isError,
    isLoading,
    isFetching,
    data: meals,
  } = useQuery({
    queryKey: ["meal", mealId],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );

      return res.data.meals;
    },
    staleTime: 1000 * 60,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, [scrollTo]);

  if (isLoading || isFetching) {
    return <MealDetailsSkeleton />;
  }

  if (isError) {
    return <FetchError />;
  }

  if (!Array.isArray(meals) || meals?.length === 0) {
    return (
      <div>
        <p className="errorMessage">
          Meal not found. Please go back to the home page.
        </p>
        <Link to="/" className="homeButton">
          <HiHome /> Go Home
        </Link>
      </div>
    );
  }

  const meal = meals[0];

  const { strMeal, strMealThumb, strInstructions, strSource, strYoutube } =
    meal;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push({
        name: ingredient,
        measure: measure,
      });
    }
  }

  return (
    <div className={styles.mealDetails}>
      <div className={styles.leftPanel}>
        <h1 className={styles.title}>{strMeal}</h1>
        <div className={styles.contentGrid}>
          <div>
            <img
              className={styles.mealImage}
              src={strMealThumb}
              alt={strMeal}
            />
            <ul className={styles.links}>
              {strYoutube && (
                <li className={styles.youtubeButton}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={strYoutube}
                  >
                    <FaYoutube size={18} /> YouTube
                  </a>
                </li>
              )}
              {strSource && (
                <li className={styles.sourceButton}>
                  <a target="_blank" rel="noopener noreferrer" href={strSource}>
                    <GiEarthAfricaEurope size={18} /> Source
                  </a>
                </li>
              )}
            </ul>
          </div>
          <p>{strInstructions}</p>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.ingredientsCard}>
          <h3 className={styles.ingredientsTitle}>Ingredients</h3>
          {ingredients.map((ingredient, index) => (
            <div key={index} className={styles.ingredientItem}>
              <span>{ingredient.name}:</span>
              <span>{ingredient.measure}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
