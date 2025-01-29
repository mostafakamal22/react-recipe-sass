import { Outlet } from "react-router-dom";

import styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout() {
  return (
    <>
      <div className={styles.layout}>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
