import { useReducer } from "react";
import { eventsReducer, initialEventsState } from "./EventsReducer";
import { EventsContext } from "./EventsContext";

type EventsProviderProps = {
  children: React.ReactNode;
};

const EventsProvider = ({ children }: EventsProviderProps) => {
  const [eventsState, eventsDispatch] = useReducer(
    eventsReducer,
    initialEventsState
  );
  return (
    <EventsContext.Provider value={{ eventsState, eventsDispatch }}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
