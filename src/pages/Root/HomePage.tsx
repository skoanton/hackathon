import { EventsContext } from "@/Context/EventsContext/EventsContext";
import { ScrollArea } from "@/components/Scrollarea/Scrollarea";
import { StartpageCarousel } from "@/components/Carousel/Carousel";
import { useContext } from "react";
type HomePage = {};

export const HomePage: React.FC<HomePage> = () => {
  const { eventsState } = useContext(EventsContext);
  const sortedEvents = [...eventsState.event].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  return (
    <section>
      <StartpageCarousel />
      <ScrollArea currentEventState={sortedEvents} />
    </section>
  );
};
