import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EventComment } from './EventComment';
import { Heart } from 'lucide-react';
import { useContext, useState, useEffect } from 'react';
import { EventsContext } from '@/Context/EventsContext/EventsContext';
import { ComingToEventButton } from './ComingToEventButton';
import { UserEventsContext } from '@/Context/UserEventsContext/UserEventsContext';
import { USER_EVENT_ACTION } from '@/Context/UserEventsContext/UserEventsReducer';
import { useParams } from 'react-router-dom';
import { Event } from '@/types/eventTypes';

const EventCard = () => {
   const { eventsState } = useContext(EventsContext);
   const { userEventsDispatch, userEventsState } = useContext(UserEventsContext);

   const params = useParams<{ id: string }>();

   const currentEvent: Event | undefined = eventsState.event.find((event) => event.id === params.id);

   const eventReaction = () => {
      if (currentEvent) {
         if (eventLiked) {
            userEventsDispatch({ type: USER_EVENT_ACTION.REMOVE_FAVORITE, payload: currentEvent });
         } else {
            userEventsDispatch({ type: USER_EVENT_ACTION.ADD_FAVORITE, payload: currentEvent });
         }
         setEventLiked(!eventLiked);
      }
   };

   const eventComing = () => {
      if (currentEvent) {
         if (eventAttending) {
            userEventsDispatch({ type: USER_EVENT_ACTION.REMOVE_ATTENDING, payload: currentEvent });
         } else {
            userEventsDispatch({ type: USER_EVENT_ACTION.ADD_ATTENDING, payload: currentEvent });
         }
         setEventAttending(!eventAttending);
      }
   };

   const currentEventLiked = currentEvent ? userEventsState.favorites.some((event) => event.id === currentEvent.id) : false;
   const currentEventAttending = currentEvent ? userEventsState.attending.some((event) => event.id === currentEvent.id) : false;

   const [eventLiked, setEventLiked] = useState<boolean>(currentEventLiked);
   const [eventAttending, setEventAttending] = useState<boolean>(currentEventAttending);

   useEffect(() => {
      setEventLiked(currentEventLiked);
      setEventAttending(currentEventAttending);
   }, [currentEventLiked, currentEventAttending]);

   return (
      currentEvent && (
         <Card>
            <CardContent className="flex flex-col h-screen bg-card-foreground">
               <CardHeader>
                  <CardTitle className="text-center">{currentEvent?.title}</CardTitle>
                  <picture className="w-full border-2 relative">
                     <img src="/test-picture.jpg" alt="event picture" className="w-full" />
                     <Heart className={`absolute scale-[200%] right-0 duration-700 ${eventLiked ? 'fill-red-400' : 'fill-gray-400'}`} onClick={eventReaction} />
                  </picture>
               </CardHeader>

               <div>
                  <div className="grid grid-cols-2 border-b-2 border-black">
                     <div className="h-12 flex items-center">
                        <p className="px-2 text-xl">Arranged by:</p>
                     </div>
                     <div className="h-12 flex items-center">
                        <p className="font-bold text-xl">{currentEvent.organizer}</p>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 border-b-2 border-black">
                     <div className="h-12 flex items-center">
                        <p className="px-2 text-xl">Event location:</p>
                     </div>
                     <div className="h-12 flex items-center">
                        <p className="font-bold text-l">{currentEvent.location}</p>
                     </div>
                  </div>
               </div>
               <CardDescription className="py-2 h-auto border-b-2 border-black">{currentEvent.description}</CardDescription>
               <EventComment />
               <div>
                  {currentEvent.comments?.map((comment, index) => (
                     <div key={index} id="comment">
                        <p className="w-full min-h-12 h-auto bg-slate-100 mt-4 border-[1px] border-gray-300 p-1">
                           {comment.post}
                           <span className="text-gray-400">- {comment.name}</span>
                        </p>
                     </div>
                  ))}
               </div>
               <div
                  className={`w-full h-12 flex justify-center items-center border-2 border-black font-bold duration-700 ${
                     eventAttending ? 'text-green-500 bg-slate-200' : 'text-gray-300 bg-slate-400'
                  }`}
                  onClick={eventComing}
               >
                  Coming
               </div>
            </CardContent>
         </Card>
      )
   );
};

export default EventCard;