import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./MealDetails.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

export default function MealDetailsSkeleton() {
  return (
    <SkeletonTheme baseColor="#9ddaf8" highlightColor="#60caff">
      <div className={styles.mealDetails}>
        <div className={styles.leftPanel}>
          <Skeleton height={400} />
          <Skeleton count={3} />
        </div>
        <div className={styles.rightPanel}>
          <Skeleton height={200} />
          <Skeleton count={5} />
        </div>
      </div>
    </SkeletonTheme>
  );
}
