import { useRoutes } from "react-router-dom";
import Custom404 from "../components/Custom404";
import { Homepage } from "../pages/Homepage";
import Signin from "../pages/Signin";
import { useAuthState } from "../providers/authProvider";
import { protectedRoutes } from "./protected";

export const AppRoutes = () => {
  const { state } = useAuthState();

  console.log(1, state);

  const commonRoutes = [
    { path: "/", element: <Homepage /> },
    { path: "/signin", element: <Signin /> },
    { path: "/*", element: <Custom404 /> },
  ];

  // TODO: define publicRoutes
  const routes = state?.authenticated ? protectedRoutes : [{}];

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
