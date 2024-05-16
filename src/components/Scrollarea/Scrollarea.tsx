import { ScrollAreaShad } from "../ui/scroll-area";
import { useContext } from "react";
import EventCard from "../EventCard/EventCard";
import { EventsContext } from "@/Context/EventsContext/EventsContext";
import { UserEventsContext } from "@/Context/UserEventsContext/UserEventsContext";
import { Event } from "@/types/eventTypes";

type ScrollAreaProps = {
  currentEventState: Event[];
};

export function ScrollArea({ currentEventState }: ScrollAreaProps) {
  return (
    <ScrollAreaShad className="w-screen rounded-md border">
      <div className="p-4 flex flex-col gap-2">
        {currentEventState.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </ScrollAreaShad>
  );
}
