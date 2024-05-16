import { UserEventsActions } from "./UserEventsContext";


export enum USER_EVENT_ACTION {
    ADD = "ADD",
    REMOVE = "REMOVE"
}

export type UserEventsState = {
    favorites: Event[],
    attending: Event[]
}


export const initalUserEventsState : UserEventsState = {
    favorites: [],
    attending: [],
}

export const userEventsReducer = (userEventsState: UserEventsState, action:UserEventsActions  ): UserEventsState => {
    switch (action.type) {
        case USER_EVENT_ACTION.ADD:
                return userEventsState;
        default:
            return userEventsState;
            
    }
}