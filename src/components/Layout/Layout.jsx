import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

export default function Layout() {
  return (
    <>
      <div>
        <Sidebar />

        <Main>
          <Outlet />
        </Main>
      </div>
      <Footer />
    </>
  );
}
