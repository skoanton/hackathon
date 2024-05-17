import { UserEventsContext } from "@/Context/UserEventsContext/UserEventsContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Event } from "@/types/eventTypes";
import { Heart, UserCheck } from "lucide-react";
import { useContext } from "react";

type EventCardProps = {
  event: Event;
};

const EventCard = ({ event }: EventCardProps) => {
  const { userEventsState } = useContext(UserEventsContext);
  return (
    <>
      <Card>
        <CardContent className="flex justify-center items-center gap-5 p-2">
          <picture className="justify-self-center">
            <img
              src={event.images[0]}
              alt="event picture"
              className=" w-28 h-28 object-cover rounded-lg"
            />
          </picture>

          <div className="flex-grow">
            <CardTitle className="text-lg">
              {event.date.toDateString()}
            </CardTitle>
            <p className="font-bold text-l">{event.title}</p>
            <CardDescription className="text-black">
              {event.organizer}
            </CardDescription>
            <div className="flex gap-2 items-center">
              <div className="flex w-2/4 gap-2">
                <UserCheck className="w-5 h-5" />
                <p className="font-semibold">{event.attendants} kommer</p>
              </div>
              <Heart
                className={`w-5 h-5 ${
                  userEventsState.favorites.some((ev) => ev.id === event.id)
                    ? "fill-red-500"
                    : "fill-none"
                }`}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default EventCard;
