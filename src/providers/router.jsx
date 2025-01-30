import { createBrowserRouter } from "react-router-dom";

import MealDetails from "@/components/MealDetails/MealDetails";
import Category from "@/components/Category/Category";
import NotFound from "@/components/NotFound/NotFound";
import Layout from "@/components/Layout/Layout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Category />,
        },
        {
          path: "/mealdetails/:id",
          element: <MealDetails />,
        },
        {
          path: "/category/:name",
          element: <Category />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
