import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="protected">
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <CircularProgress size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

// const RootAuth = () => <div>RootAuth</div>;
const Users = () => <div>users</div>;

export const protectedRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [{ path: "/app/users", element: <Users /> }],
  },
];
