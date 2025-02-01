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
            <div className={styles["skeleton-img"]}>
              <Skeleton
                count={1}
                width={120}
                height={120}
                borderRadius={"50%"}
              />
            </div>

            <div>
              <Skeleton count={1} />
            </div>

            <div>
              <Skeleton count={1} />
            </div>

            <div style={{ marginTop: "1rem" }}>
              <Skeleton
                count={1}
                height={40}
                baseColor="#25ca8e"
                highlightColor="#5ecea5"
                borderRadius={100}
              />
            </div>
          </div>
        ))}
      </SkeletonTheme>
    </div>
  );
}
