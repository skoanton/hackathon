import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root/Root.tsx';
import { HomePage } from './pages/Root/HomePage.tsx';
import { NewEvent } from './components/newEventForm/NewEvent.tsx';
import SavedEventPage from './pages/SavedEvents/SavedEventPage.tsx';
import EventView from './components/EventView/EventView.tsx';
import UserEventsProvider from './Context/UserEventsContext/UserEventsProvider.tsx';
import EventsProvider from './Context/EventsContext/EventsProvider.tsx';
import { Error } from './Error/Error.tsx';
import { GlobalProvider } from './Context/GlobalProvider.tsx';
const router = createBrowserRouter([
   {
      element: <Root />,
      errorElement: <Error />,
      children: [
         {
            path: '/',
            element: <HomePage />,
         },
         {
            path: '/newevent',
            element: <NewEvent />,
         },
         {
            path: '/event/:id',
            element: <EventView />,
         },
         {
            path: '/event/saved',
            element: <SavedEventPage />,
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
      <EventsProvider>
         <UserEventsProvider>
            <RouterProvider router={router} />
         </UserEventsProvider>
      </EventsProvider>
   </React.StrictMode>
);
