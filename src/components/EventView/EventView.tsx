import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EventComment } from "./EventComment";
import { Heart } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { EventsContext } from "@/Context/EventsContext/EventsContext";
import { UserEventsContext } from "@/Context/UserEventsContext/UserEventsContext";
import { USER_EVENT_ACTION } from "@/Context/UserEventsContext/UserEventsReducer";
import { useParams } from "react-router-dom";
import { Event } from "@/types/eventTypes";
import { BsFillPeopleFill } from "react-icons/bs";

const EventCard = () => {
  const { eventsState } = useContext(EventsContext);
  const { userEventsDispatch, userEventsState } = useContext(UserEventsContext);

  const params = useParams<{ id: string }>();

  const currentEvent: Event | undefined = eventsState.event.find((event) => event.id === params.id);

  const eventReaction = () => {
    if (currentEvent) {
      if (eventLiked) {
        userEventsDispatch({
          type: USER_EVENT_ACTION.REMOVE_FAVORITE,
          payload: currentEvent,
        });
      } else {
        userEventsDispatch({
          type: USER_EVENT_ACTION.ADD_FAVORITE,
          payload: currentEvent,
        });
      }
      setEventLiked(!eventLiked);
    }
  };

  const eventComing = () => {
    if (currentEvent) {
      if (eventAttending) {
        userEventsDispatch({
          type: USER_EVENT_ACTION.REMOVE_ATTENDING,
          payload: currentEvent,
        });
      } else {
        userEventsDispatch({
          type: USER_EVENT_ACTION.ADD_ATTENDING,
          payload: currentEvent,
        });
      }
      setEventAttending(!eventAttending);
    }
  };

  const currentEventLiked = currentEvent
    ? userEventsState.favorites.some((event) => event.id === currentEvent.id)
    : false;
  const currentEventAttending = currentEvent
    ? userEventsState.attending.some((event) => event.id === currentEvent.id)
    : false;

  const [eventLiked, setEventLiked] = useState<boolean>(currentEventLiked);
  const [eventAttending, setEventAttending] = useState<boolean>(currentEventAttending);

  useEffect(() => {
    setEventLiked(currentEventLiked);
    setEventAttending(currentEventAttending);
  }, [currentEventLiked, currentEventAttending]);

  return (
    currentEvent && (
      <Card className="bg-primary w-screen h-screen">
        <CardHeader>
          <h1 className="text-white text-4xl font-bold tracking-wider text-center">{currentEvent.title}</h1>
          <h2 className="text-white text-center underline tracking-wider">{currentEvent.date.toDateString()}</h2>
        </CardHeader>
        <div className=" relative w-auto h-48 mx-8 bg-red-200 rounded-lg">
          <img src={`${currentEvent.images}`} alt="" />
          <Heart
            className={`absolute scale-[200%] right-0 translate-x-2 bottom-0 duration-700 ${
              eventLiked ? "fill-red-400" : "fill-gray-400"
            }`}
            onClick={eventReaction}
          />
          <div className="bg-slate-100 -translate-x-4 translate-y-2 w-auto gap-4 h-10 flex justify-between pr-2 pl-4 items-center rounded-full bottom-0  absolute">
            <BsFillPeopleFill className="scale-[200%]" />
            <p className="tracking-wider text-xl">{currentEvent.attendants}</p>
          </div>
        </div>
        <CardContent>
          <div className="bg-accent h-24 w-full mt-6 rounded-lg grid grid-rows-2 ">
            <div className="flex justify-between px-2 text-white font-thin items-center">
              <p>Organizer: </p>
              <p>{currentEvent.organizer}</p>
            </div>
            <div className="flex justify-between px-2 text-white font-thin items-center">
              <p>Location: </p>
              <p>{currentEvent.location}</p>
            </div>
          </div>
          <div className="bg-accent h-32 w-full mt-6 rounded-lg flex flex-col gap-0 pl-2 ">
            <h1 className="text-white underline underline-offset-2 text-xl font-bold tracking-wider h-8">Om eventet</h1>
            <p className="text-white tracking-wide">{currentEvent.description}</p>
          </div>
          <div className="bg-accent h-auto w-full mt-6 rounded-lg flex flex-col gap-0 pl-2 ">
            <h1 className="text-white underline underline-offset-2 text-xl font-bold tracking-wider h-8 mb-3">
              Kommentarer
            </h1>
            <EventComment currentEvent={currentEvent} />

            <div className="text-white tracking-wide flex gap-2 flex-col w-[97%] mt-6 mb-4">
              {currentEvent.comments?.map((comment) => {
                return (
                  <div className="bg-[#4E507A] rounded-l pl-2" key={comment.id}>
                    <p>{comment.post}</p>
                    <p className="underline font-bold text-sm mt-1 text-right pr-2">- {comment.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            onClick={eventComing}
            className={`mt-4 w-full h-16  rounded-full flex justify-center items-center duration-200 ${
              eventAttending ? "text-black bg-white " : "text-[#6B6B6B] bg-[#8C8C8C] border-2 border-black"
            }`}
          >
            <h1 className={`text-5xl tracking-widest font-thin `}>DELTA</h1>
          </div>
        </CardContent>
      </Card>
    )
  );
};

export default EventCard;
