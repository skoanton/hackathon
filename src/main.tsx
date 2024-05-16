import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root/Root.tsx';
import { HomePage } from './pages/Root/HomePage.tsx';

const router = createBrowserRouter([
   {
      element: <Root />,
      children: [
         {
            path: '/',
            element: <HomePage />,
         },
         {
            path: '/event/:eventId',
            element: <Root />,
         },
         {
            path: '/event/new',
            element: <Root />,
         },
         {
            path: '/event/saved',
            element: <Root />,
         },
         {
            path: '/profile/:profileId',
            element: <Root />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
