import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EventComment } from "./EventComment";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const EventCard = () => {
  const [eventLiked, setEventLiked] = useState<boolean>(false);
  const eventReaction = () => {
    setEventLiked(!eventLiked);
    //dispatch to like it blalbalba
  };

  return (
    <Card>
      <CardContent className="flex flex-col h-screen bg-slate-200">
        <CardHeader>
          <CardTitle className="text-center">Basketbollbonanza</CardTitle>
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
              <p className="font-bold text-xl">Alma Appelqvist</p>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b-2 border-black">
            <div className="h-12 flex items-center">
              <p className=" px-2 text-xl">Event location: </p>
            </div>
            <div className="h-12 flex items-center">
              <p className="font-bold text-xl">Göteborg Stad</p>
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
        <div></div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
