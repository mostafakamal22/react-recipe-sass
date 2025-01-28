import { createBrowserRouter } from "react-router-dom";

import MealDetails from "@/components/MealDetails/MealDetails";
import Category from "@/components/Category/Category";
import NotFound from "@/components/NotFound/NotFound";
import Home from "@/components/Home/Home";
import App from "@/App";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: App,
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
