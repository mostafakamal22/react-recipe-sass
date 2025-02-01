import styles from "./CategoryTabs.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CategoryTabsSkeleton() {
  const arr = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <ul className={styles["categories"]}>
      <SkeletonTheme baseColor="#9ddaf8" highlightColor="#60caff">
        {arr.map((i) => (
          <li key={i}>
            <div className={styles["category-link"]}>
              <Skeleton count={1} height={30} width={60} />
            </div>
          </li>
        ))}
      </SkeletonTheme>
    </ul>
  );
}
