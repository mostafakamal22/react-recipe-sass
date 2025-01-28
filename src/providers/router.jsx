import { createBrowserRouter } from "react-router-dom";

import MealDetails from "@/components/MealDetails/MealDetails";
import Category from "@/components/Category/Category";
import NotFound from "@/components/NotFound/NotFound";
import Layout from "@/components/Layout/Layout";
import Home from "@/components/Home/Home";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "/mealdetails/:id",
          Component: MealDetails,
        },
        {
          path: "/category/:name",
          Component: Category,
        },
      ],
    },
    { path: "*", Component: NotFound },
  ],
  { basename: import.meta.env.BASE_URL }
);
