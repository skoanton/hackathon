import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root.tsx";
import { HomePage } from "./pages/Root/HomePage.tsx";
import { NewEvent } from "./components/newEventForm/NewEvent.tsx";
import SavedEventPage from "./pages/SavedEvents/SavedEventPage.tsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/newevent",
        element: <NewEvent />,
      },

      {
        path: "/event/saved",
        element: <SavedEventPage />,
      },
      {
        path: "/profile/:profileId",
        element: <Root />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
