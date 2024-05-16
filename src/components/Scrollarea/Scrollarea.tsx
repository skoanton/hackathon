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
    <ScrollAreaShad className=" rounded-md ">
      <ul className="flex flex-col gap-2">
        {currentEventState.map((event) => (
          <li>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </ScrollAreaShad>
  );
}
