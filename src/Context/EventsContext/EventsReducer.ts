import { Event } from "@/types/eventTypes"
import { EventsActions } from "./EventsContext";
import { v4 as uuidv4 } from 'uuid';
export enum EVENT_ACTION {
    ADD ="ADD",
    ADD_COMMENT = "ADD_COMMENT"
}

export type EventsState = {
    event: Event[]
}

export const initialEventsState: EventsState = {
    event: [
        {
            id: uuidv4(),
            title: "Basketbollbonanza",
            description: "Kom och prova på basket! Alla är välkomna oavsett erfarenhetsnivå.",
            date: new Date('2024-06-15T10:00:00'),
            location: "Sporthallen, Stockholm",
            organizer: "Basketklubben",
            images: ["image1.jpg", "image2.jpg"]
        },
        {
            id: uuidv4(),
            title: "Sommarcupen",
            description: "En rolig och utmanande basketturnering för ungdomar.",
            date: new Date('2024-07-20T09:00:00'),
            location: "Uppsala Idrottshall",
            organizer: "Uppsala Basketförening",
            images: ["image3.jpg", "image4.jpg"]
        },
        {
            id: uuidv4(),
            title: "Basket för nybörjare",
            description: "Introduktion till basket för barn och unga som vill lära sig grunderna.",
            date: new Date('2024-05-30T14:00:00'),
            location: "Göteborgs Arena",
            organizer: "Göteborg Basket",
            images: ["image5.jpg", "image6.jpg"]
        },
        {
            id: uuidv4(),
            title: "3x3 Street Basket",
            description: "Delta i en spännande 3x3 street basket-turnering mitt i stan.",
            date: new Date('2024-08-12T16:00:00'),
            location: "Malmö Centrum",
            organizer: "Malmö Basket",
            images: ["image7.jpg", "image8.jpg"]
        },
        {
            id: uuidv4(),
            title: "Basketläger för tjejer",
            description: "Ett basketläger enbart för tjejer där vi fokuserar på teknik och lagspel.",
            date: new Date('2024-07-05T10:00:00'),
            location: "Lund Idrottshall",
            organizer: "Lunds Basketklubb",
            images: ["image9.jpg", "image10.jpg"]
        },
        {
            id: uuidv4(),
            title: "Vintercupen",
            description: "En basketturnering inomhus för alla åldersgrupper under vintern.",
            date: new Date('2024-12-10T09:00:00'),
            location: "Örebro Sportcenter",
            organizer: "Örebro Basket",
            images: ["image11.jpg", "image12.jpg"]
        },
        {
            id: uuidv4(),
            title: "Familjedag med basket",
            description: "En dag full av roliga basketaktiviteter för hela familjen.",
            date: new Date('2024-06-25T11:00:00'),
            location: "Linköpings Arena",
            organizer: "Linköpings Basketförening",
            images: ["image13.jpg", "image14.jpg"]
        },
        {
            id: uuidv4(),
            title: "Seniorbasket",
            description: "Träna och spela basket i en avslappnad miljö för seniorer.",
            date: new Date('2024-09-14T15:00:00'),
            location: "Västerås Sporthall",
            organizer: "Västerås Basketklubb",
            images: ["image15.jpg", "image16.jpg"]
        },
        {
            id: uuidv4(),
            title: "Prova på basket för vuxna",
            description: "En introduktion till basket för vuxna som vill prova på sporten.",
            date: new Date('2024-06-08T12:00:00'),
            location: "Helsingborg Idrottsplats",
            organizer: "Helsingborg Basket",
            images: ["image17.jpg", "image18.jpg"]
        },
        {
            id: uuidv4(),
            title: "Basketmaraton",
            description: "En hel dag med oavbruten basket för de riktigt passionerade.",
            date: new Date('2024-08-30T08:00:00'),
            location: "Karlstad Arena",
            organizer: "Karlstad Basketförening",
            images: ["image19.jpg", "image20.jpg"]
        }
    ]
};

export const eventsReducer = (eventsState: EventsState, action:EventsActions  ): EventsState => {
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
        case EVENT_ACTION.ADD_COMMENT:{
            const updatedEvents = eventsState.event.map((event) => {
                if(event.id === action.payload.event.id){const updatedComments = event.comments ? [...event.comments, { id: uuidv4(),name: "Sture", post: action.payload.comment }] : [{ id: uuidv4(),name:"Sture", post: action.payload.comment }];
                    return {
                        ...event,
                        comments: updatedComments
                    }
                };
                return event
            })
            return {...eventsState, event: updatedEvents}
        }

        
        default:
            return eventsState;
            
    }
}