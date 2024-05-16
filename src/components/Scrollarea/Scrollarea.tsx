import EventCard from "../EventCard/EventCard";
import { ScrollAreaShad } from "../ui/scroll-area";

//fake data temp
export const events = [
  {
    title: "Maraton",
    description: "En löpartävling genom stadens gator.",
    arranger: "Borås stad",
    thumbnail:
      "https://i.guim.co.uk/img/media/24c74bce590f4643d5c7315efc736832592c148d/0_4_828_497/master/828.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9b5cacec03ce1f238735e8300194bb88",
  },
  {
    title: "Konstutställning",
    description: "En visning av samtida konstverk från lokala konstnärer.",
    arranger: "Stadens konstgalleri",
    thumbnail: "",
  },
  {
    title: "Musikfestival",
    description: "Tre dagar med livemusik från lokala och internationella artister.",
    arranger: "Musikevenemang AB",
    thumbnail: "",
  },
  {
    title: "Matmässa",
    description: "Upplev ett urval av kök från hela världen.",
    arranger: "Matälskare föreningen",
    thumbnail: "",
  },
  {
    title: "Teknikkonferens",
    description: "Utforska de senaste innovationerna och trenderna inom teknologi.",
    arranger: "Teknik Innovations AB",
    thumbnail: "",
  },
  {
    title: "Modevisning",
    description: "En glamorös uppvisning av de senaste modetrenderna.",
    arranger: "Mode Framåt AB",
    thumbnail: "",
  },
  {
    title: "Filmfestival",
    description: "Visningar av oberoende och internationella filmer.",
    arranger: "Bioföreningen",
    thumbnail: "",
  },
  {
    title: "Välgörenhetsgala",
    description:
      "Samla in pengar till lokala välgörenhetsändamål samtidigt som du njuter av en kväll med underhållning.",
    arranger: "Samhällets välgörenhetsstiftelse",
    thumbnail: "",
  },
  {
    title: "Litterärt symposium",
    description: "Diskussioner och läsningar av kända författare.",
    arranger: "Bokmalarnas förening",
    thumbnail: "",
  },
  {
    title: "Fitnessmässa",
    description: "Upptäck det senaste inom fitness trender och utrustning.",
    arranger: "FitLife Events",
    thumbnail: "",
  },
  {
    title: "Stand-up kväll",
    description: "Skratt garanterat med en kväll av komedi.",
    arranger: "Kvarterskomikerna",
    thumbnail: "",
  },
];

export function ScrollArea() {
  return (
    <ScrollAreaShad className="h-screen w-screen rounded-md border">
      <div className="p-4">
        {events.map((event, i) => (
          <EventCard key={i} />
        ))}
      </div>
    </ScrollAreaShad>
  );
}
