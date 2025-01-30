import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import { SidebarContext } from "./context/sidebar";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  const [isSidebarOpen, setSidebarToggle] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarContext.Provider
        value={{
          isSidebarOpen,
          setSidebarToggle,
        }}
      >
        <RouterProvider router={router} />

        <ReactQueryDevtools initialIsOpen={false} />
      </SidebarContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
