import { Event } from "@/types/eventTypes"
import { createContext } from "react"
import { UserEventsState, initalUserEventsState } from "./UserEventsReducer"

export type UserEventsActions = {
    type: string,
    payload: Event
}


export const UserEventsContext = createContext<{
    userEventsState: UserEventsState;
    userEventsDispatch:React.Dispatch<UserEventsActions>;
}>({
    userEventsState: initalUserEventsState,
    userEventsDispatch: () => null,
  });