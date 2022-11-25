import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./component/Login/Login";
import NavBar from "./component/NavBar/NavBar";
import { Register } from "./component/Register/Register";
import Home from "./pages/home/Home";
import Hotels from "./pages/hotel/Hotels";

function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/hotels",
          element: <Hotels />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
