import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root.tsx";
import EventsProvider from "./Context/EventsContext/EventsProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Root />,
      },
      {
        path: "/event/:eventId",
        element: <Root />,
      },
      {
        path: "/event/new",
        element: <Root />,
      },
      {
        path: "/event/saved",
        element: <Root />,
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
    <EventsProvider>
      <RouterProvider router={router} />
    </EventsProvider>
  </React.StrictMode>
);
