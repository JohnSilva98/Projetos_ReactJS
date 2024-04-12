import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Memory from "./routes/Memory.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./routes/Home.jsx";
import AddMemory from "./routes/AddMemory.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-memory",
        element: <AddMemory />,
      },
      {
        path: "/memories/:id",
        element: <Memory />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
