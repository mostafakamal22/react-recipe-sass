import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styles from "./MealsGrid.module.scss";
import axios from "axios";
import MealCard from "./MealCard";
import MealsGridSkeleton from "./MealsGridSkeleton";
import FetchError from "../Shared/FetchError";

export default function MealsGrid() {
  const params = useParams();

  const activeCategory = params?.name || "";

  const {
    isError,
    isLoading,
    isFetching,
    data: meals,
  } = useQuery({
    queryKey: ["meals", activeCategory],
    queryFn: async () => {
      const res = await axios.get(
        activeCategory
          ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`
          : `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );

      return res.data.meals;
    },
    staleTime: 1000 * 60,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  });

  if (isLoading || isFetching) {
    return <MealsGridSkeleton />;
  }

  if (isError || !meals) {
    return <FetchError />;
  }

  return (
    <div className={styles.meals}>
      {meals.map((meal) => (
        <MealCard
          key={meal.idMeal}
          id={meal.idMeal}
          name={meal.strMeal}
          src={meal.strMealThumb}
          area={meal?.strArea}
        />
      ))}
    </div>
  );
}
