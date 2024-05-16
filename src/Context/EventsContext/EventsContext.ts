import { createContext } from "react";
import { EventsState, initialEventsState } from "./EventsReducer";
import { Event } from "@/types/eventTypes";

export type EventsActions ={
    type: string,
    payload: Event
}

export const EventsContext = createContext<{
    eventsState: EventsState;
    eventsDispatch: React.Dispatch<EventsActions>;
  }>({
    eventsState: initialEventsState,
    eventsDispatch: () => null,
  });