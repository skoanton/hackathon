import { createContext } from "react";
import { EVENT_ACTION, EventsState, initialEventsState } from "./EventsReducer";
import { Event } from "@/types/eventTypes";

export type EventsActions =
   | { type: typeof EVENT_ACTION.ADD,
    payload: Event}
    | {
      type: typeof EVENT_ACTION.ADD_COMMENT,
      payload: {
        event: Event,
        comment: string,
      }
    }


export const EventsContext = createContext<{
    eventsState: EventsState;
    eventsDispatch: React.Dispatch<EventsActions>;
  }>({
    eventsState: initialEventsState,
    eventsDispatch: () => null,
  });