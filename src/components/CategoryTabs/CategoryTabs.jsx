import styles from "./CategoryTabs.module.scss";

export default function CategoryTabs() {
  return (
    <>
      <h1 className={styles["title"]}>Learn, Cook, Eat Your Food</h1>

      {/* Mobile View */}
      <div className={styles["mobile-tabs"]}>
        <label htmlFor="tabs" className="sr-only">
          Select your category
        </label>
        <select id="tabs" className={styles["tabs-select"]}>
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
      <ul className={styles["categories"]}>
        <li className={styles["category-item"]}>
          <a
            className={`${styles["category-link"]} ${styles.active}`}
            href="#/category/Vegan"
          >
            Vegan
          </a>
        </li>
      </ul>
    </>
  );
}
