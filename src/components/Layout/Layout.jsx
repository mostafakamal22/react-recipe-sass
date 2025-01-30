import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import SidebarToggle from "../SidebarToggle/SidebarToggle";

export default function Layout() {
  return (
    <>
      <div>
        <SidebarToggle />
        <Sidebar />

        <Main>
          <Outlet />
        </Main>
      </div>
      <Footer />
    </>
  );
}
