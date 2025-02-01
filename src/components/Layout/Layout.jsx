import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import SidebarToggle from "../SidebarToggle/SidebarToggle";
import BoundaryError from "../Shared/BoundaryError";

export default function Layout() {
  return (
    <>
      <div>
        <SidebarToggle />
        <Sidebar />

        <Main>
          <ErrorBoundary fallback={<BoundaryError />}>
            <Outlet />
          </ErrorBoundary>
        </Main>
      </div>
      <Footer />
    </>
  );
}
