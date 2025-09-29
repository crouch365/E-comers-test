import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/Login";
import { AppRoutes, routePath } from "@/shared/config";
import type { RouteProps } from "react-router";

export const routeConfig: RouteProps[] = [
  {
    path: routePath[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePath[AppRoutes.LOGIN],
    element: <LoginPage />,
  },
];
