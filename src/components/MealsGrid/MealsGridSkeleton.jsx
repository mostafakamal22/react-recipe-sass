import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./MealsGrid.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

export default function MealsGridSkeleton() {
  const arr = Array.from({ length: 4 }, (_, i) => i + 1);
  return (
    <div className={styles.meals}>
      <SkeletonTheme baseColor="#9ddaf8" highlightColor="#60caff">
        {arr.map((i) => (
          <div key={i} className={styles.meal}>
            <div>
              <Skeleton count={1} />
              <Skeleton count={1} />
            </div>

            <div className={styles["meal-title"]}>
              {" "}
              <Skeleton count={1} />
            </div>

            <div className={styles["meal-area"]}>
              <Skeleton count={1} />
            </div>

            <div className={styles["meal-btn"]}>
              <Skeleton count={1} />
            </div>
          </div>
        ))}
      </SkeletonTheme>
    </div>
  );
}
