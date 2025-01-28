import { Outlet } from "react-router-dom";

export default function Layout() {
  console.log(import.meta.env.BASE_URL);
  return (
    <div>
      <Outlet />
    </div>
  );
}
