import { EventsContext } from "@/Context/EventsContext/EventsContext";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function StartpageCarousel() {
  const { eventsState } = useContext(EventsContext);
  return (
    <Carousel className="mb-2">
      <h1 className="text-center py-2 font-bold text-2xl ">Populära events</h1>
      <CarouselContent>
        {eventsState.event.map((event, index) => (
          <Link to={`/event/${event.id}`}>
            <CarouselItem key={index} className="basis-1/2 ">
              <div className="flex items-center justify-center flex-col">
                <Card>
                  <CardContent className="flex items-center aspect-square  justify-between flex-col h-48 bg">
                    <img
                      src={event.images[0]}
                      alt={`${event.title} thumbnail`}
                      className="text-xs text-center rounded-lg  mt-2 max-h-32 "
                    />
                    <div className="w-full text-center">
                      <h1 className="text-m font-semibold">{event.title}</h1>
                      <h2 className=" text-sm font-thin">
                        {event.date.toDateString()}
                      </h2>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
