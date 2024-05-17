import { EventsContext } from '@/Context/EventsContext/EventsContext';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useContext } from 'react';

export function StartpageCarousel() {
   const { eventsState } = useContext(EventsContext);
   return (
      <Carousel>
         <h1 className="text-center py-2 font-bold text-xl underline">Popular upcoming events</h1>
         <CarouselContent>
            {eventsState.event.map((event, index) => (
               <CarouselItem key={index} className="sm:basis-1/2 basis-1/3">
                  <div className="p-1">
                     <Card>
                        <CardContent className="flex items-center aspect-square  justify-between flex-col h-48">
                           <img src={event.images[0]} alt={`${event.title} thumbnail`} className="text-xs text-center min-h-32 " />
                           <div className="w-full text-center">
                              <h1 className="text-m font-semibold">{event.title}</h1>
                              <h2 className=" text-sm font-thin">{event.date.toDateString()}</h2>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </CarouselItem>
            ))}
         </CarouselContent>
      </Carousel>
   );
}
