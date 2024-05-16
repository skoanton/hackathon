import { useContext } from "react";
import EventCard from "../EventCard/EventCard";
import { ScrollAreaShad } from "../ui/scroll-area";
import { EventsContext } from "@/Context/EventsContext/EventsContext";

//fake data temp
const events = [
  {
    title: "Maraton",
    description: "En löpartävling genom stadens gator.",
    arranger: "Borås stad",
  },
  {
    title: "Konstutställning",
    description: "En visning av samtida konstverk från lokala konstnärer.",
    arranger: "Stadens konstgalleri",
  },
  {
    title: "Musikfestival",
    description:
      "Tre dagar med livemusik från lokala och internationella artister.",
    arranger: "Musikevenemang AB",
  },
  {
    title: "Matmässa",
    description: "Upplev ett urval av kök från hela världen.",
    arranger: "Matälskare föreningen",
  },
  {
    title: "Teknikkonferens",
    description:
      "Utforska de senaste innovationerna och trenderna inom teknologi.",
    arranger: "Teknik Innovations AB",
  },
  {
    title: "Modevisning",
    description: "En glamorös uppvisning av de senaste modetrenderna.",
    arranger: "Mode Framåt AB",
  },
  {
    title: "Filmfestival",
    description: "Visningar av oberoende och internationella filmer.",
    arranger: "Bioföreningen",
  },
  {
    title: "Välgörenhetsgala",
    description:
      "Samla in pengar till lokala välgörenhetsändamål samtidigt som du njuter av en kväll med underhållning.",
    arranger: "Samhällets välgörenhetsstiftelse",
  },
  {
    title: "Litterärt symposium",
    description: "Diskussioner och läsningar av kända författare.",
    arranger: "Bokmalarnas förening",
  },
  {
    title: "Fitnessmässa",
    description: "Upptäck det senaste inom fitness trender och utrustning.",
    arranger: "FitLife Events",
  },
  {
    title: "Stand-up kväll",
    description: "Skratt garanterat med en kväll av komedi.",
    arranger: "Kvarterskomikerna",
  },
  // Add more events here as needed...
];

export function ScrollArea() {
  const { eventsState } = useContext(EventsContext);
  return (
    <ScrollAreaShad className="h-screen w-screen rounded-md border">
      <div className="p-4 flex flex-col gap-2">
        {eventsState.event.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </ScrollAreaShad>
  );
}
