import { RouteObject } from "react-router";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import ErrorPage from "./pages/ErrorPage";

const baseRouteObject = {
  errorElement: <ErrorPage />,
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MovieListPage />,
    ...baseRouteObject,
  },
  {
    path: "/movie/:id",
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