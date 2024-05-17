import { Event } from '@/types/eventTypes';
import { EventsActions } from './EventsContext';
import { v4 as uuidv4 } from 'uuid';
export enum EVENT_ACTION {
   ADD = 'ADD',
   ADD_COMMENT = 'ADD_COMMENT',
}

export type EventsState = {
   event: Event[];
};

export const initialEventsState: EventsState = {
   event: [
      {
         id: uuidv4(),
         title: 'Basketbollbonanza',
         description: 'Kom och prova på basket! Alla är välkomna oavsett erfarenhetsnivå.',
         date: new Date('2024-06-15T10:00:00'),
         location: 'Sporthallen, Stockholm',
         organizer: 'Basketklubben',
         images: ['/image-0.jpg'],
         attendants: Math.floor(Math.random() * 1000) + 1,
      },
      {
         id: uuidv4(),
         title: 'Sommarcupen',
         description: 'En rolig och utmanande basketturnering för ungdomar.',
         date: new Date('2024-07-20T09:00:00'),
         location: 'Uppsala Idrottshall',
         organizer: 'Uppsala Basketförening',
         images: ['/image-1.jpg'],
         attendants: Math.floor(Math.random() * 1000) + 1,
      },
      {
         id: uuidv4(),
         title: 'Yoga i parken',
         description: 'Kom och var med på en avslappnande yogaklass i det gröna.',
         date: new Date('2024-05-30T14:00:00'),
         location: 'Göteborgs Stadspark',
         organizer: 'Göteborg Yoga Club',
         images: ['/image-2.jpg'],
         attendants: Math.floor(Math.random() * 1000) + 1,
      },
      {
         id: uuidv4(),
         title: '3x3 Street Basket',
         description: 'Delta i en spännande 3x3 street basket-turnering mitt i stan.',
         date: new Date('2024-08-12T16:00:00'),
         location: 'Malmö Centrum',
         organizer: 'Malmö Basket',
         images: ['/image-3.jpg'],
         attendants: Math.floor(Math.random() * 1000) + 1,
      },
      {
         id: uuidv4(),
         title: 'Löpning för alla',
         description: 'En gemensam löprunda för alla nivåer, från nybörjare till proffs.',
         date: new Date('2024-07-05T10:00:00'),
         location: 'Lund Stadion',
         organizer: 'Lunds Löpklubb',
         images: ['/image-4.jpg'],
         attendants: Math.floor(Math.random() * 1000) + 1,
      },
      {
         id: uuidv4(),
         title: 'Vintercupen',
         description: 'En basketturnering inomhus för alla åldersgrupper under vintern.',
         date: new Date('2024-12-10T09:00:00'),
         location: 'Örebro Sportcenter',
         organizer: 'Örebro Basket',
         images: ['/image-5.jpg'],
         attendants: Math.floor(Math.random() * 1000) + 1,
      },
      {
         id: uuidv4(),
         title: 'Familjedag med basket',
         description: 'En dag full av roliga basketaktiviteter för hela familjen.',
         date: new Date('2024-06-25T11:00:00'),
         location: 'Linköpings Arena',
         organizer: 'Linköpings Basketförening',
         images: ['/image-6.jpg'],
         attendants: Math.floor(Math.random() * 1000) + 1,
      },
      {
         id: uuidv4(),
         title: 'Seniorbasket',
         description: 'Träna och spela basket i en avslappnad miljö för seniorer.',
         date: new Date('2024-09-14T15:00:00'),
         location: 'Västerås Sporthall',
         organizer: 'Västerås Basketklubb',
         images: ['/image-7.jpg'],
         attendants: Math.floor(Math.random() * 1000) + 1,
      },
      {
         id: uuidv4(),
         title: 'Prova på basket för vuxna',
         description: 'En introduktion till basket för vuxna som vill prova på sporten.',
         date: new Date('2024-06-08T12:00:00'),
         location: 'Helsingborg Idrottsplats',
         organizer: 'Helsingborg Basket',
         images: ['/image-8.jpg'],
         attendants: Math.floor(Math.random() * 1000) + 1,
      },
      {
         id: uuidv4(),
         title: 'Basketmaraton',
         description: 'En hel dag med oavbruten basket för de riktigt passionerade.',
         date: new Date('2024-08-30T08:00:00'),
         location: 'Karlstad Arena',
         organizer: 'Karlstad Basketförening',
         images: ['/image-9.jpg'],
         attendants: Math.floor(Math.random() * 1000) + 1,
      },
   ],
};

export const eventsReducer = (eventsState: EventsState, action: EventsActions): EventsState => {
   switch (action.type) {
      case EVENT_ACTION.ADD:
         if (eventsState.event.every((ev) => ev.id !== action.payload.id)) {
            return {
               ...eventsState,
               event: [...eventsState.event, action.payload],
            };
         } else {
            return eventsState;
         }
      case EVENT_ACTION.ADD_COMMENT: {
         const updatedEvents = eventsState.event.map((event) => {
            if (event.id === action.payload.event.id) {
               const updatedComments = event.comments
                  ? [...event.comments, { id: uuidv4(), name: 'Sture', post: action.payload.comment }]
                  : [{ id: uuidv4(), name: 'Sture', post: action.payload.comment }];
               return {
                  ...event,
                  comments: updatedComments,
               };
            }
            return event;
         });
         return { ...eventsState, event: updatedEvents };
      }

      default:
         return eventsState;
   }
};
