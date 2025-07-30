import { RouteObject } from "react-router";
import ShowListPage from "./pages/ShowListPage";
import ShowDetailPage from "./pages/ShowDetailPage";
import ErrorPage from "./pages/ErrorPage";

const baseRouteObject = {
  errorElement: <ErrorPage />,
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ShowListPage />,
    ...baseRouteObject,
  },
  {
    path: "/show/:id",
    element: <ShowDetailPage />,
    ...baseRouteObject,
  },
  {
    path: "*",
    element: <ErrorPage />,
    ...baseRouteObject,
  },
];

export default routes;