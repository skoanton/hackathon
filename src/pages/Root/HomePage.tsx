import { EventsContext } from "@/Context/EventsContext/EventsContext";
import { ScrollArea } from "@/components/Scrollarea/Scrollarea";
import { useContext } from "react";
type HomePage = {};

export const HomePage: React.FC<HomePage> = () => {
  const { eventsState } = useContext(EventsContext);
  return (
    <section>
      <ScrollArea currentEventState={eventsState.event} />
    </section>
  );
};
