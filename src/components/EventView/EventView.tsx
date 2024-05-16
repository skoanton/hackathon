import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EventComment } from "./EventComment";
import { Heart } from "lucide-react";
import { useContext, useState } from "react";
import { EventsContext } from "@/Context/EventsContext/EventsContext";
import { ComingToEventButton } from "./ComingToEventButton";

const EventCard = () => {
  const { eventsState, eventsDispatch } = useContext(EventsContext);

  const [eventLiked, setEventLiked] = useState<boolean>(false);

  const eventReaction = () => {
    setEventLiked(!eventLiked);
    //dispatch to like it blalbalba
  };

  const toggleComing = () => {};

  return (
    <Card>
      <CardContent className="flex flex-col h-screen bg-slate-200">
        <CardHeader>
          <CardTitle className="text-center">{eventsState.event[0].title}</CardTitle>
          <picture className="w-full border-2">
            <img src="/test-picture.jpg" alt="event picture" className="w-full" />
            <Heart
              className={`absolute scale-[200%] text-red-400 right-12 duration-700 ${
                eventLiked ? "fill-red-400" : "fill-gray-400 "
              }`}
              onClick={() => eventReaction()}
            />
          </picture>
        </CardHeader>

        <div>
          <div className="grid grid-cols-2 border-b-2 border-black">
            <div className="h-12 flex items-center">
              <p className=" px-2 text-xl">Arranged by: </p>
            </div>
            <div className="h-12 flex items-center">
              <p className="font-bold text-xl">{eventsState.event[0].organizer}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b-2 border-black">
            <div className="h-12 flex items-center">
              <p className=" px-2 text-xl">Event location: </p>
            </div>
            <div className="h-12 flex items-center">
              <p className="font-bold text-l ">{eventsState.event[0].location}</p>
            </div>
          </div>
        </div>
        <CardDescription className="py-2h-auto border-b-2 border-black">
          Basketbollbonanza baskebotllll bollar baskett wowwww basketbollar
        </CardDescription>
        <EventComment />
        <div>
          <div id="comment">
            <p className="w-full min-h-12 h-auto bg-slate-100 mt-4 border-[1px] border-gray-300 p-1">
              WOW basket är så skojjjjjjjjjjjjjjjjjjj :DD:D::D:D:D:D:D
              <p className=" text-gray-400">- Alma Appelqvist</p>
            </p>
          </div>
          <div id="comment">
            <p className="w-full min-h-12 h-auto bg-slate-100 mt-4 border-[1px] border-gray-300 p-1">
              WOW basket är så skojjjjjjjjjjjjjjjjjjj :DD:D::D:D:D:D:D
              <p className=" text-gray-400">- Alma Appelqvist</p>
            </p>
          </div>
          <div id="comment">
            <p className="w-full min-h-12 h-auto bg-slate-100 mt-4 border-[1px] border-gray-300 p-1">
              WOW basket är så skojjjjjjjjjjjjjjjjjjj :DD:D::D:D:D:D:D
              <p className=" text-gray-400">- Alma Appelqvist</p>
            </p>
          </div>
        </div>
        <div className="w-full text-center border-2 border-black" onClick={() => toggleComing()}>
          <ComingToEventButton className="w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
