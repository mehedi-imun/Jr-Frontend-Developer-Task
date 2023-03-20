import { createBrowserRouter, Outlet } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Sales from "../../pages/Dashboard/Sales";
import Users from "../../pages/Dashboard/Users";
import Main from "../../pages/layout/Main";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <SignUp></SignUp>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard>
              <Outlet />
            </Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <h1>Welcome to the dashboard</h1>,
          },
          {
            path: "users",
            element: <Users></Users>,
          },
          {
            path: "Sales",
            element: <Sales></Sales>,
          },
        ],
      },
    ],
  },
]);
