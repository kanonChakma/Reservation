import React from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Login from './component/Login/Login';
import { Register } from './component/Register/Register';
import Home from './pages/home/Home';

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
      element: (
          <Layout />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
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
