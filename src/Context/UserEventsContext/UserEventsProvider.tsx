import React, { useReducer } from "react";
import { initalUserEventsState, userEventsReducer } from "./UserEventsReducer";
import { UserEventsContext } from "./UserEventsContext";

type UserEventsProviderProps = {
  children: React.ReactNode;
};

const UserEventsProvider = ({ children }: UserEventsProviderProps) => {
  const [userEventsState, userEventsDispatch] = useReducer(
    userEventsReducer,
    initalUserEventsState
  );

  return (
    <UserEventsContext.Provider value={{ userEventsState, userEventsDispatch }}>
      {children}
    </UserEventsContext.Provider>
  );
};

export default UserEventsProvider;
