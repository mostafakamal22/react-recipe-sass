import { BiMenuAltLeft } from "react-icons/bi";
import { useContext } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { SidebarContext } from "../../context/sidebar";
import styles from "./SidebarToggle.module.scss";

export default function SidebarToggle() {
  const { isSidebarOpen, setSidebarToggle } = useContext(SidebarContext);

  const isSmallDevice = useMediaQuery("only screen and (max-width : 640px)");

  function handleToggleSidebar() {
    if (!isSmallDevice) return;

    setSidebarToggle(!isSidebarOpen);
  }

  return (
    <button
      type="button"
      className={`${styles["sidebar-toggle"]}`}
      onClick={handleToggleSidebar}
    >
      <span className="sr-only">Open sidebar</span>
      <BiMenuAltLeft className={styles.icon} />
    </button>
  );
}
