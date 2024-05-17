import { ScrollAreaShad } from "../ui/scroll-area";
import { useContext } from "react";
import EventCard from "../EventCard/EventCard";
import { EventsContext } from "@/Context/EventsContext/EventsContext";
import { UserEventsContext } from "@/Context/UserEventsContext/UserEventsContext";
import { Event } from "@/types/eventTypes";
import { Link } from "react-router-dom";

type ScrollAreaProps = {
  currentEventState: Event[];
};

export function ScrollArea({ currentEventState }: ScrollAreaProps) {
  return (
    <ScrollAreaShad className=" rounded-md ">
      <ul className="flex flex-col gap-2 p-2">
        {currentEventState.map((event) => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>
              <EventCard event={event} />
            </Link>
          </li>
        ))}
      </ul>
    </ScrollAreaShad>
  );
}
