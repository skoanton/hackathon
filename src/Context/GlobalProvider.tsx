import EventsProvider from "./EventsContext/EventsProvider";
import UserEventsProvider from "./UserEventsContext/UserEventsProvider";

type GlobalProviderProps = {
  children: React.ReactNode;
};

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  return (
    <EventsProvider>
      <UserEventsProvider>{children}</UserEventsProvider>
    </EventsProvider>
  );
};
