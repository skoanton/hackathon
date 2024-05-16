import { ScrollAreaShad } from '../ui/scroll-area';

//fake data temp
const events = [
   {
      title: 'Maraton',
      description: 'En löpartävling genom stadens gator.',
      arranger: 'Borås stad',
   },
   {
      title: 'Konstutställning',
      description: 'En visning av samtida konstverk från lokala konstnärer.',
      arranger: 'Stadens konstgalleri',
   },
   {
      title: 'Musikfestival',
      description: 'Tre dagar med livemusik från lokala och internationella artister.',
      arranger: 'Musikevenemang AB',
   },
   {
      title: 'Matmässa',
      description: 'Upplev ett urval av kök från hela världen.',
      arranger: 'Matälskare föreningen',
   },
   {
      title: 'Teknikkonferens',
      description: 'Utforska de senaste innovationerna och trenderna inom teknologi.',
      arranger: 'Teknik Innovations AB',
   },
   {
      title: 'Modevisning',
      description: 'En glamorös uppvisning av de senaste modetrenderna.',
      arranger: 'Mode Framåt AB',
   },
   {
      title: 'Filmfestival',
      description: 'Visningar av oberoende och internationella filmer.',
      arranger: 'Bioföreningen',
   },
   {
      title: 'Välgörenhetsgala',
      description: 'Samla in pengar till lokala välgörenhetsändamål samtidigt som du njuter av en kväll med underhållning.',
      arranger: 'Samhällets välgörenhetsstiftelse',
   },
   {
      title: 'Litterärt symposium',
      description: 'Diskussioner och läsningar av kända författare.',
      arranger: 'Bokmalarnas förening',
   },
   {
      title: 'Fitnessmässa',
      description: 'Upptäck det senaste inom fitness trender och utrustning.',
      arranger: 'FitLife Events',
   },
   {
      title: 'Stand-up kväll',
      description: 'Skratt garanterat med en kväll av komedi.',
      arranger: 'Kvarterskomikerna',
   },
   {
      title: 'Fitnessmässa',
      description: 'Upptäck det senaste inom fitness trender och utrustning.',
      arranger: 'FitLife Events',
   },
];

export function ScrollArea() {
   return (
      <ScrollAreaShad className=" h-52 rounded-md border">
         <div className="">
            {events.map((event, i) => (
               <div key={i} className="text-sm border-2 border-black h-24 bg-red-200 flex gap-2 mb-2">
                  <img src={event.title} alt={`${event.title}-thumbnail`} className="w-28 h-full max-w-28 min-w-28 bg-blue-200" />
                  <div id="event-info">
                     <h1 className="font-bold text-2xl">{event.title}</h1>
                  </div>
               </div>
            ))}
         </div>
      </ScrollAreaShad>
   );
}
