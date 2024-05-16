import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { events } from "../Scrollarea/Scrollarea";

export function StartpageCarousel() {
  return (
    <Carousel>
      <h1 className="text-center py-2 font-bold text-xl underline">Popular upcoming events</h1>
      <CarouselContent>
        {events.map((event, index) => (
          <CarouselItem key={index} className="basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-between flex-col h-48 border-2 border-black">
                  <img
                    src={event.thumbnail}
                    alt={`${event.title} thumbnail`}
                    className="text-xs text-center min-h-32 border-2 border-black"
                  />
                  <div className="w-full text-center">
                    <h1 className="text-m font-semibold">{event.title}</h1>
                    <h2 className=" text-sm font-thin">{event.arranger}</h2>
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
