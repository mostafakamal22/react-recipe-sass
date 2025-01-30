import logo from "@/assets/images/logo.webp";
import styles from "./Sidebar.module.scss";

import { SiGreasyfork } from "react-icons/si";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar";
import { useClickAway, useMediaQuery } from "@uidotdev/usehooks";

export default function Sidebar() {
  const { isSidebarOpen, setSidebarToggle } = useContext(SidebarContext);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 640px)");

  const ref = useClickAway(() => {
    if (isSidebarOpen && isSmallDevice) {
      setSidebarToggle(false);
    }
  });

  return (
    <aside
      className={`${styles["sidebar"]} ${
        isSidebarOpen ? styles["sidebar-open"] : ""
      }`}
      aria-label="Sidebar"
      ref={ref}
    >
      <div className={styles["sidebar-content"]}>
        <div>
          <img src={logo} className={styles["sidebar-logo"]} alt="logo" />
        </div>
        <ul className={styles["sidebar-list"]}>
          <li
            className={`${styles["sidebar-item"]} ${styles["sidebar-item-primary"]}`}
          >
            <a href="#/" className={styles["sidebar-link"]}>
              <SiGreasyfork className={styles["sidebar-icon"]} />
              <span className={styles["sidebar-text"]}>Meals</span>
            </a>
          </li>
          <li
            className={`${styles["sidebar-item"]} ${styles["sidebar-item-border"]}`}
          >
            <a href="#/" className={styles["sidebar-link"]}>
              <SiGreasyfork className={styles["sidebar-icon"]} />
              <span className={styles["sidebar-text"]}>Ingredients</span>
            </a>
          </li>
          <li
            className={`${styles["sidebar-item"]} ${styles["sidebar-item-border"]}`}
          >
            <a href="#/" className={styles["sidebar-link"]}>
              <SiGreasyfork className={styles["sidebar-icon"]} />
              <span className={styles["sidebar-text"]}>Area</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
