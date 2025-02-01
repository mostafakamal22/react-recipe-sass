import axios from "axios";
import styles from "./CategoryTabs.module.scss";
import CategoryTabsSkeleton from "./CategoryTabsSkeleton";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function CategoryTabs() {
  const navigate = useNavigate();
  const params = useParams();

  const { isLoading, isFetching, data } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );

      return res?.data?.meals?.map((category) => category?.strCategory);
    },
    staleTime: Infinity,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading || isFetching) {
    return (
      <>
        <h1 className={styles["title"]}>Learn, Cook, Eat Your Food</h1>
        <CategoryTabsSkeleton />
      </>
    );
  }

  const alternativeCategories = [
    "All",
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
  ];

  const categories = data ? ["All", ...data] : alternativeCategories;

  const activeCategory = categories.find((c) => c === params?.name) || "All";

  function setActiveCategory(category) {
    if (category === "All") {
      navigate("/");
    } else {
      navigate(`/category/${category}`);
    }
  }

  return (
    <>
      <h1 className={styles["title"]}>Learn, Cook, Eat Your Food</h1>

      {/* Mobile View */}
      <div className={styles["mobile-tabs"]}>
        <label htmlFor="tabs" className="sr-only">
          Select your category
        </label>
        <select
          id="tabs"
          className={styles["tabs-select"]}
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop View */}
      <ul className={styles["categories"]}>
        {categories.map((category) => (
          <li key={category} className={styles["category-item"]}>
            <Link
              className={`${styles["category-link"]} ${
                activeCategory === category ? styles.active : ""
              }`}
              to={category === "All" ? "/" : `/category/${category}`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
