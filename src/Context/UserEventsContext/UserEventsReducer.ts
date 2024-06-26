import { Event } from "@/types/eventTypes";
import { UserEventsActions } from "./UserEventsContext";
import { v4 as uuidv4 } from "uuid";
import { FileArchive } from "lucide-react";

export enum USER_EVENT_ACTION {
  ADD_FAVORITE = "ADD_FAVORITE",
  REMOVE_FAVORITE = "REMOVE_FAVORITE",
  ADD_ATTENDING = "ADD_ATTENDING",
  REMOVE_ATTENDING = "REMOVE_ATTENDING",
}

export type UserEventsState = {
  favorites: Event[];
  attending: Event[];
};

export const initalUserEventsState: UserEventsState = {
  favorites: [],
  attending: [],
};

export const userEventsReducer = (userEventsState: UserEventsState, action: UserEventsActions): UserEventsState => {
  switch (action.type) {
    case USER_EVENT_ACTION.ADD_FAVORITE: {
      if (userEventsState.favorites.every((fav) => fav.id !== action.payload.id)) {
        return {
          ...userEventsState,
          favorites: [...userEventsState.favorites, action.payload],
        };
      } else {
        return userEventsState;
      }
    }

    case USER_EVENT_ACTION.REMOVE_FAVORITE: {
      return {
        ...userEventsState,
        favorites: userEventsState.favorites.filter((fav) => fav.id !== action.payload.id),
      };
    }

    case USER_EVENT_ACTION.ADD_ATTENDING: {
      if (userEventsState.attending.every((event) => event.id !== action.payload.id)) {
        return {
          ...userEventsState,
          attending: [...userEventsState.attending, action.payload],
        };
      } else {
        return userEventsState;
      }
    }

    case USER_EVENT_ACTION.REMOVE_ATTENDING: {
      return {
        ...userEventsState,
        attending: userEventsState.attending.filter((event) => event.id !== action.payload.id),
      };
    }
    default:
      return userEventsState;
  }
};
