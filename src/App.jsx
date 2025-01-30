import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import { SidebarContext } from "./context/sidebar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setSidebarToggle] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        setSidebarToggle,
      }}
    >
      <RouterProvider router={router} />
    </SidebarContext.Provider>
  );
}

export default App;
