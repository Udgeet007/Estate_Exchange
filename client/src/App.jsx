// import "./layout.scss";
import HomePage from "./pages/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/listPage/listPage";
import Layout from "./pages/layout/layout";
import RequireAuth from "./pages/layout/layout"
import ProfilePage from "./pages/profilePage/profilePage";
import SinglePage from "./pages/singlePage/singlePage";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import ProfileUpdatePage from "./pages/profileUpdatePage/profileUpdatePage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        
      ],
    },
    {
      path: "/",
      element:<RequireAuth/>,
      children:[
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}
