import { RouteObject } from "react-router";
import ShowListPage from "./pages/ShowListPage";
import MovieDetailPage from "./pages/MovieDetailPage";
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
    element: <MovieDetailPage />,
    ...baseRouteObject,
  },
  {
    path: "*",
    element: <ErrorPage />,
    ...baseRouteObject,
  },
];

export default routes;