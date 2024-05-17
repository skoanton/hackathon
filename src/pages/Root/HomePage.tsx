import { EventsContext } from '@/Context/EventsContext/EventsContext';
import { ScrollArea } from '@/components/Scrollarea/Scrollarea';
import { StartpageCarousel } from '@/components/Carousel/Carousel';
import { useContext } from 'react';
type HomePage = {};

export const HomePage: React.FC<HomePage> = () => {
   const { eventsState } = useContext(EventsContext);
   return (
      <section>
         <StartpageCarousel />
         <ScrollArea currentEventState={eventsState.event} />
      </section>
   );
};
