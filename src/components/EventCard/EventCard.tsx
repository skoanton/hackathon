import { UserEventsContext } from '@/Context/UserEventsContext/UserEventsContext';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Event } from '@/types/eventTypes';
import { Heart, UserCheck } from 'lucide-react';
import { useContext } from 'react';

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
                  <img src="/test-picture.jpg" alt="event picture" className=" w-28 h-28 object-cover" />
               </picture>

               <div className="flex-grow">
                  <CardTitle className="text-lg">{event.date.toDateString()}</CardTitle>
                  <p className="font-bold">{event.title}</p>
                  <CardDescription>{event.organizer}</CardDescription>
                  <div className="flex gap-2 items-center">
                     <div className="flex w-2/4">
                        <UserCheck className="w-5 h-5" />
                        <p className="font-semibold">{event.attendants} kommer</p>
                     </div>
                     <Heart className={`w-5 h-5 ${userEventsState.favorites.some((ev) => ev.id === event.id) ? 'fill-red-500' : 'bg-transparent'}`} />
                  </div>
               </div>
            </CardContent>
         </Card>
      </>
   );
};

export default EventCard;
