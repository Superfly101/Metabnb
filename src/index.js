import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PlaceToStayPage from "./routes/places";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "places",
        element: <PlaceToStayPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
